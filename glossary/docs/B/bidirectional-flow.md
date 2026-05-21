---
title: What is bidirectional flow?
description: A bidirectional flow is a network conversation that combines two unidirectional flow records into a single record showing both directions of communication between two endpoints.
sidebar_label: Bidirectional flow
sidebar_position: 33
slug: /glossary/bidirectional-flow
keywords:
  - bidirectional flow
  - biflow
  - flow conversation
  - bidirectional network flow
  - flow stitching
  - conversational flow
  - netflow biflow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is a bidirectional flow created?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A bidirectional flow is created by matching two unidirectional flow records with reversed 5-tuples. The source and destination IP addresses and ports are swapped between the two records. When the flow collector detects this reversal, it stitches them into one bidirectional record with combined directional metrics."
      }
    },
    {
      "@type": "Question",
      "name": "What fields does a bidirectional flow contain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A bidirectional flow contains source and destination IP and port, total bytes and packets, bytes in and bytes out, packets in and packets out, start time, last time, and duration. It also includes protocol information and application identification if available."
      }
    },
    {
      "@type": "Question",
      "name": "Why use bidirectional flows instead of unidirectional flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bidirectional flows make network conversations readable at a glance. Instead of mentally pairing two records, analysts see the full exchange in one row. They are more storage-efficient because two exported records become one stored record. They also make data transfer ratio analysis easier for detecting exfiltration."
      }
    },
    {
      "@type": "Question",
      "name": "How does bidirectional flow relate to conversation view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view is the display mode that shows bidirectional flows. Bidirectional flow is the underlying data structure. When an operator clicks on a conversation in the interface, they are viewing a stitched bidirectional flow record."
      }
    }
  ]
};

# What is bidirectional flow?

A bidirectional flow combines two unidirectional flow records into a single record showing both directions of communication between two endpoints. NetFlow exporters emit one record per direction by default. Bidirectional flows are created by stitching matching records with reversed 5-tuples.

---

## How it works

When two unidirectional records with reversed IP addresses and ports arrive at the collector, they are stitched into one bidirectional flow. The stitched flow shows bytes in, bytes out, packets in, packets out, start time, and duration. Duplicate legs are deduplicated before stitching to avoid overcounting.

---

## In network operations

- **NOC:** Read bandwidth consumed per exchange at a glance without manually pairing two records.
- **SOC:** Identify data transfer ratios between internal and external hosts to detect exfiltration patterns.
- **Investigation:** Pivot from a suspicious IP directly to all conversations it participated in, with both directions visible in one row.

---

## Bidirectional flow vs unidirectional flow

| Dimension | Bidirectional flow | Unidirectional flow |
|---|---|---|
| Records per exchange | One | Two (one per direction) |
| Readability | High | Low, requires manual pairing |
| Storage efficiency | Higher | Lower |
| Best fit | Conversation analysis | Topology and interface-level analysis |

---

## How Trisul handles it

Trisul performs NetFlow conversation analysis by deduplicating overlapping flow records and merging unidirectional flows into bidirectional conversations. Explore Flows displays results in conversation view by default, with legs view available for path-level investigation. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow stitching?](/docs/glossary/flow-stitching)
- [What is conversation view?](/docs/glossary/conversation-view)
- [What is flow legs?](/docs/glossary/flow-legs)
- [What is flow deduplication?](/docs/glossary/flow-deduplication)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)

---

## Frequently asked questions

### How is a bidirectional flow created?

A bidirectional flow is created by matching two unidirectional flow records with reversed 5-tuples. The source and destination IP addresses and ports are swapped between the two records. When the flow collector detects this reversal, it stitches them into one bidirectional record with combined directional metrics.

### What fields does a bidirectional flow contain?

A bidirectional flow contains source and destination IP and port, total bytes and packets, bytes in and bytes out, packets in and packets out, start time, last time, and duration. It also includes protocol information and application identification if available.

### Why use bidirectional flows instead of unidirectional flows?

Bidirectional flows make network conversations readable at a glance. Instead of mentally pairing two records, analysts see the full exchange in one row. They are more storage-efficient because two exported records become one stored record. They also make data transfer ratio analysis easier for detecting exfiltration.

### How does bidirectional flow relate to conversation view?

Conversation view is the display mode that shows bidirectional flows. Bidirectional flow is the underlying data structure. When an operator clicks on a conversation in the interface, they are viewing a stitched bidirectional flow record.