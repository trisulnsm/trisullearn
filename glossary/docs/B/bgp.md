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

BGP (Border Gateway Protocol) is the routing protocol for the Internet that exchanges network reachability information between autonomous systems. It selects the best path based on policies and path attributes such as Weight, Local Preference, and AS Path. BGP runs over TCP port 179 and supports CIDR for efficient address‑space aggregation.

---

## How it works

BGP peers first establish a TCP connection, then exchange routing information including destination prefixes and their associated AS paths. BGP constructs an AS‑level connectivity graph to prevent routing loops and enforce policy decisions. When routes change, BGP usually advertises only the incremental change (delta) rather than the entire routing table, which keeps updates efficient.

---

## In network operations

- **NOC:** Monitor BGP peer status, session flaps, and route changes to detect coupling or routing anomalies.  
- **ISP:** Use BGP for peering and traffic engineering, selecting upstream paths based on cost, latency, and performance criteria.  
- **Security:** Detect BGP hijacking and policy violations by monitoring unexpected route origins or AS‑path changes.

---

## eBGP vs iBGP

| Dimension | eBGP | iBGP |
|-----------|------|------|
| Scope | Between different ASes | Within the same AS |
| Use case | Internet peering and transit | Internal route consistency and backbone routing |
| TTL | 1 for the BGP session (across AS boundary) | 255 within the AS |
| Next hop behavior | Often modified at AS boundary | Preserved across internal routers |

---

## In Trisul

Trisul enriches flow records with BGP‑derived attributes such as source and destination ASN, BGP next hop, and communities. This enables operators to segment and query traffic by autonomous system in Explore Flows and dashboards, and to support peering‑aware and policy‑driven traffic analysis without requiring packet‑level inspection.

---

## Related terms

- BGP
- Border Gateway Protocol
- ASN
- Flow monitoring
- Peering
- CIDR
- Transit provider

---

## Frequently asked questions

### What are the two types of BGP?

eBGP (External BGP) exchanges routing information between routers in different autonomous systems. iBGP (Internal BGP) exchanges routing information between routers within the same autonomous system. eBGP is used for Internet peering and transit; iBGP is used for internal route consistency inside an AS.

### How does BGP select the best path?

BGP evaluates path attributes including Weight (Cisco‑specific, higher is preferred), Local Preference (higher is preferred), Autonomous System Path (shorter is preferred), and Next Hop. The router selects the path with the most favorable attributes according to its local policy configuration and the configured attribute‑processing order.

### What port does BGP use?

BGP runs over TCP port 179. BGP peers establish a TCP connection before exchanging routing information. This reliance on TCP makes BGP more reliable than routing protocols that run directly over IP without a transport‑layer acknowledgment scheme.

### How is BGP used in flow monitoring?

Flow monitoring enriches flow records with BGP attributes including source and destination ASN, BGP next hop, and communities. This enables traffic analysis by autonomous system, peering analysis, and identification of traffic patterns by routing path, helping operators understand how routing decisions shape traffic behavior.