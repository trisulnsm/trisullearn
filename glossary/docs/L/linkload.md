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

Link load is the amount of traffic carried by a network link relative to its available capacity. It is a key measure of how heavily a link is being used.

---

## How link load works

Link load is calculated by comparing observed traffic with the link’s maximum bandwidth. A 500 Mbps stream on a 1 Gbps link means the link is carrying about half of its capacity.

The number may be shown as Mbps, Gbps, or a percentage. The important part is how close the traffic is to the link limit.

---

## Link load in network operations

Operators use link load to see which circuits are busy and which are underused. It helps with capacity planning and with identifying when a link is becoming stressed.

High load does not always mean a problem, but it often leads to queueing or packet loss if it stays high for too long. That is why load is watched over time.

---

## Link load vs related measures

| Measure | Meaning |
|---|---|
| Link load | Traffic carried by the link |
| Utilization | Percent of capacity used |
| Saturation | Load high enough to cause issues |
| Throughput | Actual delivered data rate |

---

## What makes link load useful

Load is best understood as a trend, not a single number. A temporary spike may be acceptable, but sustained high load is more important.

The most useful view compares load with latency, loss, and queueing. That shows whether the link is simply busy or actually struggling.

---

## How Trisul handles link load

Trisul shows link load through interface and traffic views so operators can track how busy a circuit is and whether it is approaching saturation.

---

## Related terms

- Interface utilization
- Interface saturation
- Queueing
- Packet loss
- Capacity planning