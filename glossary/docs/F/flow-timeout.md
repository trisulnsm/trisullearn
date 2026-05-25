---
title: What is flow timeout?
description: Flow timeout is the mechanism by which a flow exporter determines when a flow record should be expired and exported, using inactive timers for idle traffic and active timers for long‑running communications.
sidebar_label: Flow timeout
sidebar_position: 3
slug: /glossary/flow-timeout
keywords:
  - flow timeout
  - active timeout
  - inactive timeout
  - netflow timeout
  - flow expiration
  - flow cache timeout
  - telemetry timeout
  - flow export timing
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What active and inactive timeout values are commonly used for NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many operational deployments use active timeouts between 30 and 60 seconds and inactive timeouts between 15 and 30 seconds, but optimal values depend on exporter capacity, collector scalability, traffic patterns, and operational goals. Shorter active timeouts improve visibility granularity while increasing exporter and collector load."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow timeout affect traffic reporting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow timeout settings influence how traffic appears in historical analytics and dashboards. Long active timeouts may delay visibility into ongoing communications and cause large traffic bursts to appear concentrated at export time, while shorter active timeouts provide more granular trending visibility at the cost of higher telemetry volume."
      }
    },
    {
      "@type": "Question",
      "name": "Does flow timeout affect security investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Timeout settings influence how quickly telemetry becomes visible to analysts and how accurately long-duration or short-lived communications appear in historical records. Shorter active timeouts improve visibility into persistent sessions, while shorter inactive timeouts may improve responsiveness for short-lived connection analysis."
      }
    },
    {
      "@type": "Question",
      "name": "Do all exporters use the same timeout behavior?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Timeout handling varies significantly across vendors, telemetry protocols, hardware platforms, and software implementations. Some exporters support protocol-aware expiration, adaptive timeout behavior, or configurable export logic, while others implement simpler cache-expiration models."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul handle flow timeout workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When Trisul reconstructs flows from packet observations, it applies configurable flow-expiration logic to determine when flows are considered complete. For exported NetFlow or IPFIX telemetry, timeout behavior is primarily controlled by the upstream exporter configuration."
      }
    }
  ]
};

# What is flow timeout?

**Flow timeout** is the mechanism by which a flow exporter determines when a flow record should be expired and exported, using **inactive timers** for idle or finished traffic and **active timers** for long‑running communications. Because many sessions neither end cleanly nor complete quickly—such as streaming, tunnel, or continuously active flows—exporters rely on timeout logic to flush flow‑cache entries and send telemetry records to collectors. This choice of timeout values directly affects **telemetry granularity**, **historical visibility**, **reporting accuracy**, **collector load**, and **operational investigation latency** in environments using **NetFlow, IPFIX**, or **packet‑derived** telemetry.

---

## How flow timeout works

Flow exporters maintain **flow records in memory** as traffic is observed and grouped by the 5‑tuple. To decide when a flow should be closed and exported, they apply two main timeouts:

- **Inactive timeout**: A flow is expired if no new packets arrive for the configured idle period. This clears finished or idle sessions (e.g., short‑lived connections) from the cache.  
- **Active timeout**: A long‑running flow is periodically exported even though traffic is still flowing, so that ongoing sessions appear in dashboards and historical views at reasonably granular intervals.

Typical operational ranges are **15–30 seconds** for inactive timeouts and **30–60 seconds** for active timeouts, but the exact values vary by platform, telemetry protocol, and operational goals. Some exporters also add **protocol‑aware expiration** (e.g., honoring TCP FIN/RST) or **adaptive behavior** to tune how aggressively flows are expired.

---

## Flow timeout in network operations

In **NOC** environments, timeout tuning shapes how traffic appears in **trending dashboards**, **capacity‑planning reports**, and **interface‑utilization graphs**. Shorter active timeouts increase **granularity and freshness** but also raise **export volume, exporter CPU, and collector load**; longer timeouts reduce overhead at the cost of **delayed visibility** and **jagged time‑series**. In **SOC** workflows, timeouts control how quickly malware or beaconing sessions show up in telemetry: **shorter active and inactive timeouts** improve detection and scope analysis, while **longer timeouts** can hide low‑volume or intermittent activity and complicate timeline reconstruction.

---

## Active timeout vs inactive timeout

| Dimension | Active timeout | Inactive timeout |
|----------|----------------|------------------|
| Trigger condition | Flow remains active beyond interval | No packets seen for interval |
| Primary purpose | Periodically export long‑running flows | Expire idle or completed flows |
| If too high | Reduced reporting granularity | Delayed export of idle traffic |
| If too low | Higher telemetry volume and load | Increased cache churn and export activity |

In practice, both timeouts operate together: active timeouts keep long sessions visible in a timely way, and inactive timeouts ensure short‑lived or abandoned flows are not stuck in the cache forever.

---

## Flow timeout and telemetry quality

Mismatched or poorly tuned timeouts across exporters can distort **cross‑device trending**, complicate **flow stitching and deduplication**, and skew **traffic‑accounting and anomaly‑detection** workflows. Large environments often standardize on **consistent timeout policies** to improve **correlation quality**, **timeline fidelity**, and **investigation accuracy**. Operators should also consider **sampling**, **multi‑hop visibility**, and **collector scaling** when choosing timeout values, since finer granularity increases telemetry volume and storage cost.

---

## Operational considerations

Flow‑timeout workflows must balance **visibility**, **performance**, and **storage**. Shorter timeouts improve **granularity and responsiveness** but push **exporter memory**, **CPU**, and **export‑bandwidth** limits, especially in high‑flow‑rate environments or at chokepoints. Long timeouts reduce telemetry overhead but may **delay investigations**, **blur time‑series**, and **hide transient behavior**. Organizations typically run **tests** on representative traffic mixes and adjust timeouts iteratively, guided by exporter health metrics, collector‑ingestion rates, and user‑reported investigation latency. Documentation should explicitly record chosen timeout values so that teams understand how “session‑lifetime” appears in their analytics.

---

## How Trisul handles flow timeout

Trisul supports **configurable flow‑expiration workflows** for telemetry generated from **packet‑based analysis**, applying **inactivity‑based expiration** to decide when flows are considered complete and written to the flow store. This gives operators fine‑grained control over how long-lived or intermittent sessions appear in historical views. For **exported NetFlow or IPFIX telemetry**, however, flow‑timeout behavior is controlled by the **upstream exporters**, not by Trisul; the platform ingests and indexes whatever records arrive according to those timeout settings. Trisul then exposes flow data through **historical traffic analysis**, **Explore Flows**, **Flow Taggers**, and **operational dashboards**, letting operators correlate session timing and duration with other context, regardless of whether the flows come from packet‑derived or device‑exported telemetry.

---

## Related terms

- Flow timeout  
- Flow  
- NetFlow  
- IPFIX  
- Flow sampling  
- Flow tagger  
- Flow tracker  
- Flow stitching  
- Traffic analysis  

---

## Frequently asked questions

### What active and inactive timeout values are commonly used for NetFlow?

Many operational deployments use active timeouts between 30 and 60 seconds and inactive timeouts between 15 and 30 seconds, but optimal values depend on exporter capacity, collector scalability, traffic patterns, and operational goals. Shorter active timeouts improve visibility granularity while increasing exporter and collector load.

### How does flow timeout affect traffic reporting?

Flow timeout settings influence how traffic appears in historical analytics and dashboards. Long active timeouts may delay visibility into ongoing communications and cause large traffic bursts to appear concentrated at export time, while shorter active timeouts provide more granular trending visibility at the cost of higher telemetry volume.

### Does flow timeout affect security investigations?

Yes. Timeout settings influence how quickly telemetry becomes visible to analysts and how accurately long‑duration or short‑lived communications appear in historical records. Shorter active timeouts improve visibility into persistent sessions, while shorter inactive timeouts may improve responsiveness for short‑lived connection analysis.

### Do all exporters use the same timeout behavior?

No. Timeout handling varies significantly across vendors, telemetry protocols, hardware platforms, and software implementations. Some exporters support protocol‑aware expiration, adaptive timeout behavior, or configurable export logic, while others implement simpler cache‑expiration models.

### How does Trisul handle flow timeout workflows?

When Trisul reconstructs flows from packet observations, it applies configurable flow‑expiration logic to determine when flows are considered complete. For exported NetFlow or IPFIX telemetry, timeout behavior is primarily controlled by the upstream exporter configuration.