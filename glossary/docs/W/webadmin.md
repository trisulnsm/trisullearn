---
title: What is Webadmin?
description: Webadmin is the browser-based administration interface in Trisul Network Analytics. It is used to configure nodes, manage users, set up data sources, and control platform settings.
sidebar_label: Webadmin
sidebar_position: 141
slug: /glossary/webadmin
keywords:
  - webadmin
  - Trisul webadmin
  - admin interface
  - network analytics administration
  - configuration interface
  - Trisul configuration
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Webadmin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webadmin is the browser-based administration interface in Trisul Network Analytics. It is used to configure nodes, manage users, set up data sources, and control platform settings."
      }
    },
    {
      "@type": "Question",
      "name": "What can you do in Webadmin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webadmin allows administrators to manage nodes and contexts, configure flow and packet data sources, set retention policies, manage user accounts and roles, and monitor system health."
      }
    },
    {
      "@type": "Question",
      "name": "How is Webadmin different from the main dashboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webadmin is the administration layer used for configuration and management. The main dashboard is the analytics layer used for monitoring, investigation, and reporting. They serve different audiences and purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Who uses Webadmin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webadmin is used by system administrators and platform operators who manage the Trisul deployment. Regular analysts and NOC operators typically work in the main dashboard rather than Webadmin."
      }
    }
  ]
};

# What is Webadmin?

Webadmin is the browser-based administration interface in Trisul Network Analytics. It is used to configure nodes, manage users, set up data sources, and control platform settings.

---

## How Webadmin works

Webadmin provides a separate interface from the main analytics dashboard. Administrators log in to Webadmin to configure the platform rather than to monitor traffic.

From Webadmin, they can add and manage probe and hub nodes, configure flow exporters and packet capture inputs, set data retention policies, and manage user access.

---

## Webadmin in network operations

Webadmin is the starting point for any new Trisul deployment. It is where the system is set up, sources are configured, and users are provisioned.

It is also used for ongoing operations such as changing retention settings, adding new probes, or reviewing system health. Most changes to how the platform behaves start in Webadmin.

---

## Webadmin vs dashboard

| Interface | Purpose |
|---|---|
| Webadmin | Configuration, user management, node setup |
| Dashboard | Traffic monitoring, investigation, reporting |
| Who uses it | System administrators |
| Who uses it | NOC and SOC analysts |

---

## What makes Webadmin work in practice

Access to Webadmin should be restricted to trusted administrators. Because it controls the platform configuration, unrestricted access creates risk.

Changes made in Webadmin take effect on the running system, so it is important to review changes carefully before applying them in production environments.

---

## How Trisul handles Webadmin

Trisul provides Webadmin as a dedicated administration interface separate from the main user-facing dashboard. It is accessible via browser and covers all configuration and management tasks. Full documentation is at https://docs.trisul.org/.

---

## Related terms

- Node
- Context
- Multitenancy
- Role-based access control
- Trisul dashboard

---

## Frequently asked questions

### What is Webadmin?

Webadmin is the browser-based administration interface in Trisul Network Analytics. It is used to configure nodes, manage users, set up data sources, and control platform settings.

### What can you do in Webadmin?

Webadmin allows administrators to manage nodes and contexts, configure flow and packet data sources, set retention policies, manage user accounts and roles, and monitor system health.

### How is Webadmin different from the main dashboard?

Webadmin is the administration layer used for configuration and management. The main dashboard is the analytics layer used for monitoring, investigation, and reporting. They serve different audiences and purposes.

### Who uses Webadmin?

Webadmin is used by system administrators and platform operators who manage the Trisul deployment. Regular analysts and NOC operators typically work in the main dashboard rather than Webadmin.