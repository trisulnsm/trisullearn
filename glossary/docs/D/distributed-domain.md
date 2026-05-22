---
title: What is a distributed domain?
description: A distributed domain is a logical grouping of Trisul nodes that work together as one analytics system. It allows multiple probes spread across locations to be managed and queried as a single unified deployment.
sidebar_label: Distributed domain
sidebar_position: 139
slug: /glossary/distributed-domain
keywords:
  - distributed domain
  - Trisul domain
  - distributed analytics
  - multi-node deployment
  - network analytics domain
  - probe hub domain
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a distributed domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain is a logical grouping of Trisul nodes that work together as one analytics system. It allows multiple probes spread across locations to be managed and queried as a single unified deployment."
      }
    },
    {
      "@type": "Question",
      "name": "How does a distributed domain work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain connects one or more probe nodes to a hub node. Each probe collects traffic from its segment. The hub aggregates all data and presents a unified view across all probes."
      }
    },
    {
      "@type": "Question",
      "name": "Why use a distributed domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain is used when a network spans multiple physical locations, segments, or data centers. It enables centralized management and visibility across all segments from one interface."
      }
    },
    {
      "@type": "Question",
      "name": "How does distributed domain relate to multitenancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A distributed domain covers one deployment with multiple nodes. Multitenancy adds a layer on top, allowing multiple separate tenants or customers to each have their own isolated context within the same infrastructure."
      }
    }
  ]
};

# What is a distributed domain?

A distributed domain is a logical grouping of Trisul nodes that work together as one analytics system. It allows multiple probes spread across locations to be managed and queried as a single unified deployment.

---

## How a distributed domain works

A distributed domain consists of one hub node and one or more probe nodes. Each probe collects and processes traffic at its network segment. The hub aggregates data from all probes and provides a unified dashboard and query interface.

Operators see the entire network through one interface even when the underlying collection points are physically separate. Queries run across all probes in the domain.

---

## Distributed domains in network operations

Distributed domains are used when traffic must be collected from multiple locations. A network with several data centers, branch offices, or monitoring points can use one domain to cover all of them.

This removes the need to log into separate systems for each location. A single domain gives one view across the entire footprint.

---

## Single vs distributed deployment

| Deployment | Description |
|---|---|
| Single node | One machine runs probe and hub |
| Distributed domain | Multiple probes feed one hub |
| Multi-domain | Multiple independent domains |

---

## What makes distributed domains work in practice

Probe-to-hub communication must be reliable and low-latency. If a probe loses connectivity to the hub, its data may not appear in the central view. Network paths between nodes should be monitored.

Time synchronization across all nodes is essential for accurate correlation. All probes must use the same time source so that events from different locations line up correctly.

---

## How Trisul handles distributed domains

Trisul is designed around the distributed domain model. Probe and hub nodes are configured to work as a single domain. The web interface shows a unified view across all nodes. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Node
- Probe
- Hub
- Multitenancy
- Centralized monitoring

---

## Frequently asked questions

### What is a distributed domain?

A distributed domain is a logical grouping of Trisul nodes that work together as one analytics system. It allows multiple probes spread across locations to be managed and queried as a single unified deployment.

### How does a distributed domain work?

A distributed domain connects one or more probe nodes to a hub node. Each probe collects traffic from its segment. The hub aggregates all data and presents a unified view across all probes.

### Why use a distributed domain?

A distributed domain is used when a network spans multiple physical locations, segments, or data centers. It enables centralized management and visibility across all segments from one interface.

### How does distributed domain relate to multitenancy?

A distributed domain covers one deployment with multiple nodes. Multitenancy adds a layer on top, allowing multiple separate tenants or customers to each have their own isolated context within the same infrastructure.