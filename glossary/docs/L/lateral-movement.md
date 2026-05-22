---
title: What is lateral movement?
description: Lateral movement is the stage of an attack where an intruder moves from one compromised system to another inside a network. It is a common sign of post-compromise activity.
sidebar_label: Lateral movement
sidebar_position: 162
slug: /glossary/lateral-movement
keywords:
  - lateral movement
  - post-compromise
  - attacker movement
  - internal attack
  - threat hunting
  - security analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is lateral movement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is the stage of an attack where an intruder moves from one compromised system to another inside a network. It is a common sign of post-compromise activity."
      }
    },
    {
      "@type": "Question",
      "name": "Why does lateral movement matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement matters because it shows that an attacker has moved beyond the first compromised host. It can lead to broader access, data theft, or control of additional systems."
      }
    },
    {
      "@type": "Question",
      "name": "How is lateral movement detected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is detected by looking for unusual internal connections, repeated authentication attempts, new access paths, and suspicious movement between hosts or segments."
      }
    },
    {
      "@type": "Question",
      "name": "What helps lateral movement analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow data, host monitoring, authentication logs, and segmentation data help analysts see movement across the network and identify where the attacker is spreading."
      }
    }
  ]
};

# What is lateral movement?

Lateral movement is the stage of an attack where an intruder moves from one compromised system to another inside a network. It is a common sign of post-compromise activity.

---

## How lateral movement works

Once an attacker gets into one host, they often try to reach others. They may use stolen credentials, remote tools, or trusted internal paths.

The goal is usually to expand access or reach valuable systems. This movement often happens quietly so it is harder to spot than the initial attack.

---

## Lateral movement in network operations

Lateral movement is a major concern in SOC workflows. It indicates that an attacker may be spreading beyond the first compromised host.

Analysts look for unusual internal traffic, new internal service use, or activity that does not fit the normal host pattern. Segment boundaries and authentication logs are especially useful here.

---

## Common indicators

| Indicator | Meaning |
|---|---|
| New internal connections | Possible spread |
| Reused credentials | Possible compromise |
| Odd service access | Suspicious movement |
| Internal scans | Host discovery activity |

---

## What makes lateral movement work in practice

Lateral movement is easier to identify when the network is segmented. Without segmentation, attacker movement is harder to distinguish from normal internal traffic.

Good baselines also help. When a host suddenly talks to systems it never contacted before, that stands out more clearly.

---

## How Trisul handles lateral movement

Trisul helps reveal internal traffic changes and host-to-host communication patterns that can indicate lateral movement. This supports threat hunting and incident investigation.

---

## Related terms

- EDR
- Network segmentation
- Security zone
- Host monitor
- Threat hunting