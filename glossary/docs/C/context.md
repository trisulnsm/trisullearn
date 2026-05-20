---
title: What is a Trisul context?
description: A Trisul context is an isolated instance of Trisul with its own database, configuration, and processes, sharing only the common webserver, user, and admin framework.
sidebar_label: Context
sidebar_position: 28
slug: /glossary/context
keywords:
  - context
  - trisul context
  - isolated instance
  - distributed domain
  - separate database
  - multitenant analytics
  - webadmin context
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Trisul context isolate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Trisul context has its own database, configuration, and processes. It behaves like a separate Trisul instance for analytics and storage, while still sharing the common webserver, user, and admin framework with other contexts on the same deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Why use multiple contexts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiple contexts let you separate analytics by tenant, environment, business unit, or region without mixing data. Each context keeps its own operational state and data window, which makes delegation and isolation easier in multi-team deployments."
      }
    },
    {
      "@type": "Question",
      "name": "How do you create a context in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contexts are created from the hub node using the trisulctl_hub CLI. The create context command provisions a new context name, after which the info context command can be used to verify its state, version, and initialization status."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a context and a node?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A node is a physical or virtual machine running Trisul services. A context is an isolated analytics domain running on that platform. One node can host multiple contexts, but each context keeps separate data and configuration."
      }
    }
  ]
};

# What is a Trisul context?

A Trisul context is an isolated instance of Trisul with its own database, configuration, and processes. It shares the common webserver, user, and admin framework, but its analytics data and operational state remain separate from other contexts.

---

## How it works

Contexts are created on the hub node and managed with the trisulctl_hub CLI. After creation, each context can be verified with its own state, version, and data window. This lets one Trisul deployment host multiple isolated analytics domains.

---

## In network operations

- **NOC:** Separate contexts keep customer or environment data isolated without requiring separate hardware.
- **SOC:** Different contexts can isolate security data by tenant, region, or business unit.
- **ISP:** Multi-context setups help partition analytics by service, customer group, or operational domain.

---

## Context vs node

| Dimension | Context | Node |
|---|---|---|
| Purpose | Isolated analytics domain | Machine running Trisul services |
| Database | Separate | Shared at the host level |
| Configuration | Separate | Host-level service setup |
| Deployment | Multiple per platform | One physical or virtual server |

---

## How Trisul handles it

Trisul supports multiple contexts per production license, each with its own isolated database and processes. The shared webserver and admin framework make multi-context management practical from a single deployment. Full documentation is at https://docs.trisul.org/docs/ag/domain/contexts/.

---

## Related terms

- [What is a node?](/glossary/node)
- [What is a distributed domain?](/glossary/distributed-domain)
- [What is multitenancy?](/glossary/multitenancy)
- [What is webadmin?](/glossary/webadmin)
- [What is a context menu?](/glossary/context-menu)

---

## Frequently asked questions

### What does a Trisul context isolate?

A Trisul context has its own database, configuration, and processes. It behaves like a separate Trisul instance for analytics and storage, while still sharing the common webserver, user, and admin framework with other contexts on the same deployment.

### Why use multiple contexts?

Multiple contexts let you separate analytics by tenant, environment, business unit, or region without mixing data. Each context keeps its own operational state and data window, which makes delegation and isolation easier in multi-team deployments.

### How do you create a context in Trisul?

Contexts are created from the hub node using the trisulctl_hub CLI. The create context command provisions a new context name, after which the info context command can be used to verify its state, version, and initialization status.

### What is the difference between a context and a node?

A node is a physical or virtual machine running Trisul services. A context is an isolated analytics domain running on that platform. One node can host multiple contexts, but each context keeps separate data and configuration.