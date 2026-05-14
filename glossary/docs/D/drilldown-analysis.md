---
title: What is Drilldown Analysis?
sidebar_label: Drilldown Analysis
sidebar_position: 26
slug: /glossary/drilldown-analysis
description: Learn what drilldown analysis is, how it works in network monitoring, and why it is important for traffic investigation, troubleshooting, and operational visibility.
keywords:
  - drilldown analysis
  - network drilldown analysis
  - traffic investigation
  - network troubleshooting
  - traffic visibility
  - flow analytics
---

# What is Drilldown Analysis?

Drilldown Analysis is the process of moving from high-level network traffic summaries into increasingly detailed traffic views to investigate specific activity, performance issues, or security events.

It helps network and security teams quickly identify the root cause of abnormal traffic behavior by narrowing analysis from broad traffic patterns down to individual flows, packets, hosts, applications, or sessions.

Drilldown analysis is widely used in [Traffic Investigation](/glossary/traffic-investigation), [Flow Analysis](/glossary/flow-analysis), and [Anomaly Detection](/glossary/anomaly-detection) workflows.

## How Drilldown Analysis Works

Network monitoring platforms collect large volumes of traffic data from:
- flow records
- packet captures
- interfaces
- protocols
- applications
- routing systems

Drilldown workflows allow analysts to progressively filter and investigate this data.

For example:

1. A dashboard shows a bandwidth spike
2. The analyst drills into the affected interface
3. Traffic is filtered by application or protocol
4. Suspicious hosts or flows are identified
5. Packet-level investigation begins if needed

Drilldown analysis may move between:
- bandwidth summaries
- top talkers
- applications
- protocols
- ASNs
- subscribers
- individual traffic sessions
- packet captures

/* IMAGE: Network drilldown investigation workflow /*

## Why Drilldown Analysis Matters

Large networks generate too much traffic data to investigate manually from raw records alone.

Drilldown analysis helps teams:
- troubleshoot faster
- reduce investigation time
- identify root causes
- isolate abnormal traffic
- improve operational visibility
- investigate security events more efficiently

It improves visibility into:
- traffic spikes
- congestion
- suspicious communication
- application performance issues
- routing anomalies
- protocol misuse

Drilldown visibility is especially important in:
- SOC operations
- ISP traffic analytics
- enterprise troubleshooting
- NOC environments
- incident response workflows

## Common Operational Use Cases

### Traffic Spike Investigation

Identify applications or hosts responsible for bandwidth surges.

### Security Analysis

Investigate suspicious traffic patterns and malicious communication.

### Application Troubleshooting

Analyze protocol behavior and session performance.

### Subscriber Investigation

Drill into traffic activity for specific users or customer segments.

### Routing Analysis

Investigate abnormal traffic paths or ASN behavior.

## Drilldown Analysis vs Summary Monitoring

| Feature | Drilldown Analysis | Summary Monitoring |
|---|---|---|
| Visibility Depth | Detailed | High-level |
| Investigation Capability | Strong | Limited |
| Traffic Granularity | Fine-grained | Aggregated |
| Root Cause Analysis | Supported | Limited |
| Operational Context | Deep | Broad |

Summary monitoring identifies issues, while drilldown analysis helps investigate and explain them.

## How Trisul Handles Drilldown Analysis

Trisul provides layered traffic visibility and investigation workflows that allow teams to move from high-level traffic summaries into detailed packet and flow analysis.

Combined with:
- Flow Stitchingᵀ
- Top-K Analyticsᵀ
- Retro Analysisᵀ
- Contextᵀ
- Packet Capture
- Multigraph Analyticsᵀ

Trisul helps teams:
- investigate traffic spikes
- identify suspicious flows
- analyze protocol behavior
- correlate historical traffic activity
- troubleshoot application issues
- visualize traffic relationships

Trisul can also correlate [NetFlow](/glossary/netflow), [Packet Capture](/glossary/packet-capture), and [Conversation View](/glossary/conversation-view) workflows for deeper investigation visibility.

## Related Terms

- [Traffic Investigation](/glossary/traffic-investigation)
- [Flow Analysis](/glossary/flow-analysis)
- [Packet Capture](/glossary/packet-capture)
- [Anomaly Detection](/glossary/anomaly-detection)
- [Conversation View](/glossary/conversation-view)
- [Bandwidth Monitoring](/glossary/bandwidth-monitoring)

---

## FAQ

### What is drilldown analysis in network monitoring?

Drilldown analysis is the process of moving from summarized traffic views into detailed traffic investigation layers.

### Why is drilldown analysis important?

It helps teams identify root causes of traffic issues, performance problems, and security events more efficiently.

### What types of data are used in drilldown analysis?

Common data sources include NetFlow, IPFIX, packet captures, protocol data, and traffic analytics.

### How does drilldown analysis help troubleshooting?

It allows analysts to isolate suspicious traffic, applications, hosts, or sessions step by step.

### Is drilldown analysis useful for security investigations?

Yes. It helps analysts investigate malicious communication, traffic anomalies, and suspicious network behavior.

### Can drilldown analysis work with packet capture?

Yes. Many monitoring platforms correlate flow analytics with packet capture for deeper investigation workflows.