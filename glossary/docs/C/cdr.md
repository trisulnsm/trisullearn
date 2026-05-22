---
title: What is a CDR?
description: A CDR, or Call Detail Record, is a log record that captures details about a communication session. It is widely used in telecom systems for billing, reporting, and analysis.
sidebar_label: CDR
sidebar_position: 183
slug: /glossary/cdr
keywords:
  - CDR
  - call detail record
  - telecom record
  - session log
  - billing record
  - usage record
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a CDR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CDR, or Call Detail Record, is a log record that captures details about a communication session. It is widely used in telecom systems for billing, reporting, and analysis."
      }
    },
    {
      "@type": "Question",
      "name": "What does a CDR contain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CDR typically contains the caller and callee identifiers, time, duration, route, and usage details. The exact fields depend on the system and service type."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CDRs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CDRs are important because they provide a structured record of communications that can be used for billing, audits, and operational reporting."
      }
    },
    {
      "@type": "Question",
      "name": "How are CDRs used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CDRs are used to analyze usage patterns, generate reports, and support billing and compliance workflows. They are a core telecom data source."
      }
    }
  ]
};

# What is a CDR?

A CDR, or Call Detail Record, is a log record that captures details about a communication session. It is widely used in telecom systems for billing, reporting, and analysis.

---

## How a CDR works

A CDR is created when a communication event occurs. The record stores details such as who was involved, when the event happened, how long it lasted, and what usage was consumed.

Although the term comes from voice systems, similar records are used for many communication services. The common idea is a structured session record.

---

## CDRs in network operations

CDRs are important in telecom environments because they provide a reliable record of service use. They are used for billing, auditing, and usage tracking.

They also help operators understand customer behavior and service patterns. That makes them useful for both business and operations teams.

---

## Common CDR fields

| Field | Meaning |
|---|---|
| Source | Who initiated the session |
| Destination | Who received it |
| Time | When it happened |
| Duration | How long it lasted |
| Usage | How much service was consumed |

---

## What makes CDRs useful

CDRs are structured, which makes them easy to process and report on. That is why they are so valuable in billing and reporting systems.

Their main strength is consistency. Every record follows a known format, making automated analysis straightforward.

---

## How Trisul handles CDR-style data

Trisul can work with session-style records and related metadata to help operators analyze communication patterns in a structured way.

---

## Related terms

- IPDR
- OSS BSS
- Subscriber billing
- Session logs
- Telecom reporting