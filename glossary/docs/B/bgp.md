---
title: What is BGP?
description: BGP (Border Gateway Protocol) is the routing protocol for the Internet that exchanges network reachability information between autonomous systems. Trisul enriches flow records with BGP attributes including source/destination ASN, BGP next hop, and communities for traffic analysis.
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
  - flow monitoring
  - ASN analytics
  - peering analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is BGP (Border Gateway Protocol)?",
  "description": "BGP (Border Gateway Protocol) is the routing protocol for the Internet that exchanges network reachability information between autonomous systems. Trisul enriches flow records with BGP attributes including source/destination ASN, BGP next hop, and communities for traffic analysis.",
  "about": {
    "@type": "DefinedTerm",
    "name": "BGP (Border Gateway Protocol)",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is BGP?

**BGP (Border Gateway Protocol)** is the routing protocol for the Internet that exchanges network reachability information between autonomous systems. It selects the best path based on policies and path attributes like Weight, Local Preference, and AS Path. BGP runs over TCP port 179 and supports CIDR. Trisul enriches flow records with BGP attributes for traffic analysis by autonomous system.

---

## How it works

BGP peers establish a TCP connection and exchange reachability information including the destination network and AS path. BGP constructs an AS connectivity graph to prevent routing loops and enforce policy decisions. When routes change, BGP advertises only the delta rather than the full routing table.

The BGP operation process:
1. **Peer establishment** → BGP peers establish TCP connection on port 179
2. **Initial exchange** → Peers exchange full routing tables
3. **Update mechanism** → Only route changes (deltas) are advertised thereafter
4. **Path selection** → BGP evaluates path attributes to select best path
5. **Route propagation** → Selected routes are advertised to other peers
6. **Loop prevention** → AS Path attribute prevents routing loops

---

## In network operations

- **NOC:** Monitor BGP peer status and route changes to detect coupling or routing anomalies.
- **ISP:** Use BGP for peering and traffic engineering, selecting upstream paths based on cost and performance.
- **Security:** Detect BGP hijacking by monitoring for unexpected route origin changes or AS path anomalies.

Trisul supports all three operational use cases through BGP-enriched flow monitoring and BGP peering analytics.

---

## eBGP vs iBGP

| Dimension | eBGP (External BGP) | iBGP (Internal BGP) |
|---|---|---|
| Scope | Between different ASes | Within the same AS |
| Use case | Internet peering | Internal route consistency |
| TTL | 1 | 255 |
| Next hop | Changes at AS boundary | Preserved across AS |
| Where used | Edge routers connecting to peers/upstreams | Internal routers within an AS |

eBGP is used for Internet peering; iBGP is used for internal route consistency.

---

## BGP path attributes

| Attribute | Description | Selection preference |
|---|---|---|
| Weight | Cisco-specific, locally significant | Higher is preferred |
| Local Preference | Indicates preference for exit path | Higher is preferred |
| AS Path | List of ASes the route has traversed | Shorter is preferred |
| Next Hop | IP address of next router | Best reachable next hop |
| MED (Multi-Exit Discriminator) | Suggests entry point to相邻 AS | Lower is preferred |
| Communities | Tag for routing policy | Policy-dependent |

BGP evaluates these path attributes to select the best path according to local policy configuration.

---

## BGP message types

| Message Type | Purpose |
|---|---|
| OPEN | Establish BGP peer connection |
| UPDATE | Advertise or withdraw routes |
| KEEPALIVE | Maintain peer connection |
| NOTIFICATION | Report errors and close connection |

---

## How is BGP used in flow monitoring

Flow monitoring enriches flow records with BGP attributes:

| BGP Attribute | Flow Record Field | Use Case |
|---|---|---|
| Source ASN | Source Autonomous System Number | Traffic analysis by originating AS |
| Destination ASN | Destination Autonomous System Number | Traffic analysis by destination AS |
| BGP Next Hop | Next Hop IP Address | Route path analysis |
| Communities | BGP Community Tags | Policy-based traffic classification |

This enables traffic analysis by autonomous system, peering analysis, and identification of traffic patterns by routing path.

---

## How Trisul handles BGP

Trisul provides comprehensive BGP integration for network analytics:

- **BGP-enriched flow records**: Trisul enriches flow records (NetFlow, J-Flow, sFlow, IPFIX) with BGP attributes including source and destination ASN, BGP next hop, and communities, enabling traffic analysis by autonomous system rather than just IP address
- **Explore Flows by BGP attributes**: Query and report by autonomous system in Trisul's Explore Flows, investigating traffic patterns to/from specific ASes with full BGP metadata
- **BGP peering analytics**: Trisul's ISP Peering Analytics combines flow data with BGP routing information to analyze traffic per AS, per prefix, and per peering interface in real time
- **ASN traffic analysis**: Trisul provides Top-K analytics for per-AS traffic ranking, identifying top source ASes, top destination ASes, and traffic patterns by autonomous system
- **BGP peering EEG**: Trisul's BGP peering EEG (Executive Executive Graph) enables real-time monitoring of active route topology and ASN relationships
- **Route analytics dashboards**: Trisul dashboards present BGP route topology, AS peerings, and prefix analysis for at-a-glance BGP visibility
- **Aggregate Flows by ASN**: Summarize traffic by source ASN or destination ASN over time for trending and capacity planning
- **BGP route receiver**: Trisul has an inbuilt BGP route receiver that automatically receives BGP routing information and keeps it in sync with traffic tables

Trisul enriches flow records with BGP attributes including source and destination ASN, BGP next hop, and communities. This enables querying and reporting by autonomous system in Explore Flows and dashboards for comprehensive BGP-based traffic analysis.

---

## Related terms

- [ASN](/glossary/asn)
- [Flow monitoring](/glossary/flow-monitoring)
- [CIDR](/glossary/cidr)
- [BGP peering analytics](/glossary/bgp-peering-analytics)
- [ASN peering](/glossary/asn-peering)
- [NetFlow](/glossary/netflow)
- [Autonomous System](/glossary/autonomous-system)
- [AS Path](/glossary/as-path)
- [Route hijacking](/glossary/route-hijacking)
- [Traffic engineering](/glossary/traffic-engineering)
- [Explore Flows](/glossary/explore-flows)
- [Top-K analytics](/glossary/top-k-analytics)
- [BGP peering EEG](/glossary/bgp-peering-eeg)
- [Route collector](/glossary/route-collector)

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

### How does Trisul integrate with BGP?

Trisul integrates with BGP by enriching NetFlow, J-Flow, sFlow, and IPFIX records with BGP attributes (source/destination ASN, BGP next hop, communities), providing BGP peering analytics with real-time route topology monitoring, and including an inbuilt BGP route receiver that stays in sync with traffic tables.

### What BGP analytics can Trisul provide?

Trisul provides BGP analytics including traffic per AS number, traffic per prefix, traffic per peering interface, ASN traffic ranking through Top-K analytics, real-time route topology through BGP peering EEG, and comprehensive peering dashboards for AS peerings, prefix analysis, and route analytics.