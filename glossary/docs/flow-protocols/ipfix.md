---
title: What is IPFIX?
sidebar_label: IPFIX
sidebar_position: 20
slug: /glossary/ipfix
description: Learn what IPFIX is, how it works, how it differs from NetFlow, and why IPFIX is the standard protocol for flow telemetry.
keywords:
  - ipfix
  - what is ipfix
  - ip flow information export
  - ipfix vs netflow
  - flow telemetry protocol
---

# What is IPFIX?

IPFIX (IP Flow Information Export) is an IETF-standardized protocol for exporting network flow information from devices such as routers, switches, firewalls, and probes to flow collectors.

It provides detailed and flexible traffic metadata for monitoring, analysis, troubleshooting, and security.

IPFIX is the industry-standard evolution of NetFlow v9.

---

## IPFIX In Simple Terms

IPFIX is like NetFlow, but standardized.

Instead of being tied to one vendor, IPFIX provides a common language for exporting flow data across different devices.

That means:

- better interoperability  
- more flexibility  
- broader vendor support  

It is the same basic idea:

Observe traffic → summarize flows → export metadata.

Just with fewer vendor-specific surprises. In theory.

---

## Technical Explanation

IPFIX uses a **template-based export model**.

An exporter first sends a template describing:

- field types  
- field lengths  
- field order  

Then it sends actual flow data records matching that template.

This allows:

- flexible flow records  
- custom fields  
- vendor-specific extensions  
- standardized interoperability  

IPFIX supports multiple transport protocols, including:

- UDP  
- TCP  
- SCTP  

Unlike older NetFlow versions, IPFIX is designed as an open standard.

---

## How IPFIX Works

1. Traffic passes through a network device  
2. Packets are grouped into flows  
3. Flow metadata is collected  
4. The exporter sends templates  
5. Flow records are exported using those templates  
6. The collector parses and analyzes the data  

This enables flexible traffic visibility.

---

## What Fields Can IPFIX Export?

IPFIX can export:

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
| VLAN ID | VLAN visibility |
| MPLS Labels | MPLS visibility |
| BGP AS Number | Routing visibility |
| Application ID | Application awareness |
| IPv6 Fields | IPv6 support |

The exported fields depend on the template.

---

## Why IPFIX Matters

### Industry standard

Works across multiple vendors.

### Flexible templates

Supports custom traffic fields.

### IPv6 support

Built for modern networks.

### Better extensibility

New fields can be added without changing protocol versions.

### Rich traffic visibility

Provides deep metadata for analytics.

---

## Common IPFIX Use Cases

- Bandwidth monitoring  
- IPv6 traffic analysis  
- Application visibility  
- DDoS detection  
- Security investigations  
- Traffic forensics  
- ISP analytics  
- Capacity planning  

---

## IPFIX vs NetFlow v9

| Feature | IPFIX | NetFlow v9 |
|---|---|---|
| Standardization | IETF standard | Cisco-originated |
| Templates | Yes | Yes |
| Flexibility | High | High |
| Vendor support | Multi-vendor | Mostly Cisco-focused |

IPFIX standardizes the template-based model introduced by NetFlow v9.

---

## IPFIX vs NetFlow v5

| Feature | IPFIX | NetFlow v5 |
|---|---|---|
| Format | Template-based | Fixed format |
| IPv6 Support | Yes | No |
| Extensibility | High | Low |
| Custom Fields | Yes | No |

IPFIX is far more flexible than NetFlow v5.

---

## Advantages of IPFIX

IPFIX provides:

- vendor neutrality  
- extensible information elements  
- richer traffic context  
- better IPv6 support  
- application-aware visibility  
- modern telemetry compatibility  

These advantages make it suitable for modern monitoring.

---

## Challenges of IPFIX

IPFIX can introduce complexity:

- template management  
- template cache synchronization  
- exporter compatibility  
- field interpretation differences  

Flexibility is powerful, but it expects competence. A dangerous assumption in distributed systems.

---

## How Trisul Supports IPFIX

Trisul ingests IPFIX templates and flow records and converts them into structured analytics.

This enables:

- top talker analysis  
- application visibility  
- ASN analytics  
- historical traffic investigations  
- DDoS detection  
- IPv6 traffic analytics  

This transforms standardized flow telemetry into operational intelligence.

---

## Frequently Asked Questions

### Is IPFIX the same as NetFlow?

No. IPFIX is the standardized evolution of template-based NetFlow concepts.

### Does IPFIX support IPv6?

Yes.

### Is IPFIX vendor-neutral?

Yes. That is one of its biggest advantages.

### Can IPFIX export custom fields?

Yes. It supports extensible information elements.

---

