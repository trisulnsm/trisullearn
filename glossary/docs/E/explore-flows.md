---
title: What is explore flows?
description: Explore flows is an investigative action that lets an analyst quickly browse and filter flow records related to a selected item. It is used to pivot from one traffic view into detailed flow analysis.
sidebar_label: Explore flows
sidebar_position: 176
slug: /glossary/explore-flows
keywords:
  - explore flows
  - flow exploration
  - flow drill down
  - traffic investigation
  - pivot flows
  - network analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is explore flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explore flows is an investigative action that lets an analyst quickly browse and filter flow records related to a selected item. It is used to pivot from one traffic view into detailed flow analysis."
      }
    },
    {
      "@type": "Question",
      "name": "Why is explore flows useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explore flows is useful because it speeds up investigation. Instead of building a query from scratch, an analyst can start from a selected host, application, or alert and open the relevant flows directly."
      }
    },
    {
      "@type": "Question",
      "name": "What can you do after exploring flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After exploring flows, analysts can identify peers, check timing, inspect volume, and pivot into packets or host views. It is a common step in troubleshooting and incident analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How does explore flows differ from a dashboard view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dashboard view gives a summary, while explore flows opens the underlying records for deeper inspection. It is a drill-down action rather than a summary view."
      }
    }
  ]
};

# What is explore flows?

Explore flows is an investigative action that lets an analyst quickly browse and filter flow records related to a selected item. It is used to pivot from one traffic view into detailed flow analysis.

---

## How explore flows works

An analyst starts with a host, IP, application, or alert and chooses to explore related flows. The system then shows the matching flow records already scoped to that selection.

This removes the need to write a manual query. The analyst can immediately inspect peers, ports, timing, and traffic volume.

---

## Explore flows in network operations

Explore flows is one of the fastest ways to move from a summary to evidence. It is useful for troubleshooting, security investigations, and traffic validation.

If a host looks suspicious in a dashboard, exploring its flows reveals where it is talking, when it is active, and how much traffic it is generating.

---

## Common follow-up actions

| Action | Purpose |
|---|---|
| Inspect peers | See who the host talks to |
| Check volume | Understand size of traffic |
| Review timing | Spot bursts or patterns |
| Pivot to packets | Get packet-level evidence |

---

## What makes explore flows work in practice

The action is most useful when the traffic data is well indexed. Fast lookup turns a simple click into a powerful investigation tool.

Clear context also matters. Analysts need to know whether they are exploring a single host, a subnet, or a conversation.

---

## How Trisul handles explore flows

Trisul provides explore-flows style drill-downs so analysts can move quickly from a summary view into the underlying traffic records.

---

## Related terms

- Flow tracker
- Context menu
- Traffic investigation
- Host monitor
- Drill-down