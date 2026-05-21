---
title: What is network forensics?
description: Network forensics is the capture, recording, and analysis of network events to investigate security incidents, troubleshoot problems, and gather evidence for legal proceedings. It uses packet capture and flow data to reconstruct network activity.
sidebar_label: Network forensics
sidebar_position: 73
slug: /glossary/network-forensics
keywords:
  - network forensics
  - network investigation
  - packet forensics
  - traffic analysis
  - incident investigation
  - digital forensics
  - evidence collection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is network forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network forensics is the capture, recording, and analysis of network events to investigate security incidents, troubleshoot problems, and gather evidence for legal proceedings. It uses packet capture and flow data to reconstruct network activity. Network forensics is a sub-branch of digital forensics."
      }
    },
    {
      "@type": "Question",
      "name": "What data is used in network forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network forensics uses full packet capture (PCAP) recording every packet headers and payload, flow records from NetFlow or IPFIX summarizing conversations, network logs from routers and firewalls, DNS logs showing name resolution, and authentication logs. PCAP is the definitive record for forensic investigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the purpose of network forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network forensics investigates security breaches to determine what happened, how it happened, and what data was accessed. It troubleshoots network problems by reconstructing failed transactions. It gathers evidence for legal proceedings showing who did what and when. It supports incident response with forensic analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How does network forensics differ from network monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network monitoring focuses on real-time visibility and anomaly detection for operations. Network forensics focuses on historical investigation and evidence collection for incidents. Monitoring detects problems, forensics investigates them. Both use flow data and packet capture but for different purposes."
      }
    }
  ]
};

# What is network forensics?

Network forensics is the capture, recording, and analysis of network events to investigate security incidents, troubleshoot problems, and gather evidence for legal proceedings. It uses packet capture and flow data to reconstruct network activity. Network forensics is a sub-branch of digital forensics focused on network traffic.

---

## How network forensics works

Network forensics captures full packet capture (PCAP) recording every packet headers and payload. Flow records summarize conversations between source and destination. Logs from routers, firewalls, and servers provide additional context. Analysts use tools like Wireshark to filter and analyze captured data.

Retro analysis enables new detection rules to be run against stored historical PCAP after the fact. This matters because threat intelligence often arrives days after an intrusion. With retro analysis, you can determine whether a host communicated with a newly-discovered malicious domain before you knew to look for it.

---

## Network forensics in network operations

In the SOC, network forensics is the evidence layer for incident investigation. Flow data or IDS alerts tell you something suspicious happened. PCAP tells you what was exchanged: commands issued, files transferred, credentials passed. For incident confirmation, there is no substitute.

NOC teams use network forensics for application performance root cause analysis. TCP retransmissions, window behavior, TLS handshake failures, and application-level error codes are only visible at the packet level. Flow telemetry shows a conversation; it does not show that the conversation was broken.

---

## Network forensics data sources

| Source | What it provides |
|---|---|
| PCAP | Full packet content headers and payload |
| Flow records | Who talked to whom, when, how much |
| Network logs | Device events and configuration changes |
| DNS logs | Name resolution queries and responses |
| Authentication logs | Login attempts and session data |

---

## What makes network forensics work in practice

Capture point determines loss. SPAN ports drop mirrored packets under load silently, above roughly 500 Mbps on a busy switch. Passive optical taps are the only lossless option for high-speed links. Lossless capture ensures forensic evidence is complete.

Index quality determines investigation speed. Without per-flow indexing, analysts scan raw files manually. With it, any alert can pivot directly to the relevant packets in seconds. For a terabyte-scale archive, this is the difference between a usable tool and an unusable one.

---

## How Trisul handles network forensics

Trisul captures raw packets continuously using PF_RING or AF_PACKET and builds a per-flow index at write time. From any alert, topper, or flow in the dashboard, analysts can pivot directly to the matching PCAP without manual file correlation. Retro analysis allows detection logic and flow taggers to be run against historical packet data after the fact. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is packet capture?](/glossary/packet-capture)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is incident response?](/glossary/incident-response)
- [What is retro analysis?](/glossary/retro-analysis)
- [What is digital forensics?](/glossary/digital-forensics)

---

## Frequently asked questions

### What is network forensics?

Network forensics is the capture, recording, and analysis of network events to investigate security incidents, troubleshoot problems, and gather evidence for legal proceedings. It uses packet capture and flow data to reconstruct network activity. Network forensics is a sub-branch of digital forensics.

### What data is used in network forensics?

Network forensics uses full packet capture (PCAP) recording every packet headers and payload, flow records from NetFlow or IPFIX summarizing conversations, network logs from routers and firewalls, DNS logs showing name resolution, and authentication logs. PCAP is the definitive record for forensic investigation.

### What is the purpose of network forensics?

Network forensics investigates security breaches to determine what happened, how it happened, and what data was accessed. It troubleshoots network problems by reconstructing failed transactions. It gathers evidence for legal proceedings showing who did what and when. It supports incident response with forensic analysis.

### How does network forensics differ from network monitoring?

Network monitoring focuses on real-time visibility and anomaly detection for operations. Network forensics focuses on historical investigation and evidence collection for incidents. Monitoring detects problems, forensics investigates them. Both use flow data and packet capture but for different purposes.