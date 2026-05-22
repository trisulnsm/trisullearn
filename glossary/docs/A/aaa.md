---
title: What is AAA?
description: AAA stands for authentication, authorization, and accounting. It is a framework for controlling access and recording user activity on networks and systems.
sidebar_label: AAA
sidebar_position: 240
slug: /glossary/aaa
keywords:
  - AAA
  - authentication authorization accounting
  - access control
  - identity management
  - accounting logs
  - user access
  - RADIUS
  - TACACS+
  - NetFlow
  - network analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is AAA (Authentication, Authorization, Accounting)?",
  "description": "AAA is a framework for controlling network access and recording user activity through authentication, authorization, and accounting.",
  "about": {
    "@type": "DefinedTerm",
    "name": "AAA (Authentication, Authorization, Accounting)",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is AAA?

AAA stands for **authentication**, **authorization**, and **accounting**. It is a framework for controlling access and recording user activity on networks and systems.

---

## How AAA works

Authentication checks identity first. Authorization then decides what that identity is allowed to do.

Accounting records the activity for review, billing, auditing, or investigation. Together, these three functions create a complete access-control framework.

In practice, AAA workflows typically follow this sequence:
1. **Authentication** → User or device proves identity.
2. **Authorization** → System grants specific permissions.
3. **Accounting** → System logs actions for audit trails.

---

## AAA in network operations

AAA is common in remote access, administrative login, and enterprise [network access control](/glossary/nac) systems. It helps ensure that only approved users can get in.

It also provides traceability. If something changes or fails, accounting records help show who did what and when, supporting [security auditing](/glossary/security-auditing).

For a Trisul glossary hub, this term is technically valid but only indirectly relevant because AAA is primarily an access-control concept rather than a core Trisul feature or workflow.

---

## AAA components

| Component | Meaning |
|---|---|
| Authentication | Verify identity. |
| Authorization | Allow specific actions. |
| Accounting | Record activity. |

## Common AAA protocols

| Protocol | Use Case | Transport |
|---|---|---|
| RADIUS | Network access, Wi-Fi, VPN | UDP (1812/1813) |
| TACACS+ | Device administration, especially Cisco environments | TCP (49) |
| Diameter | 4G/5G networks and roaming | TCP or SCTP (3868) |

---

## What makes AAA useful

AAA is useful because it separates identity, permission, and recordkeeping. That makes access control easier to manage and audit.

Key benefits:
- **Clear separation of concerns**: Identity management is decoupled from permission enforcement.
- **Audit compliance**: Accounting logs support regulatory and internal audit requirements.
- **Incident investigation**: Accounting records enable forensic analysis of user actions.
- **Billing and chargeback**: Accounting data supports usage-based billing models.

---

## Trisul relevance

AAA can be useful in environments where Trisul is used to analyze traffic related to authentication systems, remote access, or administrative activity. In that case, Trisul can help correlate network flows with AAA-related events from external systems, but the glossary page should avoid implying native AAA processing features unless they are documented in Trisul product materials.

## Related terms

- [RADIUS](/glossary/radius)
- [TACACS+](/glossary/tacacs-plus)
- [Diameter](/glossary/diameter)
- [Flow metadata](/glossary/flow-metadata)
- [NetFlow](/glossary/netflow)
- [Syslog](/glossary/syslog)
- [SIEM](/glossary/siem)
- [Network access control](/glossary/nac)
- [Packet capture](/glossary/packet-capture)
- [Authentication logging](/glossary/authentication-logging)
- [User analytics](/glossary/user-analytics)
- [Security auditing](/glossary/security-auditing)

## Frequently asked questions

### What is AAA?

AAA stands for authentication, authorization, and accounting. It is a framework for controlling access and recording user activity on networks and systems.

### What does authentication mean in AAA?

Authentication means verifying the identity of a user or device, typically through credentials, certificates, or tokens.

### What does authorization mean in AAA?

Authorization means deciding what an authenticated user or device is allowed to do, such as accessing specific resources or executing commands.

### What does accounting mean in AAA?

Accounting means recording what actions were taken, when they happened, and by whom, creating audit trails for compliance and investigation.

### How does Trisul use AAA data?

Trisul can be used to correlate network flows with external AAA-related events when those data sources are available in the broader monitoring stack.

### What are the most common AAA protocols?

RADIUS is common for network access and Wi-Fi, TACACS+ for device administration, and Diameter for 4G/5G mobile networks.