---
title: What is a point-to-point link?
description: A point-to-point link is a direct communication path between exactly two network devices or endpoints. It carries traffic only between those two points, without shared access by other devices.
sidebar_label: Point to point link
sidebar_position: 170
slug: /glossary/point-to-point-link
keywords:
  - point to point link
  - P2P link
  - direct link
  - network link
  - dedicated circuit
  - WAN link
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a point-to-point link?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A point-to-point link is a direct communication path between exactly two network devices or endpoints. It carries traffic only between those two points, without shared access by other devices."
      }
    },
    {
      "@type": "Question",
      "name": "Where are point-to-point links used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point-to-point links are used in WAN circuits, leased lines, backhaul links, radio links, and direct interconnects between sites or devices."
      }
    },
    {
      "@type": "Question",
      "name": "Why are point-to-point links important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point-to-point links are important because they simplify traffic analysis and routing. Since only two endpoints share the link, attribution and troubleshooting are usually easier."
      }
    },
    {
      "@type": "Question",
      "name": "How are point-to-point links monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point-to-point links are monitored by tracking utilization, errors, loss, latency, and traffic direction. This shows how heavily the dedicated path is being used."
      }
    }
  ]
};

# What is a point-to-point link?

A point-to-point link is a direct communication path between exactly two network devices or endpoints. It carries traffic only between those two points, without shared access by other devices.

---

## How a point-to-point link works

The link is dedicated to a single pair of endpoints. Traffic enters at one end and exits at the other without intermediate sharing by other hosts.

This makes the path easy to reason about. There is usually no ambiguity about where the traffic came from or where it is going.

---

## Point-to-point links in network operations

Point-to-point links are common in WANs, leased circuits, backhaul paths, and direct interconnects. They are also used between routers, branches, and data centers.

These links are often critical because many services depend on them. If the link fails or saturates, the connected sites are affected immediately.

---

## Point-to-point vs shared links

| Link type | Description |
|---|---|
| Point-to-point | Two endpoints only |
| Shared link | Multiple devices share capacity |
| Benefit | Easier attribution |
| Benefit | Simpler troubleshooting |

---

## What makes point-to-point links useful

Because only two endpoints are involved, performance analysis is usually straightforward. Utilization, loss, and delay can be tied directly to the link.

The main risk is assuming the link is always healthy because it is dedicated. Even point-to-point links can congest or fail.

---

## How Trisul handles point-to-point links

Trisul can monitor traffic across point-to-point links and show utilization and flow behavior for that dedicated path.

---

## Related terms

- Interface monitoring
- WAN link
- Dedicated circuit
- Traffic analysis
- Link utilization