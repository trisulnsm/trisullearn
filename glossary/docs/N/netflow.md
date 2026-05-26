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

**NetFlow** is a **network flow‑export protocol** developed by **Cisco** that **collects IP traffic information** and **exports flow records** to a **collector** for monitoring and analysis. It provides **bandwidth usage insights, traffic patterns, and network utilization data** without requiring full packet capture.

---

## How NetFlow works

NetFlow:

- Groups packets into **flows** based on **5‑tuple**: source IP, destination IP, source port, destination port, and protocol.  
- Creates a **flow record** when the flow ends or times out.  
- Sends the record **periodically to a collector over UDP**.  
- The collector **aggregates, stores, and analyzes** flow data for dashboards and reports.

---

## NetFlow in network operations

In the **NOC and security operations**:

- Use NetFlow to **track bandwidth utilization**, **identify top talkers**, and **analyze traffic patterns**.  
- Detect **anomalies** and **troubleshoot performance** through traffic‑based views.  
- Support **capacity planning** and **compliance** with utilization and top‑N reports.

Because NetFlow records summarize **who talked to whom, when, and how much**, it gives **scalable visibility** at the flow level.

---

## NetFlow versions

| Version | Format | Flexibility | Status |
|--------|--------|------------|--------|
| NetFlow v5 | Fixed, predefined fields | Low | Legacy but common |
| NetFlow v9 | Template‑based, extensible | High | Active |
| IPFIX | Template‑based standard (based on v9) | Very high | IETF‑standard, preferred for new deployments |

---

## What makes NetFlow work in practice

- **Export must be enabled** on all relevant interfaces and tuned with **sampling** where needed.  
- The **collector** must listen on the correct **UDP port** (commonly 2055) and have **sufficient storage and CPU** for incoming records.  
- Flow‑level aggregation and retention policies help **keep storage under control**.

---

## How Trisul handles NetFlow

Trisul collects **NetFlow v5, NetFlow v9, J‑Flow, sFlow, and IPFIX** natively. It:

- Decodes flow records and **aggregates them** for real‑time and historical analysis.  
- Provides **real‑time traffic graphs**, **top‑talker views**, and **anomaly‑style alerts** from flow data.  
- Supports **long‑term retention and multi‑million‑flow analysis**.

For deployment and tuning guidance, see Trisul documentation at [https://docs.trisul.org/docs/ug/flow/](https://docs.trisul.org/docs/ug/flow/).

---

## Related terms

- [What is IPFIX?](/docs/glossary/ipfix)  
- [What is sFlow?](/docs/glossary/sflow)  
- [What is flow monitoring?](/docs/glossary/flow-monitoring)  
- [What is J‑Flow?](/docs/glossary/jflow)  
- [What is flow collector?](/docs/glossary/flow-collector)  

---

## Frequently asked questions

### What is NetFlow?

NetFlow is a network protocol developed by Cisco that collects IP traffic information and exports flow records to a collector. It provides bandwidth usage insights, traffic patterns, and network utilization data. NetFlow records summarize conversations between source and destination including IP addresses, ports, protocols, byte counts, and timestamps.

### What versions of NetFlow exist?

NetFlow v5 is a fixed‑format version with predefined fields including source and destination IP, ports, protocol, byte count, packet count, and timestamps. NetFlow v9 is template‑based and flexible, supporting custom fields and enterprise‑specific Information Elements. IPFIX is the IETF standard based on NetFlow v9.

### How does NetFlow work?

NetFlow exporters on routers and switches observe passing packets and group them into flows based on 5‑tuple. Flow records are created summarizing each conversation. Exporters send flow records periodically to collectors via UDP. Collectors aggregate and analyze the data for monitoring and reporting.

### What data does NetFlow export?

NetFlow exports source and destination IP addresses, source and destination ports, protocol type, byte count, packet count, flow start time, flow end time, TCP flags, Type of Service, input and output interface indices, and next‑hop IP address. This data enables traffic analysis without packet capture.