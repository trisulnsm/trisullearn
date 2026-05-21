---
title: What is flow stitching?
description: Flow stitching is the process of combining two unidirectional flow records representing opposite directions of the same conversation into a single bidirectional flow entry for analysis.
sidebar_label: Flow stitching
sidebar_position: 5
slug: /glossary/flow-stitching
keywords:
  - flow stitching
  - bidirectional flow
  - flow deduplication
  - netflow stitching
  - flow legs
  - biflow
  - flow correlation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does flow stitching fail in asymmetric routing environments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow stitching requires both directions of a conversation to be visible at the same collection point. In asymmetric routing, the forward path may traverse one router and the return path a different one, each exporting to a different collector. When the two legs land at separate collectors, neither has enough information to stitch the pair. The result is two orphaned unidirectional records rather than one complete bidirectional entry, and volume figures for the stitched flow remain incomplete."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between flow stitching and flow deduplication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow deduplication removes duplicate records generated when the same flow is exported by multiple devices it traverses, for example a flow passing through both a core router and an edge router that both have NetFlow enabled. Flow stitching combines two opposite-direction records from the same conversation into one bidirectional entry. The two problems often occur together: a collector may receive multiple legs that are both duplicates and in need of directional stitching before they produce a useful record."
      }
    },
    {
      "@type": "Question",
      "name": "Does flow stitching affect traffic volume accounting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Without deduplication, a flow traversing two NetFlow-enabled devices is counted twice in bandwidth reports. Without stitching, the inbound and outbound bytes for a session are reported as separate unrelated flows rather than as the total transfer volume of a single conversation. Both distortions affect capacity planning and billing accuracy at ISP scale, where over-reporting utilization directly impacts infrastructure investment decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Does flow stitching work across NAT boundaries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stitching across NAT is harder because the source IP or port visible on the inside of the NAT device differs from what is visible on the outside, making direct 5-tuple matching impossible. Platforms that support NAT-aware flow leg correlation apply heuristics to detect port translations and match the pre-NAT and post-NAT legs. Without this, flows that cross a NAT boundary produce unmatched legs that cannot be automatically joined."
      }
    }
  ]
};

# What is flow stitching?

Flow stitching is the process of combining two unidirectional flow records that represent opposite directions of the same network conversation into a single bidirectional entry. NetFlow and IPFIX exporters emit one record per direction: a client-to-server flow and a separate server-to-client flow, each with its own byte and packet counts. Flow stitching joins these two records at the collector so analysts work with a single conversation view rather than two disconnected entries.

---

## How flow stitching works

When a collector receives flow records, it matches pairs using the reversed 5-tuple: the source IP and port of one record should correspond to the destination IP and port of the other, with the same protocol. When a matching pair is found within the correlation window, the two records are merged into a biflow carrying the combined metadata: total bytes and packets in each direction, the full session duration, and the flags observed on both sides.

The correlation has a timing constraint. If the return flow record arrives significantly after the forward record, the correlation window may have closed and the pair will not be stitched. Active timeout configuration on exporters affects this: shorter active timeouts reduce the gap between matching records arriving at the collector, which improves stitching accuracy for long-running flows.

For TCP flows, stitching is straightforward because the 5-tuple is symmetric and well-defined. For UDP and ICMP, stitching relies on heuristics rather than session state, and match accuracy is lower, particularly for high-volume stateless protocols.

---

## Flow stitching in network operations

The operational reason for stitching is usability. Unidirectional flow records are technically correct but operationally awkward. An analyst investigating a suspicious data transfer needs to see both sides of the conversation in one record: who initiated it, how much was sent, and how much was returned. Two separate unidirectional records require manual correlation to answer that question.

At ISP scale, unstitched flow data also distorts volume accounting. A 1 GB file transfer produces one record showing 1 GB outbound from the server and a separate record showing acknowledgment traffic and request data from the client. Without stitching, reports show two separate flows rather than one complete session, and total byte counts must be summed manually to represent the full transfer.

Flow stitching becomes unreliable in networks with asymmetric routing, where forward and return paths traverse different devices exporting to different collectors. In that topology, neither collector sees both legs and stitching cannot occur locally. Centralised collection or cross-collector correlation is required to resolve this.

---

## Flow stitching vs flow deduplication

| Dimension | Flow stitching | Flow deduplication |
|---|---|---|
| Problem it solves | Two opposite-direction records for one conversation | Multiple copies of the same flow from multiple exporters |
| Input | Two unidirectional flow records with reversed 5-tuples | Two or more identical or near-identical flow records |
| Output | One bidirectional biflow record | One deduplicated flow record |
| Failure condition | Asymmetric routing splits legs across collectors | Sampling differences or timing skew cause imperfect deduplication |
| Effect on volume reporting | Without stitching, inbound and outbound are counted separately | Without deduplication, the same flow volume is counted multiple times |

Both problems are common in multi-device environments where traffic crosses several NetFlow-enabled nodes. They are often addressed together in the collector pipeline, with deduplication running before stitching.

---

## How Trisul handles flow stitching

When Trisul receives flow telemetry from multiple devices, the same flow can appear as multiple legs: one per device the flow traversed. By default, Trisul retains each leg as a separate record, preserving the router and interface information so operators can drill down from a specific router interface to the flows it handled.

For environments where per-leg detail is not needed, Trisul provides three handling options: keep flows as-is (default), merge flows using the MergeMultipleSources option in the NetFlow configuration file which removes per-router information, or enable Flow Legs Correlation in Web Trisul options which groups the legs visually without discarding the source detail. NAT-aware leg correlation is also available, applying source port heuristics to detect and correlate legs that cross NAT boundaries. Full documentation is at https://docs.trisul.org/docs/ug/flow/deduplication/.

---

## Related terms

- [What is a flow?](/docs/glossary/flow)
- [What is flow timeout?](/docs/glossary/flow-timeout)
- [What is flow tagger?](/docs/glossary/flow-tagger)
- [What is NetFlow?](/docs/glossary/netflow)
- [What is IPFIX?](/docs/glossary/ipfix)
- [What is flow sampling?](/docs/glossary/flow-sampling)
- [What is network security monitoring?](/docs/glossary/network-security-monitoring)

---

## Frequently asked questions

### Why does flow stitching fail in asymmetric routing environments?

Flow stitching requires both directions of a conversation to be visible at the same collection point. In asymmetric routing, the forward path may traverse one router and the return path a different one, each exporting to a different collector. When the two legs land at separate collectors, neither has enough information to stitch the pair. The result is two orphaned unidirectional records rather than one complete bidirectional entry, and volume figures remain incomplete.

### What is the difference between flow stitching and flow deduplication?

Flow deduplication removes duplicate records generated when the same flow is exported by multiple devices it traverses, for example a flow passing through both a core router and an edge router that both have NetFlow enabled. Flow stitching combines two opposite-direction records from the same conversation into one bidirectional entry. The two problems often occur together: a collector may receive multiple legs that are both duplicates and in need of directional stitching before they produce a useful record.

### Does flow stitching affect traffic volume accounting?

Yes. Without deduplication, a flow traversing two NetFlow-enabled devices is counted twice in bandwidth reports. Without stitching, the inbound and outbound bytes for a session are reported as separate unrelated flows rather than as the total transfer volume of a single conversation. Both distortions affect capacity planning and billing accuracy at ISP scale, where over-reporting utilization directly impacts infrastructure investment decisions.

### Does flow stitching work across NAT boundaries?

Stitching across NAT is harder because the source IP or port visible on the inside of the NAT device differs from what is visible on the outside, making direct 5-tuple matching impossible. Platforms that support NAT-aware flow leg correlation apply heuristics to detect port translations and match the pre-NAT and post-NAT legs. Without this, flows that cross a NAT boundary produce unmatched legs that cannot be automatically joined.