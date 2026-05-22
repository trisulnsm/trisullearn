---
title: What is firewall logging?
description: Firewall logging is the recording of firewall events such as allowed traffic, blocked traffic, policy matches, and session activity. It helps with security review and troubleshooting.
sidebar_label: Firewall logging
sidebar_position: 215
slug: /glossary/firewall-logging
keywords:
  - firewall logging
  - firewall logs
  - security logs
  - blocked traffic
  - policy logs
  - session logs
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is firewall logging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall logging is the recording of firewall events such as allowed traffic, blocked traffic, policy matches, and session activity. It helps with security review and troubleshooting."
      }
    },
    {
      "@type": "Question",
      "name": "What do firewall logs show?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall logs can show source and destination addresses, ports, actions taken, rule matches, and session details."
      }
    },
    {
      "@type": "Question",
      "name": "Why is firewall logging important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall logging is important because it records what traffic was allowed or blocked and why."
      }
    },
    {
      "@type": "Question",
      "name": "How are firewall logs used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall logs are used for troubleshooting, compliance, incident response, and security auditing."
      }
    }
  ]
};

# What is firewall logging?

Firewall logging is the recording of firewall events such as allowed traffic, blocked traffic, policy matches, and session activity. It helps with security review and troubleshooting.

---

## How firewall logging works

A firewall creates log entries when traffic matches a rule or event condition. These entries may include addresses, ports, actions, and timestamps.

The logs help explain why traffic was allowed or denied. That makes them useful for both operations and security teams.

---

## Firewall logging in operations

Firewall logs are used to confirm policy behavior. If traffic fails to pass, the logs can show whether a rule blocked it.

They also help security teams detect repeated scans, failed connections, or suspicious access attempts.

---

## Common firewall log fields

| Field | Meaning |
|---|---|
| Source | Where traffic came from |
| Destination | Where traffic was going |
| Action | Allowed or blocked |
| Rule | Which policy matched |
| Session | Connection details |

---

## What makes firewall logging useful

Firewall logs are useful because they connect policy to real traffic. Without them, it is much harder to explain why a connection succeeded or failed.

They are most effective when retained long enough to support investigation and audit needs.

---

## How Trisul handles firewall logging

Trisul can complement firewall logging by adding traffic context around rule hits, sessions, and communication patterns.

---

## Related terms

- Security auditing
- Syslog
- SIEM
- Incident investigation
- Intrusion prevention system