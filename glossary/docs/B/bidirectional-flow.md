---
title: What is bidirectional flow?
description: A bidirectional flow combines traffic information from both directions of a communication exchange into a single conversational view. Trisul supports conversation-oriented flow analysis through bidirectional traffic visibility and flow correlation workflows.
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
  "description": "A bidirectional flow combines traffic information from both directions of a communication exchange into a single conversational view. Trisul supports conversation-oriented flow analysis through bidirectional traffic visibility and flow correlation workflows.",
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

A **bidirectional flow** (or **biflow**) represents traffic exchanged between two endpoints as a single conversational record containing information from both directions of communication.

Traditional flow exporters often generate separate unidirectional records for each direction of traffic. Bidirectional flow analysis correlates these related records into a unified conversation-oriented view.

Trisul supports conversation-oriented flow analysis through bidirectional traffic visibility and flow correlation workflows.

---

## How it works

Bidirectional flow analysis correlates matching traffic records that represent opposite directions of the same communication exchange.

Correlation is typically based on:
- Source and destination IP addresses
- Source and destination ports
- Protocol
- Timing information

Typical workflow:

1. **Flow export** → Devices export flow records for observed traffic
2. **Flow correlation** → Matching directional records are identified
3. **Conversation assembly** → Related traffic directions are associated into one conversation
4. **Metric calculation** → Directional bytes, packets, and timing information are analyzed
5. **Conversation analysis** → Operators investigate communication behavior using a unified traffic view

Some implementations may also perform deduplication or normalization before conversation analysis.

---

## In network operations

Bidirectional flow analysis improves visibility into network conversations and communication behavior.

Common operational use cases include:

- **Traffic investigation**: Review request-response behavior in one view
- **Security analysis**: Compare ingress and egress traffic ratios
- **Conversation tracking**: Analyze communications between hosts
- **Troubleshooting**: Understand application exchange behavior
- **Traffic profiling**: Identify dominant conversations and long-duration exchanges

Trisul supports these workflows through conversation-oriented traffic analysis and flow visibility.

---

## Bidirectional flow vs unidirectional flow

| Dimension | Bidirectional flow | Unidirectional flow |
|---|---|---|
| View model | Combined conversation | Single traffic direction |
| Records per exchange | Typically one logical conversation | One record per direction |
| Readability | Easier conversation analysis | Requires directional correlation |
| Directional metrics | Includes ingress and egress visibility | Limited to one direction |
| Operational focus | Conversation analysis | Traffic observation and export |

Bidirectional flows simplify analysis by presenting both directions of communication together.

---

## Fields commonly associated with bidirectional flows

| Field | Description |
|---|---|
| Source IP | One endpoint in the conversation |
| Destination IP | Other endpoint in the conversation |
| Source port | Source transport port |
| Destination port | Destination transport port |
| Protocol | Transport protocol |
| Bytes sent | Traffic transmitted in one direction |
| Bytes received | Traffic transmitted in the opposite direction |
| Packets sent | Packet count in one direction |
| Packets received | Packet count in the opposite direction |
| Start time | Conversation start timestamp |
| End time | Conversation end timestamp |
| Duration | Total conversation duration |

Available fields depend on exporter capabilities and flow processing workflows.

---

## Why bidirectional flows are useful

Bidirectional flow analysis improves visibility into communication behavior.

Benefits include:

- Easier interpretation of network conversations
- Better visibility into request-response traffic patterns
- Improved investigation workflows
- Simplified traffic analysis for operators
- Enhanced visibility into directional traffic ratios
- Improved context for security and operational analysis

Bidirectional analysis is especially useful when examining application behavior, suspicious traffic exchanges, or long-lived conversations.

---

## Bidirectional flow and conversation view

Conversation-oriented displays commonly use bidirectional flow correlation to present network exchanges in a unified format.

| Term | Meaning |
|---|---|
| Bidirectional flow | Correlated traffic representing both directions |
| Conversation view | Interface or analytical representation of conversations |
| Flow legs | Individual directional traffic records |

Conversation views help operators analyze communication behavior without manually correlating separate traffic directions.

---

## How Trisul handles bidirectional flows

Trisul supports conversation-oriented flow analytics through bidirectional traffic visibility and flow correlation workflows.

Relevant capabilities include:

- **Conversation-oriented traffic analysis**
- **Flow correlation and conversation visibility**
- **Directional traffic metrics** for ingress and egress analysis
- **Explore Flows integration** for conversation investigation
- **Top-K analytics** for identifying dominant traffic conversations
- **Aggregate Flows** for historical conversation trend analysis
- **Flow investigation workflows** for operational and security analysis

These capabilities help operators analyze communication behavior, investigate suspicious exchanges, and understand traffic relationships between hosts.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection

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

---

## Frequently asked questions

### How is a bidirectional flow created?

A bidirectional flow is created by correlating traffic records representing opposite directions of the same communication exchange.

### What fields does a bidirectional flow contain?

Typical fields include source and destination addresses, ports, protocol, directional byte and packet counts, timestamps, and duration information.

### Why use bidirectional flows instead of unidirectional flows?

Bidirectional flows simplify conversation analysis by presenting both directions of communication together in a unified view.

### How does bidirectional flow relate to conversation view?

Conversation view is the analytical or display representation of bidirectional communication behavior derived from correlated flow records.

### How does Trisul create bidirectional flows?

Trisul supports conversation-oriented flow analysis using flow correlation workflows and bidirectional traffic visibility.

### What is the advantage of conversation-oriented flow analysis?

It improves operational visibility by making communication behavior easier to interpret and investigate.