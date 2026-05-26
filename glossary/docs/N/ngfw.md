---
title: What is an NGFW?
description: An NGFW, or next-generation firewall, is a firewall that combines traditional packet filtering with application awareness, intrusion prevention, and advanced security controls.
sidebar_label: NGFW
sidebar_position: 152
slug: /glossary/ngfw
keywords:
  - NGFW
  - next-generation firewall
  - application firewall
  - firewall security
  - IPS
  - traffic inspection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an NGFW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An NGFW, or next-generation firewall, is a firewall that combines traditional packet filtering with application awareness, intrusion prevention, and advanced security controls."
      }
    },
    {
      "@type": "Question",
      "name": "How is an NGFW different from a normal firewall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A normal firewall mainly filters traffic by address, port, or protocol. An NGFW adds deeper inspection, application identification, and often intrusion prevention features."
      }
    },
    {
      "@type": "Question",
      "name": "Why are NGFWs used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NGFWs are used to enforce stronger security policy, understand application traffic, and detect more advanced threats than basic port-based filtering can catch."
      }
    },
    {
      "@type": "Question",
      "name": "What should be monitored on an NGFW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Operators should monitor allowed and denied traffic, application usage, threat detections, utilization, and latency impact. This shows whether the firewall is helping or causing problems."
      }
    }
  ]
};

# What is an NGFW?

An **NGFW**, or **next‑generation firewall**, is a firewall that combines **traditional packet filtering** with **application awareness, intrusion prevention, and advanced security controls**. Unlike basic stateful firewalls that filter only by IP, port, and protocol, NGFWs inspect traffic content, identify applications, and enforce rich security policies across the network.

---

## How an NGFW works

An NGFW:

- Performs **classic packet and stateful inspection** (allow/deny based on source/destination, port, and protocol).  
- Adds **deep‑packet inspection (DPI)** and **application identification** to recognize apps (e.g., SaaS, video conferencing, cloud storage) regardless of port.  
- Integrates **intrusion prevention (IPS)** to detect and block known attack signatures and some zero‑day patterns.  
- Enforces **user‑based policies**, URL filtering, and TLS/SSL inspection (often in decryption‑mode deployments).  

This allows operators to **block risky apps**, contain threats that hide behind common ports, and enforce security not just by IP but by **application, user, and content**.

---

## NGFW in network operations

NGFWs are typically deployed:

- At **network perimeters** (e.g., between internal networks and the internet).  
- Between **security zones** such as user, server, and DMZ segments.  

In practice:

- NGFWs protect **user, server, and internet‑facing workloads** with stronger, more granular policy than traditional firewalls.  
- They generate **traffic and security logs** that show **allowed vs denied traffic, application usage, and detected threats**, which are crucial for incident investigation and policy tuning.

---

## NGFW vs classic firewall

| Feature | Classic firewall | NGFW |
|--------|------------------|------|
| Packet filtering | Yes | Yes |
| Stateful inspection | Yes | Yes |
| Application awareness | Very limited | Yes (by app, not just port) |
| Intrusion prevention | Minimal or none | Often built‑in IPS |
| Policy depth | Source/dest, port, protocol | User, app, content, URL, threat |

NGFWs retain firewall basics but layer on **application‑level visibility and threat‑focused enforcement**.

---

## What makes NGFW work in practice

Three operational aspects are key:

- **Policy tuning**:  
  - Over‑broad inspection or too many rules can create **CPU load and latency** and make policy hard to maintain.  
  - Policies should be scoped to **business‑important apps and services** with clear change‑control.  
- **Performance and scalability**:  
  - NGFWs can become **bottlenecks** if not sized correctly for traffic volume, especially with TLS decrypt‑inspect‑reencrypt.  
  - Monitoring **throughput, CPU, and dropped sessions** is essential.  
- **Visibility and logging**:  
  - NGFWs must export **logs and flow data** to monitoring tools so that allowed/blocked traffic and threat detections are visible to security and operations.

When tuned well, NGFWs strike a balance of **strong security, acceptable performance, and manageable policy**.

---

## How Trisul handles NGFW

Trisul helps operators **observe and validate NGFW‑driven behavior** by:

- Tracking **flows, application usage, and traffic patterns** upstream and downstream of the NGFW.  
- Correlating **NGFW logs and NetFlow‑style data** to show **what traffic is allowed, which apps are being used, and where policy may be hiding important behavior**.  
- Enabling **performance and capacity views** so that teams can see whether the NGFW is introducing latency or dropping sessions.  

This integration lets Trisul act as a **traffic‑visibility counterpart** to NGFW control, helping operators verify that security policy is effective without obscuring critical traffic behavior.

---

## Related terms

- [What is firewall?](/docs/glossary/firewall)  
- [What is IDS?](/docs/glossary/ids)  
- [What is IPS?](/docs/glossary/ips)  
- [What is application visibility?](/docs/glossary/application-visibility)  
- [What is packet filtering?](/docs/glossary/packet-filtering)  

---

## Frequently asked questions

### What is an NGFW?

An NGFW, or next‑generation firewall, is a firewall that combines traditional packet filtering with application awareness, intrusion prevention, and advanced security controls.

### How is an NGFW different from a normal firewall?

A normal firewall mainly filters traffic by address, port, or protocol. An NGFW adds deeper inspection, application identification, and often intrusion prevention features.

### Why are NGFWs used?

NGFWs are used to enforce stronger security policy, understand application traffic, and detect more advanced threats than basic port‑based filtering can catch.

### What should be monitored on an NGFW?

Operators should monitor allowed and denied traffic, application usage, threat detections, utilization, and latency impact. This shows whether the firewall is helping or causing problems.