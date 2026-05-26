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

**Network forensics** is the **capture, recording, and analysis of network events** to **investigate security incidents, troubleshoot problems, and gather evidence for legal or compliance proceedings**. It uses **packet capture (PCAP)** and **flow data** to reconstruct **what network activity occurred, when, and between which hosts**. Network forensics is a **sub‑branch of digital forensics** focused specifically on traffic‑level artifacts.

---

## How network forensics works

Network forensics typically:

- Captures **full packet capture (PCAP)**, recording **every packet header and payload** for selected segments or time windows.  
- Collects **flow records** from **NetFlow or IPFIX** that summarize **who talked to whom, when, and how much**.  
- Pulls in **logs** from routers, firewalls, DNS servers, and authentication systems for context.  
- Lets analysts use tools like **Wireshark** to **filter, dissect, and reconstruct sessions** to understand command‑and‑control traffic, file transfers, or application‑level errors.

A key capability is **retro analysis**: new detection rules or indicators can be run against stored PCAP **after an incident is discovered**, to determine whether a host communicated with a newly‑known malicious domain or pattern before the rule existed.

---

## Network forensics in network operations

In the **SOC and NOC**:

- Network forensics provides the **evidence layer** for incident investigation, where **flow‑level alerts** indicate suspicion and **packet‑level captures** show **exactly what was exchanged** (e.g., commands, files, credentials).  
- For **incident confirmation**, there is **no substitute for PCAP**; flow telemetry shows a conversation, but only packets show that the conversation was encrypted, malformed, or compromised.  
- NOC teams use network forensics for **application‑level root‑cause analysis** (e.g., TCP retransmits, window stalls, TLS handshake failures, application‑level errors) that are invisible at the flow layer.  
- It supports **legal and compliance cases** by providing **timestamped, chain‑of‑custody–ready evidence** showing **who did what and when** on the network.

Where **network monitoring** is **forward‑looking and real‑time**, **network forensics** is **backward‑looking and evidence‑driven**.

---

## Network forensics data sources

| Source | What it provides |
|--------|------------------|
| PCAP | Full packet headers and payloads; the “ground truth” of network behavior |
| Flow records | Summarized conversations (who, when, how much) for triage and reporting |
| Network logs | Device events, policy changes, and topology information |
| DNS logs | Name‑resolution queries and responses mapping domains to IPs |
| Authentication logs | Login attempts, session start/end times, and user IDs |

When combined, these sources let analysts move from a **high‑level alert** to a **detailed timeline** efficiently.

---

## What makes network forensics work in practice

Two design choices are critical:

- **Capture method and fidelity**:  
  - **SPAN / RSPAN** can be **lossy under load**, especially above roughly 500 Mbps on a busy switch.  
  - **Passive optical taps** are the only **lossless** option for high‑speed links; they guarantee that **no packets are dropped** during the capture window.  
- **Indexing and queryability**:  
  - Without **per‑flow or per‑session indexing**, analysts must **manually scan raw PCAP files**, which is infeasible at terabyte‑scale.  
  - With indexing, **any alert can pivot directly to the matching packets in seconds**, making archives **operationally usable** rather than just “stored.”

Retention and storage must also match **incident‑response and compliance requirements**, often using **tiered storage** for long‑term evidence.

---

## How Trisul handles network forensics

Trisul supports **network forensics** by:

- Capturing **raw packets continuously** using **PF_RING or AF_PACKET** on selected segments, ensuring **near‑lossless or lossless capture** when properly deployed.  
- Building a **per‑flow index at write time**, so that from any **alert, top‑talker, or flow** in the dashboard, analysts can **pivot directly to the matching PCAP** without manual file correlation.  
- Enabling **retro analysis**, where **new detection logic and flow taggers** can be applied to **historical packet data** after the fact, to uncover previously undetected activity.  

This integration lets Trisul serve as a **centralized, forensics‑ready platform** at the intersection of **flow‑based detection** and **packet‑level investigation**. For capture‑topology and sizing guidance, see Trisul documentation at [https://docs.trisul.org/docs/ug/caps/](https://docs.trisul.org/docs/ug/caps/).

---

## Related terms

- [What is packet capture?](/docs/glossary/packet-capture)  
- [What is flow monitoring?](/docs/glossary/flow-monitoring)  
- [What is incident response?](/docs/glossary/incident-response)  
- [What is retro analysis?](/docs/glossary/retro-analysis)  
- [What is digital forensics?](/docs/glossary/digital-forensics)  

---

## Frequently asked questions

### What is network forensics?

Network forensics is the capture, recording, and analysis of network events to investigate security incidents, troubleshoot problems, and gather evidence for legal proceedings. It uses packet capture and flow data to reconstruct network activity. Network forensics is a sub‑branch of digital forensics.

### What data is used in network forensics?

Network forensics uses full packet capture (PCAP) recording every packet headers and payload, flow records from NetFlow or IPFIX summarizing conversations, network logs from routers and firewalls, DNS logs showing name resolution, and authentication logs. PCAP is the definitive record for forensic investigation.

### What is the purpose of network forensics?

Network forensics investigates security breaches to determine what happened, how it happened, and what data was accessed. It troubleshoots network problems by reconstructing failed transactions. It gathers evidence for legal proceedings showing who did what and when. It supports incident response with forensic analysis.

### How does network forensics differ from network monitoring?

Network monitoring focuses on real‑time visibility and anomaly detection for operations. Network forensics focuses on historical investigation and evidence collection for incidents. Monitoring detects problems, forensics investigates them. Both use flow data and packet capture but for different purposes.