---
title: What is Explore Flows?
description: Explore Flows is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event.
sidebar_label: Explore Flows
sidebar_position: 176
slug: /glossary/explore-flows
keywords:
  - Explore Flows
  - flow exploration
  - flow drill down
  - traffic investigation
  - pivot flows
  - network analysis
  - flow investigation
  - traffic drilldown
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Explore Flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explore Flows is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Explore Flows useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Explore Flows is useful because it helps analysts move quickly from summarized traffic views into detailed flow investigations without manually constructing complex queries. It improves troubleshooting, operational analysis, and security investigations."
      }
    },
    {
      "@type": "Question",
      "name": "What can analysts investigate using Explore Flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Analysts may investigate hosts, peers, conversations, protocols, traffic timing, flow volume, interfaces, applications, and suspicious communication patterns using Explore Flows workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How does Explore Flows differ from dashboards or summary views?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dashboards and summary views provide aggregated operational visibility, while Explore Flows workflows provide access to underlying flow records and detailed traffic investigation capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use Explore Flows workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses Explore Flows workflows to help analysts pivot from summarized operational views into detailed flow analytics, traffic investigations, historical traffic analysis, and communication analysis workflows."
      }
    }
  ]
};

# What is Explore Flows?

**Explore Flows** is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event.

Explore Flows workflows help analysts:
- Investigate network activity
- Analyze communication patterns
- Troubleshoot operational issues
- Investigate suspicious traffic
- Correlate flow records
- Drill down into traffic behavior
- Pivot from summaries into detailed investigations

Common starting points include:
- Hosts
- IP addresses
- Interfaces
- Applications
- Alerts
- Protocols
- Traffic spikes
- Security events

Trisul uses Explore Flows workflows as part of its traffic-analysis and investigation capabilities.

---

## How Explore Flows works

Explore Flows workflows typically begin from summarized operational views or selected traffic entities.

Typical workflow:

1. **Initial selection** → An analyst selects a host, interface, application, or event
2. **Context preservation** → The system automatically scopes related traffic records
3. **Flow exploration** → Matching flow records are displayed for investigation
4. **Interactive filtering** → Analysts refine the investigation using filters and pivots
5. **Detailed analysis** → Analysts investigate traffic behavior, peers, timing, and communication patterns

Analysts may investigate:
- Source and destination endpoints
- Ports and protocols
- Traffic timing
- Volume patterns
- Application behavior
- Communication relationships
- Historical traffic activity

The exact workflow depends on:
- Available telemetry
- Investigation scope
- Retention depth
- Platform capabilities

---

## Explore Flows in network operations

Explore Flows workflows are commonly used in:
- NOC operations
- SOC investigations
- Incident response
- Traffic troubleshooting
- Capacity analysis
- Threat investigations
- Historical traffic analysis

Common operational use cases include:

- **Security investigations**: Analyze suspicious communications
- **Traffic troubleshooting**: Investigate latency or connectivity problems
- **Host analysis**: Review communication behavior for specific systems
- **Traffic validation**: Verify application or policy behavior
- **Anomaly analysis**: Investigate unusual traffic patterns
- **Historical investigations**: Reconstruct operational events

Explore Flows workflows reduce investigation time by allowing analysts to pivot directly from summaries into scoped traffic analysis.

---

## Common Explore Flows investigation actions

| Action | Operational purpose |
|---|---|
| Inspect peers | Identify communication relationships |
| Review traffic timing | Analyze bursts or behavioral patterns |
| Analyze traffic volume | Understand communication scale |
| Filter protocols or ports | Narrow investigation scope |
| Investigate historical flows | Reconstruct operational activity |
| Pivot to packet visibility | Perform deeper traffic analysis |

Different workflows may expose different investigation actions depending on telemetry and platform capabilities.

---

## Explore Flows vs dashboards

| Dimension | Explore Flows | Dashboard or summary views |
|---|---|---|
| Primary purpose | Detailed traffic investigation | Aggregated operational visibility |
| Data granularity | Individual flow records and scoped investigations | Summaries and metrics |
| Investigation depth | Interactive drill-down workflows | High-level operational overview |
| Operational use | Troubleshooting and investigations | Monitoring and trend visibility |
| Typical workflow | Pivot and investigate | Observe and summarize |

Dashboards often act as entry points into Explore Flows investigation workflows.

---

## Operational considerations

Effective Explore Flows workflows typically require:
- Efficient flow indexing
- Fast query performance
- Historical retention
- Context-aware filtering
- Scalable telemetry storage
- Interactive investigation workflows

Operational challenges may include:
- Large-scale telemetry volumes
- Query latency
- High-cardinality traffic datasets
- Retention limitations
- Cross-domain correlation complexity

The effectiveness of Explore Flows workflows depends heavily on telemetry quality and investigation usability.

---

## How Trisul handles Explore Flows

Trisul uses Explore Flows workflows as part of its traffic-analysis and operational investigation capabilities.

Relevant capabilities include:

- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Explore Flows** for interactive traffic investigation
- **Historical traffic analysis**
- **Host-oriented traffic visibility**
- **Interface and traffic correlation workflows**
- **Traffic anomaly visibility**
- **Packet visibility and drill-down workflows**
- **Top-K analytics** for summarized traffic exploration
- **Flow and packet correlation workflows**

These capabilities help analysts pivot from summarized operational visibility into detailed traffic investigations, communication analysis, historical flow analysis, and security investigations.

Trisul emphasizes interactive traffic investigation workflows rather than static reporting-only analytics.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring

---

## Related terms

- [Flow tracker](/glossary/flow-tracker)
- [Traffic investigation](/glossary/traffic-investigation)
- [Host monitoring](/glossary/host-monitoring)
- [Drilldown analysis](/glossary/drilldown-analysis)
- [Flow monitoring](/glossary/flow-monitoring)
- [Flow analysis](/glossary/flow-analysis)
- [Top talkers](/glossary/top-talkers)

---

## Frequently asked questions

### What is Explore Flows?

Explore Flows is an investigative workflow that allows analysts to browse, filter, and investigate related network flow records starting from a selected host, conversation, interface, application, or traffic event.

### Why is Explore Flows useful?

Explore Flows is useful because it helps analysts move quickly from summarized traffic views into detailed flow investigations without manually constructing complex queries. It improves troubleshooting, operational analysis, and security investigations.

### What can analysts investigate using Explore Flows?

Analysts may investigate hosts, peers, conversations, protocols, traffic timing, flow volume, interfaces, applications, and suspicious communication patterns using Explore Flows workflows.

### How does Explore Flows differ from dashboards or summary views?

Dashboards and summary views provide aggregated operational visibility, while Explore Flows workflows provide access to underlying flow records and detailed traffic investigation capabilities.

### How does Trisul use Explore Flows workflows?

Trisul uses Explore Flows workflows to help analysts pivot from summarized operational views into detailed flow analytics, traffic investigations, historical traffic analysis, and communication analysis workflows.