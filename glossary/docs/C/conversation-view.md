---
title: What is conversation view?
description: Conversation view is a display mode in flow analysis that stitches unidirectional flow records into bidirectional conversations, showing both sides of a network exchange as a single record with combined directional metrics.
sidebar_label: Conversation view
sidebar_position: 27
slug: /glossary/conversation-view
keywords:
  - conversation view
  - flow conversation
  - bidirectional flow
  - flow stitching
  - netflow conversation analysis
  - flow pair
  - biflow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does conversation view show?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view shows both directions of a network exchange as a single record: source and destination IP and port, bytes sent and received, packets sent and received, start time, duration, and protocol. It replaces two unidirectional records with one bidirectional record that makes the full exchange readable at a glance."
      }
    },
    {
      "@type": "Question",
      "name": "How does conversation view relate to flow stitching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow stitching is the process that produces conversation view. Stitching matches two unidirectional records with reversed 5-tuples and merges them into one bidirectional record. Conversation view is the display output of that process. Without stitching, analysts must mentally pair two records to understand a single exchange."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between conversation view and flow legs view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow legs view shows all individual records as exported by each device, preserving per-device and per-interface detail. Conversation view merges records into bidirectional pairs for readability. Legs view is for topology-level investigation; conversation view is for understanding individual exchanges."
      }
    },
    {
      "@type": "Question",
      "name": "When is conversation view not enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view loses per-device detail. It cannot tell you which router interface a flow entered on, or how traffic volumes differed at each hop. For path tracing, interface-level drilldown, or multi-hop analysis, the underlying leg records are needed."
      }
    }
  ]
};

# What is conversation view?

Conversation view stitches unidirectional flow records into bidirectional conversations, showing both sides of a network exchange as a single record. NetFlow exporters emit one record per direction by default. Conversation view pairs those records by reversed 5-tuple, combining directional byte and packet counts into one readable entry per exchange.

---

## How it works

When two unidirectional flow records with reversed 5-tuples arrive at the collector, the stitching engine matches them by source/destination IP and port pairs and merges them. The resulting conversation record shows bytes in, bytes out, packets in, packets out, start time, and duration. Duplicate legs from multiple exporters on the same path are deduplicated before stitching.

---

## In network operations

- **NOC:** Read bandwidth consumed per exchange at a glance without manually pairing two records.
- **SOC:** Identify data transfer ratios between internal and external hosts to detect exfiltration patterns.
- **Investigation:** Pivot from a suspicious IP directly to all conversations it participated in, with both directions visible in one row.

---

## Conversation view vs legs view

| Dimension | Conversation view | Legs view |
|---|---|---|
| Records per exchange | One bidirectional record | One per exporting device per direction |
| Per-device detail | Lost on merge | Preserved |
| Readability | High | Low for multi-hop paths |
| Best fit | Understanding individual exchanges | Topology and path tracing |

---

## How Trisul handles it

Trisul performs NetFlow conversation analysis by deduplicating overlapping flow records and merging unidirectional flows into bidirectional conversations. Explore Flows displays results in conversation view by default, with legs view available for path-level investigation. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow stitching?](/docs/glossary/flow-stitching)
- [What is flow legs?](/docs/glossary/flow-legs)
- [What is flow deduplication?](/docs/glossary/flow-deduplication)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is a flow?](/docs/glossary/flow)

---

## Frequently asked questions

### What does conversation view show?

Conversation view shows both directions of a network exchange as a single record: source and destination IP and port, bytes sent and received, packets sent and received, start time, duration, and protocol. It replaces two unidirectional records with one bidirectional record that makes the full exchange readable at a glance.

### How does conversation view relate to flow stitching?

Flow stitching is the process that produces conversation view. Stitching matches two unidirectional records with reversed 5-tuples and merges them into one bidirectional record. Conversation view is the display output of that process. Without stitching, analysts must mentally pair two records to understand a single exchange.

### What is the difference between conversation view and flow legs view?

Flow legs view shows all individual records as exported by each device, preserving per-device and per-interface detail. Conversation view merges records into bidirectional pairs for readability. Legs view is for topology-level investigation; conversation view is for understanding individual exchanges.

### When is conversation view not enough?

Conversation view loses per-device detail. It cannot tell you which router interface a flow entered on, or how traffic volumes differed at each hop. For path tracing, interface-level drilldown, or multi-hop analysis, the underlying leg records are needed.