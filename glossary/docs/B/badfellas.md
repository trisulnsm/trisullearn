---
title: What is Badfellas in Trisul?
description: Badfellas is a Trisul feature used with Long Tail Hosts monitoring to manage Host Monitor allow-lists and deny-lists. It helps retain visibility into low-volume hosts that may otherwise fall outside Top-K monitoring.
sidebar_label: Badfellas
sidebar_position: 38
slug: /glossary/badfellas
keywords:
  - badfellas
  - trisul badfellas
  - host monitor allow-list
  - host monitor deny-list
  - long tail hosts
  - top talkers monitoring
  - host exclusions
  - long tail hosts monitoring
  - host monitor
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Badfellas in Trisul?",
  "description": "Badfellas is a Trisul feature used with Long Tail Hosts monitoring to manage Host Monitor allow-lists and deny-lists. It helps retain visibility into low-volume hosts that may otherwise fall outside Top-K monitoring.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Badfellas (Trisul)",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is Badfellas in Trisul?

**Badfellas** is a Trisul feature associated with **Long Tail Hosts monitoring**. It manages **Host Monitor allow-lists** and **deny-lists** to help retain visibility into selected low-volume hosts that may otherwise fall outside standard Top-K monitoring.

The feature was introduced in **Trisul 3.6** as part of Long Tail Hosts monitoring.

---

## How it works

Badfellas automatically updates allow-lists and deny-lists based on observed traffic behavior and host activity patterns. These lists are used by the Host Monitor to determine which hosts should continue to be tracked even when they are not among the highest-volume traffic generators.

The Badfellas workflow typically includes:

1. **Traffic analysis** → Trisul analyzes traffic activity across monitored hosts
2. **Host selection** → Hosts are evaluated based on traffic behavior and monitoring relevance
3. **List generation** → Allow-lists and deny-lists are updated
4. **Automatic refresh** → Lists are periodically refreshed based on configured intervals
5. **Host Monitor integration** → Updated lists are applied to Long Tail Hosts monitoring

---

## In network operations

- **NOC:** Maintain visibility into operationally important hosts that may not continuously appear in Top-K rankings.
- **SOC:** Retain monitoring coverage for low-volume hosts that may exhibit beaconing or low-and-slow attack behavior.
- **ISP and large networks:** Reduce unnecessary monitoring overhead by excluding predictable high-volume but operationally uninteresting hosts.

Badfellas helps balance monitoring depth and resource efficiency by extending visibility beyond standard top talker analysis.

---

## Long-tail hosts vs top talkers

| Dimension | Top talkers | Long-tail hosts |
|---|---|---|
| Traffic volume | High-volume traffic generators | Lower-volume traffic generators |
| Monitoring model | Typically covered by Top-K analytics | Monitored selectively through Long Tail Hosts monitoring |
| Operational visibility | Easy to identify | May otherwise blend into background traffic |
| Security relevance | High bandwidth consumers | May include beaconing, scanning, or stealth activity |

Long-tail hosts individually generate small amounts of traffic, but collectively may reveal important operational or security patterns.

---

## Badfellas allow-list vs deny-list

| List Type | Purpose | Example hosts |
|---|---|---|
| **Allow-list** | Retain monitoring visibility for selected hosts | Critical servers, suspicious endpoints, investigation targets |
| **Deny-list** | Exclude hosts from extended monitoring | Trusted infrastructure devices, predictable bulk-transfer systems |

---

## Why is it called Badfellas?

“Badfellas” is an internal Trisul colloquial term referring to hosts that may deserve additional monitoring attention despite not appearing in standard Top-K rankings.

These hosts may include systems exhibiting:
- Low-and-slow attack behavior
- Command-and-control beaconing
- Periodic scanning activity
- Intermittent anomalous communication patterns

The feature focuses on improving visibility into hosts hidden within the long tail of network traffic distributions.

---

## How Trisul handles Badfellas

Badfellas is integrated into **Trisul 3.6 and later** as part of the **Long Tail Hosts monitoring** capability.

Key characteristics include:

- **Automatic list management** for Host Monitor tracking
- **Periodic refresh cycles** for allow-list and deny-list maintenance
- **Integration with Host Monitor workflows**
- **Extended visibility beyond Top-K analytics**
- **Support for security monitoring and anomaly investigation**
- **Monitoring optimization** by excluding low-value hosts

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection

---

## Related terms

- [Top-K analytics](/glossary/top-k-analytics)
- [Flow monitoring](/glossary/flow-monitoring)
- [Long tail hosts monitoring](/glossary/long-tail-hosts-monitoring)
- [Host Monitor](/glossary/host-monitor)
- [Top talkers](/glossary/top-talkers)
- [Allow-list](/glossary/allow-list)
- [Deny-list](/glossary/deny-list)
- [Low-and-slow attack](/glossary/low-and-slow-attack)
- [C2 beaconing](/glossary/c2-beaconing)

---

## Frequently asked questions

### What does Badfellas do in Trisul?

Badfellas manages Host Monitor allow-lists and deny-lists used in Long Tail Hosts monitoring. It helps retain monitoring visibility for selected low-volume hosts that may otherwise fall outside standard Top-K monitoring.

### Why is it called Badfellas?

The term refers to hosts that may require monitoring attention despite not generating high traffic volumes. These systems can include hosts involved in stealthy or intermittent activity patterns.

### How often are the lists updated?

Badfellas periodically refreshes allow-lists and deny-lists based on configured monitoring behavior and traffic analysis policies.

### What is long-tail hosts monitoring?

Long Tail Hosts monitoring extends visibility beyond top traffic generators by tracking lower-volume hosts that may still have operational or security relevance.

### What versions of Trisul support Badfellas?

Badfellas is available in **Trisul 3.6 and later** as part of the Long Tail Hosts monitoring feature set.

### How does Badfellas help with security monitoring?

Badfellas improves visibility into low-volume hosts that may exhibit suspicious behaviors such as beaconing, stealth scanning, or low-and-slow attacks that do not appear in conventional Top-K traffic analysis.