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

A packet broker is a network device that aggregates, filters, and distributes traffic copies to monitoring and security tools.

---

## How packet brokers work

A packet broker receives traffic from TAPs, SPAN ports, or other sources and then forwards selected copies to the right tools. It may also filter, deduplicate, or load-balance traffic.

This helps avoid overwhelming analysis systems. Instead of sending everything everywhere, the broker sends only what is needed.

---

## Packet brokers in operations

Packet brokers are used when many monitoring tools need different views of the same traffic. They help centralize and control traffic delivery.

They are especially useful in large environments with multiple security and performance tools. A broker reduces duplication and improves visibility management.

---

## Common packet broker functions

| Function | Meaning |
|---|---|
| Filtering | Remove unneeded traffic |
| Replication | Send copies to more than one tool |
| Load balancing | Split traffic across tools |
| Deduplication | Remove duplicate packets |

---

## What makes packet brokers useful

Packet brokers are useful because they make traffic visibility scalable. They help ensure that each tool gets the traffic it needs without excess noise.

They are most valuable in environments with many capture points and many downstream consumers.

---

## How Trisul handles packet broker feeds

Trisul can ingest traffic distributed by packet brokers and use it for monitoring, analytics, and forensic workflows.

---

## Related terms

- Network TAP
- SPAN port
- Active monitoring
- Wireshark
- Traffic analysis

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