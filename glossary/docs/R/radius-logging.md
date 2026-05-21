---
title: What is RADIUS logging?
description: RADIUS logging records Authentication, Authorization, and Accounting events from RADIUS servers. It tracks user authentication, session details, and bandwidth usage for security auditing, compliance, billing, and troubleshooting.
sidebar_label: RADIUS logging
sidebar_position: 89
slug: /glossary/radius-logging
keywords:
  - RADIUS logging
  - RADIUS accounting
  - AAA logging
  - user authentication
  - network access
  - session logging
  - authentication logging
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is RADIUS logging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RADIUS logging records Authentication, Authorization, and Accounting (AAA) events from RADIUS servers. It tracks user authentication, session details, and bandwidth usage. RADIUS logging enables security auditing, compliance, billing, and troubleshooting of network access."
      }
    },
    {
      "@type": "Question",
      "name": "What does RADIUS logging capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RADIUS logging captures username, authentication result (success/failure), NAS IP address, NAS port, session ID, start time, stop time, input octets, output octets, input packets, output packets, termination cause, and calling station ID. This data tracks user sessions and bandwidth usage."
      }
    },
    {
      "@type": "Question",
      "name": "Why is RADIUS logging important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RADIUS logging is critical for security auditing showing who accessed the network and when. It supports compliance requirements for user access logging. Billing systems use RADIUS accounting for chargeback based on bandwidth usage. Troubleshooting uses RADIUS logs to diagnose authentication failures."
      }
    },
    {
      "@type": "Question",
      "name": "How does RADIUS logging work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RADIUS servers send accounting records to log collectors via UDP port 1813 or 1646. NAS devices send start, interim, and stop accounting records. Collectors aggregate records by user and session. Logs are stored for analysis and reporting."
      }
    }
  ]
};

# What is RADIUS logging?

RADIUS logging records Authentication, Authorization, and Accounting events from RADIUS servers. It tracks user authentication, session details, and bandwidth usage for security auditing, compliance, billing, and troubleshooting. RADIUS logging provides visibility into user network access.

---

## How RADIUS logging works

RADIUS servers authenticate users and send accounting records to log collectors. NAS devices (routers, switches, wireless access points) send start, interim, and stop accounting records. Collectors aggregate records by user and session. Logs are stored for analysis and reporting.

Accounting records include session duration and bandwidth usage. Start records indicate session beginning. Stop records indicate session ending with final byte counts. Interim records provide periodic updates during long sessions.

---

## RADIUS logging in network operations

In the NOC, use RADIUS logs to track user authentication and diagnose authentication failures. Security teams audit user access showing who connected when and from where. Billing systems use RADIUS accounting for chargeback based on bandwidth usage.

Compliance teams use RADIUS logs for audit requirements showing user access. Troubleshooting uses RADIUS logs to diagnose connection problems. Failed authentication attempts indicate security issues.

---

## RADIUS logging fields

| Field | Description |
|---|---|
| Username | User identity |
| Authentication result | Success or failure |
| NAS IP | Network access server IP |
| Session ID | Unique session identifier |
| Start time | Session start timestamp |
| Stop time | Session end timestamp |
| Input octets | Bytes received |
| Output octets | Bytes sent |
| Termination cause | Why session ended |

---

## What makes RADIUS logging work in practice

Log completeness determines investigation capability. Missing RADIUS logs mean lost authentication history. Enable logging on all RADIUS servers and ensure logs reach the collector reliably. Retry logic handles temporary collector outages.

Log retention period must match compliance requirements. Some regulations require RADIUS logs for 90 days or longer. Storage capacity must support the retention period. RADIUS logging generates significant data with many users.

---

## How Trisul handles RADIUS logging

Trisul correlates RADIUS logging data with flow records to provide user-level visibility. When RADIUS logs are available, Trisul maps IP addresses to usernames. This enables user-based traffic analysis showing who generated traffic. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is AAA?](/docs/glossary/aaa)
- [What is authentication logging?](/docs/glossary/authentication-logging)
- [What is network access?](/docs/glossary/network-access)
- [What is user analytics?](/docs/glossary/user-analytics)
- [What is Syslog?](/docs/glossary/syslog)

---

## Frequently asked questions

### What is RADIUS logging?

RADIUS logging records Authentication, Authorization, and Accounting (AAA) events from RADIUS servers. It tracks user authentication, session details, and bandwidth usage. RADIUS logging enables security auditing, compliance, billing, and troubleshooting of network access.

### What does RADIUS logging capture?

RADIUS logging captures username, authentication result (success/failure), NAS IP address, NAS port, session ID, start time, stop time, input octets, output octets, input packets, output packets, termination cause, and calling station ID. This data tracks user sessions and bandwidth usage.

### Why is RADIUS logging important?

RADIUS logging is critical for security auditing showing who accessed the network and when. It supports compliance requirements for user access logging. Billing systems use RADIUS accounting for chargeback based on bandwidth usage. Troubleshooting uses RADIUS logs to diagnose authentication failures.

### How does RADIUS logging work?

RADIUS servers send accounting records to log collectors via UDP port 1813 or 1646. NAS devices send start, interim, and stop accounting records. Collectors aggregate records by user and session. Logs are stored for analysis and reporting.