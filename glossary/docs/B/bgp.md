---
title: What is BGP?
description: BGP (Border Gateway Protocol) is the inter-domain routing protocol used to exchange network reachability information between autonomous systems. Trisul supports BGP-aware traffic analysis through ASN and routing-enriched flow visibility.
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
  "description": "BGP (Border Gateway Protocol) is the inter-domain routing protocol used to exchange network reachability information between autonomous systems. Trisul supports BGP-aware traffic analysis through ASN and routing-enriched flow visibility.",
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

**BGP (Border Gateway Protocol)** is the inter-domain routing protocol used to exchange network reachability information between autonomous systems (ASes) on the Internet.

BGP is responsible for:
- Internet route exchange
- Policy-based routing decisions
- Inter-provider connectivity
- Traffic engineering between networks

BGP operates over **TCP port 179** and uses routing attributes and policies to determine preferred paths between networks.

Trisul supports BGP-aware traffic analysis through ASN and routing-enriched flow visibility.

---

## How it works

BGP peers establish TCP sessions and exchange routing information about reachable IP prefixes and associated path attributes.

BGP routing decisions are influenced by:
- AS Path
- Local Preference
- MED (Multi-Exit Discriminator)
- Next Hop
- Communities
- Local routing policies

Typical BGP workflow:

1. **Peer establishment** → Routers establish BGP sessions over TCP port 179
2. **Route exchange** → Peers exchange routing information for reachable prefixes
3. **Path evaluation** → Routers evaluate candidate routes using BGP attributes and policy
4. **Best-path selection** → Preferred routes are selected and installed
5. **Route advertisement** → Selected routes are propagated to peers
6. **Incremental updates** → Route changes are advertised dynamically without retransmitting the full table

The AS Path attribute helps prevent routing loops between autonomous systems.

---

## In network operations

BGP is central to ISP, carrier, and Internet edge operations.

Typical operational use cases include:

- **Peering management**: Exchange routes with peers and upstream providers
- **Traffic engineering**: Influence inbound and outbound traffic paths
- **Redundancy and failover**: Maintain multiple external routing paths
- **Route monitoring**: Detect routing instability or unexpected changes
- **Security analysis**: Investigate route hijacking or anomalous route advertisements

Trisul supports BGP-related traffic analysis through flow telemetry enriched with ASN and routing context.

---

## eBGP vs iBGP

| Dimension | eBGP (External BGP) | iBGP (Internal BGP) |
|---|---|---|
| Scope | Between different ASes | Within the same AS |
| Primary use | Internet and inter-provider routing | Internal route distribution |
| Administrative boundary | Crosses AS boundaries | Remains inside one AS |
| Typical deployment | Edge routers | Internal routing infrastructure |
| Routing purpose | External connectivity | Internal route consistency |

eBGP is primarily used for inter-network routing, while iBGP distributes external routes internally within an autonomous system.

---

## BGP path attributes

| Attribute | Description | Preference behavior |
|---|---|---|
| Weight | Vendor-specific local preference attribute | Higher preferred |
| Local Preference | Preferred outbound routing path | Higher preferred |
| AS Path | Sequence of traversed ASes | Shorter generally preferred |
| Next Hop | Next router toward destination | Must be reachable |
| MED | Suggested inbound entry preference | Lower generally preferred |
| Communities | Routing policy tags | Policy-dependent |

BGP uses these attributes together with routing policy to select preferred paths.

---

## BGP message types

| Message Type | Purpose |
|---|---|
| OPEN | Establish BGP session |
| UPDATE | Advertise or withdraw routes |
| KEEPALIVE | Maintain peer session |
| NOTIFICATION | Report errors and terminate session |

---

## How BGP is used in flow monitoring

Flow monitoring systems can enrich traffic telemetry with routing metadata derived from BGP.

Common enrichments include:

| BGP Attribute | Use in flow analytics |
|---|---|
| Source ASN | Identify originating Autonomous System |
| Destination ASN | Identify destination Autonomous System |
| Next Hop | Analyze routing path behavior |
| Communities | Apply policy-aware traffic analysis |
| Prefix association | Analyze traffic by routed prefix |

This enables:
- ASN-based traffic visibility
- Peering traffic analysis
- Transit utilization analysis
- Prefix-level traffic investigation
- Routing-aware traffic engineering workflows

---

## How Trisul handles BGP

Trisul supports BGP-aware traffic analytics using flow telemetry enriched with routing context.

Relevant capabilities include:

- **ASN-enriched flow visibility** for traffic analysis by Autonomous System
- **Flow telemetry analysis** using NetFlow, IPFIX, sFlow, and J-Flow
- **Traffic analysis by ASN and prefix**
- **BGP-aware peering analytics workflows**
- **Top-K traffic analysis** for identifying high-volume ASNs and routing entities
- **Historical traffic trending** by ASN and routing metadata
- **Explore Flows integration** for ASN and route-oriented investigation

These capabilities help operators analyze peering traffic, routing behavior, transit utilization, and ASN-level traffic distribution.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-network-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#capacity-planning

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
- [Route collector](/glossary/route-collector)

---

## Frequently asked questions

### What are the two types of BGP?

eBGP exchanges routing information between different autonomous systems, while iBGP distributes routing information within the same autonomous system.

### How does BGP select the best path?

BGP evaluates routing attributes such as Local Preference, AS Path, MED, Next Hop, and policy rules to determine preferred routing paths.

### What port does BGP use?

BGP operates over TCP port 179.

### How is BGP used in flow monitoring?

Flow telemetry can be enriched with ASN and routing metadata to enable traffic analysis by Autonomous System, prefix, routing path, and peering relationship.

### How does Trisul integrate with BGP?

Trisul supports BGP-aware traffic analysis by correlating flow telemetry with ASN and routing metadata for traffic visibility and peering analytics workflows.

### What BGP analytics can Trisul provide?

Trisul supports ASN-oriented traffic visibility, peering traffic analysis, prefix-based traffic investigation, Top-K ASN analysis, and routing-aware traffic trending.