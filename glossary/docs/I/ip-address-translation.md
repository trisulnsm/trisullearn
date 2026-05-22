---
title: What is IP address translation?
description: IP address translation is the process of changing the source or destination IP address in a packet, often for routing, security, or address sharing purposes.
sidebar_label: IP address translation
sidebar_position: 225
slug: /glossary/ip-address-translation
keywords:
  - IP address translation
  - NAT
  - address translation
  - source translation
  - destination translation
  - network rewriting
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is IP address translation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation is the process of changing the source or destination IP address in a packet, often for routing, security, or address sharing purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Why is IP address translation used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation is used to conserve address space, hide internal networks, or map traffic between network domains."
      }
    },
    {
      "@type": "Question",
      "name": "What is the effect of IP address translation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation changes the apparent network identity of traffic, which affects logging, attribution, and troubleshooting."
      }
    },
    {
      "@type": "Question",
      "name": "How is IP address translation related to flow analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IP address translation can make flow analysis harder because the observed address may differ from the original source or destination."
      }
    }
  ]
};

# What is IP address translation?

IP address translation is the process of changing the source or destination IP address in a packet, often for routing, security, or address sharing purposes.

---

## How IP address translation works

A gateway or firewall rewrites one IP address to another before forwarding traffic. This can happen for outbound traffic, inbound traffic, or both.

The translated address may be different from the original internal address. That means logs and traces must be interpreted carefully.

---

## IP address translation in network operations

Address translation is common in NAT, private network access, and security architectures. It helps multiple systems share public addresses or remain hidden behind a boundary.

It also affects visibility. Analysts need to know whether they are seeing original addresses or translated ones.

---

## Common translation effects

| Effect | Meaning |
|---|---|
| Source rewrite | Outbound identity changes |
| Destination rewrite | Inbound mapping changes |
| Hidden internal hosts | Private addresses are masked |
| Shared public address | Many hosts appear as one |

---

## What makes IP address translation useful

Translation is useful because it conserves address space and supports network design. It can also improve security by hiding internal structure.

The tradeoff is that attribution becomes harder unless the translation records are retained and searchable.

---

## How Trisul handles IP address translation

Trisul can help correlate traffic before and after address translation so operators can trace communication accurately.

---

## Related terms

- Flow attribution
- Port translation
- Inbound traffic
- Outbound traffic
- Firewall logging