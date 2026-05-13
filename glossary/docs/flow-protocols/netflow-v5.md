---
title: What is NetFlow v5?
sidebar_label: NetFlow v5
sidebar_position: 18
slug: /flow-protocols/netflow-v5
description: Learn what NetFlow v5 is, how it works, what fields it exports, and how it differs from NetFlow v9 and IPFIX.
keywords:
  - netflow v5
  - what is netflow v5
  - netflow version 5
  - netflow v5 vs v9
  - cisco netflow v5
---

# What is NetFlow v5?

NetFlow v5 is a fixed-format flow export protocol developed by Cisco for exporting network traffic flow records from routers and switches to flow collectors. It provides summarized traffic metadata such as source IP, destination IP, ports, protocol, bytes, packets, and timestamps.

It is one of the most widely used NetFlow versions and remains common in network monitoring environments.

---

## NetFlow v5 In Simple Terms

NetFlow v5 is like a standardized traffic report.

Every exported flow record follows the same structure.

That means:

- the same fields  
- the same order  
- the same format  

This makes it simple for collectors to process.

Simple, reliable, rigid. Like tax forms.

---

## Technical Explanation

NetFlow v5 exports flow records in a fixed binary structure.

A flow in NetFlow v5 is typically identified using:

- Source IP  
- Destination IP  
- Source Port  
- Destination Port  
- Protocol  
- Type of Service (ToS)  
- Input Interface  

NetFlow v5 exports metadata such as:

- packet count  
- byte count  
- flow start time  
- flow end time  
- TCP flags  
- BGP AS numbers  
- Next-hop IP  

Unlike NetFlow v9, NetFlow v5 uses a fixed schema and does not support templates.

This makes it simpler but less flexible.

---

## How NetFlow v5 Works

1. Traffic passes through a router or switch  
2. Packets are grouped into flows  
3. Flow metadata is collected  
4. Flow timeout occurs  
5. The device exports NetFlow v5 records  
6. A collector receives and analyzes the records  

This provides summarized traffic visibility.

---

## What Fields Does NetFlow v5 Export?

NetFlow v5 typically exports:

| Field | Description |
|---|---|
| Source IP | Sender address |
| Destination IP | Receiver address |
| Source Port | Sending port |
| Destination Port | Receiving port |
| Protocol | TCP, UDP, ICMP |
| Packet Count | Number of packets |
| Byte Count | Number of bytes |
| Start Time | Flow start timestamp |
| End Time | Flow end timestamp |
| TCP Flags | Connection state |
| Input Interface | Ingress interface |
| Output Interface | Egress interface |
| Source AS | Source autonomous system |
| Destination AS | Destination autonomous system |
| Next Hop | Next-hop IP address |

This fixed structure is what defines NetFlow v5.

---

## Why NetFlow v5 Matters

### Wide compatibility

Supported by many routers, collectors, and analyzers.

### Simplicity

Fixed fields make parsing easy.

### Lower complexity

No templates to manage.

### Proven reliability

Widely used for years in production networks.

### Strong IPv4 visibility

Provides reliable IPv4 traffic analytics.

---

## Common NetFlow v5 Use Cases

- Bandwidth monitoring  
- Top talker analysis  
- Traffic analysis  
- ISP traffic analytics  
- Security monitoring  
- Capacity planning  
- Historical traffic analysis  

---

## NetFlow v5 vs NetFlow v9

| Feature | NetFlow v5 | NetFlow v9 |
|---|---|---|
| Format | Fixed | Template-based |
| Flexibility | Low | High |
| IPv6 Support | No | Yes |
| MPLS Support | No | Yes |
| Extensibility | No | Yes |

NetFlow v5 is simpler.  
NetFlow v9 is more flexible.

---

## NetFlow v5 vs IPFIX

| Feature | NetFlow v5 | IPFIX |
|---|---|---|
| Standardization | Cisco-specific | IETF standard |
| Format | Fixed | Template-based |
| Extensibility | Limited | High |

IPFIX evolved from the template concept introduced in NetFlow v9.

---

## Limitations of NetFlow v5

NetFlow v5 has several limitations:

- IPv4 only  
- fixed field structure  
- no custom fields  
- limited extensibility  
- no native MPLS visibility  
- no native IPv6 visibility  

These limitations led to NetFlow v9 and IPFIX.

Technology evolves. Usually because the old thing hit a wall.

---

## How Trisul Supports NetFlow v5

Trisul ingests NetFlow v5 exports and converts them into structured analytics for:

- top talker analysis  
- bandwidth monitoring  
- ASN analytics  
- historical investigations  
- anomaly detection  
- DDoS visibility  

This enables operational intelligence from classic NetFlow exports.

---

## Frequently Asked Questions

### Is NetFlow v5 still used?

Yes. Many legacy and current devices still export NetFlow v5.

### Does NetFlow v5 support IPv6?

No. NetFlow v5 is limited to IPv4.

### Is NetFlow v5 better than NetFlow v9?

Not better, just simpler. NetFlow v9 is more flexible and extensible.

### Can NetFlow v5 be used for DDoS detection?

Yes. It provides useful traffic visibility for detecting attacks.

---

