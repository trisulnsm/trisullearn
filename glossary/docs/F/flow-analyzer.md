---
title: What is a flow analyzer?
description: A flow analyzer is software or a platform that receives flow records from network devices, stores them, and provides tools for querying, visualizing, and alerting on traffic patterns for operations and security use cases.
sidebar_label: Flow analyzer
sidebar_position: 14
slug: /glossary/flow-analyzer
keywords:
  - flow analyzer
  - netflow analyzer
  - traffic flow analyzer
  - network flow analysis
  - flow analytics
  - ipfix analyzer
  - sflow analyzer
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a flow analyzer and a flow collector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow collector receives and stores flow records. A flow analyzer adds a user interface, dashboards, alerting, and reporting on top of that stored data. The collector is the data pipeline; the analyzer is the analytics and visualization layer. In practice, most platforms combine both: the underlying collector stores the raw records, and the analyzer provides the interface to query and visualize them. Trisul is an example of a combined collector and analyzer in a single platform."
      }
    },
    {
      "@type": "Question",
      "name": "What can a flow analyzer do that raw flow data cannot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow analyzer turns raw flow records into actionable views: per-interface bandwidth utilization trending, top talkers ranked by volume, application traffic breakdowns, and alerting on anomalous behavior. Raw flow data is just a database of records. The analyzer provides the interface, the pre-built queries, the visualizations, and the alerting rules that make that data usable by NOC and SOC teams without manual SQL or scripting."
      }
    },
    {
      "@type": "Question",
      "name": "How does a flow analyzer detect anomalies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anomaly detection in flow analyzers typically relies on baseline deviation: the analyzer learns what normal traffic looks like for each interface, host, or protocol over time, and flags deviations that exceed a configured threshold. A sudden spike in outbound traffic from a host, a new destination that has not been seen before, or a protocol that accounts for a larger share of traffic than expected are all patterns a flow analyzer can detect. Some analyzers also support threshold-based alerts, where operators set fixed limits for specific metrics."
      }
    },
    {
      "@type": "Question",
      "name": "What is Top-K analytics in a flow analyzer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top-K analytics identifies the highest-consumers across a set of flows in real time, such as the top N hosts by volume, the top N protocols by packet count, or the top N destinations by bytes sent. The analyzer tracks these rankings continuously and updates them as traffic changes. This is practical for capacity planning and for detecting traffic anomalies when a host suddenly appears in the top list or when a protocol that normally ranks low spikes into the top K."
      }
    }
  ]
};

# What is a flow analyzer?

A flow analyzer is software that receives flow records from network devices, stores them, and provides tools for querying, visualizing, and alerting on traffic patterns. The analyzer sits on top of the flow collector: it takes the raw records and turns them into dashboards, reports, and alerts that NOC and SOC teams can act on. Flow analyzers are used for bandwidth trending, capacity planning, security detection, and compliance reporting.

---

## How a flow analyzer works

A flow analyzer receives flow records from NetFlow, IPFIX, or sFlow exporters and stores them in a time-series database indexed by IP, port, protocol, and time. The analyzer builds queries and aggregations on top of that database to produce dashboards: per-interface utilization, top talkers, application breakdowns, and traffic trends over defined time windows. The underlying data is the same flow metadata that the collector stores; the analyzer adds the query interface, visualization, and alerting logic.

Alerting in a flow analyzer can be threshold-based or anomaly-based. Threshold alerts fire when a metric exceeds a fixed limit, such as an interface exceeding 80 percent utilization or a host sending more than a defined number of bytes per minute. Anomaly alerts fire when traffic deviates from a learned baseline, such as a sudden spike in outbound traffic from a host that normally only receives traffic.

---

## Flow analyzers in network operations

NOC teams use flow analyzers for bandwidth trending and capacity planning. Interface utilization reports show which links are approaching saturation, and top talker reports identify the hosts or applications responsible. Without a flow analyzer, this information is available only through manual queries on the raw flow database.

SOC teams use flow analyzers for detection. Anomalies that would be invisible in a log-based stack, such as data exfiltration over an unusual port, a host scanning the internal network, or long-duration connections to external destinations, are all visible in flow patterns. The analyzer surfaces these patterns as alerts or dashboards instead of requiring manual investigation of raw records.

ISPs use flow analyzers for traffic engineering and peering analysis. Per-prefix and per-AS traffic reports show which destinations and networks generate the most flow traffic, informing routing policy and peering capacity decisions.

---

## Flow analyzer vs flow collector

| Dimension | Flow collector | Flow analyzer |
|---|---|---|
| Primary function | Receives and stores flow records | Queries, visualizes, and alerts on stored data |
| User interface | None or minimal | Dashboards, reports, alert configuration |
| Query capability | Raw data access only | Pre-built queries and custom filters |
| Alerting | Optional or none | Built-in threshold and anomaly alerts |
| Best fit | Data pipeline and storage | Operations visibility and detection |

In practice, most platforms combine collector and analyzer in a single product. The raw data is stored by the collector component, and the visualization and alerting layer is the analyzer component.

---

## How Trisul handles flow analysis

Trisul is both a flow collector and a flow analyzer. It accepts NetFlow v1, v5, v9, Flexible NetFlow, IPFIX, and all sFlow versions, auto-discovers routers and interfaces, and stores every flow record without rollup or summarization. The analyzer layer provides dashboards and tools for querying and visualizing flow data: Interface Tracking for per-interface utilization and top talkers, Top-K analytics for real-time identification of highest consumers across counter groups, and Flow Tagger for label-based classification and search.

Trigger-based alerting is built into the analyzer: fixed-limit alerts for specific metrics and key combinations, and Flow Tracker for monitoring per-flow conditions as traffic flows. Flow Taggers and LUA API allow custom real-time analytics plugins to extend the analysis logic. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is flow collector?](/docs/glossary/flow-collector)
- [What is flow data?](/docs/glossary/flow-data)
- [What is NetFlow?](/docs/glossary/netflow)
- [What is IPFIX?](/docs/glossary/ipfix)
- [What is Top-K analytics?](/docs/glossary/top-k-analytics)
- [What is flow tagger?](/docs/glossary/flow-tagger)
- [What is flow tracker?](/docs/glossary/flow-tracker)

---

## Frequently asked questions

### What is the difference between a flow analyzer and a flow collector?

A flow collector receives and stores flow records. A flow analyzer adds a user interface, dashboards, alerting, and reporting on top of that stored data. The collector is the data pipeline; the analyzer is the analytics and visualization layer. In practice, most platforms combine both: the underlying collector stores the raw records, and the analyzer provides the interface to query and visualize them. Trisul is an example of a combined collector and analyzer in a single platform.

### What can a flow analyzer do that raw flow data cannot?

A flow analyzer turns raw flow records into actionable views: per-interface bandwidth utilization trending, top talkers ranked by volume, application traffic breakdowns, and alerting on anomalous behavior. Raw flow data is just a database of records. The analyzer provides the interface, the pre-built queries, the visualizations, and the alerting rules that make that data usable by NOC and SOC teams without manual SQL or scripting.

### How does a flow analyzer detect anomalies?

Anomaly detection in flow analyzers typically relies on baseline deviation: the analyzer learns what normal traffic looks like for each interface, host, or protocol over time, and flags deviations that exceed a configured threshold. A sudden spike in outbound traffic from a host, a new destination that has not been seen before, or a protocol that accounts for a larger share of traffic than expected are all patterns a flow analyzer can detect. Some analyzers also support threshold-based alerts, where operators set fixed limits for specific metrics.

### What is Top-K analytics in a flow analyzer?

Top-K analytics identifies the highest-consumers across a set of flows in real time, such as the top N hosts by volume, the top N protocols by packet count, or the top N destinations by bytes sent. The analyzer tracks these rankings continuously and updates them as traffic changes. This is practical for capacity planning and for detecting traffic anomalies when a host suddenly appears in the top list or when a protocol that normally ranks low spikes into the top K.