---
title: What is a Trisul context?
description: A Trisul context is an isolated analytics domain within a Trisul deployment, with its own database, configuration, and processing state while sharing common administration and web management infrastructure.
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
  - analytics domain
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
        "text": "A Trisul context maintains separate analytics data, configuration, operational state, and processing workflows while sharing common administration and web-management infrastructure with other contexts."
      }
    },
    {
      "@type": "Question",
      "name": "Why use multiple contexts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiple contexts help isolate analytics by tenant, environment, region, customer, or operational domain without requiring separate Trisul deployments."
      }
    },
    {
      "@type": "Question",
      "name": "How do you create a context in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contexts are created and managed from the hub node using Trisul administrative tooling such as trisulctl_hub."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a context and a node?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A node is a physical or virtual system running Trisul services, while a context is an isolated analytics domain operating within a Trisul deployment."
      }
    },
    {
      "@type": "Question",
      "name": "How are contexts used in multi-tenant deployments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contexts can isolate analytics data and operational workflows across customers, business units, environments, or operational teams within the same Trisul deployment."
      }
    }
  ]
};

# What is a Trisul context?

A **Trisul context** is an isolated analytics domain within a Trisul deployment, with its own database, configuration, and processing state while sharing common administration and web-management infrastructure.

Contexts allow a single Trisul deployment to support multiple isolated operational environments without requiring completely separate installations.

Contexts are commonly used to separate:
- Customers
- Business units
- Regions
- Security domains
- Operational environments
- Analytics workloads

Trisul contexts support operational isolation while maintaining centralized administrative management.

---

## How a Trisul context works

Each context behaves as an independent analytics environment with separate operational state and traffic data.

A context typically maintains:
- Separate analytics data
- Independent configuration
- Dedicated processing state
- Separate retention and operational history
- Isolated investigative workflows

Contexts are managed from the Trisul hub infrastructure using administrative tooling.

Typical workflow:

1. **Context creation** → Administrator provisions a new context
2. **Initialization** → Separate analytics state and storage are prepared
3. **Traffic processing** → The context independently processes assigned telemetry and traffic
4. **Operational analysis** → Analysts work within the isolated analytics domain
5. **Administrative management** → Shared management infrastructure controls deployment-wide administration

This architecture allows operational separation without requiring completely independent Trisul platforms.

---

## Contexts in network operations

Contexts are useful in environments requiring operational isolation or multi-tenant analytics.

Common operational use cases include:

- **Managed service providers (MSPs)**: Separate customer analytics environments
- **ISPs**: Isolate operational domains or service groups
- **Enterprise environments**: Separate departments, subsidiaries, or security zones
- **SOC operations**: Isolate security analytics by region or tenant
- **Testing and staging**: Separate lab and production analytics workflows

Contexts help reduce data overlap while simplifying centralized deployment management.

---

## Context vs node

| Dimension | Context | Node |
|---|---|---|
| Purpose | Isolated analytics domain | System running Trisul services |
| Operational scope | Separate analytics and processing state | Infrastructure and service execution |
| Data handling | Isolated analytics data | May host one or more contexts |
| Configuration | Context-specific | Platform and deployment-level |
| Deployment relationship | Multiple contexts can coexist | Physical or virtual infrastructure component |

A single deployment may contain multiple contexts distributed across one or more nodes.

---

## Why contexts are useful

Contexts improve operational flexibility in large or multi-tenant environments.

Benefits include:
- Data isolation
- Simplified multi-tenant analytics
- Operational separation
- Independent workflows
- Flexible organizational boundaries
- Centralized administration

Contexts also allow different teams or operational domains to work independently within the same deployment framework.

---

## How Trisul handles contexts

Trisul supports multi-context deployments for operational separation and analytics isolation.

Relevant capabilities include:

- **Separate analytics domains** within a shared deployment
- **Independent traffic and analytics processing**
- **Context-specific configuration and operational state**
- **Shared administrative and web-management infrastructure**
- **Centralized operational management**
- **Multi-tenant and distributed operational workflows**

Contexts are managed using Trisul administrative tooling such as `trisulctl_hub`.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#managed-security-service-provider
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-network-monitoring

---

## Related terms

- [Node](/glossary/node)
- [Distributed domain](/glossary/distributed-domain)
- [Multitenancy](/glossary/multitenancy)
- [Webadmin](/glossary/webadmin)
- [Context menu](/glossary/context-menu)
- [Hub node](/glossary/hub-node)

---

## Frequently asked questions

### What does a Trisul context isolate?

A Trisul context maintains separate analytics data, configuration, operational state, and processing workflows while sharing common administration and web-management infrastructure with other contexts.

### Why use multiple contexts?

Multiple contexts help isolate analytics by tenant, environment, region, customer, or operational domain without requiring separate Trisul deployments.

### How do you create a context in Trisul?

Contexts are created and managed from the hub node using Trisul administrative tooling such as trisulctl_hub.

### What is the difference between a context and a node?

A node is a physical or virtual system running Trisul services, while a context is an isolated analytics domain operating within a Trisul deployment.

### How are contexts used in multi-tenant deployments?

Contexts can isolate analytics data and operational workflows across customers, business units, environments, or operational teams within the same Trisul deployment.