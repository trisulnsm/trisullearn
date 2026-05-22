---
title: What is Badfellas in Trisul?
description: Badfellas is a Trisul feature that manages Host Monitor allow-lists and deny-lists for long-tail hosts monitoring. It automatically updates which hosts are monitored as top talkers and which are excluded from monitoring in Trisul 3.6 and later.
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
  "description": "Badfellas is a Trisul feature that manages Host Monitor allow-lists and deny-lists for long-tail hosts monitoring. It automatically updates which hosts are monitored as top talkers and which are excluded from monitoring in Trisul 3.6 and later.",
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

**Badfellas** is a Trisul feature that manages **Host Monitor allow-lists** and **deny-lists** for long-tail hosts monitoring. It automatically updates which hosts are monitored as top talkers and which are excluded from monitoring. The feature was introduced in **Trisul 3.6** with Long Tail Hosts monitoring.

---

## How it works

Badfellas updates allow-lists and deny-lists automatically based on traffic patterns. The host monitor uses these lists to decide which hosts to track as top talkers and which hosts to exclude. Updates occur once per day by default but can be configured to weekly refresh intervals.

The Badfellas process:
1. **Traffic analysis** → Trisul analyzes traffic patterns across all hosts
2. **Host ranking** → Hosts are ranked by traffic volume and behavior
3. **List generation** → Allow-list (hosts to monitor) and deny-list (hosts to exclude) are generated
4. **Automatic update** → Lists are refreshed automatically (daily by default, configurable to weekly)
5. **Host Monitor application** → Host Monitor uses the updated lists for ongoing monitoring

---

## In network operations

- **NOC:** Configure Badfellas refresh frequency based on how often host rankings change in the network.
- **SOC:** Use Badfellas allow-lists to ensure suspicious hosts stay in monitoring even if they drop out of top-N rankings.
- **ISP:** Use Badfellas deny-lists to exclude known-benign hosts from monitoring to reduce data volume.

Badfellas helps balance monitoring coverage with resource efficiency by automatically managing which hosts deserve attention.

---

## Long-tail hosts vs top talkers

| Dimension | Top talkers | Long-tail hosts |
|---|---|---|
| Traffic volume | High, ranked by volume | Low, individual small amounts |
| Monitoring | Always tracked via Top-K | Tracked via Badfellas allow-lists |
| Risk | Obvious bandwidth consumers | May hide suspicious activity in the noise |
| Example | Major file transfer, video streaming | Low-and-slow attack, C2 beaconing |

Long-tail hosts are in the 'long tail' of traffic volume—small individual amounts but potentially significant when aggregated or when patterns change.

---

## Badfellas allow-list vs deny-list

| List Type | Purpose | Example hosts |
|---|---|---|
| **Allow-list** | Hosts to monitor even if not top talkers | Suspicious IPs, critical servers, known threats |
| **Deny-list** | Hosts to exclude from monitoring | NAT gateways, backup servers, known-benign bulk transfer hosts |

---

## Why is it called Badfellas?

The name is Trisul's internal colloquialism for hosts that are problematic or suspicious. **'Badfellas'** refers to hosts that appear in the long tail of traffic but are not top talkers—hosts that may be worth monitoring even if they don't show up in the standard top-N rankings.

These are the hosts that might be doing malicious activity quietly (low-and-slow attacks, command-and-control beaconing) rather than obvious high-volume traffic.

---

## How Trisul handles Badfellas

Badfellas is built into **Trisul 3.6 and later** as part of the **Long Tail Hosts monitoring** feature. It manages Host Monitor allow-lists and deny-lists with automatic daily updates by default.

Key Badfellas capabilities in Trisul:
- **Automatic list management**: No manual intervention required to update allow/deny lists
- **Configurable refresh frequency**: Default daily updates, configurable to weekly based on network stability
- **Integration with Host Monitor**: Seamlessly integrates with Trisul's Host Monitor for continuous monitoring
- **Long-tail visibility**: Enables monitoring of hosts that would otherwise be missed by top-N monitoring alone
- **Security use cases**: Helps detect low-and-slow attacks, C2 communication, and other threats hiding in the long tail
- **Resource optimization**: Reduces monitoring overhead by excluding known-benign hosts via deny-lists

Configuration for refresh frequency is documented in the Trisul Host Monitor guide.

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

Badfellas manages Host Monitor allow-lists and deny-lists for long-tail hosts monitoring in Trisul 3.6 and later. It automatically updates the lists of hosts that are monitored as top talkers and hosts that are excluded from monitoring. The list updates once per day by default, but can be configured to update once per week.

### Why is it called Badfellas?

The name is Trisul's internal colloquialism for hosts that are problematic or suspicious. 'Badfellas' refers to hosts that appear in the long tail of traffic but are not top talkers—hosts that may be worth monitoring even if they don't show up in the standard top-N rankings.

### How often does Badfellas update the lists?

Badfellas updates the allow-list and deny-list automatically once per day by default. The update frequency can be changed to once per week by following instructions in the Trisul documentation for configuring Badfellas refresh intervals.

### What is long-tail hosts monitoring?

Long-tail hosts monitoring tracks hosts that are not top talkers but may still be worth monitoring for security or operational reasons. These hosts are in the 'long tail' of traffic volume—small individual amounts but potentially significant when aggregated or when patterns change.

### What versions of Trisul support Badfellas?

Badfellas is available in **Trisul 3.6 and later**. It was introduced as part of the Long Tail Hosts monitoring feature in that version.

### How does Badfellas help with security monitoring?

Badfellas helps with security monitoring by ensuring suspicious hosts stay in the allow-list even if they drop out of top-N rankings. This enables detection of low-and-slow attacks, command-and-control beaconing, and other threats that hide in the long tail of traffic rather than generating high-volume traffic.