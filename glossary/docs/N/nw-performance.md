---
title: What is network performance?
description: Network performance describes how well a network delivers traffic in terms of speed, delay, loss, and reliability. It is used to judge whether the network is meeting user and application needs.
sidebar_label: Network performance
sidebar_position: 198
slug: /glossary/network-performance
keywords:
  - network performance
  - latency
  - throughput
  - packet loss
  - jitter
  - reliability
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is network performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance describes how well a network delivers traffic in terms of speed, delay, loss, and reliability. It is used to judge whether the network is meeting user and application needs."
      }
    },
    {
      "@type": "Question",
      "name": "What affects network performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance can be affected by bandwidth limits, congestion, queueing, packet loss, latency, jitter, and device health."
      }
    },
    {
      "@type": "Question",
      "name": "Why is network performance important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance is important because poor performance can slow applications, disrupt calls, and reduce user experience."
      }
    },
    {
      "@type": "Question",
      "name": "How is network performance measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance is measured with metrics such as latency, jitter, throughput, utilization, retransmissions, and packet loss."
      }
    }
  ]
};

# What is network performance?

**Network performance** describes how well a network **delivers traffic** in terms of **speed, delay, loss, and reliability**. It is used to judge whether the network is meeting **user and application needs**, not just staying “up”.

---

## How network performance works

Network performance is described by a set of **core metrics**, not a single number:

- **Latency**: delay before a packet is delivered.  
- **Throughput**: data delivered per second.  
- **Jitter**: variation in latency between packets.  
- **Packet loss**: percentage of packets not delivered.  
- **Utilization**: how much of the link’s capacity is in use.  

A network can be **fast** yet **poor performing** if it **drops packets** or **adds high, variable delay**; performance must therefore be viewed as a **combination of signals**, not just raw speed.

---

## Network performance in network operations

In the **NOC and operations teams**, network performance:

- Helps keep **services responsive** by revealing **congestion, overloaded devices, and degraded paths**.  
- Guides **capacity planning**: rising **latency or utilization trends** signal that the network is approaching its limits and may need changes.  

Performance is also central to **SLA and service‑quality reporting**, where operators must show that key paths and services meet agreed‑upon experience levels.

---

## Common performance signals

| Signal | Meaning |
|--------|---------|
| Latency | Delay between packet transmission and delivery |
| Jitter | Variation in delay between packets |
| Throughput | Actual data rate delivered over time |
| Packet loss | Percentage of packets not delivered |
| Utilization | Fraction of link or path capacity in use |

These signals form the **core “quality” set** for understanding how the network behaves from the application’s perspective.

---

## What makes network performance useful in practice

Network performance is most useful when measured from **the application’s point of view**:

- A link may look **healthy** from an interface‑utilization graph, but a **specific service may still be slow** due to congestion, loss, or high jitter on a deeper path.  
- Performance analysis is most effective when it **combines traffic data, interface‑level metrics, and application‑level context** (e.g., VoIP scores, session timing, retransmissions) to show **why** something feels slow or unreliable.

Without this holistic view, operators can miss **experience‑killing bottlenecks** that are invisible at the raw‑availability level.

---

## How Trisul handles network performance

Trisul helps teams track **network performance** by:

- **Correlating traffic volume, delay signals, packet loss, and application‑level behavior** in a single analytics environment.  
- Providing **per‑interface, per‑path, and per‑application performance views** so operators can see both **how fast the network is** and **how well services are performing**.  

This lets teams move beyond “link is up” to **understanding quality of experience** for real‑time and data‑heavy applications.

---

## Related terms

- [What is congestion detection?](/docs/glossary/congestion-detection)  
- [What is VoIP?](/docs/glossary/voip)  
- [What is realtime traffic?](/docs/glossary/realtime-traffic)  
- [What is application monitoring?](/docs/glossary/application-monitoring)  
- [What is traffic pattern analysis?](/docs/glossary/traffic-pattern-analysis)  

---

## Frequently asked questions

### What is network performance?

Network performance describes how well a network delivers traffic in terms of speed, delay, loss, and reliability. It is used to judge whether the network is meeting user and application needs.

### What affects network performance?

Network performance can be affected by bandwidth limits, congestion, queueing, packet loss, latency, jitter, and device health.

### Why is network performance important?

Network performance is important because poor performance can slow applications, disrupt calls, and reduce user experience.

### How is network performance measured?

Network performance is measured with metrics such as latency, jitter, throughput, utilization, retransmissions, and packet loss.