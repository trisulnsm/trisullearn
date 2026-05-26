---
title: What is link load?
description: Link load is the amount of traffic carried by a network link relative to its available capacity. It is a key measure of how heavily a link is being used.
sidebar_label: Link load
sidebar_position: 194
slug: /glossary/link-load
keywords:
  - link load
  - interface load
  - utilization
  - bandwidth usage
  - traffic load
  - capacity monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is link load?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link load is the amount of traffic carried by a network link relative to its available capacity. It is a key measure of how heavily a link is being used."
      }
    },
    {
      "@type": "Question",
      "name": "How is link load measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link load is usually measured by comparing traffic volume against the configured speed of the link. The result is often shown as a percentage or traffic rate."
      }
    },
    {
      "@type": "Question",
      "name": "Why is link load important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link load is important because high load can lead to congestion, queueing, and packet loss. It is also a basic input to capacity planning."
      }
    },
    {
      "@type": "Question",
      "name": "How is link load used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link load is used to identify busy circuits, compare traffic across interfaces, and detect when a link is nearing saturation."
      }
    }
  ]
};

# What is link load?

**Link load** is the **amount of traffic carried by a network link relative to its available capacity**. It is a core metric for understanding how heavily a given circuit or interface is being used and is often expressed either as a **traffic rate (e.g., Mbps, Gbps)** or as a **percentage of the link’s maximum bandwidth**. Because link load directly reflects how close a path is to its throughput limit, it serves as a key input for **capacity planning, congestion detection, and traffic‑engineering decisions**.

---

## How link load works

Link load is calculated by **comparing the observed traffic volume on a link with its maximum configured speed**. For example:

- A **1 Gbps Ethernet link** carrying **500 Mbps** of traffic has a link load of roughly **50%**.  
- A **10 Gbps backbone interface** carrying **8 Gbps** of traffic is operating at about **80% load**.  

This comparison can be applied per direction (inbound vs outbound) or as a bidirectional total, depending on the measurement scope. The critical insight is not just the absolute rate, but **how close that rate is to the link’s capacity** and whether it is sustained over time.

---

## Link load in network operations

In **NOC and infrastructure teams**, link load is used to:

- Identify **which circuits or interfaces are busy** and which are underutilized.  
- Detect **links that are approaching or exceeding their capacity**, potentially causing **congestion, queuing, and packet loss**.  
- Support **capacity planning** by showing long‑term load trends and peak utilization windows.  

A **temporary spike** in link load may be acceptable (e.g., backups or large transfers), but **sustained high load**, especially above 70–80% of capacity, often indicates a candidate for **upgrade, traffic‑steering, or policy adjustment**.

---

## Link load vs related measures

| Measure | Meaning |
|--------|---------|
| Link load | Traffic currently carried by the link (rate or percent of capacity) |
| Utilization | Percentage of link capacity being used over a given interval |
| Saturation | Load high enough that the link is consistently congested |
| Throughput | Actual delivered data rate experienced end‑to‑end |

These metrics are closely related but distinct: **link load** is the instant‑on traffic rate, **utilization** is its normalized expression over time, and **saturation** is the operational state where load consistently pushes the link into congestion.

---

## What makes link load useful

Link load is most valuable when viewed as a **trend**, not a single snapshot. Operators gain the most insight by:

- Watching **how load evolves over minutes, hours, and days**.  
- Correlating load with **latency, packet loss, and queueing** to distinguish a merely busy link from a **bottlenecked one**.  
- Comparing **links within the same path or role** (e.g., core vs edge, WAN vs LAN) to spot imbalances.  

When combined with **traffic‑matrix and path‑level analytics**, link load transforms from a simple counter into a powerful signal for **capacity‑planning, traffic‑engineering, and SLA monitoring**.

---

## How Trisul handles link load

Trisul shows **link load** through **interface‑ and circuit‑level views**, aggregating traffic telemetry (e.g., NetFlow, sFlow, IPFIX, or SNMP‑based counters) to expose utilization over time. It enables operators to:

- Track **how busy a circuit is** and whether it is **approaching saturation**.  
- Visualize **load trends** and compare **multiple interfaces or segments** side‑by‑side.  
- Correlate load with **traffic patterns, application behavior, and anomalies** to understand *why* a link is busy.  

This supports **capacity‑planning workflows, congestion detection, and proactive path‑optimization decisions** without requiring per‑link packet capture.

---

## Related terms

- Link load  
- Interface utilization  
- Interface saturation  
- Queueing  
- Packet loss  
- Capacity planning  

---

## Frequently asked questions

### What is link load?

Link load is the amount of traffic carried by a network link relative to its available capacity. It is a key measure of how heavily a link is being used.

### How is link load measured?

Link load is usually measured by comparing traffic volume against the configured speed of the link. The result is often shown as a percentage or traffic rate.

### Why is link load important?

Link load is important because high load can lead to congestion, queueing, and packet loss. It is also a basic input to capacity planning.

### How is link load used in analytics?

Link load is used to identify busy circuits, compare traffic across interfaces, and detect when a link is nearing saturation.