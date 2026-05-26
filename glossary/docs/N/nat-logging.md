---
title: What is NAT logging?
description: NAT logging records Network Address Translation events including source and destination IP address mappings, port translations, and timestamps to track address translations for security auditing, troubleshooting, and compliance.
sidebar_label: NAT logging
sidebar_position: 66
slug: /glossary/nat-logging
keywords:
  - NAT logging
  - network address translation logging
  - NAT events
  - IP translation logging
  - port translation logging
  - NAT tracking
  - security auditing
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NAT logging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging records Network Address Translation events that occur on routers, firewalls, and NAT gateways. It tracks source and destination IP address mappings, port translations, and timestamps. NAT logging enables security auditing, troubleshooting, and compliance by providing a record of address translations."
      }
    },
    {
      "@type": "Question",
      "name": "Why is NAT logging important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging is critical for security auditing and incident investigation. When NAT translates private IPs to public IPs, it becomes difficult to trace traffic back to the original source. NAT logs preserve the mapping so investigators can identify which internal host initiated external connections. It also supports compliance requirements for traffic logging."
      }
    },
    {
      "@type": "Question",
      "name": "What data does NAT logging capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging captures original source IP and port, translated source IP and port, original destination IP and port, translated destination IP and port, protocol type, timestamp of translation creation, timestamp of translation expiration, and bytes and packets transferred. This data enables complete reconstruction of NAT sessions."
      }
    },
    {
      "@type": "Question",
      "name": "How does NAT logging support security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT logging supports security by enabling investigators to trace external threats back to internal hosts. When malicious traffic originates from inside the network, NAT logs show which internal IP initiated the connection. NAT logs also detect unauthorized NAT configurations and track suspicious translation patterns indicating compromise."
      }
    }
  ]
};

# What is NAT logging?

**NAT logging** records **Network Address Translation (NAT) events** including **source and destination IP address mappings, port translations, and timestamps**. It preserves the mapping between **private internal IPs and public or translated IPs** so that traffic can be traced back to the original host. NAT logging is used for **security auditing, troubleshooting, and compliance** in NAT‑heavy environments.

---

## How NAT logging works

NAT logging occurs on **routers, firewalls, and NAT gateways** that perform address translation. When a packet is translated, the device:

- Creates a **translation entry** in its NAT table.  
- Optionally **logs the event**, including the **original and translated IP/port pairs** and **timestamps**.

Logs are usually sent to a **collector via Syslog** or stored locally. Each log entry enables **reverse‑mapping** from a public IP/port back to the original internal host.

---

## NAT logging in network operations

In the **NOC and security operations**:

- Use NAT logs to **troubleshoot connectivity** caused by translation failures or timer expirations.  
- Security teams use NAT logs to **trace external threats back to internal hosts**, especially when traffic is seen from a public IP.  
- Compliance teams use NAT logs for **audit reports** on who accessed external resources from inside the network.

NAT logs also help detect **unauthorized NAT configurations**; for example, when internal hosts use unexpected public IPs, the logs reveal the source.

---

## NAT logging data fields

| Field | Description |
|-------|-------------|
| Original source IP | Internal IP before translation |
| Translated source IP | Public IP after translation |
| Original source port | Internal port before translation |
| Translated source port | Port assigned during translation |
| Original destination IP | Destination IP seen from the inside |
| Translated destination IP | Destination IP as seen from the outside |
| Protocol | IP protocol (TCP, UDP, ICMP, etc.) |
| Timestamp creation | When the NAT entry was created |
| Timestamp expiration | When the NAT entry was removed |
| Bytes transferred | Total bytes in the translation session |
| Packets transferred | Total packets in the translation session |

---

## What makes NAT logging work in practice

- Logs must be **enabled on all NAT devices** and reach a **reliable, centralized collector** with retry on failures.  
- Retention period must match or exceed **compliance requirements** (often 90 days or more).  
- NAT logs should be **correlated with flow and firewall logs** so that analysts can pivot from a public IP to the internal source.

---

## How Trisul handles NAT logging

Trisul can **correlate NAT logging data with flow records**, mapping **translated IPs back to original internal IPs**. This enables accurate traffic analysis and attribution, even when NAT obscures the true source. Trisul then shows **per‑tenant or per‑subscriber views** enriched with NAT mapping.

For configuration and correlation guidance, see Trisul documentation at [https://docs.trisul.org/docs/ug/flow/](https://docs.trisul.org/docs/ug/flow/).

---

## Related terms

- [What is NetFlow?](/docs/glossary/netflow)  
- [What is security auditing?](/docs/glossary/security-auditing)  
- [What is firewall logging?](/docs/glossary/firewall-logging)  
- [What is incident investigation?](/docs/glossary/incident-investigation)  
- [What is Syslog?](/docs/glossary/syslog)  

---

## Frequently asked questions

### What is NAT logging?

NAT logging records Network Address Translation events that occur on routers, firewalls, and NAT gateways. It tracks source and destination IP address mappings, port translations, and timestamps. NAT logging enables security auditing, troubleshooting, and compliance by providing a record of address translations.

### Why is NAT logging important?

NAT logging is critical for security auditing and incident investigation. When NAT translates private IPs to public IPs, it becomes difficult to trace traffic back to the original source. NAT logs preserve the mapping so investigators can identify which internal host initiated external connections. It also supports compliance requirements for traffic logging.

### What data does NAT logging capture?

NAT logging captures original source IP and port, translated source IP and port, original destination IP and port, translated destination IP and port, protocol type, timestamp of translation creation, timestamp of translation expiration, and bytes and packets transferred. This data enables complete reconstruction of NAT sessions.

### How does NAT logging support security?

NAT logging supports security by enabling investigators to trace external threats back to internal hosts. When malicious traffic originates from inside the network, NAT logs show which internal IP initiated the connection. NAT logs also detect unauthorized NAT configurations and track suspicious translation patterns indicating compromise.