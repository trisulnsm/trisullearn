---
title: What is JA3?
description: JA3 is a method for creating TLS client fingerprints from handshake information. It helps identify applications and clients even when the payload is encrypted.
sidebar_label: JA3
sidebar_position: 153
slug: /glossary/ja3
keywords:
  - JA3
  - TLS fingerprinting
  - client fingerprint
  - encrypted traffic
  - application identification
  - threat detection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is JA3?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JA3 is a method for creating TLS client fingerprints from handshake information. It helps identify applications and clients even when the payload is encrypted."
      }
    },
    {
      "@type": "Question",
      "name": "How does JA3 work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JA3 works by combining fields from the TLS client hello into a fingerprint string. That fingerprint can then be matched against known clients, tools, or malware families."
      }
    },
    {
      "@type": "Question",
      "name": "Why is JA3 useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JA3 is useful because it adds visibility to encrypted traffic without needing to decrypt the payload. It helps analysts identify applications, tools, and suspicious clients."
      }
    },
    {
      "@type": "Question",
      "name": "Where is JA3 used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JA3 is used in security monitoring, threat hunting, and encrypted traffic analysis. It is often applied when payload inspection is not available."
      }
    }
  ]
};

# What is JA3?

JA3 is a method for creating TLS client fingerprints from handshake information. It helps identify applications and clients even when the payload is encrypted.

---

## How JA3 works

JA3 extracts selected values from the TLS client hello and turns them into a fingerprint string. That string represents how a client initiates its encrypted connection.

The same client or tool usually produces the same or similar fingerprint. That makes it possible to compare unknown traffic against known fingerprints.

---

## JA3 in network operations

JA3 is useful when encrypted traffic hides the payload but the handshake is still visible. Security teams use it to identify suspicious tools, malware families, and unusual clients.

It also helps analysts distinguish between different applications that all use TLS. That gives extra context even when the content itself cannot be seen.

---

## JA3 use cases

| Use case | Value |
|---|---|
| Threat hunting | Find suspicious clients |
| Encrypted traffic analysis | Identify TLS handshakes |
| Malware detection | Match known fingerprints |
| Application identification | Separate TLS clients |

---

## What makes JA3 work in practice

JA3 is only useful if TLS handshake data is visible. If the traffic is fully hidden before the handshake can be seen, the fingerprint cannot be built.

It is also a contextual signal, not a complete answer. A fingerprint helps identify a client, but it should usually be combined with flow and DNS context.

---

## How Trisul handles JA3

Trisul can use JA3-style TLS fingerprinting to improve visibility into encrypted traffic. This helps analysts identify clients and correlate encrypted sessions with other traffic signals.

---

## Related terms

- TLS
- Encrypted traffic
- Passive DNS
- Threat hunting
- Application identification