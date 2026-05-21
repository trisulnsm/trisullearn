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

In Trisul, the Key Dashboard is a detailed view for a specific network entity including IP address, port, application, or host. It shows real-time stats, historical traffic, and investigative tools for that key. Click the tag next to any host in the Real Time Traffic dashboard to open the Key Dashboard.

---

## How the Key Dashboard works

The Key Dashboard aggregates all traffic data for a single entity. It displays metrics from multiple counter groups including Hosts, Applications, Ports, and Flows. Real-time stabbers show current traffic within 3 seconds. Historical charts show traffic patterns over days, weeks, or months.

---

## Key Dashboard in network operations

In the NOC, use the Key Dashboard to investigate suspicious hosts or high-traffic applications. Security teams analyze flow activity for specific IPs to detect compromise. Engineering uses the dashboard to understand traffic patterns for capacity planning.

Click on real-time stabbers to drill down into flow activity, top conversations, and application usage. The dashboard provides instant access to all investigative tools for the selected entity.

---

## Key Dashboard modules

| Module | Description |
|---|---|
| Key Details | Real-time stabbers, toppers, flow activity |
| Real Time Traffic | Traffic within 3 seconds for the entity |
| Historical Charts | Long-term traffic patterns and trends |
| Flow Activity | Current flows involving the entity |
| Retro Analysis | Tools to investigate past activity |

---

## What makes the Key Dashboard work in practice

The dashboard uses Trisul's per-flow indexing to retrieve data quickly. Without indexing, searching for a specific IP would require scanning all flow records. With indexing, the dashboard loads in seconds even for large archives.

Real-time stabbers provide near-instant visibility. Traffic statistics update every 1 to 3 seconds showing current activity. This enables rapid response to emerging issues without waiting for data aggregation.

---

## How Trisul handles the Key Dashboard

Trisul provides the Key Dashboard as part of its core UI. Login as user, navigate to Dashboards, select Real Time Traffic, and click the tag next to any host. The Key Dashboard displays Key Details module with Real Time Stabbers, Toppers, and flow activity. Use the search box to find an IP and click the key to go to the dashboard. Full documentation is at https://docs.trisul.org/docs/ug/cg/tasks/.

---

## Related terms

- [What is Explore Flows?](/docs/glossary/explore-flows)
- [What is real-time traffic?](/docs/glossary/real-time-traffic)
- [What is counter group?](/docs/glossary/counter-group)
- [What is flow tracker?](/docs/glossary/flow-tracker)
- [What is retro analysis?](/docs/glossary/retro-analysis)

---

## Frequently asked questions

### What is the Key Dashboard in Trisul?

In Trisul, the Key Dashboard is a detailed view for a specific network entity such as an IP address, port, application, or host. It shows real-time stats, historical traffic, and investigative tools for that key. Click the tag next to any host in the Real Time Traffic dashboard to open the Key Dashboard.

### What modules are available on the Key Dashboard?

The Key Dashboard includes Key Details module with Real Time Stabbers, Toppers, flow activity, and historical traffic charts. It provides access to traffic patterns, top conversations, application usage, and flow tracking for the selected entity.

### How do you access the Key Dashboard?

Login as user, select Dashboards, then Real Time Traffic. Click on the tag on the right side next to any host to open the Key Dashboard. You can also use search to find an IP and click the key to go to the key dashboard.

### What can you do on the Key Dashboard?

On the Key Dashboard you can view real-time traffic stats, see top hosts by usage within 3 seconds, analyze traffic patterns, investigate past activity using retro analysis, view flow activity in real time, and chart specific metrics for that entity.