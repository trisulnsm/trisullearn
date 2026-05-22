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

An NGFW, or next-generation firewall, is a firewall that combines traditional packet filtering with application awareness, intrusion prevention, and advanced security controls.

---

## How an NGFW works

An NGFW still filters traffic like a classic firewall, but it also looks deeper into application behavior. It can identify applications, inspect traffic patterns, and apply richer security policy.

This gives operators more control than simple port-based filtering. It also helps detect threats that hide behind allowed ports or protocols.

---

## NGFW in network operations

NGFWs are used at network boundaries and between security zones. They help protect user, server, and internet-facing segments.

They also produce logs that are useful in investigations. Analysts can see what was allowed, what was blocked, and which applications were being used.

---

## NGFW vs classic firewall

| Feature | Classic firewall | NGFW |
|---|---|---|
| Packet filtering | Yes | Yes |
| Application awareness | Limited | Yes |
| Intrusion prevention | Limited | Often yes |
| Policy depth | Basic | Advanced |

---

## What makes NGFW work in practice

NGFW policy needs to be carefully tuned. Too much inspection can create overhead, and too many rules can make policy hard to manage.

The best NGFW deployments balance control, performance, and visibility. Monitoring is needed to make sure the firewall is not becoming a bottleneck.

---

## How Trisul handles NGFW

Trisul helps show the effect of NGFW policy on traffic by tracking flows, applications, and performance patterns. This helps operators verify that security controls are working without hiding important traffic behavior.

---

## Related terms

- Firewall
- IDS
- IPS
- Application visibility
- Packet filtering