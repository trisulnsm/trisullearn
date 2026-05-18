---
title: What are Flow Legsᵀ?
sidebar_label: Flow Legsᵀ
sidebar_position: 40
slug: /glossary/flow-legs
description: Learn what Flow Legsᵀ are in Trisul Network Analytics and how they help analyze traffic paths, conversations, and multi-hop communication visibility.
keywords:
  - Flow Legs
  - Trisul Flow Legs
  - traffic path analysis
  - flow path visibility
  - network conversation analysis
  - multi-hop traffic analysis
---

# What are Flow Legsᵀ?

Flow Legsᵀ are a Trisul Network Analytics feature that breaks a network conversation into individual traffic segments or communication stages across different devices, interfaces, or network paths.

Instead of viewing a traffic flow as a single isolated session, Flow Legsᵀ helps teams understand how traffic moves through multiple hops, links, or monitoring points across a network.

This improves visibility into:
- traffic paths
- multi-hop communication
- routing behavior
- asymmetric traffic
- internal application communication
- traffic troubleshooting

## **How Flow Legsᵀ Work**

In modern networks, traffic often traverses multiple systems before reaching its destination.

A single communication session may involve:
- routers
- firewalls
- load balancers
- switches
- WAN links
- cloud gateways
- internal application tiers

Flow Legsᵀ separates these communication stages into connected traffic segments called "legs."

For example:

1. A user accesses a cloud application
2. Traffic crosses an edge firewall
3. The session traverses a WAN link
4. Internal services communicate with backend databases
5. Each communication segment becomes a separate flow leg

This helps analysts visualize:
- where traffic traveled
- how communication changed
- which systems participated
- where latency or anomalies occurred

## **Why Flow Legsᵀ Matter**

Traditional flow analysis may only show endpoint-to-endpoint communication.

This can make it difficult to:
- analyze multi-hop traffic paths
- troubleshoot asymmetric routing
- investigate application dependencies
- understand internal communication stages
- correlate distributed traffic activity

Flow Legsᵀ improves:
- traffic path visibility
- troubleshooting accuracy
- operational context
- forensic investigation workflows
- east-west traffic analysis
- cloud communication visibility

It is especially useful in:
- enterprise WANs
- cloud environments
- microservices architectures
- ISP infrastructures
- data centers
- hybrid networks

## **Common Operational Use Cases**

### Application Troubleshooting

Identify where latency or packet loss occurs across communication paths.

### Multi-Hop Traffic Analysis

Visualize traffic movement through complex infrastructures.

### East-West Traffic Visibility

Analyze internal communication between services and systems.

### WAN Path Investigation

Track communication across branch and backbone networks.

### Security Investigation

Investigate suspicious traffic movement between network segments.

## **Flow Legsᵀ vs Traditional Flow Analysis**

| Feature | Flow Legsᵀ | Traditional Flow Analysis |
|---|---|---|
| Visibility Depth | Multi-hop communication | Endpoint-to-endpoint |
| Traffic Path Awareness | High | Limited |
| Operational Context | Rich | Moderate |
| Internal Traffic Visibility | Strong | Basic |
| Troubleshooting Capability | Advanced | Standard |

Flow Legsᵀ provides deeper visibility into how traffic traverses the network across multiple stages.

## **How Trisul Uses Flow Legsᵀ**

Trisul uses Flow Legsᵀ alongside its advanced traffic analytics and contextual monitoring workflows to improve traffic path visibility.

Combined with:
- Flow Stitchingᵀ
- Contextᵀ
- Conversation View
- Top-K Analyticsᵀ
- Retro Analysisᵀ
- Multigraph Analyticsᵀ

Trisul helps teams:
- visualize traffic movement across infrastructures
- analyze multi-hop communication
- troubleshoot distributed applications
- investigate asymmetric routing behavior
- monitor east-west traffic
- correlate related communication stages

Trisul can also integrate [Packet Capture](/glossary/packet-capture), [Conversation View](/glossary/conversation-view), and [Traffic Investigation](/glossary/traffic-investigation) workflows for deeper operational visibility.

## **Related Terms**

- [Flow Stitching](/glossary/flow-stitching)
- [Conversation View](/glossary/conversation-view)
- [East-West Traffic](/glossary/east-west-traffic)
- [Traffic Investigation](/glossary/traffic-investigation)
- [Flow Analysis](/glossary/flow-analysis)
- [Contextᵀ](/glossary/context)

---

## **FAQ**

### What are Flow Legsᵀ in Trisul?

Flow Legsᵀ are traffic path segments that represent different stages of communication across a network.

### Why are Flow Legsᵀ important?

They improve visibility into multi-hop traffic paths, routing behavior, and distributed application communication.

### How do Flow Legsᵀ help troubleshooting?

They help identify where delays, anomalies, or communication issues occur across traffic paths.

### What's the difference between Flow Legsᵀ and traditional flow analysis?

Traditional flow analysis focuses mainly on endpoints, while Flow Legsᵀ analyzes intermediate communication stages and paths.

### Are Flow Legsᵀ useful in cloud environments?

Yes. They help analyze traffic movement across distributed cloud and hybrid infrastructures.

### Can Flow Legsᵀ help with security investigations?

Yes. They improve visibility into suspicious traffic movement, lateral communication, and multi-stage network activity.