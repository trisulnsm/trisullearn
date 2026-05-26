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

**NetFlow sampling** selects a **subset of packets** for flow export instead of exporting every packet. It **reduces CPU and bandwidth overhead** on routers while still enabling **accurate traffic estimation and trend analysis** at high speeds. A **sampling rate of 1 in 1000** means **one packet out of every 1000** is used to build flow records; the rest are ignored.

---

## How NetFlow sampling works

Two common sampling methods:

- **Deterministic**: every *n*‑th packet is selected (e.g., every 1000th).  
- **Random**: each packet is sampled with a fixed probability.

The exporter scales **byte and packet counts** by the **inverse of the sampling rate**, so that:

- If a sampled flow shows 1000 bytes with a **1:1000** rate, the exporter reports **1,000,000 bytes** as the estimated total.  
- Collectors and analytics tools apply the same scaling to derive **bandwidth and volume metrics**.

For large flows, sampled data provides **good estimates**; small or short flows may be **missed entirely**.

---

## NetFlow sampling in network operations

Sampling is used on **high‑speed links** (e.g., 10 Gbps+), where **full‑flow export** would overload CPU or saturate export paths. Operators:

- Enable sampling on **core and aggregation links**, keeping **full export** on lower‑speed, critical segments.  
- Tune the **sampling rate** (e.g., 1:100 vs 1:10,000) based on **available CPU and required accuracy**.

Security teams can still detect **large malicious flows**, but **low‑volume attacks may evade detection**.

---

## Sampling methods comparison

| Method | Description | Accuracy | Overhead |
|--------|-------------|----------|----------|
| Deterministic | Every *n*‑th packet is selected | Consistent, misses patterns | Predictable |
| Random | Each packet has a fixed probability | Better statistical accuracy | Variable |
| Full NetFlow | All packets participate in flows | 100% accurate | Very high |

---

## What makes NetFlow sampling work in practice

- **Sampling rate** must balance **accuracy** and **device load**; too low a rate misses small flows, too high a rate overloads the router.  
- **Clock synchronization and steady sampling intervals** prevent skewed traffic estimates.  
- Analytics tools must **know the sampling rate** to correctly scale and interpret metrics.

---

## How Trisul handles NetFlow sampling

Trisul receives **sampled NetFlow data** and **applies the inverse of the sampling rate** to scale byte and packet counts. This preserves **bandwidth‑level accuracy** even when only a fraction of packets are exported. Operators can **configure the sampling ratio** per probe or interface so that Trisul’s scaling remains correct.

For configuration examples, see Trisul documentation at [https://docs.trisul.org/docs/ug/flow/](https://docs.trisul.org/docs/ug/flow/).

---

## Related terms

- [What is NetFlow?](/docs/glossary/netflow)  
- [What is sFlow?](/docs/glossary/sflow)  
- [What is flow monitoring?](/docs/glossary/flow-monitoring)  
- [What is traffic estimation?](/docs/glossary/traffic-estimation)  

---

## Frequently asked questions

### What is NetFlow sampling?

NetFlow sampling selects a subset of packets for flow export instead of exporting all packets. Sampling reduces CPU and bandwidth overhead on routers while maintaining accuracy for traffic estimation. A sampling rate of 1 in 1000 means one packet out of every 1000 is selected for flow export.

### Why use NetFlow sampling?

NetFlow sampling is used at high speeds where full flow export would overload the router CPU or consume too much network bandwidth. Sampling enables flow monitoring at gigabit speeds by reducing the number of flows exported. Trade‑off is reduced accuracy but acceptable for bandwidth estimation and trend analysis.

### How does sampling affect accuracy?

Sampling reduces accuracy proportionally to the sampling rate. A 1 in 1000 sampling rate means estimates have approximately 0.1 percent accuracy. For large flows, sampled data provides good estimates. For small flows, some may be missed entirely. Total byte counts are scaled up by the inverse of the sampling rate.

### What is the difference between sampling and full NetFlow?

Full NetFlow exports all flows without sampling, providing complete accuracy but requiring more CPU and bandwidth. Sampling exports a subset of flows, reducing overhead but sacrificing some accuracy. Full NetFlow is best for low‑speed links, sampling is best for high‑speed links where full export is impractical.