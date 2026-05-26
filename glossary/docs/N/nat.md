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

**NAT (Network Address Translation)** is a **networking technique** that rewrites **IP addresses and ports** as traffic passes through a **router or gateway**. It is widely used to let **many internal hosts share a small pool of public IPv4 addresses** and to hide internal addressing from the outside.

---

## How NAT works

NAT works by:

- Replacing **private source IP addresses** with public ones when traffic leaves the internal network.  
- Reversing the mapping for **return traffic**, so packets are sent back to the correct internal host.  
- Using **port translation (PAT)** to let many sessions share a **single public IP**, each identified by a unique port.

From the outside, multiple internal users may appear to originate from the same public IP, which is why **NAT logs and translation records** are essential for attribution.

---

## NAT in network operations

NAT is used to:

- **Conserve IPv4 space** in environments with limited public addresses.  
- **Hide internal topology**, making it harder for attackers to see true internal IPs.  
- Support **large numbers of users** behind a shared gateway, especially in CGNAT (ISP‑scale NAT environments).

For operations teams, NAT makes **traffic attribution more complex**, because multiple hosts may share one public IP. **Translation logs** are therefore critical for investigation and compliance.

---

## NAT types

| Type | Description |
|------|-------------|
| Static NAT | One‑to‑one fixed mapping between a private IP and a public IP |
| Dynamic NAT | A pool of public IPs, each private IP mapped dynamically from that pool |
| PAT (Port Address Translation) | Many internal hosts share one public IP using ports |
| CGNAT | Large‑scale, ISP‑grade NAT where many subscribers share a small set of public IPs |

---

## What makes NAT work in practice

- **Port‑based translation** must be robust to avoid collisions across many sessions.  
- **Translation records and logs** must be collected and stored so that traffic can be traced back to the correct internal host or subscriber.  
- Analytics tools must correlate **NAT events with flow data** so that dashboards show internal sources, not just public IPs.

---

## How Trisul handles NAT

Trisul can **correlate flow records with NAT information** to map **public traffic back to internal hosts or subscribers**, especially in CGNAT environments. This enables:

- **Subscriber‑level attribution** in ISP settings.  
- **Traffic analysis and investigation** that reflects true internal sources, even when NAT is in use.  

For configuration and topology patterns, see Trisul documentation at [https://docs.trisul.org/docs/ug/flow/](https://docs.trisul.org/docs/ug/flow/).

---

## Related terms

- [What is CGNAT?](/docs/glossary/cgnat)  
- [What is IP address translation?](/docs/glossary/ip-translation)  
- [What is subscriber mapping?](/docs/glossary/subscriber-mapping)  
- [What is flow attribution?](/docs/glossary/flow-attribution)  
- [What is port translation?](/docs/glossary/port-translation)  

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