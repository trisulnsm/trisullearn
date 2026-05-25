---
title: What is conversation view?
description: Conversation view is a flow-analysis representation that combines traffic from both directions of a network exchange into a single conversational record for easier analysis and investigation.
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
  - conversational analytics
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
        "text": "Conversation view presents traffic exchanged between two endpoints as a single conversational record containing directional traffic metrics such as bytes, packets, duration, ports, and protocol information."
      }
    },
    {
      "@type": "Question",
      "name": "How does conversation view relate to flow stitching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation-oriented analysis commonly relies on flow correlation or flow stitching techniques that associate related directional traffic records into a unified conversational representation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between conversation view and flow legs view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view emphasizes readability by combining related traffic directions, while flow legs view preserves individual directional or exporter-specific flow records for detailed path and topology analysis."
      }
    },
    {
      "@type": "Question",
      "name": "When is conversation view not enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversation view may not preserve detailed exporter, interface, or path-level visibility required for topology analysis, path tracing, or multi-hop traffic investigation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use conversation view?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports conversation-oriented traffic analysis workflows through flow correlation, bidirectional traffic visibility, and investigation workflows available in Explore Flows and related analytics views."
      }
    }
  ]
};

# What is conversation view?

**Conversation view** is a flow-analysis representation that combines traffic from both directions of a network exchange into a single conversational record for easier analysis and investigation.

Traditional flow exporters commonly generate separate unidirectional records for each traffic direction. Conversation-oriented analysis associates these directional records into a unified view of the communication exchange.

Conversation view is commonly used in:
- Flow analytics platforms
- NetFlow and IPFIX analysis
- Security investigations
- Traffic troubleshooting
- Network operations workflows

Trisul supports conversation-oriented traffic analysis workflows through bidirectional traffic visibility and flow correlation capabilities.

---

## How conversation view works

Conversation view correlates related traffic records representing opposite directions of the same communication exchange.

Correlation commonly uses:
- Source and destination IP addresses
- Source and destination ports
- Protocol identifiers
- Timing information
- Flow characteristics

Typical workflow:

1. **Flow export** → Devices export directional traffic records
2. **Flow correlation** → Related directional records are associated
3. **Conversation assembly** → Bidirectional traffic metrics are combined
4. **Conversation analysis** → Operators investigate the communication exchange
5. **Traffic investigation** → Analysts pivot into related operational views

The resulting conversational representation may include:
- Source and destination endpoints
- Directional byte counts
- Directional packet counts
- Session duration
- Protocol information
- Traffic timing details

Some platforms may also perform deduplication or normalization before conversation-oriented analysis.

---

## Conversation view in network operations

Conversation view simplifies operational analysis by presenting both sides of a communication exchange together.

Common operational use cases include:

- **Traffic investigation**: Analyze communication behavior between endpoints
- **Security analysis**: Investigate suspicious inbound and outbound traffic ratios
- **Performance troubleshooting**: Understand request-response traffic behavior
- **Flow analytics**: Identify dominant traffic conversations
- **Historical investigation**: Review prior communications involving selected hosts

Conversation-oriented analysis is especially useful when investigating large traffic volumes where manually correlating directional records would be difficult.

---

## Conversation view vs flow legs view

| Dimension | Conversation view | Flow legs view |
|---|---|---|
| Representation | Combined conversational analysis | Individual directional flow records |
| Readability | Easier communication analysis | More detailed but less compact |
| Directional visibility | Combined bidirectional metrics | Per-direction and exporter visibility |
| Operational focus | Endpoint conversations | Path and topology investigation |
| Typical use | Traffic and security investigation | Interface and multi-hop analysis |

Conversation view improves readability, while legs-oriented views preserve lower-level operational detail.

---

## Why conversation view is useful

Conversation-oriented analysis improves visibility into communication behavior.

Benefits include:
- Easier traffic interpretation
- Faster investigations
- Simplified bidirectional analysis
- Better visibility into request-response behavior
- Improved traffic correlation
- Faster operational workflows

Conversation views help analysts understand communication exchanges without manually pairing directional records.

---

## Conversation view and flow correlation

Conversation-oriented analytics often rely on flow correlation workflows.

| Workflow | Purpose |
|---|---|
| Flow correlation | Associate related directional records |
| Flow stitching | Merge related traffic directions |
| Deduplication | Reduce overlapping or duplicate records |
| Bidirectional analysis | Analyze ingress and egress behavior |

The exact implementation depends on exporter behavior, telemetry format, and analytics platform design.

---

## How Trisul handles conversation view

Trisul supports conversation-oriented traffic analysis through flow correlation and bidirectional traffic visibility workflows.

Relevant capabilities include:

- **Conversation-oriented traffic analytics**
- **Bidirectional traffic visibility**
- **Explore Flows integration** for conversational investigation
- **Flow correlation workflows**
- **Top-K analytics** for identifying dominant traffic conversations
- **Aggregate Flows** for summarizing communication activity
- **Historical traffic investigation workflows**
- **Traffic drill-down and pivot analysis**

These capabilities help operators investigate communication behavior, analyze traffic relationships, and improve operational visibility.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection

---

## Related terms

- [Flow stitching](/glossary/flow-stitching)
- [Flow legs](/glossary/flow-legs)
- [Flow deduplication](/glossary/flow-deduplication)
- [Flow monitoring](/glossary/flow-monitoring)
- [Flow](/glossary/flow)
- [Bidirectional flow](/glossary/bidirectional-flow)
- [Explore Flows](/glossary/explore-flows)

---

## Frequently asked questions

### What does conversation view show?

Conversation view presents traffic exchanged between two endpoints as a single conversational record containing directional traffic metrics such as bytes, packets, duration, ports, and protocol information.

### How does conversation view relate to flow stitching?

Conversation-oriented analysis commonly relies on flow correlation or flow stitching techniques that associate related directional traffic records into a unified conversational representation.

### What is the difference between conversation view and flow legs view?

Conversation view emphasizes readability by combining related traffic directions, while flow legs view preserves individual directional or exporter-specific flow records for detailed path and topology analysis.

### When is conversation view not enough?

Conversation view may not preserve detailed exporter, interface, or path-level visibility required for topology analysis, path tracing, or multi-hop traffic investigation.

### How does Trisul use conversation view?

Trisul supports conversation-oriented traffic analysis workflows through flow correlation, bidirectional traffic visibility, and investigation workflows available in Explore Flows and related analytics views.