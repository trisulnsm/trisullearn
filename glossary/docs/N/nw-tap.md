---
title: What is a network TAP?
description: A network TAP is a device that passively copies traffic from a physical link so monitoring tools can inspect it without affecting the live connection.
sidebar_label: Network TAP
sidebar_position: 232
slug: /glossary/network-tap
keywords:
  - network TAP
  - traffic tap
  - passive capture
  - packet copy
  - link monitoring
  - network visibility
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a network TAP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A network TAP is a device that passively copies traffic from a physical link so monitoring tools can inspect it without affecting the live connection."
      }
    },
    {
      "@type": "Question",
      "name": "Why use a network TAP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A network TAP is used to get reliable passive visibility into traffic for monitoring, troubleshooting, and forensics."
      }
    },
    {
      "@type": "Question",
      "name": "How is a TAP different from SPAN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A TAP copies traffic physically from the link, while SPAN mirrors traffic from a switch port."
      }
    },
    {
      "@type": "Question",
      "name": "What is a TAP used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A TAP is used for packet capture, network troubleshooting, and performance or security analysis."
      }
    }
  ]
};

# What is a network TAP?

A **network TAP** is a device that **passively copies traffic from a physical link** so monitoring tools can inspect it **without affecting the live connection**. It is a common way to get **full, unmodified visibility** into a link for analysis, troubleshooting, and forensics.

---

## How a network TAP works

A network TAP:

- Sits **inline on the cable** and **duplicates all traffic** to a **monitoring port** while letting the original traffic continue on the main link.  
- Operates **passively**, meaning it does not modify packets or participate in routing or switching.

Because it is **physical‑level duplication**, a TAP usually provides **more reliable packet capture** than software‑based mirroring, and is often preferred for **forensic‑grade** and **high‑speed** monitoring.

---

## Network TAPs in network operations

In network operations, TAPs are used when teams need **accurate, bit‑level visibility** into traffic:

- For **troubleshooting** and **performance analysis** where missed packets would weaken the investigation.  
- For **security monitoring** and **incident response**, where full packet capture is needed to reconstruct attacks or policy violations.  

They are especially valuable in **high‑speed environments** (e.g., 10G/25G/100G) and where **switch‑based mirroring limits** (dropped mirrored packets, rate‑limiting) are unacceptable.

---

## TAP vs SPAN

| Method | How it works |
|--------|--------------|
| TAP | Copies traffic physically from the link without changing the switch configuration |
| SPAN | Mirrors traffic from a switch port using a software‑defined mirroring session |

TAPs are generally **more reliable** for full‑fidelity capture; SPAN is simpler to deploy but may lose packets under load.

---

## What makes a TAP useful in practice

A TAP is useful because:

- It **preserves traffic visibility** without depending on **switch configuration or mirroring limits**, which can drop or shape mirrored packets.  
- It provides **full‑fidelity, unaltered packet streams**, making it ideal where **accuracy matters more than convenience**, such as in **forensics**, **compliance**, and **high‑performance monitoring**.  

This makes TAPs a strong choice when **packet‑level completeness** is more important than ease of deployment.

---

## How Trisul handles TAP feeds

Trisul can:

- **Ingest traffic directly from TAPs** to provide **detailed visibility** into packets, flows, and performance behavior.  
- Use TAP‑fed data for **deep packet‑level analysis**, **flow‑level correlation**, and **anomaly or threat detection**.  

This lets teams build a **centralized, capture‑based observability layer** that is independent of switch‑level mirroring constraints.

---

## Related terms

- [What is a SPAN port?](/docs/glossary/span-port)  
- [What is Wireshark?](/docs/glossary/wireshark)  
- [What is network troubleshooting?](/docs/glossary/network-troubleshooting)  
- [What is digital forensics?](/docs/glossary/digital-forensics)  
- [What is active monitoring?](/docs/glossary/active-monitoring)  

---

## Frequently asked questions

### What is a network TAP?

A network TAP is a device that passively copies traffic from a physical link so monitoring tools can inspect it without affecting the live connection.

### Why use a network TAP?

A network TAP is used to get reliable passive visibility into traffic for monitoring, troubleshooting, and forensics.

### How is a TAP different from SPAN?

A TAP copies traffic physically from the link, while SPAN mirrors traffic from a switch port.

### What is a TAP used for?

A TAP is used for packet capture, network troubleshooting, and performance or security analysis.