---
title: What is a counter group?
description: A counter group is a named collection of traffic meters in Trisul that tracks a specific dimension of network traffic, such as hosts, applications, or protocols, by accumulating byte, packet, and flow counts per key over time.
sidebar_label: Counter groups
sidebar_position: 26
slug: /glossary/counter-groups
keywords:
  - counter groups
  - trisul counter groups
  - traffic metering
  - custom counter groups
  - network traffic counters
  - flow metrics
  - top-k analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What built-in counter groups does Trisul provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul ships with 40 to 50 built-in counter groups covering hosts, applications, protocols, interfaces, countries, ASNs, VLANs, and more. Each group tracks byte, packet, and flow counts per key. Built-in groups feed Top-K dashboards, trending reports, and threshold alerts without any configuration."
      }
    },
    {
      "@type": "Question",
      "name": "What types of custom counter groups can be created?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports five types: Filtered (meter a subset of a parent group by applying a filter, such as Web Hosts counting only HTTP and HTTPS traffic), Keyset (group keys into named sets, such as VoIP, Web, and Email ports), Stat Based (count only keys whose metric values exceed a threshold, such as Scanners where Security Alerts is more than 0), Rule Based (arbitrary rules matching business needs, such as CCTV Cameras defined by port and subnet), and Cross Keys (cross product of two or three groups, such as Internal Hosts by Country by External Hosts)."
      }
    },
    {
      "@type": "Question",
      "name": "What is cardinality counting in a counter group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cardinality counting tracks unique values of one dimension per key in another. For example, adding a Unique Apps meter to the Hosts counter group tracks how many distinct applications each host uses. It is not a separate counter group but an additional meter added to any existing group."
      }
    },
    {
      "@type": "Question",
      "name": "How do counter groups relate to Top-K analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every counter group feeds Top-K analytics. Trisul continuously ranks keys within each group by each meter, so Top-K reports for any group are available in real time without recomputation. Custom counter groups created via configuration or LUA appear in Top-K views alongside built-in groups."
      }
    }
  ]
};

# What is a counter group?

A counter group is a named collection of traffic meters that tracks one dimension of network traffic, accumulating byte, packet, and flow counts per key over time. Trisul ships with 40 to 50 built-in counter groups covering hosts, applications, protocols, interfaces, countries, and ASNs. Custom counter groups extend this by applying filters, key groupings, statistical conditions, business rules, or cross-products of existing groups.

---

## How it works

Each counter group has a set of keys and one or more meters. For the Hosts group, each key is an IP address and meters track bytes in, bytes out, and flows. Trisul accumulates these counters continuously and feeds them into Top-K rankings, trending charts, and threshold alerts. Custom groups are built on top of existing ones without duplicating the underlying data.

---

## In network operations

- **NOC:** Use Keyset groups to roll up ports into named services like VoIP, Web, and Email for capacity planning dashboards.
- **SOC:** Use Stat Based groups to create a Scanners group that only surfaces hosts with non-zero security alert counts.
- **ISP:** Use Cross Keys groups to meter Internal Hosts by Country by External Hosts for peering and traffic engineering analysis.

---

## Custom counter group types

| Type | What it does | Example |
|---|---|---|
| Filtered | Meters a subset of a parent group | Web Hosts: only HTTP and HTTPS traffic |
| Keyset | Groups keys into named sets | Apps grouped as VoIP, Web, Email |
| Stat Based | Counts keys exceeding a metric threshold | Scanners: hosts with Security Alerts > 0 |
| Rule Based | Arbitrary rules by port, subnet, or field | CCTV Cameras: port 80 AND subnet 10.2.2.0/24 |
| Cross Keys | Cross product of two or three groups | Internal Hosts X Country X External Hosts |

---

## How Trisul handles it

Trisul ships with 40 to 50 built-in counter groups and supports all five custom types through the Admin panel and LUA API. Custom groups appear in the same Top-K dashboards, trending charts, and alerts as built-in groups. Full documentation is at https://docs.trisul.org/docs/ag/context/custom_countergroup/.

---

## Related terms

- [What is Top-K analytics?](/glossary/top-k-analytics)
- [What is custom flow analytics?](/glossary/custom-flow-analytics)
- [What is flow tagger?](/glossary/flow-tagger)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is flow analyzer?](/glossary/flow-analyzer)

---

## Frequently asked questions

### What built-in counter groups does Trisul provide?

Trisul ships with 40 to 50 built-in counter groups covering hosts, applications, protocols, interfaces, countries, ASNs, VLANs, and more. Each group tracks byte, packet, and flow counts per key. Built-in groups feed Top-K dashboards, trending reports, and threshold alerts without any configuration.

### What types of custom counter groups can be created?

Trisul supports five types: Filtered (meter a subset by filter), Keyset (group keys into named sets), Stat Based (count keys exceeding a metric threshold), Rule Based (arbitrary rules by port, subnet, or field), and Cross Keys (cross product of two or three groups). Each type is built on top of an existing parent group without duplicating underlying data.

### What is cardinality counting in a counter group?

Cardinality counting tracks unique values of one dimension per key in another. Adding a Unique Apps meter to the Hosts group tracks how many distinct applications each host uses. It is an additional meter on any existing group, not a separate group type.

### How do counter groups relate to Top-K analytics?

Every counter group feeds Top-K analytics. Trisul continuously ranks keys within each group by each meter, so Top-K reports are available in real time without recomputation. Custom counter groups appear in Top-K views alongside built-in groups.