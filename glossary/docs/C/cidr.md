---
title: What is CIDR?
description: CIDR (Classless Inter-Domain Routing) is a method for IP address allocation and routing that uses variable-length subnet masks instead of fixed classes, expressed in CIDR notation as an IP address followed by a slash and prefix length.
sidebar_label: CIDR
sidebar_position: 29
slug: /glossary/cidr
keywords:
  - cidr
  - classless inter-domain routing
  - cidr notation
  - slash notation
  - subnet mask
  - ip addressing
  - ip subnetting
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is CIDR notation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CIDR notation is written as an IP address followed by a slash and the number of bits in the network prefix, like 192.168.1.0/24. The number after the slash indicates how many bits are fixed for the network, with the remaining bits for hosts. 192.168.1.0/24 means the first 24 bits are network and the last 8 bits identify hosts."
      }
    },
    {
      "@type": "Question",
      "name": "How does CIDR differ from classful addressing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Classful addressing uses fixed classes: Class A uses /8, Class B uses /16, Class C uses /24. CIDR allows any prefix length, so addresses can be allocated in blocks that match actual needs instead of wasted fixed classes. This flexibility reduces IP address waste and improves routing efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "What are CIDR blocks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CIDR block is a range of IP addresses with a fixed prefix. The block size must be a power of 2, and the first address must be evenly divisible by the block size. For example, 192.168.1.0/24 is a block of 256 addresses, and 192.168.0.0/16 is a block of 65,536 addresses."
      }
    },
    {
      "@type": "Question",
      "name": "How is CIDR used in flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring uses CIDR notation to group flows by customer subnets, ASN ranges, or geographic regions. Queries can filter by CIDR block to retrieve all flows from a subnet, and reports can aggregate traffic by CIDR-defined customer or service boundaries."
      }
    }
  ]
};

# What is CIDR?

CIDR (Classless Inter-Domain Routing) is a method for IP address allocation and routing that uses variable-length subnet masks instead of fixed classes. Expressed in CIDR notation as an IP address followed by a slash and prefix length, CIDR allows more efficient IP address use and improved routing aggregation.

---

## How it works

CIDR notation like 192.168.1.0/24 specifies the network prefix length: the first 24 bits are fixed for the network, and the remaining 8 bits identify hosts. CIDR blocks must be powers of 2 in size, and the first address must be evenly divisible by the block size.

---

## In network operations

- **NOC:** Use CIDR blocks to group customer subnets for per-customer traffic aggregation.
- **SOC:** Filter flows by CIDR to identify activity from a specific subnet or threat range.
- **ISP:** Aggregate routes by CIDR block to reduce routing table size and improve efficiency.

---

## CIDR vs classful addressing

| Dimension | Classful | CIDR |
|---|---|---|
| Prefix length | Fixed per class (/8, /16, /24) | Any value from 0 to 32 |
| Wastage | High due to fixed blocks | Low, matches actual needs |
| Routing efficiency | Limited aggregation | Better aggregation |
| Flexibility | None | High |

---

## How Trisul handles it

Trisul uses CIDR notation to group flows by subnet, ASN, or region in queries and reports. CIDR-based filters let operators retrieve all flows from a customer block or threat range in a single query. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is subnet mask?](/glossary/subnet-mask)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is ASN?](/glossary/asn)
- [What is IP address?](/glossary/ip-address)
- [What is flow tagger?](/glossary/flow-tagger)

---

## Frequently asked questions

### What is CIDR notation?

CIDR notation is written as an IP address followed by a slash and the number of bits in the network prefix, like 192.168.1.0/24. The number after the slash indicates how many bits are fixed for the network, with the remaining bits for hosts. 192.168.1.0/24 means the first 24 bits are network and the last 8 bits identify hosts.

### How does CIDR differ from classful addressing?

Classful addressing uses fixed classes: Class A uses /8, Class B uses /16, Class C uses /24. CIDR allows any prefix length, so addresses can be allocated in blocks that match actual needs instead of wasted fixed classes. This flexibility reduces IP address waste and improves routing efficiency.

### What are CIDR blocks?

A CIDR block is a range of IP addresses with a fixed prefix. The block size must be a power of 2, and the first address must be evenly divisible by the block size. For example, 192.168.1.0/24 is a block of 256 addresses, and 192.168.0.0/16 is a block of 65,536 addresses.

### How is CIDR used in flow monitoring?

Flow monitoring uses CIDR notation to group flows by customer subnets, ASN ranges, or geographic regions. Queries can filter by CIDR block to retrieve all flows from a subnet, and reports can aggregate traffic by CIDR-defined customer or service boundaries.