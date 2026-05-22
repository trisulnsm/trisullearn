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

Latency is the delay between sending data and receiving it. It is one of the most important measures of network performance.

---

## How latency works

Latency includes propagation delay, processing delay, and queueing delay. The farther data travels or the more it waits in line, the higher the latency becomes.

Even when throughput is good, high latency can still make a service feel slow. That is why it is tracked alongside loss and jitter.

---

## Latency in network operations

Operations teams use latency to measure responsiveness and spot network stress. It is especially important for realtime traffic and interactive applications.

A sudden increase in latency can point to congestion, path changes, or a device issue. It is often an early sign of a problem.

---

## Common latency views

| View | Meaning |
|---|---|
| Round trip time | Time to send and receive |
| One-way delay | Delay in one direction |
| Application latency | Time seen by the user |

---

## What makes latency useful

Latency is useful because it directly affects user experience. Even short delays can be noticeable in calls, games, and remote sessions.

It becomes more meaningful when examined with queueing, packet loss, and throughput.

---

## How Trisul handles latency

Trisul can help correlate latency with traffic load, retransmissions, and application behavior so operators can understand what is slowing traffic down.

---

## Related terms

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