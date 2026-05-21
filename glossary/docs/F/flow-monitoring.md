---
title: What is flow monitoring?
description: Flow monitoring is the practice of collecting, storing, and analyzing flow records exported by network devices to gain continuous visibility into traffic behavior, bandwidth usage, and network security events.
sidebar_label: Flow monitoring
sidebar_position: 7
slug: /glossary/flow-monitoring
keywords:
  - flow monitoring
  - network flow monitoring
  - netflow monitoring
  - ipfix monitoring
  - sflow monitoring
  - traffic flow analysis
  - flow telemetry
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between flow monitoring and packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring works from summarized conversation records: who talked to whom, when, and how much data moved. Packet capture records the full content of every packet including the payload. Flow monitoring scales to 100 Gbps with standard router hardware; packet capture at those speeds requires dedicated infrastructure. The two are complementary: flow monitoring for coverage and retention, packet capture for investigation and confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Can flow monitoring detect threats in encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring cannot see inside encrypted payloads, but it can detect behavioral anomalies that encryption does not hide. Unusual destination IPs, abnormal transfer volumes, long-duration outbound connections, and patterns inconsistent with normal baselines are all visible in flow metadata. Extended IPFIX exports on some platforms also include TLS handshake fields such as SNI and JA3 fingerprints, adding context without requiring decryption."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow monitoring scale to large networks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow records are small, typically 50 to 100 bytes each, compared to kilobytes or more per packet. A 10 Gbps link generates a manageable stream of tens of thousands of flow records per second rather than the millions of packets that full capture would require. This is why flow monitoring is the standard visibility mechanism at ISP and large enterprise scale."
      }
    },
    {
      "@type": "Question",
      "name": "What is multi-hop flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-hop flow monitoring collects flow telemetry from multiple observation points and correlates flows that traverse more than one device. This lets operators track a conversation across the network topology, compare volumes at different hops, and identify where in the path traffic changes character. It is useful for verifying routing policy, detecting asymmetry, and tracing specific hosts across a large network."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to flow monitoring accuracy when devices use sampling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampled flow data introduces statistical error proportional to the sampling rate. High-volume flows scale accurately; short-lived or low-volume flows may not be captured at all. Volume totals are estimates derived by multiplying observed counts by the inverse of the sampling rate. For security detection, events that generate only a small number of packets, such as targeted scans or slow beaconing, are likely to be missed in coarsely sampled data."
      }
    }
  ]
};

# What is flow monitoring?

Flow monitoring is the practice of collecting, storing, and analyzing flow records exported by routers, switches, and probes to gain continuous visibility into network traffic. Each record summarizes a conversation: the 5-tuple, timestamps, byte and packet counts, and protocol flags. Flow monitoring does not capture packet payloads. That constraint is also its main advantage: flow records are small, scalable, and exportable from existing infrastructure at link speeds where full packet capture is not practical.

---

## How flow monitoring works

Network devices observe packets as they are forwarded, group them into flows by 5-tuple, and send summarized records to a collector. The export format depends on the platform: NetFlow v5 and v9 from Cisco devices, IPFIX as the IETF-standardized successor, and sFlow for packet-sampled telemetry. The collector parses incoming records, handles deduplication and flow stitching, applies sampling multipliers, and stores the data for querying.

Flow records are retained for weeks to months at most deployments. A 10 Gbps link at moderate utilization generates a few gigabytes of flow data per day, compared to tens of terabytes for equivalent full packet capture.

---

## Flow monitoring in network operations

NOC teams use flow monitoring for bandwidth trending, interface utilization, and identifying top talkers. Because routers and switches export natively, it provides topology-wide coverage without dedicated capture hardware at every point.

SOC teams use it to detect network-based threats that do not require payload inspection: connections to known malicious destinations, internal hosts scanning other subnets, large unexpected transfers, and long-duration outbound sessions. Because flow data is retained for weeks, analysts can also query historical records when a new indicator of compromise surfaces.

ISPs use flow monitoring for traffic engineering, peering analysis, and regulatory compliance. Per-prefix and per-AS flow data drives route optimization and peering capacity decisions.

---

## Flow monitoring vs packet-based monitoring

| Dimension | Flow monitoring | Packet-based monitoring |
|---|---|---|
| What it captures | Conversation metadata: 5-tuple, counts, timestamps | Full packet including payload |
| Payload visibility | None | Full, subject to encryption |
| Storage requirement | Gigabytes per day at 10 Gbps | Tens of terabytes per day at 10 Gbps |
| Retention period | Weeks to months | Hours to days at full fidelity |
| Infrastructure needed | Existing routers and switches | Dedicated capture probes or taps |
| Best fit | Trending, detection, compliance | Forensic investigation, incident confirmation |

The two are complementary. Most mature deployments combine topology-wide flow monitoring with targeted packet capture at security perimeters.

---

## What makes flow monitoring work in practice

Collector accuracy underpins everything downstream. A collector that drops records under load, misapplies sampling multipliers, or fails to stitch bidirectional flows produces reports that are subtly wrong and difficult to validate. Testing collector behavior against known baselines during deployment is necessary, not optional.

Exporter coverage across the topology matters as much as collector quality. A core switch not configured to export, or a newly provisioned router not yet onboarded, creates blind spots that dashboards will not surface until an investigation reveals missing traffic.

Flow data is metadata, and its investigative value stops there. Flow monitoring can tell you a host made 400 outbound connections in 10 minutes; it cannot tell you what those connections contained. Workflows that use flow data alone for incident confirmation are operating outside what the data can support.

---

## How Trisul handles flow monitoring

Trisul accepts NetFlow v1, v5, v9, Flexible NetFlow, IPFIX, and all sFlow versions. Routers and interfaces are auto-discovered when the first records arrive. The Routers and Interfaces tool lets operators drill from a device down to its interfaces and then into hosts, applications, and flows on that interface without constructing manual queries.

Every flow record is stored without rollup or summarization, preserving full resolution for historical queries within the retention window. For links where device-level NetFlow coverage has gaps, Trisul can generate IPFIX records directly from raw packet capture, providing complete unsampled flow visibility even where the network device does not export flow telemetry. Full setup documentation is at https://docs.trisul.org/docs/ug/netflow/.

---

## Related terms

- [What is a flow?](/docs/glossary/flow)
- [What is NetFlow?](/docs/glossary/netflow)
- [What is IPFIX?](/docs/glossary/ipfix)
- [What is sFlow?](/docs/glossary/sflow)
- [What is flow sampling?](/docs/glossary/flow-sampling)
- [What is flow stitching?](/docs/glossary/flow-stitching)
- [What is flow tagger?](/docs/glossary/flow-tagger)
- [What is full packet capture?](/docs/glossary/full-packet-capture)

---

## Frequently asked questions

### What is the difference between flow monitoring and packet capture?

Flow monitoring works from summarized conversation records: who talked to whom, when, and how much data moved. Packet capture records the full content of every packet including the payload. Flow monitoring scales to 100 Gbps with standard router hardware; packet capture at those speeds requires dedicated infrastructure. The two are complementary: flow monitoring for coverage and retention, packet capture for investigation and confirmation.

### Can flow monitoring detect threats in encrypted traffic?

Flow monitoring cannot see inside encrypted payloads, but it can detect behavioral anomalies that encryption does not hide. Unusual destination IPs, abnormal transfer volumes, long-duration outbound connections, and patterns inconsistent with normal baselines are all visible in flow metadata. Extended IPFIX exports on some platforms also include TLS handshake fields such as SNI and JA3 fingerprints, adding context without requiring decryption.

### How does flow monitoring scale to large networks?

Flow records are small, typically 50 to 100 bytes each, compared to kilobytes or more per packet. A 10 Gbps link generates a manageable stream of tens of thousands of flow records per second rather than the millions of packets that full capture would require. This is why flow monitoring is the standard visibility mechanism at ISP and large enterprise scale.

### What is multi-hop flow monitoring?

Multi-hop flow monitoring collects flow telemetry from multiple observation points and correlates flows that traverse more than one device. This lets operators track a conversation across the network topology, compare volumes at different hops, and identify where in the path traffic changes character. It is useful for verifying routing policy, detecting asymmetry, and tracing specific hosts across a large network.

### What happens to flow monitoring accuracy when devices use sampling?

Sampled flow data introduces statistical error proportional to the sampling rate. High-volume flows scale accurately; short-lived or low-volume flows may not be captured at all. Volume totals are estimates derived by multiplying observed counts by the inverse of the sampling rate. For security detection, events that generate only a small number of packets, such as targeted scans or slow beaconing, are likely to be missed in coarsely sampled data.