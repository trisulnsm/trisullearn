---
title: What is an indicator of compromise?
description: An indicator of compromise, or IoC, is a sign that a system or network may have been breached. It may include suspicious IPs, domains, hashes, URLs, or unusual behavior.
sidebar_label: Indicator of compromise
sidebar_position: 187
slug: /glossary/indicator-of-compromise
keywords:
  - indicator of compromise
  - IoC
  - compromise indicator
  - threat intelligence
  - breach indicator
  - security signal
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an indicator of compromise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An indicator of compromise, or IoC, is a sign that a system or network may have been breached. It may include suspicious IPs, domains, hashes, URLs, or unusual behavior."
      }
    },
    {
      "@type": "Question",
      "name": "What are examples of IoCs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Examples of IoCs include malicious IP addresses, suspicious domains, file hashes, unusual DNS activity, and abnormal outbound connections."
      }
    },
    {
      "@type": "Question",
      "name": "Why are IoCs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IoCs are important because they help analysts recognize known bad activity quickly. They are often used to search for evidence of compromise across logs and traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How are IoCs used in detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IoCs are used to match observed traffic or host behavior against known malicious artifacts. When a match is found, it can trigger investigation or response."
      }
    }
  ]
};

# What is an indicator of compromise?

An indicator of compromise, or IoC, is a sign that a system or network may have been breached. It may include suspicious IPs, domains, hashes, URLs, or unusual behavior.

---

## How IoCs work

Security teams use IoCs as searchable markers of malicious activity. If a known-bad domain, IP, or hash appears in a system, it may indicate compromise.

IoCs can also be behavioral. For example, repeated connections to rare domains or unusual outbound patterns may act like indicators even if no exact signature is known.

---

## IoCs in network operations

IoCs help analysts move quickly from suspicion to evidence. They are often checked across flows, DNS, proxy logs, and endpoint alerts.

They are especially useful during incident response. If an IoC matches a known threat, analysts can search for its presence across the environment.

---

## Common IoC types

| Type | Example |
|---|---|
| IP address | Known malicious host |
| Domain | Suspicious DNS target |
| Hash | Malware fingerprint |
| URL | Malicious web path |
| Behavior | Unusual outbound pattern |

---

## What makes IoCs useful

IoCs are strongest when they are current and relevant. Old indicators may no longer matter if the threat has moved or changed infrastructure.

They also work best when combined with context. A single IoC match is useful, but a full traffic pattern gives a clearer picture.

---

## How Trisul handles IoCs

Trisul can help analysts search traffic and DNS patterns for signs of compromise and connect suspicious indicators to real network activity.

---

## Related terms

- Threat detection
- Threat intelligence
- DNS tunneling
- Passive DNS
- Incident response