---
title: What is sFlow?
description: sFlow is a network monitoring protocol that exports sampled packet data and interface counters to a collector. It provides bandwidth monitoring and traffic analysis through packet sampling instead of flow recording.
sidebar_label: sFlow
sidebar_position: 101
slug: /glossary/sflow
keywords:
  - sFlow
  - sFlow protocol
  - packet sampling
  - network monitoring
  - flow monitoring
  - traffic monitoring
  - sampled headers
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is sFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "sFlow is a network monitoring protocol that exports sampled packet data and interface counters to a collector. It provides bandwidth monitoring and traffic analysis through packet sampling instead of flow recording. sFlow usesDatagrams to export sampled headers and counter data."
      }
    },
    {
      "@type": "Question",
      "name": "How does sFlow work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "sFlow agents on switches and routers sample packets at configured rates. Sampled packet headers and interface counters are packaged into sFlow datagrams and sent to collectors via UDP. Collectors aggregate samples to estimate traffic volumes and patterns."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between sFlow and NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow exports flow records summarizing conversations. sFlow exports sampled packet headers. NetFlow tracks all flows with optional sampling. sFlow always uses packet sampling. sFlow provides better scalability at high speeds but less accurate per-flow data."
      }
    },
    {
      "@type": "Question",
      "name": "When is sFlow used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "sFlow is used at high speeds where NetFlow export would overload devices. It is used for bandwidth monitoring, DDoS detection, and traffic analysis. sFlow is common in data centers and high-speed networks requiring scalable monitoring."
      }
    }
  ]
};

# What is sFlow?

sFlow is a network monitoring protocol that exports sampled packet data and interface counters to a collector. It provides bandwidth monitoring and traffic analysis through packet sampling instead of flow recording. sFlow uses datagrams to export sampled headers and counter data.

---

## How sFlow works

sFlow agents on switches and routers sample packets at configured rates. Sampling can be 1 in N packets or based on byte count. Sampled packet headers (first N bytes) and interface counters are packaged into sFlow datagrams and sent to collectors via UDP port 6343.

Collectors aggregate samples to estimate traffic volumes. Statistical methods extrapolate total traffic from samples. Interface counters provide utilization data complementing packet samples.

---

## sFlow in network operations

In the NOC, use sFlow for bandwidth monitoring at high speeds. sFlow scales better than NetFlow at gigabit speeds because packet sampling generates less data than flow export. Security teams use sFlow for DDoS detection through traffic volume analysis.

Capacity planning uses sFlow data for traffic trends. Even with sampling, traffic patterns are visible. sFlow provides sufficient accuracy for bandwidth estimation and top talkers identification.

---

## sFlow vs NetFlow comparison

| Aspect | sFlow | NetFlow |
|---|---|---|
| Data type | Sampled packet headers | Flow records |
| Sampling | Always samples | Optional sampling |
| Scalability | Better at high speeds | Good at moderate speeds |
| Per-flow accuracy | Lower | Higher |
| Bandwidth overhead | Lower | Higher |
| Use case | High-speed monitoring | Detailed flow analysis |

---

## What makes sFlow work in practice

Sampling rate configuration determines accuracy. Higher sampling rates (lower ratios) provide better accuracy but more overhead. Lower sampling rates (higher ratios) reduce overhead but miss small flows. Balance sampling rate against accuracy requirements.

Collector capacity must match sample volume. sFlow agents send samples continuously. If sample rate exceeds collector capacity, data is dropped. Monitor collector CPU and network bandwidth.

---

## How Trisul handles sFlow

Trisul collects sFlow data from switches and routers natively. sFlow datagrams are decoded and aggregated for analysis. Trisul provides real-time traffic graphs, historical reports, and anomaly detection from sFlow data. Flow monitoring tracks millions of flows enabling long-term retention. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is NetFlow?](/glossary/netflow)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is packet sampling?](/glossary/packet-sampling)
- [What is bandwidth monitoring?](/glossary/bandwidth-monitoring)
- [What is traffic analysis?](/glossary/traffic-analysis)

---

## Frequently asked questions

### What is sFlow?

sFlow is a network monitoring protocol that exports sampled packet data and interface counters to a collector. It provides bandwidth monitoring and traffic analysis through packet sampling instead of flow recording. sFlow uses datagrams to export sampled headers and counter data.

### How does sFlow work?

sFlow agents on switches and routers sample packets at configured rates. Sampled packet headers and interface counters are packaged into sFlow datagrams and sent to collectors via UDP. Collectors aggregate samples to estimate traffic volumes and patterns.

### What is the difference between sFlow and NetFlow?

NetFlow exports flow records summarizing conversations. sFlow exports sampled packet headers. NetFlow tracks all flows with optional sampling. sFlow always uses packet sampling. sFlow provides better scalability at high speeds but less accurate per-flow data.

### When is sFlow used?

sFlow is used at high speeds where NetFlow export would overload devices. It is used for bandwidth monitoring, DDoS detection, and traffic analysis. sFlow is common in data centers and high-speed networks requiring scalable monitoring.