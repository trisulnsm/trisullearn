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

Multi-tenant network monitoring provides isolated visibility for multiple tenants sharing the same network infrastructure. It enables separate dashboards, reports, and alerts for each tenant while monitoring shared infrastructure centrally. Trisul is a distributed monitoring system that can be deployed for multi-tenant environments.

---

## How multi-tenant monitoring works

Multi-tenant monitoring uses network segmentation with VLANs, VRFs, or tenant IDs to separate traffic. Flow data is tagged with tenant identifiers. Dashboards and reports filter by tenant ID to provide isolated visibility. Shared infrastructure is monitored centrally with tenant breakdowns.

Probe and hub architecture supports multi-tenant deployment. Trisul-probe instances capture traffic close to network segments and send data to trisul-hub. The hub receives data from multiple probes and provides dashboards, reports, search, and analytics for all tenants.

---

## Multi-tenant monitoring in network operations

Cloud providers use multi-tenant monitoring to track customer traffic and provide billing reports. Each tenant gets isolated visibility into their traffic without seeing other tenant data. MSPs manage multiple customer networks from a single monitoring platform.

Data centers track tenant utilization for capacity planning and billing. Shared infrastructure monitoring identifies bottlenecks affecting multiple tenants. Tenant-specific alerts notify when individual tenants exceed thresholds.

---

## Multi-tenant architecture

| Component | Function |
|---|---|
| Tenant ID | Identifies traffic belonging to each tenant |
| VLAN/VRF | Network segmentation for tenant isolation |
| Probe | Captures traffic close to network segments |
| Hub | Receives data from probes, provides dashboards |
| Dashboard | Per-tenant isolated visibility |

---

## What makes multi-tenant monitoring work in practice

Tenant isolation must be enforced at every layer. Flow data tagged with tenant ID at the probe ensures data is not mixed. Dashboard filtering by tenant ID prevents cross-tenant visibility. Access control ensures tenants only see their own data.

Shared infrastructure monitoring provides centralized visibility. Bandwidth utilization on shared links is broken down by tenant. When a shared link is congested, identify which tenants contribute most to the load. This enables capacity planning and fair usage enforcement.

---

## How Trisul handles multi-tenant monitoring

Trisul is deployed as trisul-probe instances reporting back to trisul-hub in distributed monitoring architecture. Trisul can be deployed in many types of networks from small branch offices to large ISP and enterprise backbones. Multi-tenant monitoring uses context and profile configuration to isolate tenant data. Login as user to see dashboards and charts. Full documentation is at https://docs.trisul.org/docs/ag/install/.

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

Multi-tenant network monitoring provides isolated visibility for multiple tenants sharing the same network infrastructure. It enables separate dashboards, reports, and alerts for each tenant while monitoring shared infrastructure centrally. Trisul is a distributed monitoring system that can be deployed for multi-tenant environments.

### Why is multi-tenant monitoring important?

Multi-tenant monitoring is critical for cloud providers, MSPs, and data centers serving multiple customers. Each tenant needs isolated visibility into their traffic without seeing other tenants data. Central monitoring tracks shared infrastructure utilization across all tenants.

### How does multi-tenant monitoring work?

Multi-tenant monitoring uses network segmentation with VLANs, VRFs, or tenant IDs to separate traffic. Flow data is tagged with tenant identifiers. Dashboards and reports filter by tenant ID to provide isolated visibility. Shared infrastructure is monitored centrally with tenant breakdowns.

### What are the use cases for multi-tenant monitoring?

Use cases include cloud service providers monitoring customer traffic, MSPs managing multiple customer networks, data centers tracking tenant utilization for billing, and enterprise segmentation monitoring different departments or business units as separate tenants.