---
title: What is per-flow indexing?
description: Per-flow indexing is the organization of traffic records so each flow can be stored, searched, and retrieved efficiently by its unique identifiers.
sidebar_label: Per-flow indexing
sidebar_position: 238
slug: /glossary/per-flow-indexing
keywords:
  - per-flow indexing
  - flow indexing
  - traffic indexing
  - flow records
  - searchable flows
  - network records
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is per-flow indexing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per-flow indexing is the organization of traffic records so each flow can be stored, searched, and retrieved efficiently by its unique identifiers."
      }
    },
    {
      "@type": "Question",
      "name": "Why is per-flow indexing useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per-flow indexing is useful because it makes large traffic datasets faster to query and analyze."
      }
    },
    {
      "@type": "Question",
      "name": "What does per-flow indexing support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per-flow indexing supports searching, drill-down analysis, reporting, and forensic review."
      }
    },
    {
      "@type": "Question",
      "name": "How is per-flow indexing used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per-flow indexing is used to locate specific conversations, users, or sessions in network traffic history."
      }
    }
  ]
};

# What is per-flow indexing?

Per-flow indexing is the organization of traffic records so each flow can be stored, searched, and retrieved efficiently by its unique identifiers.

---

## How per-flow indexing works

Each traffic flow is assigned or mapped to indexed fields such as source, destination, protocol, and time. That makes it possible to retrieve a specific flow quickly from a large dataset.

This is important when the system must handle many records. Good indexing reduces lookup time and makes drill-down analysis practical.

---

## Per-flow indexing in operations

Operations teams use per-flow indexing to search traffic history without scanning everything. It is especially helpful during troubleshooting and incident review.

It also supports reporting and filtering. Analysts can pull out just the flows that match a host, service, or time window.

---

## Common indexed fields

| Field | Meaning |
|---|---|
| Source | Flow origin |
| Destination | Flow target |
| Protocol | Traffic type |
| Time | When the flow occurred |

---

## What makes per-flow indexing useful

Per-flow indexing is useful because it turns large traffic stores into searchable records. Without it, analysis would be slow and cumbersome.

It is most valuable when combined with retention and good metadata. That combination makes history easy to explore.

---

## How Trisul handles per-flow indexing

Trisul uses indexed flow storage so traffic conversations can be searched and analyzed efficiently over time.

---

## Related terms

- Flow attribution
- Traffic estimation
- Forensic analysis
- Storage
- Network traffic analysis

---

## Frequently asked questions

### What is per-flow indexing?

Per-flow indexing is the organization of traffic records so each flow can be stored, searched, and retrieved efficiently by its unique identifiers.

### Why is per-flow indexing useful?

Per-flow indexing is useful because it makes large traffic datasets faster to query and analyze.

### What does per-flow indexing support?

Per-flow indexing supports searching, drill-down analysis, reporting, and forensic review.

### How is per-flow indexing used?

Per-flow indexing is used to locate specific conversations, users, or sessions in network traffic history.