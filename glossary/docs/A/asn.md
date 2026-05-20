---
title: What is ASN?
description: An ASN (Autonomous System Number) is a unique identifier assigned to an Autonomous System—a group of IP prefixes managed by a single organization with a common routing policy, used for BGP routing on the Internet.
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
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an Autonomous System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Autonomous System (AS) is a group of one or more IP prefixes run by one or more network operators that maintain a single, clearly-defined routing policy. Each AS is assigned a globally unique Autonomous System Number (ASN) by IANA for routing purposes."
      }
    },
    {
      "@type": "Question",
      "name": "What are the two ASN formats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2-byte ASN is a 16-bit number providing 65,536 ASNs (0 to 65535), but this space is now exhausted. A 4-byte ASN is a 32-bit number providing 4.3 billion ASNs (0 to 4294967295). There is no longer a distinction between 2-byte and 4-byte ASNs—all are considered 4-byte."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between public and private ASNs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Public ASNs are globally routable and visible in the global routing table. Private ASNs (64512 to 65535 for 2-byte, 4200000000 to 4294967294 for 4-byte) are reserved for internal use and cannot be visible in the global routing table. Public ASNs are required for Internet peering."
      }
    },
    {
      "@type": "Question",
      "name": "How is ASN used in flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring enriches flow records with source ASN and destination ASN from BGP data. This enables traffic analysis by autonomous system, peering analysis, and identification of traffic patterns by routing path. ASN is used in Top-K analytics for per-AS traffic ranking."
      }
    }
  ]
};

# What is ASN?

An ASN (Autonomous System Number) is a unique identifier assigned to an Autonomous System—a group of IP prefixes managed by a single organization with a common routing policy. ASNs are used by BGP for routing on the Internet. ASNs can be 2-byte (16-bit) or 4-byte (32-bit), with the 4-byte format now standard.

---

## How it works

Each AS is assigned a globally unique ASN by IANA. ASNs 1 to 64511 are available for global use. ASNs 64512 to 65535 are reserved for private use. BGP uses ASNs to identify routing domains and build AS paths for route selection.

---

## In network operations

- **NOC:** Monitor traffic by source and destination ASN to identify top ASes driving traffic.
- **ISP:** Use ASNs for BGP peering, transit selection, and traffic engineering.
- **Security:** Detect anomalies by monitoring traffic from unexpected ASNs or AS path changes.

---

## Public vs private ASN

| Dimension | Public ASN | Private ASN |
|---|---|---|
| Routing | Globally routable | Internal only |
| Range | 1 to 64511 | 64512 to 65535 |
| Visibility | Global routing table | Not visible globally |
| Use case | Internet peering | Internal networks |

---

## How Trisul handles it

Trisul enriches flow records with source and destination ASN from BGP data. This enables querying and reporting by autonomous system in Explore Flows and dashboards. Top-K analytics provides per-AS traffic ranking. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is BGP?](/glossary/bgp)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is peering?](/glossary/peering)
- [What is BGP peering analytics?](/glossary/bgp-peering-analytics)
- [What is Top-K analytics?](/glossary/top-k-analytics)

---

## Frequently asked questions

### What is an Autonomous System?

An Autonomous System (AS) is a group of one or more IP prefixes run by one or more network operators that maintain a single, clearly-defined routing policy. Each AS is assigned a globally unique Autonomous System Number (ASN) by IANA for routing purposes.

### What are the two ASN formats?

A 2-byte ASN is a 16-bit number providing 65,536 ASNs (0 to 65535), but this space is now exhausted. A 4-byte ASN is a 32-bit number providing 4.3 billion ASNs (0 to 4294967295). There is no longer a distinction between 2-byte and 4-byte ASNs—all are considered 4-byte.

### What is the difference between public and private ASNs?

Public ASNs are globally routable and visible in the global routing table. Private ASNs (64512 to 65535 for 2-byte, 4200000000 to 4294967294 for 4-byte) are reserved for internal use and cannot be visible in the global routing table. Public ASNs are required for Internet peering.

### How is ASN used in flow monitoring?

Flow monitoring enriches flow records with source ASN and destination ASN from BGP data. This enables traffic analysis by autonomous system, peering analysis, and identification of traffic patterns by routing path. ASN is used in Top-K analytics for per-AS traffic ranking.