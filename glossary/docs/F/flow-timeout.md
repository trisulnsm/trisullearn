---
title: What is flow timeout?
description: Flow timeout is the mechanism by which a network device decides a flow has ended and exports its record to a collector, using either an idle timer for inactive flows or an active timer for long-running ones.
sidebar_label: Flow timeout
sidebar_position: 3
slug: /glossary/flow-timeout
keywords:
  - flow timeout
  - active timeout
  - inactive timeout
  - netflow timeout
  - flow cache timeout
  - flow expiration
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the recommended active and inactive timeout for NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most collectors, an active timeout of 60 seconds and an inactive timeout of 15 seconds are standard starting points. The active timeout at 60 seconds allows the collector to display per-minute traffic resolution without large mid-flow spikes. The inactive timeout at 15 seconds ensures short-lived flows are exported promptly without holding cache entries unnecessarily."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow timeout affect traffic reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A long active timeout causes traffic to be reported as a spike when the record finally arrives at the collector rather than spread across the actual duration of the flow. A 10-minute file transfer with a 30-minute active timeout will appear as a single burst in reporting rather than a steady transfer. Shortening the active timeout to 60 seconds aligns exported flow data with minute-by-minute granularity and produces more accurate trending."
      }
    },
    {
      "@type": "Question",
      "name": "Does flow timeout affect security investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A high inactive timeout delays export of completed short-lived flows, which means connections that have already closed may not yet appear in the collector when an analyst is investigating. For long-duration flows like persistent beaconing sessions, a short active timeout ensures the collector receives periodic updates rather than waiting for the flow to terminate before any record is visible."
      }
    },
    {
      "@type": "Question",
      "name": "Does Trisul have its own flow timeout setting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When Trisul reconstructs flows from raw packets rather than receiving exported NetFlow records, it applies its own inactivity timeout to determine when a flow has ended. The default is 120 seconds: if no packets are seen for a flow within that window, the flow is considered terminated and its record is written. This value is configurable in the flow handling settings."
      }
    }
  ]
};

# What is flow timeout?

Flow timeout is the mechanism a network device uses to decide when a flow is complete and ready to export to a collector. Because the device cannot always observe an explicit TCP FIN or RST, it relies on two timers: an inactive timeout that fires when no new packets arrive for a flow within a set period, and an active timeout that breaks up long-running flows into periodic records regardless of whether the flow has ended. Together these two settings control the granularity, latency, and accuracy of exported flow data.

---

## How flow timeout works

When a router or switch observes packets, it stores per-flow metadata in a local flow cache. That cache entry stays open as long as new packets keep arriving. The inactive timeout closes and exports the entry if no new packet is seen for the configured interval, typically 15 seconds. This handles short-lived flows and flows that terminate without a TCP FIN.

The active timeout handles flows that never go idle: a large file transfer, a streaming session, or a persistent tunnel. Without an active timeout, the cache entry stays open indefinitely and the collector receives no data until the flow finally closes. Setting the active timeout to 60 seconds causes the device to export a partial record every minute, giving the collector continuous visibility into the ongoing conversation.

For TCP flows, a FIN or RST triggers immediate export regardless of where either timer stands.

---

## Flow timeout in network operations

Timeout values directly affect the time resolution of traffic reports. With an active timeout of 30 minutes, a single large transfer appears in reporting as one event at the moment of export rather than as traffic distributed across its actual duration. At 60 seconds, the same transfer appears as a steady trend across the minutes it actually occupied. For capacity planning and interface utilization trending, 60 seconds is the practical standard.

For security operations, the inactive timeout affects how quickly short-lived connections appear in the collector. A host performing rapid port scanning generates many short flows. An inactive timeout of 15 seconds means those records arrive at the collector within seconds of the scan completing. A higher value delays visibility and slows down triage.

Mismatched timeout values across devices in the same network create inconsistency in flow data. One device exporting at 60 seconds active and another at 30 minutes will produce traffic profiles that are difficult to correlate during an investigation.

---

## Active timeout vs inactive timeout

| Dimension | Active timeout | Inactive timeout |
|---|---|---|
| What triggers it | Flow still active after N seconds | No new packets seen for N seconds |
| Primary purpose | Break long-running flows into periodic records | Detect and export completed or idle flows |
| Typical default | 30 minutes (recommended: 60 seconds) | 15 seconds |
| Effect if too high | Traffic spikes in reporting, delayed visibility | Delayed export of short-lived flows |
| Effect if too low | Increased exporter and collector load | Cache churn; minimal practical downside |

Both timers work independently. A flow will be exported as soon as either timer fires or a TCP FIN or RST is observed.

---

## How Trisul handles flow timeout

When Trisul processes traffic from raw packets rather than receiving pre-exported NetFlow records, it applies its own inactivity timeout to determine when a flow has ended. The default is 120 seconds: a flow that has seen no packets for two minutes is considered terminated and its record is written to the flow database. This value is tunable in the flow handling settings at https://docs.trisul.org/docs/ug/flow/tuning/.

For NetFlow and IPFIX inputs, Trisul receives flow records as exported by the upstream device and does not apply its own expiry logic. In that mode, the timeout behavior is entirely controlled by the exporter configuration.

---

## Related terms

- [What is a flow?](/glossary/flow)
- [What is NetFlow?](/glossary/netflow)
- [What is IPFIX?](/glossary/ipfix)
- [What is flow sampling?](/glossary/flow-sampling)
- [What is flow tagger?](/glossary/flow-tagger)
- [What is flow tracker?](/glossary/flow-tracker)

---

## Frequently asked questions

### What is the recommended active and inactive timeout for NetFlow?

For most collectors, an active timeout of 60 seconds and an inactive timeout of 15 seconds are standard starting points. The active timeout at 60 seconds allows the collector to display per-minute traffic resolution without large mid-flow spikes. The inactive timeout at 15 seconds ensures short-lived flows are exported promptly without holding cache entries unnecessarily.

### How does flow timeout affect traffic reports?

A long active timeout causes traffic to be reported as a spike when the record finally arrives at the collector rather than spread across the actual duration of the flow. A 10-minute file transfer with a 30-minute active timeout will appear as a single burst in reporting rather than a steady transfer. Shortening the active timeout to 60 seconds aligns exported flow data with minute-by-minute granularity and produces more accurate trending.

### Does flow timeout affect security investigations?

Yes. A high inactive timeout delays export of completed short-lived flows, which means connections that have already closed may not yet appear in the collector when an analyst is investigating. For long-duration flows like persistent beaconing sessions, a short active timeout ensures the collector receives periodic updates rather than waiting for the flow to terminate before any record is visible.

### Does Trisul have its own flow timeout setting?

When Trisul reconstructs flows from raw packets rather than receiving exported NetFlow records, it applies its own inactivity timeout to determine when a flow has ended. The default is 120 seconds: if no packets are seen for a flow within that window, the flow is considered terminated and its record is written. This value is configurable in the flow handling settings.