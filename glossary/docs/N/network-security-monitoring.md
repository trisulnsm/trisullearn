---
title: What is network security monitoring?
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

Network Security Monitoring (NSM) is the collection and analysis of network data to detect and respond to security threats. It combines flow monitoring, packet capture, and intrusion detection systems to provide comprehensive security visibility. NSM detects and responds to security incidents through network data analysis.

---

## How Network Security Monitoring works

NSM collects flow data from NetFlow, sFlow, and IPFIX exporters. Full packet capture records every packet headers and payload. Intrusion detection systems analyze traffic for known attack patterns. Network behavior analysis identifies anomalies indicating threats. SIEM correlates alerts from all sources.

![](./images/nsm.png)

---

## NSM in network operations

In the SOC, NSM is the security detection layer. Flow data or IDS alerts tell you something suspicious happened. Packet capture tells you what was exchanged: commands issued, files transferred, credentials passed. For incident confirmation, packet capture is the definitive record.

NOC teams use NSM data for application performance root cause analysis. TCP retransmissions, window behavior, TLS handshake failures, and application-level error codes indicate security issues or performance problems. Flow telemetry shows a conversation; packet capture shows whether it was broken.

---

## NSM components

| Component | Function |
|---|---|
| Flow monitoring | Traffic visibility through NetFlow and IPFIX |
| Packet capture | Forensic investigation through PCAP |
| IDS | Threat detection through signature and anomaly analysis |
| SIEM | Alert correlation and centralized logging |
| Network behavior analysis | Anomaly detection through machine learning |

---

## What makes NSM work in practice

Flow data enables early detection. Flow monitoring scales to gigabit speeds providing continuous visibility. When flow data indicates anomalies, packet capture is triggered for deep investigation. This reduces storage by 60 to 80 percent compared to continuous capture while retaining the ability to investigate any alert.

Index quality determines investigation speed. Without per-flow indexing, analysts scan raw files manually. With it, any alert can pivot directly to the relevant packets in seconds. For a terabyte-scale archive, this is the difference between a usable tool and an unusable one.

---

## How Trisul handles Network Security Monitoring

Trisul supports NSM by providing flow-based visibility and packet capture for forensic investigation. Flow data enables identification of indicators of compromise, detection of unusual traffic patterns, and tracing of attack paths. From any alert, topper, or flow in the dashboard, analysts can pivot directly to the matching PCAP. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is threat detection?](/docs/glossary/threat-detection)
- [What is intrusion detection system?](/docs/glossary/intrusion-detection-system)
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