---
title: What is flow sampling?
description: Flow sampling is a technique used by network devices to export only a subset of observed flows or packets to a collector, reducing processing and export overhead at the cost of statistical completeness.
sidebar_label: Flow sampling
sidebar_position: 6
slug: /glossary/flow-sampling
keywords:
  - flow sampling
  - netflow sampling
  - packet sampling
  - sflow sampling
  - sampled flow data
  - flow data accuracy
  - network traffic sampling
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What sampling rate is acceptable for network monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For capacity planning and traffic trending, 1-in-1000 or even 1-in-2000 sampling is often sufficient because high-volume flows will still appear in the sampled data with enough frequency to estimate totals accurately. For security monitoring, 1-in-100 or lower is preferable because short-lived or low-volume events like port scans, targeted exfiltration, or beaconing sessions may generate only a handful of packets and will simply not appear in coarse-sampled data. The right rate depends entirely on what the monitoring deployment is trying to detect."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow sampling affect security detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampled flow data misses short flows entirely and under-represents low-volume behavior. A host performing a slow port scan, a command-and-control beacon on a long interval, or a targeted data exfiltration over a low-bandwidth channel may generate fewer packets than the sampling interval. Those flows will never appear in the exported data. Detection use cases that depend on observing every connection, such as identifying internal reconnaissance or lateral movement, require unsampled flow collection."
      }
    },
    {
      "@type": "Question",
      "name": "Does sFlow use the same sampling mechanism as NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "sFlow samples at the packet level, selecting every Nth packet from the wire and exporting a copy of the sampled packet header along with interface counters. NetFlow sampling operates at the flow level, selecting a subset of flows to track and export rather than sampling individual packets. The practical implication is different: sFlow gives you a statistical view of the packet mix on an interface, while sampled NetFlow gives you a subset of flow conversations with accurate per-flow byte counts for those flows that were selected."
      }
    },
    {
      "@type": "Question",
      "name": "Can you correct for sampling in traffic volume reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Collectors that receive sampled flow data multiply observed byte and packet counts by the inverse of the sampling rate to estimate actual totals. A flow observed with 1,000 bytes at a 1-in-100 sampling rate is reported as approximately 100,000 bytes. This estimation is accurate for high-volume flows where the law of large numbers applies. For low-volume flows, extrapolation introduces significant error, and a flow that was sampled only once or twice cannot be reliably scaled to a meaningful estimate."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between deterministic and probabilistic flow sampling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deterministic sampling selects every Nth packet or flow in strict sequence, which makes it predictable but also exploitable: a sender who knows the sampling interval can time traffic to avoid or always hit the sampler. Probabilistic sampling assigns each packet or flow a random selection probability, removing the predictability. Most modern network platforms support both modes; probabilistic sampling is generally preferred for security monitoring where adversarial evasion is a concern."
      }
    }
  ]
};

# What is flow sampling?

Flow sampling is a technique where a network device exports only a fraction of the flows or packets it observes, rather than every one, to reduce the processing and export load on the device and the collection infrastructure downstream. Instead of tracking every conversation, the device selects one flow or packet per N observed, where N is the configured sampling rate, and exports a record only for those selected. The collector then scales up the observed counts to estimate actual traffic totals. The fundamental tradeoff is coverage versus resource cost: sampling makes flow collection feasible at very high speeds but introduces statistical error and blind spots that affect detection accuracy.

---

## How flow sampling works

On devices that support sampled NetFlow, the exporter tracks only a fraction of active flows. At a sampling rate of 1-in-100, one out of every 100 packets or flows is selected for tracking and export. The remaining 99 are counted at the interface level but generate no flow record. The exported record carries a sampling rate field so the collector knows to multiply observed byte and packet counts by 100 to estimate the actual totals.

sFlow uses a related but distinct mechanism. Rather than sampling flows, sFlow samples individual packets from the wire, capturing a copy of the packet header at a configured rate and exporting it alongside interface counter data. This gives the collector a statistical view of the packet mix on an interface rather than a set of flow conversation records.

Both mechanisms report the sampling rate to the collector. A collector that ignores the sampling rate field and treats sampled data as complete will produce significant undercounting in all volume metrics.

---

## Flow sampling in network operations

Flow sampling exists primarily as a hardware concession. At 10 Gbps and above, tracking every flow in hardware at line rate requires dedicated TCAM and forwarding ASIC resources. On platforms where those resources are limited, sampling allows the device to participate in flow telemetry without impacting forwarding performance. The alternative, full unsampled flow export, is available on purpose-built probes and on some high-end router platforms but is not universally supported.

For capacity planning, trending, and bandwidth accounting, sampling at 1-in-500 or 1-in-1000 produces estimates that are accurate enough for most engineering decisions. High-volume flows, which carry the majority of traffic bytes, appear frequently in the sampled data and scale predictably.

For security operations, sampling is a genuine limitation. Low-volume events: a host connecting to a single external IP, a slow lateral scan, or a beaconing agent checking in every 10 minutes, may never be captured at coarse sampling rates. Security-focused deployments that rely on flow data for detection should use unsampled collection wherever the infrastructure supports it.

---

## Sampled flow vs unsampled flow

| Dimension | Sampled flow | Unsampled flow |
|---|---|---|
| Coverage | Statistical subset of observed traffic | Every flow exported |
| Volume accuracy | Estimated via scaling; accurate for high-volume flows | Exact byte and packet counts per flow |
| Short flow visibility | Frequently missed at coarse sampling rates | All flows recorded regardless of size |
| Device resource cost | Low; suitable for high-speed hardware-limited platforms | Higher; requires dedicated probe or capable platform |
| Security use case fit | Limited; low-volume events are missed | Recommended for detection and investigation |
| Best fit | Capacity planning, trending, ISP bandwidth accounting | Security monitoring, incident response, compliance |

Unsampled collection is always preferable where the device and infrastructure support it. Sampling should be treated as a constraint to work around, not a feature to rely on.

---

## What makes flow sampling work in practice

The sampling rate must match the use case. A rate adequate for capacity planning will leave security monitoring blind to low-volume events. When a single deployment serves both purposes, the lower rate required for security should govern, accepting the higher collection load rather than compromising detection coverage.

Sampling rate consistency across exporters matters for accurate aggregation. If one router exports at 1-in-100 and another at 1-in-1000, the collector must apply different multipliers per source. A collector that applies a single global multiplier will misrepresent totals from whichever devices deviate from that rate. In multi-vendor environments, auditing the sampling rate field in received flow records is necessary before trusting aggregated volume reports.

Adaptive sampling, which adjusts the rate dynamically based on current traffic volume, is supported on some platforms. While this manages resource consumption under traffic spikes, it complicates volume estimation at the collector because the multiplier changes over time and must be tracked per flow record rather than applied globally.

---

## How Trisul handles flow sampling

Trisul ingests NetFlow, IPFIX, and sFlow records and reads the sampling rate field embedded in the flow data. Received byte and packet counts are scaled by the reported sampling rate automatically, so volume metrics in dashboards and reports reflect estimated actual totals rather than raw sampled counts.

For environments where complete flow visibility is required, Trisul can reconstruct flows directly from raw packets using PF_RING or AF_PACKET rather than relying on exported flow telemetry. Packet-based flow reconstruction produces unsampled, complete flow records for every conversation observed on the monitored link, removing the coverage gaps inherent in device-level sampling. Full NetFlow configuration documentation is at https://docs.trisul.org/docs/ref/netflow-config/.

---

## Related terms

- [What is a flow?](/glossary/flow)
- [What is NetFlow?](/glossary/netflow)
- [What is IPFIX?](/glossary/ipfix)
- [What is sFlow?](/glossary/sflow)
- [What is flow timeout?](/glossary/flow-timeout)
- [What is flow stitching?](/glossary/flow-stitching)
- [What is full packet capture?](/glossary/full-packet-capture)
- [What is network security monitoring?](/glossary/network-security-monitoring)

---

## Frequently asked questions

### What sampling rate is acceptable for network monitoring?

For capacity planning and traffic trending, 1-in-1000 or even 1-in-2000 sampling is often sufficient because high-volume flows will still appear in the sampled data with enough frequency to estimate totals accurately. For security monitoring, 1-in-100 or lower is preferable because short-lived or low-volume events like port scans, targeted exfiltration, or beaconing sessions may generate only a handful of packets and will simply not appear in coarse-sampled data. The right rate depends entirely on what the monitoring deployment is trying to detect.

### How does flow sampling affect security detection?

Sampled flow data misses short flows entirely and under-represents low-volume behavior. A host performing a slow port scan, a command-and-control beacon on a long interval, or a targeted data exfiltration over a low-bandwidth channel may generate fewer packets than the sampling interval. Those flows will never appear in the exported data. Detection use cases that depend on observing every connection, such as identifying internal reconnaissance or lateral movement, require unsampled flow collection.

### Does sFlow use the same sampling mechanism as NetFlow?

sFlow samples at the packet level, selecting every Nth packet from the wire and exporting a copy of the sampled packet header along with interface counters. NetFlow sampling operates at the flow level, selecting a subset of flows to track and export rather than sampling individual packets. The practical implication is different: sFlow gives you a statistical view of the packet mix on an interface, while sampled NetFlow gives you a subset of flow conversations with accurate per-flow byte counts for those flows that were selected.

### Can you correct for sampling in traffic volume reports?

Collectors that receive sampled flow data multiply observed byte and packet counts by the inverse of the sampling rate to estimate actual totals. A flow observed with 1,000 bytes at a 1-in-100 sampling rate is reported as approximately 100,000 bytes. This estimation is accurate for high-volume flows where the law of large numbers applies. For low-volume flows, extrapolation introduces significant error, and a flow that was sampled only once or twice cannot be reliably scaled to a meaningful estimate.

### What is the difference between deterministic and probabilistic flow sampling?

Deterministic sampling selects every Nth packet or flow in strict sequence, which makes it predictable but also exploitable: a sender who knows the sampling interval can time traffic to avoid or always hit the sampler. Probabilistic sampling assigns each packet or flow a random selection probability, removing the predictability. Most modern network platforms support both modes; probabilistic sampling is generally preferred for security monitoring where adversarial evasion is a concern.