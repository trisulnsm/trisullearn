---
title: What is active flow timeout?
description: Active flow timeout is the maximum duration a flow remains in the exporter's cache before being exported to the collector, even if the flow is still active and transmitting data.
sidebar_label: Active flow timeout
sidebar_position: 43
slug: /glossary/active-flow-timeout
keywords:
  - active flow timeout
  - flow timeout
  - netflow timeout
  - flow cache timeout
  - active timeout
  - flow export timeout
  - flow cache
  - flow monitoring
  - anomaly detection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Active Flow Timeout?",
  "description": "Active flow timeout is the maximum duration a flow remains in the exporter's cache before being exported to the collector, even if the flow is still transmitting data.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Active Flow Timeout",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is active flow timeout?

Active flow timeout is the maximum duration a flow remains in the exporter's cache before being exported to the collector, even if the flow is still transmitting data. It prevents long-lived flows from staying in cache too long.

---

## How it works

When a flow reaches the active timeout duration, the exporter packages the flow data and sends it to the collector. The flow may continue, and a new record is exported at the next timeout interval. Inactive timeout is separate: flows with no packets for the inactive timeout duration are exported immediately.

The export process creates flow records with start time, end time, and byte or packet counters that are used for time-series analysis.

---

## In network operations

- **NOC:** Set active timeout to 1 minute for collectors that display data in 1-minute increments.
- **Security:** Use shorter active timeouts for faster anomaly detection.
- **Capacity Planning:** Use standard active timeout values to avoid traffic report spikes and enable accurate trending.

Shorter active timeouts can improve trending granularity in flow analytics by spreading long-lived traffic across more time buckets.

---

## Active vs inactive timeout

| Dimension | Active timeout | Inactive timeout |
|---|---|---|
| When to export | Flow duration reached | No packets received |
| Recommended value | Depends on collector and reporting interval | Short enough to export idle flows promptly |
| Typical default | 30 minutes on many exporters | 15 seconds on many exporters |
| Purpose | Prevent long-lived flow spikes | Export finished flows quickly |
| Trisul impact | More granular trending data | Faster visibility into completed flows |

## Timeout values and their effects

| Active Timeout | Use Case | Trisul Visibility |
|---|---|---|
| 1 minute (60s) | Accurate trending, collectors expecting 60-second intervals | Minute-by-minute traffic breakdown |
| 5 minutes (300s) | Faster anomaly detection, security monitoring | 5-minute granularity |
| 30 minutes (1800s) | Common default on many routers | Less granular reporting, possible spikes |

---

## How Trisul handles active timeout

Trisul can ingest flow data exported with different active timeout values from common flow exporters. For glossary accuracy, avoid claiming a specific internal timeout mechanism unless it is documented in Trisul product materials.

- **Multi-protocol compatibility**: Trisul works with standard flow-export formats such as NetFlow, J-Flow, sFlow, and IPFIX.
- **Trending**: Shorter active timeouts generally improve time-based reporting granularity by reducing the size of each exported flow fragment.
- **Anomaly detection**: More frequent exports can reduce visibility lag in flow analytics.
- **Historical analysis**: Trisul can aggregate exported flow records over time for capacity planning and baseline analysis.

---

## Related terms

- [Flow monitoring](/glossary/flow-monitoring)
- [Flow exporter](/glossary/flow-exporter)
- [NetFlow](/glossary/netflow)
- [J-Flow](/glossary/jflow)
- [sFlow](/glossary/sflow)
- [IPFIX](/glossary/ipfix)
- [Flow cache](/glossary/flow-cache)
- [Baseline traffic analytics](/glossary/baseline-traffic-analytics)
- [Anomaly detection](/glossary/anomaly-detection)
- [Flow record](/glossary/flow-record)

---

## Frequently asked questions

### What is the difference between active timeout and inactive timeout?

Active timeout is the maximum duration a flow remains in cache before export, even if it is still transmitting data. Inactive timeout is the duration of inactivity after which a flow is exported. A shorter active timeout can improve trending granularity, while a shorter inactive timeout exports finished flows more quickly.

### Why set active timeout to 1 minute?

A 1-minute active timeout can make reporting more granular by breaking long-lived flows into smaller time slices. This helps avoid sudden spikes in time-series views when a long flow is exported all at once.

### What is the default active timeout value?

The default active timeout varies by exporter and device vendor. Many exporters use 30 minutes, but the actual value should be checked on the device or flow source.

### How does active timeout affect flow data quality?

Longer active timeouts can make reports look spiky because more traffic is exported in fewer records. Shorter timeouts usually improve time-series granularity, but they also increase export frequency.

### What active timeout should I use with Trisul?

A shorter timeout is generally better for minute-level reporting, while a longer timeout may be acceptable for broad capacity planning. The best value depends on the exporter, reporting interval, and operational goal.

### Does Trisul have its own flow timeout settings?

Trisul receives flow records from exporters and analyzes the records it is given. Any timeout behavior is determined by the exporter configuration, not by the glossary term itself.