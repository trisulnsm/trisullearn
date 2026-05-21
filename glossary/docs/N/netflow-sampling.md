---
title: What is NetFlow sampling?
description: NetFlow sampling selects a subset of packets for flow export instead of exporting all packets. It reduces CPU and bandwidth overhead while maintaining accuracy for traffic estimation, enabling flow monitoring at high speeds.
sidebar_label: NetFlow sampling
sidebar_position: 68
slug: /glossary/netflow-sampling
keywords:
  - NetFlow sampling
  - flow sampling
  - packet sampling
  - sFlow sampling
  - sampling rate
  - traffic estimation
  - document sampling
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NetFlow sampling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow sampling selects a subset of packets for flow export instead of exporting all packets. Sampling reduces CPU and bandwidth overhead on routers while maintaining accuracy for traffic estimation. A sampling rate of 1 in 1000 means one packet out of every 1000 is selected for flow export."
      }
    },
    {
      "@type": "Question",
      "name": "Why use NetFlow sampling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow sampling is used at high speeds where full flow export would overload the router CPU or consume too much network bandwidth. Sampling enables flow monitoring at gigabit speeds by reducing the number of flows exported. Trade-off is reduced accuracy but acceptable for bandwidth estimation and trend analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How does sampling affect accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling reduces accuracy proportionally to the sampling rate. A 1 in 1000 sampling rate means estimates have approximately 0.1 percent accuracy. For large flows, sampled data provides good estimates. For small flows, some may be missed entirely. Total byte counts are scaled up by the inverse of the sampling rate."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between sampling and full NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full NetFlow exports all flows without sampling, providing complete accuracy but requiring more CPU and bandwidth. Sampling exports a subset of flows, reducing overhead but sacrificing some accuracy. Full NetFlow is best for low-speed links, sampling is best for high-speed links where full export is impractical."
      }
    }
  ]
};

# What is NetFlow sampling?

NetFlow sampling selects a subset of packets for flow export instead of exporting all packets. It reduces CPU and bandwidth overhead while maintaining accuracy for traffic estimation, enabling flow monitoring at high speeds. A sampling rate of 1 in 1000 means one packet out of every 1000 is selected for flow export.

---

## How NetFlow sampling works

NetFlow sampling uses either deterministic or random sampling. Deterministic sampling selects every nth packet. Random sampling selects packets with a probability based on the sampling rate. The flow exporter scales byte and packet counts by the inverse of the sampling rate to estimate total traffic.

For example, with 1 in 1000 sampling, if a sampled flow shows 1000 bytes, the exporter reports 1000000 bytes as the estimated total. This scaling enables accurate bandwidth estimation even though only a fraction of packets are sampled.

---

## NetFlow sampling in network operations

In the NOC, use sampling on high-speed links where full NetFlow export would overload the router. Monitoring shows bandwidth utilization estimates with acceptable accuracy. Security teams use sampled flows for anomaly detection and top talkers identification.

Configure sampling rate based on link speed and router capacity. Higher sampling rates (lower ratio) provide better accuracy but more overhead. Lower sampling rates (higher ratio) reduce overhead but miss small flows.

---

## Sampling methods comparison

| Method | Description | Accuracy | Overhead |
|---|---|---|---|
| Deterministic | Every nth packet selected | Consistent but misses patterns | Predictable |
| Random | Packet selected with probability | Better statistical accuracy | Variable |
| Full NetFlow | All packets exported | 100% accurate | Very high |

---

## What makes NetFlow sampling work in practice

Sampling rate must balance accuracy against overhead. Too high a rate misses important small flows. Too low a rate overloads the router. Typical sampling rates range from 1 in 100 to 1 in 10000 depending on link speed.

Router CPU utilization must be monitored when enabling sampling. If sampling still causes high CPU, increase the sampling ratio. When CPU is acceptable, decrease the ratio to improve accuracy. Find the sweet spot through testing.

---

## How Trisul handles NetFlow sampling

Trisul receives sampled NetFlow data and scales byte and packet counts by the inverse of the sampling rate. This provides accurate bandwidth estimates even when only a fraction of packets are sampled. Trisul can be configured with the sampling rate to apply correct scaling. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is NetFlow?](/glossary/netflow)
- [What is sFlow?](/glossary/sflow)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is bandwidth estimation?](/glossary/bandwidth-estimation)
- [What is traffic estimation?](/glossary/traffic-estimation)

---

## Frequently asked questions

### What is NetFlow sampling?

NetFlow sampling selects a subset of packets for flow export instead of exporting all packets. Sampling reduces CPU and bandwidth overhead on routers while maintaining accuracy for traffic estimation. A sampling rate of 1 in 1000 means one packet out of every 1000 is selected for flow export.

### Why use NetFlow sampling?

NetFlow sampling is used at high speeds where full flow export would overload the router CPU or consume too much network bandwidth. Sampling enables flow monitoring at gigabit speeds by reducing the number of flows exported. Trade-off is reduced accuracy but acceptable for bandwidth estimation and trend analysis.

### How does sampling affect accuracy?

Sampling reduces accuracy proportionally to the sampling rate. A 1 in 1000 sampling rate means estimates have approximately 0.1 percent accuracy. For large flows, sampled data provides good estimates. For small flows, some may be missed entirely. Total byte counts are scaled up by the inverse of the sampling rate.

### What is the difference between sampling and full NetFlow?

Full NetFlow exports all flows without sampling, providing complete accuracy but requiring more CPU and bandwidth. Sampling exports a subset of flows, reducing overhead but sacrificing some accuracy. Full NetFlow is best for low-speed links, sampling is best for high-speed links where full export is impractical.