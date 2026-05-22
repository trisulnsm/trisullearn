---
title: What is NAT?
description: NAT, or Network Address Translation, is a method of rewriting IP addresses and ports as traffic passes through a router or gateway. It is commonly used to share public IP addresses and manage private networks.
sidebar_label: NAT
sidebar_position: 130
slug: /glossary/nat
keywords:
  - NAT
  - network address translation
  - address translation
  - CGNAT
  - private IP
  - public IP
  - port translation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT, or Network Address Translation, is a method of rewriting IP addresses and ports as traffic passes through a router or gateway. It is commonly used to share public IP addresses and manage private networks."
      }
    },
    {
      "@type": "Question",
      "name": "How does NAT work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT replaces private source addresses with public addresses as traffic leaves the network and reverses the translation for return traffic. Port translation is often used to distinguish multiple internal sessions that share one public IP."
      }
    },
    {
      "@type": "Question",
      "name": "Why is NAT used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT is used to conserve public IPv4 addresses, hide internal addressing, and support large numbers of users behind shared gateways. It is especially common in enterprise networks and ISP CGNAT environments."
      }
    },
    {
      "@type": "Question",
      "name": "Why is NAT visibility important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT visibility is important because translated addresses can make it harder to identify the original source of traffic. NAT logs and translation records help map traffic back to the correct internal host or subscriber."
      }
    }
  ]
};

# What is NAT?

NAT, or Network Address Translation, is a method of rewriting IP addresses and ports as traffic passes through a router or gateway. It is commonly used to share public IP addresses and manage private networks.

---

## How NAT works

NAT replaces private source addresses with public addresses as traffic leaves the network and reverses the translation for return traffic. Port translation is often used to distinguish multiple internal sessions that share one public IP.

This allows many internal hosts to reach the internet through a smaller pool of public addresses. In ISP environments, large-scale NAT is often called CGNAT.

---

## NAT in network operations

NAT is used to conserve public IPv4 space and to support private addressing inside networks. It is common in home routers, enterprise gateways, and ISP subscriber networks.

For operations teams, NAT can make traffic attribution more complex because many users may share the same public IP address. Translation logs are therefore important for investigation and tracing.

---

## NAT types

| Type | Description |
|---|---|
| Static NAT | Fixed mapping between private and public IPs |
| Dynamic NAT | Translates from a pool of public IPs |
| PAT | Multiple private hosts share one public IP using ports |
| CGNAT | Large-scale NAT used by ISPs |

---

## What makes NAT work in practice

Port tracking is essential when many sessions share one address. Without translation records, it can be difficult to identify which internal host created a connection. Good logging and time synchronization make NAT attribution possible.

NAT also affects visibility in network analytics because the same public source may represent many internal hosts. Analysts need mapping data to interpret traffic correctly.

---

## How Trisul handles NAT

Trisul can correlate flow records with NAT-related information so operators can understand the relationship between public traffic and internal sources. This helps with subscriber attribution, investigation, and traffic analysis in CGNAT environments.

---

## Related terms

- CGNAT
- IP address translation
- Subscriber mapping
- Flow attribution
- Port translation

---

## Frequently asked questions

### What is NAT?

NAT, or Network Address Translation, is a method of rewriting IP addresses and ports as traffic passes through a router or gateway. It is commonly used to share public IP addresses and manage private networks.

### How does NAT work?

NAT replaces private source addresses with public addresses as traffic leaves the network and reverses the translation for return traffic. Port translation is often used to distinguish multiple internal sessions that share one public IP.

### Why is NAT used?

NAT is used to conserve public IPv4 addresses, hide internal addressing, and support large numbers of users behind shared gateways. It is especially common in enterprise networks and ISP CGNAT environments.

### Why is NAT visibility important?

NAT visibility is important because translated addresses can make it harder to identify the original source of traffic. NAT logs and translation records help map traffic back to the correct internal host or subscriber.