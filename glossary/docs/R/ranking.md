---
title: What is ranking in network analytics?
description: Ranking in network analytics is the ordering of entities such as hosts, flows, or applications based on a chosen metric such as traffic volume, usage, or frequency.
sidebar_label: Ranking
sidebar_position: 255
slug: /glossary/ranking
keywords:
  - ranking
  - top n
  - ordered results
  - analytics ranking
  - top hosts
  - top applications
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ranking in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranking in network analytics is the ordering of entities such as hosts, flows, or applications based on a chosen metric such as traffic volume, usage, or frequency."
      }
    },
    {
      "@type": "Question",
      "name": "Why is ranking useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranking is useful because it highlights the most important or most active entities first."
      }
    },
    {
      "@type": "Question",
      "name": "What can be ranked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hosts, flows, users, applications, subscribers, and alerts can all be ranked."
      }
    },
    {
      "@type": "Question",
      "name": "How is ranking used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranking is used to simplify analysis, prioritize attention, and create top-N views."
      }
    }
  ]
};

# What is ranking in network analytics?

Ranking in network analytics is the ordering of entities such as hosts, flows, or applications based on a chosen metric such as traffic volume, usage, or frequency.

---

## How ranking works

A system calculates a chosen metric for each entity and then sorts the results. The output may show the top consumers, most active sessions, or most frequent events.

This simplifies large datasets into a small list of high-value items. Operators can focus on the most important entries first.

---

## Ranking in operations

Ranking is useful for dashboards, reports, and investigations. It helps show which systems, users, or applications deserve the most attention.

It is also often used with heavy hitter analysis. Ranking makes dominant entities easy to spot.

---

## Common ranking targets

| Target | Example metric |
|---|---|
| Host | Total bytes |
| Flow | Session volume |
| Application | Usage share |
| Alert | Frequency |

---

## What makes ranking useful

Ranking is useful because it reduces complexity. Instead of reviewing every record, teams can look at the most significant ones first.

The value depends on choosing the right metric. A good ranking measure makes the results meaningful.

---

## How Trisul handles ranking

Trisul can produce ranked views of traffic, hosts, applications, and other entities to speed up analysis.

---

## Related terms

- Heavy hitters
- Summary statistics
- Batch processing
- Monthly usage reports
- Traffic estimation

---

## Frequently asked questions

### What is ranking in network analytics?

Ranking in network analytics is the ordering of entities such as hosts, flows, or applications based on a chosen metric such as traffic volume, usage, or frequency.

### Why is ranking useful?

Ranking is useful because it highlights the most important or most active entities first.

### What can be ranked?

Hosts, flows, users, applications, subscribers, and alerts can all be ranked.

### How is ranking used?

Ranking is used to simplify analysis, prioritize attention, and create top-N views.