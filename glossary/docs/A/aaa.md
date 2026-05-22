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
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AAA stands for authentication, authorization, and accounting. It is a framework for controlling access and recording user activity on networks and systems."
      }
    },
    {
      "@type": "Question",
      "name": "What does authentication mean in AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Authentication means verifying the identity of a user or device."
      }
    },
    {
      "@type": "Question",
      "name": "What does authorization mean in AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Authorization means deciding what an authenticated user or device is allowed to do."
      }
    },
    {
      "@type": "Question",
      "name": "What does accounting mean in AAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Accounting means recording what actions were taken, when they happened, and by whom."
      }
    }
  ]
};

# What is AAA?

AAA stands for authentication, authorization, and accounting. It is a framework for controlling access and recording user activity on networks and systems.

---

## How AAA works

Authentication checks identity first. Authorization then decides what that identity is allowed to do.

Accounting records the activity for review, billing, auditing, or investigation. Together, these three functions create a complete access-control framework.

---

## AAA in network operations

AAA is common in remote access, administrative login, and enterprise network access systems. It helps ensure that only approved users can get in.

It also provides traceability. If something changes or fails, accounting records help show who did what and when.

---

## AAA components

| Component | Meaning |
|---|---|
| Authentication | Verify identity |
| Authorization | Allow specific actions |
| Accounting | Record activity |

---

## What makes AAA useful

AAA is useful because it separates identity, permission, and recordkeeping. That makes access control easier to manage and audit.

It is one of the most important frameworks for secure operations.

---

## How Trisul handles AAA context

Trisul can use AAA-related context to correlate user access with traffic behavior and network activity.

---

## Related terms

- Authentication logging
- Network access
- User analytics
- Security auditing
- Syslog

---

## Frequently asked questions

### What is AAA?

AAA stands for authentication, authorization, and accounting. It is a framework for controlling access and recording user activity on networks and systems.

### What does authentication mean in AAA?

Authentication means verifying the identity of a user or device.

### What does authorization mean in AAA?

Authorization means deciding what an authenticated user or device is allowed to do.

### What does accounting mean in AAA?

Accounting means recording what actions were taken, when they happened, and by whom.