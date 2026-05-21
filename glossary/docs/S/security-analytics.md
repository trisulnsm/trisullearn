---
title: What is security analytics?
description: Security analytics uses network traffic data to detect, investigate, and respond to security threats. It combines flow monitoring, packet capture, and threat intelligence to identify indicators of compromise and security incidents.
sidebar_label: Security analytics
sidebar_position: 99
slug: /glossary/security-analytics
keywords:
  - security analytics
  - threat detection
  - network security
  - security monitoring
  - threat intelligence
  - indicator of compromise
  - security investigation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is security analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security analytics uses network traffic data to detect, investigate, and respond to security threats. It combines flow monitoring, packet capture, and threat intelligence to identify indicators of compromise and security incidents. Security analytics enables proactive threat detection."
      }
    },
    {
      "@type": "Question",
      "name": "How does security analytics work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security analytics collects flow data and packet capture from network observation points. Threat intelligence feeds provide known malicious indicators. Analytics correlates traffic with threat indicators to detect compromises. Network behavior analysis identifies anomalies indicating threats."
      }
    },
    {
      "@type": "Question",
      "name": "What does security analytics detect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security analytics detects indicators of compromise including communication with malicious domains, data exfiltration patterns, lateral movement, malware command and control, port scanning activity, DDoS attacks, and policy violations. These indicators signal security incidents."
      }
    },
    {
      "@type": "Question",
      "name": "Why is security analytics important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security analytics is critical because it enables detection of threats that perimeter defenses miss. It provides visibility into what happens after attackers breach defenses. Security analytics reduces time to detect and respond to incidents, limiting damage."
      }
    }
  ]
};

# What is security analytics?

Security analytics uses network traffic data to detect, investigate, and respond to security threats. It combines flow monitoring, packet capture, and threat intelligence to identify indicators of compromise and security incidents. Security analytics enables proactive threat detection.

---

## How security analytics works

Security analytics collects flow data and packet capture from network observation points. Threat intelligence feeds provide known malicious indicators including IP addresses, domains, and file hashes. Analytics correlates traffic with threat indicators to detect compromises.

Network behavior analysis identifies anomalies indicating threats. Baselines of normal traffic are established. Deviations from baseline trigger alerts. Machine learning models detect patterns indicating malicious activity.

---

## Security analytics in network operations

In the SOC, security analytics is the detection layer. Flow data indicates suspicious traffic patterns. Packet capture provides evidence for investigation. Threat intelligence identifies known malicious destinations. Security analysts investigate alerts and respond to incidents.

Security analytics supports incident response by identifying affected systems and quantifying data exfiltration. Flow records show which hosts communicated with malicious destinations and how much data was transferred.

---

## Security analytics capabilities

| Capability | Description |
|---|---|
| Threat detection | Identify indicators of compromise |
| Threat intelligence | Correlate with known malicious indicators |
| Behavior analysis | Detect anomalies from normal patterns |
| Incident investigation | Trace attack paths and scope |
| Data exfiltration | Quantify data stolen |
| Lateral movement | Detect internal spread |

---

## What makes security analytics work in practice

Threat intelligence currency determines detection accuracy. Intelligence must be updated regularly with new indicators. Outdated intelligence misses new threats. Automated intelligence feeds update regularly.

Flow data scope determines detection coverage. Security analytics can only detect threats in monitored traffic. Missing observation points create blind spots. Place observation points at all critical network locations.

---

## How Trisul handles security analytics

Trisul provides security analytics through flow-based visibility identifying indicators of compromise, detecting unusual traffic patterns, and tracing attack paths. Flow data enables identification of communication with malicious domains, data exfiltration quantification, and affected system identification. Packet capture provides evidence for investigation. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is threat detection?](/glossary/threat-detection)
- [What is network security monitoring?](/glossary/network-security-monitoring)
- [What is indicator of compromise?](/glossary/indicator-of-compromise)
- [What is threat intelligence?](/glossary/threat-intelligence)
- [What is incident response?](/glossary/incident-response)

---

## Frequently asked questions

### What is security analytics?

Security analytics uses network traffic data to detect, investigate, and respond to security threats. It combines flow monitoring, packet capture, and threat intelligence to identify indicators of compromise and security incidents. Security analytics enables proactive threat detection.

### How does security analytics work?

Security analytics collects flow data and packet capture from network observation points. Threat intelligence feeds provide known malicious indicators. Analytics correlates traffic with threat indicators to detect compromises. Network behavior analysis identifies anomalies indicating threats.

### What does security analytics detect?

Security analytics detects indicators of compromise including communication with malicious domains, data exfiltration patterns, lateral movement, malware command and control, port scanning activity, DDoS attacks, and policy violations. These indicators signal security incidents.

### Why is security analytics important?

Security analytics is critical because it enables detection of threats that perimeter defenses miss. It provides visibility into what happens after attackers breach defenses. Security analytics reduces time to detect and respond to incidents, limiting damage.