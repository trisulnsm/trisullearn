---
title: What is multi-tenant network monitoring?
description: Multi-tenant network monitoring provides isolated visibility for multiple tenants sharing the same network infrastructure. It enables separate dashboards, reports, and alerts for each tenant while monitoring shared infrastructure centrally.
sidebar_label: Multi-tenant network monitoring
sidebar_position: 65
slug: /glossary/multi-tenant-network-monitoring
keywords:
  - multi-tenant monitoring
  - tenant isolation
  - network segmentation
  - cloud monitoring
  - MSP monitoring
  - data center monitoring
  - shared infrastructure
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is multi-tenant network monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-tenant network monitoring provides isolated visibility for multiple tenants sharing the same network infrastructure. It enables separate dashboards, reports, and alerts for each tenant while monitoring shared infrastructure centrally. Trisul is a distributed monitoring system that can be deployed for multi-tenant environments."
      }
    },
    {
      "@type": "Question",
      "name": "Why is multi-tenant monitoring important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-tenant monitoring is critical for cloud providers, MSPs, and data centers serving multiple customers. Each tenant needs isolated visibility into their traffic without seeing other tenants data. Central monitoring tracks shared infrastructure utilization across all tenants."
      }
    },
    {
      "@type": "Question",
      "name": "How does multi-tenant monitoring work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-tenant monitoring uses network segmentation with VLANs, VRFs, or tenant IDs to separate traffic. Flow data is tagged with tenant identifiers. Dashboards and reports filter by tenant ID to provide isolated visibility. Shared infrastructure is monitored centrally with tenant breakdowns."
      }
    },
    {
      "@type": "Question",
      "name": "What are the use cases for multi-tenant monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use cases include cloud service providers monitoring customer traffic, MSPs managing multiple customer networks, data centers tracking tenant utilization for billing, and enterprise segmentation monitoring different departments or business units as separate tenants."
      }
    }
  ]
};

# What is multi-tenant network monitoring?

**Multi‑tenant network monitoring** provides **isolated visibility for multiple tenants** who share the same network infrastructure. It enables **separate dashboards, reports, and alerts for each tenant** while **monitoring shared infrastructure centrally**. Trisul is a **distributed monitoring system** that can be deployed for multi‑tenant environments.

---

## How multi-tenant monitoring works

Multi‑tenant monitoring uses **network segmentation** (VLANs, VRFs, or tenant IDs) to separate traffic. **Flow data is tagged with tenant identifiers**, and **dashboards and reports filter by tenant ID** to give each tenant its own view. **Shared infrastructure is monitored centrally**, with utilization broken down by tenant.

In a **probe‑and‑hub architecture**:

- **Trisul‑probe** instances capture traffic near segments and tag it with tenant context.  
- **Trisul‑hub** aggregates data from multiple probes and delivers dashboards, search, and analytics for all tenants.

---

## Multi-tenant monitoring in network operations

Cloud providers use multi‑tenant monitoring to:

- Track **customer traffic and usage** for billing and SLA reports.  
- Ensure each tenant only sees its own data, while operators see **shared‑link utilization** and **capacity trends**.

MSPs and large data centers use it to:

- Manage **many customer networks or tenant segments** from a single platform.  
- Identify which tenants are driving **link congestion or policy violations**.

---

## Multi-tenant architecture

| Component | Function |
|----------|----------|
| Tenant ID | Identifies traffic belonging to each tenant |
| VLAN / VRF | Network segmentation constructs for tenant isolation |
| Probe | Captures traffic near the network segment and tags it |
| Hub | Aggregates data from multiple probes and provides dashboards |
| Dashboard | Per‑tenant filtered views for isolated visibility |

---

## What makes multi-tenant monitoring work in practice

- **Tenant isolation** must be enforced at every layer: tagging, query filtering, dashboards, and access control.  
- **Shared‑infrastructure dashboards** must show utilization **by tenant** so that operators can plan capacity and enforce fair usage.

---

## How Trisul handles multi-tenant monitoring

Trisul uses a **distributed probe‑hub model**. Each probe exports tenant‑tagged flow data to a hub. Trisul can apply **context and profile configuration** so that users only see their own tenant data in dashboards and reports.

For topology and configuration details, see the Trisul documentation at [https://docs.trisul.org/docs/ag/install/](https://docs.trisul.org/docs/ag/install/).

---

## Related terms

- [What is network segmentation?](/docs/glossary/network-segmentation)  
- [What is VLAN?](/docs/glossary/vlan)  
- [What is VRF?](/docs/glossary/vrf)  
- [What is cloud monitoring?](/docs/glossary/cloud-monitoring)  
- [What is MSP?](/docs/glossary/msp)  

---

## Frequently asked questions

### What is multi-tenant network monitoring?

Multi‑tenant network monitoring provides isolated visibility for multiple tenants sharing the same network infrastructure. It enables separate dashboards, reports, and alerts for each tenant while monitoring shared infrastructure centrally. Trisul is a distributed monitoring system that can be deployed for multi‑tenant environments.

### Why is multi-tenant monitoring important?

Multi‑tenant monitoring is critical for cloud providers, MSPs, and data centers serving multiple customers. Each tenant needs isolated visibility into their traffic without seeing other tenants’ data. Central monitoring tracks shared infrastructure utilization across all tenants.

### How does multi-tenant monitoring work?

Multi‑tenant monitoring uses network segmentation with VLANs, VRFs, or tenant IDs to separate traffic. Flow data is tagged with tenant identifiers. Dashboards and reports filter by tenant ID to provide isolated visibility. Shared infrastructure is monitored centrally with tenant breakdowns.

### What are the use cases for multi-tenant monitoring?

Use cases include cloud service providers monitoring customer traffic, MSPs managing multiple customer networks, data centers tracking tenant utilization for billing, and enterprise segmentation monitoring different departments or business units as separate tenants.