---
title: What is packet loss?
description: Packet loss is the failure of one or more network packets to reach their destination. It is a key sign of congestion, errors, or link instability.
sidebar_label: Packet loss
sidebar_position: 196
slug: /glossary/packet-loss
keywords:
  - packet loss
  - dropped packets
  - network loss
  - congestion
  - link errors
  - performance degradation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is packet loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet loss is the failure of one or more network packets to reach their destination. It is a key sign of congestion, errors, or link instability."
      }
    },
    {
      "@type": "Question",
      "name": "What causes packet loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet loss can be caused by congestion, queue overflow, interface errors, hardware faults, or unstable network paths."
      }
    },
    {
      "@type": "Question",
      "name": "Why is packet loss important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet loss is important because it directly affects application performance and user experience. It often leads to retransmissions and slow connections."
      }
    },
    {
      "@type": "Question",
      "name": "How is packet loss used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet loss is used as a core health metric. Analysts compare loss with utilization, queueing, and latency to identify the underlying problem."
      }
    }
  ]
};

# What is packet loss?

Packet loss is the failure of one or more network packets to reach their destination. It is a key sign of congestion, errors, or link instability.

---

## How packet loss happens

Packets may be dropped when a buffer overflows, when a link is congested, or when a device experiences errors. In some cases, packets are intentionally dropped by policy or filtering, but that is usually treated separately.

When packets are lost, the receiving side may never see them. That can slow down applications and force retransmissions.

---

## Packet loss in network operations

Packet loss is one of the most important performance indicators. Even a small amount of loss can cause noticeable problems for voice, video, and interactive services.

It is often examined together with queueing and link load. That combination helps show whether the loss is caused by congestion or by a physical problem.

---

## Common packet loss causes

| Cause | Effect |
|---|---|
| Congestion | Buffers overflow |
| Queueing | Delay grows, then loss |
| Errors | Corrupted packets are dropped |
| Hardware fault | Link instability |

---

## What makes packet loss important

Loss is often a symptom rather than the root cause. The cause may be congestion, link errors, or a device issue.

That is why operators should look at loss alongside other signals. A loss spike with high utilization suggests congestion, while loss with low utilization may suggest a faulty link.

---

## How Trisul handles packet loss

Trisul helps operators detect packet loss by correlating traffic, retransmissions, and interface behavior, making it easier to isolate the cause.

---

## Related terms

- Queueing
- Link load
- Interface saturation
- Congestion
- TCP retransmission