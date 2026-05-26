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

**Packet loss** is the **failure of one or more network packets to reach their destination**. It is a **key sign of congestion, errors, or link instability**, and often appears before a link is considered “down.”

---

## How packet loss happens

Packet loss typically occurs when:

- **Buffers overflow** under congestion, forcing devices to drop packets.  
- **Links are congested** or **paths are unstable**, causing packets to be discarded.  
- **Errors or hardware faults** corrupt packets, which are then dropped by the receiving device.  

Packets can also be **intentionally dropped** by policy or filtering; that is usually treated as **policy‑driven loss** rather than network‑health loss.

When packets are lost, the receiver may never see them, leading to **retransmissions, stalls, or failed sessions**.

---

## Packet loss in network operations

In network operations, packet loss is a **key performance and health metric**:

- Even **small loss rates** can **degrade voice, video, and interactive services** noticeably.  
- It is often examined alongside **queueing, link load, and latency**; for example:  
  - High **loss plus high utilization** suggests **congestion**.  
  - High **loss with low utilization** may indicate a **faulty link or device issue**.  

This context‑based view helps operators **move from symptom to root cause** rather than treating loss in isolation.

---

## Common packet loss causes

| Cause | Effect |
|-------|--------|
| Congestion | Buffers overflow, packets are dropped |
| Queueing | Delay grows, then loss as buffers fill |
| Errors | Corrupted or malformed packets are dropped |
| Hardware fault | Link instability and intermittent loss |

These conditions all degrade the **quality of the network path** for the traffic crossing it.

---

## What makes packet loss important in practice

Packet loss matters because:

- It is often a **symptom** rather than the root cause; the underlying issue may be **congestion, link errors, or device faults**.  
- It **directly affects application performance and user experience**, causing **retransmissions, stalls, and slow or failed transfers**.  

Operators therefore use packet loss as a **trigger to look deeper** at **utilization, queueing, and interface behavior**, so that the true root cause (not just the loss symptom) can be fixed.

---

## How Trisul handles packet loss

Trisul:

- Helps operators **detect packet loss** by **correlating traffic volume, retransmissions, and interface metrics** such as errors and utilization.  
- Shows **when and where loss spikes occur**, and supports **root‑cause isolation** by tying loss to specific links, paths, or conversations.  

This lets teams **respond proactively** to loss‑driven performance degradation instead of waiting for user complaints.

---

## Related terms

- [What is queueing?](/docs/glossary/queueing)  
- [What is link load?](/docs/glossary/link-load)  
- [What is interface saturation?](/docs/glossary/interface-saturation)  
- [What is congestion?](/docs/glossary/congestion)  
- [What is TCP retransmission?](/docs/glossary/tcp-retransmission)  

---

## Frequently asked questions

### What is packet loss?

Packet loss is the failure of one or more network packets to reach their destination. It is a key sign of congestion, errors, or link instability.

### What causes packet loss?

Packet loss can be caused by congestion, queue overflow, interface errors, hardware faults, or unstable network paths.

### Why is packet loss important?

Packet loss is important because it directly affects application performance and user experience. It often leads to retransmissions and slow connections.

### How is packet loss used in analytics?

Packet loss is used as a core health metric. Analysts compare loss with utilization, queueing, and latency to identify the underlying problem.