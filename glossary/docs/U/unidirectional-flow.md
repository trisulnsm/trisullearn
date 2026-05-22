---
title: What is unidirectional flow?
description: Unidirectional flow records traffic in one direction only from source to destination. NetFlow exports unidirectional flows where each direction is tracked separately. This differs from bidirectional flow which combines both directions.
sidebar_label: Unidirectional flow
sidebar_position: 94
slug: /glossary/unidirectional-flow
keywords:
  - unidirectional flow
  - one-way flow
  - flow direction
  - NetFlow direction
  - traffic direction
  - flow record
  - asymmetric flow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is unidirectional flow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unidirectional flow records traffic in one direction only from source to destination. NetFlow exports unidirectional flows where each direction is tracked separately. This differs from bidirectional flow which combines both directions into a single record."
      }
    },
    {
      "@type": "Question",
      "name": "How does unidirectional flow work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unidirectional flow exporters observe packets traveling from source to destination and create flow records for that direction only. Return traffic from destination to source creates a separate flow record with swapped source and destination. Two flow records exist for one conversation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between unidirectional and bidirectional flow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unidirectional flow creates separate records for each direction. Two records exist per conversation. Bidirectional flow combines both directions into one record with separate byte counts for each direction. One record exists per conversation. Bidirectional flow reduces flow record volume by half."
      }
    },
    {
      "@type": "Question",
      "name": "When is unidirectional flow used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unidirectional flow is used in NetFlow v5 and NetFlow v9 default mode. It is used when direction matters for analysis such as distinguishing inbound from outbound traffic. Unidirectional flow is simpler to implement but generates more flow records."
      }
    }
  ]
};

# What is unidirectional flow?

Unidirectional flow records traffic in one direction only from source to destination. NetFlow exports unidirectional flows where each direction is tracked separately. This differs from bidirectional flow which combines both directions into a single record.

---

## How unidirectional flow works

Unidirectional flow exporters observe packets traveling from source to destination and create flow records for that direction only. Return traffic from destination to source creates a separate flow record with swapped source and destination addresses and ports.

Two flow records exist for one TCP conversation. One record shows source to destination traffic. Another record shows destination to source traffic. This doubles flow record volume compared to bidirectional flow.

---

## Unidirectional flow in network operations

In the NOC, unidirectional flow enables distinguishing inbound from outbound traffic. Traffic analysis treats each direction separately. Security teams analyze source to destination and destination to source traffic independently.

Capacity planning uses unidirectional flow to track ingress and egress traffic separately. Interface utilization is measured per direction. This enables accurate bandwidth planning for asymmetrical traffic.

---

## Unidirectional vs bidirectional comparison

| Aspect | Unidirectional Flow | Bidirectional Flow |
|---|---|---|
| Records per conversation | 2 (one per direction) | 1 (combined) |
| Flow volume | Higher | Lower by half |
| Direction analysis | Separate per direction | Both directions in one record |
| Implementation | Simpler | More complex |
| NetFlow default | Yes (v5, v9) | Optional (v9 flexible) |

---

## What makes unidirectional flow work in practice

Flow record correlation enables conversation analysis. With unidirectional flow, analysts must correlate two records to see complete conversation. flowId or conversationId fields enable correlation. Without correlation, analysis treats each direction independently.

Storage requirements double with unidirectional flow. Two records per conversation means twice the flow data. For high-speed networks generating millions of flows per hour, this significantly impacts storage.

---

## How Trisul handles unidirectional flow

Trisul receives unidirectional flow data from NetFlow v5 and NetFlow v9 exporters. Trisul can correlate unidirectional flows to reconstruct bidirectional conversations. Flow records include direction information enabling separate analysis of inbound and outbound traffic. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is bidirectional flow?](/docs/glossary/bidirectional-flow)
- [What is NetFlow?](/docs/glossary/netflow)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is traffic direction?](/docs/glossary/traffic-direction)

---

## Frequently asked questions

### What is unidirectional flow?

Unidirectional flow records traffic in one direction only from source to destination. NetFlow exports unidirectional flows where each direction is tracked separately. This differs from bidirectional flow which combines both directions into a single record.

### How does unidirectional flow work?

Unidirectional flow exporters observe packets traveling from source to destination and create flow records for that direction only. Return traffic from destination to source creates a separate flow record with swapped source and destination. Two flow records exist for one conversation.

### What is the difference between unidirectional and bidirectional flow?

Unidirectional flow creates separate records for each direction. Two records exist per conversation. Bidirectional flow combines both directions into one record with separate byte counts for each direction. One record exists per conversation. Bidirectional flow reduces flow record volume by half.

### When is unidirectional flow used?

Unidirectional flow is used in NetFlow v5 and NetFlow v9 default mode. It is used when direction matters for analysis such as distinguishing inbound from outbound traffic. Unidirectional flow is simpler to implement but generates more flow records.