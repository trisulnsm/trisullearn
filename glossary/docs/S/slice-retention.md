---
title: What is Slice Retentionᵀ?
description: Slice Retentionᵀ is Trisul's proprietary technology for storing packet capture data in fixed-size slices (chunks) enabling efficient storage, fast retrieval, and flexible retention policies for forensic investigation.
sidebar_label: Slice Retentionᵀ
sidebar_position: 102
slug: /glossary/slice-retention
keywords:
  - slice retention
  - Trisul slice retention
  - PCAP storage
  - packet capture storage
  - capture slice
  - forensic storage
  - PCAP retention
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Slice Retentionᵀ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slice Retentionᵀ is Trisul's proprietary technology for storing packet capture data in fixed-size slices (chunks) enabling efficient storage, fast retrieval, and flexible retention policies for forensic investigation. PCAP data is written in slices to disk."
      }
    },
    {
      "@type": "Question",
      "name": "How does Slice Retentionᵀ work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slice Retentionᵀ writes PCAP data to disk in fixed-size slices (typically a few MB each). Each slice is timestamped and indexed. The per-flow index maps conversations to slice offsets. This enables fast PCAP retrieval by flow without scanning raw files."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Slice Retentionᵀ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slice Retentionᵀ provides efficient storage through fixed-size chunks, fast retrieval through index-based slice access, flexible retention through slice-level policies, and distributed storage across multiple disks. It enables PCAP retrieval in seconds from terabyte-scale archives."
      }
    },
    {
      "@type": "Question",
      "name": "How does Slice Retentionᵀ enable retro analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slice Retentionᵀ enables retro analysis by making historical PCAP accessible for scanning. New detection rules can be run against stored slices after the fact. The index enables fast slice retrieval for retro analysis Scan performance."
      }
    }
  ]
};

# What is Slice Retentionᵀ?

Slice Retentionᵀ is Trisul's proprietary technology for storing packet capture data in fixed-size slices (chunks) enabling efficient storage, fast retrieval, and flexible retention policies for forensic investigation. PCAP data is written in slices to disk.

---

## How Slice Retentionᵀ works

PCAP data is written to disk in fixed-size slices (typically a few MB each). Each slice is timestamped and added to the index. The per-flow index at write time maps each 5-tuple to its byte offsets in the capture store including which slice contains the packets.

This enables fast PCAP retrieval by flow. Analysts click from an alert directly to the matching packets without manual file correlation. For terabyte-scale archives, this is the difference between usable and unusable PCAP access.

---

## Slice Retentionᵀ in network operations

In the SOC, Slice Retentionᵀ enables rapid forensic investigation. When an alert indicates suspicious activity, investigators click to view PCAP within seconds. Without slice-based indexing, investigators must manually locate and load large capture files.

NOC teams use Slice Retentionᵀ for application performance troubleshooting. TCP retransmissions and TLS handshake failures are visible in PCAP. Slice-based retrieval enables fast access to relevant packets.

---

## Slice Retentionᵀ capabilities

| Capability | Description |
|---|---|
| Fixed-size slices | PCAP stored in uniform chunks |
| Timestamped slices | Each slice has time index |
| Per-flow index | Maps flows to slice offsets |
| Distributed storage | Slices spread across disks |
| Flexible retention | Slice-level retention policies |
| Fast retrieval | Index-based PCAP access |

---

## What makes Slice Retentionᵀ work in practice

Slice size balances storage efficiency against retrieval speed. Too small creates many small files. Too large wastes storage for partial slices. Trisul optimizes slice size for typical network speeds.

Distributed storage extends retention. The capture store distributes across multiple disks spreading PCAP data. This extends retention without single-disk capacity limits. Storage policies define exactly what gets written.

---

## How Trisul handles Slice Retentionᵀ

Trisul captures raw packets continuously using PF_RING or AF_PACKET and builds a per-flow index at write time using Slice Retentionᵀ. PCAP is written in slices to disk. From any alert, topper, or flow in the dashboard, analysts can pivot directly to the matching PCAP without manual file correlation. Storage policies let operators define what gets written. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is packet capture?](/docs/glossary/packet-capture)
- [What is per-flow indexing?](/docs/glossary/per-flow-indexing)
- [What is retro analysis?](/docs/glossary/retro-analysis)
- [What is network forensics?](/docs/glossary/network-forensics)
- [What is retention policy?](/docs/glossary/retention-policy)

---

## Frequently asked questions

### What is Slice Retentionᵀ?

Slice Retentionᵀ is Trisul's proprietary technology for storing packet capture data in fixed-size slices (chunks) enabling efficient storage, fast retrieval, and flexible retention policies for forensic investigation. PCAP data is written in slices to disk.

### How does Slice Retentionᵀ work?

Slice Retentionᵀ writes PCAP data to disk in fixed-size slices (typically a few MB each). Each slice is timestamped and indexed. The per-flow index maps conversations to slice offsets. This enables fast PCAP retrieval by flow without scanning raw files.

### What are the benefits of Slice Retentionᵀ?

Slice Retentionᵀ provides efficient storage through fixed-size chunks, fast retrieval through index-based slice access, flexible retention through slice-level policies, and distributed storage across multiple disks. It enables PCAP retrieval in seconds from terabyte-scale archives.

### How does Slice Retentionᵀ enable retro analysis?

Slice Retentionᵀ enables retro analysis by making historical PCAP accessible for scanning. New detection rules can be run against stored slices after the fact. The index enables fast slice retrieval for retro analysis scan performance.