---
title: What are Dropped Packets?
sidebar_label: Dropped Packets
sidebar_position: 27
slug: /glossary/dropped-packets
description: Learn what dropped packets are, what causes packet drops, and why packet loss monitoring is important for network performance, troubleshooting, and traffic analysis.
keywords:
  - dropped packets
  - packet drops
  - packet loss
  - network packet loss
  - traffic congestion
  - network troubleshooting
---

# What are Dropped Packets?

Dropped Packets are network packets that fail to reach their intended destination because they are discarded by network devices such as routers, switches, firewalls, or servers.

Packet drops can occur due to congestion, overloaded interfaces, hardware limitations, configuration issues, or security filtering.

Monitoring dropped packets helps network teams identify performance problems, congestion, and abnormal network behavior.

## How Packet Drops Happen

Network devices process massive volumes of traffic continuously.

When a device cannot process or forward packets successfully, packets may be discarded.

Common causes include:
- interface congestion
- overloaded buffers
- bandwidth saturation
- firewall filtering
- malformed packets
- routing issues
- hardware limitations
- QoS policies

For example:

1. Traffic volume exceeds interface capacity
2. Device buffers become full
3. New incoming packets cannot be queued
4. Excess packets are dropped

Packet drops may happen:
- temporarily during traffic bursts
- continuously during congestion
- intentionally through filtering policies

<!-- IMAGE: Network congestion and dropped packet workflow -->

## Why Dropped Packets Matter

Packet drops can significantly affect network performance and application behavior.

Dropped packets may cause:
- slow application response
- voice and video quality issues
- TCP retransmissions
- increased latency
- session instability
- service interruptions

Monitoring packet drops helps teams:
- identify congestion
- troubleshoot network problems
- optimize bandwidth usage
- improve QoS policies
- detect overloaded devices
- investigate abnormal traffic behavior

Packet loss visibility is especially important in:
- VoIP networks
- video conferencing
- ISP backbones
- cloud environments
- real-time applications
- high-speed networks

## Common Causes of Dropped Packets

### Network Congestion

Traffic exceeds available bandwidth or interface capacity.

### Buffer Overflow

Device queues become full during traffic spikes or bursts.

### Firewall Filtering

Security policies intentionally discard certain traffic.

### Hardware Limitations

Routers or switches cannot process traffic fast enough.

### QoS Enforcement

Low-priority traffic may be dropped during congestion.

### Routing Problems

Incorrect routes or unstable paths cause packet loss.

## Common Operational Use Cases

### Performance Troubleshooting

Identify congestion and network bottlenecks.

### VoIP Quality Monitoring

Analyze packet loss affecting voice and video traffic.

### DDoS Analysis

Detect overload conditions caused by traffic floods.

### Capacity Planning

Identify interfaces approaching saturation limits.

### Security Monitoring

Analyze dropped traffic caused by filtering policies.

## Dropped Packets vs Retransmissions

| Feature | Dropped Packets | Retransmissions |
|---|---|---|
| Meaning | Packets discarded | Packets resent |
| Trigger | Delivery failure or filtering | Missing acknowledgment |
| Network Impact | Packet loss | Increased traffic overhead |
| Detection Point | Network devices | End systems or protocols |
| Common Cause | Congestion or filtering | Packet drops or latency |

Dropped packets often lead to retransmissions in protocols such as TCP.

## How Trisul Handles Dropped Packet Analysis

Trisul provides traffic visibility and performance analytics for identifying packet loss, congestion, and abnormal traffic behavior.

Combined with:
- Packet Capture
- Flow Analysis
- Top-K Analyticsᵀ
- Retro Analysisᵀ
- Multigraph Analyticsᵀ
- Traffic Investigation

Trisul helps teams:
- analyze packet loss trends
- investigate congestion events
- identify overloaded interfaces
- troubleshoot application performance
- monitor burst traffic behavior
- correlate traffic spikes with packet drops

Trisul can also correlate [Packet Capture](/glossary/packet-capture), [Bandwidth Monitoring](/glossary/bandwidth-monitoring), and [Burst Traffic](/glossary/burst-traffic) workflows for deeper performance analysis.

## Related Terms

- [Packet Loss Monitoring](/glossary/packet-loss-monitoring)
- [Bandwidth Monitoring](/glossary/bandwidth-monitoring)
- [Burst Traffic](/glossary/burst-traffic)
- [Traffic Investigation](/glossary/traffic-investigation)
- [Packet Capture](/glossary/packet-capture)
- [Flow Analysis](/glossary/flow-analysis)

---

## FAQ

### What are dropped packets?

Dropped packets are network packets discarded before reaching their intended destination.

### What causes packet drops?

Common causes include congestion, overloaded interfaces, buffer overflow, filtering policies, and hardware limitations.

### Why are dropped packets important?

Packet drops can affect application performance, increase latency, and cause communication issues.

### How do dropped packets affect VoIP and video calls?

Packet loss can cause audio distortion, lag, jitter, and poor video quality.

### What's the difference between packet drops and retransmissions?

Packet drops occur when packets are discarded, while retransmissions happen when systems resend lost packets.

### How are dropped packets detected?

Monitoring tools analyze interface statistics, packet counters, flow data, and packet capture information to identify packet loss.