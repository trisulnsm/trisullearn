---
title: What is ASN?
description: An ASN (Autonomous System Number) is a unique identifier assigned to an Autonomous System, a group of IP prefixes managed by a single organization with a common routing policy.
sidebar_label: ASN
sidebar_position: 39
slug: /glossary/asn
keywords:
  - asn
  - autonomous system number
  - autonomous system
  - bgp routing
  - asn number
  - internet routing
  - as number
  - flow monitoring
  - BGP analytics
  - peering analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is ASN (Autonomous System Number)?",
  "description": "An ASN (Autonomous System Number) is a unique identifier assigned to an Autonomous System, a group of IP prefixes managed by a single organization with a common routing policy.",
  "about": {
    "@type": "DefinedTerm",
    "name": "ASN (Autonomous System Number)",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is ASN?

An ASN (**Autonomous System Number**) is a unique identifier assigned to an **Autonomous System**—a group of IP prefixes managed by a single organization with a common routing policy. ASNs are used by BGP for routing on the Internet. ASN values may be 16-bit or 32-bit, depending on the allocation and BGP implementation.

---

## How it works

Each AS is assigned a globally unique ASN by a regional internet registry under the Internet number resource allocation system. BGP uses ASNs to identify routing domains and build AS paths for route selection.

The ASN assignment and usage process:
1. **IANA allocation** → IANA allocates ASN ranges to Regional Internet Registries (RIRs).
2. **RIR assignment** → RIRs assign ASNs to organizations.
3. **BGP configuration** → The organization configures BGP with its ASN on routers.
4. **Route announcement** → The AS announces its IP prefixes to peers using its ASN.
5. **AS path building** → BGP routers build AS paths showing the route through multiple ASes.

---

## In network operations

- **NOC:** Monitor traffic by source and destination ASN to identify top ASes driving traffic.
- **ISP:** Use ASNs for BGP peering, transit selection, and traffic engineering.
- **Security:** Detect anomalies by monitoring traffic from unexpected ASNs or AS path changes.

ASN-based analysis is useful wherever traffic needs to be viewed in routing context rather than only by IP address.

---

## ASN formats

| Format | Bits | Range | Status |
|---|---|---|---|
| 16-bit ASN | 16-bit | 0 to 65,535 | Still valid |
| 32-bit ASN | 32-bit | 0 to 4,294,967,295 | Current standard |

Modern BGP supports both 16-bit and 32-bit ASN values, although 32-bit ASN space is now widely used.

---

## Public vs private ASN

| Dimension | Public ASN | Private ASN |
|---|---|---|---|
| Routing | Globally routable | Internal only |
| Range (16-bit) | 1 to 64,511 | 64,512 to 65,535 |
| Range (32-bit) | 1 to 4,199,999,999 | 4,200,000,000 to 4,294,967,294 |
| Visibility | Global routing table | Not visible globally |
| Use case | Internet peering, transit | Internal networks, lab environments |

Public ASNs are used for Internet peering and transit relationships. Private ASNs are typically used for internal routing and are not intended for global routing advertisements.

---

## ASN uses in networking

| Use Case | Purpose |
|---|---|
| BGP routing | Identify routing domains and build AS paths |
| Internet peering | Establish BGP peering relationships between ASes |
| Transit relationships | Identify upstream and downstream providers |
| Traffic engineering | Optimize routes based on AS path characteristics |
| Security | Detect traffic from unexpected or malicious ASes |
| Accounting | Track traffic volumes per autonomous system for billing |

---

## Trisul relevance

ASN is relevant to Trisul Network Analytics when flow data needs to be analyzed in routing context, such as by source or destination autonomous system. The page should avoid claiming specific BGP-enrichment or ASN-dashboard features unless those are explicitly documented in official Trisul materials.

## Related terms

- [BGP](/glossary/bgp)
- [Flow monitoring](/glossary/flow-monitoring)
- [BGP peering analytics](/glossary/bgp-peering-analytics)
- [Top-K analytics](/glossary/top-k-analytics)
- [ASN peering](/glossary/asn-peering)
- [NetFlow](/glossary/netflow)
- [Internet peering](/glossary/internet-peering)
- [Transit](/glossary/transit)
- [AS path](/glossary/as-path)
- [Regional Internet Registry](/glossary/rir)
- [Explore Flows](/glossary/explore-flows)
- [Aggregate Flows](/glossary/aggregate-flows)
- [Rule Builder](/glossary/rule-builder)
- [Peering dashboards](/glossary/peering-dashboards)

---

## Frequently asked questions

### What is an Autonomous System?

An Autonomous System (AS) is a group of one or more IP prefixes run by a single organization that maintains a common routing policy. Each AS is assigned a unique Autonomous System Number (ASN) for routing purposes.

### What are the two ASN formats?

A 16-bit ASN is the original format and remains valid. A 32-bit ASN extends the address space and is now widely used in modern BGP deployments.

### What is the difference between public and private ASNs?

Public ASNs are globally routable and visible in the global routing table. Private ASNs are reserved for internal use and are not intended for global routing advertisements. Public ASNs are used for Internet peering.

### How is ASN used in flow monitoring?

Flow monitoring can use ASN context to analyze traffic by autonomous system, peering relationship, or routing path. This helps operators understand where traffic is coming from and where it is going.

### How does Trisul use ASN in flow analytics?

Trisul should be described here only as providing traffic analysis that can be organized by routing context when such data is available in the deployment.

### Why is ASN important for ISPs?

ASN is essential for ISPs because it enables BGP peering relationships, transit selection, traffic engineering based on AS paths, and traffic analysis by autonomous system for capacity planning and billing.