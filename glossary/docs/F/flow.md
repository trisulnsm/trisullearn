---
title: What is a flow?
description: A network flow is a sequence of packets sharing a common 5-tuple — source IP, destination IP, source port, destination port, and protocol — treated as a single unit of traffic for monitoring and analysis.
sidebar_label: Flow
sidebar_position: 2
slug: /glossary/flow
keywords:
  - network flow
  - flow monitoring
  - 5-tuple
  - traffic flow
  - flow record
  - flow analysis
  - packet flow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a flow and a packet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A packet is a single unit of data on the wire. A flow is a logical grouping of packets that share the same 5-tuple. A single HTTP session might consist of thousands of packets, but it is one flow. Monitoring tools work at the flow level because it gives you a manageable, conversation-level view of what is happening on the network without processing every individual packet in isolation."
      }
    },
    {
      "@type": "Question",
      "name": "How is a flow different from a session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow is unidirectional by definition: it tracks packets from source A to destination B. A session is the full bidirectional exchange, combining the two opposing flows. NetFlow and IPFIX exporters typically emit separate flow records for each direction. Some monitoring platforms stitch these into a single bidirectional session record for analysis; others store and query them separately."
      }
    },
    {
      "@type": "Question",
      "name": "When does a flow end?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For TCP flows, termination is typically triggered by a FIN or RST flag. For UDP and other stateless protocols, exporters rely on an idle timeout, commonly 15 to 30 seconds, and an active timeout for long-running flows, typically 1 to 30 minutes. These timeout values are configurable on most exporters and directly affect how flow records are split and counted in your collector."
      }
    },
    {
      "@type": "Question",
      "name": "What information does a flow record contain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A basic flow record includes the 5-tuple, start and end timestamps, byte and packet counts, and TCP flags. Extended formats like IPFIX can carry additional fields: ingress and egress interface, BGP AS numbers, VLAN IDs, MPLS labels, and application IDs. What fields are exported depends on the exporter platform and the configured template."
      }
    },
    {
      "@type": "Question",
      "name": "Can flow data detect encrypted threats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow data does not provide payload visibility into encrypted sessions. What it can reveal is behavioral anomalies: unusual destinations, abnormal transfer volumes, unexpected port usage, and connection patterns inconsistent with normal baselines. TLS metadata visible in flow records, such as destination IP and port, connection duration, and byte ratios, can support detection even without decrypting the payload."
      }
    },
    {
      "@type": "Question",
      "name": "What is flow sampling and what does it affect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow sampling exports only a fraction of observed flows, typically 1 in every N packets or flows, to reduce exporter and collector load at high speeds. The tradeoff is statistical accuracy: short flows and low-volume events are frequently missed. An attack that generates a small number of packets, a port scan, a targeted exfiltration over a slow channel, may not appear in sampled data at all. Unsampled flow collection is necessary where completeness matters for security investigations."
      }
    }
  ]
};

# What is a flow?

A network flow is a sequence of packets that share the same 5-tuple: source IP address, destination IP address, source port, destination port, and IP protocol. Every packet belonging to the same conversation between two endpoints is grouped into a single flow record. Routers, switches, and probes observe these packets at defined points in the network and export flow records to a collector for storage and analysis.

---

## How a flow works

As packets traverse a network device configured for flow export, the device inspects the 5-tuple of each packet. Packets matching an existing 5-tuple are counted against that flow. New 5-tuples create a new flow entry in the device's flow cache.

Flow records are exported to a collector when a flow ends or when a timeout fires. For TCP, a FIN or RST triggers export. For UDP and other stateless protocols, idle and active timers determine when the record is flushed. The exported record carries the 5-tuple, byte and packet counts, start and end timestamps, and any additional fields the exporter is configured to include.

The flow record itself contains no payload. It is a summary of the conversation: who talked, when, for how long, and how much data was exchanged.

---

## Flows in network operations

Flow data is the primary visibility mechanism in most enterprise and ISP networks. It requires no dedicated capture hardware; existing routers and switches export it natively via NetFlow, IPFIX, or sFlow. This makes it practical to deploy across large, distributed networks where full packet capture is not feasible at every point.

In security operations, flow records underpin detection use cases that do not require payload: identifying connections to known malicious IPs, detecting internal hosts scanning the network, spotting long-duration beaconing sessions, or flagging unusually large data transfers. These patterns are visible in flow metadata even when the session itself is encrypted.

In network operations, flows are the foundation for bandwidth trending, application traffic analysis, and capacity planning. Engineers use per-flow data to identify top talkers, trace the path of specific traffic, and investigate interface saturation without needing packet-level detail.

---

## Flow vs full packet capture

| Dimension | Flow record | Full packet capture |
|---|---|---|
| What it stores | 5-tuple, byte counts, timestamps, flags | Complete packet including payload |
| Payload visibility | None | Full, subject to encryption |
| Storage footprint | Very low, approximately 1 to 2% of PCAP volume | Very high, scales with wire speed |
| Retention period | Weeks to months | Hours to days at full fidelity |
| Encrypted traffic | Metadata and behavioral patterns only | Headers visible; payload is ciphertext |
| Best fit | Detection, trending, capacity planning | Forensic investigation, incident confirmation |

Flow and PCAP are complementary. Flow data gives you long retention and breadth of coverage; PCAP gives you the depth needed to confirm and investigate. Most SOC deployments use flow data for triage and pivot to PCAP for evidence.

---

## How Trisul handles flows

Trisul stores a record of every flow without summarization or rollup. Flows can be ingested from NetFlow, IPFIX, or sFlow exporters, or reconstructed directly from raw packets. The flow database is designed to handle billions of flow records per day while maintaining fast query response times across large time ranges.

Flow Taggers allow operators to attach searchable text labels to flow records in real time based on matching rules, making it possible to classify and retrieve flows by business context, not just by IP and port. Flow Trackers apply streaming Top-K analysis to identify flows matching defined conditions, such as elephant flows, long-duration sessions, or high-volume transfers, as they occur. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is NetFlow?](/docs/glossary/netflow)
- [What is IPFIX?](/docs/glossary/ipfix)
- [What is sFlow?](/docs/glossary/sflow)
- [What is full packet capture?](/docs/glossary/full-packet-capture)
- [What is flow tagger?](/docs/glossary/flow-tagger)
- [What is flow tracker?](/docs/glossary/flow-tracker)
- [What is flow sampling?](/docs/glossary/flow-sampling)
- [What is network security monitoring?](/docs/glossary/network-security-monitoring)

---

## Frequently asked questions

### What is the difference between a flow and a packet?

A packet is a single unit of data on the wire. A flow is a logical grouping of packets that share the same 5-tuple. A single HTTP session might consist of thousands of packets, but it is one flow. Monitoring tools work at the flow level because it gives you a manageable, conversation-level view of what is happening on the network without processing every individual packet in isolation.

### How is a flow different from a session?

A flow is unidirectional by definition: it tracks packets from source A to destination B. A session is the full bidirectional exchange, combining the two opposing flows. NetFlow and IPFIX exporters typically emit separate flow records for each direction. Some monitoring platforms stitch these into a single bidirectional session record for analysis; others store and query them separately.

### When does a flow end?

For TCP flows, termination is typically triggered by a FIN or RST flag. For UDP and other stateless protocols, exporters rely on an idle timeout, commonly 15 to 30 seconds, and an active timeout for long-running flows, typically 1 to 30 minutes. These timeout values are configurable on most exporters and directly affect how flow records are split and counted in your collector.

### What information does a flow record contain?

A basic flow record includes the 5-tuple, start and end timestamps, byte and packet counts, and TCP flags. Extended formats like IPFIX can carry additional fields: ingress and egress interface, BGP AS numbers, VLAN IDs, MPLS labels, and application IDs. What fields are exported depends on the exporter platform and the configured template.

### Can flow data detect encrypted threats?

Flow data does not provide payload visibility into encrypted sessions. What it can reveal is behavioral anomalies: unusual destinations, abnormal transfer volumes, unexpected port usage, and connection patterns inconsistent with normal baselines. TLS metadata visible in flow records, such as destination IP and port, connection duration, and byte ratios, can support detection even without decrypting the payload.

### What is flow sampling and what does it affect?

Flow sampling exports only a fraction of observed flows, typically 1 in every N packets or flows, to reduce exporter and collector load at high speeds. The tradeoff is statistical accuracy: short flows and low-volume events are frequently missed. An attack that generates a small number of packets, such as a port scan or a targeted exfiltration over a slow channel, may not appear in sampled data at all. Unsampled flow collection is necessary where completeness matters for security investigations.