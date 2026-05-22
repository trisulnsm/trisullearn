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
      "acceptedAnswer": {
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

The OSI model is a layered framework used to describe how network communication works from physical transmission up to application behavior.

---

## How the OSI model works

The OSI model divides networking into seven layers. Each layer has a different role, from wires and signals to applications and user interaction.

This layered view helps teams think about where a problem may be happening. A fault at one layer can affect the layers above it.

---

## OSI model in network operations

The OSI model is often used as a troubleshooting aid. It gives operators a common way to describe where to look first.

For example, a cable issue points to lower layers, while a web service failure points to higher layers. The model is useful because it separates these concerns clearly.

---

## OSI layers

| Layer | Role |
|---|---|
| 1 | Physical transmission |
| 2 | Data link and switching |
| 3 | Routing and IP |
| 4 | Transport and ports |
| 5 | Session control |
| 6 | Presentation and encoding |
| 7 | Application behavior |

---

## What makes the OSI model useful

The OSI model is a shared language, not a real device map. Networks do not always fail one layer at a time, but the model still helps organize thinking.

It is especially useful in support and operations conversations because it reduces confusion.

---

## How Trisul handles OSI context

Trisul can map traffic observations to network layers, helping teams interpret whether a problem looks physical, transport-related, or application-related.

---

## Related terms

- Network performance
- Application monitoring
- Traffic direction
- Packet loss
- Congestion detection