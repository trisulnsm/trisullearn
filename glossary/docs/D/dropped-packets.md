---
title: What are dropped packets?
description: Dropped packets are network packets that are discarded before successfully reaching their intended destination, commonly due to congestion, buffer exhaustion, interface limitations, policy enforcement, or hardware-related issues.
sidebar_label: Dropped packets
sidebar_position: 19
slug: /glossary/dropped-packets
keywords:
  - dropped packets
  - packet loss
  - network packet drops
  - interface drops
  - rx drops
  - tx drops
  - buffer overflow
  - packet discard
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the common causes of dropped packets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes include congestion, buffer exhaustion, interface overruns, hardware limitations, QoS policy enforcement, wireless interference, malformed packets, routing problems, and resource constraints on network devices or hosts."
      }
    },
    {
      "@type": "Question",
      "name": "How do dropped packets affect TCP versus UDP traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCP generally retransmits lost packets and adjusts transmission behavior in response to packet loss, while UDP typically does not retransmit dropped packets. As a result, TCP packet loss commonly affects throughput and latency, whereas UDP packet loss may directly impact realtime application quality."
      }
    },
    {
      "@type": "Question",
      "name": "How do you diagnose dropped packets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dropped packets are commonly diagnosed using interface counters, flow analytics, packet analysis, retransmission metrics, device telemetry, QoS statistics, congestion analysis, and operational monitoring tools."
      }
    },
    {
      "@type": "Question",
      "name": "Are dropped packets always a problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Some packet drops may occur during congestion-control workflows, wireless communication, traffic shaping, or QoS enforcement. However, sustained or excessive packet loss often indicates operational or performance problems."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul help analyze dropped-packet conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul helps operators analyze traffic behavior associated with packet-loss conditions using flow analytics, retransmission visibility, congestion investigation workflows, and historical traffic analysis."
      }
    }
  ]
};

# What are dropped packets?

**Dropped packets** are network packets that are discarded before successfully reaching their intended destination.

Packet drops commonly occur because of:
- Congestion
- Buffer exhaustion
- Interface overruns
- QoS policy enforcement
- Hardware limitations
- Wireless interference
- Resource exhaustion
- Malformed or invalid traffic

Packet loss is an important operational signal because excessive drops can affect:
- Application performance
- Throughput
- Latency
- Voice and video quality
- Service availability
- User experience

Trisul supports traffic-analysis workflows that help operators investigate congestion, retransmissions, traffic anomalies, and operational conditions associated with packet loss.

---

## What causes dropped packets

Packets may be dropped at different points within a network or host stack.

Common causes include:

| Cause | Operational meaning |
|---|---|
| Congestion | Traffic exceeds forwarding capacity |
| Buffer exhaustion | Queues cannot accept additional packets |
| Interface overruns | Interfaces cannot process packets fast enough |
| QoS enforcement | Lower-priority traffic is intentionally discarded |
| Hardware limitations | Device resource exhaustion or hardware issues |
| Wireless interference | Frames become corrupted or unusable |
| Routing or forwarding problems | Packets cannot be forwarded correctly |
| Invalid or malformed packets | Packets fail protocol validation |

Packet drops may occur on:
- Routers
- Switches
- Firewalls
- Wireless infrastructure
- Servers
- Virtualized environments
- Endpoint operating systems

The operational impact depends on traffic type, application sensitivity, and loss severity.

---

## Dropped packets and transport protocols

Different protocols react differently to packet loss.

### TCP behavior

TCP generally:
- Detects missing packets
- Retransmits lost data
- Reduces transmission rates during congestion
- Adjusts congestion windows dynamically

TCP packet loss often causes:
- Increased latency
- Reduced throughput
- Retransmissions
- Application slowdowns

### UDP behavior

UDP generally does not retransmit dropped packets automatically.

UDP packet loss may directly affect:
- Voice quality
- Video quality
- Gaming traffic
- Realtime applications
- Streaming consistency

Operational effects may include:
- Audio glitches
- Video artifacts
- Frame loss
- Jitter-related degradation

---

## Dropped packets in network operations

Operations teams monitor packet drops to identify:
- Congestion
- Capacity bottlenecks
- Hardware failures
- Misconfigurations
- Traffic anomalies
- QoS issues

Common operational workflows include:

- **NOC operations**: Monitor interface drop counters and congestion
- **SOC investigations**: Investigate anomalous traffic spikes or attack-related drops
- **Capacity planning**: Identify overloaded links and infrastructure
- **Wireless troubleshooting**: Investigate interference and retransmissions
- **Performance monitoring**: Analyze application-impacting packet loss

Sustained packet loss is often correlated with:
- High utilization
- Queue growth
- TCP retransmissions
- Latency increases
- Interface saturation

---

## Dropped packets vs corrupted packets

| Dimension | Dropped packets | Corrupted packets |
|---|---|---|
| Operational outcome | Packet discarded | Packet received with integrity errors |
| Typical causes | Congestion, buffering, policy enforcement | Physical-layer issues, interference, signal problems |
| Detection methods | Drop counters, retransmissions, telemetry | CRC errors, FCS errors, integrity checks |
| Common remediation | Capacity and congestion management | Hardware replacement or signal-quality improvements |
| Network impact | Throughput and delivery loss | Data integrity problems |

The two conditions are operationally different and often require different troubleshooting approaches.

---

## How dropped packets are diagnosed

Packet-loss investigations commonly use:
- Interface counters
- Device telemetry
- Flow analytics
- Packet captures
- Retransmission analysis
- Queue statistics
- Congestion metrics
- Historical traffic analysis

Common indicators include:
- `rx_dropped`
- `tx_dropped`
- Retransmission rates
- Interface utilization spikes
- Queue overflows
- TCP performance degradation

Different operating systems and vendors expose packet-loss statistics differently.

---

## Are dropped packets always bad?

Not all packet drops indicate operational failure.

Examples where packet drops may occur normally include:
- Congestion-control mechanisms
- QoS traffic shaping
- Wireless communication environments
- Burst traffic conditions
- Traffic policing workflows

However, persistent or excessive packet loss can indicate:
- Capacity exhaustion
- Misconfiguration
- Hardware failure
- Traffic anomalies
- Network instability

The operational impact depends on:
- Application requirements
- Traffic type
- Loss duration
- Network design
- Protocol behavior

---

## How Trisul handles dropped-packet analysis

Trisul supports traffic-analysis workflows that help operators investigate conditions associated with packet loss.

Relevant capabilities include:

- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Historical traffic trending**
- **Congestion-oriented traffic analysis**
- **TCP retransmission visibility**
- **Explore Flows** for traffic investigation and drill-down workflows
- **Traffic anomaly visibility**
- **Interface and traffic correlation workflows**
- **Operational visibility into traffic spikes and saturation patterns**

These capabilities help operators investigate traffic behavior associated with congestion, retransmissions, interface saturation, and operational anomalies.

Trisul primarily provides traffic analytics and visibility rather than direct infrastructure packet-drop instrumentation from every device.

Direct packet-drop counters are typically obtained from:
- Routers
- Switches
- Firewalls
- Host operating systems
- SNMP telemetry
- Device-management platforms

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#capacity-planning
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring

---

## Related terms

- [Flow monitoring](/glossary/flow-monitoring)
- [Network performance monitoring](/glossary/network-performance-monitoring)
- [TCP retransmission](/glossary/tcp-retransmission)
- [Congestion](/glossary/congestion)
- [QoS](/glossary/qos)
- [Interface saturation](/glossary/interface-saturation)
- [Packet loss](/glossary/packet-loss)

---

## Frequently asked questions

### What are the common causes of dropped packets?

Common causes include congestion, buffer exhaustion, interface overruns, hardware limitations, QoS policy enforcement, wireless interference, malformed packets, routing problems, and resource constraints on network devices or hosts.

### How do dropped packets affect TCP versus UDP traffic?

TCP generally retransmits lost packets and adjusts transmission behavior in response to packet loss, while UDP typically does not retransmit dropped packets. As a result, TCP packet loss commonly affects throughput and latency, whereas UDP packet loss may directly impact realtime application quality.

### How do you diagnose dropped packets?

Dropped packets are commonly diagnosed using interface counters, flow analytics, packet analysis, retransmission metrics, device telemetry, QoS statistics, congestion analysis, and operational monitoring tools.

### Are dropped packets always a problem?

Not always. Some packet drops may occur during congestion-control workflows, wireless communication, traffic shaping, or QoS enforcement. However, sustained or excessive packet loss often indicates operational or performance problems.

### How does Trisul help analyze dropped-packet conditions?

Trisul helps operators analyze traffic behavior associated with packet-loss conditions using flow analytics, retransmission visibility, congestion investigation workflows, and historical traffic analysis.