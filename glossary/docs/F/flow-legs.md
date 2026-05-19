---
title: What is a flow leg?
description: A flow leg is a single copy of a flow record as seen and exported by one network device. When a flow traverses multiple NetFlow-enabled devices, each device generates its own leg, resulting in multiple records for the same conversation at the collector.
sidebar_label: Flow legs
sidebar_position: 8
slug: /glossary/flow-legs
keywords:
  - flow legs
  - flow duplication
  - netflow legs
  - flow deduplication
  - multi-device flow export
  - flow leg correlation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do flow legs cause over-counting in traffic reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a flow crosses two NetFlow-enabled routers and both export a record to the same collector, the collector sees two legs for the same conversation. Without deduplication, bandwidth reports count those bytes twice. At ISP scale, where flows may traverse multiple aggregation and edge devices all exporting to the same collector, over-counting compounds and produces utilization figures significantly higher than actual link throughput."
      }
    },
    {
      "@type": "Question",
      "name": "Why does Trisul keep flow legs separate by default?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keeping legs separate preserves the per-device and per-interface context that is lost when records are merged. An operator investigating saturation on a specific edge router interface needs to see flows as they appeared on that device, not as a merged record that strips out the source detail. Trisul keeps legs as-is by default so that interface-level drilldown remains accurate, and provides explicit merge options for operators who prefer a deduplicated view."
      }
    },
    {
      "@type": "Question",
      "name": "What is NAT leg correlation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a flow crosses a NAT boundary, the source IP or port visible on the inside of the NAT device differs from what is visible on the outside. This means the two legs of the same conversation have different 5-tuples and cannot be matched by exact tuple comparison. NAT leg correlation applies source port heuristics to detect the translation and join the pre-NAT and post-NAT legs into a single correlated record."
      }
    }
  ]
};

# What is a flow leg?

A flow leg is a single copy of a flow record as observed and exported by one network device. When a flow traverses multiple NetFlow-enabled routers or switches, each device generates its own leg independently. The collector receives all of them. The result is multiple records representing the same conversation, each carrying the perspective of a different device: different ingress and egress interfaces, potentially different timestamps, and the same or similar byte counts. Flow legs are the root cause of flow duplication at the collector.

---

## How flow legs arise

A client-to-server flow that enters an ISP network at an edge router, crosses a core aggregation router, and exits at a peering router may generate three separate flow legs if all three devices export to the same collector. Each leg is a legitimate, accurate record from its device's perspective. The duplication is not an error in the exporter; it is the natural result of deploying flow export at multiple points on the same path.

The problem becomes visible in reporting. Byte counts for a single conversation are multiplied by the number of exporting hops it crossed. A 1 GB transfer appearing across three legs looks like 3 GB in an unprocessed report.

---

## Flow legs in network operations

Flow legs are most common in ISP and large enterprise networks where core and edge routers all run NetFlow. In smaller networks with a single export point per path, legs are rarely an issue. The more NetFlow exporters deployed on overlapping traffic paths, the more legs the collector receives for the same conversations.

Interface-level troubleshooting depends on leg-level data. When investigating congestion on a specific router interface, the per-leg record carries the exact ingress and egress interface identifiers for that device. Merging legs into a single deduplicated record removes that detail. Keeping legs separate allows operators to trace a flow through its full path across the topology, device by device.

---

## Flow legs vs flow stitching

| Dimension | Flow legs | Flow stitching |
|---|---|---|
| Problem | Multiple records for the same flow from different devices | Two unidirectional records for opposite directions of one conversation |
| Cause | Flow traverses multiple NetFlow-enabled hops | NetFlow exports one record per direction by design |
| Solution | Deduplication or leg merging at the collector | Bidirectional stitching using reversed 5-tuple matching |
| Data lost on resolution | Per-device and per-interface source detail | Nothing; directional counts are preserved in the biflow |
| When to resolve | When accurate volume reporting matters more than hop-level detail | Almost always; unidirectional records are operationally awkward |

Both problems often appear together. A flow crossing multiple devices may arrive at the collector as several legs, each of which also needs to be stitched with its return direction leg.

---

## How Trisul handles flow legs

Trisul stores all legs as separate records by default, preserving the router and interface detail needed for per-device drilldown. Operators who want a deduplicated view have two options. MergeMultipleSources in the NetFlow configuration file merges legs from multiple devices into a single record, removing the per-device source information. Flow Legs Correlation in Web Trisul options groups legs visually in the interface without discarding the source detail, giving a consolidated view while keeping the underlying records intact.

For NAT environments, Trisul's NAT leg correlation applies port heuristics to detect and correlate legs that cross address translation boundaries, where exact 5-tuple matching is not possible. Full documentation is at https://docs.trisul.org/docs/ug/flow/deduplication/.

---

## Related terms

- [What is a flow?](/glossary/flow)
- [What is flow stitching?](/glossary/flow-stitching)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is NetFlow?](/glossary/netflow)
- [What is flow sampling?](/glossary/flow-sampling)
- [What is flow timeout?](/glossary/flow-timeout)

---

## Frequently asked questions

### How do flow legs cause over-counting in traffic reports?

If a flow crosses two NetFlow-enabled routers and both export a record to the same collector, the collector sees two legs for the same conversation. Without deduplication, bandwidth reports count those bytes twice. At ISP scale, where flows may traverse multiple aggregation and edge devices all exporting to the same collector, over-counting compounds and produces utilization figures significantly higher than actual link throughput.

### Why does Trisul keep flow legs separate by default?

Keeping legs separate preserves the per-device and per-interface context that is lost when records are merged. An operator investigating saturation on a specific edge router interface needs to see flows as they appeared on that device, not as a merged record that strips out the source detail. Trisul keeps legs as-is by default so that interface-level drilldown remains accurate, and provides explicit merge options for operators who prefer a deduplicated view.

### What is NAT leg correlation?

When a flow crosses a NAT boundary, the source IP or port visible on the inside of the NAT device differs from what is visible on the outside. This means the two legs of the same conversation have different 5-tuples and cannot be matched by exact tuple comparison. NAT leg correlation applies source port heuristics to detect the translation and join the pre-NAT and post-NAT legs into a single correlated record.