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

**JA3** is a method for **creating TLS client fingerprints** from the **TLS handshake information**, especially the **Client Hello** message. It provides a way to **identify applications, clients, or malware families** even when the actual application payload is encrypted and cannot be inspected directly. This makes JA3 a valuable tool for **traffic analysis, threat hunting, and encrypted‑traffic visibility** without requiring decryption keys or deep‑packet inspection.

---

## How JA3 works

JA3 derives a **fingerprint string** by combining selected fields from the **TLS Client Hello**, such as:

- TLS version.  
- Cipher suites.  
- Extensions and their order.  
- Other handshake parameters.  

These values are concatenated in a defined format, producing a **repeatable fingerprint** for a given client or application. Because the same client (or malware family) typically uses the same handshake configuration, its **JA3 fingerprint tends to be stable**, allowing analysts to **match unknown traffic against known fingerprint databases**.

---

## JA3 in network operations

In **security and network operations**, JA3 is especially useful when:

- **Traffic is encrypted** and payload inspection is not possible or not allowed.  
- Teams need to **identify unusual or suspicious clients**, such as C2‑style tools, command‑line utilities, or non‑standard browsers.  
- Analysts must **distinguish between different applications** that all use TLS (e.g., web browsers vs custom agents) without relying on DNS or content.  

By adding JA3‑based telemetry to flows and alerts, operators gain **extra context** for encrypted sessions, which improves detection accuracy and reduces reliance on decryption.

---

## JA3 use cases

| Use case | Value |
|----------|-------|
| Threat hunting | Find suspicious or known‑malicious TLS clients |
| Encrypted traffic analysis | Surface client‑level signals even when payloads are hidden |
| Malware detection | Match traffic to published JA3 fingerprints of malware families |
| Application identification | Separate TLS‑using applications (e.g., browsers, APIs, mobile apps) |

---

## What makes JA3 work in practice

JA3 is only effective if the **TLS handshake is visible** to the analyzer. If traffic is intercepted or encrypted before the Client Hello can be observed, JA3 fingerprints cannot be built. In addition:

- JA3 is a **contextual signal**, not a definitive verdict. It should be combined with **flow direction, destination IPs, DNS, and behavioral patterns** for higher‑confidence identification.  
- Fingerprints can change when clients update versions or configurations, so **fingerprint databases and baselines** must be maintained over time.

Using JA3 as part of a broader telemetry stack (flows, DNS, JA3, JA4, etc.) yields the best results.

---

## How Trisul handles JA3

Trisul can apply **JA3‑style TLS fingerprinting** to encrypted traffic by inspecting TLS handshake data visible in flows or mirrored traffic. This enables:

- **Client‑ and application‑level identification** even within encrypted sessions.  
- Correlation of **JA3 fingerprints with other signals** such as DNS, destination ports, and traffic patterns.  
- Enhanced **threat‑hunting and anomaly detection** for suspicious TLS clients without decrypting payloads.  

This complements Trisul’s flow‑based analytics by adding **deep‑traffic‑behavior context** to otherwise opaque encrypted streams.

---

## Related terms

- JA3  
- TLS  
- Encrypted traffic  
- Passive DNS  
- Threat hunting  
- Application identification  

---

## Frequently asked questions

### What is JA3?

JA3 is a method for creating TLS client fingerprints from handshake information. It helps identify applications and clients even when the payload is encrypted.

### How does JA3 work?

JA3 works by combining fields from the TLS client hello into a fingerprint string. That fingerprint can then be matched against known clients, tools, or malware families.

### Why is JA3 useful?

JA3 is useful because it adds visibility to encrypted traffic without needing to decrypt the payload. It helps analysts identify applications, tools, and suspicious clients.

### Where is JA3 used?

JA3 is used in security monitoring, threat hunting, and encrypted traffic analysis. It is often applied when payload inspection is not available.