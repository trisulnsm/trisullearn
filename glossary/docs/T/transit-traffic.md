---
title: What is transit traffic?
description: Transit traffic is traffic passing through an ISP's network between other networks without originating or terminating at the ISP's customers. It flows from one peer or upstream provider to another through the ISP's infrastructure.
sidebar_label: Transit traffic
sidebar_position: 117
slug: /glossary/transit-traffic
keywords:
  - transit traffic
  - ISP transit
  - network transit
  - traffic forwarding
  - ISP traffic
  - traffic passing through
  - BGP transit
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is transit traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transit traffic is traffic passing through an ISP's network between other networks without originating or terminating at the ISP's customers. It flows from one peer or upstream provider to another through the ISP's infrastructure. Transit traffic is forwarded but not originated by the ISP."
      }
    },
    {
      "@type": "Question",
      "name": "How does transit traffic differ from customer traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transit traffic passes through without involving ISP customers. Customer traffic originates from or terminates at ISP subscribers. Transit traffic is forwarded between other networks. Customer traffic involves subscriber endpoints. ISPs charge differently for transit vs customer traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Why analyze transit traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transit traffic analysis is important for capacity planning upstream links, understanding peering relationships, optimizing routing for transit traffic, and billing for transit services. Transit traffic consumes bandwidth without generating revenue from end users."
      }
    },
    {
      "@type": "Question",
      "name": "How is transit traffic identified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transit traffic is identified through BGP information showing source and destination ASNs. Traffic where both source and destination are outside the ISP's customer base is transit. Flow data enriched with BGP attributes identifies transit traffic."
      }
    }
  ]
};

# What is transit traffic?

Transit traffic is traffic passing through an ISP's network between other networks without originating or terminating at the ISP's customers. It flows from one peer or upstream provider to another through the ISP's infrastructure. Transit traffic is forwarded but not originated by the ISP.

---

## How transit traffic works

Transit traffic enters the ISP's network from one upstream provider or peer and exits to another. The ISP forwards traffic without it involving ISP subscribers. BGP routing determines transit paths. Transit traffic consumes upstream bandwidth.

Flow data enriched with BGP attributes identifies transit traffic. Source ASN and destination ASN both outside the ISP's customer base indicates transit. Transit traffic is aggregated by upstream provider and peer.

---

## Transit traffic in network operations

In the NOC, monitor transit traffic to ensure upstream links have sufficient capacity. Transit traffic consumes bandwidth without generating direct revenue from end users. Capacity planning tracks transit traffic trends to plan upstream upgrades.

Peering teams analyze transit traffic to optimize peering relationships. When transit traffic to a specific destination is high, establishing direct peering reduces costs. Transit analysis guides peering decisions.

---

## Transit vs customer traffic

| Aspect | Transit Traffic | Customer Traffic |
|---|---|---|
| Origin/Destination | Outside ISP | Involves ISP subscribers |
| Revenue | Transit service fees | Subscriber fees |
| Capacity planning | Upstream links | Customer access links |
| Optimization | Peering decisions | QoS for subscribers |

---

## What makes transit traffic analysis work in practice

BGP information accuracy determines transit classification. Flow records must be enriched with source and destination ASN from BGP tables. Without accurate BGP information, transit traffic appears unclassified. BGP route receivers keep route tables synchronized automatically.

Upstream link monitoring is essential. Transit traffic must be measured at upstream interfaces. Flow exporters must be enabled on upstream links. Without per-link monitoring, transit traffic appears aggregated and provider-specific analysis is impossible.

---

## How Trisul handles transit traffic

Trisul provides transit traffic analysis through ISP Analytics applications. Flow data is enriched with BGP attributes including source and destination ASN. Transit traffic is identified and aggregated by upstream provider. Upstream analytics tracks transit traffic volumes. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- [What is ISP traffic analytics?](/glossary/isp-traffic-analytics)
- [What is BGP peering analytics?](/glossary/bgp-peering-analytics)
- [What is ASN?](/glossary/asn)
- [What is upstream traffic?](/glossary/upstream-traffic)
- [What is peering traffic analysis?](/glossary/peering-traffic-analysis)

---

## Frequently asked questions

### What is transit traffic?

Transit traffic is traffic passing through an ISP's network between other networks without originating or terminating at the ISP's customers. It flows from one peer or upstream provider to another through the ISP's infrastructure. Transit traffic is forwarded but not originated by the ISP.

### How does transit traffic differ from customer traffic?

Transit traffic passes through without involving ISP customers. Customer traffic originates from or terminates at ISP subscribers. Transit traffic is forwarded between other networks. Customer traffic involves subscriber endpoints. ISPs charge differently for transit vs customer traffic.

### Why analyze transit traffic?

Transit traffic analysis is important for capacity planning upstream links, understanding peering relationships, optimizing routing for transit traffic, and billing for transit services. Transit traffic consumes bandwidth without generating revenue from end users.

### How is transit traffic identified?

Transit traffic is identified through BGP information showing source and destination ASNs. Traffic where both source and destination are outside the ISP's customer base is transit. Flow data enriched with BGP attributes identifies transit traffic.