---
title: What is inbound vs outbound traffic?
description: Inbound traffic is data packets entering a network from an external source, while outbound traffic is data packets leaving a network to reach an external destination. Trisul classifies traffic direction using DIR_INTOHOME and DIR_OUTOFHOME metrics.
sidebar_label: Inbound vs outbound traffic
sidebar_position: 55
slug: /glossary/inbound-vs-outbound-traffic
keywords:
  - inbound traffic
  - outbound traffic
  - ingress traffic
  - egress traffic
  - network traffic direction
  - incoming traffic
  - outgoing traffic
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is inbound traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inbound traffic refers to data packets entering a network from an external source. This includes requests from the internet to access web services hosted within a private network, emails being received, or remote login attempts. Traffic is inbound when someone external initiates a connection to your network, such as a visitor accessing your website."
      }
    },
    {
      "@type": "Question",
      "name": "What is outbound traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outbound traffic refers to data packets leaving a network to reach an external destination. This includes sending emails, accessing websites, or using cloud-based resources from within the private network. Traffic is outbound when a client inside your network initiates the connection to the internet, such as a user browsing the web."
      }
    },
    {
      "@type": "Question",
      "name": "What's the key difference between inbound and outbound traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The key difference is who initiates the connection. Inbound traffic originates from outside the network (external source initiates), while outbound traffic originates inside the network (internal source initiates). Traffic may flow both ways, but what matters is who opened the connection."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul classify inbound vs outbound traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul classifies traffic direction based on home network configuration. DIR_INTOHOME represents incoming/inbound traffic (external source to home destination), and DIR_OUTOFHOME represents outgoing/outbound traffic (home source to external destination). These directional metrics appear in Aggregates counter group and can be queried in Explore Flows."
      }
    }
  ]
};

# What is inbound vs outbound traffic?

Inbound traffic is data packets entering a network from an external source, while outbound traffic is data packets leaving a network to reach an external destination. The key distinction is **who initiates the connection** — inbound means someone external initiated the connection to your network, while outbound means someone inside your network initiated the connection to the outside.

---

## Key differences

| Aspect | Inbound Traffic | Outbound Traffic |
|---|---|---|
| Direction | Entering the network from outside | Leaving the network to outside |
| Initiator | External source initiates | Internal source initiates |
| Examples | Visitor accessing your website, receiving email, remote login | User browsing web, sending email, accessing cloud services |
| Security focus | Protect against unauthorized access | Prevent data exfiltration and malware communication |

---

## How Trisul handles it

Trisul classifies traffic direction based on home network configuration. **DIR_INTOHOME** represents incoming/inbound traffic (external source to home destination), and **DIR_OUTOFHOME** represents outgoing/outbound traffic (home source to external destination). These directional metrics appear in the Aggregates counter group. Login as `user` and go to **Tools → Long Term Traffic**, set Counter group = Aggregates, Meter = Total, and Keys to the Item = DIR_INTOHOME, DIR_OUTOFHOME to view directional traffic. Full documentation is at https://docs.trisul.org/docs/ag/context/home_networks/.

---

## Related terms

- [What is home network?](/docs/glossary/home-network)
- [What is traffic direction?](/docs/glossary/traffic-direction)
- [What is Aggregates counter group?](/docs/glossary/aggregate-counter-group)
- [What is Explore Flows?](/docs/glossary/explore-flows)

---

## Frequently asked questions

### What is inbound traffic?

Inbound traffic refers to data packets entering a network from an external source. This includes requests from the internet to access web services hosted within a private network, emails being received, or remote login attempts. Traffic is inbound when someone external initiates a connection to your network, such as a visitor accessing your website.

### What is outbound traffic?

Outbound traffic refers to data packets leaving a network to reach an external destination. This includes sending emails, accessing websites, or using cloud-based resources from within the private network. Traffic is outbound when a client inside your network initiates the connection to the internet, such as a user browsing the web.

### What's the key difference between inbound and outbound traffic?

The key difference is who initiates the connection. Inbound traffic originates from outside the network (external source initiates), while outbound traffic originates inside the network (internal source initiates). Traffic may flow both ways, but what matters is who opened the connection.

### How does Trisul classify inbound vs outbound traffic?

Trisul classifies traffic direction based on home network configuration. DIR_INTOHOME represents incoming/inbound traffic (external source to home destination), and DIR_OUTOFHOME represents outgoing/outbound traffic (home source to external destination). These directional metrics appear in Aggregates counter group and can be queried in Explore Flows.