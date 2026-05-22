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

Microburst detection identifies unexpected data bursts within very small time windows of microseconds. It detects traffic spikes that cause packet loss and congestion even when average utilization appears normal. A microburst occurs when a specific amount of data in bytes is exceeded in a given time interval.

---

## How microburst detection works

Microburst detection continuously computes the traffic rate and detects unexpected data bursts. Millisecond monitoring detects bursts at the wire level in real time using dedicated FPGAs or ASICs on each port. Buffer and queue insights pinpoint congestion before packets are lost.

Flow monitoring with high-resolution timestamps can detect microbursts. Traditional flow export at 1-minute intervals misses microbursts entirely. Microsecond-level monitoring is required to see bursts that last milliseconds.

---

## Microburst detection in network operations

In the NOC, monitor for microbursts on links carrying bursty traffic like backups and data replication. Microbursts cause packet loss even when average utilization is under 50 percent. Security teams detect microbursts that might indicate DDoS attacks or data exfiltration.

Traffic spike analytics track how bursts impact latency, packet loss, and application performance. Threshold-based alerts instantly notify operators when microbursts exceed capacity. This enables response before users experience problems.

---

## Microburst monitoring configuration

| Parameter | Description |
|---|---|
| Threshold | Traffic threshold as percentage of link speed |
| Window size | Window size for microburst check in microseconds |
| Link speed | Link speed in Mbit/s |
| Ingress/egress | Configure separately for each direction |
| Max bursts | Maximum number of microbursts allowed on interface |

---

## What makes microburst detection work in practice

High-resolution sampling is essential for microburst detection. Traditional SNMP polling at 5-minute intervals completely misses microbursts. Flow export at 1-minute intervals also misses them. Continuous wire-level monitoring at millisecond or microsecond resolution is required.

Hardware acceleration enables microburst detection at line rate. Dedicated FPGAs or ASICs on ports compute traffic rate continuously without CPU overhead. Software-based detection cannot keep up with wire speed and misses bursts.

---

## How Trisul handles microburst detection

Trisul detects microbursts through high-resolution flow monitoring and packet capture timestamps. Continuous traffic rate computation identifies unexpected data bursts. Microburst detection specifies traffic rate limit as percentage of link speed. When threshold is exceeded, the system generates logs. Full documentation is at https://docs.trisul.org/docs/ag/install/.

---

## Related terms

- [What is congestion detection?](/docs/glossary/congestion-detection)
- [What is packet loss?](/docs/glossary/packet-loss)
- [What is traffic spike analytics?](/docs/glossary/traffic-spike-analysis)
- [What is buffer monitoring?](/docs/glossary/buffer-monitoring)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)

---

## Frequently asked questions

### What is a microburst?

A microburst occurs when a specific amount of data in bytes is exceeded in a given time interval. Microbursts are unexpected data bursts within very small time windows of microseconds. They disrupt performance, cause security risks, and create network blind spots when average utilization appears normal.

### Why is microburst detection important?

Microburst detection is critical because microbursts cause packet loss and congestion even when average link utilization appears normal. Average-based monitoring misses microbursts entirely. Continuous high-resolution visibility is needed to detect bursts at the wire level in real time.

### How is microburst detection performed?

Microburst detection continuously computes the traffic rate and detects unexpected data bursts reporting them as soon as they occur. Millisecond monitoring detects bursts at the wire level using dedicated FPGAs or ASICs on each port. Buffer and queue insights pinpoint congestion before packets are lost.

### How do you configure microburst monitoring?

Set micro-burst threshold values for an interface and configure the maximum number of micro-bursts allowed. Configure ingress and egress port settings separately. Specify traffic rate limit as percentage of link speed. When threshold is exceeded the system generates a Syslog alarm message.