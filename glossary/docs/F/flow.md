---
title: What is a Flow?
sidebar_label: Flow
sidebar_position: 32
slug: /glossary/flow
description: Learn what a network flow is, how flows work in NetFlow and IPFIX monitoring, and why flow visibility is important for traffic analysis and network monitoring.
keywords:
  - network flow
  - flow monitoring
  - NetFlow
  - IPFIX
  - traffic flow analysis
  - network traffic visibility
---

# What is a Flow?

A Flow is a logical record of network communication between endpoints that shares common characteristics such as IP addresses, ports, protocols, and traffic direction.

Instead of capturing every packet individually, flow monitoring summarizes network conversations into traffic records that describe how systems communicate across a network.

Flows are the foundation of technologies such as [NetFlow](/glossary/netflow), [IPFIX](/glossary/ipfix), and [sFlow](/glossary/sflow).

## **How Flows Work**

When devices such as routers, switches, or firewalls observe network traffic, they group packets into flows based on shared attributes.

A flow commonly includes:
- source IP address
- destination IP address
- source port
- destination port
- protocol type
- traffic direction
- packet count
- byte count
- timestamps

For example:

1. A user opens a website
2. Multiple packets are exchanged
3. The device groups related packets into a flow
4. The flow record summarizes the communication session

A single flow may represent:
- a web session
- a file transfer
- a DNS request
- a VoIP call
- an application conversation

## **Why Flows Matter**

Capturing every packet in large networks can be resource intensive.

Flow monitoring provides scalable visibility into:
- traffic behavior
- bandwidth usage
- application activity
- communication patterns
- top talkers
- routing behavior
- suspicious traffic

Flows help teams:
- troubleshoot performance issues
- analyze bandwidth consumption
- detect anomalies
- investigate security incidents
- monitor ISP traffic
- understand application behavior

Flow visibility is especially important in:
- enterprise networks
- ISPs
- cloud environments
- SOC operations
- data centers

## **Common Flow Characteristics**

### Source and Destination IPs

Identify who communicated across the network.

### Ports and Protocols

Describe the application or service involved.

### Packet and Byte Counts

Measure traffic volume and session size.

### Flow Duration

Show how long the communication lasted.

### Traffic Direction

Identify inbound and outbound communication behavior.

## **Common Operational Use Cases**

### Bandwidth Monitoring

Analyze bandwidth usage across applications and users.

### Traffic Investigation

Investigate suspicious or abnormal communication patterns.

### Application Visibility

Identify applications generating network traffic.

### DDoS Detection

Detect traffic floods and abnormal flow behavior.

### ISP Traffic Analytics

Monitor subscriber traffic and backbone utilization.

## **Flow vs Packet**

| Feature | Flow | Packet |
|---|---|---|
| Visibility Type | Summarized communication | Individual network unit |
| Data Volume | Lower | Much higher |
| Scalability | High | Lower |
| Payload Visibility | Minimal or none | Full packet content |
| Common Use | Traffic analytics | Deep packet analysis |

Flows provide scalable traffic summaries, while packets provide detailed communication data.

## **How Trisul Handles Flow Analytics**

Trisul provides advanced flow-based traffic visibility and analytics for monitoring large-scale network environments.

Combined with:
- Flow Stitchingᵀ
- Flow Legsᵀ
- Top-K Analyticsᵀ
- Retro Analysisᵀ
- Multigraph Analyticsᵀ
- Contextᵀ

Trisul helps teams:
- analyze traffic behavior
- investigate conversations
- monitor bandwidth usage
- visualize traffic patterns
- identify anomalous flows
- correlate historical traffic activity

Trisul can also combine [Packet Capture](/glossary/packet-capture), [Conversation View](/glossary/conversation-view), and [Traffic Investigation](/glossary/traffic-investigation) workflows for deeper network visibility.

## **Related Terms**

- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [sFlow](/glossary/sflow)
- [Flow Analysis](/glossary/flow-analysis)
- [Conversation View](/glossary/conversation-view)
- [Packet Capture](/glossary/packet-capture)

---

## **FAQ**

### What is a network flow?

A network flow is a summarized record of communication between endpoints that share common traffic characteristics.

### What information does a flow contain?

Flows typically contain IP addresses, ports, protocols, timestamps, packet counts, and bandwidth statistics.

### Why are flows important?

Flows provide scalable traffic visibility for monitoring, troubleshooting, analytics, and security investigations.

### What's the difference between a flow and a packet?

A packet is an individual unit of network communication, while a flow summarizes related packets into a logical session.

### Which technologies use flows?

Technologies such as NetFlow, IPFIX, and sFlow use flow-based traffic monitoring.

### Are flows useful for security monitoring?

Yes. Flow analysis helps detect anomalies, suspicious communication, DDoS attacks, and abnormal traffic behavior.