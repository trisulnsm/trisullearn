---
title: What is an intrusion prevention system?
description: An intrusion prevention system, or IPS, is a security control that inspects network traffic and blocks or drops traffic that matches malicious patterns or policy violations.
sidebar_label: Intrusion prevention system
sidebar_position: 192
slug: /glossary/intrusion-prevention-system
keywords:
  - intrusion prevention system
  - IPS
  - network prevention
  - security blocking
  - threat blocking
  - packet inspection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an intrusion prevention system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An intrusion prevention system, or IPS, is a security control that inspects network traffic and blocks or drops traffic that matches malicious patterns or policy violations."
      }
    },
    {
      "@type": "Question",
      "name": "How does IPS work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IPS inspects traffic using signatures, rules, or behavior checks. When traffic is judged malicious or unauthorized, it can block, drop, or reset the session."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between IDS and IPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IDS detects and alerts on suspicious activity, while an IPS actively prevents it by blocking or dropping traffic. IPS is inline enforcement."
      }
    },
    {
      "@type": "Question",
      "name": "Why is IPS important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPS is important because it can stop attacks before they reach their target. It is often used to protect critical services and network boundaries."
      }
    }
  ]
};

# What is an intrusion prevention system?

An intrusion prevention system, or IPS, is a security control that inspects network traffic and blocks or drops traffic that matches malicious patterns or policy violations.

---

## How IPS works

An IPS sits inline with traffic or in a position where it can actively enforce policy. It examines packets or sessions for signatures, rules, or suspicious behavior.

If the traffic is judged malicious, the IPS can block the packet, reset the session, or otherwise stop the connection. This makes IPS a prevention layer, not just a detection layer.

---

## IPS in network operations

IPS is used to stop known attacks, exploit attempts, and unauthorized traffic in real time. It is common at network edges and between trust zones.

Because it can affect traffic flow, IPS must be tuned carefully. Too aggressive a policy can block legitimate traffic, while too loose a policy may allow attacks through.

---

## IDS vs IPS

| Control | Role |
|---|---|
| IDS | Detect and alert |
| IPS | Detect and prevent |
| Enforcement | Inline blocking |
| Outcome | Traffic is stopped |

---

## What makes IPS work in practice

IPS depends on accurate rules and low-latency inspection. If the policy is poor or the device is overloaded, it can create false blocks or bottlenecks.

It also works best with good visibility. Security teams need to know what was blocked and why so they can tune the policy correctly.

---

## How Trisul handles IPS

Trisul can provide the traffic context around IPS activity, helping operators understand what was blocked, where it happened, and whether the event matches broader network behavior.

---

## Related terms

- IDS
- Firewall
- Threat detection
- Security zone
- Policy enforcement