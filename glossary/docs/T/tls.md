---
title: What is TLS?
description: TLS, or Transport Layer Security, is a protocol that encrypts traffic between clients and servers. It protects data confidentiality and integrity for many internet applications.
sidebar_label: TLS
sidebar_position: 161
slug: /glossary/tls
keywords:
  - TLS
  - transport layer security
  - encryption
  - secure communication
  - HTTPS
  - encrypted traffic
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TLS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TLS, or Transport Layer Security, is a protocol that encrypts traffic between clients and servers. It protects data confidentiality and integrity for many internet applications."
      }
    },
    {
      "@type": "Question",
      "name": "What does TLS protect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TLS protects the confidentiality and integrity of data in transit. It helps prevent eavesdropping and tampering."
      }
    },
    {
      "@type": "Question",
      "name": "Where is TLS used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TLS is used in HTTPS, secure email, APIs, VPN-related services, and many other encrypted applications. It is one of the most common security protocols on the internet."
      }
    },
    {
      "@type": "Question",
      "name": "Why is TLS important for network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TLS is important for network analytics because it hides payload content while still allowing traffic metadata to be observed. Analysts often rely on flow, handshake, and fingerprint data when payloads are encrypted."
      }
    }
  ]
};

# What is TLS?

TLS, or Transport Layer Security, is a protocol that encrypts traffic between clients and servers. It protects data confidentiality and integrity for many internet applications.

---

## How TLS works

TLS creates a secure channel between two endpoints. During the handshake, the client and server negotiate encryption settings and verify identity.

Once the session is established, application data is encrypted. That means observers can often still see metadata such as endpoints and timing, but not the content itself.

---

## TLS in network operations

TLS is everywhere in modern networks. Most web traffic, APIs, and many services now use TLS by default.

For operators, TLS creates visibility challenges because payloads are hidden. At the same time, handshake and metadata signals still provide useful analytical context.

---

## TLS vs plaintext traffic

| Aspect | Plaintext | TLS |
|---|---|---|
| Content visibility | Visible | Encrypted |
| Integrity protection | No | Yes |
| Confidentiality | No | Yes |
| Common use | Legacy services | Modern services |

---

## What makes TLS work in practice

TLS depends on correct certificate and key handling. Misconfiguration can cause connection failures or security warnings.

In analytics, TLS is best understood together with metadata such as JA3, SNI, and destination IPs. Those signals help identify encrypted applications.

---

## How Trisul handles TLS

Trisul can observe TLS metadata and encrypted traffic patterns to help operators understand what encrypted applications are doing on the network. That gives visibility without needing payload inspection.

---

## Related terms

- JA3
- HTTPS
- Encrypted traffic
- Passive DNS
- Application identification