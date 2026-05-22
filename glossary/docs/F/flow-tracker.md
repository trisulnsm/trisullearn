---
title: What is a flow tracker?
description: A flow tracker is a monitoring view that follows the traffic behavior of a specific flow, conversation, host, or pattern over time. It helps analysts see how network activity changes and when anomalies appear.
sidebar_label: Flow tracker
sidebar_position: 164
slug: /glossary/flow-tracker
keywords:
  - flow tracker
  - flow monitoring
  - conversation tracking
  - traffic tracking
  - pattern tracking
  - network analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a flow tracker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow tracker is a monitoring view that follows the traffic behavior of a specific flow, conversation, host, or pattern over time. It helps analysts see how network activity changes and when anomalies appear."
      }
    },
    {
      "@type": "Question",
      "name": "What does a flow tracker show?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flow tracker can show bytes, packets, timing, direction, peers, and changes in activity over time. It gives a focused view of one traffic path or conversation."
      }
    },
    {
      "@type": "Question",
      "name": "Why is flow tracking useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow tracking is useful because it helps analysts follow the exact traffic path they care about without scanning the whole network. It is valuable for troubleshooting and investigations."
      }
    },
    {
      "@type": "Question",
      "name": "How is flow tracking used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow tracking is used to watch important conversations, identify changes, and detect unusual behavior. It turns raw flow data into a focused investigation view."
      }
    }
  ]
};

# What is a flow tracker?

A flow tracker is a monitoring view that follows the traffic behavior of a specific flow, conversation, host, or pattern over time. It helps analysts see how network activity changes and when anomalies appear.

---

## How a flow tracker works

A flow tracker starts with a selected conversation or traffic pattern. It then follows that traffic across time and shows how the conversation behaves.

The view can include volume, direction, timing, and peer changes. This makes it easier to see whether the pattern is stable, growing, or abnormal.

---

## Flow tracker in network operations

Flow tracking is useful when an operator wants to follow one important conversation rather than the whole network. It helps with troubleshooting, incident review, and traffic validation.

It is also useful for observing a suspicious connection over time. That can show whether the activity is constant, intermittent, or escalating.

---

## What flow tracking can show

| Metric | Value |
|---|---|
| Bytes | Traffic volume |
| Packets | Packet count |
| Peers | Communication partners |
| Direction | Inbound or outbound |
| Trend | Change over time |

---

## What makes flow tracking work in practice

Flow tracking depends on good indexing. If the system cannot quickly find the conversation again, the tracker becomes slow and less useful.

It also works best with clear selection criteria. Operators should know whether they are tracking a host, a pair, a session, or a pattern.

---

## How Trisul handles flow tracker

Trisul provides flow tracker-style views that let analysts follow traffic behavior over time and drill into specific conversations when needed.

---

## Related terms

- Flow analysis
- Host monitor
- Top talkers
- Traffic investigation
- Conversation tracking