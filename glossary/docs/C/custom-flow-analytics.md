---
title: What is custom flow analytics?
description: Custom flow analytics extends standard flow monitoring by applying user-defined logic, labels, and detection rules to flow data, enabling analytics tailored to specific network topologies, security use cases, and business requirements.
sidebar_label: Custom flow analytics
sidebar_position: 25
slug: /glossary/custom-flow-analytics
keywords:
  - custom flow analytics
  - flow analytics
  - custom network analytics
  - flow tagger
  - lua flow analytics
  - user defined flow analytics
  - flow based detection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is custom flow analytics needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard analytics provides generic views: top talkers, utilization, protocol breakdown. Custom analytics adds business context: which flows belong to which customer, which protocols are policy violations, which destinations are org-specific threats. Without it, flow data is analyzed in isolation from the operational context that makes it actionable."
      }
    },
    {
      "@type": "Question",
      "name": "What can custom flow analytics classify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flows can be classified by customer subnet, geographic region, ASN, application, threat category, or business unit. Classifications attach as tags at ingestion and are indexed for search. Tagged flows can be queried, grouped, and alerted on by label instead of raw IP and port."
      }
    },
    {
      "@type": "Question",
      "name": "How does LUA extend flow analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUA scripts run inline in the flow pipeline with access to every field of every flow record. They can compute custom metrics, update counters, fire alerts, or implement detection logic not available in built-in analytics. No separate processing layer is required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between flow tagging and flow filtering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Filtering removes records from the database. Tagging attaches labels and retains records. Tagging preserves context while adding searchability; tagged flows remain available for investigation and can be retrieved by label without reconstructing the original filter."
      }
    }
  ]
};

# What is custom flow analytics?

Custom flow analytics extends standard [flow monitoring](/docs/glossary/flow-monitoring) with user-defined logic, labels, and detection rules. Standard analytics provides generic views: top talkers, interface utilization, protocol breakdown. Custom analytics adds organizational context, making flow analysis actionable for specific customers, security policies, and compliance requirements.

---

## How it works

Flow Taggers match incoming flows against user-defined rules and attach searchable labels at ingestion. LUA scripts run inline in the flow pipeline, reading every flow field in real time to compute custom metrics, fire alerts, or implement detection logic. Tags and custom counters appear alongside built-in views in dashboards and Top-K reports.

---

## In network operations

- **NOC:** Tag flows by customer or business unit for per-customer traffic reports without manual queries.
- **SOC:** Encode org-specific detection rules, such as prohibited protocols between subnets or high-risk external destinations.
- **Compliance:** Tag flows by regulatory scope for audit queries by label rather than IP range.

---

## Custom analytics vs built-in analytics

| Dimension | Built-in analytics | Custom analytics |
|---|---|---|
| Classification | IP, port, protocol, ASN | Any user-defined label or logic |
| Detection | Generic baselines | Org-specific rules and patterns |
| Reporting | Standard views | Business unit, customer, compliance scope |
| Implementation | Configuration only | Flow Taggers, LUA, API |

---

## How Trisul handles it

Trisul provides custom flow analytics through Flow Taggers and the LUA API. Flow Taggers attach labels at ingestion; LUA scripts run inline for custom counters, alerts, and detection logic that appear in standard dashboards. Full documentation is at https://docs.trisul.org/docs/lua/.

---

## Related terms

- [What is flow tagger?](/glossary/flow-tagger)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is flow analysis?](/glossary/flow-analysis)
- [What is Top-K analytics?](/glossary/top-k-analytics)
- [What is flow data?](/glossary/flow-data)

---

## Frequently asked questions

### Why is custom flow analytics needed?

Standard analytics provides generic views: top talkers, utilization, protocol breakdown. Custom analytics adds business context: which flows belong to which customer, which protocols are policy violations, which destinations are org-specific threats. Without it, flow data is analyzed in isolation from the operational context that makes it actionable.

### What can custom flow analytics classify?

Flows can be classified by customer subnet, geographic region, ASN, application, threat category, or business unit. Classifications attach as tags at ingestion and are indexed for search. Tagged flows can be queried, grouped, and alerted on by label instead of raw IP and port.

### How does LUA extend flow analytics?

LUA scripts run inline in the flow pipeline with access to every field of every flow record. They can compute custom metrics, update counters, fire alerts, or implement detection logic not available in built-in analytics. No separate processing layer is required.

### What is the difference between flow tagging and flow filtering?

Filtering removes records from the database. Tagging attaches labels and retains records. Tagging preserves context while adding searchability; tagged flows remain available for investigation and can be retrieved by label without reconstructing the original filter.