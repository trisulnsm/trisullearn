---
title: What is a packet broker?
description: A packet broker is a network device that aggregates, filters, and distributes traffic copies to monitoring and security tools.
sidebar_label: Packet broker
sidebar_position: 261
slug: /glossary/packet-broker
keywords:
  - packet broker
  - traffic broker
  - packet aggregation
  - traffic distribution
  - monitoring fabric
  - visibility architecture
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a packet broker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A packet broker is a network device that aggregates, filters, and distributes traffic copies to monitoring and security tools."
      }
    },
    {
      "@type": "Question",
      "name": "Why are packet brokers used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet brokers are used to send the right traffic to the right tools without overwhelming them."
      }
    },
    {
      "@type": "Question",
      "name": "What does a packet broker do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A packet broker can filter traffic, replicate traffic, load-balance streams, and forward selected packets to tools."
      }
    },
    {
      "@type": "Question",
      "name": "How is a packet broker used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A packet broker is used in monitoring and security visibility architectures to control traffic delivery to downstream tools."
      }
    }
  ]
};

# What is a packet broker?

A **packet broker** is a **network device** that **aggregates, filters, and distributes traffic copies** to **monitoring and security tools**. It sits between capture sources (such as TAPs and SPAN ports) and downstream analyzers, shaping what traffic each tool actually sees.

---

## How packet brokers work

Packet brokers:

- Receive traffic from **TAPs, SPAN ports, or inline monitoring points** and **aggregate multiple streams** into a single visibility fabric.  
- **Filter** to remove unneeded traffic, **replicate** streams to multiple tools, **load‑balance** traffic across tools, and **deduplicate** packets where required.  

This lets operators **send only the right subset of traffic** to each tool instead of flooding all tools with the same full‑line‑rate stream.

---

## Packet brokers in network operations

In network operations, packet brokers:

- Are used when **many monitoring and security tools** need **different views of the same traffic** (e.g., IDS, IPS, packet analyzers, forensics systems).  
- Help **centralize traffic delivery** and **reduce duplication**, so that the network and tools are not overwhelmed by redundant streams.  

They are especially valuable in **large, multi‑tool environments** where managing visibility manually would be error‑prone.

---

## Common packet broker functions

| Function | Meaning |
|----------|---------|
| Filtering | Remove unneeded traffic (e.g., non‑production, non‑monitored protocols) |
| Replication | Send the same traffic copy to multiple tools simultaneously |
| Load balancing | Split traffic across multiple tools or sensor clusters |
| Deduplication | Remove duplicate packets to reduce load and storage needs |

Together, these functions make packet brokers core elements of a **structured visibility architecture**.

---

## What makes packet brokers work in practice

Packet brokers work best when:

- They are **placed at key aggregation points** (e.g., near data‑center edges, internet gateways, or large switch clusters) so that traffic from many TAPs and SPAN ports flows through them.  
- Their **filtering and load‑balancing rules** are aligned with **tool capacity and policy**, ensuring that each downstream system receives a **manageable, relevant subset** of the overall traffic.  

Without thoughtful rules and placement, packet brokers can either **under‑deliver visibility** or **shift the overload** into the monitoring stack.

---

## How Trisul handles packet broker feeds

Trisul can:

- **Ingest traffic distributed by packet brokers** and treat it as **standard packet or flow‑level telemetry**.  
- Use broker‑fed streams for **monitoring, analytics, and forensic workflows**, including **flow‑based dashboards** and **PCAP‑backed investigations**.  

This lets Trisul plug into both **centralized visibility fabrics** and **decentralized capture points** seamlessly.

---

## Related terms

- [What is a network TAP?](/docs/glossary/network-tap)  
- [What is a SPAN port?](/docs/glossary/span-port)  
- [What is active monitoring?](/docs/glossary/active-monitoring)  
- [What is Wireshark?](/docs/glossary/wireshark)  
- [What is traffic analysis?](/docs/glossary/traffic-analysis)  

---

## Frequently asked questions

### What is a packet broker?

A packet broker is a network device that aggregates, filters, and distributes traffic copies to monitoring and security tools.

### Why are packet brokers used?

Packet brokers are used to send the right traffic to the right tools without overwhelming them.

### What does a packet broker do?

A packet broker can filter traffic, replicate traffic, load-balance streams, and forward selected packets to tools.

### How is a packet broker used?

A packet broker is used in monitoring and security visibility architectures to control traffic delivery to downstream tools.