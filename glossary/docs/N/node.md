---
title: What is a node in network analytics?
description: A node is a single physical or virtual machine running the Trisul Network Analytics software. Nodes work together in a distributed deployment to collect, process, and store network telemetry at scale.
sidebar_label: Node
sidebar_position: 138
slug: /glossary/node
keywords:
  - node
  - Trisul node
  - network analytics node
  - distributed analytics
  - probe node
  - hub node
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a node in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A node is a single physical or virtual machine running the Trisul Network Analytics software. Nodes work together in a distributed deployment to collect, process, and store network telemetry at scale."
      }
    },
    {
      "@type": "Question",
      "name": "What types of nodes exist in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses two primary node types: the probe node which collects and processes traffic, and the hub node which aggregates data and serves the dashboard. A single machine can run both roles in smaller deployments."
      }
    },
    {
      "@type": "Question",
      "name": "How do nodes work together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Probe nodes capture and process traffic at collection points. They send summarized data to a hub node which consolidates results and serves the web interface. Multiple probes can feed a single hub."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the node concept important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The node concept is important because it defines how Trisul scales. Adding more probe nodes extends coverage to more network segments without changing the central hub."
      }
    }
  ]
};

# What is a node in network analytics?

A node is a single physical or virtual machine running the Trisul Network Analytics software. Nodes work together in a distributed deployment to collect, process, and store network telemetry at scale.

---

## How nodes work

Trisul uses two primary node roles. A probe node sits at a collection point and captures flow data or packets directly from the network. A hub node consolidates data from one or more probes and serves the dashboard and query interface.

In smaller deployments, one machine can run both roles. In larger or distributed deployments, probes and hubs run on separate machines to handle scale.

---

## Nodes in network operations

Nodes define the physical layout of a Trisul deployment. Each probe node covers one or more network segments. Adding a probe extends visibility to a new location without redesigning the rest of the system.

Hub nodes are the central point for dashboards, queries, and alerts. Operators interact with the system through the hub regardless of how many probes are deployed.

---

## Node roles

| Role | Function |
|---|---|
| Probe node | Captures and processes traffic at collection point |
| Hub node | Aggregates data, serves dashboard and queries |
| Combined node | Runs both roles on one machine |

---

## What makes nodes work in practice

Each probe node must have reliable access to traffic at its collection point. Probe-to-hub connectivity must be stable and have sufficient throughput for the summarized data being sent.

Node health monitoring is important. If a probe goes offline, coverage for that segment is lost. Alerts on node health help operators respond quickly.

---

## How Trisul handles nodes

Trisul's architecture is built around the probe-hub model. Each node is managed from the web interface. Operators can view per-node status, manage configurations, and monitor health from a central location. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Distributed domain
- Probe
- Hub
- Multitenancy
- Flow collector

---

## Frequently asked questions

### What is a node in network analytics?

A node is a single physical or virtual machine running the Trisul Network Analytics software. Nodes work together in a distributed deployment to collect, process, and store network telemetry at scale.

### What types of nodes exist in Trisul?

Trisul uses two primary node types: the probe node which collects and processes traffic, and the hub node which aggregates data and serves the dashboard. A single machine can run both roles in smaller deployments.

### How do nodes work together?

Probe nodes capture and process traffic at collection points. They send summarized data to a hub node which consolidates results and serves the web interface. Multiple probes can feed a single hub.

### Why is the node concept important?

The node concept is important because it defines how Trisul scales. Adding more probe nodes extends coverage to more network segments without changing the central hub.