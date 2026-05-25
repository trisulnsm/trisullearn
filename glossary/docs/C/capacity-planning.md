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

Capacity planning is the process of forecasting and managing network resources to ensure bandwidth, hardware, and infrastructure can meet current and future demand without service degradation. It prevents outages and performance issues by identifying capacity constraints before they are hit. Flow monitoring provides the data needed for data‑driven capacity decisions.

---

## How it works

Capacity planning uses interface utilization trending, peak bandwidth analysis, and top‑talker identification from flow data. Historical trends over days, weeks, and months reveal usage patterns that inform when and where to add capacity. Operators choose between lead, lag, and match strategies to determine how early to add capacity relative to demand.

---

## In network operations

- **NOC:** Identify links approaching or nearing saturation using interface utilization charts and top‑talker reports.  
- **Finance:** Use traffic trends to justify infrastructure upgrades with concrete data instead of estimates.  
- **ISP:** Plan peering agreements and backbone capacity based on per‑prefix and per‑AS traffic analysis from flow data.

---

## Capacity planning strategies

| Strategy | When to add capacity                        | Risk profile                            | Best for |
|----------|---------------------------------------------|-----------------------------------------|----------|
| Lead     | Before demand increases                    | Risk of overbuilding and unused cost    | Critical services, high‑growth or mission‑critical networks |
| Lag      | After running at or near full capacity      | Risk of service degradation or churn    | Cost‑sensitive, mature, or stable‑growth environments |
| Match    | In small increments as demand changes       | Balanced risk and cost                  | Networks with relatively predictable, steady growth |

---

## What makes capacity planning useful

Capacity planning is useful because it replaces guesswork with measurement. By understanding how traffic grows and which links or services are most constrained, organizations can invest only where needed and avoid both under‑ and over‑provisioning. It also improves user experience by preventing service‑degrading congestion.

---

## In Trisul

Trisul supports capacity planning through **Interface Tracking** for per‑interface utilization and top‑talker views, and **Top‑K analytics** for real‑time identification of highest‑consumption hosts, applications, or ASes. Flow‑data retention of 30 to 90 days enables mid‑term trend analysis, allowing operators to see how usage evolves and make informed decisions about when to upgrade links, interfaces, or peering relationships.

---

## Related terms

- Capacity planning
- Network capacity planning
- Interface utilization
- Interface saturation
- Flow monitoring
- Top‑K analytics
- Flow analysis
- Traffic trending

---

## Frequently asked questions

### What are the three types of capacity planning?

Lead strategy adds capacity before demand increases, ensuring adequate capacity but risking overbuilding. Lag strategy adds capacity only after the network is running at or near full capacity, reducing the risk of wasted cost but increasing the risk of service degradation or customer loss. Match strategy adds capacity in small increments as demand changes, balancing risk and cost.

### What metrics are used in network capacity planning?

Key metrics include interface utilization over time, peak bandwidth usage, top talkers by volume, link saturation events, byte and packet counts per second, and application‑level traffic breakdown. All of these can be derived from flow monitoring data without requiring packet capture.

### How far in advance should capacity be planned?

Short‑term planning covers days to weeks for operational adjustments such as traffic‑engineering changes. Mid‑term planning covers months for hardware procurement and deployment cycles. Long‑term planning covers years for major infrastructure and budgeting decisions. Flow monitoring retention of 30 to 90 days typically supports mid‑term capacity‑planning analysis.

### How does flow monitoring support capacity planning?

Flow monitoring provides interface‑utilization trending, top‑talker identification, and application traffic breakdown without requiring packet capture. Operators can use this data to identify which links are approaching saturation, which hosts or ASes drive traffic, and when to plan upgrades, allowing capacity planning to be based on actual measurements rather than estimates.