---
title: What are rare flows?
description: Rare flows are traffic flows that occur infrequently, appear unusual compared with normal behavior, or match patterns that are seldom seen on the network.
sidebar_label: Rare flows
sidebar_position: 257
slug: /glossary/rare-flows
keywords:
  - rare flows
  - unusual traffic
  - uncommon flows
  - anomaly detection
  - rare communication
  - suspicious flows
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are rare flows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rare flows are traffic flows that occur infrequently, appear unusual compared with normal behavior, or match patterns that are seldom seen on the network."
      }
    },
    {
      "@type": "Question",
      "name": "Why are rare flows important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rare flows are important because they can reveal anomalies, new applications, misconfigurations, or suspicious behavior."
      }
    },
    {
      "@type": "Question",
      "name": "How are rare flows identified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rare flows are identified by comparing observed traffic with historical baselines or expected communication patterns."
      }
    },
    {
      "@type": "Question",
      "name": "How are rare flows used in analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rare flows are used in anomaly detection, investigation, and behavior analysis."
      }
    }
  ]
};

# What are rare flows?

Rare flows are traffic flows that occur infrequently, appear unusual compared with normal behavior, or match patterns that are seldom seen on the network.

---

## How rare flow analysis works

A system compares current traffic against historical behavior and expected communication patterns. Flows that do not appear often or do not fit the normal baseline are marked as rare.

The rarity may be based on source, destination, protocol, time, or application. The important point is that the flow stands out from routine behavior.

---

## Rare flows in operations

Rare flows are useful in anomaly detection and security review. Unusual communication may indicate a misconfiguration, a new workload, or suspicious activity.

They are also helpful in troubleshooting. A rare flow can explain behavior that does not fit the usual traffic pattern.

---

## Common rare flow clues

| Clue | Meaning |
|---|---|
| New destination | Unseen communication target |
| Uncommon protocol | Rare service usage |
| Odd timing | Activity at unusual hours |
| Low frequency | Traffic almost never seen |

---

## What makes rare flows useful

Rare flows are useful because many important events are unusual rather than large. A suspicious flow may be small but still significant.

They are most effective when backed by strong historical baselines. Without history, it is hard to say what is truly rare.

---

## How Trisul handles rare flows

Trisul can help identify uncommon traffic patterns by comparing current flows with historical behavior and observed baselines.

---

## Related terms

- Traffic pattern analysis
- Threat intelligence
- Heavy hitters
- Flow attribution
- Incident investigation

---

## Frequently asked questions

### What are rare flows?

Rare flows are traffic flows that occur infrequently, appear unusual compared with normal behavior, or match patterns that are seldom seen on the network.

### Why are rare flows important?

Rare flows are important because they can reveal anomalies, new applications, misconfigurations, or suspicious behavior.

### How are rare flows identified?

Rare flows are identified by comparing observed traffic with historical baselines or expected communication patterns.

### How are rare flows used in analysis?

Rare flows are used in anomaly detection, investigation, and behavior analysis.