---
title: What is active monitoring?
description: Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.
sidebar_label: Active monitoring
sidebar_position: 236
slug: /glossary/active-monitoring
keywords:
  - active monitoring
  - synthetic monitoring
  - probes
  - health checks
  - availability monitoring
  - test traffic
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is active monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Why is active monitoring used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring is used to verify that services are reachable and performing as expected."
      }
    },
    {
      "@type": "Question",
      "name": "What does active monitoring measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring can measure latency, availability, response time, and loss."
      }
    },
    {
      "@type": "Question",
      "name": "How is active monitoring different from passive monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active monitoring sends test traffic, while passive monitoring observes real traffic already moving across the network."
      }
    }
  ]
};

# What is active monitoring?

Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.

---

## How active monitoring works

An active monitor generates traffic, pings a service, or runs a synthetic transaction. The response is measured and compared against expectations.

This gives a direct check on availability and response quality. It is different from simply watching real traffic pass by.

---

## Active monitoring in network operations

Operations teams use active monitoring to confirm that services are reachable and responsive. It helps validate the user path even when no real user traffic is present.

It is useful for catching failures quickly. A probe can detect issues before users report them.

---

## Common active checks

| Check | Purpose |
|---|---|
| Ping | Basic reachability |
| Synthetic request | Service response |
| Test transaction | End-to-end behavior |
| Availability probe | Confirm uptime |

---

## What makes active monitoring useful

Active monitoring is useful because it directly tests service behavior. That makes it good for alerting and availability checks.

It works best when combined with passive traffic visibility, since the two approaches complement each other.

---

## How Trisul handles active monitoring

Trisul can complement active monitoring by showing what real network traffic looked like when a synthetic check reported a problem.

---

## Related terms

- Network troubleshooting
- Latency
- Quality of experience
- Passive monitoring
- Network performance

---

## Frequently asked questions

### What is active monitoring?

Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.

### Why is active monitoring used?

Active monitoring is used to verify that services are reachable and performing as expected.

### What does active monitoring measure?

Active monitoring can measure latency, availability, response time, and loss.

### How is active monitoring different from passive monitoring?

Active monitoring sends test traffic, while passive monitoring observes real traffic already moving across the network.