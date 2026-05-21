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

An observation point is the location in a network where packets are observed for flow monitoring or packet capture. It is the interface or device where traffic is monitored and flow records are generated. In IPFIX, the observation point is defined as the point in the network where traffic is observed.

---

## How observation point works

Observation points are placed at strategic network locations. Flow exporters on routers and switches observe passing packets at the observation point. Packets are grouped into flows and flow records are generated. Flow records include observation point identifier so collectors know where traffic was observed.

Packet capture at observation points records all packets passing through. TAPs or SPAN ports provide observation points for packet capture. TAPs provide lossless observation while SPAN ports may drop packets under load.

---

## Observation point in network operations

In network design, place observation points at critical locations including data center edge, internet gateway, WAN links, and server farm entry points. Strategic placement ensures visibility into all traffic that needs monitoring. Missing observation points create visibility gaps.

Flow exporters must be enabled at each observation point. Without export, no flow data is collected. Monitor flow exporter status to ensure observation points are active. When routers are replaced or interfaces change, reconfigure observation points.

---

## Observation point types

| Type | Description | Pros | Cons |
|---|---|---|---|
| Router interface | Built-in flow exporter | No extra hardware | May not capture all traffic |
| Network TAP | Passive optical tap | Lossless capture | Requires per-link hardware |
| SPAN port | Switch port mirroring | No extra hardware | May drop packets under load |

---

## What makes observation point work in practice

Complete coverage requires observation points at all critical locations. Map traffic flows and place observation points where traffic passes. Missing observation points create blind spots where threats or problems go undetected.

Lossless observation requires passive TAPs. SPAN ports drop packets under load without indicating loss. For forensic investigation, passive TAPs ensure complete packet capture. For flow monitoring, SPAN ports are acceptable since flow data is less sensitive to packet loss.

---

## How Trisul handles observation point

Trisul collects flow data from multiple observation points through NetFlow, J-Flow, sFlow, and IPFIX exporters. Flow records include observation domain identifiers enabling multi-point traffic analysis. Trisul correlates data from multiple observation points to provide complete visibility. Passive TAPs or SPAN ports provide observation points for packet capture. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is packet capture?](/glossary/packet-capture)
- [What is network TAP?](/glossary/network-tap)
- [What is SPAN port?](/glossary/span-port)
- [What is IPFIX?](/glossary/ipfix)

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