---
title: What is bidirectional flow?
description: A bidirectional flow combines two unidirectional flow records into a single record showing both directions of communication between two endpoints. Trisul performs NetFlow conversation analysis by deduplicating overlapping records and merging flows into bidirectional conversations.
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
  - conversation view
  - flow monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Bidirectional Flow?",
  "description": "A bidirectional flow combines two unidirectional flow records into a single record showing both directions of communication between two endpoints. Trisul performs NetFlow conversation analysis by deduplicating overlapping records and merging flows into bidirectional conversations.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Bidirectional Flow",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is bidirectional flow?

A **bidirectional flow** (also called **biflow**) combines two unidirectional flow records into a **single record** showing both directions of communication between two endpoints. NetFlow exporters emit one record per direction by default. Bidirectional flows are created by stitching matching records with reversed 5-tuples. Trisul performs NetFlow conversation analysis by deduplicating overlapping records and merging flows into bidirectional conversations.

---

## How it works

When two unidirectional records with reversed IP addresses and ports arrive at the collector, they are stitched into one bidirectional flow. The stitched flow shows bytes in, bytes out, packets in, packets out, start time, and duration. Duplicate legs are deduplicated before stitching to avoid overcounting.

The bidirectional flow creation process:
1. **Unidirectional flow export** → NetFlow exporter sends one record per direction
2. **5-tuple matching** → Collector looks for records with reversed source/destination IP and ports
3. **Deduplication** → Overlapping flow records are deduplicated to avoid overcounting
4. **Flow stitching** → Matching unidirectional flows are merged into one bidirectional record
5. **Metric aggregation** → Bytes, packets, and timing data are combined from both directions
6. **Conversation display** → Bidirectional flow shown in conversation view

![./images/bidirectional-flow.png](./images/bidirectional-flow.png)

---

## In network operations

- **NOC:** Read bandwidth consumed per exchange at a glance without manually pairing two records.
- **SOC:** Identify data transfer ratios between internal and external hosts to detect exfiltration patterns.
- **Investigation:** Pivot from a suspicious IP directly to all conversations it participated in, with both directions visible in one row.

Trisul's conversation view displays bidirectional flows by default, enabling all three operational use cases.

---

## Bidirectional flow vs unidirectional flow

| Dimension | Bidirectional flow | Unidirectional flow |
|---|---|---|
| Records per exchange | One | Two (one per direction) |
| Readability | High, conversation at a glance | Low, requires manual pairing |
| Storage efficiency | Higher, half the records | Lower, two records per conversation |
| Directional metrics | Bytes in/out, packets in/out | Single direction only |
| Best fit | Conversation analysis, exfiltration detection | Topology and interface-level analysis |

Bidirectional flows make network conversations readable at a glance and are more storage-efficient.

---

## Fields in a bidirectional flow

| Field | Description |
|---|---|
| Source IP | Original conversation initiator |
| Destination IP | Conversation target |
| Source port | Initiator's port |
| Destination port | Target's port |
| Protocol | TCP, UDP, ICMP, etc. |
| Total bytes | Sum of bytes in both directions |
| Total packets | Sum of packets in both directions |
| Bytes in | Bytes received (ingress) |
| Bytes out | Bytes sent (egress) |
| Packets in | Packets received (ingress) |
| Packets out | Packets sent (egress) |
| Start time | When conversation began |
| Last time | When conversation ended |
| Duration | Total conversation time |
| Application | Application identification if available |

---

## Why use bidirectional flows instead of unidirectional flows

Bidirectional flows provide several key advantages:

- **Readability**: Make network conversations readable at a glance. Instead of mentally pairing two records, analysts see the full exchange in one row
- **Storage efficiency**: More storage-efficient because two exported records become one stored record
- **Data transfer ratio analysis**: Make it easier to detect data exfiltration by comparing bytes in vs bytes out
- **Faster investigation**: Analysts can pivot from a suspicious IP directly to all conversations with both directions visible
- **Simplified reporting**: Reports show complete conversations without requiring post-processing to combine directions
- **Better context**: Security analysts see the full request/response pattern in one record

---

## How bidirectional flow relates to conversation view

Conversation view is the **display mode** that shows bidirectional flows. Bidirectional flow is the **underlying data structure**. When an operator clicks on a conversation in the interface, they are viewing a stitched bidirectional flow record.

| Term | Meaning |
|---|---|
| Bidirectional flow | The data structure (stitched flow record) |
| Conversation view | The display mode showing bidirectional flows |
| Flow legs | The individual unidirectional records that make up a bidirectional flow |

---

## How Trisul handles bidirectional flows

Trisul provides comprehensive bidirectional flow analysis through NetFlow conversation analysis:

- **Flow deduplication**: Trisul deduplicates overlapping flow records before stitching to avoid overcounting, ensuring accurate byte and packet counts in bidirectional flows
- **Flow stitching**: Trisul merges unidirectional flows into bidirectional conversations by matching records with reversed 5-tuples (source/destination IP and ports)
- **Conversation view by default**: Trisul's Explore Flows displays results in conversation view by default, showing bidirectional flows with both directions visible in one row
- **Legs view for path investigation**: Trisul provides a legs view option for path-level investigation, showing the individual unidirectional flow records that make up each bidirectional conversation
- **Directional metrics**: Trisul bidirectional flows include bytes in, bytes out, packets in, packets out, enabling data transfer ratio analysis for exfiltration detection
- **Top-K analytics for conversations**: Trisul's Top-K analytics identifies top conversations by volume, showing the most active bidirectional flow pairs
- **Aggregate Flows by conversation**: Summarize traffic by conversation over time for trend analysis and capacity planning
- **Apply Builder for conversation analysis**: Trisul's Apply Builder enables custom analysis of bidirectional flows with application-layer visibility

Trisul performs NetFlow conversation analysis by deduplicating overlapping flow records and merging unidirectional flows into bidirectional conversations. Explore Flows displays results in conversation view by default, with legs view available for path-level investigation.

---

## Related terms

- [Flow stitching](/glossary/flow-stitching)
- [Conversation view](/glossary/conversation-view)
- [Flow legs](/glossary/flow-legs)
- [Flow deduplication](/glossary/flow-deduplication)
- [Flow monitoring](/glossary/flow-monitoring)
- [NetFlow](/glossary/netflow)
- [5-tuple](/glossary/5-tuple)
- [Data exfiltration](/glossary/data-exfiltration)
- [Top-K analytics](/glossary/top-k-analytics)
- [Aggregate Flows](/glossary/aggregate-flows)
- [Explore Flows](/glossary/explore-flows)
- [Apply Builder](/glossary/apply-builder)

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

### How does Trisul create bidirectional flows?

Trisul creates bidirectional flows through NetFlow conversation analysis by deduplicating overlapping flow records to avoid overcounting, then merging unidirectional flows into bidirectional conversations by matching records with reversed 5-tuples. Explore Flows displays bidirectional flows in conversation view by default.

### What is the advantage of Trisul's conversation view?

Trisul's conversation view shows bidirectional flows by default, making network conversations readable at a glance with both directions visible in one row. It includes bytes in/out and packets in/out for data transfer ratio analysis, and provides legs view for path-level investigation when needed.