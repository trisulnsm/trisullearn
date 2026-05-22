---
title: What is active flow timeout?
description: Active flow timeout is the maximum duration a flow remains in the exporter's cache before being exported to the collector, even if the flow is still active and transmitting data.
sidebar_label: Active flow timeout
sidebar_position: 43
slug: /glossary/active-flow-timeout
keywords:
  - active flow timeout
  - flow timeout
  - netflow timeout
  - flow cache timeout
  - active timeout
  - flow export timeout
  - flow cache
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between active timeout and inactive timeout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active timeout is the maximum duration a flow remains in cache before export, even if still transmitting data. Inactive timeout is the duration of inactivity after which a flow is exported. A setting of 15 seconds for inactive timeout ensures finished flows are exported quickly. A setting of 1 minute for active timeout breaks long-lived flows into minute-sized fragments for trending."
      }
    },
    {
      "@type": "Question",
      "name": "Why set active timeout to 1 minute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Setting active timeout to 1 minute breaks long-lived flows (like 10GB downloads) into minute-sized fragments. This enables accurate trending without spikes. Without it, a 10-minute 10GB download exported at 30-minute active timeout would show as 10GB/minute in one snapshot instead of 1GB/minute for 10 minutes. Most collectors expect 60-second intervals."
      }
    },
    {
      "@type": "Question",
      "name": "What is the default active timeout value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The default active timeout is typically 30 minutes (1800 seconds) on most routers. For Juniper Trio-based routers, active timeout ranges are 60-1800 seconds for forwarding-options configurations and 10-600 seconds for services configurations. Recommended practice is 5 minutes or less for faster export and better trending."
      }
    },
    {
      "@type": "Question",
      "name": "How does active timeout affect flow data quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Longer active timeouts cause traffic reports to show spikes when data is finally exported. Shorter timeouts spread the data across time intervals, enabling accurate trending. Active timeout also affects latency in detecting anomalies: shorter timeouts enable faster detection but increase exporter CPU load due to more frequent exports."
      }
    }
  ]
};

# What is active flow timeout?

Active flow timeout is the maximum duration a flow remains in the exporter's cache before being exported to the collector, even if the flow is still transmitting data. It prevents long-lived flows from staying in cache too long. Setting it to 1 minute breaks long-lived flows into minute-sized fragments for accurate trending without spikes.

---

## How it works

When a flow reaches the active timeout duration, the exporter packages the flow data and sends it to the collector. The flow may continue, and a new record is exported at the next timeout interval. Inactive timeout is separate: flows with no packets for the inactive timeout duration are exported immediately.

---

## In network operations

- **NOC:** Set active timeout to 1 minute for collectors that display data in 1-minute increments.
- **Security:** Use shorter active timeouts (5 minutes or less) for faster anomaly detection.
- **Capacity Planning:** Use standard active timeout values to avoid traffic report spikes and enable accurate trending.

---

## Active vs inactive timeout

| Dimension | Active timeout | Inactive timeout |
|---|---|---|
| When to export | Flow duration reached | No packets received |
| Recommended value | 1 minute (60 seconds) | 15 seconds |
| Default value | 30 minutes (1800 seconds) | 15 seconds |
| Purpose | Prevent long-lived flow spikes | Export finished flows quickly |

---

## How Trisul handles it

Trisul accepts flow data exported at any active timeout value from exporters. Shorter active timeouts (1 minute) enable more accurate trending and faster anomaly detection. Trisul's flow parser handles both active and inactive timeouts from NetFlow, J-Flow, sFlow, and IPFIX exporters. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is flow exporter?](/docs/glossary/flow-exporter)
- [What is NetFlow?](/docs/glossary/netflow)
- [What is baseline traffic analytics?](/docs/glossary/baseline-traffic-analytics)

---

## Frequently asked questions

### What is the difference between active timeout and inactive timeout?

Active timeout is the maximum duration a flow remains in cache before export, even if still transmitting data. Inactive timeout is the duration of inactivity after which a flow is exported. A setting of 15 seconds for inactive timeout ensures finished flows are exported quickly. A setting of 1 minute for active timeout breaks long-lived flows into minute-sized fragments for trending.

### Why set active timeout to 1 minute?

Setting active timeout to 1 minute breaks long-lived flows (like 10GB downloads) into minute-sized fragments. This enables accurate trending without spikes. Without it, a 10-minute 10GB download exported at 30-minute active timeout would show as 10GB/minute in one snapshot instead of 1GB/minute for 10 minutes. Most collectors expect 60-second intervals.

### What is the default active timeout value?

The default active timeout is typically 30 minutes (1800 seconds) on most routers. For Juniper Trio-based routers, active timeout ranges are 60-1800 seconds for forwarding-options configurations and 10-600 seconds for services configurations. Recommended practice is 5 minutes or less for faster export and better trending.

### How does active timeout affect flow data quality?

Longer active timeouts cause traffic reports to show spikes when data is finally exported. Shorter timeouts spread the data across time intervals, enabling accurate trending. Active timeout also affects latency in detecting anomalies: shorter timeouts enable faster detection but increase exporter CPU load due to more frequent exports.