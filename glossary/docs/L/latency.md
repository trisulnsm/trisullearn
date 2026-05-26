---
title: What is latency?
description: Latency is the delay between sending data and receiving it. It is one of the most important measures of network performance.
sidebar_label: Latency
sidebar_position: 229
slug: /glossary/latency
keywords:
  - latency
  - delay
  - round trip time
  - network delay
  - response time
  - performance
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is latency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency is the delay between sending data and receiving it. It is one of the most important measures of network performance."
      }
    },
    {
      "@type": "Question",
      "name": "Why does latency matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency matters because high delay makes applications feel slow or unresponsive."
      }
    },
    {
      "@type": "Question",
      "name": "What causes latency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency can be caused by distance, queueing, congestion, processing delay, or path changes."
      }
    },
    {
      "@type": "Question",
      "name": "How is latency used in analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency is used to judge responsiveness, detect congestion, and explain delays in voice, video, and interactive traffic."
      }
    }
  ]
};

# What is latency?

**Latency** is the **delay between sending data and receiving it** and is one of the most important measures of **network performance**. It represents how long it takes for a packet or request to travel from source to destination and back, and users perceive it as **slowness or lag** in applications, web browsing, voice, and video. Latency is typically measured in **milliseconds (ms)** and is tracked alongside **throughput, packet loss, and jitter** to get a complete picture of service quality.

---

## How latency works

Latency is made up of several components:

- **Propagation delay**: Time taken for a signal to travel the physical distance between locations.  
- **Queueing and processing delay**: Time spent waiting in router/switch buffers and being processed by devices.  
- **Serialization and transmission delay**: Time to put the packet onto the wire at a given link speed.  

Even when **bandwidth (throughput) is high**, high latency can still make services feel sluggish, so operators monitor **round‑trip time (RTT)** or **one‑way delay** to understand how responsive a path really is.

---

## Latency in network operations

In **NOC and security operations**, latency is used to:

- Measure **application responsiveness** and **user experience**.  
- Detect **network stress, congestion, or path changes** that degrade interactive traffic.  
- Troubleshoot **real‑time applications** such as VoIP and interactive games, where even small extra delays are noticeable.  

A **sudden increase in latency** on a link or path often signals emerging congestion, routing changes, or device‑level issues, making it a useful **early warning signal** in addition to loss or utilization metrics.

---

## Common latency views

| View | Meaning |
|------|---------|
| Round‑trip time (RTT) | Time from sending a request to receiving the response |
| One‑way delay | Time for a packet to travel in one direction only |
| Application latency | End‑to‑end delay as perceived by the user or application |

Different use cases (e.g., TCP‑based apps vs UDP‑based real‑time streams) may rely on different latency views, and tools often derive these from flow telemetry, ICMP, or application‑layer measurements.

---

## What makes latency useful

Latency is useful because it **directly affects user experience**; even small delays can be noticeable in **voice calls, gaming, remote desktop sessions, and cloud applications**. It becomes more meaningful when examined together with:

- **Queueing behavior** and **throughput**.  
- **Packet loss** and **jitter**.  
- **Routing and path stability**.  

By combining these metrics, operators can answer questions like **“Is traffic slow because the path is long, or because queues are starved?”** instead of relying on isolated observations.

---

## How Trisul handles latency

Trisul helps correlate **latency with traffic load, retransmissions, and application behavior** so operators can understand what is slowing traffic down. It does this by:

- Using **flow‑level timing data** to infer delay patterns across sessions and paths.  
- Correlating **latency‑like trends** with **error rates, congestion witnesses (e.g., retransmissions, ECN), and jitter**.  
- Enabling drill‑downs from **high‑level KPIs (e.g., RTT) to specific flows, hosts, or applications**.  

This lets teams distinguish between **network‑induced latency**, **application‑level slowness**, and **end‑host‑side delays**, improving both performance troubleshooting and capacity‑planning decisions.

---

## Related terms

- Latency  
- TCP  
- Quality of experience  
- Congestion detection  
- Streaming video  
- Network performance  

---

## Frequently asked questions

### What is latency?

Latency is the delay between sending data and receiving it. It is one of the most important measures of network performance.

### Why does latency matter?

Latency matters because high delay makes applications feel slow or unresponsive.

### What causes latency?

Latency can be caused by distance, queueing, congestion, processing delay, or path changes.

### How is latency used in analysis?

Latency is used to judge responsiveness, detect congestion, and explain delays in voice, video, and interactive traffic.