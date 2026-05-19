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

**Drilldown analysis** is the process of moving from high‑level network traffic summaries to increasingly detailed traffic views in order to investigate specific activity, performance issues, or security events.  

It helps network and security teams quickly identify the root cause of abnormal traffic behavior by narrowing analysis from broad traffic patterns down to individual flows, packets, hosts, applications, or sessions.  

Drilldown analysis is widely used in **[Traffic Investigation](/glossary/traffic-investigation)**, **[Flow Analysis](/glossary/flow-analysis)**, and **[Anomaly Detection](/glossary/anomaly-detection)** workflows.

## **How Drilldown Analysis Works**

Network monitoring platforms collect large volumes of traffic data from:
- flow records (NetFlow, IPFIX, sFlow)  
- packet captures  
- interfaces and links  
- transport and application‑level protocols  
- routing and BGP systems  
- subscriber and authentication systems  

Drilldown workflows allow analysts to progressively filter, slice, and pivot this data to focus on specific segments.

For example:

1. A dashboard shows a bandwidth spike on a key link.  
2. The analyst drills into the affected interface and time window.  
3. Traffic is filtered by application, protocol, or ASN.  
4. Suspicious hosts or flows are identified as top talkers or anomaly indicators.  
5. The analyst can then pivot to packet‑level views or session details if needed.  

Drilldown analysis may move between:
- bandwidth and interface‑level summaries  
- top‑talker and top‑application views  
- protocol‑ and application‑level analytics  
- ASN‑ and peering‑level views  
- subscriber‑ or segment‑level traffic  
- individual flows and conversations  
- packet‑capture and session replays  

## **Why Drilldown Analysis Matters**

Large networks generate too much traffic data to investigate manually from raw records alone.  

Drilldown analysis helps teams:
- troubleshoot faster and reduce mean‑time‑to‑diagnose  
- reduce investigation time by narrowing down suspects  
- identify root causes of traffic anomalies and performance issues  
- isolate abnormal or suspicious traffic patterns  
- improve operational visibility across interfaces, segments, and applications  
- investigate security events with greater context  

It improves visibility into:
- traffic spikes and surge behavior  
- congestion points and link‑saturation  
- suspicious or malicious communication patterns  
- application‑level performance and latency issues  
- routing‑path or ASN‑level anomalies  
- protocol‑misuse and policy‑relevant traffic  

Drilldown visibility is especially important in:
- SOC operations and security investigations  
- ISP traffic analytics and backbone‑traffic analysis  
- enterprise‑network troubleshooting  
- NOC environments  
- incident‑response and post‑mortem analysis  

## **Common Operational Use Cases**

### Traffic Spike Investigation

Identify applications, hosts, or segments responsible for sudden bandwidth surges or capacity‑eating flows.

### Security Analysis

Investigate suspicious traffic patterns, outlier flows, or protocol‑abuse indicators that may suggest threats or policy violations.

### Application Troubleshooting

Analyze protocol behavior, session‑timing, and flow patterns to diagnose application‑performance or connectivity issues.

### Subscriber Investigation

Drill into traffic activity for specific users, customer segments, or service tiers in ISP and multi‑tenant environments.

### Routing Analysis

Investigate abnormal traffic paths, peering‑level changes, or ASN‑behavior anomalies that may affect capacity or reachability.

## **Drilldown Analysis vs Summary Monitoring**

| Feature | Drilldown Analysis | Summary Monitoring |
|---|---|---|
| Visibility Depth | Detailed, granular | High‑level, aggregated |
| Investigation Capability | Strong, root‑cause oriented | Limited beyond summary views |
| Traffic Granularity | Fine‑grained (flows, hosts, packets) | Aggregated (links, interfaces, top‑sums) |
| Root Cause Analysis | Supported with multiple pivot layers | Limited to top‑level indicators |
| Operational Context | Deep, contextual | Broad, overview‑focused |

Summary monitoring identifies that an issue exists; drilldown analysis helps explain **why** it occurred and **where** it is rooted.

## **How Trisul Handles Drilldown Analysis**

Trisul provides layered traffic visibility and investigation workflows that allow teams to move from high‑level traffic summaries into detailed packet and flow analysis.  

Using features such as:
- Flow Stitchingᵀ  
- Top‑K Analyticsᵀ  
- Retro Analysisᵀ  
- Contextᵀ  
- Packet Capture  
- Multigraph Analyticsᵀ  

Trisul helps teams:
- investigate traffic spikes and capacity‑draining flows across links and segments  
- identify suspicious or anomalous flows and top‑talker patterns  
- analyze application‑ and protocol‑level behavior over time  
- correlate historical traffic activity and events with current views  
- troubleshoot application‑level performance and session‑timeout issues  
- visualize traffic relationships and communication patterns across hosts, subnets, and ASNs  

Trisul can also correlate **[NetFlow](/glossary/netflow)**, **[Packet Capture](/glossary/packet-capture)**, and **[Conversation View](/glossary/conversation-view)** workflows for deeper investigation visibility and long‑term analysis.

## **Related Terms**

- [Traffic Investigation](/glossary/traffic-investigation)  
- [Flow Analysis](/glossary/flow-analysis)  
- [Packet Capture](/glossary/packet-capture)  
- [Anomaly Detection](/glossary/anomaly-detection)  
- [Conversation View](/glossary/conversation-view)  
- [Bandwidth Monitoring](/glossary/bandwidth-monitoring)  

---

## **FAQ**

### What is drilldown analysis in network monitoring?

Drilldown analysis is the process of moving from summarized traffic views into detailed, layered traffic investigation layers such as flows, hosts, protocols, and packets.

### Why is drilldown analysis important?

It helps teams identify the root causes of traffic issues, performance problems, and security events much more efficiently than working from high‑level dashboards alone.

### What types of data are used in drilldown analysis?

Common data sources include NetFlow, IPFIX, packet captures, protocol‑level information, and traffic‑analytics records that can be pivoted and sliced by time, interface, host, or application.

### How does drilldown analysis help troubleshooting?

It allows analysts to isolate suspicious traffic, applications, hosts, or sessions step by step, avoiding the need to inspect every flow or packet manually.

### Is drilldown analysis useful for security investigations?

Yes. It helps analysts investigate malicious communication, traffic anomalies, and suspicious‑behavior patterns by providing a structured path from high‑level alerts down to concrete flows and packets.

### Can drilldown analysis work with packet capture?

Yes. Many monitoring platforms, including Trisul, correlate flow‑level analytics with packet capture and session‑replay to enable deep drilldown from summary views into raw packet‑level investigation where needed.