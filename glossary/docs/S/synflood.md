---
title: What is a SYN flood?
description: A SYN flood is a denial-of-service attack that overwhelms a target by sending a large number of TCP connection requests without completing the handshake. It consumes server or firewall resources and can degrade service.
sidebar_label: SYN flood
sidebar_position: 159
slug: /glossary/syn-flood
keywords:
  - SYN flood
  - DoS
  - TCP attack
  - handshake abuse
  - denial of service
  - network attack
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a SYN flood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SYN flood is a denial-of-service attack that overwhelms a target by sending a large number of TCP connection requests without completing the handshake. It consumes server or firewall resources and can degrade service."
      }
    },
    {
      "@type": "Question",
      "name": "How does a SYN flood work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SYN flood sends many initial TCP SYN packets but does not complete the handshake. The target keeps waiting for half-open connections, which consumes resources until the system becomes overloaded."
      }
    },
    {
      "@type": "Question",
      "name": "What are signs of a SYN flood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signs include a spike in SYN packets, many half-open connections, failed application access, and resource exhaustion on servers or firewalls."
      }
    },
    {
      "@type": "Question",
      "name": "Why is SYN flood detection important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SYN flood detection is important because early detection helps operators protect services before they become unavailable. It also helps distinguish attack traffic from normal connection behavior."
      }
    }
  ]
};

# What is a SYN flood?

A SYN flood is a denial-of-service attack that overwhelms a target by sending a large number of TCP connection requests without completing the handshake. It consumes server or firewall resources and can degrade service.

---

## How a SYN flood works

TCP starts with a handshake: SYN, SYN-ACK, ACK. In a SYN flood, the attacker sends many SYN packets but does not finish the handshake.

The target allocates resources for each half-open connection. If enough of these accumulate, the system becomes overloaded and real users may not be able to connect.

---

## SYN flood in network operations

SYN floods are common volumetric attacks against public-facing services. They can affect servers, firewalls, load balancers, and other stateful devices.

Operators look for unusual spikes in SYN traffic and a large number of incomplete connection attempts. Flow data and packet capture help confirm the attack pattern.

---

## Common SYN flood indicators

| Indicator | Meaning |
|---|---|
| High SYN rate | Connection requests are spiking |
| Many half-open sessions | Handshake is not completing |
| Low ACK completion | Few valid connections finish |
| Resource pressure | Device or server is overloaded |

---

## What makes SYN flood detection work in practice

Detection works best when the baseline is known. A sudden rise in SYN packets is more meaningful when compared to normal traffic.

It is also important to separate attack traffic from legitimate connection spikes. That requires combining traffic volume with session behavior and service context.

---

## How Trisul handles SYN flood

Trisul can spot abnormal TCP connection behavior by tracking flow and packet patterns. This helps operators see when SYN traffic is rising unusually and investigate the affected target.

---

## Related terms

- DDoS detection
- TCP retransmission
- Packet loss
- Firewall
- Network security monitoring