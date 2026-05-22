---
title: What is an intrusion detection system?
description: An intrusion detection system, or IDS, monitors network traffic for suspicious or malicious activity and raises alerts when it detects patterns that match known threats or anomalies.
sidebar_label: Intrusion detection system
sidebar_position: 151
slug: /glossary/ids
keywords:
  - intrusion detection system
  - IDS
  - network detection
  - security monitoring
  - threat detection
  - alerting
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an intrusion detection system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An intrusion detection system, or IDS, monitors network traffic for suspicious or malicious activity and raises alerts when it detects patterns that match known threats or anomalies."
      }
    },
    {
      "@type": "Question",
      "name": "How does an IDS work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IDS inspects traffic and compares it against rules, signatures, or behavioral patterns. When it finds something suspicious, it generates an alert for review."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between IDS and IPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IDS detects and alerts on suspicious activity, while an IPS is designed to block or prevent it. IDS is primarily visibility and alerting, not inline enforcement."
      }
    },
    {
      "@type": "Question",
      "name": "Why is IDS useful in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IDS is useful because it adds a security detection layer to network visibility. It helps identify scans, exploits, malware traffic, and policy violations."
      }
    }
  ]
};

# What is an intrusion detection system?

An intrusion detection system, or IDS, monitors network traffic for suspicious or malicious activity and raises alerts when it detects patterns that match known threats or anomalies.

---

## How an IDS works

An IDS inspects traffic using signatures, rules, or behavioral logic. If the traffic matches a malicious pattern or looks abnormal, it creates an alert.

IDS systems are usually deployed out of band. They watch traffic and report on threats, but they do not normally block traffic directly.

---

## IDS in network operations

IDS is used by SOC teams to detect scans, exploits, malware communication, and policy violations. It adds a security layer to normal traffic visibility.

Analysts use IDS alerts as starting points for investigation. Once an alert fires, they can drill into flows and packets to confirm what happened.

---

## IDS vs related controls

| Control | Purpose |
|---|---|
| IDS | Detect and alert |
| IPS | Detect and block |
| Firewall | Filter traffic |
| SIEM | Correlate security events |

---

## What makes IDS work in practice

IDS works best when traffic is visible and the rules are tuned well. Too many false positives make it hard to trust the alerts.

Packet and flow context make IDS alerts more useful. An alert without traffic context is harder to investigate.

---

## How Trisul handles IDS

Trisul can feed traffic context into IDS workflows and correlate IDS alerts with flows and packets. This gives security teams both detection and investigation support.

---

## Related terms

- Network security monitoring
- IPS
- Suricata
- Packet capture
- Threat detection