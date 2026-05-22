---
title: What is an IP address?
description: An IP address is a unique numerical label assigned to every device on a network. It identifies the source and destination of traffic and is the foundation of all network routing and analytics.
sidebar_label: IP address
sidebar_position: 144
slug: /glossary/ip-address
keywords:
  - IP address
  - IPv4
  - IPv6
  - network addressing
  - host identity
  - traffic analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an IP address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IP address is a unique numerical label assigned to every device on a network. It identifies the source and destination of traffic and is the foundation of all network routing and analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between IPv4 and IPv6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPv4 uses 32-bit addresses written in dotted decimal notation such as 192.168.1.1. IPv6 uses 128-bit addresses written in hexadecimal notation such as 2001:db8::1. IPv6 was created to address the exhaustion of IPv4 addresses."
      }
    },
    {
      "@type": "Question",
      "name": "Why are IP addresses important in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP addresses are the primary identifier for traffic in network analytics. Every flow record, packet, and alert is associated with source and destination IP addresses. All traffic analysis starts with IP address visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between public and private IP addresses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Public IP addresses are globally routable on the internet. Private IP addresses are used inside networks and are not directly reachable from the internet. NAT translates between private and public addresses at network boundaries."
      }
    }
  ]
};

# What is an IP address?

An IP address is a unique numerical label assigned to every device on a network. It identifies the source and destination of traffic and is the foundation of all network routing and analytics.

---

## How IP addresses work

Every packet on a network carries a source IP address and a destination IP address. Routers use these addresses to decide how to forward each packet toward its destination.

IPv4 uses 32-bit addresses providing about 4 billion unique values. IPv6 uses 128-bit addresses providing a far larger address space. Both are widely used in modern networks.

---

## IP addresses in network operations

IP addresses are the primary key for all network analytics. Traffic is aggregated, filtered, and investigated by IP address. Identifying which hosts are active, which are generating the most traffic, and which are contacting suspicious destinations all depend on IP address visibility.

Mapping IP addresses to meaningful names, subnets, and subscribers makes analytics much more useful. Raw IP addresses alone are harder to interpret than labeled ones.

---

## IP address types

| Type | Description |
|---|---|
| Public IPv4 | Globally routable internet address |
| Private IPv4 | Internal network address (RFC 1918) |
| IPv6 | 128-bit next-generation address |
| Loopback | Local device address (127.0.0.1) |

---

## What makes IP address visibility work in practice

IP-to-name and IP-to-subnet mapping improves readability. Dashboards showing meaningful labels rather than raw numbers are easier for operators to use.

In NAT environments, the visible IP may not be the original source. Analysts must understand whether they are seeing a translated or original address to interpret traffic correctly.

---

## How Trisul handles IP addresses

Trisul tracks all traffic by IP address and supports labeling, grouping, and enrichment of IP addresses through subnet definitions, host names, and subscriber mapping. This makes IP-level analytics readable and actionable. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Subnet mask
- NAT
- IPv6
- Host monitor
- Subscriber mapping

---

## Frequently asked questions

### What is an IP address?

An IP address is a unique numerical label assigned to every device on a network. It identifies the source and destination of traffic and is the foundation of all network routing and analytics.

### What is the difference between IPv4 and IPv6?

IPv4 uses 32-bit addresses written in dotted decimal notation such as 192.168.1.1. IPv6 uses 128-bit addresses written in hexadecimal notation such as 2001:db8::1. IPv6 was created to address the exhaustion of IPv4 addresses.

### Why are IP addresses important in network analytics?

IP addresses are the primary identifier for traffic in network analytics. Every flow record, packet, and alert is associated with source and destination IP addresses. All traffic analysis starts with IP address visibility.

### What is the difference between public and private IP addresses?

Public IP addresses are globally routable on the internet. Private IP addresses are used inside networks and are not directly reachable from the internet. NAT translates between private and public addresses at network boundaries.