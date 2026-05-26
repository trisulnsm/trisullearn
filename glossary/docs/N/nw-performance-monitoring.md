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

**Network performance monitoring** tracks metrics such as **latency, jitter, packet loss, and throughput** to ensure the network is delivering acceptable quality for **applications and users**. It focuses on **how well the network performs**, not just whether it is up or down.

---

## How network performance monitoring works

Network performance monitoring typically:

- Uses **active probing** (e.g., synthetic tests or ICMP‑based measurements) to send dedicated test packets along specific paths and measure **latency, jitter, and loss**.  
- Applies **passive traffic analysis** (flows, packet‑level or header‑level stats) to derive **real‑traffic performance** without adding extra load.  
- Pulls **interface statistics** via **SNMP or model‑driven telemetry** to track **utilization, errors, and congestion indicators** on devices.  

When metrics cross **tuned thresholds**, the system generates **alerts** so that operators can act before user experience degrades.

---

## Network performance monitoring in network operations

In the **NOC and operations teams**, network performance monitoring:

- Detects **early‑stage degradation** (rising latency, increasing packet loss, jitter spikes) before services are perceived as “down”.  
- Supports **capacity planning and SLA reporting** by showing **trends in latency, loss, and throughput** over time and per path.  

Because it focuses on **quality**, not just availability, it is tightly coupled with **application‑experience and VoIP/SaaS‑monitoring workflows**.

---

## Key performance metrics

| Metric | What it measures |
|--------|------------------|
| Latency | Round‑trip or one‑way delay in packet delivery |
| Jitter | Variation in delay between packets |
| Packet loss | Percentage of packets dropped in transit |
| Throughput | Actual data rate achieved over the network |
| Interface utilization | Percentage of link capacity in use |

These metrics form the core **“quality dashboard”** for performance‑sensitive services.

---

## What makes performance monitoring work in practice

Two operational aspects are critical:

- **Baselines and context**:  
  - A single measurement means little without knowing what is **normal for that link, path, or time of day**.  
  - Continuous baselining lets operators distinguish between expected variation and real degradation.  
- **Threshold tuning**:  
  - Alerts must be **sensitive enough** to catch real problems, but **conservative enough** to avoid noise.  
  - Teams usually start with modest thresholds and adjust them based on observed behavior and user feedback.

Without good baselines and tuning, performance monitoring can either **miss important issues** or **drown operators in false positives**.

---

## How Trisul handles network performance monitoring

Trisul tracks **network performance monitoring metrics** through:

- **Flow‑level and packet‑driven analysis** to show **latency, loss, utilization, and throughput** per interface and conversation.  
- **Alarm and alerting rules** that trigger when metrics exceed configured thresholds.  

This gives operators **both real‑traffic‑based performance views** and **configurable early‑warning signals** for critical links and services. For deployment and configuration guidance, see Trisul documentation at [https://docs.trisul.org/](https://docs.trisul.org/).

---

## Related terms

- [What is interface utilization?](/docs/glossary/interface-utilization)  
- [What is interface saturation?](/docs/glossary/interface-saturation)  
- [What is packet loss monitoring?](/docs/glossary/packet-loss-monitoring)  
- [What is QoS?](/docs/glossary/qos)  
- [What is SLA monitoring?](/docs/glossary/sla-monitoring)  

---

## Frequently asked questions

### What is network performance monitoring?

Network performance monitoring tracks metrics such as latency, jitter, packet loss, and throughput to ensure the network is delivering acceptable quality for applications and users.

### What metrics does network performance monitoring cover?

Key metrics include latency (round‑trip or one‑way delay), jitter (variation in delay), packet loss (percentage of dropped packets), throughput (actual data rate), and interface utilization.

### Why is network performance monitoring important?

Network performance monitoring is important because degraded performance affects applications and users before the network is fully down. Early detection of latency, loss, or saturation prevents outages and poor user experience.

### How does network performance monitoring work?

Performance monitoring uses active probing, passive traffic analysis, and SNMP polling to measure network health. Thresholds trigger alerts when metrics exceed acceptable levels.