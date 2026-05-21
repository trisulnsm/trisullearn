---
title: What is NetFlow?
description: NetFlow is a network protocol developed by Cisco that collects IP traffic information and exports flow records to a collector. It provides bandwidth usage insights, traffic patterns, and network utilization data for monitoring and analysis.
sidebar_label: NetFlow
sidebar_position: 69
slug: /glossary/netflow
keywords:
  - NetFlow
  - NetFlow v5
  - NetFlow v9
  - flow protocol
  - traffic monitoring
  - flow export
  - bandwidth monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow is a network protocol developed by Cisco that collects IP traffic information and exports flow records to a collector. It provides bandwidth usage insights, traffic patterns, and network utilization data. NetFlow records summarize conversations between source and destination including IP addresses, ports, protocols, byte counts, and timestamps."
      }
    },
    {
      "@type": "Question",
      "name": "What versions of NetFlow exist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow v5 is a fixed-format version with predefined fields including source and destination IP, ports, protocol, byte count, packet count, and timestamps. NetFlow v9 is template-based and flexible, supporting custom fields and enterprise-specific Information Elements. IPFIX is the IETF standard based on NetFlow v9."
      }
    },
    {
      "@type": "Question",
      "name": "How does NetFlow work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow exporters on routers and switches observe passing packets and group them into flows based on 5-tuple. Flow records are created summarizing each conversation. Exporters send flow records periodically to collectors via UDP. Collectors aggregate and analyze the data for monitoring and reporting."
      }
    },
    {
      "@type": "Question",
      "name": "What data does NetFlow export?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow exports source and destination IP addresses, source and destination ports, protocol type, byte count, packet count, flow start time, flow end time, TCP flags, Type of Service, input and output interface indices, and next-hop IP address. This data enables traffic analysis without packet capture."
      }
    }
  ]
};

# What is NetFlow?

NetFlow is a network protocol developed by Cisco that collects IP traffic information and exports flow records to a collector. It provides bandwidth usage insights, traffic patterns, and network utilization data for monitoring and analysis. NetFlow records summarize conversations between source and destination.

---

## How NetFlow works

NetFlow exporters on routers and switches observe passing packets and group them into flows based on 5-tuple: source IP, destination IP, source port, destination port, and protocol. When a flow ends or times out, the exporter sends a flow record to the collector. Records are sent periodically via UDP.

---

## NetFlow in network operations

In the NOC, use NetFlow to track bandwidth utilization, identify top talkers, and analyze traffic patterns. Security teams detect anomalies through unusual flow patterns. Capacity planning uses NetFlow data to plan network upgrades based on traffic trends.

NetFlow provides visibility without packet capture. Flow records show who talked to whom, when, and how much. This enables traffic analysis at scale without storing full packets.

---

## NetFlow versions

| Version | Format | Flexibility | Status |
|---|---|---|---|
| NetFlow v5 | Fixed | Limited | Legacy |
| NetFlow v9 | Template-based | High | Active |
| IPFIX | Template-based | High | IETF standard |

---

## What makes NetFlow work in practice

Flow export configuration must be enabled on all critical interfaces. Without export, no flow data is collected. Sampling rate must be configured correctly for accurate traffic estimation at high speeds. Router CPU and network bandwidth must handle export volume.

Collector must be configured to receive NetFlow on the correct UDP port. The default is port 2055 for v5 and v9. Collectors must have sufficient storage and processing capacity for the flow volume. Flow aggregation reduces storage requirements.

---

## How Trisul handles NetFlow

Trisul collects NetFlow v5, NetFlow v9, J-Flow, sFlow, and IPFIX data natively. Flow records are decoded and aggregated for analysis. Trisul provides real-time traffic graphs, historical reports, and anomaly detection from NetFlow data. Flow monitoring tracks millions of flows enabling long-term retention. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is IPFIX?](/glossary/ipfix)
- [What is sFlow?](/glossary/sflow)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is J-Flow?](/glossary/j-flow)
- [What is flow collector?](/glossary/flow-collector)

---

## Frequently asked questions

### What is NetFlow?

NetFlow is a network protocol developed by Cisco that collects IP traffic information and exports flow records to a collector. It provides bandwidth usage insights, traffic patterns, and network utilization data. NetFlow records summarize conversations between source and destination including IP addresses, ports, protocols, byte counts, and timestamps.

### What versions of NetFlow exist?

NetFlow v5 is a fixed-format version with predefined fields including source and destination IP, ports, protocol, byte count, packet count, and timestamps. NetFlow v9 is template-based and flexible, supporting custom fields and enterprise-specific Information Elements. IPFIX is the IETF standard based on NetFlow v9.

### How does NetFlow work?

NetFlow exporters on routers and switches observe passing packets and group them into flows based on 5-tuple. Flow records are created summarizing each conversation. Exporters send flow records periodically to collectors via UDP. Collectors aggregate and analyze the data for monitoring and reporting.

### What data does NetFlow export?

NetFlow exports source and destination IP addresses, source and destination ports, protocol type, byte count, packet count, flow start time, flow end time, TCP flags, Type of Service, input and output interface indices, and next-hop IP address. This data enables traffic analysis without packet capture.