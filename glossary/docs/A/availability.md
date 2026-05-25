---
title: What is availability?
description: Availability is the measure of whether a service, system, or network is accessible and functioning when needed.
sidebar_label: Availability
sidebar_position: 246
slug: /glossary/availability
keywords:
  - availability
  - service availability
  - uptime
  - access
  - reliability
  - system health
  - flow monitoring
  - network monitoring
  - outage detection
  - connectivity
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Availability?",
  "description": "Availability is the measure of whether a service, system, or network is accessible and functioning when needed.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Availability",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is availability?

Availability is the measure of whether a **service**, **system**, or **network** is **accessible** and **functioning when needed**.

---

## How availability works

A system is available when users can reach it and complete the expected action. If the service is down or unreachable, availability drops.

Availability is often tracked as uptime over a period of time. It may also include successful response rates.

Availability calculation:

```math
\text{Availability} =
\frac{\text{Uptime}}
{\text{Uptime} + \text{Downtime}}
\times 100\%
```

Common availability targets:

- **99%**: "Two nines" about 3.65 days downtime per year.
- **99.9%**: "Three nines" about 8.76 hours downtime per year.
- **99.99%**: "Four nines" about 52.6 minutes downtime per year.
- **99.999%**: "Five nines" about 5.26 minutes downtime per year.

---

## Availability in operations

Availability is a basic service goal for nearly every networked system. Teams monitor it closely because outages have immediate impact.

It also forms the basis for reporting and service-level targets. Many dashboards and agreements are built around availability.

Common operational use cases:

- **Service monitoring**: Track whether critical services are reachable 24/7.
- **SLA compliance**: Measure availability against contractual service-level agreements.
- **Outage detection**: Identify when services go down and notify teams immediately.
- **Capacity planning**: Identify links or services approaching capacity limits that could cause availability issues.
- **Trend analysis**: Track availability trends over time to identify recurring issues.

---

## Common availability signals

| Signal | Meaning |
|---|---|
| Uptime | Time service was up |
| Reachability | Whether it can be contacted |
| Success rate | How often requests work |
| Downtime | Time service is unavailable |

---

## Availability vs related metrics

| Metric | What it measures | Relationship to availability |
|---|---|---|
| Uptime | Time service is operational | Direct measure of availability |
| Latency | Response time | Affects user experience, but service may still be available |
| Packet loss | Percentage of lost packets | High loss can make service effectively unavailable |
| Throughput | Data transfer rate | Low throughput may indicate partial availability |
| Error rate | Failed requests | High errors can indicate degraded availability |

---

## What makes availability useful

Availability is useful because it is easy to understand and directly tied to user access. If a service is unavailable, nothing else matters much.

It becomes more useful when paired with latency and error details.

Key characteristics of effective availability monitoring:

- **Real-time detection**: Quickly identify when services go down.
- **Accurate measurement**: Track actual uptime versus downtime precisely.
- **Context-rich alerts**: Include which service, when, and potential cause.
- **Historical tracking**: Maintain records for SLA reporting and trend analysis.
- **Correlation**: Link availability events with network conditions for root cause analysis.

---

## Trisul relevance

Availability is relevant to Trisul Network Analytics as a traffic-observability concept, but the page should avoid claiming native uptime-probe functionality unless it is documented in official Trisul materials.

Trisul is better positioned as providing traffic context around connectivity and service reachability rather than as a dedicated availability-monitoring tool.

---

## Related terms

- [Uptime monitoring](/glossary/uptime-monitoring)
- [Active monitoring](/glossary/active-monitoring)
- [Network access](/glossary/network-access)
- [Network performance](/glossary/network-performance)
- [QoE (Quality of Experience)](/glossary/quality-of-experience)
- [Flow monitoring](/glossary/flow-monitoring)
- [Outage detection](/glossary/outage-detection)
- [Connectivity](/glossary/connectivity)
- [SLA](/glossary/sla)
- [NetFlow](/glossary/netflow)
- [Explore Flows](/glossary/explore-flows)
- [Aggregate Flows](/glossary/aggregate-flows)
- [Top-K analytics](/glossary/top-k-analytics)
- [Rule Builder](/glossary/rule-builder)

---

## Frequently asked questions

### What is availability?

Availability is the measure of whether a service, system, or network is accessible and functioning when needed.

### Why is availability important?

Availability is important because users can only use services that are reachable and working. Without availability, performance and features do not matter.

### How is availability measured?

Availability is measured by uptime, response success, and service reachability over time.

```math
\text{Availability} =
\frac{\text{Uptime}}
{\text{Uptime} + \text{Downtime}}
\times 100\%
```

### What affects availability?

Availability can be affected by outages, congestion, failures, maintenance, and access policy. Network issues, server failures, and application crashes can all impact availability.

### How does Trisul monitor availability?

Trisul should be described here only as providing traffic context that helps operators understand connectivity and reachability changes, not as a dedicated uptime-monitoring system.

### What is the advantage of traffic-based availability analysis over active monitoring?

Traffic-based analysis does not require probes and shows what real traffic is doing on the network.

Active monitoring adds probe traffic and may not reflect actual user experience. Both approaches can complement each other.