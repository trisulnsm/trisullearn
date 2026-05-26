---
title: What is lateral movement?
description: Lateral movement is the stage of an attack where an intruder moves from one compromised system to another inside a network. It is a common sign of post-compromise activity.
sidebar_label: Lateral movement
sidebar_position: 162
slug: /glossary/lateral-movement
keywords:
  - lateral movement
  - post-compromise
  - attacker movement
  - internal attack
  - threat hunting
  - security analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is lateral movement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is the stage of an attack where an intruder moves from one compromised system to another inside a network. It is a common sign of post-compromise activity."
      }
    },
    {
      "@type": "Question",
      "name": "Why does lateral movement matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement matters because it shows that an attacker has moved beyond the first compromised host. It can lead to broader access, data theft, or control of additional systems."
      }
    },
    {
      "@type": "Question",
      "name": "How is lateral movement detected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is detected by looking for unusual internal connections, repeated authentication attempts, new access paths, and suspicious movement between hosts or segments."
      }
    },
    {
      "@type": "Question",
      "name": "What helps lateral movement analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow data, host monitoring, authentication logs, and segmentation data help analysts see movement across the network and identify where the attacker is spreading."
      }
    }
  ]
};

# What is lateral movement?

**Lateral movement** is the stage of an attack where an **intruder moves from one compromised system to another inside a network**. It is a hallmark of **post‑compromise activity**, showing that an attacker has gained a foothold and is now trying to expand access, locate valuable assets, or move closer to critical systems such as databases, domain controllers, or backup servers. Unlike the initial breach, lateral movement often occurs “east‑west” within the internal network, making it harder to detect if security visibility is focused only on perimeter traffic.

---

## How lateral movement works

Once an attacker compromises a single host, they typically:

- Use **stolen credentials** (e.g., via credential dumping or pass‑the‑hash) to log into other systems.  
- Leverage **remote access tools** (e.g., RDP, WinRM, SSH, WMI, PowerShell remoting) to pivot between hosts.  
- Exploit **trusted internal paths** (e.g., domain‑wide services, scheduled tasks, or service accounts) to maintain persistence and blend into normal traffic.  

The goal is usually to **reach high‑value targets**, escalate privileges, and remain undetected for as long as possible. Lateral movement often appears as **unusual internal flows or service‑specific protocols** that deviate from the host’s usual behavior.

---

## Lateral movement in network operations

In **SOC and security operations**, lateral movement indicates that an incident has likely progressed beyond the initial entry point. Analysts treat it as a **critical signal** because it can lead to:

- Broader access across the estate.  
- Data exfiltration or ransomware deployment.  
- Compromise of critical infrastructure or management systems.  

Teams look for signs such as:

- **Unusual internal traffic** (e.g., a workstation connecting repeatedly to a domain controller or database server it normally never talks to).  
- **New internal service usage** (e.g., sudden SMB, WMI, or RDP sessions between hosts that did not communicate before).  
- **Anomalous timing or frequency** of internal connections outside regular business hours.  

Segmentation boundaries, zone rules, and authentication logs are especially useful for spotting movement that crosses trust domains or service groups.

---

## Common indicators

| Indicator | Meaning |
|-----------|---------|
| New internal connections | Hosts communicating internally in ways they never did before |
| Reused or unusual credentials | Repeated logins, pass‑the‑hash‑like activity, or use of service accounts from unexpected hosts |
| Odd service access | Traffic to sensitive services (SMB, WMI, RDP, LDAP) from unexpected clients |
| Internal scans | Port‑scan‑like patterns within the network, often used for host discovery |

These indicators are rarely conclusive on their own but become powerful when combined with **host telemetry, authentication logs, and traffic context**.

---

## What makes lateral movement work in practice

Lateral movement is easier to detect when:

- The network is **segmented** into logical zones (e.g., user, server, DMZ, admin) so that movement across segments stands out.  
- Baselines of normal host behavior and internal‑traffic patterns exist, making **deviations** more visible.  

Without segmentation or baselines, lateral movement can look like **normal east‑west traffic**, and attackers can pivot freely. Effective detection therefore depends on understanding both **topology (segments and zones)** and **normal behavior (per‑host and per‑service patterns)**.

---

## How Trisul handles lateral movement

Trisul helps reveal **internal traffic changes and host‑to‑host communication patterns** that can indicate lateral movement. It supports:

- **Traffic‑matrix views** across segments and services, highlighting unusual internal flows.  
- **Drill‑downs from flows to sessions and applications**, so analysts can see protocols like RDP, SMB, WMI, or LDAP being used unexpectedly.  
- Correlation of **internal traffic patterns with host‑centric telemetry** (e.g., via host monitors or EDR signals) for higher‑confidence investigations.  

This enables **threat‑hunting workflows** where operators can pivot from “this host called out to a suspicious external IP” to “which internal hosts is it now talking to?” and build attack‑path stories directly from the flow and traffic‑analysis layer.

---

## Related terms

- Lateral movement  
- EDR  
- Network segmentation  
- Security zone  
- Host monitor  
- Threat hunting  

---

## Frequently asked questions

### What is lateral movement?

Lateral movement is the stage of an attack where an intruder moves from one compromised system to another inside a network. It is a common sign of post‑compromise activity.

### Why does lateral movement matter?

Lateral movement matters because it shows that an attacker has moved beyond the first compromised host. It can lead to broader access, data theft, or control of additional systems.

### How is lateral movement detected?

Lateral movement is detected by looking for unusual internal connections, repeated authentication attempts, new access paths, and suspicious movement between hosts or segments.

### What helps lateral movement analysis?

Flow data, host monitoring, authentication logs, and segmentation data help analysts see movement across the network and identify where the attacker is spreading.