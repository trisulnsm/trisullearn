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

**Multitenancy** is the ability of a **single analytics platform** to serve **multiple separate tenants or customers** while keeping their data and views isolated. In a multitenant setup, **each tenant sees only their own traffic, dashboards, and alerts**, even though they share the same underlying deployment and infrastructure. This model is essential for **managed service providers, ISPs, and large enterprises** that want to offer or manage network‑analytics services across many customers or divisions without running separate systems for each.

---

## How multitenancy works

In a multitenant analytics platform:

- Each **tenant (or customer)** gets a **separate context**—a logical boundary that defines what data, dashboards, alerts, and user accounts belong to them.  
- **Traffic and metadata** are tagged to the correct tenant at ingestion so that queries and views only return data within that tenant’s context.  
- **Admins and super‑admins** can manage multiple tenants from a central interface, provisioning new tenants, setting quotas, and monitoring platform health, while **tenant users** cannot see another tenant’s data by default.  

This scheme keeps **data, configuration, and access rights logically separated** within a shared deployment.

---

## Multitenancy in network operations

Multitenancy is commonly used by:

- **Managed Service Providers (MSPs)** who deliver **network analytics and monitoring** to multiple clients from a single platform.  
- **ISPs** that offer **analytics or traffic‑visibility packages** to enterprise customers on shared infrastructure.  
- **Large enterprises** with **multiple business units, regions, or divisions** that need independent visibility and reporting while sharing a central analytics stack.  

In these environments, multitenancy **eliminates the need for many standalone deployments**, reducing hardware, licensing, and management overhead.

---

## Single tenant vs multitenant

| Model | Description |
|-------|-------------|
| Single tenant | One analytics deployment per customer or business unit; data is physically or logically isolated by separate systems |
| Multitenant | One deployment serves many customers; each tenant is isolated via contexts and policies within the same platform |
| Benefit | Lower cost and simpler operations by consolidating deployments |
| Requirement | Strict data and access‑control isolation between tenants to prevent leakage |

Multitenancy only makes sense when the platform can enforce **data‑separation guarantees** at the same time as shared resource usage.

---

## What makes multitenancy work in practice

For multitenancy to be secure and usable:

- **Data isolation must be enforced at every layer**: storage, query engine, dashboards, and APIs, so that no tenant can query or view another tenant’s data.  
- **Role‑based access control (RBAC)** must distinguish between **tenant‑level users** (who see only their tenant) and **admin‑level users** (who can manage tenants without automatically reading their data).  
- **Provisioning workflows** should automate **tenant creation, context assignment, and quota enforcement** so that new customers or units can be onboarded quickly and safely.  

When done correctly, multitenancy turns analytics into a **scalable, service‑oriented capability** rather than a one‑off deployment per customer.

---

## How Trisul handles multitenancy

Trisul supports multitenancy through its **context‑based architecture**. Each tenant or customer can be assigned a **separate context**, which:

- Isolates **traffic data, dashboards, and user access** for that tenant.  
- Lets operators keep **one unified deployment** that serves multiple tenants from a single interface.  
- Allows **MSPs and ISPs** to offer **managed analytics** to customers while maintaining strict data separation.  

For configuration examples and best practices, see the Trisul documentation at [https://docs.trisul.org/](https://docs.trisul.org/).

---

## Related terms

- Multitenancy  
- Distributed domain  
- Node  
- Context  
- Role‑based access control  
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