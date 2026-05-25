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

**Dropped packets** are network packets that are discarded somewhere along the path before they arrive at their intended destination. They can be dropped at routers, switches, firewalls, hosts, or wireless links because traffic exceeds capacity, buffers are full, policies are enforced, or hardware or network conditions prevent clean delivery. Packet loss is a key signal in network operations: occasional drops are often tolerable, but sustained or high‑rate drops can severely impact application performance and user experience.

---

## What causes dropped packets

Drops occur at multiple points in the network stack. Common causes include congestion when traffic exceeds a link’s capacity, buffer exhaustion as queues overflow, interface overruns when hardware cannot keep up, and QoS or traffic‑shaping policies that intentionally discard lower‑priority traffic. Other causes include hardware limitations, wireless interference, malformed or invalid packets that fail validation, and routing or forwarding issues. Whether the drop happens on a router, firewall, server, or endpoint, the practical effect is the same: the data is never delivered and must be handled by the application or transport layer.

---

## Dropped packets and transport protocols

**TCP** reacts to packet loss by detecting missing segments, retransmitting data, and throttling send rates in response to congestion. This typically raises latency and reduces throughput but preserves data integrity. **UDP**, in contrast, generally does not retransmit dropped packets, so loss directly impacts realtime applications such as voice, video, and gaming, often manifesting as glitches, artifacts, jitter, or frame loss. Understanding which transport is affected helps determine whether the symptom is congestion‐induced throughput collapse (TCP) or quality degradation (UDP).

---

## Dropped packets in network operations

Operations teams treat dropped packets as a leading indicator of congestion, capacity issues, misconfigurations, or underlying hardware problems. They monitor interface counters, device telemetry, and flow‑based metrics to correlate packet loss with utilization spikes, queue growth, and TCP retransmissions. In NOC and SOC workflows, sudden or sustained drops can flag congestion, DDoS‑like traffic, misconfigured QoS, or failing components. In capacity planning and wireless troubleshooting, persistent drops help identify saturated links, interference‑prone channels, or poorly tuned buffers.

---

## Dropped packets vs corrupted packets

Dropped packets are never delivered to the receiver, while **corrupted packets** arrive but fail integrity checks (for example, CRC or FCS errors). Drops typically stem from congestion, buffering, or policy actions; corruption is more often tied to physical‑layer issues such as bad cables, interference, or weak signal. In practice, drops are managed via capacity and congestion control, whereas corruption calls for hardware or medium‑quality fixes.

---

## How dropped packets are diagnosed

Diagnostics rely on drop counters (`rx_dropped`, `tx_dropped`), device telemetry, and congestion indicators on routers, switches, and hosts. Flow analytics and packet captures help correlate loss with traffic spikes, QoS markings, or retransmission bursts. TCP‑centric views—such as retransmission rates and latency trends—flag loss‑affected sessions, while queue statistics and interface‑utilization graphs expose the underlying congestion. Different vendors and operating systems expose these counters in slightly different ways, so consistent monitoring is key.

---

## Are dropped packets always bad?

Some packet drops are normal and even expected, such as those generated by congestion‑control mechanisms, QoS shaping, traffic policing, or wireless conditions. However, persistent or high‑rate loss often signals capacity exhaustion, misconfiguration, failing hardware, or traffic anomalies. Whether loss is “bad” depends on application sensitivity, loss rate, duration, and protocol behavior. For example, small, intermittent loss may be acceptable for web browsing but can be intolerable for video conferencing.

---

## In Trisul

Trisul supports dropped‑packet investigations by exposing traffic‑level patterns that correlate with packet loss. Using **NetFlow, IPFIX, sFlow**, and similar telemetry, Trisul helps operators see traffic‑congestion events, TCP retransmissions, and interface‑saturation patterns. Features like **Explore Flows**, **historical traffic trending**, and congestion‑oriented dashboards allow teams to drill from high‑level utilization into flows that show retransmission or latency spikes. Trisul does not capture every device‑level drop counter directly but provides the traffic‑analytics layer that complements SNMP‑based interface‑counter monitoring from routers, switches, and firewalls.

---

## Related terms

- Dropped packets  
- Packet loss  
- Flow monitoring  
- Network performance monitoring  
- TCP retransmission  
- Congestion  
- QoS  
- Interface saturation  

---

## Frequently asked questions

### What are the common causes of dropped packets?

Common causes include congestion, buffer exhaustion, interface overruns, hardware limitations, QoS policy enforcement, wireless interference, malformed packets, routing problems, and resource constraints on network devices or hosts.

### How do dropped packets affect TCP versus UDP traffic?

TCP generally retransmits lost packets and adjusts transmission behavior in response to packet loss, while UDP typically does not retransmit dropped packets. As a result, TCP packet loss commonly affects throughput and latency, whereas UDP packet loss may directly impact realtime application quality.

### How do you diagnose dropped packets?

Dropped packets are commonly diagnosed using interface counters, flow analytics, packet analysis, retransmission metrics, device telemetry, QoS statistics, congestion analysis, and operational monitoring tools.

### Are dropped packets always a problem?

Not always. Some packet drops may occur during congestion‑control workflows, wireless communication, traffic‑shaping, or QoS enforcement. However, sustained or excessive packet loss often indicates operational or performance problems.

### How does Trisul help analyze dropped‑packet conditions?

Trisul helps operators analyze traffic behavior associated with packet‑loss conditions using flow analytics, retransmission visibility, congestion investigation workflows, and historical traffic analysis.