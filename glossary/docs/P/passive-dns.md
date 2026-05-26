---
title: What is passive DNS?
description: Passive DNS is the collection of DNS query and response data from observed traffic rather than from an active resolver. It helps analysts see which domains were resolved and when.
sidebar_label: Passive DNS
sidebar_position: 156
slug: /glossary/passive-dns
keywords:
  - passive DNS
  - DNS visibility
  - DNS logs
  - domain resolution
  - threat hunting
  - DNS analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is passive DNS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passive DNS is the collection of DNS query and response data from observed traffic rather than from an active resolver. It helps analysts see which domains were resolved and when."
      }
    },
    {
      "@type": "Question",
      "name": "How does passive DNS work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passive DNS records DNS queries and responses as they pass through the network. The data is then stored and analyzed to understand domain lookups, IP mappings, and DNS behavior over time."
      }
    },
    {
      "@type": "Question",
      "name": "Why is passive DNS useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passive DNS is useful because it gives visibility into domain resolution without requiring active probing. It helps with threat hunting, incident investigation, and tracking suspicious domains."
      }
    },
    {
      "@type": "Question",
      "name": "What can passive DNS reveal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passive DNS can reveal which domains were queried, which IP addresses they resolved to, and how those relationships changed over time. This is valuable for tracking infrastructure and anomalies."
      }
    }
  ]
};

# What is passive DNS?

**Passive DNS** is the **collection of DNS query and response data** from **observed traffic** rather than from an **active resolver**. It helps analysts **see which domains were resolved and when**, without directly querying DNS themselves.

---

## How passive DNS works

Passive DNS:

- **Observes DNS traffic** as it crosses the network (e.g., UDP/TCP DNS packets).  
- **Records** the **domain name**, **resolved IP**, **record type**, and **timestamp** for each query and response.  

This builds a **time‑stamped map** of domain‑to‑IP relationships. Analysts can then **search and pivot** through this data to see **how DNS activity changed over time**.

---

## Passive DNS in network operations

In network operations, passive DNS:

- Gives **security and SOC teams visibility into domain resolution** without active probing.  
- Helps with **threat hunting, incident investigation, and tracking suspicious domains** (e.g., rare or malicious domains).  
- Adds **context** to flows: if a host connects to a suspicious IP, passive DNS can show **which domain** that host likely resolved first.

Because DNS is often the **first step** in reaching a service or command‑and‑control infrastructure, passive DNS is a powerful **early‑visibility signal**.

---

## Common passive DNS outputs

| Output | Example |
|--------|---------|
| Domain queried | `example.com` |
| Resolved IP | `203.0.113.10` |
| Query time | When the lookup happened (timestamp) |
| Response pattern | How DNS answers changed over time (e.g., new IPs, TTLs, record types) |

These outputs form the backbone of **DNS‑based threat‑hunting and forensic workflows**.

---

## What makes passive DNS work in practice

Passive DNS works best when:

- **DNS traffic is visible** at the observation point; if DNS is fully encrypted (e.g., DoH, DoT not decrypted) or tunneled away from capture points, visibility drops sharply.  
- Passive‑DNS records are **correlated with flows and alerts**, so analysts can move quickly from a **domain event** to **host activity**, **traffic patterns**, and **potential threats**.  

Without visibility and correlation, passive DNS becomes a partial or noisy data source.

---

## How Trisul handles passive DNS

Trisul:

- Can **inspect DNS traffic** to extract **queries, responses, and domain‑to‑IP mappings**, providing **passive DNS–style visibility**.  
- **Correlates DNS events with flows and packets**, so analysts can see **which hosts resolved which domains** and **how those lookups relate to traffic behavior**.  

This enables **DNS‑driven investigation** and **threat‑hunting workflows** without relying on external DNS‑log pipelines.

---

## Related terms

- [What is DNS?](/docs/glossary/dns)  
- [What is DNS tunneling?](/docs/glossary/dns-tunneling)  
- [What is domain reputation?](/docs/glossary/domain-reputation)  
- [What is threat hunting?](/docs/glossary/threat-hunting)  
- [What is network security monitoring?](/docs/glossary/network-security-monitoring)  

---

## Frequently asked questions

### What is passive DNS?

Passive DNS is the collection of DNS query and response data from observed traffic rather than from an active resolver. It helps analysts see which domains were resolved and when.

### How does passive DNS work?

Passive DNS records DNS queries and responses as they pass through the network. The data is then stored and analyzed to understand domain lookups, IP mappings, and DNS behavior over time.

### Why is passive DNS useful?

Passive DNS is useful because it gives visibility into domain resolution without requiring active probing. It helps with threat hunting, incident investigation, and tracking suspicious domains.

### What can passive DNS reveal?

Passive DNS can reveal which domains were queried, which IP addresses they resolved to, and how those relationships changed over time. This is valuable for tracking infrastructure and anomalies.