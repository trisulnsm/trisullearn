---
title: What is the OSI model?
description: The OSI model is a layered framework used to describe how network communication works from physical transmission up to application behavior.
sidebar_label: OSI model
sidebar_position: 203
slug: /glossary/osi-model
keywords:
  - OSI model
  - network layers
  - layer 1
  - layer 2
  - layer 3
  - layer 7
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the OSI model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model is a layered framework used to describe how network communication works from physical transmission up to application behavior."
      }
    },
    {
      "@type": "Question",
      "name": "How many layers are in the OSI model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model has seven layers, from physical transmission at Layer 1 to application behavior at Layer 7."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the OSI model useful?",
      "@type": "Answer",
        "text": "The OSI model is useful because it gives teams a common language for explaining where a network problem may be happening."
      }
    },
    {
      "@type": "Question",
      "name": "How is the OSI model used in troubleshooting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSI model is used in troubleshooting to narrow problems by layer, such as physical faults, switching issues, routing problems, or application failures."
      }
    }
  ]
};

# What is the OSI model?

The **OSI model** is a **layered framework** used to describe how **network communication works** from **physical transmission** up to **application behavior**. It provides a **common reference** for understanding where different functions and problems sit in the network stack.

---

## How the OSI model works

The OSI model divides networking into **seven logical layers**:

- Each layer has a **different role**, from **wires and signals (Layer 1)** to **switching and addressing (Layers 2–3)**, **transport and ports (Layer 4)**, and **application behavior (Layer 7)**.  

This layered view helps teams **reason about where a problem may be happening**; a fault at a lower layer (e.g., cabling or routing) can manifest as failures at higher layers, even though the root cause is elsewhere.

---

## OSI model in network operations

In network operations, the OSI model is often used as a **troubleshooting aid**:

- It gives operators a **common language** to describe where to look first:  
  - **Cable or link issues** map to **Layer 1**.  
  - **Switching or VLAN problems** live in **Layer 2**.  
  - **Routing and IP reachability** span **Layer 3**.  
  - **Connectivity and port‑based issues** sit at **Layer 4**.  
  - **Application‑level problems** (e.g., web, email, VoIP) live at **Layers 5–7**.  

This separation helps teams **narrow the scope** of investigation instead of treating the network as a single black box.

---

## OSI layers

| Layer | Role |
|-------|------|
| 1 | Physical transmission (cables, signals, media) |
| 2 | Data link and switching (frames, MAC addresses, VLANs) |
| 3 | Routing and IP addressing |
| 4 | Transport and ports (TCP, UDP, flow control) |
| 5 | Session control (session setup and teardown) |
| 6 | Presentation and encoding (data formatting, encryption where embedded) |
| 7 | Application behavior (end‑user services and protocols) |

Together, these layers form a **mental map** analysts use to reason about traffic and failures.

---

## What makes the OSI model useful in practice

The OSI model is useful because:

- It is a **shared language** that helps teams in support and operations **describe where a problem likely sits** without agreeing on vendor‑specific implementations.  
- It helps **organize troubleshooting** even though real networks don’t always fail cleanly one layer at a time; it still provides a **structured way to reason backward** from symptom to possible root layer.  

Used correctly, the OSI model reduces confusion and speeds up **problem‑isolation discussions**.

---

## How Trisul handles OSI context

Trisul can:

- **Map traffic observations to network layers**, helping teams interpret whether a problem looks **physical, transport‑related, or application‑related**.  
- Support operators in **narrowing investigations** by layer (e.g., showing TCP‑level issues vs encrypted‑app‑behavior) based on flows and packets collected at observation points.  

This lets teams combine OSI‑based thinking with **real‑traffic telemetry** instead of relying only on abstract diagrams.

---

## Related terms

- [What is network performance?](/docs/glossary/network-performance)  
- [What is application monitoring?](/docs/glossary/application-monitoring)  
- [What is traffic direction?](/docs/glossary/traffic-direction)  
- [What is packet loss?](/docs/glossary/packet-loss)  
- [What is congestion detection?](/docs/glossary/congestion-detection)  

---

## Frequently asked questions

### What is the OSI model?

The OSI model is a layered framework used to describe how network communication works from physical transmission up to application behavior.

### How many layers are in the OSI model?

The OSI model has seven layers, from physical transmission at Layer 1 to application behavior at Layer 7.

### Why is the OSI model useful?

The OSI model is useful because it gives teams a common language for explaining where a network problem may be happening.

### How is the OSI model used in troubleshooting?

The OSI model is used in troubleshooting to narrow problems by layer, such as physical faults, switching issues, routing problems, or application failures.