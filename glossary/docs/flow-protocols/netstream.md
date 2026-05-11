---
title: What is NetStream?
sidebar_label: NetStream
sidebar_position: 23
slug: /glossary/netstream
description: Learn what NetStream is, how Huawei flow monitoring works, and how NetStream compares to NetFlow, IPFIX, and sFlow.
keywords:
  - netstream
  - what is netstream
  - huawei netstream
  - netstream vs netflow
  - huawei flow monitoring
---

# What is NetStream?

NetStream is Huawei’s flow-based network traffic monitoring technology used to collect and export network flow metadata from routers and switches to flow collectors.

It provides traffic visibility for:

- bandwidth monitoring  
- traffic analysis  
- security monitoring  
- capacity planning  

NetStream is Huawei’s equivalent of NetFlow.

---

## Netstream In Simple Terms

NetStream is like a traffic reporting system for Huawei devices.

It observes traffic passing through the device and records:

- who sent data  
- who received data  
- how much data moved  
- how long it lasted  

Then it exports that summary to a collector.

Same idea as NetFlow. Different logo on the box.

---

## Technical Explanation

NetStream collects packet statistics based on flows.

A flow is typically identified using:

- Source IP  
- Destination IP  
- Source Port  
- Destination Port  
- Protocol  
- ToS  
- Interface  

Huawei commonly uses a **7-tuple** flow definition.

NetStream collects:

- packet counts  
- byte counts  
- timestamps  
- routing metadata  
- interface data  

NetStream can export in:

- NetFlow v5  
- NetFlow v9  
- IPFIX  

This allows interoperability with many collectors.

---

## How NetStream Works

1. Traffic passes through a Huawei device  
2. Packets are grouped into flows  
3. Flow metadata is tracked  
4. Timeout conditions are met  
5. Flow records are exported  
6. A collector analyzes the traffic  

This enables traffic visibility and analytics.

---

## What Data Does NetStream Export?

NetStream exports:

| Field | Description |
|---|---|
| Source IP | Sender address |
| Destination IP | Receiver address |
| Source Port | Sending application port |
| Destination Port | Receiving application port |
| Protocol | TCP, UDP, ICMP |
| Packet Count | Number of packets |
| Byte Count | Number of bytes |
| Flow Start Time | Start timestamp |
| Flow End Time | End timestamp |
| Interface Data | Traffic interfaces |
| ToS | Traffic class |
| Routing Data | Route visibility |

The exact fields depend on export configuration.

---

## Why NetStream Matters

### Native Huawei visibility

Provides traffic analytics from Huawei infrastructure.

### Supports traffic analysis

Helps understand communication behavior.

### Improves security monitoring

Supports anomaly and attack detection.

### Supports capacity planning

Tracks bandwidth growth over time.

### Enables historical analysis

Stores traffic history for investigation.

---

## Common NetStream Use Cases

- Bandwidth monitoring  
- Top talker analysis  
- Security monitoring  
- DDoS detection  
- ISP traffic analytics  
- Capacity planning  
- Historical traffic analysis  

---

## NetStream vs NetFlow

| Feature | NetStream | NetFlow |
|---|---|---|
| Vendor | Huawei | Cisco |
| Purpose | Flow monitoring | Flow monitoring |
| Export formats | v5, v9, IPFIX | v5, v9, IPFIX |
| Flow model | Similar | Similar |

Both provide flow telemetry with nearly identical goals.

---

## NetStream vs IPFIX

| Feature | NetStream | IPFIX |
|---|---|---|
| Type | Vendor implementation | IETF standard |
| Compatibility | Huawei-focused | Multi-vendor |
| Extensibility | Moderate | High |

IPFIX is vendor-neutral. NetStream is Huawei-native.

---

## NetStream vs sFlow

| Feature | NetStream | sFlow |
|---|---|---|
| Method | Flow-based | Packet sampling |
| Accuracy | Higher | Statistical |
| Device overhead | Higher | Lower |

NetStream tracks full flows. sFlow samples packets.

---

## Advantages of NetStream

NetStream provides:

- native Huawei integration  
- detailed flow analytics  
- flexible export formats  
- security visibility  
- traffic history  
- scalable monitoring  

These make it useful in Huawei environments.

---

## Limitations of NetStream

NetStream limitations include:

- vendor dependency  
- platform-specific support  
- configuration complexity  
- exporter compatibility considerations  

Multi-vendor networks always turn “simple” into “interesting.”

---

## How Trisul Supports NetStream

Trisul ingests NetStream exports from Huawei devices and converts them into:

- top talker analytics  
- bandwidth visibility  
- traffic trends  
- DDoS detection  
- historical investigations  
- anomaly detection  

This enables operational intelligence from Huawei traffic exports.

---

## Frequently Asked Questions

### Is NetStream the same as NetFlow?

Not exactly. NetStream is Huawei’s implementation of flow monitoring, similar to NetFlow.

### Does NetStream support IPFIX?

Yes. Modern Huawei platforms support IPFIX exports.

### Can NetStream be analyzed by NetFlow collectors?

Yes. Many collectors support NetStream export formats.

### Is NetStream useful for DDoS detection?

Yes. It provides strong visibility into attack traffic patterns.

---

