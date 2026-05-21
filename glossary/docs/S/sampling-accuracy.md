---
title: What is sampling accuracy?
description: Sampling accuracy measures how closely sampled flow data represents actual traffic. It determines the reliability of bandwidth estimates and traffic analysis when using flow sampling instead of full flow export.
sidebar_label: Sampling accuracy
sidebar_position: 97
slug: /glossary/sampling-accuracy
keywords:
  - sampling accuracy
  - flow sampling
  - NetFlow sampling
  - traffic estimation
  - sample rate
  - measurement accuracy
  - sampling error
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is sampling accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling accuracy measures how closely sampled flow data represents actual traffic. It determines the reliability of bandwidth estimates and traffic analysis when using flow sampling instead of full flow export. A sampling rate of 1 in 1000 means one packet out of every 1000 is selected."
      }
    },
    {
      "@type": "Question",
      "name": "How does sampling rate affect accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling rate directly affects accuracy. A 1 in 1000 sampling rate means estimates have approximately 0.1% accuracy. For large flows, sampled data provides good estimates. For small flows, some may be missed entirely. Total byte counts are scaled up by the inverse of the sampling rate."
      }
    },
    {
      "@type": "Question",
      "name": "How is sampling accuracy calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling accuracy is calculated as the inverse of the sampling rate. A 1 in 100 sampling rate provides 1% accuracy. A 1 in 1000 sampling rate provides 0.1% accuracy. Statistical confidence intervals account for variance in sampling."
      }
    },
    {
      "@type": "Question",
      "name": "When is sampling acceptable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling is acceptable for bandwidth estimation and trend analysis at high speeds where full flow export would overload routers. Sampling is not acceptable when exact packet-level accuracy is required for forensic investigation or billing."
      }
    }
  ]
};

# What is sampling accuracy?

Sampling accuracy measures how closely sampled flow data represents actual traffic. It determines the reliability of bandwidth estimates and traffic analysis when using flow sampling instead of full flow export. Sampling enables flow monitoring at high speeds with reduced overhead.

---

## How sampling accuracy works

Flow sampling selects a subset of packets for flow export. The flow exporter scales byte and packet counts by the inverse of the sampling rate to estimate total traffic. For example, with 1 in 1000 sampling, if a sampled flow shows 1000 bytes, the exporter reports 1,000,000 bytes as the estimated total.

Statistical confidence intervals account for variance. Larger sample sizes provide more accurate estimates. Small flows may be completely missed if none of their packets are sampled.

---

## Sampling accuracy in network operations

In the NOC, understand sampling accuracy when interpreting bandwidth estimates. High sampling rates (lower ratios) provide better accuracy but more overhead. Low sampling rates (higher ratios) reduce overhead but miss small flows.

Capacity planning uses sampled data for trend analysis. Even with sampling, traffic patterns and trends are visible. Absolute accuracy is less important than relative trends for capacity planning.

---

## Sampling rate vs accuracy

| Sampling Rate | Accuracy | Use Case |
|---|---|---|
| 1 in 100 | 1% | High accuracy, moderate overhead |
| 1 in 1000 | 0.1% | Good accuracy, lower overhead |
| 1 in 10000 | 0.01% | Trend analysis, minimal overhead |
| Full export | 100% | Forensic accuracy, very high overhead |

---

## What makes sampling accuracy work in practice

Sampling method affects accuracy. Random sampling provides better statistical accuracy than deterministic sampling. Deterministic sampling selects every nth packet and may miss patterns. Random sampling selects packets with probability based on sampling rate.

Router CPU utilization must be monitored. If sampling still causes high CPU, increase the sampling ratio (reduce sampling). When CPU is acceptable, decrease the ratio (increase sampling) to improve accuracy. Find the balance through testing.

---

## How Trisul handles sampling accuracy

Trisul receives sampled NetFlow data and scales byte and packet counts by the inverse of the sampling rate. This provides accurate bandwidth estimates even when only a fraction of packets are sampled. Trisul can be configured with the sampling rate to apply correct scaling. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is NetFlow sampling?](/glossary/netflow-sampling)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is traffic estimation?](/glossary/traffic-estimation)
- [What is bandwidth monitoring?](/glossary/bandwidth-monitoring)
- [What is sFlow?](/glossary/sflow)

---

## Frequently asked questions

### What is sampling accuracy?

Sampling accuracy measures how closely sampled flow data represents actual traffic. It determines the reliability of bandwidth estimates and traffic analysis when using flow sampling instead of full flow export. A sampling rate of 1 in 1000 means one packet out of every 1000 is selected.

### How does sampling rate affect accuracy?

Sampling rate directly affects accuracy. A 1 in 1000 sampling rate means estimates have approximately 0.1% accuracy. For large flows, sampled data provides good estimates. For small flows, some may be missed entirely. Total byte counts are scaled up by the inverse of the sampling rate.

### How is sampling accuracy calculated?

Sampling accuracy is calculated as the inverse of the sampling rate. A 1 in 100 sampling rate provides 1% accuracy. A 1 in 1000 sampling rate provides 0.1% accuracy. Statistical confidence intervals account for variance in sampling.

### When is sampling acceptable?

Sampling is acceptable for bandwidth estimation and trend analysis at high speeds where full flow export would overload routers. Sampling is not acceptable when exact packet-level accuracy is required for forensic investigation or billing.