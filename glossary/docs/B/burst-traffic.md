---
title: What is burst traffic?
description: Burst traffic is a sudden, temporary spike in network activity that rises sharply for a short period before returning to baseline. It is also called bursty traffic when it occurs frequently or unpredictably.
sidebar_label: Burst traffic
sidebar_position: 32
slug: /glossary/burst-traffic
keywords:
  - burst traffic
  - bursty traffic
  - traffic spike
  - network burst
  - traffic burst
  - bandwidth burst
  - network congestion
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What causes burst traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burst traffic can be caused by live streaming events, software updates, cloud backups, file transfers, video conferencing, or security incidents like DDoS attacks. Short-scale burstiness is also a natural characteristic of Internet traffic due to the way applications and protocols behave."
      }
    },
    {
      "@type": "Question",
      "name": "How does burst traffic affect network performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bursts can temporarily saturate link capacity, causing packet loss, increased latency, and jitter. Networks sized for average traffic may struggle with bursts. Proper buffer sizing, QoS, and capacity planning help absorb bursts without degrading performance."
      }
    },
    {
      "@type": "Question",
      "name": "What is burst size in networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burst size is the maximum number of bytes that can be transmitted at full line rate before rate limiting or shaping takes effect. It is used in QoS and traffic policing to allow short bursts to pass while controlling sustained high rates. Burst size is typically expressed as a power of 2 in bytes."
      }
    },
    {
      "@type": "Question",
      "name": "How do you detect burst traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burst traffic is detected by monitoring interface utilization in real time and comparing current rates to baseline averages. Flow monitoring tools identify bursts by tracking bandwidth per second and flagging when traffic exceeds thresholds. Top talkers and per-interface trending reveal burst sources and patterns."
      }
    }
  ]
};

# What is burst traffic?

Burst traffic is a sudden, temporary spike in network activity that rises sharply for a short period before returning to baseline. It is also called bursty traffic when it occurs frequently or unpredictably. Burst traffic can indicate legitimate high‑demand events such as live streaming or backups, or security incidents such as DDoS attacks.

---

## How it works

Bursts occur when many applications or users transmit data simultaneously, leading to a short‑lived surge in bandwidth demand. A network on which many bursts occur is said to be bursty. In rate‑limiting and shaping policies, **burst size** is the maximum number of bytes that can be transmitted at full line rate before traffic is throttled or shaped.

---

## In network operations

- **NOC:** Monitor interface utilization dashboards to spot bursts before they cause packet loss, congestion, or queuing delay.  
- **SOC:** Use flow‑based anomaly detection to distinguish legitimate traffic bursts from malicious surges such as DDoS attacks.  
- **ISP:** Plan capacity against peak burst rates rather than average utilization to avoid service degradation during high‑demand periods.

---

## Burst traffic vs steady traffic

| Dimension        | Burst traffic                                          | Steady traffic                                        |
|------------------|--------------------------------------------------------|-------------------------------------------------------|
| Duration         | Seconds to minutes                                     | Hours to days                                         |
| Pattern          | Sharp spike, fast return to baseline                  | Consistent, relatively flat over time                 |
| Capacity need    | Sized for peak rate                                  | Sized for average rate                                |
| Risk profile     | Can cause temporary saturation and packet loss         | Predictable, stable, easier to model and plan for     |

---

## What makes burst traffic useful to monitor

Understanding burst traffic is essential because it reveals how traffic behaves at the micro‑scale. If a network is only designed for average utilization, repeated bursts can cause jitter, latency spikes, and drops, even when utilization looks acceptable over longer intervals.  
Monitoring bursts helps operators tune buffers, QoS policies, and capacity so that short‑lived spikes are absorbed without impacting user experience.

---

## In Trisul

Trisul detects burst traffic through real‑time **Interface Tracking** and **Top‑K analytics** that highlight sudden spikes in bandwidth and identify top‑talker sources. Trigger‑based alerting sends notifications when interface utilization or per‑flow traffic exceeds configured thresholds, and historical trending shows how burst patterns evolve over time. This helps operators quickly distinguish normal bursty behavior from abnormal or malicious surges.

---

## Related terms

- Burst traffic
- Interface utilization
- Interface saturation
- Flow monitoring
- DDoS detection
- Burst size
- Traffic spike

---

## Frequently asked questions

### What causes burst traffic?

Burst traffic can be caused by live streaming events, software updates, cloud backups, large file transfers, video conferencing, or security incidents such as DDoS attacks. Short‑scale burstiness is also a natural characteristic of Internet traffic due to the way applications and protocols exchange data in short bursts.

### How does burst traffic affect network performance?

Bursts can temporarily saturate link or device capacity, causing packet loss, increased latency, and jitter. Networks sized only for average traffic may struggle with bursts. Proper buffer sizing, QoS policies, and capacity planning help absorb bursts without degrading performance.

### What is burst size in networking?

Burst size is the maximum number of bytes that can be transmitted at full line rate before rate‑limiting or shaping takes effect. It is used in QoS and traffic‑policing rules to allow short bursts to pass while controlling sustained high‑rate flows. Burst size is typically expressed as a power of 2 in bytes.

### How do you detect burst traffic?

Burst traffic is detected by monitoring interface utilization in real time and comparing current rates to baseline averages. Flow monitoring tools identify bursts by tracking bandwidth per second and flagging when traffic exceeds thresholds. Top‑talker and per‑interface trending reveal burst sources and patterns, which help operators understand how bursts form and where they are coming from.