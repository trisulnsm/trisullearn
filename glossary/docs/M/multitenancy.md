---
title: What is multitenancy in network analytics?
description: Multitenancy is the ability of a single analytics platform to serve multiple separate tenants or customers while keeping their data isolated. Each tenant sees only their own traffic and analytics.
sidebar_label: Multitenancy
sidebar_position: 140
slug: /glossary/multitenancy
keywords:
  - multitenancy
  - multi-tenant analytics
  - tenant isolation
  - shared analytics platform
  - managed service
  - network analytics tenants
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is multitenancy in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy is the ability of a single analytics platform to serve multiple separate tenants or customers while keeping their data isolated. Each tenant sees only their own traffic and analytics."
      }
    },
    {
      "@type": "Question",
      "name": "How does multitenancy work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy works by creating separate contexts for each tenant within the same infrastructure. Traffic, data, dashboards, and access controls are kept isolated per tenant. Administrators manage all tenants from a single platform."
      }
    },
    {
      "@type": "Question",
      "name": "Who uses multitenancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy is used by managed service providers, ISPs offering analytics to enterprise customers, and large organizations with separate business units that need independent visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of multitenancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multitenancy reduces operational overhead by running one platform instead of many. It allows service providers to offer analytics as a service while maintaining strict data isolation between customers."
      }
    }
  ]
};

# What is multitenancy in network analytics?

Multitenancy is the ability of a single analytics platform to serve multiple separate tenants or customers while keeping their data isolated. Each tenant sees only their own traffic and analytics.

---

## How multitenancy works

Each tenant gets a separate context within the platform. Traffic data, dashboards, alerts, and user accounts are scoped to that context. One tenant cannot see another tenant's data.

Administrators manage all tenants from a central interface. They can provision new tenants, set quotas, and monitor overall platform health without breaking tenant isolation.

---

## Multitenancy in network operations

Multitenancy is commonly used by managed service providers and ISPs who deliver analytics to multiple enterprise customers on shared infrastructure. It is also used by large organizations with multiple divisions that need separate visibility.

It removes the need to run a separate analytics platform for each customer. One deployment serves all tenants while keeping each one logically separate.

---

## Single tenant vs multitenant

| Model | Description |
|---|---|
| Single tenant | One deployment per customer |
| Multitenant | One deployment serves many customers |
| Benefit | Lower cost, simpler operations |
| Requirement | Strong data isolation between tenants |

---

## What makes multitenancy work in practice

Data isolation must be enforced at every layer — storage, queries, dashboards, and access control. A mistake in any layer can expose one tenant's data to another.

Role-based access control is essential. Each tenant must have their own users and permissions. Administrators should have oversight without being able to read tenant data by default.

---

## How Trisul handles multitenancy

Trisul supports multitenancy through its context model. Each tenant or customer gets a separate context with isolated data, dashboards, and user access. A single Trisul deployment can serve multiple tenants from one interface. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Distributed domain
- Node
- Context
- Role-based access control
- Managed analytics

---

## Frequently asked questions

### What is multitenancy in network analytics?

Multitenancy is the ability of a single analytics platform to serve multiple separate tenants or customers while keeping their data isolated. Each tenant sees only their own traffic and analytics.

### How does multitenancy work?

Multitenancy works by creating separate contexts for each tenant within the same infrastructure. Traffic, data, dashboards, and access controls are kept isolated per tenant. Administrators manage all tenants from a single platform.

### Who uses multitenancy?

Multitenancy is used by managed service providers, ISPs offering analytics to enterprise customers, and large organizations with separate business units that need independent visibility.

### What are the benefits of multitenancy?

Multitenancy reduces operational overhead by running one platform instead of many. It allows service providers to offer analytics as a service while maintaining strict data isolation between customers.