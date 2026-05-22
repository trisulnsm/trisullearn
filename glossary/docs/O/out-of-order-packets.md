---
title: What are out of order packets?
description: Out of order packets are network packets that arrive at the destination in a different sequence than they were sent. They indicate network problems including congestion, routing changes, or load balancing issues that can degrade application performance.
sidebar_label: Out of order packets
sidebar_position: 78
slug: /glossary/out-of-order-packets
keywords:
  - out of order packets
  - packet reordering
  - TCP reordering
  - packet sequence
  - network problems
  - packet delivery
  - network quality
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are out of order packets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Out of order packets are network packets that arrive at the destination in a different sequence than they were sent. TCP expects packets to arrive in order. When packets arrive out of order, TCP must reorder them before delivering data to the application. Excessive out of order packets indicate network problems."
      }
    },
    {
      "@type": "Question",
      "name": "What causes out of order packets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Out of order packets are caused by network congestion where packets queue differently, routing changes where packets take different paths, load balancing across multiple paths with varying latency, link failures causing path changes, and parallel processing in network devices where packets are handled by different cores."
      }
    },
    {
      "@type": "Question",
      "name": "How do out of order packets affect performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Out of order packets degrade TCP performance because TCP must buffer out of order packets and wait for missing packets before delivering data. This adds latency. Excessive out of order packets cause TCP to interpret reordering as packet loss triggering unnecessary retransmissions. This reduces throughput."
      }
    },
    {
      "@type": "Question",
      "name": "How are out of order packets detected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Out of order packets are detected by monitoring TCP sequence numbers at the destination. Packet capture shows the sequence number of each packet. When a packet with a lower sequence number arrives after a higher sequence number, it is out of order. Flow monitors track out of order rates."
      }
    }
  ]
};

# What are out of order packets?

Out of order packets are network packets that arrive at the destination in a different sequence than they were sent. They indicate network problems including congestion, routing changes, or load balancing issues that can degrade application performance. TCP expects packets to arrive in order.

---

## How out of order packets work

TCP assigns sequence numbers to packets. The destination expects packets in sequence order. When packets arrive out of order, TCP buffers them and waits for missing packets. Once all packets are received, TCP reorders them and delivers data to the application.

Excessive out of order packets cause problems. TCP may interpret reordering as packet loss and trigger retransmissions. This reduces throughput. The receiver windows may shrink as TCP buffers out of order packets waiting for missing data.

---

## Out of order packets in network operations

In the NOC, monitor out of order packet rates to detect network problems. High out of order rates indicate congestion, routing instability, or load balancing issues. Security teams use out of order analysis to detect anomalies that might indicate attacks or network problems.

Capacity planning tracks out of order trends. When out of order rates increase consistently, it signals that links are approaching congestion. Upgrade links before out of order packets severely impact application performance.

---

## Out of order causes

| Cause | Description |
|---|---|
| Network congestion | Packets queue differently at congested links |
| Routing changes | Packets take different paths after route change |
| Load balancing | Multiple paths with varying latency |
| Link failures | Path changes during failure recovery |
| Parallel processing | Different cores handle packets differently |

---

## What makes out of order detection work in practice

Sequence number tracking is essential for detection. Packet capture records sequence numbers for each packet. Analysis tools compare sequence numbers to identify out of order arrivals. Without sequence tracking, out of order packets go undetected.

Buffer management at the receiver handles out of order packets. The receiver must buffer out of order packets while waiting for missing packets. Buffer size limits how much reordering can be handled. When buffers overflow, packets are dropped.

---

## How Trisul handles out of order packets

Trisul detects out of order packets through TCP sequence number analysis in packet capture. Flow records include TCP flags and sequence information enabling out of order detection. Trisul correlates out of order rates with traffic patterns to identify causes. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is TCP?](/docs/glossary/tcp)
- [What is packet capture?](/docs/glossary/packet-capture)
- [What is network congestion?](/docs/glossary/congestion)
- [What is packet loss?](/docs/glossary/packet-loss)
- [What is latency?](/docs/glossary/latency)

---

## Frequently asked questions

### What are out of order packets?

Out of order packets are network packets that arrive at the destination in a different sequence than they were sent. TCP expects packets to arrive in order. When packets arrive out of order, TCP must reorder them before delivering data to the application. Excessive out of order packets indicate network problems.

### What causes out of order packets?

Out of order packets are caused by network congestion where packets queue differently, routing changes where packets take different paths, load balancing across multiple paths with varying latency, link failures causing path changes, and parallel processing in network devices where packets are handled by different cores.

### How do out of order packets affect performance?

Out of order packets degrade TCP performance because TCP must buffer out of order packets and wait for missing packets before delivering data. This adds latency. Excessive out of order packets cause TCP to interpret reordering as packet loss triggering unnecessary retransmissions. This reduces throughput.

### How are out of order packets detected?

Out of order packets are detected by monitoring TCP sequence numbers at the destination. Packet capture shows the sequence number of each packet. When a packet with a lower sequence number arrives after a higher sequence number, it is out of order. Flow monitors track out of order rates.