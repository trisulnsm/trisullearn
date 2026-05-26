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

**Packet filtering** is the process of **allowing or blocking network packets** based on **rules** such as **source, destination, protocol, port, or application**. It is a **core function of firewalls and access control systems**, used to enforce which traffic is permitted on a network.

---

## How packet filtering works

Packet filtering:

- Checks **each packet** against a **configured rule set**.  
- Allows packets that match **accept rules** and **drops** those that match **deny rules**.  

Rules can be based on:

- **IP addresses, ports, protocols**, or  
- **Connection state** (stateful vs stateless filtering).  

- **Stateless filtering** evaluates each packet independently.  
- **Stateful filtering** tracks **connection context** (e.g., established sessions) and uses that state to decide whether a packet should pass.

---

## Packet filtering in network operations

In network operations, packet filtering:

- **Enforces security policy** by blocking traffic that is not allowed and reducing exposure to **unnecessary or malicious connections**.  
- Helps **limit broadcast, multicast, and unwanted application traffic**.  

It is typically deployed:

- At the **network edge**,  
- **Between security zones**, or  
- Around **sensitive services or segments**.  

This makes it a **basic but critical control** in both enterprise and ISP environments.

---

## Packet filtering vs related controls

| Control | Purpose |
|---------|---------|
| Packet filtering | Allow or block packets by rule |
| Firewall | Enforce security policy using filtering and connection state |
| ACL | Simple rule‑based traffic control on routers and switches |
| IDS/IPS | Detect or prevent malicious traffic patterns |

Packet filtering is the **foundational mechanism** behind many of these systems.

---

## What makes packet filtering work in practice

Packet filtering works best when:

- **Rule order and logic are clear**:  
  - Rule order often matters because the **first matching rule decides the outcome**.  
  - Too many rules can increase **processing overhead** and make troubleshooting harder.  
- **Policies are reviewed regularly**:  
  - Applications and network paths change; rules that were correct last month may **no longer reflect current traffic**.  
  - Poorly written rules can **accidentally block valid traffic** or **allow unwanted traffic**.  

Regular audits and traffic‑based validation keep filtering aligned with business and security needs.

---

## How Trisul handles packet filtering

Trisul can:

- **Observe the effect of packet filtering** by showing **what traffic is actually passing through the network**.  
- Help operators **compare intended policy** against **real‑world traffic**, identifying **denied flows, unexpected sources, and blocked application conversations**.  

This makes Trisul useful for **policy validation**, **change‑impact analysis**, and **security‑monitoring workflows** around filtered segments.

---

## Related terms

- [What is a firewall?](/docs/glossary/firewall)  
- [What is an ACL?](/docs/glossary/acl)  
- [What is packet capture?](/docs/glossary/packet-capture)  
- [What is network security monitoring?](/docs/glossary/network-security-monitoring)  
- [What is policy enforcement?](/docs/glossary/policy-enforcement)  

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