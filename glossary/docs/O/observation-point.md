---
title: What is observation point?
description: An observation point is the location in a network where packets are observed for flow monitoring or packet capture. It is the interface or device where traffic is monitored and flow records are generated.
sidebar_label: Observation point
sidebar_position: 76
slug: /glossary/observation-point
keywords:
  - observation point
  - monitoring point
  - capture point
  - traffic monitoring
  - flow monitoring
  - network visibility
  - packet capture point
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an observation point?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An observation point is the location in a network where packets are observed for flow monitoring or packet capture. It is the interface or device where traffic is monitored and flow records are generated. In IPFIX, the observation point is defined as the point in the network where traffic is observed."
      }
    },
    {
      "@type": "Question",
      "name": "Where are observation points placed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Observation points are placed at critical network locations including data center edge, internet gateway, WAN links, server farm entry points, and branch office connections. Strategic placement ensures visibility into all traffic that needs monitoring. Missing observation points create visibility gaps."
      }
    },
    {
      "@type": "Question",
      "name": "How does observation point affect flow data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow data is scoped to the observation point where it was collected. Traffic observed at one observation point may not be visible at another. Flow records include observation point identifier so collectors know where traffic was observed. This enables multi-point traffic analysis and correlation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between observation point and observation domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Observation point is the specific location where traffic is observed such as an interface. Observation domain is a collection of observation points managed together. One observation domain can include multiple observation points on the same router or across multiple routers."
      }
    }
  ]
};

# What is observation point?

An **observation point** is the **location in a network where packets are observed** for **flow monitoring or packet capture**. It is the **interface or device** where traffic is monitored and **flow records are generated**. In IPFIX, the observation point is defined as the point in the network where traffic is observed.

---

## How an observation point works

Observation points are placed at **strategic network locations**:

- **Flow exporters** on routers and switches observe passing packets at the observation point and **group them into flows**, from which **flow records** are created.  
- Flow records include an **observation point identifier** so flow collectors know exactly where traffic was captured.  

For **packet capture**, observation points are often implemented using **network TAPs or SPAN ports**:

- **TAPs** provide **lossless, passive** observation of all packets on a link.  
- **SPAN ports** mirror traffic from a switch interface; they are easier to deploy but **may drop packets under load**.  

In both cases, the observation point defines **where in the network** telemetry is collected.

---

## Observation point in network operations

In network design, observation points are placed at **critical locations** such as:

- Data center edge.  
- Internet gateway.  
- WAN links.  
- Server farm entry points.  
- Branch office connections.  

Strategic placement ensures **end‑to‑end visibility** into all traffic that needs monitoring; **missing observation points** create **visibility gaps**.

In operations you must also:

- **Enable flow exporters** at each observation point; without export, no flow data is generated.  
- **Monitor exporter status** and **reconfigure** when routers are replaced or interfaces change, to keep all observation points active.

---

## Observation point types

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Router interface | Built‑in flow exporter on the interface | No extra hardware; easy to deploy | May not see all traffic (e.g., internal or bypass paths) |
| Network TAP | Passive optical/electrical tap on the link | Lossless capture; no impact on traffic | Requires per‑link hardware deployment |
| SPAN port | Switch port mirroring of traffic | No extra hardware; simple to configure | May drop packets under load; no loss notification |

Each type has a trade‑off between **coverage, loss tolerance, and deployment cost**.

---

## What makes an observation point work in practice

Observation points work effectively when:

- **Coverage is complete**: map traffic flows and place observation points at **all critical chokepoints** to avoid **blind spots** where threats or performance problems go undetected.  
- **Lossless capture is matched to the use case**:  
  - Use **passive TAPs** when **forensic‑grade, full‑packet capture** is required.  
  - Use **SPAN ports or router‑level exporters** for flow‑based monitoring where **small packet loss is acceptable**.  

Without good placement and appropriate hardware, observation points become **partial‑view sensors** rather than true visibility anchors.

---

## How Trisul handles observation point

Trisul:

- **Collects flow data** from multiple observation points using **NetFlow, J‑Flow, sFlow, and IPFIX exporters**.  
- Uses **observation domain and observation point identifiers** in flow records to enable **multi‑point traffic analysis and correlation**.  
- **Correlates data from multiple observation points** to give a unified view of traffic across the network.  

Passive TAPs or SPAN ports at these points feed **packet‑level streams** into Trisul for **deep packet‑level inspection** alongside flow‑level analysis.

For configuration details, see Trisul documentation at [https://docs.trisul.org/docs/ug/flow/](https://docs.trisul.org/docs/ug/flow/).

---

## Related terms

- [What is flow monitoring?](/docs/glossary/flow-monitoring)  
- [What is packet capture?](/docs/glossary/packet-capture)  
- [What is network TAP?](/docs/glossary/network-tap)  
- [What is SPAN port?](/docs/glossary/span-port)  
- [What is IPFIX?](/docs/glossary/ipfix)  

---

## Frequently asked questions

### What is an observation point?

An observation point is the location in a network where packets are observed for flow monitoring or packet capture. It is the interface or device where traffic is monitored and flow records are generated. In IPFIX, the observation point is defined as the point in the network where traffic is observed.

### Where are observation points placed?

Observation points are placed at critical network locations including data center edge, internet gateway, WAN links, server farm entry points, and branch office connections. Strategic placement ensures visibility into all traffic that needs monitoring. Missing observation points create visibility gaps.

### How does observation point affect flow data?

Flow data is scoped to the observation point where it was collected. Traffic observed at one observation point may not be visible at another. Flow records include observation point identifier so collectors know where traffic was observed. This enables multi-point traffic analysis and correlation.

### What is the difference between observation point and observation domain?

Observation point is the specific location where traffic is observed such as an interface. Observation domain is a collection of observation points managed together. One observation domain can include multiple observation points on the same router or across multiple routers.