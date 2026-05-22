---
title: What is a firewall?
description: A firewall is a network security control that monitors and filters traffic between networks or zones based on defined rules. It is used to enforce policy, block unauthorized access, and control application traffic.
sidebar_label: Firewall
sidebar_position: 128
slug: /glossary/firewall
keywords:
  - firewall
  - network firewall
  - security policy
  - packet filtering
  - traffic control
  - network security
  - zone protection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a firewall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A firewall is a network security control that monitors and filters traffic between networks or zones based on defined rules. It is used to enforce policy, block unauthorized access, and control application traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How does a firewall work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A firewall compares traffic against a policy rule set. Allowed traffic passes through, denied traffic is blocked, and some firewalls can inspect session state or application content. Firewalls may operate at the network, transport, or application layer."
      }
    },
    {
      "@type": "Question",
      "name": "What types of firewalls are there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common firewall types include packet-filtering firewalls, stateful firewalls, proxy firewalls, and next-generation firewalls. Each type offers different levels of inspection and control."
      }
    },
    {
      "@type": "Question",
      "name": "Why is firewall monitoring important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall monitoring is important because it reveals blocked traffic, policy violations, unusual connection attempts, and traffic volume trends. It helps security and operations teams verify that policy is working as expected."
      }
    }
  ]
};

# What is a firewall?

A firewall is a network security control that monitors and filters traffic between networks or zones based on defined rules. It is used to enforce policy, block unauthorized access, and control application traffic.

---

## How a firewall works

A firewall compares traffic against a policy rule set. Allowed traffic passes through, denied traffic is blocked, and some firewalls can inspect session state or application content. Firewalls may operate at the network, transport, or application layer.

Modern firewalls often combine packet filtering, state tracking, NAT, application awareness, and logging. They are typically placed at the boundary between trust zones or between the internal network and the internet.

---

## Firewalls in network operations

Firewalls define which traffic is allowed between users, servers, and external networks. They protect sensitive zones and reduce the risk of unauthorized access. They also provide logs that are useful for troubleshooting and security investigations.

In a NOC or SOC, firewall logs help explain connection failures, blocked sessions, and unusual traffic attempts. They are often one of the first places analysts check during incident review.

---

## Firewall types

| Type | Description |
|---|---|
| Packet-filtering firewall | Rules based on packet headers |
| Stateful firewall | Tracks connection state |
| Proxy firewall | Terminates and relays sessions |
| Next-generation firewall | Adds application-aware inspection |

---

## What makes firewalling work in practice

Firewall policy must match actual business and application needs. Overly strict rules can break services, while overly broad rules reduce protection. Rule review and logging are both essential.

Placement also matters. A firewall that sits at the wrong boundary may not see the traffic that needs protection. Good visibility depends on correct zone design and good rule maintenance.

---

## How Trisul handles firewalls

Trisul helps operators understand firewall behavior by showing what traffic is flowing, what traffic is missing, and where changes appear over time. This makes it easier to validate firewall policy, spot blocked applications, and detect unexpected traffic patterns.

---

## Related terms

- Packet filtering
- ACL
- Network segmentation
- Policy enforcement
- Security zone

---

## Frequently asked questions

### What is a firewall?

A firewall is a network security control that monitors and filters traffic between networks or zones based on defined rules. It is used to enforce policy, block unauthorized access, and control application traffic.

### How does a firewall work?

A firewall compares traffic against a policy rule set. Allowed traffic passes through, denied traffic is blocked, and some firewalls can inspect session state or application content. Firewalls may operate at the network, transport, or application layer.

### What types of firewalls are there?

Common firewall types include packet-filtering firewalls, stateful firewalls, proxy firewalls, and next-generation firewalls. Each type offers different levels of inspection and control.

### Why is firewall monitoring important?

Firewall monitoring is important because it reveals blocked traffic, policy violations, unusual connection attempts, and traffic volume trends. It helps security and operations teams verify that policy is working as expected.