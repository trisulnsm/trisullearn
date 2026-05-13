---
title: What is an Access Control List (ACL)?
sidebar_label: Access Control List (ACL)
sidebar_position: 1
slug: /A/access-control-list
description: Learn what an Access Control List (ACL) is, how ACLs work, different ACL types, and how they help control and secure network traffic.
keywords:
  - access control list
  - ACL networking
  - ACL firewall
  - network ACL
  - ACL traffic filtering
  - access control list security
---

# What is an Access Control List (ACL)?

An Access Control List (ACL) is a set of rules used by routers, switches, firewalls, and operating systems to permit or deny network traffic based on conditions such as IP addresses, protocols, and ports.

ACLs are commonly used to restrict unauthorized access, segment traffic, filter unwanted communication, and enforce security policies across enterprise, data center, and ISP networks.

## How ACLs Work

ACLs inspect packets and compare them against a list of rules configured on a network device.

A typical ACL evaluation process works like this:

1. A packet arrives at a router, firewall, or switch
2. The device compares the packet against ACL rules in sequence
3. Each rule checks parameters such as:
   - Source IP address
   - Destination IP address
   - Protocol
   - Port number
4. The first matching rule is applied
5. The packet is either permitted or denied

Most ACLs follow a top-down evaluation process, meaning rule order is important.

<!-- IMAGE: Simple ACL workflow diagram -->
<!-- Packet → ACL Rule Check → Permit / Deny -->

## Types of ACLs

### Standard ACL

Standard ACLs filter traffic primarily based on source IP addresses.

These are simpler but offer limited filtering granularity.

### Extended ACL

Extended ACLs can filter traffic using:
- Source and destination IP addresses
- Protocols
- Port numbers
- Traffic direction

Extended ACLs provide more precise traffic control.

### Network ACL

Network ACLs are commonly used in cloud and virtualized environments to control subnet-level traffic.

### Stateless ACL

Stateless ACLs evaluate packets individually without tracking connection state.

## Why ACLs Matter

ACLs help network and security teams:

- Restrict unauthorized access
- Reduce unnecessary traffic
- Segment sensitive systems
- Control east-west traffic movement
- Limit management access
- Enforce organizational security policies

Proper ACL design can also reduce attack surface and improve traffic visibility across large environments.

## Common Operational Use Cases

### Blocking Unauthorized Subnets

Prevent traffic from untrusted or restricted networks.

### Restricting Administrative Access

Allow SSH, RDP, or management traffic only from approved hosts.

### Inter-VLAN Traffic Control

Limit communication between internal network segments.

### ISP Edge Filtering

Filter suspicious or invalid traffic at the network edge.

### Reducing Lateral Movement

Prevent compromised systems from reaching sensitive assets.

## ACL vs Firewall

| Feature | ACL | Firewall |
|---|---|---|
| Traffic Filtering | Basic packet filtering | Advanced traffic inspection |
| Stateful Inspection | Usually stateless | Stateful |
| Application Awareness | Limited | Advanced |
| Deployment Scope | Routers, switches, firewalls | Dedicated security platforms |
| Traffic Visibility | Basic | Deep inspection and logging |

ACLs are typically lightweight and fast, while firewalls provide deeper inspection and more advanced security controls.

## How Trisul Helps Monitor ACL Activity

Trisul helps network and security teams analyze traffic patterns affected by ACL policies by monitoring allowed, blocked, and redirected traffic flows across the network.

Flow analysis and packet investigation can help identify unexpected traffic behavior, denied communication attempts, routing anomalies, and segmentation issues related to ACL configurations.

Trisul can also help investigate:
- East-west traffic movement
- Suspicious connection attempts
- Sudden traffic drops after ACL changes
- Unauthorized communication between segments

## Related Terms

- [Flow Analysis](/glossary/flow-analysis)
- [Traffic Investigation](/glossary/traffic-investigation)
- [Packet Capture](/glossary/packet-capture)
- [East-West Traffic](/glossary/east-west-traffic)
- [Network Security Monitoring](/glossary/network-security-monitoring)

---

## FAQ

### What does an ACL do?

An ACL controls network traffic by permitting or denying packets based on predefined rules such as IP addresses, protocols, and ports.

### What's the difference between an ACL and a firewall?

ACLs perform basic packet filtering, while firewalls provide deeper inspection, state tracking, logging, and application-level security features.

### Are ACLs stateful or stateless?

Most traditional ACLs are stateless, meaning they evaluate packets individually without tracking active connections.

### Can ACLs block specific applications?

Extended ACLs can block traffic associated with specific ports or protocols, but they typically lack deep application awareness.

### How do ACLs affect network traffic?

ACLs can allow, restrict, redirect, or block traffic flows depending on configured rules and policies.