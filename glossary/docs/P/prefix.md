---
title: What is a prefix?
description: A prefix is a contiguous block of IP addresses identified by a network address and prefix length, such as 192.0.2.0/24. It is used for routing, grouping, and traffic analysis.
sidebar_label: Prefix
sidebar_position: 182
slug: /glossary/prefix
keywords:
  - prefix
  - IP prefix
  - network prefix
  - CIDR
  - subnet
  - routing prefix
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a prefix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prefix is a contiguous block of IP addresses identified by a network address and prefix length, such as 192.0.2.0/24. It is used for routing, grouping, and traffic analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How is a prefix written?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prefix is written in CIDR notation, such as 10.0.0.0/8 or 192.168.1.0/24. The number after the slash shows how many bits belong to the network."
      }
    },
    {
      "@type": "Question",
      "name": "Why are prefixes important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prefixes are important because routing and analytics often work on groups of addresses rather than individual hosts. They help summarize traffic by subnet or network."
      }
    },
    {
      "@type": "Question",
      "name": "How are prefixes used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prefixes are used to group traffic by subnet, BGP announcement, customer network, or geographic block. They are common in prefix analytics and routing analysis."
      }
    }
  ]
};

# What is a prefix?

A prefix is a contiguous block of IP addresses identified by a network address and prefix length, such as 192.0.2.0/24. It is used for routing, grouping, and traffic analysis.

---

## How a prefix works

A prefix is written in CIDR notation. The network address identifies the block, and the suffix length tells how many bits belong to the network portion.

For example, 10.0.0.0/8 is a large block, while 192.168.1.0/24 is a smaller one. Prefixes help define address groups cleanly.

---

## Prefixes in network operations

Prefixes are used everywhere in routing and subnetting. They let operators think in terms of blocks of addresses instead of individual IPs.

In analytics, prefixes help group traffic by network segment, provider, or destination block. That makes reporting more meaningful.

---

## Prefix examples

| Prefix | Typical size |
|---|---|
| /8 | Very large block |
| /16 | Medium block |
| /24 | Small block |
| /32 | Single host |

---

## What makes prefixes useful

Prefixes simplify classification and routing. They also make it easier to describe traffic at a higher level than individual hosts.

The key is using the correct prefix boundaries. If the block is defined incorrectly, reporting and filtering become misleading.

---

## How Trisul handles prefixes

Trisul can group traffic by prefix to help operators see which network blocks are carrying the most traffic and how those blocks behave over time.

---

## Related terms

- Subnet mask
- CIDR
- ASN
- Prefix analytics
- IP address