---
title: What is endpoint detection and response?
description: Endpoint detection and response, or EDR, is a security approach that monitors endpoints for suspicious behavior and supports investigation and response after detection. It focuses on devices such as laptops, servers, and workstations.
sidebar_label: Endpoint detection and response
sidebar_position: 160
slug: /glossary/endpoint-detection-and-response
keywords:
  - EDR
  - endpoint detection
  - endpoint response
  - host security
  - threat detection
  - incident response
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is endpoint detection and response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Endpoint detection and response, or EDR, is a security approach that monitors endpoints for suspicious behavior and supports investigation and response after detection. It focuses on devices such as laptops, servers, and workstations."
      }
    },
    {
      "@type": "Question",
      "name": "What does EDR monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR monitors endpoint activity such as process execution, file changes, network connections, user actions, and alert patterns. It is designed to catch suspicious behavior on the device itself."
      }
    },
    {
      "@type": "Question",
      "name": "How is EDR different from network security monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR focuses on the endpoint, while network security monitoring focuses on traffic moving across the network. Both are useful and often complement each other."
      }
    },
    {
      "@type": "Question",
      "name": "Why is EDR important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR is important because many attacks are visible first on the endpoint. It helps detect malware, unauthorized activity, and post-compromise behavior."
      }
    }
  ]
};

# What is endpoint detection and response?

Endpoint detection and response, or EDR, is a security approach that monitors endpoints for suspicious behavior and supports investigation and response after detection. It focuses on devices such as laptops, servers, and workstations.

---

## How EDR works

EDR agents run on endpoints and watch device behavior. They may track processes, file changes, user actions, and network connections.

When suspicious behavior is detected, the EDR platform generates an alert. Analysts then investigate the endpoint and may isolate or remediate it.

---

## EDR in network operations

EDR is important because not all attacks are visible in the network. Malware execution, credential theft, and local persistence often show up first on the endpoint.

Network teams and security teams often use EDR together with flow and packet data. That combination gives both host-level and network-level context.

---

## EDR vs network visibility

| View | Focus |
|---|---|
| EDR | Endpoint behavior |
| Network monitoring | Traffic behavior |
| Together | Full investigation context |

---

## What makes EDR work in practice

EDR works best when endpoints are covered consistently. Unmanaged or uninstrumented devices create blind spots.

Analysts also need good correlation between endpoint events and network events. That makes it easier to follow an attack from device activity to network communication.

---

## How Trisul handles EDR

Trisul complements EDR by showing what the endpoint is doing on the network. That helps analysts connect host activity with traffic patterns and external communications.

---

## Related terms

- Network security monitoring
- Threat detection
- Incident response
- Host monitor
- Lateral movement