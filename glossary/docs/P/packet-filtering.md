---
title: What is packet filtering?
description: Packet filtering is the process of allowing or blocking network packets based on rules such as source, destination, protocol, port, or application. It is a core function of firewalls and access control systems.
sidebar_label: Packet filtering
sidebar_position: 127
slug: /glossary/packet-filtering
keywords:
  - packet filtering
  - network filtering
  - firewall rules
  - packet inspection
  - traffic control
  - access control
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is packet filtering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet filtering is the process of allowing or blocking network packets based on rules such as source, destination, protocol, port, or application. It is a core function of firewalls and access control systems."
      }
    },
    {
      "@type": "Question",
      "name": "How does packet filtering work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet filtering checks each packet against a rule set. If the packet matches an allow rule, it passes. If it matches a deny rule, it is dropped. Filtering can be stateless or stateful depending on whether the device tracks connection context."
      }
    },
    {
      "@type": "Question",
      "name": "Where is packet filtering used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet filtering is used in firewalls, routers, gateways, intrusion prevention systems, and network access control policies. It is used to enforce security policy and reduce unwanted traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How does packet filtering help network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet filtering helps network analytics by controlling what traffic is allowed into a monitored network segment and by reducing noise from unwanted packets. It also provides visibility into which traffic classes are permitted or blocked."
      }
    }
  ]
};

# What is packet filtering?

Packet filtering is the process of allowing or blocking network packets based on rules such as source, destination, protocol, port, or application. It is a core function of firewalls and access control systems.

---

## How packet filtering works

Packet filtering checks each packet against a configured rule set. A packet that matches an allow rule is forwarded. A packet that matches a deny rule is dropped. Rules can be based on IP addresses, ports, protocols, or connection state.

Filtering may be stateless or stateful. Stateless filtering evaluates each packet independently. Stateful filtering tracks connection context and uses that state to decide whether a packet should pass.

---

## Packet filtering in network operations

Packet filtering is used to enforce network security policy. It blocks traffic that is not permitted and reduces exposure to unnecessary or malicious connections. It also helps limit broadcast, multicast, or unwanted application traffic.

In network operations, packet filtering is often deployed at the edge, between zones, or around sensitive services. It is a basic control used in both enterprise and ISP environments.

---

## Packet filtering vs related controls

| Control | Purpose |
|---|---|
| Packet filtering | Allow or block packets by rule |
| Firewall | Enforce security policy using filtering and state |
| ACL | Simple rule-based traffic control |
| IDS/IPS | Detect or prevent malicious traffic |

---

## What makes packet filtering work in practice

Rule order matters because the first matching rule may decide the outcome. Too many rules can increase processing overhead. Poorly written rules can accidentally block valid traffic or allow unwanted traffic.

Filtering must be reviewed regularly as applications and network paths change. A rule set that was correct last month may no longer match current traffic patterns.

---

## How Trisul handles packet filtering

Trisul can observe the effect of packet filtering by showing what traffic is actually passing through the network. This helps operators compare intended policy against real traffic. It also helps identify denied traffic patterns, unexpected sources, and blocked application flows.

---

## Related terms

- Firewall
- ACL
- Packet capture
- Network security monitoring
- Policy enforcement

---

## Frequently asked questions

### What is packet filtering?

Packet filtering is the process of allowing or blocking network packets based on rules such as source, destination, protocol, port, or application. It is a core function of firewalls and access control systems.

### How does packet filtering work?

Packet filtering checks each packet against a rule set. If the packet matches an allow rule, it passes. If it matches a deny rule, it is dropped. Filtering can be stateless or stateful depending on whether the device tracks connection context.

### Where is packet filtering used?

Packet filtering is used in firewalls, routers, gateways, intrusion prevention systems, and network access control policies. It is used to enforce security policy and reduce unwanted traffic.

### How does packet filtering help network analytics?

Packet filtering helps network analytics by controlling what traffic is allowed into a monitored network segment and by reducing noise from unwanted packets. It also provides visibility into which traffic classes are permitted or blocked.