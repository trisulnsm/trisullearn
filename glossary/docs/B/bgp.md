---
title: What is BGP?
description: BGP (Border Gateway Protocol) is the routing protocol for the Internet that exchanges network reachability information between autonomous systems and selects the best path based on policies and path attributes.
sidebar_label: BGP
sidebar_position: 34
slug: /glossary/bgp
keywords:
  - bgp
  - border gateway protocol
  - bgp routing
  - autonomous system
  - ebgp
  - ibgp
  - bgp peering
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the two types of BGP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "eBGP (External BGP) exchanges routing information between routers in different autonomous systems. iBGP (Internal BGP) exchanges routing information between routers within the same autonomous system. eBGP is used for Internet peering; iBGP is used for internal route consistency."
      }
    },
    {
      "@type": "Question",
      "name": "How does BGP select the best path?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BGP evaluates path attributes including Weight (Cisco-specific, higher is preferred), Local Preference (higher is preferred), Autonomous System Path (shorter is preferred), and Next Hop. The router selects the path with the best attributes according to its local policy configuration."
      }
    },
    {
      "@type": "Question",
      "name": "What port does BGP use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BGP runs over TCP port 179. BGP peers establish a TCP connection before exchanging routing information. This makes BGP more reliable than routing protocols that run directly over IP without a transport layer."
      }
    },
    {
      "@type": "Question",
      "name": "How is BGP used in flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring enriches flow records with BGP attributes including source and destination ASN, BGP next hop, and communities. This enables traffic analysis by autonomous system, peering analysis, and identification of traffic patterns by routing path."
      }
    }
  ]
};

# What is BGP?

BGP (Border Gateway Protocol) is the routing protocol for the Internet that exchanges network reachability information between autonomous systems. It selects the best path based on policies and path attributes like Weight, Local Preference, and AS Path. BGP runs over TCP port 179 and supports CIDR.

---

## How it works

BGP peers establish a TCP connection and exchange reachability information including the destination network and AS path. BGP constructs an AS connectivity graph to prevent routing loops and enforce policy decisions. When routes change, BGP advertises only the delta rather than the full routing table.

---

## In network operations

- **NOC:** Monitor BGP peer status and route changes to detect coupling or routing anomalies.
- **ISP:** Use BGP for peering and traffic engineering, selecting upstream paths based on cost and performance.
- **Security:** Detect BGP hijacking by monitoring for unexpected route origin changes or AS path anomalies.

---

## eBGP vs iBGP

| Dimension | eBGP | iBGP |
|---|---|---|
| Scope | Between different ASes | Within the same AS |
| Use case | Internet peering | Internal route consistency |
| TTL | 1 | 255 |
| Next hop | Changes at AS boundary | Preserved across AS |

---

## How Trisul handles it

Trisul enriches flow records with BGP attributes including source and destination ASN, BGP next hop, and communities. This enables querying and reporting by autonomous system in Explore Flows and dashboards. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is ASN?](/glossary/asn)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is peering?](/glossary/peering)
- [What is CIDR?](/glossary/cidr)
- [What is autonomous system?](/glossary/autonomous-system)

---

## Frequently asked questions

### What are the two types of BGP?

eBGP (External BGP) exchanges routing information between routers in different autonomous systems. iBGP (Internal BGP) exchanges routing information between routers within the same autonomous system. eBGP is used for Internet peering; iBGP is used for internal route consistency.

### How does BGP select the best path?

BGP evaluates path attributes including Weight (Cisco-specific, higher is preferred), Local Preference (higher is preferred), Autonomous System Path (shorter is preferred), and Next Hop. The router selects the path with the best attributes according to its local policy configuration.

### What port does BGP use?

BGP runs over TCP port 179. BGP peers establish a TCP connection before exchanging routing information. This makes BGP more reliable than routing protocols that run directly over IP without a transport layer.

### How is BGP used in flow monitoring?

Flow monitoring enriches flow records with BGP attributes including source and destination ASN, BGP next hop, and communities. This enables traffic analysis by autonomous system, peering analysis, and identification of traffic patterns by routing path.