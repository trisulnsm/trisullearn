---
title: What is network flow monitoring?
description: Network flow monitoring observes and analyzes network traffic by collecting flow records that summarize conversations between source and destination. It provides bandwidth usage insights, traffic patterns, and network utilization data for monitoring and analysis.
sidebar_label: Network flow monitoring
sidebar_position: 72
slug: /glossary/network-flow-monitoring
keywords:
  - network flow monitoring
  - flow monitoring
  - traffic monitoring
  - NetFlow monitoring
  - bandwidth monitoring
  - flow analysis
  - network visibility
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is network flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network flow monitoring observes and analyzes network traffic by collecting flow records that summarize conversations between source and destination. Flow monitoring provides bandwidth usage insights, traffic patterns, and network utilization data. It tracks who talked to whom, when, and how much without capturing full packets."
      }
    },
    {
      "@type": "Question",
      "name": "How does network flow monitoring work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow exporters on routers and switches observe passing packets and group them into flows based on 5-tuple. Flow records are created summarizing each conversation. Exporters send flow records to collectors via NetFlow, sFlow, J-Flow, or IPFIX. Collectors aggregate and analyze the data for monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "What data does flow monitoring provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring provides source and destination IP addresses, source and destination ports, protocol type, byte count, packet count, flow start time, flow end time, TCP flags, interface indices, and next-hop IP. This data enables traffic analysis without packet capture."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Benefits include bandwidth utilization tracking, top talkers identification, traffic pattern analysis, application usage visibility, capacity planning, security monitoring, anomaly detection, and compliance reporting. Flow monitoring scales to gigabit speeds with minimal storage requirements."
      }
    }
  ]
};

# What is network flow monitoring?

Network flow monitoring observes and analyzes network traffic by collecting flow records that summarize conversations between source and destination. It provides bandwidth usage insights, traffic patterns, and network utilization data for monitoring and analysis. Flow monitoring tracks who talked to whom, when, and how much without capturing full packets.

---

## How network flow monitoring works

Flow exporters on routers and switches observe passing packets and group them into flows based on 5-tuple: source IP, destination IP, source port, destination port, and protocol. When a flow ends or times out, the exporter sends a flow record to the collector via NetFlow, sFlow, J-Flow, or IPFIX.

Collectors receive flow records from multiple exporters and aggregate them by interface, application, host, or protocol. Aggregated data provides traffic insights and reports. Flow monitoring scales to gigabit speeds because it exports metadata instead of full packets.

---

## Network flow monitoring in network operations

In the NOC, use flow monitoring to track bandwidth utilization, identify top talkers, and analyze traffic patterns. Security teams detect anomalies through unusual flow patterns. Capacity planning uses flow data to plan network upgrades based on traffic trends.

Flow monitoring provides visibility without packet capture. Flow records show who talked to whom, when, and how much. This enables traffic analysis at scale without storing full packets. Flow data is approximately 1 to 2 percent of equivalent PCAP volume.

---

## Flow monitoring vs packet capture

| Aspect | Flow Monitoring | Packet Capture |
|---|---|---|
| What it stores | Flow metadata | Full packet content and payload |
| Storage footprint | 1 to 2% of PCAP | Very high |
| Retention | Weeks to months | Hours to days |
| Detail level | Who, when, how much | Full content and behavior |
| Best for | Bandwidth monitoring, trends | Deep forensics, investigation |

---

## What makes network flow monitoring work in practice

Flow exporter configuration must be enabled on all critical interfaces. Without export, no flow data is collected. Sampling rate must be configured correctly for accurate traffic estimation at high speeds. Router CPU and network bandwidth must handle export volume.

Collector capacity must match flow volume. If flow rate exceeds collector capacity, data is dropped. Monitor collector CPU, memory, and storage to ensure capacity is adequate. Scale collectors when flow volume increases. Aggregation at write time reduces storage requirements.

---

## How Trisul handles network flow monitoring

Trisul provides network flow monitoring by collecting NetFlow, J-Flow, sFlow, and IPFIX data. Flow records are decoded and aggregated for analysis. Trisul provides real-time traffic graphs, historical reports, and anomaly detection from flow data. Flow monitoring tracks millions of flows enabling long-term retention. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is NetFlow?](/docs/glossary/netflow)
- [What is sFlow?](/docs/glossary/sflow)
- [What is IPFIX?](/docs/glossary/ipfix)
- [What is bandwidth monitoring?](/docs/glossary/bandwidth-monitoring)
- [What is packet capture?](/docs/glossary/packet-capture)

---

## Frequently asked questions

### What is network flow monitoring?

Network flow monitoring observes and analyzes network traffic by collecting flow records that summarize conversations between source and destination. Flow monitoring provides bandwidth usage insights, traffic patterns, and network utilization data. It tracks who talked to whom, when, and how much without capturing full packets.

### How does network flow monitoring work?

Flow exporters on routers and switches observe passing packets and group them into flows based on 5-tuple. Flow records are created summarizing each conversation. Exporters send flow records to collectors via NetFlow, sFlow, J-Flow, or IPFIX. Collectors aggregate and analyze the data for monitoring.

### What data does flow monitoring provide?

Flow monitoring provides source and destination IP addresses, source and destination ports, protocol type, byte count, packet count, flow start time, flow end time, TCP flags, interface indices, and next-hop IP. This data enables traffic analysis without packet capture.

### What are the benefits of flow monitoring?

Benefits include bandwidth utilization tracking, top talkers identification, traffic pattern analysis, application usage visibility, capacity planning, security monitoring, anomaly detection, and compliance reporting. Flow monitoring scales to gigabit speeds with minimal storage requirements.