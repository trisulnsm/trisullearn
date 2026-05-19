---
title: What is drilldown analysis?
description: Drilldown analysis is the ability to move from a high-level summary view to progressively detailed views by clicking on a data point, revealing the underlying records that make up that summary.
sidebar_label: Drilldown analysis
sidebar_position: 20
slug: /glossary/drilldown-analysis
keywords:
  - drilldown analysis
  - drill down analysis
  - data drilldown
  - interactive analytics
  - hierarchical exploration
  - root cause analysis
  - dashboard drilldown
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does drilldown analysis work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown starts with an aggregated view, such as total bandwidth by interface. When a user clicks on a data point, the view refreshes to show the next level of detail, such as flows on that interface. Each level filters the data to show only records that belong to the selected category. The process repeats until the user reaches individual flow records or packets."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between drilldown and drill-through?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown moves down a predefined hierarchy within the same dataset, such as from region to country to city. Drill-through opens a new view or report that shows records related to the selected data point, often crossing different data sources. Drilldown follows a single path; drill-through can jump to any related view."
      }
    },
    {
      "@type": "Question",
      "name": "What use cases does drilldown analysis support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown supports root cause analysis, anomaly investigation, capacity planning, and security incident scoping. NOC teams use it to identify which flows are causing interface saturation. SOC teams use it to trace which hosts communicated with a malicious IP. Analysts use it to understand why a metric changed, such as a sudden spike in outbound traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Why is drilldown important for flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring generates massive volumes of data. Drilldown allows operators to start with a summary, such as top talkers or interface utilization, and immediately investigate the flows behind any metric without writing manual queries. This reduces investigation time from hours to seconds and prevents operators from missing critical details buried in aggregated views."
      }
    }
  ]
};

# What is drilldown analysis?

Drilldown analysis moves from a high-level summary to progressively detailed views by clicking on a data point. It reveals the underlying records that make up that summary. In flow monitoring, drilldown typically starts with interface utilization or top talkers and drills down to flows, then to individual flow records. Each level filters the data to show only records that belong to the selected category.

---

## How drilldown analysis works

Drilldown starts with an aggregated view, such as total bandwidth by interface or top hosts by volume. When a user clicks on a data point, the view refreshes to show the next level of detail, such as flows on that interface or conversations for that host. The selected value becomes a filter for the next level.

The process repeats until the user reaches individual flow records or packets. Each level provides more granularity while maintaining the filtering context from previous selections. This hierarchical navigation allows operators to trace the root cause of a metric without manual SQL or scripting.

---

## Drilldown analysis in network operations

NOC teams use drilldown to identify which flows are causing interface saturation. They start with an interface utilization chart, click on the saturated interface, and drill down to top talkers on that interface, then to the specific flows responsible.

SOC teams use drilldown for security incident scoping. They start with a list of malicious IPs, click on one, and drill down to all internal hosts that communicated with it, then to the specific flows and timestamps for each conversation.

Analysts use drilldown for anomaly investigation. When a metric spike appears, they drill down to understand what changed, such as a new host appearing in the top talker list or a protocol that was previously low suddenly dominating traffic.

---

## Drilldown vs drill-through

| Dimension | Drilldown | Drill-through |
|---|---|---|
| Navigation | Down a predefined hierarchy | To any related view or report |
| Data scope | Same dataset, more granular | Crosses data sources or reports |
| Typical path | Region → Country → City | Flow → Packet capture → Alert |
| Filtering | Accumulates filters at each level | Opens a new view with applied filter |
| Best fit | Hierarchical exploration | Cross-context investigation |

Drilldown is for hierarchical exploration within a dataset. Drill-through is for jumping to related views that may use different data sources.

---

## How Trisul handles drilldown analysis

Trisul provides drilldown through its Routers and Interfaces tool, Interface Tracking, and Explore Flows. Operators select a router, navigate to its interfaces, and drill down into hosts, applications, and flows on that interface without constructing manual queries. The Routers and Interfaces tool lets operators drill from a device down to its interfaces and then into hosts, applications, and flows on that interface.

Clicking on a metric in a dashboard, such as top talkers or interface utilization, filters the underlying flow data and shows the records that make up that metric. This allows operators to move from summary to detail in seconds. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is flow analysis?](/glossary/flow-analysis)
- [What is Interface Tracking?](/glossary/interface-tracking)
- [What is top talkers?](/glossary/top-talkers)
- [What is a flow?](/glossary/flow)
- [What is root cause analysis?](/glossary/root-cause-analysis)

---

## Frequently asked questions

### How does drilldown analysis work?

Drilldown starts with an aggregated view, such as total bandwidth by interface. When a user clicks on a data point, the view refreshes to show the next level of detail, such as flows on that interface. Each level filters the data to show only records that belong to the selected category. The process repeats until the user reaches individual flow records or packets.

### What is the difference between drilldown and drill-through?

Drilldown moves down a predefined hierarchy within the same dataset, such as from region to country to city. Drill-through opens a new view or report that shows records related to the selected data point, often crossing different data sources. Drilldown follows a single path; drill-through can jump to any related view.

### What use cases does drilldown analysis support?

Drilldown supports root cause analysis, anomaly investigation, capacity planning, and security incident scoping. NOC teams use it to identify which flows are causing interface saturation. SOC teams use it to trace which hosts communicated with a malicious IP. Analysts use it to understand why a metric changed, such as a sudden spike in outbound traffic.

### Why is drilldown important for flow monitoring?

Flow monitoring generates massive volumes of data. Drilldown allows operators to start with a summary, such as top talkers or interface utilization, and immediately investigate the flows behind any metric without writing manual queries. This reduces investigation time from hours to seconds and prevents operators from missing critical details buried in aggregated views.