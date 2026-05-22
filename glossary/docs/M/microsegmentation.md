---
title: What is micro segmentation?
description: Micro segmentation is a security model that divides a network into very small policy-controlled segments. It limits which systems can talk to each other and reduces the blast radius of compromise.
sidebar_label: Micro segmentation
sidebar_position: 163
slug: /glossary/micro-segmentation
keywords:
  - micro segmentation
  - segmentation
  - zero trust
  - security policy
  - internal controls
  - network isolation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is micro segmentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Micro segmentation is a security model that divides a network into very small policy-controlled segments. It limits which systems can talk to each other and reduces the blast radius of compromise."
      }
    },
    {
      "@type": "Question",
      "name": "How does micro segmentation work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Micro segmentation applies fine-grained policy between workloads, hosts, or applications. Traffic is allowed only when it matches the policy, and everything else is blocked or restricted."
      }
    },
    {
      "@type": "Question",
      "name": "Why is micro segmentation important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Micro segmentation is important because it reduces lateral movement and limits the impact of a compromise. If one host is breached, the attacker cannot easily move to others."
      }
    },
    {
      "@type": "Question",
      "name": "How is micro segmentation monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Micro segmentation is monitored by checking whether allowed flows match policy and whether blocked flows indicate violations or attack attempts. Network analytics helps validate the policy."
      }
    }
  ]
};

# What is micro segmentation?

Micro segmentation is a security model that divides a network into very small policy-controlled segments. It limits which systems can talk to each other and reduces the blast radius of compromise.

---

## How micro segmentation works

Instead of one broad internal network, micro segmentation creates smaller trust boundaries. Policies define exactly which hosts or applications may communicate.

Traffic that does not match policy is blocked or restricted. This keeps access tight and reduces unnecessary internal connectivity.

---

## Micro segmentation in network operations

Micro segmentation is used in data centers, cloud environments, and sensitive internal networks. It is especially useful when many workloads share the same infrastructure.

It makes internal security more precise. If one workload is compromised, segmentation limits how far the attacker can move.

---

## Micro segmentation vs network segmentation

| Model | Scope |
|---|---|
| Network segmentation | Larger network zones |
| Micro segmentation | Very small workload-level controls |
| Benefit | Less lateral movement |
| Benefit | Smaller blast radius |

---

## What makes micro segmentation work in practice

Policy must be accurate and realistic. If the rules are too strict, applications break. If they are too loose, the security benefit is lost.

Visibility is also important. Operators need to know which flows are allowed, denied, or unexpectedly active so the policy can be tuned.

---

## How Trisul handles micro segmentation

Trisul helps validate segmentation by showing actual flows between hosts and zones. This makes it easier to confirm whether micro segmentation policy is being followed.

---

## Related terms

- Network segmentation
- Security zone
- Policy enforcement
- Lateral movement
- Zero trust