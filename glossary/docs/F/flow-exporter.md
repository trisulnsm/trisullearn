---
title: What is a flow exporter?
description: A flow exporter is a network device or software component that observes packets, groups them into flows, and sends summarized flow records to a collector using a standard export protocol such as NetFlow, IPFIX, or sFlow.
sidebar_label: Flow exporter
sidebar_position: 10
slug: /glossary/flow-exporter
keywords:
  - flow exporter
  - netflow exporter
  - ipfix exporter
  - sflow exporter
  - flow export
  - netflow data export
  - flow collector
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a flow exporter and a flow collector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow exporter generates flow records from observed traffic and sends them over the network. A flow collector receives those records, parses them, and stores them for analysis. On a Cisco router, the device itself is the exporter. Trisul is the collector. A single collector typically receives records from many exporters across the network simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "Can a single flow exporter send to multiple collectors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most exporter implementations support multiple export destinations. On Cisco Flexible NetFlow, each destination requires a separately defined flow exporter object assigned to the same flow monitor. This is commonly used to send records to both a primary collector and a secondary one for redundancy, or to split traffic between a network operations collector and a security analytics platform."
      }
    },
    {
      "@type": "Question",
      "name": "What export protocol should a flow exporter use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPFIX is the IETF standard and the recommended choice for new deployments. It supports flexible, template-based field definitions that allow exporters to include extended metadata such as application IDs, VLAN tags, MPLS labels, and TLS handshake fields. NetFlow v9 is widely supported and functionally similar. NetFlow v5 is fixed-format and limited to IPv4; it is still common on older hardware but cannot carry the extended fields that modern monitoring and security use cases require."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when a flow exporter drops records?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow export competes with forwarding resources on the device, particularly the flow cache and CPU cycles used to maintain and flush cache entries. Under heavy traffic, exporters can drop records silently without notifying the collector. The collector has no way to distinguish a gap caused by export drops from a period of low traffic. Monitoring exporter drop counters on the device itself is necessary to validate that the collector is receiving a complete record stream."
      }
    }
  ]
};

# What is a flow exporter?

A flow exporter is a network device or software component that observes packets as they are forwarded, groups them into flows by 5-tuple, and sends summarized flow records to a collector using a standard protocol such as NetFlow, IPFIX, or sFlow. Routers and switches are the most common exporters; dedicated software probes serve as exporters where hardware-based export is unavailable or where unsampled collection is required. The exporter is the origin of all flow telemetry in a monitoring deployment.

---

## How a flow exporter works

As packets arrive on an interface, the exporter inspects their headers and looks up the corresponding flow entry in a local cache. If no entry exists, a new one is created. Packet and byte counts are accumulated against the matching entry until a timeout fires or a TCP FIN or RST is observed, at which point the entry is flushed and the record is sent to the configured collector destination over UDP.

The export format is defined by a template. In NetFlow v9 and IPFIX, the exporter first sends a template record describing the fields in each data record. The collector uses this template to parse incoming data. This template mechanism allows exporters to carry extended fields beyond the basic 5-tuple, including interface identifiers, BGP AS numbers, VLAN tags, and application metadata, without requiring a fixed record format on the collector.

Each exporter destination is configured independently. A single flow monitor can be assigned multiple exporters, sending the same records to different collector addresses simultaneously.

---

## Flow exporters in network operations

In practice, every router and switch in a network capable of NetFlow or sFlow is a potential exporter. Enabling export on all devices provides topology-wide flow visibility without dedicated capture hardware. The tradeoff is that flows traversing multiple exporting devices generate duplicate legs at the collector, requiring deduplication before reporting.

Hardware exporters on routers and switches typically apply sampling above a certain traffic rate to protect forwarding performance. Purpose-built software probes used as exporters can generate IPFIX records directly from raw packet capture, providing complete unsampled flow data on monitored links regardless of the capabilities of the upstream network devices.

Export reliability is a practical concern. UDP transport means the collector has no acknowledgment mechanism. Records lost between the exporter and collector are gone; the collector cannot request retransmission. Deployments that require high fidelity for compliance or forensic purposes should keep the exporter-to-collector path short and low-latency, and should monitor exporter drop counters directly on the device.

---

## Flow exporter vs flow probe

| Dimension | Hardware flow exporter | Dedicated flow probe |
|---|---|---|
| Where it runs | Router or switch forwarding hardware | Standalone server or appliance on a TAP or SPAN |
| Sampling | Often required above moderate traffic rates | Unsampled at line rate using kernel-bypass capture |
| Extended fields | Platform-dependent; varies by hardware and software version | Full IPFIX field set available including packet-derived metadata |
| Deployment cost | No additional hardware; uses existing infrastructure | Additional hardware or server required per observation point |
| Best fit | Topology-wide coverage, capacity planning, trending | Security monitoring, forensics, compliance |

Hardware exporters and probes are complementary. Routers and switches provide broad coverage; probes provide depth at specific high-value observation points where unsampled, full-field export is required.

---

## How Trisul handles flow exporters

Trisul acts as the collector in a flow monitoring deployment. It auto-discovers exporters when the first flow records arrive, creating device and interface entries without manual configuration. NetFlow v1, v5, v9, Flexible NetFlow, IPFIX, and all sFlow versions are supported. Multiple exporters across the topology can send to a single Trisul instance simultaneously.

For observation points where hardware exporters are insufficient, Trisul can act as a software probe, generating IPFIX records directly from raw packets captured via PF_RING or AF_PACKET. This provides unsampled, complete flow export on monitored links and removes the dependency on the network device's flow export capability. Full NetFlow and exporter setup documentation is at https://docs.trisul.org/docs/ug/netflow/.

---

## Related terms

- [What is a flow?](/glossary/flow)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is NetFlow?](/glossary/netflow)
- [What is IPFIX?](/glossary/ipfix)
- [What is sFlow?](/glossary/sflow)
- [What is flow sampling?](/glossary/flow-sampling)
- [What is flow legs?](/glossary/flow-legs)

---

## Frequently asked questions

### What is the difference between a flow exporter and a flow collector?

A flow exporter generates flow records from observed traffic and sends them over the network. A flow collector receives those records, parses them, and stores them for analysis. On a Cisco router, the device itself is the exporter. Trisul is the collector. A single collector typically receives records from many exporters across the network simultaneously.

### Can a single flow exporter send to multiple collectors?

Yes. Most exporter implementations support multiple export destinations. On Cisco Flexible NetFlow, each destination requires a separately defined flow exporter object assigned to the same flow monitor. This is commonly used to send records to both a primary collector and a secondary one for redundancy, or to split traffic between a network operations collector and a security analytics platform.

### What export protocol should a flow exporter use?

IPFIX is the IETF standard and the recommended choice for new deployments. It supports flexible, template-based field definitions that allow exporters to include extended metadata such as application IDs, VLAN tags, MPLS labels, and TLS handshake fields. NetFlow v9 is widely supported and functionally similar. NetFlow v5 is fixed-format and limited to IPv4; it is still common on older hardware but cannot carry the extended fields that modern monitoring and security use cases require.

### What happens when a flow exporter drops records?

Flow export competes with forwarding resources on the device, particularly the flow cache and CPU cycles used to maintain and flush cache entries. Under heavy traffic, exporters can drop records silently without notifying the collector. The collector has no way to distinguish a gap caused by export drops from a period of low traffic. Monitoring exporter drop counters on the device itself is necessary to validate that the collector is receiving a complete record stream.