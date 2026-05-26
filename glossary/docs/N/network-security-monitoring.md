---
title: What is Network Security Monitoring?
description: Network Security Monitoring (NSM) is the collection and analysis of network data to detect and respond to security threats. It combines flow monitoring, packet capture, and IDS to provide comprehensive security visibility.
sidebar_label: Network security monitoring
sidebar_position: 74
slug: /glossary/network-security-monitoring
keywords:
  - network security monitoring
  - NSM
  - security monitoring
  - threat detection
  - network defense
  - intrusion detection
  - security visibility
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Network Security Monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network Security Monitoring (NSM) is the collection and analysis of network data to detect and respond to security threats. It combines flow monitoring, packet capture, and intrusion detection systems to provide comprehensive security visibility. NSM is the practice of detecting and responding to security incidents through network data analysis."
      }
    },
    {
      "@type": "Question",
      "name": "What components does NSM include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NSM includes flow monitoring using NetFlow or IPFIX for traffic visibility, full packet capture (PCAP) for forensic investigation, intrusion detection systems (IDS) for threat detection, security information and event management (SIEM) for correlation, and network behavior analysis for anomaly detection."
      }
    },
    {
      "@type": "Question",
      "name": "What is the purpose of NSM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NSM detects security incidents through network data analysis, responds to threats by containing and eradicating them, investigates incidents using packet capture and flow data, and prevents future incidents through lessons learned. NSM reduces time to detect and respond to threats."
      }
    },
    {
      "@type": "Question",
      "name": "How does NSM differ from network monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network monitoring focuses on network performance and availability for operations. NSM focuses on security threats and incidents. Network monitoring detects bandwidth issues, NSM detects threats. Both use similar data sources but for different purposes and audiences."
      }
    }
  ]
};

# What is Network Security Monitoring?

**Network Security Monitoring (NSM)** is the **collection and analysis of network data** to **detect and respond to security threats**. It combines **flow monitoring, packet capture, and intrusion detection systems (IDS)** to provide **comprehensive security visibility** across the network. NSM is the practice of **detecting, containing, and investigating security incidents** using network telemetry, and is a core discipline in modern SOC operations.

---

## How Network Security Monitoring works

NSM operates by:

- Collecting **flow data** (NetFlow, sFlow, IPFIX) to continuously track **who talks to whom, when, and how much** at high speed.  
- **Capturing full packets (PCAP)** on selected segments or in response to alerts to enable **forensic‑level analysis** of traffic content.  
- Running **signature‑ and anomaly‑based IDS/IPS** to detect known attack patterns and suspicious behavior.  
- Using **network behavior analysis** (NBA) and **SIEM** to correlate alerts, flows, and logs into **incident timelines** and **evidence packages**.  

This layered approach allows NSM to detect threats early at the flow level and then drop down to the packet level for confirmation and deep analysis.

![./images/nsm.png](./images/nsm.png)

---

## NSM in network operations

In the **SOC**, NSM is the **primary security‑detection layer**:

- **Flow or IDS alerts** indicate that something suspicious has occurred.  
- **Packet capture** reveals **what was actually exchanged**: commands, files, credentials, or C2 traffic needed for incident confirmation.  

In the **NOC**, NSM‑grade data also supports:

- **Application‑level root‑cause analysis** of TCP, TLS, or application‑layer errors that can indicate either performance issues or covert exfiltration.  
- **Security‑aware troubleshooting** where performance problems are cross‑checked against known malicious indicators.  

NSM thus bridges **security and performance** into a single intelligence layer.

---

## NSM components

| Component | Function |
|----------|----------|
| Flow monitoring | Continuous traffic visibility at scale using NetFlow, sFlow, or IPFIX |
| Packet capture | PCAP‑based forensic investigation of any suspicious conversation |
| IDS | Threat detection using signatures, heuristics, and protocol‑anomaly rules |
| SIEM | Centralized correlation of alerts, logs, and events across the environment |
| Network behavior analysis | Anomaly‑based detection of unknown or zero‑day threats |

When properly integrated, these components form a **defense‑in‑depth monitoring stack** that supports both real‑time response and post‑incident forensics.

---

## What makes NSM work in practice

Two design principles are critical:

- **Tiered capture and retention**:  
  - Use **flow telemetry** for **continuous, high‑speed visibility**; only trigger or retain **PCAP on high‑risk segments or around alerts**.  
  - This can reduce storage by **60–80%** versus full‑time capture while still allowing deep investigation of any alert.  
- **Indexing and pivoting**:  
  - **Per‑flow indexing** of PCAP lets analysts pivot from **any alert, flow, or host** directly to the matching packets in seconds, even in multi‑terabyte archives.  
  - Without this, analysts must manually search huge files, making the system effectively unusable at scale.  

Balancing coverage, fidelity, and storage is what separates a **production NSM** deployment from a lab‑only tool.

---

## How Trisul handles Network Security Monitoring

Trisul supports **Network Security Monitoring** by:

- Providing **flow‑based visibility** (NetFlow, sFlow, IPFIX, J‑Flow) to detect **indicators of compromise and unusual traffic patterns**.  
- Capturing **raw packets continuously** and building a **per‑flow index**, so that from any **alert, top‑talker, or flow** in the dashboard, analysts can **pivot to the matching PCAP** without manual file correlation.  
- Enabling **retro‑style analysis** where detection logic and taggers can be applied to historical packet data after the fact, to uncover previously undetected activity.  

This architecture lets Trisul serve as the **central NSM platform** for both detection and forensic investigation. For deployment and capture‑topology guidance, see Trisul documentation at [https://docs.trisul.org/docs/ug/caps/](https://docs.trisul.org/docs/ug/caps/).

---

## Related terms

- [What is threat detection?](/docs/glossary/threat-detection)  
- [What is intrusion detection system?](/docs/glossary/ids)  
- [What is packet capture?](/docs/glossary/packet-capture)  
- [What is SIEM?](/docs/glossary/siem)  
- [What is incident response?](/docs/glossary/incident-response)  

---

## Frequently asked questions

### What is Network Security Monitoring?

Network Security Monitoring (NSM) is the collection and analysis of network data to detect and respond to security threats. It combines flow monitoring, packet capture, and intrusion detection systems to provide comprehensive security visibility. NSM is the practice of detecting and responding to security incidents through network data analysis.

### What components does NSM include?

NSM includes flow monitoring using NetFlow or IPFIX for traffic visibility, full packet capture (PCAP) for forensic investigation, intrusion detection systems (IDS) for threat detection, security information and event management (SIEM) for correlation, and network behavior analysis for anomaly detection.

### What is the purpose of NSM?

NSM detects security incidents through network data analysis, responds to threats by containing and eradicating them, investigates incidents using packet capture and flow data, and prevents future incidents through lessons learned. NSM reduces time to detect and respond to threats.

### How does NSM differ from network monitoring?

Network monitoring focuses on network performance and availability for operations. NSM focuses on security threats and incidents. Network monitoring detects bandwidth issues, NSM detects threats. Both use similar data sources but for different purposes and audiences.