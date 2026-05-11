---
title: What is NetFlow v9?
sidebar_label: NetFlow v9
sidebar_position: 19
slug: /glossary/netflow-v9
description: Learn what NetFlow v9 is, how it works, how template-based flow exports differ from NetFlow v5, and why NetFlow v9 is more flexible.
keywords:
  - netflow v9
  - what is netflow v9
  - netflow version 9
  - netflow v9 vs v5
  - flexible netflow
---

# What is NetFlow v9?

NetFlow v9 is a template-based network flow export protocol developed by Cisco for exporting network traffic metadata from routers, switches, and firewalls to flow collectors.

Unlike NetFlow v5, NetFlow v9 uses templates to define flow record structure, making it flexible and extensible.

It supports:

- IPv4  
- IPv6  
- MPLS  
- VLANs  
- custom fields  

This makes NetFlow v9 the foundation for modern flow telemetry.

---

## NetFlow v9 In Simple Terms

NetFlow v9 is like sending a blueprint before sending data.

Instead of assuming every exported record has the same structure, the exporter first tells the collector:

“This is what the next records will look like.”

That blueprint is called a **template**.

Then actual flow data follows.

More flexible. More scalable. Slightly more dependent on everyone paying attention.

---

## Technical Explanation

NetFlow v9 uses a **template-based export model**.

Each export packet contains:

- Packet header  
- Template FlowSets  
- Data FlowSets  

A template describes:

- field type  
- field length  
- field order  

The collector caches the template and uses it to interpret later data records.

This allows exporters to define custom fields without changing the protocol version.

This is the biggest difference from NetFlow v5.

---

## How NetFlow v9 Works

1. Traffic passes through a device  
2. Packets are grouped into flows  
3. Flow metadata is collected  
4. The exporter sends a template  
5. Flow data records are sent using that template  
6. The collector parses the records  

This enables flexible traffic analytics.

---

## What Fields Can NetFlow v9 Export?

NetFlow v9 can export:

| Field | Description |
|---|---|
| Source IP | Sender address |
| Destination IP | Receiver address |
| Source Port | Sending port |
| Destination Port | Receiving port |
| Protocol | TCP, UDP, ICMP |
| Packet Count | Number of packets |
| Byte Count | Number of bytes |
| Flow Start Time | Start timestamp |
| Flow End Time | End timestamp |
| TCP Flags | Connection state |
| VLAN ID | VLAN information |
| MPLS Labels | MPLS visibility |
| BGP Next Hop | Routing visibility |
| IPv6 Fields | IPv6 support |

The exact fields depend on the template.

---

## Why NetFlow v9 Matters

### Flexible field definitions

Supports custom traffic visibility.

### IPv6 support

Works beyond IPv4.

### MPLS visibility

Useful for service providers.

### Better extensibility

New fields can be added without changing protocol versions.

### Foundation for IPFIX

NetFlow v9 directly influenced IPFIX.

---

## Common NetFlow v9 Use Cases

- Bandwidth monitoring  
- IPv6 traffic analysis  
- MPLS monitoring  
- Security monitoring  
- DDoS detection  
- ISP analytics  
- Application visibility  
- Traffic forensics  

---

## NetFlow v9 vs NetFlow v5

| Feature | NetFlow v9 | NetFlow v5 |
|---|---|---|
| Format | Template-based | Fixed format |
| IPv6 Support | Yes | No |
| MPLS Support | Yes | No |
| Custom Fields | Yes | No |
| Extensibility | High | Low |

NetFlow v9 is more flexible and modern.

---

## NetFlow v9 vs IPFIX

| Feature | NetFlow v9 | IPFIX |
|---|---|---|
| Standardization | Cisco-originated | IETF standard |
| Template-based | Yes | Yes |
| Flexibility | High | Higher |

IPFIX evolved from NetFlow v9 concepts.

---

## What is Flexible NetFlow?

Flexible NetFlow is Cisco’s implementation of NetFlow v9.

It allows custom flow records by defining:

- match fields  
- collect fields  
- export behavior  

This gives operators granular traffic visibility.

Because eventually fixed formats stop being enough.

---

## Challenges of NetFlow v9

NetFlow v9 can introduce challenges:

- template loss  
- collector template cache issues  
- parsing dependency on templates  
- exporter template refresh timing  

If templates are missing, data becomes unreadable.

Like receiving spreadsheet rows without column names.

---

## How Trisul Supports NetFlow v9

Trisul ingests NetFlow v9 templates and data FlowSets and converts them into structured analytics.

This enables:

- IPv6 traffic visibility  
- MPLS analytics  
- ASN analytics  
- top talker analysis  
- DDoS detection  
- historical investigations  

This transforms flexible flow exports into operational intelligence.

---

## Frequently Asked Questions

### Is NetFlow v9 better than NetFlow v5?

It is more flexible and extensible, but slightly more complex.

### Does NetFlow v9 support IPv6?

Yes.

### What is the biggest feature of NetFlow v9?

Template-based flow export.

### Is NetFlow v9 the same as IPFIX?

No. IPFIX is the standardized evolution of the same concept.

---
