---
title: What is a context menu in network analytics?
description: A context menu in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric. In Trisul, context menus support rapid drill-down and traffic investigation workflows.
sidebar_label: Context menu
sidebar_position: 142
slug: /glossary/context-menu
keywords:
  - context menu
  - Trisul context menu
  - drill-down
  - investigation menu
  - traffic investigation
  - pivot actions
  - flow investigation
  - analyst workflow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a context menu in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A context menu in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric."
      }
    },
    {
      "@type": "Question",
      "name": "What actions are available in the context menu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Context menu actions may include viewing flows, retrieving packets, pivoting to related traffic, viewing host activity, filtering traffic, and launching investigation workflows scoped to the selected item."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the context menu important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Context menus improve investigation speed by allowing analysts to quickly pivot between related traffic views and operational data without manually constructing filters or queries."
      }
    },
    {
      "@type": "Question",
      "name": "Where does the context menu appear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Trisul, context menus appear throughout dashboards and analytical views wherever traffic entities, flows, alerts, hosts, or metrics can be selected for investigation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use context menus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses context menus to support drill-down investigation workflows, traffic pivots, flow analysis, packet retrieval workflows, and rapid navigation between related analytical views."
      }
    }
  ]
};

# What is a context menu in network analytics?

A **context menu** in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric.

Context menus are commonly used in:
- Network monitoring platforms
- Security analytics systems
- Flow analytics tools
- SOC and NOC dashboards
- Traffic investigation workflows

In Trisul, context menus support rapid drill-down and traffic investigation workflows by allowing analysts to pivot directly from selected traffic entities into related analytical views.

---

## How the context menu works

A context menu is triggered when an analyst selects or clicks on a traffic-related object such as:
- IP addresses
- Hosts
- Applications
- Flows
- Alerts
- Interfaces
- Protocols
- Traffic graphs

The available actions depend on the selected object type and the analytical context.

Typical workflow:

1. **Entity selection** → Analyst selects a traffic item or metric
2. **Context menu display** → Relevant investigation actions appear
3. **Scoped filtering** → Actions automatically inherit the selected context
4. **Pivot execution** → Analyst launches drill-down or related investigation workflows
5. **Operational analysis** → Additional traffic visibility and correlation become available

Context-aware filtering reduces the need for manually building complex queries during investigations.

---

## Context menus in network operations

Context menus improve operational efficiency by enabling rapid traffic investigation and workflow navigation.

Common operational use cases include:

- **Traffic investigation**: Pivot from a host or flow into related traffic
- **Security analysis**: Investigate suspicious IP addresses or conversations
- **Performance troubleshooting**: Drill into congested interfaces or high-volume applications
- **Packet analysis**: Retrieve packet data associated with traffic events
- **Historical investigation**: Review prior activity related to a selected entity
- **SOC and NOC workflows**: Accelerate operational response and navigation

Fast drill-down workflows are especially important in environments where analysts must investigate large traffic volumes quickly.

---

## Common context menu actions

| Action | Purpose |
|---|---|
| View flows | Show flows related to the selected entity |
| Retrieve packets | Access matching packet data or PCAP workflows |
| Host details | View host-related activity and traffic summaries |
| Pivot to applications | Analyze traffic by application or service |
| Historical analysis | Investigate past activity and trends |
| Filter traffic | Narrow views to related traffic only |
| Alert investigation | Review alerts associated with the selected item |

The exact actions available depend on the platform and the selected entity type.

---

## Why context menus are useful

Context menus improve investigation speed and operational usability.

Benefits include:
- Faster analyst workflows
- Reduced manual filtering
- Simplified drill-down investigation
- Easier navigation across related traffic views
- Improved operational efficiency
- Better correlation between analytical contexts

Effective context menus help analysts move quickly between high-level summaries and detailed investigative views.

---

## Context menu and drill-down workflows

Context menus are commonly associated with drill-down and pivot-based investigation workflows.

| Workflow | Purpose |
|---|---|
| Drill-down | Move from summary views to detailed analysis |
| Pivoting | Navigate between related traffic entities |
| Scoped investigation | Maintain contextual filtering during analysis |
| Cross-view navigation | Correlate information across analytical views |

These workflows are important in large-scale traffic analytics and security operations environments.

---

## How Trisul handles context menus

Trisul provides context menus throughout dashboards and analytical workflows to support traffic investigation and operational analysis.

Relevant capabilities include:

- **Context-aware drill-down workflows**
- **Flow-oriented investigation actions**
- **Explore Flows integration** for traffic analysis
- **Traffic pivot workflows** across related entities
- **Packet retrieval workflows** where packet visibility is available
- **Host and traffic visibility integration**
- **Operational navigation across analytical views**

These capabilities help analysts investigate traffic behavior, correlate related activity, and move efficiently between operational views.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection

---

## Related terms

- [Traffic investigation](/glossary/traffic-investigation)
- [Flow analysis](/glossary/flow-analysis)
- [Packet capture](/glossary/packet-capture)
- [Host monitor](/glossary/host-monitor)
- [Drill-down](/glossary/drill-down)
- [Explore Flows](/glossary/explore-flows)
- [Top-K analytics](/glossary/top-k-analytics)

---

## Frequently asked questions

### What is a context menu in network analytics?

A context menu in network analytics is an interactive menu that provides investigation and navigation actions related to a selected traffic item, flow, host, alert, or metric.

### What actions are available in the context menu?

Context menu actions may include viewing flows, retrieving packets, pivoting to related traffic, viewing host activity, filtering traffic, and launching investigation workflows scoped to the selected item.

### Why is the context menu important?

Context menus improve investigation speed by allowing analysts to quickly pivot between related traffic views and operational data without manually constructing filters or queries.

### Where does the context menu appear?

In Trisul, context menus appear throughout dashboards and analytical views wherever traffic entities, flows, alerts, hosts, or metrics can be selected for investigation.

### How does Trisul use context menus?

Trisul uses context menus to support drill-down investigation workflows, traffic pivots, flow analysis, packet retrieval workflows, and rapid navigation between related analytical views.