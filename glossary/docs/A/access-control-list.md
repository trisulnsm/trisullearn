---
title: What is an Access Control List (ACL)?
description: An Access Control List (ACL) is a set of rules on a network device that permits or denies traffic based on source IP, destination IP, protocol, and port, used for security, traffic filtering, and network management.
sidebar_label: Access Control List
sidebar_position: 44
slug: /glossary/access-control-list
keywords:
  - access control list
  - acl
  - network acl
  - packet filtering
  - access list
  - standard acl
  - extended acl
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the five types of ACLs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard ACL filters only source IP addresses. Extended ACL filters source IP, destination IP, source port, destination port, and protocol. Dynamic ACL (Lock and Key) relies on authentication and authorizes specific users. Reflexive ACL (IP session ACL) filters based on upper-layer session information. Time-based ACL applies rules during specific times of day or week."
      }
    },
    {
      "@type": "Question",
      "name": "What are the components of an ACL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key components include sequence number (identifies ACL entry), ACL name, remark (description), network protocol (IP, TCP, UDP), permit or deny statement, source or destination IP address, and optional logging to track traffic matching the rule. Each entry defines access rights for a specific condition."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between standard and extended ACL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard ACL filters only source IP addresses and is less processor intensive. Extended ACL filters source IP, destination IP, source port, destination port, and protocol, providing granular control but requiring more CPU and memory. Use Standard for simple deployments and Extended for precise packet filtering."
      }
    },
    {
      "@type": "Question",
      "name": "How does ACL relate to flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring can show traffic that matches ACL rules by analyzing flow records for source IP, destination IP, port, and protocol. ACL logging counts packets matching rules, while flow monitoring provides detailed traffic analysis by application and conversation without requiring packet capture Intrusion Detection placates."
      }
    }
  ]
};

# What is an Access Control List (ACL)?

An Access Control List (ACL) is a set of rules on a network device that permits or denies traffic based on source IP, destination IP, protocol, and port. ACLs provide security, traffic filtering, and network management. They enhance performance by limiting network traffic and provide granular control over traffic flow entering the network.

---

## How it works

ACL entries are processed sequentially by sequence number. Each entry contains a permit or deny statement that matches packets against defined conditions. When a packet matches an entry, the specified action is taken. If no entry matches, the default action is typically to deny. ACLs can log matches to track traffic patterns.

---

## In network operations

- **NOC:** Use ACLs to filter unwanted traffic and protect critical infrastructure from unauthorized access.
- **Security:** Implement security policies by blocking malicious IPs, restricting access to sensitive systems, and preventing unauthorized protocols.
- **Traffic Management:** Use ACLs for QoS, NAT configuration, and traffic shaping to prioritize critical applications.

---

## Standard vs extended ACL

| Dimension | Standard ACL | Extended ACL |
|---|---|---|
| Filters | Source IP only | Source IP, destination IP, port, protocol |
| Granularity | Low | High |
| Resource usage | Low | Higher CPU and memory |
| Best for | Simple deployments | Precise packet filtering |

---

## How Trisul handles it

Trisul flow monitoring can analyze traffic that matches ACL rules by examining flow records for source IP, destination IP, port, and protocol. ACL logging provides packet counts matching rules. Trisul's flow analytics enable querying traffic by these fields without requiring packet capture. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is packet filtering?](/glossary/packet-filtering)
- [What is firewall?](/glossary/firewall)
- [What is QoS?](/glossary/qos)
- [What is NAT?](/glossary/nat)

---

## Frequently asked questions

### What are the five types of ACLs?

Standard ACL filters only source IP addresses. Extended ACL filters source IP, destination IP, source port, destination port, and protocol. Dynamic ACL (Lock and Key) relies on authentication and authorizes specific users. Reflexive ACL (IP session ACL) filters based on upper-layer session information. Time-based ACL applies rules during specific times of day or week.

### What are the components of an ACL?

Key components include sequence number (identifies ACL entry), ACL name, remark (description), network protocol (IP, TCP, UDP), permit or deny statement, source or destination IP address, and optional logging to track traffic matching the rule. Each entry defines access rights for a specific condition.

### What is the difference between standard and extended ACL?

Standard ACL filters only source IP addresses and is less processor intensive. Extended ACL filters source IP, destination IP, source port, destination port, and protocol, providing granular control but requiring more CPU and memory. Use Standard for simple deployments and Extended for precise packet filtering.

### How does ACL relate to flow monitoring?

Flow monitoring can show traffic that matches ACL rules by analyzing flow records for source IP, destination IP, port, and protocol. ACL logging counts packets matching rules, while flow monitoring provides detailed traffic analysis by application and conversation without requiring packet capture.