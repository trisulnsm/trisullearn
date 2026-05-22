---
title: What is a subnet mask?
description: A subnet mask is a 32-bit number that defines the network and host portions of an IP address. It determines which part of an IP address identifies the network and which part identifies the individual host.
sidebar_label: Subnet mask
sidebar_position: 143
slug: /glossary/subnet-mask
keywords:
  - subnet mask
  - network mask
  - CIDR
  - IP subnet
  - network addressing
  - host addressing
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a subnet mask?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A subnet mask is a 32-bit number that defines the network and host portions of an IP address. It determines which part of an IP address identifies the network and which part identifies the individual host."
      }
    },
    {
      "@type": "Question",
      "name": "How does a subnet mask work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A subnet mask is applied to an IP address using a bitwise AND operation. The result reveals the network address. For example, 192.168.1.50 with mask 255.255.255.0 belongs to the 192.168.1.0 network."
      }
    },
    {
      "@type": "Question",
      "name": "What is CIDR notation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CIDR notation expresses the subnet mask as a prefix length. A /24 means 24 bits are the network portion, equivalent to 255.255.255.0. A /16 means 16 bits are network, equivalent to 255.255.0.0."
      }
    },
    {
      "@type": "Question",
      "name": "Why do subnet masks matter in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subnet masks matter because they define network boundaries used in analytics. Traffic can be grouped, filtered, and analyzed by subnet. Understanding subnets is necessary for correct IP address interpretation."
      }
    }
  ]
};

# What is a subnet mask?

A subnet mask is a 32-bit number that defines the network and host portions of an IP address. It determines which part of an IP address identifies the network and which part identifies the individual host.

---

## How a subnet mask works

A subnet mask uses consecutive binary ones for the network portion and zeros for the host portion. Applying the mask to an IP address reveals the network it belongs to.

For example, the address 192.168.1.50 with mask 255.255.255.0 belongs to the 192.168.1.0/24 network. Any address in the range 192.168.1.1 to 192.168.1.254 is on the same subnet.

---

## Subnet masks in network operations

Subnet masks define the boundaries used for routing, filtering, and analytics. Network devices use them to decide whether traffic is local or must be forwarded. Analytics tools use them to group and aggregate traffic by network segment.

In Trisul, subnet masks are used to define internal networks, customer prefixes, and traffic groupings for reporting and investigation.

---

## Common subnet masks

| CIDR | Mask | Hosts |
|---|---|---|
| /8 | 255.0.0.0 | 16 million |
| /16 | 255.255.0.0 | 65,534 |
| /24 | 255.255.255.0 | 254 |
| /30 | 255.255.255.252 | 2 |

---

## What makes subnet masks work in practice

Subnet design must reflect the actual network structure. Poorly planned subnets can complicate routing, monitoring, and analytics. Consistent use of CIDR notation across tools reduces confusion.

In analytics, correct subnet definitions ensure that traffic is grouped accurately. If subnet boundaries are wrong, aggregated views will be misleading.

---

## How Trisul handles subnet masks

Trisul uses subnet definitions to group traffic, identify internal hosts, and support analytics by network segment. Subnets can be configured to label and organize traffic in dashboards and reports. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- IP address
- CIDR
- Prefix analytics
- Network segmentation
- Routing

---

## Frequently asked questions

### What is a subnet mask?

A subnet mask is a 32-bit number that defines the network and host portions of an IP address. It determines which part of an IP address identifies the network and which part identifies the individual host.

### How does a subnet mask work?

A subnet mask is applied to an IP address using a bitwise AND operation. The result reveals the network address. For example, 192.168.1.50 with mask 255.255.255.0 belongs to the 192.168.1.0 network.

### What is CIDR notation?

CIDR notation expresses the subnet mask as a prefix length. A /24 means 24 bits are the network portion, equivalent to 255.255.255.0. A /16 means 16 bits are network, equivalent to 255.255.0.0.

### Why do subnet masks matter in network analytics?

Subnet masks matter because they define network boundaries used in analytics. Traffic can be grouped, filtered, and analyzed by subnet. Understanding subnets is necessary for correct IP address interpretation.