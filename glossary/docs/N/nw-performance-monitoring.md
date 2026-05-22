---
title: What is network performance monitoring?
description: Network performance monitoring tracks metrics such as latency, jitter, packet loss, and throughput to ensure the network is delivering acceptable quality for applications and users.
sidebar_label: Network performance monitoring
sidebar_position: 146
slug: /glossary/network-performance-monitoring
keywords:
  - network performance monitoring
  - NPM
  - latency monitoring
  - jitter monitoring
  - packet loss
  - throughput monitoring
  - network quality
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is network performance monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance monitoring tracks metrics such as latency, jitter, packet loss, and throughput to ensure the network is delivering acceptable quality for applications and users."
      }
    },
    {
      "@type": "Question",
      "name": "What metrics does network performance monitoring cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key metrics include latency (round-trip or one-way delay), jitter (variation in delay), packet loss (percentage of dropped packets), throughput (actual data rate), and interface utilization."
      }
    },
    {
      "@type": "Question",
      "name": "Why is network performance monitoring important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network performance monitoring is important because degraded performance affects applications and users before the network is fully down. Early detection of latency, loss, or saturation prevents outages and poor user experience."
      }
    },
    {
      "@type": "Question",
      "name": "How does network performance monitoring work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Performance monitoring uses active probing, passive traffic analysis, and SNMP polling to measure network health. Thresholds trigger alerts when metrics exceed acceptable levels."
      }
    }
  ]
};

# What is network performance monitoring?

Network performance monitoring tracks metrics such as latency, jitter, packet loss, and throughput to ensure the network is delivering acceptable quality for applications and users.

---

## How network performance monitoring works

Performance monitoring combines passive traffic analysis and active measurement to track network health. Passive analysis measures performance from real traffic without adding load. Active probing sends test packets to measure delay and loss on specific paths.

SNMP polling gathers interface statistics from network devices. These are combined to give operators a continuous view of network health.

---

## Network performance monitoring in operations

Performance monitoring helps the NOC detect problems before users report them. A link with rising latency or growing packet loss is showing early signs of congestion or failure.

It also provides data for capacity planning and SLA reporting. Operators use performance data to justify upgrades and demonstrate service quality to customers.

---

## Key performance metrics

| Metric | What it measures |
|---|---|
| Latency | Delay in packet delivery |
| Jitter | Variation in delay |
| Packet loss | Percentage of packets dropped |
| Throughput | Actual data rate achieved |
| Utilization | Percentage of link capacity in use |

---

## What makes performance monitoring work in practice

Baselines are essential. A single measurement means little without context. Performance monitoring works best when current values are compared against normal patterns for that time of day.

Alert thresholds must be tuned carefully. Too sensitive and alerts fire constantly. Too loose and real problems go undetected. Starting with conservative thresholds and adjusting based on experience usually works well.

---

## How Trisul handles network performance monitoring

Trisul tracks performance metrics through flow data and packet capture. It shows latency, loss, utilization, and throughput per interface and conversation. Alerts can be configured when metrics exceed thresholds. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Interface utilization
- Interface saturation
- Packet loss monitoring
- QoS
- SLA monitoring

---

## Frequently asked questions

### What is network performance monitoring?

Network performance monitoring tracks metrics such as latency, jitter, packet loss, and throughput to ensure the network is delivering acceptable quality for applications and users.

### What metrics does network performance monitoring cover?

Key metrics include latency (round-trip or one-way delay), jitter (variation in delay), packet loss (percentage of dropped packets), throughput (actual data rate), and interface utilization.

### Why is network performance monitoring important?

Network performance monitoring is important because degraded performance affects applications and users before the network is fully down. Early detection of latency, loss, or saturation prevents outages and poor user experience.

### How does network performance monitoring work?

Performance monitoring uses active probing, passive traffic analysis, and SNMP polling to measure network health. Thresholds trigger alerts when metrics exceed acceptable levels.