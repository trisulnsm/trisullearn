---
title: What is capacity planning?
description: Capacity planning is the process of forecasting and managing network resources to ensure bandwidth, hardware, and infrastructure can meet current and future demand without service degradation.
sidebar_label: Capacity planning
sidebar_position: 31
slug: /glossary/capacity-planning
keywords:
  - capacity planning
  - network capacity planning
  - bandwidth planning
  - infrastructure capacity
  - network growth
  - capacity management
  - link utilization
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the three types of capacity planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lead strategy adds capacity before demand increases, ensuring adequate capacity but risking overbuilding. Lag strategy adds capacity only after running at full capacity, reducing waste risk but potentially losing customers. Match strategy adds capacity in small amounts in response to changing demand, balancing risk and cost."
      }
    },
    {
      "@type": "Question",
      "name": "What metrics are used in network capacity planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key metrics include interface utilization over time, peak bandwidth usage, top talkers by volume, link saturation events, byte and packet counts per second, and application traffic breakdown. These are all available from flow monitoring data without requiring packet capture."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should capacity be planned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short-term planning covers days to weeks for operational adjustments. Mid-term planning covers months for purchasing and deployment cycles. Long-term planning covers years for strategic infrastructure decisions and budget allocation. Flow monitoring retention of 30 to 90 days supports mid-term planning."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow monitoring support capacity planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring provides interface utilization trending, top talker identification, and application traffic breakdown without packet capture. Operators can identify which links are approaching saturation, which hosts drive traffic, and plan upgrades based on data rather than guesswork."
      }
    }
  ]
};

# What is capacity planning?

Capacity planning forecasts and manages network resources to ensure bandwidth, hardware, and infrastructure can meet current and future demand. It prevents service degradation by identifying capacity constraints before they cause outages. Flow monitoring provides the data needed for data-driven capacity decisions.

---

## How it works

Capacity planning uses interface utilization trending, peak bandwidth analysis, and top talker identification from flow data. Trends over weeks or months reveal patterns that inform upgrade timing and budget allocation. Lead, lag, and match strategies determine when to add capacity relative to demand.

---

## In network operations

- **NOC:** Identify links approaching saturation using interface utilization charts and top talker reports.
- **Finance:** Use traffic trends to justify infrastructure upgrades with data rather than estimates.
- **ISP:** Plan peering and capacity based on per-prefix and per-AS flow traffic analysis.

---

## Capacity planning strategies

| Strategy | When to add capacity | Risk | Best for |
|---|---|---|---|
| Lead | Before demand increases | Overbuilding, wasted cost | Critical services, high growth |
| Lag | After running at full capacity | Lost customers, service degradation | Cost-sensitive, mature markets |
| Match | In small amounts with demand | Moderate risk and cost | Balanced growth, stable markets |

---

## How Trisul handles it

Trisul supports capacity planning through Interface Tracking for per-interface utilization and top talkers, and Top-K analytics for real-time identification of highest consumers across counter groups. Flow data retention of 30 to 90 days enables mid-term trend analysis. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is interface utilization?](/docs/glossary/interface-utilization)
- [What is Top-K analytics?](/docs/glossary/top-k-analytics)
- [What is flow analysis?](/docs/glossary/flow-analysis)
- [What is interface saturation?](/docs/glossary/interface-saturation)

---

## Frequently asked questions

### What are the three types of capacity planning?

Lead strategy adds capacity before demand increases, ensuring adequate capacity but risking overbuilding. Lag strategy adds capacity only after running at full capacity, reducing waste risk but potentially losing customers. Match strategy adds capacity in small amounts in response to changing demand, balancing risk and cost.

### What metrics are used in network capacity planning?

Key metrics include interface utilization over time, peak bandwidth usage, top talkers by volume, link saturation events, byte and packet counts per second, and application traffic breakdown. These are all available from flow monitoring data without requiring packet capture.

### How far in advance should capacity be planned?

Short-term planning covers days to weeks for operational adjustments. Mid-term planning covers months for purchasing and deployment cycles. Long-term planning covers years for strategic infrastructure decisions and budget allocation. Flow monitoring retention of 30 to 90 days supports mid-term planning.

### How does flow monitoring support capacity planning?

Flow monitoring provides interface utilization trending, top talker identification, and application traffic breakdown without packet capture. Operators can identify which links are approaching saturation, which hosts drive traffic, and plan upgrades based on data rather than guesswork.