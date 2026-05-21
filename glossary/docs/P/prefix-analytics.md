---
title: What is prefix analytics?
description: Prefix analytics analyzes traffic by IP prefix (CIDR block) to understand traffic patterns, identify top prefixes, and optimize routing. It provides visibility into traffic per IP subnet enabling capacity planning and routing optimization.
sidebar_label: Prefix analytics
sidebar_position: 86
slug: /glossary/prefix-analytics
keywords:
  - prefix analytics
  - IP prefix analytics
  - CIDR analytics
  - subnet traffic
  - routing analytics
  - BGP prefix
  - traffic by prefix
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is prefix analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prefix analytics analyzes traffic by IP prefix (CIDR block) to understand traffic patterns, identify top prefixes, and optimize routing. It provides visibility into traffic per IP subnet enabling capacity planning and routing optimization. Prefix analytics maps traffic to IP address ranges."
      }
    },
    {
      "@type": "Question",
      "name": "What is an IP prefix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IP prefix is a CIDR notation representing an IP address range such as 192.0.2.0/24 or 2001:db8::/32. Prefixes represent routed address blocks announced by BGP. Traffic to a prefix goes to the same destination network. Prefixes are the units of BGP routing."
      }
    },
    {
      "@type": "Question",
      "name": "How does prefix analytics work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prefix analytics maps destination and source IP addresses to prefixes using BGP routing tables. Flow records are classified by prefix. Traffic volumes are aggregated per prefix. Top prefixes are identified. Trends are analyzed over time. BGP analytics provides prefix-to-AS mapping."
      }
    },
    {
      "@type": "Question",
      "name": "What are the use cases for prefix analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prefix analytics use cases include capacity planning by tracking traffic per prefix, routing optimization by identifying high-traffic prefixes, BGP troubleshooting by analyzing prefix traffic patterns, ISP analytics showing traffic per destination prefix, security monitoring detecting anomalies in prefix traffic, and billing showing traffic per customer prefix."
      }
    }
  ]
};

# What is prefix analytics?

Prefix analytics analyzes traffic by IP prefix (CIDR block) to understand traffic patterns, identify top prefixes, and optimize routing. It provides visibility into traffic per IP subnet enabling capacity planning and routing optimization. Prefix analytics maps traffic to IP address ranges.

---

## How prefix analytics works

Flow records include destination and source IP addresses. BGP routing tables map IP addresses to prefixes. Traffic is classified by prefix and aggregated. Top prefixes are identified. Trends are analyzed over time. BGP analytics provides prefix-to-AS mapping.

Real-time and historical prefix traffic flows are tracked. Prefix traffic is mapped to gateways and next hops. Traffic patterns by prefix are analyzed for capacity planning.

---

## Prefix analytics in network operations

In the NOC, use prefix analytics to track traffic per destination prefix and identify top prefixes consuming bandwidth. Capacity planning uses prefix traffic trends to plan routing and capacity. Engineering analyzes prefix traffic for routing optimization.

ISP analytics tracks prefix traffic per gateway. Real-time views of prefix flows enable rapid detection of anomalies. Traffic prefix analysis supports billing and chargeback showing traffic per customer prefix.

---

## Prefix analytics capabilities

| Capability | Description |
|---|---|
| Real-time prefix traffic | Current traffic per prefix |
| Historical prefix flows | Past traffic per prefix |
| Top prefixes | Highest traffic prefixes |
| Prefix to gateway mapping | Which gateway handles each prefix |
| Prefix to AS mapping | Which AS announces each prefix |
| Traffic trends | Prefix traffic over time |

---

## What makes prefix analytics work in practice

BGP table accuracy determines prefix classification. Flow records must be mapped to current BGP routing tables. When routes change, prefix mapping updates automatically. Outdated BGP tables misclassify traffic to wrong prefixes.

Aggregation at write time enables fast queries. Pre-computed prefix summaries enable fast prefix analytics. Without aggregation, queries must scan all flow records and aggregate by prefix. Indexing and aggregation enable fast dashboards even with millions of flows.

---

## How Trisul handles prefix analytics

Trisul provides prefix analytics through ISP Analytics applications. Real-time and historical traffic per prefix is mapped to gateways and next hops. BGP route receivers keep route tables synchronized automatically. Prefix traffic flows are analyzed for capacity planning and routing optimization. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- [What is BGP peering analytics?](/glossary/bgp-peering-analytics)
- [What is ASN?](/glossary/asn)
- [What is ISP traffic analytics?](/glossary/isp-traffic-analytics)
- [What is CIDR?](/glossary/cidr)
- [What is flow monitoring?](/glossary/flow-monitoring)

---

## Frequently asked questions

### What is prefix analytics?

Prefix analytics analyzes traffic by IP prefix (CIDR block) to understand traffic patterns, identify top prefixes, and optimize routing. It provides visibility into traffic per IP subnet enabling capacity planning and routing optimization. Prefix analytics maps traffic to IP address ranges.

### What is an IP prefix?

An IP prefix is a CIDR notation representing an IP address range such as 192.0.2.0/24 or 2001:db8::/32. Prefixes represent routed address blocks announced by BGP. Traffic to a prefix goes to the same destination network. Prefixes are the units of BGP routing.

### How does prefix analytics work?

Prefix analytics maps destination and source IP addresses to prefixes using BGP routing tables. Flow records are classified by prefix. Traffic volumes are aggregated per prefix. Top prefixes are identified. Trends are analyzed over time. BGP analytics provides prefix-to-AS mapping.

### What are the use cases for prefix analytics?

Prefix analytics use cases include capacity planning by tracking traffic per prefix, routing optimization by identifying high-traffic prefixes, BGP troubleshooting by analyzing prefix traffic patterns, ISP analytics showing traffic per destination prefix, security monitoring detecting anomalies in prefix traffic, and billing showing traffic per customer prefix.