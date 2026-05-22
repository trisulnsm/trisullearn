---
title: What is ASN peering?
description: ASN peering establishes BGP peering relationships between two Autonomous Systems to exchange routing information and traffic directly.
sidebar_label: ASN peering
sidebar_position: 40
slug: /glossary/asn-peering
keywords:
  - asn peering
  - bgp peering
  - internet peering
  - autonomous system peering
  - peering policy
  - settlement free peering
  - paid peering
  - BGP analytics
  - peering analytics
  - flow monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is ASN Peering?",
  "description": "ASN peering establishes BGP peering relationships between two Autonomous Systems to exchange routing information and traffic directly.",
  "about": {
    "@type": "DefinedTerm",
    "name": "ASN Peering",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is ASN peering?

ASN peering establishes **BGP peering relationships** between two Autonomous Systems (AS) to exchange routing information and traffic directly. It reduces transit costs, lowers latency, and improves performance by avoiding intermediary transit providers.

---

## How it works

Peering typically requires a publicly routable ASN and a direct interconnection between the two networks, often at an Internet Exchange Point (IXP) or a colocation facility. The networks exchange routes via eBGP, and traffic then flows directly based on the advertised routes.

The peering process typically involves:
1. **Peering agreement** → Both ASes agree to peer, either settlement-free or paid.
2. **Physical connection** → Establish a link at an IXP or colocation facility.
3. **BGP session setup** → Configure eBGP between peer routers.
4. **Route exchange** → Each AS announces its prefixes to the peer.
5. **Traffic flow** → Traffic flows directly based on the advertised routes.

---

## In network operations

- **NOC:** Monitor BGP peering session status and route count to detect peering failures.
- **ISP:** Use settlement-free peering to reduce transit costs when traffic ratios are balanced.
- **Traffic Engineering:** Optimize exit selection by analyzing traffic flows to specific peer ASes.

Peering data is most useful when combined with traffic visibility that shows volumes and routes per peer.

---

## Peering types

| Type | Description | Best for |
|---|---|---|---|
| Settlement-free | No payment, balanced traffic | Equal-sized networks |
| Paid peering | One party pays the other | Asymmetric traffic |
| Public peering | At an Internet Exchange (IX) | Multiple peers |
| Private peering | Direct connection | Two specific peers |

---

## Peering requirements

| Requirement | Description |
|---|---|
| Publicly routable ASN | Autonomous System Number registered to your organization |
| Dual-stack support | IPv4 and IPv6 peering capability |
| Routable prefix | At least one publicly routable prefix |
| IRR registration | Registration in a public Internet Routing Registry |
| PeeringDB profile | Current peeringdb.com profile |
| 24x7x365 contact | Operational contact with escalation matrix |
| Sufficient capacity | Interconnection capacity to exchange traffic without congestion |

---

## How ASN peering improves performance

ASN peering improves performance by:

- **Reducing hops**: Traffic traverses fewer network hops by going directly between ASes.
- **Eliminating transit**: Removes intermediary transit providers from the path.
- **Reducing latency**: Direct paths typically have lower round-trip times.
- **Improving throughput**: Avoids congestion on transit links when direct links have sufficient capacity.
- **Predictable routing**: Traffic stays on the direct path between the two ASes.
- **Better control**: Direct control over traffic exchange with specific peers.

---

## Trisul relevance

ASN peering is relevant to Trisul Network Analytics when traffic needs to be analyzed by Autonomous System and peering path. The page should avoid claiming specific BGP-derived dashboards or route-topology views unless those features are explicitly documented in official Trisul materials.

## Related terms

- [BGP](/glossary/bgp)
- [ASN](/glossary/asn)
- [BGP peering analytics](/glossary/bgp-peering-analytics)
- [Flow monitoring](/glossary/flow-monitoring)
- [NetFlow](/glossary/netflow)
- [Internet Exchange Point](/glossary/ixp)
- [Transit](/glossary/transit)
- [eBGP](/glossary/ebgp)
- [Route server](/glossary/route-server)
- [Traffic engineering](/glossary/traffic-engineering)
- [Peering policy](/glossary/peering-policy)
- [Explore Flows](/glossary/explore-flows)
- [Aggregate Flows](/glossary/aggregate-flows)

---

## Frequently asked questions

### What are the requirements for ASN peering?

Peering requirements include a publicly routable ASN, a direct interconnection, at least one publicly routable prefix, registration in a public Internet Routing Registry, a current PeeringDB profile, and operational contact details. Interconnection must also have sufficient capacity to exchange traffic without congestion.

### What is the difference between settlement-free and paid peering?

Settlement-free peering exchanges traffic without payment, typically when traffic ratios are roughly balanced. Paid peering involves one party paying the other, typically when traffic is asymmetric.

### What is public vs private peering?

Public peering occurs at Internet Exchange Points where multiple networks connect to a shared switch and exchange routes. Private peering is a direct connection between two networks, typically at a colocation facility.

### How does ASN peering improve performance?

ASN peering can improve performance by reducing the number of hops traffic must traverse and by avoiding intermediary transit providers. Direct peering may also reduce latency and improve control over traffic exchange.

### How does Trisul support ASN peering analytics?

Trisul should be described here only as providing traffic visibility that can be analyzed by Autonomous System or peer relationship, if those data are available in the deployment.

### What peering decisions can Trisul help inform?

Trisul can help inform peering decisions when traffic is viewed by peer AS, prefix, or interconnection path, but only if those attributes are available from the traffic data and documented product capabilities.