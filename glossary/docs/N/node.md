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

In **network analytics**, a **node** is a **single physical or virtual machine** running the **Trisul Network Analytics software**. Nodes collaborate in a **distributed deployment** to **collect, process, and store network telemetry** at scale, enabling consistent visibility across large or multi‑site networks.

---

## How nodes work

Trisul defines two primary node roles:

- A **probe node** sits at a **collection point** (e.g., near a ToR switch or WAN edge) and **captures flow or packet data** directly from the network. It performs local processing such as aggregation, decodes, and flow‑based analytics.  
- A **hub node** **aggregates data** from one or more probe nodes and **serves the web dashboard, query interface, and alerting** layer.  

In **small deployments**, a single machine can run **both probe and hub roles**. In **larger or distributed environments**, probes and hubs run on **separate nodes** to scale capture, processing, and UI load independently.

---

## Nodes in network operations

Nodes define the **physical and logical layout** of a Trisul deployment:

- Each **probe node** covers **one or more network segments** (e.g., a data‑center pod, branch, or ISP POP).  
- Adding a **new probe node** extends visibility to **another location or segment** without redesigning the hub.  
- All **operators interact through the hub node**, regardless of how many probes are deployed, providing a **centralized view** of distributed telemetry.

This model also supports **multi‑tenant and multi‑domain environments**, where multiple probes feed into a shared hub for consolidated analytics and reporting.

---

## Node roles

| Role | Function |
|------|----------|
| Probe node | Captures and processes traffic at the collection point; exports summarized telemetry |
| Hub node | Aggregates data from multiple probes and serves dashboards, queries, and alerts |
| Combined node | Runs both probe and hub roles on a single machine (typical in smaller deployments) |

Each role can be replicated and distributed to meet **scale, resiliency, and locality** requirements.

---

## What makes nodes work in practice

Three operational aspects are critical:

- **Traffic access**:  
  - Each probe node must have **reliable, low‑latency access** to traffic at its segment (via SPAN port, TAP, or inline).  
- **Probe‑to‑hub connectivity**:  
  - The **network path** between probe and hub must be stable and have **sufficient throughput and low packet loss** to carry summarized telemetry without gaps.  
- **Node health monitoring**:  
  - If a probe node goes offline, **visibility over that segment is lost** until it recovers.  
  - Trisul and external monitoring should **alert on node availability, resource exhaustion, and traffic‑loss thresholds** so operators can respond quickly.  

Proper node design enables **scalable, resilient telemetry** that matches network topology and growth.

---

## How Trisul handles nodes

Trisul’s architecture is built around the **probe‑hub node model**:

- Each node appears as a managed entity in the **web UI**; operators can view **per‑node status, metrics, and configuration** from the hub.  
- **Probes send processed and summarized data** to the hub, which then **correlates, stores, and indexes** it for queries, dashboards, and alerts.  
- The system supports **multi‑probe, multi‑hub deployments**, where **multiple hub nodes** can operate in **distributed or sharded topologies** for very large environments.  

For node‑level sizing, topology patterns, and high‑availability guidance, see Trisul documentation at [https://docs.trisul.org/](https://docs.trisul.org/).

---

## Related terms

- [What is a distributed domain?](/docs/glossary/distributed-domain)  
- [What is a probe?](/docs/glossary/probe)  
- [What is a hub?](/docs/glossary/hub)  
- [What is multitenancy?](/docs/glossary/multitenancy)  
- [What is a flow collector?](/docs/glossary/flow-collector)  

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