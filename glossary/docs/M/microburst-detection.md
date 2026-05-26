---
title: What is microburst detection?
description: Microburst detection identifies unexpected data bursts within very small time windows of microseconds. It detects traffic spikes that cause packet loss and congestion even when average utilization appears normal.
sidebar_label: Microburst detection
sidebar_position: 64
slug: /glossary/microburst-detection
keywords:
  - microburst detection
  - traffic burst detection
  - microsecond monitoring
  - network bursts
  - congestion detection
  - traffic spike analytics
  - buffer insights
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a microburst?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A microburst occurs when a specific amount of data in bytes is exceeded in a given time interval. Microbursts are unexpected data bursts within very small time windows of microseconds. They disrupt performance, cause security risks, and create network blind spots when average utilization appears normal."
      }
    },
    {
      "@type": "Question",
      "name": "Why is microburst detection important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Microburst detection is critical because microbursts cause packet loss and congestion even when average link utilization appears normal. Average-based monitoring misses microbursts entirely. Continuous high-resolution visibility is needed to detect bursts at the wire level in real time."
      }
    },
    {
      "@type": "Question",
      "name": "How is microburst detection performed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Microburst detection continuously computes the traffic rate and detects unexpected data bursts reporting them as soon as they occur. Millisecond monitoring detects bursts at the wire level using dedicated FPGAs or ASICs on each port. Buffer and queue insights pinpoint congestion before packets are lost."
      }
    },
    {
      "@type": "Question",
      "name": "How do you configure microburst monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Set micro-burst threshold values for an interface and configure the maximum number of micro-bursts allowed. Configure ingress and egress port settings separately. Specify traffic rate limit as percentage of link speed. When threshold is exceeded the system generates a Syslog alarm message."
      }
    }
  ]
};

# What is microburst detection?

**Microburst detection** identifies **unexpected, short‑lived data bursts** that occur in **microsecond‑scale time windows**, often causing **packet loss and congestion** even when **average link utilization looks normal**. A **microburst** is defined as a **surge of bytes that exceeds a configured threshold within a very short interval** (e.g., milliseconds or microseconds). Because these bursts are too brief for traditional polling or flow‑based telemetry to catch, they can create **invisible congestion and performance problems** unless detected with high‑resolution, wire‑level monitoring.

---

## How microburst detection works

Effective microburst detection must **run continuously at or near wire speed**, typically using:

- **High‑resolution sampling** (microsecond‑ or millisecond‑level intervals).  
- **Dedicated hardware logic** (e.g., FPGAs or ASICs) on each port that computes **instantaneous traffic rate** in real time.  
- **Buffer and queue telemetry** to see when local congestion is building up before packets are actually dropped.  

Flow‑based tools that export data only every **1 second or 1 minute** will **miss microbursts entirely**, because the burst is smoothed out in the aggregation. **Microsecond‑level packet capture or high‑resolution flow monitoring** is required to see and timestamp these sharp spikes accurately.

---

## Microburst detection in network operations

In the **NOC and performance teams**, microburst detection is applied to:

- Links carrying **bursty, high‑volume traffic** such as backups, replication, HFT, and large file transfers.  
- Core and aggregation segments where **queue depth directly affects latency and loss**.  

Microbursts can cause:

- **Packet loss** even if average utilization stays below 50%.  
- **Latency spikes and jitter** that degrade real‑time applications and user experience.  
- **Buffer exhaustion**, leading to tail drops and out‑of‑order delivery.  

Security and reliability teams also watch for suspicious microbursts that resemble **DDoS fragments or exfiltration bursts**, using **traffic‑spike analytics** and **threshold‑based alerts** to catch them before they impact services.

---

## Microburst monitoring configuration

| Parameter | Description |
|----------|-------------|
| Threshold | Traffic rate threshold as a percentage of link speed that triggers a microburst alert |
| Window size | Time interval (in microseconds or milliseconds) over which the threshold is checked |
| Link speed | Interface speed in Mbps or Gbps, used to normalize the threshold |
| Ingress/egress | Settings can be configured separately for each direction |
| Max bursts | Number of allowed microbursts on an interface before alarms escalate |

When the configured threshold is exceeded, the system typically generates **Syslog‑ or SNMP‑based alarm messages**, which can feed into dashboards, SIEMs, or ticketing systems.

---

## What makes microburst detection work in practice

Three factors are essential:

- **High‑resolution sampling**:  
  - Traditional **SNMP polling at 5‑minute intervals** or **flow export at 1‑minute intervals** cannot capture microbursts.  
  - Visibility must be at **millisecond or microsecond resolution** to see the actual burst envelope.  
- **Hardware‑level processing**:  
  - Dedicated **FPGAs or ASICs** per port compute traffic rate without adding CPU overhead and can keep up with **multi‑gigabit line rates**.  
  - Purely software‑based rate calculation at the collector will miss bursts or lag behind the wire.  
- **Queue and buffer telemetry**:  
  - Microburst detection is most useful when combined with **buffer‑depth and queue‑occupancy insights**, so operators can see congestion **before** packets are dropped.  

Together, these choices let microburst detection act as an **early warning system** for congestion and loss.

---

## How Trisul handles microburst detection

Trisul supports **microburst detection** via:

- **High‑resolution flow monitoring** that captures traffic rate changes quickly.  
- **Packet‑capture timestamps** (where available) that reveal **wire‑level microbursts** and their duration.  
- Continuous **traffic rate computation** and **threshold checks** that flag bursts exceeding a configured percentage of link speed.  

When a microburst threshold is crossed, the system can **generate logs or alert records** that integrate with NOC and security workflows. For 