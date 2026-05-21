---
title: What is flow deduplication?
description: Flow deduplication is the process of identifying and removing duplicate flow records that arrive at a collector when the same flow is exported by multiple network devices it traversed.
sidebar_label: Flow deduplication
sidebar_position: 11
slug: /glossary/flow-deduplication
keywords:
  - flow deduplication
  - netflow deduplication
  - duplicate flow records
  - flow collector deduplication
  - netflow duplicate removal
  - flow data accuracy
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does flow deduplication sometimes increase storage rather than reduce it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a collector merges duplicate legs into a single deduplicated record, it often needs to retain the original legs as well to preserve per-device and per-interface detail that would otherwise be lost. The result is both the original records and the merged record stored simultaneously. In environments where per-hop visibility matters, this tradeoff is intentional: the deduplicated view is used for volume reporting while the original legs remain available for interface-level drilldown."
      }
    },
    {
      "@type": "Question",
      "name": "How does a collector identify duplicate flow records?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Collectors match duplicates by comparing the flow 5-tuple across records arriving within a configured deduplication time window, typically 15 to 30 seconds. Records with identical 5-tuples from different exporters within that window are treated as duplicates of the same conversation. Fields outside the standard tuple, such as DSCP values, next-hop addresses, and interface identifiers, will differ between legs and are either dropped or handled separately when the records are merged."
      }
    },
    {
      "@type": "Question",
      "name": "Does flow deduplication affect security investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aggressive deduplication can remove context that matters during an investigation. A flow record from a specific edge router interface carries the ingress and egress interface identifiers for that device, which helps trace where in the topology a suspicious connection entered the network. If deduplication discards the per-device detail, that path information is gone. Investigators working on lateral movement or ingress tracing often need the original per-leg records, not just the merged view."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between flow deduplication and packet deduplication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet deduplication identifies and discards duplicate copies of the same packet arriving at a capture point, typically within a millisecond-scale time window. Flow deduplication identifies and merges duplicate flow records from different exporters, operating on a seconds-scale window that accounts for the different active and inactive timeout values across devices. The two operate at different layers of the monitoring stack and address different sources of duplication."
      }
    }
  ]
};

# What is flow deduplication?

Flow deduplication is the process of identifying and removing duplicate flow records that arrive at a collector when the same conversation is exported by more than one network device it traversed. A flow crossing three NetFlow-enabled routers generates three separate records at the collector, one from each device. Without deduplication, volume reports count those bytes three times. Deduplication reduces the three records to one, correcting the over-count. The tradeoff is that merging records discards per-device detail that is useful for topology-level investigation and interface drilldown.

---

## How flow deduplication works

When flow records arrive at the collector, they are compared against a deduplication cache keyed on the flow 5-tuple. Records matching an existing entry within the deduplication time window, typically 15 to 30 seconds, are identified as duplicates. The collector either discards the duplicate entirely or merges it into the existing record, depending on the configured behavior.

The time window must accommodate the different active and inactive timeout values set on different exporters. If one router flushes a flow record at 60 seconds and another at 90 seconds, the collector needs a window wide enough to recognize the second record as a duplicate of the first rather than a new flow.

Fields outside the 5-tuple, such as ingress and egress interface identifiers, DSCP markings, and BGP next-hop values, will differ between legs exported by different devices. Merging drops or averages those fields, which is why some collectors retain the original legs alongside the deduplicated record rather than replacing them.

![](./images/flow-deduplication.png)

---

## Flow deduplication in network operations

Deduplication is most relevant in ISP and large enterprise networks where core, aggregation, and edge routers all export flow telemetry to the same collector. A single internet session traversing four hops, each exporting at different sampling rates and timeout intervals, can produce four records with subtly different byte counts and timestamps. Unprocessed, these records make bandwidth reports unusable for accurate capacity planning or billing.

The decision to deduplicate is a tradeoff between reporting accuracy and investigative depth. Deduplicated flow data produces clean volume figures but loses the per-hop context that tells you where in the network a flow entered, which interfaces it crossed, and which devices saw it. Keeping original legs available alongside the deduplicated view is the practical resolution for deployments that need both.

---

## Flow deduplication vs flow stitching

| Dimension | Flow deduplication | Flow stitching |
|---|---|---|
| Problem it solves | Same flow exported by multiple devices | Two opposite-direction records for one conversation |
| Input | Multiple records with identical 5-tuples from different exporters | Two unidirectional records with reversed 5-tuples |
| Output | One record representing the single conversation | One bidirectional record with combined directional counts |
| Data lost on merge | Per-device interface and topology detail | Nothing; directional counts are preserved |
| When to apply | When multiple exporters overlap on the same traffic path | Almost always for TCP flows; improves operational usability |

Both problems often occur together. A collector receiving legs from multiple devices may need to deduplicate and stitch simultaneously before the resulting records are usable for reporting or investigation.

---

## How Trisul handles flow deduplication

Trisul stores all flow legs as separate records by default, preserving the per-device and per-interface context needed for router and interface drilldown. For deployments where a single merged view is preferred, the MergeMultipleSources option in the NetFlow configuration file instructs Trisul to merge legs from multiple devices into a single record, removing the per-device source detail in the process.

Flow Legs Correlation in Web Trisul options provides a middle path: legs are grouped visually in the interface for a consolidated view, but the underlying records remain intact and queryable. This preserves investigative depth while reducing the noise of duplicate entries in flow search results. Full documentation is at https://docs.trisul.org/docs/ug/flow/deduplication/.

---

## Related terms

- [What is flow legs?](/docs/glossary/flow-legs)
- [What is flow stitching?](/docs/glossary/flow-stitching)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is flow exporter?](/docs/glossary/flow-exporter)
- [What is a flow?](/docs/glossary/flow)
- [What is NetFlow?](/docs/glossary/netflow)
- [What is flow sampling?](/docs/glossary/flow-sampling)

---

## Frequently asked questions

### Why does flow deduplication sometimes increase storage rather than reduce it?

When a collector merges duplicate legs into a single deduplicated record, it often needs to retain the original legs as well to preserve per-device and per-interface detail that would otherwise be lost. The result is both the original records and the merged record stored simultaneously. In environments where per-hop visibility matters, this tradeoff is intentional: the deduplicated view is used for volume reporting while the original legs remain available for interface-level drilldown.

### How does a collector identify duplicate flow records?

Collectors match duplicates by comparing the flow 5-tuple across records arriving within a configured deduplication time window, typically 15 to 30 seconds. Records with identical 5-tuples from different exporters within that window are treated as duplicates of the same conversation. Fields outside the standard tuple, such as DSCP values, next-hop addresses, and interface identifiers, will differ between legs and are either dropped or handled separately when the records are merged.

### Does flow deduplication affect security investigations?

Aggressive deduplication can remove context that matters during an investigation. A flow record from a specific edge router interface carries the ingress and egress interface identifiers for that device, which helps trace where in the topology a suspicious connection entered the network. If deduplication discards the per-device detail, that path information is gone. Investigators working on lateral movement or ingress tracing often need the original per-leg records, not just the merged view.

### What is the difference between flow deduplication and packet deduplication?

Packet deduplication identifies and discards duplicate copies of the same packet arriving at a capture point, typically within a millisecond-scale time window. Flow deduplication identifies and merges duplicate flow records from different exporters, operating on a seconds-scale window that accounts for the different active and inactive timeout values across devices. The two operate at different layers of the monitoring stack and address different sources of duplication.