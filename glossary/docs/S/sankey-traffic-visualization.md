---
title: What is Sankey traffic visualization?
description: Sankey traffic visualization displays network traffic flows using Sankey diagrams showing source-to-destination traffic with flow width proportional to bandwidth. It provides intuitive visualization of traffic patterns and top talkers.
sidebar_label: Sankey traffic visualization
sidebar_position: 98
slug: /glossary/sankey-traffic-visualization
keywords:
  - Sankey traffic visualization
  - Sankey diagram
  - traffic visualization
  - flow visualization
  - network visualization
  - traffic diagram
  - bandwidth visualization
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Sankey traffic visualization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sankey traffic visualization displays network traffic flows using Sankey diagrams showing source-to-destination traffic with flow width proportional to bandwidth. It provides intuitive visualization of traffic patterns and top talkers. Sankey diagrams show where traffic flows between network entities."
      }
    },
    {
      "@type": "Question",
      "name": "How does Sankey diagram work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sankey diagrams display nodes representing network entities (IPs, ASNs, applications) and links showing traffic between them. Link width is proportional to bandwidth. The diagram visually shows which conversations consume most bandwidth. Flow direction is indicated by arrow direction."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Sankey visualization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sankey visualization provides intuitive understanding of traffic patterns. Large flows are immediately visible through wide links. Top talkers stand out. Traffic distribution across multiple destinations is clear. Sankey diagrams enable rapid identification of traffic anomalies."
      }
    },
    {
      "@type": "Question",
      "name": "When is Sankey visualization used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sankey visualization is used for traffic pattern analysis, top talkers identification, peering relationship analysis, capacity planning showing traffic distribution, and security analysis showing traffic to suspicious destinations. It is effective for presenting traffic data to non-technical stakeholders."
      }
    }
  ]
};

# What is Sankey traffic visualization?

Sankey traffic visualization displays network traffic flows using Sankey diagrams showing source-to-destination traffic with flow width proportional to bandwidth. It provides intuitive visualization of traffic patterns and top talkers. Sankey diagrams show where traffic flows between network entities.

---

## How Sankey visualization works

Sankey diagrams display nodes representing network entities and links showing traffic between them. Nodes represent IPs, ASNs, applications, or countries. Links show traffic volumes with width proportional to bandwidth. Flow direction is indicated by arrow direction.

Traffic data is aggregated by source-destination pairs. The top N pairs are displayed to avoid clutter. Link colors indicate traffic type or direction. Hovering over links shows exact bandwidth values.

---

## Sankey visualization in network operations

In the NOC, use Sankey visualization to understand traffic distribution across destinations. Top talkers stand out through wide links. Capacity planning uses Sankey diagrams to visualize traffic to specific destinations for peering decisions.

Security teams use Sankey visualization to identify suspicious traffic patterns. Traffic to unknown destinations appears as links to unexpected nodes. Anomalous traffic volumes stand out through unusually wide links.

---

## Sankey diagram elements

| Element | Description |
|---|---|
| Nodes | Network entities (IPs, ASNs, applications) |
| Links | Traffic flows between entities |
| Link width | Proportional to bandwidth |
| Arrow direction | Traffic flow direction |
| Colors | Traffic type or category |
| Hover tooltip | Exact bandwidth values |

---

## What makes Sankey visualization work in practice

Aggregation level determines diagram clarity. Too many nodes and links create clutter. Too few nodes hide important details. Display top N conversations by bandwidth to balance detail and clarity.

Real-time updates enable live traffic visualization. Sankey diagrams can update every few seconds showing current traffic patterns. This enables rapid detection of traffic anomalies.

---

## How Trisul handles Sankey traffic visualization

Trisul provides Sankey traffic visualization through traffic analysis dashboards showing flow patterns between network entities. Traffic data is aggregated by source-destination pairs. Sankey diagrams display top conversations with flow width proportional to bandwidth. Login as user to view traffic visualization dashboards. Full documentation is at https://docs.trisul.org/docs/ug/cg/tasks/.

---

## Related terms

- [What is traffic visualization?](/glossary/traffic-visualization)
- [What is top talkers?](/glossary/top-talkers)
- [What is traffic pattern analysis?](/glossary/traffic-pattern-analysis)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is network visualization?](/glossary/network-visualization)

---

## Frequently asked questions

### What is Sankey traffic visualization?

Sankey traffic visualization displays network traffic flows using Sankey diagrams showing source-to-destination traffic with flow width proportional to bandwidth. It provides intuitive visualization of traffic patterns and top talkers. Sankey diagrams show where traffic flows between network entities.

### How does Sankey diagram work?

Sankey diagrams display nodes representing network entities (IPs, ASNs, applications) and links showing traffic between them. Link width is proportional to bandwidth. The diagram visually shows which conversations consume most bandwidth. Flow direction is indicated by arrow direction.

### What are the benefits of Sankey visualization?

Sankey visualization provides intuitive understanding of traffic patterns. Large flows are immediately visible through wide links. Top talkers stand out. Traffic distribution across multiple destinations is clear. Sankey diagrams enable rapid identification of traffic anomalies.

### When is Sankey visualization used?

Sankey visualization is used for traffic pattern analysis, top talkers identification, peering relationship analysis, capacity planning showing traffic distribution, and security analysis showing traffic to suspicious destinations. It is effective for presenting traffic data to non-technical stakeholders.