---
title: What is queueing in networking?
description: Queueing is the temporary holding of packets when a device or link cannot forward them immediately. It is a normal part of network behavior, but excessive queueing causes delay and congestion.
sidebar_label: Queueing
sidebar_position: 195
slug: /glossary/queueing
keywords:
  - queueing
  - packet queue
  - congestion
  - delay
  - buffering
  - traffic shaping
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is queueing in networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing is the temporary holding of packets when a device or link cannot forward them immediately. It is a normal part of network behavior, but excessive queueing causes delay and congestion."
      }
    },
    {
      "@type": "Question",
      "name": "Why does queueing happen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing happens when packets arrive faster than they can be sent out. The device stores packets in a buffer until capacity becomes available."
      }
    },
    {
      "@type": "Question",
      "name": "When is queueing a problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing becomes a problem when it grows large enough to add noticeable latency or cause packet loss. Sustained queueing is a sign of congestion."
      }
    },
    {
      "@type": "Question",
      "name": "How is queueing used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Queueing is used in analytics as an indicator of congestion and delay. It helps explain why traffic may be slow even when the link is still up."
      }
    }
  ]
};

# What is queueing in networking?

Queueing is the temporary holding of packets when a device or link cannot forward them immediately. It is a normal part of network behavior, but excessive queueing causes delay and congestion.

---

## How queueing works

When packets arrive faster than the output path can send them, they wait in a buffer. That waiting area is the queue.

If the queue is short, the delay may be harmless. If the queue keeps growing, the added delay becomes visible to users and applications.

---

## Queueing in network operations

Queueing is common on busy links, routers, firewalls, and switches. It is part of how devices deal with bursts of traffic.

The problem is not queueing itself, but too much queueing. Long queues are often a sign that the link is under pressure and may soon drop packets.

---

## Queueing vs related terms

| Term | Meaning |
|---|---|
| Queueing | Packets waiting to be sent |
| Buffering | Storage used for queueing |
| Congestion | Demand exceeds capacity |
| Packet loss | Packets are dropped |

---

## What makes queueing important

Queueing adds latency even before packets are lost. That means users may feel slowness before any outright failure appears.

It is most useful to monitor queueing together with utilization and loss. Those signals show whether the network is just busy or actually overloaded.

---

## How Trisul handles queueing

Trisul helps correlate queueing-related symptoms with link load and packet loss so operators can understand whether delays are caused by congestion.

---

## Related terms

- Link load
- Congestion
- Packet loss
- Interface saturation
- Latency