---
title: What is a counter group?
description: A counter group is a logical collection of traffic counters in Trisul used to measure and analyze specific dimensions of network activity such as hosts, applications, protocols, interfaces, or traffic categories over time.
sidebar_label: Counter groups
sidebar_position: 26
slug: /glossary/counter-groups
keywords:
  - counter groups
  - trisul counter groups
  - traffic metering
  - custom counter groups
  - network traffic counters
  - flow metrics
  - top-k analytics
  - traffic analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What built-in counter groups does Trisul provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul includes built-in counter groups for analyzing hosts, applications, protocols, interfaces, countries, ASNs, VLANs, and other traffic dimensions used in operational analytics workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What types of custom counter groups can be created?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports multiple custom counter-group approaches including filtered groups, keyset-based grouping, rule-based classification, threshold-oriented statistical grouping, and cross-dimensional analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What is cardinality counting in a counter group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cardinality counting measures the number of unique values associated with a traffic entity or metric, such as the number of distinct applications used by a host."
      }
    },
    {
      "@type": "Question",
      "name": "How do counter groups relate to Top-K analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Counter groups provide the traffic metrics and ranked entities used in Top-K analytics workflows, helping operators identify dominant traffic contributors and operational trends."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use counter groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses counter groups to organize, meter, aggregate, and analyze traffic across multiple operational dimensions for monitoring, reporting, trending, and investigation workflows."
      }
    }
  ]
};

# What is a counter group?

A **counter group** is a logical collection of traffic counters in Trisul used to measure and analyze specific dimensions of network activity such as hosts, applications, protocols, interfaces, or traffic categories over time.

Counter groups organize traffic analytics into measurable operational dimensions where each entity, or key, accumulates traffic-related metrics such as:
- Bytes
- Packets
- Flows
- Sessions
- Events
- Statistical measurements

Counter groups are widely used throughout Trisul analytics workflows including:
- Top-K analytics
- Trending
- Traffic investigation
- Threshold monitoring
- Operational reporting
- Custom analytics

---

## How counter groups work

Each counter group contains:
- A set of keys representing traffic entities
- One or more associated counters or meters
- Aggregation and ranking workflows

Examples include:
- Hosts
- Applications
- Protocols
- Interfaces
- Countries
- VLANs
- Autonomous Systems (ASNs)

Typical workflow:

1. **Traffic observation** → Telemetry and traffic activity are collected
2. **Entity classification** → Traffic is associated with keys in a counter group
3. **Metric accumulation** → Counters accumulate bytes, packets, flows, or other measurements
4. **Aggregation and ranking** → Traffic statistics are summarized and ranked
5. **Operational analysis** → Operators investigate trends, anomalies, and traffic behavior

Counter groups allow Trisul to organize large traffic volumes into operationally useful analytical categories.

---

## Counter groups in network operations

Counter groups are used extensively in operational analytics workflows.

Common operational use cases include:

- **Traffic monitoring**: Measure utilization across hosts, protocols, and services
- **Top-K analysis**: Identify dominant traffic contributors
- **Capacity planning**: Analyze long-term usage trends
- **Security analysis**: Identify unusual traffic behavior and anomalies
- **Subscriber analytics**: Group traffic by customer or service category
- **Operational reporting**: Summarize traffic activity across multiple dimensions

Counter groups simplify operational analysis by organizing traffic into structured analytical views.

---

## Common counter-group dimensions

| Dimension | Operational focus |
|---|---|
| Hosts | Traffic by IP address or endpoint |
| Applications | Traffic by application or service |
| Protocols | Traffic by network protocol |
| Interfaces | Traffic by network interface |
| Countries | Geographic traffic analysis |
| ASNs | Autonomous-system traffic visibility |
| VLANs | Segmented network analysis |

Different counter groups emphasize different operational perspectives on the same traffic data.

---

## Custom counter-group types

Trisul supports multiple approaches for creating custom analytical groupings.

| Type | Purpose | Example |
|---|---|---|
| Filtered | Analyze subsets of traffic | Web traffic only |
| Keyset | Group related entities | VoIP, Web, and Email services |
| Rule-based | Define custom operational logic | CCTV traffic identification |
| Statistical | Identify threshold-based conditions | Hosts with abnormal activity |
| Cross-dimensional | Combine multiple analytical dimensions | Internal hosts by country |

Custom counter groups help organizations adapt analytics to operational, business, and security requirements.

---

## What is cardinality counting?

Cardinality counting measures the number of unique values associated with an analytical entity.

Examples include:
- Unique applications per host
- Unique destinations per source IP
- Unique protocols per interface

Cardinality-oriented metrics help operators:
- Detect unusual behavior
- Analyze traffic diversity
- Identify scanning or discovery activity
- Measure service consumption patterns

These metrics are often useful in security and operational analytics workflows.

---

## Why counter groups are useful

Counter groups improve scalability and operational visibility by organizing traffic into structured analytical dimensions.

Benefits include:
- Simplified traffic analysis
- Efficient aggregation
- Faster Top-K analysis
- Flexible operational reporting
- Easier anomaly detection
- Improved traffic categorization

Counter groups help operators move from raw traffic data to operationally meaningful analytics.

---

## How Trisul handles counter groups

Counter groups are a core component of Trisul analytics architecture.

Relevant capabilities include:

- **Built-in traffic counter groups**
- **Custom analytical groupings**
- **Top-K analytics integration**
- **Historical traffic trending**
- **Threshold and anomaly workflows**
- **Flow-based traffic analytics**
- **Lua-based extensibility and customization**
- **Cross-dimensional traffic analysis**

These capabilities help operators analyze traffic behavior across multiple operational dimensions and investigative workflows.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#capacity-planning

---

## Related terms

- [Top-K analytics](/glossary/top-k-analytics)
- [Custom flow analytics](/glossary/custom-flow-analytics)
- [Flow tagger](/glossary/flow-tagger)
- [Flow monitoring](/glossary/flow-monitoring)
- [Flow analyzer](/glossary/flow-analyzer)
- [Aggregate Flows](/glossary/aggregate-flows)
- [Cardinality counting](/glossary/cardinality-counting)

---

## Frequently asked questions

### What built-in counter groups does Trisul provide?

Trisul includes built-in counter groups for analyzing hosts, applications, protocols, interfaces, countries, ASNs, VLANs, and other traffic dimensions used in operational analytics workflows.

### What types of custom counter groups can be created?

Trisul supports multiple custom counter-group approaches including filtered groups, keyset-based grouping, rule-based classification, threshold-oriented statistical grouping, and cross-dimensional analytics.

### What is cardinality counting in a counter group?

Cardinality counting measures the number of unique values associated with a traffic entity or metric, such as the number of distinct applications used by a host.

### How do counter groups relate to Top-K analytics?

Counter groups provide the traffic metrics and ranked entities used in Top-K analytics workflows, helping operators identify dominant traffic contributors and operational trends.

### How does Trisul use counter groups?

Trisul uses counter groups to organize, meter, aggregate, and analyze traffic across multiple operational dimensions for monitoring, reporting, trending, and investigation workflows.