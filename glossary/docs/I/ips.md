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

An **intrusion prevention system (IPS)** is a **security control** that **inspects network traffic** and **blocks or drops packets or sessions** that match malicious patterns, exploit signatures, or policy violations. Unlike systems that only observe traffic, an IPS is typically **inline** (or steering‑capable), so it can actively **enforce policy and prevent attacks** from reaching their intended targets. IPS is widely used at **network edges, between security zones, and in front of critical services** to add a real‑time enforcement layer to the security stack.

---

## How IPS works

An IPS is placed in the path of traffic (or in a position that can redirect and block it) and performs deep inspection on packets or sessions. It uses:

- **Signatures** for known attacks and exploits.  
- **Rules** for policy‑based blocking (e.g., forbidden ports or protocols).  
- Often **behavioral or anomaly‑based checks** to catch suspicious traffic even without a precise signature.  

When traffic is judged malicious or unauthorized, the IPS can **drop the packet, reset the connection, or otherwise terminate the session**, effectively stopping the attempted intrusion. This inline enforcement is what distinguishes IPS from pure detection‑only systems.

---

## IPS in network operations

In NOC and security operations, IPS is used to **stop known attacks, exploit attempts, and policy‑violating traffic in real time**, especially at:

- **Network perimeters and extranet boundaries**.  
- **Zones between trust levels** (e.g., user zone vs server zone).  

Because IPS is **inline**, misconfiguration or poorly tuned rules can cause **false‑positive blocks** of legitimate traffic or **performance bottlenecks** if inspection is too heavy. Effective IPS deployment requires:

- Careful **rule review and tuning**.  
- Monitoring of **block rates and events**.  
- Integration with **logging and alerting systems** to support incident response.

---

## IDS vs IPS

| Control | Role |
|--------|------|
| IDS   | Detects suspicious activity and raises alerts, but does not block traffic |
| IPS   | Detects and prevents by actively blocking or dropping traffic |
| Enforcement | IPS is **inline** or actively steering; IDS is typically **passive or mirror‑based** |
| Outcome | IDS produces **alerts**; IPS produces **blocked or stopped traffic** |

In practice, organizations often run **IDS for monitoring and hunting** and **IPS where inline enforcement is acceptable and required**.

---

## What makes IPS work in practice

For an IPS to be effective operationally:

- **Rules and signatures** must be accurate, up‑to‑date, and aligned with the organization’s risk posture.  
- The device must be sized to handle peak traffic with **low latency** so it does not become a performance chokepoint.  
- **Logging and correlation** are essential: operators need to know **what was blocked, by which rule, and why**, so they can tune policies and distinguish between genuine attacks and false positives.  

IPS is most powerful when combined with **good visibility (flows, logs, packet capture)** and **incident‑response playbooks** that can rapidly evaluate and adjust blocking behavior.

---

## How Trisul handles IPS

Trisul provides **traffic‑level context around IPS activity** without necessarily being the IPS itself. It can:

- Show **what traffic was blocked or allowed by the IPS** by correlating flows, DNS, and application telemetry with IPS events.  
- Help operators see **where a block occurred in the network and whether it matches broader patterns** (e.g., repeated scans, C2‑like traffic, or mass‑download behavior).  
- Support **post‑mortem analysis** by pivoting from an IPS alert into full traffic and session views, including historical flows and metadata.  

This complements IPS deployments by giving teams a **network‑wide, flow‑based view** of what the IPS is seeing and reacting to, improving both detection confidence and policy‑tuning.

---

## Related terms

- Intrusion prevention system  
- IDS  
- Firewall  
- Threat detection  
- Security zone  
- Policy enforcement  

---

## Frequently asked questions

### What is an intrusion prevention system?

An intrusion prevention system, or IPS, is a security control that inspects network traffic and blocks or drops traffic that matches malicious patterns or policy violations.

### How does IPS work?

An IPS inspects traffic using signatures, rules, or behavior checks. When traffic is judged malicious or unauthorized, it can block, drop, or reset the session.

### What is the difference between IDS and IPS?

An IDS detects and alerts on suspicious activity, while an IPS actively prevents it by blocking or dropping traffic. IPS is inline enforcement.

### Why is IPS important?

IPS is important because it can stop attacks before they reach their target. It is often used to protect critical services and network boundaries.