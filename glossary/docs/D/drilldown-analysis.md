---
title: What is drilldown analysis?
description: Drilldown analysis is the process of moving from high-level summaries to progressively more detailed views in order to investigate underlying records, traffic behavior, anomalies, or operational events.
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
  - flow investigation
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
        "text": "Drilldown analysis starts with aggregated summaries and progressively narrows the investigation into more detailed records such as interfaces, hosts, conversations, flows, sessions, or packets by applying contextual filters and hierarchical navigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between drilldown and drill-through?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown generally navigates deeper into increasingly detailed views within related datasets or hierarchical contexts, while drill-through opens related investigations, reports, or datasets that may exist outside the current analytical hierarchy."
      }
    },
    {
      "@type": "Question",
      "name": "What use cases does drilldown analysis support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown analysis supports operational troubleshooting, root-cause analysis, anomaly investigation, security investigations, capacity analysis, traffic analysis, and historical network investigation workflows."
      }
    },
    {
      "@type": "Question",
      "name": "Why is drilldown important for flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drilldown is important because flow-monitoring environments generate large volumes of aggregated telemetry. Drilldown workflows help operators quickly move from summary metrics to the underlying traffic records associated with operational or security events."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support drilldown workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports drilldown workflows through flow analytics, interactive traffic exploration, Explore Flows, interface-oriented investigation, and historical traffic analysis capabilities."
      }
    }
  ]
};

# What is drilldown analysis?

**Drilldown analysis** is the process of moving from high-level summaries to progressively more detailed views in order to investigate underlying records, traffic behavior, anomalies, or operational events.

Drilldown workflows help operators:
- Investigate traffic behavior
- Analyze anomalies
- Troubleshoot operational problems
- Perform root-cause analysis
- Correlate network events
- Explore traffic hierarchies
- Investigate security incidents

In network analytics environments, drilldown commonly starts with:
- Traffic summaries
- Interface utilization
- Top talkers
- Alert dashboards
- Protocol summaries
- Security events

Operators then progressively navigate toward:
- Hosts
- Conversations
- Flows
- Sessions
- Packets
- Historical records

Trisul supports interactive drilldown workflows through traffic analytics and flow-investigation capabilities.

---

## How drilldown analysis works

Drilldown analysis begins with aggregated operational data and progressively narrows the investigation scope.

Typical workflow:

1. **Summary visibility** → Operators view aggregated metrics or dashboards
2. **Selection and filtering** → A metric, host, interface, or anomaly is selected
3. **Context narrowing** → The system applies contextual filters
4. **Detailed exploration** → More granular records are displayed
5. **Iterative investigation** → Analysts continue exploring deeper operational context

Drilldown workflows commonly involve:
- Hierarchical navigation
- Context preservation
- Interactive filtering
- Temporal narrowing
- Traffic correlation
- Historical exploration

The exact workflow depends on:
- Dataset structure
- Analytics platform
- Operational goals
- Available telemetry

Some workflows may eventually reach:
- Individual flow records
- Packet-level visibility
- Session reconstruction
- Endpoint activity context

---

## Drilldown analysis in network operations

Drilldown workflows are widely used in NOC, SOC, ISP, and operational analytics environments.

Common operational use cases include:

- **Root-cause analysis**: Investigate performance degradation
- **Traffic analysis**: Identify dominant applications or hosts
- **Interface troubleshooting**: Analyze utilization spikes
- **Security investigations**: Investigate suspicious communications
- **Anomaly analysis**: Understand unusual operational behavior
- **Capacity planning**: Identify persistent traffic-growth patterns
- **Historical investigation**: Reconstruct operational events over time

Example operational workflow:

| Investigation stage | Example |
|---|---|
| Summary | High WAN utilization |
| Interface view | Saturated interface identified |
| Host analysis | Dominant hosts identified |
| Flow investigation | Specific conversations analyzed |
| Packet visibility | Protocol behavior reviewed |

Drilldown workflows help reduce investigation time by allowing operators to navigate interactively instead of manually constructing complex queries.

---

## Drilldown vs drill-through

| Dimension | Drilldown | Drill-through |
|---|---|---|
| Navigation style | Progressively deeper exploration | Jump to related investigations or reports |
| Context | Usually retains hierarchical context | May switch contexts or datasets |
| Dataset relationship | Typically related or nested data | May cross unrelated systems or reports |
| Operational use | Granular exploration | Cross-platform or cross-domain analysis |
| Example | Interface → Host → Flow | Flow → SIEM alert → Packet capture |

Some analytics platforms combine both workflows within the same investigation interface.

---

## Drilldown analysis and flow monitoring

Flow-monitoring environments produce large volumes of summarized telemetry.

Without drilldown workflows, operators may struggle to:
- Correlate anomalies
- Identify root causes
- Investigate traffic spikes
- Analyze suspicious communications
- Understand operational trends

Drilldown workflows allow analysts to:
- Start with summaries
- Preserve operational context
- Investigate interactively
- Correlate traffic patterns
- Explore historical behavior

This is especially important in:
- ISP environments
- Enterprise monitoring
- Security operations
- Large-scale traffic analytics deployments

---

## Operational considerations

Effective drilldown systems typically require:
- Efficient indexing
- Fast query execution
- Historical retention
- Context-aware filtering
- Scalable telemetry storage
- Interactive visualization workflows

Operational challenges may include:
- Large-scale telemetry volumes
- Query latency
- Retention management
- Cross-domain correlation
- High-cardinality traffic datasets

The usability of drilldown workflows strongly affects operational investigation efficiency.

---

## How Trisul handles drilldown analysis

Trisul supports interactive drilldown workflows through traffic analytics, flow visibility, and operational investigation capabilities.

Relevant capabilities include:

- **Explore Flows** for interactive traffic investigation
- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Routers and Interfaces workflows**
- **Interface-oriented traffic exploration**
- **Historical traffic analysis**
- **Traffic correlation workflows**
- **Interactive filtering and operational investigation**
- **Packet and flow visibility**
- **Top-K analytics** for traffic summarization and navigation

These capabilities help operators move from summarized operational visibility to increasingly detailed traffic analysis during troubleshooting and security investigations.

Trisul emphasizes interactive operational visibility and flow-oriented investigation workflows rather than static reporting-only analytics.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring

---

## Related terms

- [Flow monitoring](/glossary/flow-monitoring)
- [Flow analysis](/glossary/flow-analysis)
- [Interface tracking](/glossary/interface-tracking)
- [Top talkers](/glossary/top-talkers)
- [Flow](/glossary/flow)
- [Root cause analysis](/glossary/root-cause-analysis)
- [Traffic analysis](/glossary/traffic-analysis)

---

## Frequently asked questions

### How does drilldown analysis work?

Drilldown analysis starts with aggregated summaries and progressively narrows the investigation into more detailed records such as interfaces, hosts, conversations, flows, sessions, or packets by applying contextual filters and hierarchical navigation.

### What is the difference between drilldown and drill-through?

Drilldown generally navigates deeper into increasingly detailed views within related datasets or hierarchical contexts, while drill-through opens related investigations, reports, or datasets that may exist outside the current analytical hierarchy.

### What use cases does drilldown analysis support?

Drilldown analysis supports operational troubleshooting, root-cause analysis, anomaly investigation, security investigations, capacity analysis, traffic analysis, and historical network investigation workflows.

### Why is drilldown important for flow monitoring?

Drilldown is important because flow-monitoring environments generate large volumes of aggregated telemetry. Drilldown workflows help operators quickly move from summary metrics to the underlying traffic records associated with operational or security events.

### How does Trisul support drilldown workflows?

Trisul supports drilldown workflows through flow analytics, interactive traffic exploration, Explore Flows, interface-oriented investigation, and historical traffic analysis capabilities.