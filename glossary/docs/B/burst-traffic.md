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

Burst traffic is a sudden, temporary spike in network activity that rises sharply for a short period before returning to baseline. It is also called bursty traffic when it occurs frequently or unpredictably. Burst traffic can indicate legitimate high-demand events or security incidents like DDoS attacks.

---

## How it works

Bursts occur when many applications or users transmit data simultaneously. A network on which many bursts occur is said to be bursty. Burst size in rate limiting is the maximum bytes that can be sent at full line rate before shaping takes effect.

---

## In network operations

- **NOC:** Monitor interface utilization dashboards to spot bursts before they cause packet loss or congestion.
- **SOC:** Distinguish legitimate traffic bursts from DDoS attacks using flow-based anomaly detection.
- **ISP:** Plan capacity with peak burst rates rather than average utilization to avoid service degradation.

---

## Burst traffic vs steady traffic

| Dimension | Burst traffic | Steady traffic |
|---|---|---|
| Duration | Seconds to minutes | Hours to days |
| Pattern | Sharp spike, fast return to baseline | Consistent over time |
| Capacity need | Peak rate driven | Average rate driven |
| Risk | Saturation, packet loss | Predictable, stable |

---

## How Trisul handles it

Trisul detects burst traffic through real-time Interface Tracking and Top-K analytics that show spikes in bandwidth and top talkers. Trigger-based alerting sends notifications when interface utilization exceeds thresholds. Historical trending shows burst patterns over time. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is interface utilization?](/docs/glossary/interface-utilization)
- [What is interface saturation?](/docs/glossary/interface-saturation)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is DDoS detection?](/docs/glossary/ddos-detection)
- [What is QoS?](/docs/glossary/qos)

---

## Frequently asked questions

### What causes burst traffic?

Burst traffic can be caused by live streaming events, software updates, cloud backups, file transfers, video conferencing, or security incidents like DDoS attacks. Short-scale burstiness is also a natural characteristic of Internet traffic due to the way applications and protocols behave.

### How does burst traffic affect network performance?

Bursts can temporarily saturate link capacity, causing packet loss, increased latency, and jitter. Networks sized for average traffic may struggle with bursts. Proper buffer sizing, QoS, and capacity planning help absorb bursts without degrading performance.

### What is burst size in networking?

Burst size is the maximum number of bytes that can be transmitted at full line rate before rate limiting or shaping takes effect. It is used in QoS and traffic policing to allow short bursts to pass while controlling sustained high rates. Burst size is typically expressed as a power of 2 in bytes.

### How do you detect burst traffic?

Burst traffic is detected by monitoring interface utilization in real time and comparing current rates to baseline averages. Flow monitoring tools identify bursts by tracking bandwidth per second and flagging when traffic exceeds thresholds. Top talkers and per-interface trending reveal burst sources and patterns.