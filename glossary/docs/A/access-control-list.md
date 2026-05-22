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
  - flow monitoring
  - traffic filtering
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is an Access Control List (ACL)?",
  "description": "An Access Control List (ACL) is a set of rules on a network device that permits or denies traffic based on source IP, destination IP, protocol, and port.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Access Control List (ACL)",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is an Access Control List (ACL)?

An Access Control List (ACL) is a set of rules on a network device that permits or denies traffic based on **source IP**, **destination IP**, **protocol**, and **port**. ACLs provide security, traffic filtering, and network management. They can also help limit traffic entering or leaving an interface.

---

## How it works

ACL entries are processed sequentially by sequence number. Each entry contains a permit or deny statement that matches packets against defined conditions. When a packet matches an entry, the specified action is taken. If no entry matches, the default action is typically to deny. ACLs can log matches to track traffic patterns.

Processing order matters: ACLs are evaluated top-to-bottom, and the first match determines the action.

---

## In network operations

- **NOC:** Use ACLs to filter unwanted traffic and protect critical infrastructure from unauthorized access.
- **Security:** Implement security policies by blocking malicious IPs, restricting access to sensitive systems, and preventing unauthorized protocols.
- **Traffic Management:** Use ACLs for QoS, NAT configuration, and traffic shaping to prioritize critical applications.

Trisul flow monitoring can help analyze traffic patterns that correspond to ACL-defined fields such as source IP, destination IP, port, and protocol.

---

## Standard vs extended ACL

| Dimension | Standard ACL | Extended ACL |
|---|---|---|
| Filters | Source IP only | Source IP, destination IP, port, protocol |
| Granularity | Low | High |
| Resource usage | Lower | Higher |
| Best for | Simple deployments | Precise packet filtering |

## Types of ACLs

| Type | Description | Use Case |
|---|---|---|
| Standard | Filters source IP only | Simple network segmentation |
| Extended | Filters source/dest IP, ports, protocol | Granular security policies |
| Dynamic (Lock and Key) | Authentication-based, user-specific | Temporary access for remote users |
| Reflexive (IP session) | Filters based on session information | Stateful return traffic filtering |
| Time-based | Applies during specific times | Business hours access control |

---

## Components of an ACL

| Component | Purpose |
|---|---|
| Sequence number | Identifies ACL entry order |
| ACL name | Identifier for the ACL |
| Remark | Description of the rule |
| Protocol | IP, TCP, UDP, ICMP, etc. |
| Permit/Deny | Action to take when matched |
| Source IP | Source address or network |
| Destination IP | Destination address or network |
| Source port | Source port (extended ACL only) |
| Destination port | Destination port (extended ACL only) |
| Logging | Track traffic matching the rule |

---

## How Trisul handles ACL analysis

Trisul flow monitoring can analyze traffic associated with ACL-relevant fields by examining flow records for source IP, destination IP, port, and protocol. This enables:

- **ACL effectiveness verification**: Query flow data to see what traffic is actually passing or being blocked by ACL rules.
- **5-tuple analysis**: Trisul captures the fields used in extended ACLs, including source/destination IP, ports, and protocol.
- **Traffic pattern validation**: Confirm that ACL policies are working as intended by analyzing flow metadata without requiring packet capture.
- **ACL logging correlation**: Correlate ACL packet counts from device logs with Trisul flow analytics for additional visibility.

ACL logging provides packet counts matching rules, while Trisul's flow analytics enables querying traffic by these fields with statistical summaries and long-term trend analysis.

---

## Related terms

- [Flow monitoring](/glossary/flow-monitoring)
- [Flow metadata](/glossary/flow-metadata)
- [NetFlow](/glossary/netflow)
- [Packet filtering](/glossary/packet-filtering)
- [QoS](/glossary/qos)
- [NAT](/glossary/nat)
- [Network security](/glossary/network-security)
- [Traffic shaping](/glossary/traffic-shaping)
- [Intrusion Detection System](/glossary/ids)
- [Firewall](/glossary/firewall)

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

### How can Trisul help verify ACL effectiveness?

Trisul flow monitoring queries the same fields used in extended ACLs, such as source/destination IP, ports, and protocol, to visualize what traffic is actually flowing through the network and help verify that ACL policies are working as intended.

### What is the default ACL action?

If no ACL entry matches a packet, the default action is typically to deny, also known as implicit deny at the end of the ACL.