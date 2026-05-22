---
title: What is a context menu in network analytics?
description: A context menu in Trisul is the interactive menu that appears when you click on any traffic item in the dashboard. It provides quick access to investigation actions such as drilling into flows, retrieving packets, or viewing host details.
sidebar_label: Context menu
sidebar_position: 142
slug: /glossary/context-menu
keywords:
  - context menu
  - Trisul context menu
  - drill-down
  - investigation menu
  - traffic investigation
  - pivot actions
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a context menu in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A context menu in Trisul is the interactive menu that appears when you click on any traffic item in the dashboard. It provides quick access to investigation actions such as drilling into flows, retrieving packets, or viewing host details."
      }
    },
    {
      "@type": "Question",
      "name": "What actions are available in the context menu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The context menu provides actions such as viewing flows for an IP, retrieving matching packets, checking host details, pivoting to related traffic, and running queries scoped to the selected item."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the context menu important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The context menu is important because it makes investigation fast. Instead of manually building queries, analysts click on an item and immediately access relevant data. It reduces investigation time significantly."
      }
    },
    {
      "@type": "Question",
      "name": "Where does the context menu appear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The context menu appears throughout the Trisul dashboard wherever traffic items are displayed. This includes top talker lists, flow tables, alert views, and traffic graphs."
      }
    }
  ]
};

# What is a context menu in network analytics?

A context menu in Trisul is the interactive menu that appears when you click on any traffic item in the dashboard. It provides quick access to investigation actions such as drilling into flows, retrieving packets, or viewing host details.

---

## How the context menu works

The context menu is triggered by clicking any item in the dashboard such as an IP address, application, flow, or alert. A menu appears with actions relevant to that specific item.

Actions are scoped to the selected item, so all results are already filtered. An analyst clicking on an IP address sees options to view that IP's flows, packets, conversations, and history without needing to write a query manually.

---

## Context menu in network operations

The context menu is the primary investigation tool for NOC and SOC analysts. It removes the need to navigate between screens or build manual queries. From any traffic view, analysts can pivot directly to the information they need.

This makes investigation much faster. An analyst seeing a suspicious IP in a top talker list can immediately drill into its full traffic history with one click.

---

## Common context menu actions

| Action | What it does |
|---|---|
| View flows | Shows all flows for the selected item |
| Get packets | Retrieves matching PCAP |
| Host details | Shows host activity summary |
| Pivot to app | Shows traffic by application for this host |
| Alert history | Shows alerts related to this item |

---

## What makes the context menu work in practice

The context menu is only useful if the underlying data is indexed correctly. Fast pivots depend on pre-computed indexes that allow instant filtering by IP, application, or other dimensions.

Keeping the menu actions focused is also important. Too many options make it harder to find the right action. The best context menus surface the most useful actions for the item type.

---

## How Trisul handles the context menu

Trisul provides a context menu throughout the dashboard that lets analysts click on any item and immediately access investigation actions. All actions are pre-scoped to the selected item, making pivots instant. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Traffic investigation
- Flow analysis
- Packet capture
- Host monitor
- Drill-down

---

## Frequently asked questions

### What is a context menu in network analytics?

A context menu in Trisul is the interactive menu that appears when you click on any traffic item in the dashboard. It provides quick access to investigation actions such as drilling into flows, retrieving packets, or viewing host details.

### What actions are available in the context menu?

The context menu provides actions such as viewing flows for an IP, retrieving matching packets, checking host details, pivoting to related traffic, and running queries scoped to the selected item.

### Why is the context menu important?

The context menu is important because it makes investigation fast. Instead of manually building queries, analysts click on an item and immediately access relevant data. It reduces investigation time significantly.

### Where does the context menu appear?

The context menu appears throughout the Trisul dashboard wherever traffic items are displayed. This includes top talker lists, flow tables, alert views, and traffic graphs.