---
title: What is Key Dashboard in Trisul?
description: In Trisul, the Key Dashboard is a detailed view for a specific network entity (IP address, port, application, or host) showing real-time stats, historical traffic, and investigative tools for that key.
sidebar_label: Key Dashboard
sidebar_position: 57
slug: /glossary/key-dashboard
keywords:
  - key dashboard
  - trisul key dashboard
  - host dashboard
  - IP dashboard
  - traffic dashboard
  - network analytics
  - key details
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Key Dashboard in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Trisul, the Key Dashboard is a detailed view for a specific network entity such as an IP address, port, application, or host. It shows real-time stats, historical traffic, and investigative tools for that key. Click the tag next to any host in the Real Time Traffic dashboard to open the Key Dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "What modules are available on the Key Dashboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Key Dashboard includes Key Details module with Real Time Stabbers, Toppers, flow activity, and historical traffic charts. It provides access to traffic patterns, top conversations, application usage, and flow tracking for the selected entity."
      }
    },
    {
      "@type": "Question",
      "name": "How do you access the Key Dashboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Login as user, select Dashboards, then Real Time Traffic. Click on the tag on the right side next to any host to open the Key Dashboard. You can also use search to find an IP and click the key to go to the key dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "What can you do on the Key Dashboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the Key Dashboard you can view real-time traffic stats, see top hosts by usage within 3 seconds, analyze traffic patterns, investigate past activity using retro analysis, view flow activity in real time, and chart specific metrics for that entity."
      }
    }
  ]
};

# What is Key Dashboard in Trisul?

In **Trisul**, the **Key Dashboard** is a **detailed view for a specific network entity**, such as an **IP address, port, application, or host**. It brings together **real‑time statistics, historical traffic patterns, and investigative tools** for that single “key” object, enabling operators to quickly pivot from a high‑level view into a focused, entity‑centric analysis. You can open the Key Dashboard by clicking the **tag next to any host in the Real Time Traffic dashboard** or by searching for an IP/app and selecting its key.  

---

## How the Key Dashboard works

The Key Dashboard **aggregates all traffic data tied to one entity** from multiple **counter groups** (Hosts, Applications, Ports, Flows, and others). It shows:

- **Real‑time stabbers** that update every 1–3 seconds, giving a near‑instant view of current traffic.  
- **Historical charts** displaying traffic patterns over hours, days, weeks, or months.  
- **Top talkers, top conversations, and top protocols** for that key, together with **flow‑level detail** you can drill into.  

Behind the scenes, Trisul uses **per‑flow indexing** so that selecting a key does not require a full scan of all records; instead, the dashboard loads quickly even for large, multi‑year archives.

---

## Key Dashboard in network operations

In the **NOC and security operations**, the Key Dashboard is used to:

- Investigate **suspicious or high‑traffic hosts**, IPs, or applications directly from the Real Time Traffic view.  
- Analyze **flow activity for a specific IP** to detect lateral movement, C2‑like behavior, or policy‑violating destinations.  
- Understand **traffic patterns for capacity planning** and before‑after change validation (e.g., deployments, policy changes, or peering shifts).  

By clicking on real‑time stabbers or top‑convo entries, analysts can dive into **flow details, traffic matrices, and application‑level breakdowns** without leaving the context of the selected key.

---

## Key Dashboard modules

| Module | Description |
|--------|-------------|
| Key Details | Shows real‑time stabbers, toppers, flow activity, and summary metrics for the key |
| Real Time Traffic | Displays traffic within the last 3 seconds for the selected entity |
| Historical Charts | Presents long‑term traffic trends and patterns (e.g., by day, week, or month) |
| Flow Activity | Lists currently active flows involving the key, with volume and protocol details |
| Retro Analysis | Provides tools to investigate past activity for the key, including flow‑ history and traffic‑pattern queries |

These modules make the Key Dashboard a **single‑pane investigative workplace** for any network entity that appears in your traffic telemetry.

---

## What makes the Key Dashboard work in practice

The Key Dashboard’s effectiveness comes from:

- **Per‑flow indexing**: Trisul indexes flows by key (e.g., IP, port, app), so loading a key‑specific view is fast and scalable, even across large archives.  
- **Near‑real‑time updates**: “Stabber” stats refresh every 1–3 seconds, giving operators **immediate situational awareness** without waiting for hourly aggregates.  
- **Context‑preserving drilldowns**: Clicking on any chart or stabber keeps you within the same key context, letting you explore **from summary → traffic matrix → individual flows** in one workflow.  

This combination of speed, context, and drilldown depth makes the Key Dashboard one of the most frequently used views in day‑to‑day Trisul operations.

---

## How Trisul handles the Key Dashboard

Trisul exposes the **Key Dashboard as part of its core UI**. To use it:

- Log in as a user, go to **Dashboards → Real Time Traffic**, then **click the tag next to any host** to open its Key Dashboard.  
- Alternatively, use the **search box** to find an IP address, port, or application and **click the key** to jump directly to the dashboard.  

The Key Dashboard is powered by the **Key Details module**, which shows real‑time stabbers, toppers, flow activity, and historical charts, and it integrates with **Explore Flows**, **Flow Tracker**, and **Retro Analysis** for deeper investigations. More details are available in the Trisul user guide at [https://docs.trisul.org/docs/ug/cg/tasks/](https://docs.trisul.org/docs/ug/cg/tasks/).

---

## Related terms

- [What is Explore Flows?](/docs/glossary/explore-flows)  
- [What is real‑time traffic?](/docs/glossary/realtime-traffic-monitoring)  
- [What is counter group?](/docs/glossary/counter-group)  
- [What is flow tracker?](/docs/glossary/flow-tracker)  
- [What is retro analysis?](/docs/glossary/retro-analysis)  

---

## Frequently asked questions

### What is the Key Dashboard in Trisul?

In Trisul, the Key Dashboard is a detailed view for a specific network entity such as an IP address, port, application, or host. It shows real‑time stats, historical traffic, and investigative tools for that key. Click the tag next to any host in the Real Time Traffic dashboard to open the Key Dashboard.

### What modules are available on the Key Dashboard?

The Key Dashboard includes Key Details module with Real Time Stabbers, Toppers, flow activity, and historical traffic charts. It provides access to traffic patterns, top conversations, application usage, and flow tracking for the selected entity.

### How do you access the Key Dashboard?

Login as user, select Dashboards, then Real Time Traffic. Click on the tag on the right side next to any host to open the Key Dashboard. You can also use search to find an IP and click the key to go to the key dashboard.

### What can you do on the Key Dashboard?

On the Key Dashboard you can view real‑time traffic stats, see top hosts by usage within 3 seconds, analyze traffic patterns, investigate past activity using retro analysis, view flow activity in real time, and chart specific metrics for that entity.