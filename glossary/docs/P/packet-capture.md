---
title: What is packet capture?
description: Packet capture (PCAP) records every packet on a network link, both headers and payload, to persistent storage. It provides complete wire-level data for forensic investigation, troubleshooting, and security analysis.
sidebar_label: Packet capture
sidebar_position: 80
slug: /glossary/packet-capture
keywords:
  - packet capture
  - PCAP
  - network packet capture
  - packet forensics
  - raw packet capture
  - network forensics
  - deep packet inspection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet capture (PCAP) records every packet on a network link, both headers and payload, to persistent storage. Unlike flow monitoring which summarizes traffic into conversation records, PCAP preserves the complete wire-level data. It is the definitive record of what actually crossed the network."
      }
    },
    {
      "@type": "Question",
      "name": "How does packet capture work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packets are intercepted at a tap or SPAN port and written to disk in PCAP or PCAPNG format as a continuous ring buffer. Each frame is timestamped and the raw bytes from the Ethernet frame onwards are stored verbatim. At speeds above 1 Gbps, kernel-bypass frameworks such as PF_RING or AF_PACKET are required."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between packet capture and flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring records who talked to whom, when, and how much. Packet capture records what was actually exchanged. Flow data tells you a host sent 2 GB over port 443 at 2AM; PCAP shows you what was in that transfer. The two are complementary: flow for detection, PCAP for investigation."
      }
    },
    {
      "@type": "Question",
      "name": "Does packet capture work on encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PCAP captures the encrypted bytes as they appear on the wire. Headers are readable; TLS payloads are ciphertext. You still get flow metadata, TLS certificate details, and JA3 fingerprints from the handshake. To inspect payload content you need either a TLS inspection proxy inline or access to session keys."
      }
    }
  ]
};

# What is packet capture?

Packet capture (PCAP) records every packet on a network link, both headers and payload, to persistent storage. It provides complete wire-level data for forensic investigation, troubleshooting, and security analysis. PCAP is the definitive record of what actually crossed the network.

---

## How packet capture works

Packets are intercepted at a tap or SPAN port and written to disk in PCAP or PCAPNG format as a continuous ring buffer. Each frame is timestamped and the raw bytes from the Ethernet frame onwards are stored verbatim. At speeds above 1 Gbps, kernel-bypass frameworks such as PF_RING or AF_PACKET are required.

Most platforms build a per-flow index at write time mapping each 5-tuple to its byte offsets in the capture store. This lets analysts retrieve packets for a specific conversation in seconds rather than scanning terabytes of raw files.

---

## Packet capture in network operations

In the SOC, PCAP is the evidence layer. Flow data or IDS alerts tell you something suspicious happened. PCAP tells you what was exchanged: commands issued, files transferred, credentials passed. For incident confirmation, there is no substitute.

NOC teams use PCAP for application performance root cause analysis. TCP retransmissions, window behavior, TLS handshake failures, and application-level error codes are only visible at the packet level. Flow telemetry shows a conversation; it does not show that the conversation was broken.

---

## Packet capture vs flow monitoring

| Dimension | Packet Capture | Flow Monitoring |
|---|---|---|
| What it stores | Complete packet headers and payload | Flow metadata 5-tuple byte counts timestamps |
| Investigative depth | Payload content application behavior file transfers | Who talked to whom volume duration |
| Storage footprint | Very high scales with wire speed | Low approximately 1 to 2% of equivalent PCAP |
| Retention period | Hours to days at full fidelity | Weeks to months |
| Best fit | Forensic investigation incident confirmation | Traffic trending anomaly detection compliance |

---

## What makes packet capture work in practice

The capture point determines loss. SPAN ports drop mirrored packets under load often without any visible counter increment. Passive optical taps are lossless but require per-link hardware. For forensic investigation passive TAPs ensure complete packet capture.

Index quality determines investigation speed. Without per-flow indexing analysts scan raw files manually. With it any alert can pivot directly to the relevant packets in seconds. For a terabyte-scale archive this is the difference between a usable tool and an unusable one.

---

## How Trisul handles packet capture

Trisul captures raw packets continuously using PF_RING or AF_PACKET and builds a per-flow index at write time. From any alert topper or flow in the dashboard analysts can pivot directly to the matching PCAP without manual file correlation. The capture store distributes across multiple disks to extend retention. Storage policies let operators define exactly what gets written by protocol direction or custom LUA rules. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is full packet capture?](/glossary/full-packet-capture)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is network TAP?](/glossary/network-tap)
- [What is SPAN port?](/glossary/span-port)
- [What is network forensics?](/glossary/network-forensics)

---

## Frequently asked questions

### What is packet capture?

Packet capture (PCAP) records every packet on a network link, both headers and payload, to persistent storage. Unlike flow monitoring which summarizes traffic into conversation records, PCAP preserves the complete wire-level data. It is the definitive record of what actually crossed the network.

### How does packet capture work?

Packets are intercepted at a tap or SPAN port and written to disk in PCAP or PCAPNG format as a continuous ring buffer. Each frame is timestamped and the raw bytes from the Ethernet frame onwards are stored verbatim. At speeds above 1 Gbps, kernel-bypass frameworks such as PF_RING or AF_PACKET are required.

### What is the difference between packet capture and flow monitoring?

Flow monitoring records who talked to whom, when, and how much. Packet capture records what was actually exchanged. Flow data tells you a host sent 2 GB over port 443 at 2AM; PCAP shows you what was in that transfer. The two are complementary: flow for detection, PCAP for investigation.

### Does packet capture work on encrypted traffic?

PCAP captures the encrypted bytes as they appear on the wire. Headers are readable; TLS payloads are ciphertext. You still get flow metadata, TLS certificate details, and JA3 fingerprints from the handshake. To inspect payload content you need either a TLS inspection proxy inline or access to session keys.