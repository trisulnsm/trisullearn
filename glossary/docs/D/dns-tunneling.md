---
title: What is DNS tunneling?
description: DNS tunneling is the use of DNS queries and responses to carry non-DNS data or hide traffic inside DNS messages. It is often associated with covert communication or data exfiltration.
sidebar_label: DNS tunneling
sidebar_position: 157
slug: /glossary/dns-tunneling
keywords:
  - DNS tunneling
  - covert channel
  - DNS abuse
  - data exfiltration
  - suspicious DNS
  - DNS security
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is DNS tunneling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DNS tunneling is the use of DNS queries and responses to carry non-DNS data or hide traffic inside DNS messages. It is often associated with covert communication or data exfiltration."
      }
    },
    {
      "@type": "Question",
      "name": "How does DNS tunneling work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DNS tunneling works by encoding data into domain names or DNS responses so it can pass through DNS infrastructure. The traffic may look like ordinary DNS but contains hidden payloads."
      }
    },
    {
      "@type": "Question",
      "name": "Why is DNS tunneling a security concern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DNS tunneling is a security concern because DNS is often allowed through firewalls and may be overlooked. Attackers can use it to bypass controls, communicate covertly, or move data out of a network."
      }
    },
    {
      "@type": "Question",
      "name": "How is DNS tunneling detected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DNS tunneling is detected by looking for unusual query lengths, high request rates, strange domain patterns, and repeated DNS activity that does not match normal resolution behavior."
      }
    }
  ]
};

# What is DNS tunneling?

DNS tunneling is the use of DNS queries and responses to carry non-DNS data or hide traffic inside DNS messages. It is often associated with covert communication or data exfiltration.

---

## How DNS tunneling works

DNS tunneling encodes data into domain names or DNS responses. Because DNS is widely allowed and often trusted, the hidden traffic can pass through network controls more easily than other channels.

The resulting DNS traffic may look ordinary at first glance. But the query patterns, length, and frequency often differ from normal DNS behavior.

---

## DNS tunneling in network operations

DNS tunneling is a security concern because DNS is often overlooked. It may be used to bypass restrictions, build covert channels, or leak data out of a network.

Analysts look for unusual DNS behavior rather than just domain names. Long labels, repeated queries, or very regular patterns are common clues.

---

## Common indicators

| Indicator | Possible meaning |
|---|---|
| Long query names | Encoded data |
| High query rate | Automated channel |
| Strange subdomains | Covert payload |
| Repetitive lookups | Tunneling behavior |

---

## What makes DNS tunneling work in practice

Detection depends on knowing what normal DNS looks like. Without baseline behavior, unusual patterns are harder to spot.

DNS tunneling is also easier to catch when DNS data is correlated with flow and endpoint activity. That helps show whether the DNS pattern matches real application use.

---

## How Trisul handles DNS tunneling

Trisul can help identify suspicious DNS patterns by showing query volume, unusual destinations, and behavior that differs from normal DNS activity. This makes DNS tunneling easier to investigate.

---

## Related terms

- Passive DNS
- DNS security
- Data exfiltration
- Covert channel
- Threat detection