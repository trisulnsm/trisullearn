---
title: What is traffic retention?
description: Traffic retention defines how long flow data and packet capture are stored before deletion. It balances storage costs against operational needs for historical analysis, compliance, and forensic investigation.
sidebar_label: Traffic retention
sidebar_position: 116
slug: /glossary/traffic-retention
keywords:
  - traffic retention
  - data retention
  - flow retention
  - pcap retention
  - storage policy
  - archive retention
  - retention period
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is traffic retention?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traffic retention defines how long flow data and packet capture are stored before deletion. It balances storage costs against operational needs for historical analysis, compliance, and forensic investigation. Retention policies determine what data is kept and for how long."
      }
    },
    {
      "@type": "Question",
      "name": "What factors determine retention period?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention period depends on use case, compliance requirements, and storage capacity. Flow data can be retained for weeks to months on the same hardware storing PCAP for hours to days. Full fidelity retention of more than 7 to 14 days requires heavy filtering or purpose-built storage infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How does retention affect operations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention affects forensic investigation capability, compliance, and historical analysis. Short retention limits investigation to recent events. Long retention enables analysis of past incidents but increases storage costs. Balance retention against operational needs."
      }
    },
    {
      "@type": "Question",
      "name": "What are typical retention periods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical retention periods include PCAP for hours to days (full fidelity), flow data for weeks to months, and aggregate statistics for years. Compliance requirements may mandate minimum retention periods. ISP analytics may retain data longer for billing."
      }
    }
  ]
};

# What is traffic retention?

Traffic retention defines how long flow data and packet capture are stored before deletion. It balances storage costs against operational needs for historical analysis, compliance, and forensic investigation. Retention policies determine what data is kept and for how long.

---

## How traffic retention works

Retention policies specify storage duration for different data types. When data exceeds retention period, it is automatically deleted or archived to cheaper storage. Tiered storage moves old data to slower disks while keeping recent data on fast storage.

Flow data retention is longer than PCAP retention because flow data is approximately 1 to 2 percent of PCAP volume. Aggregate statistics can be retained for years with minimal storage.

---

## Traffic retention in network operations

In the NOC, retention determines how far back investigators can look. Short retention limits forensic investigation to recent events. Long retention enables analysis of past incidents but requires more storage.

Compliance teams define minimum retention periods for audit requirements. Some regulations mandate 90 days or longer for network logs. Storage capacity must support compliance retention periods. Security teams use long retention for threat hunting.

---

## Retention comparison

| Data Type | Typical Retention | Storage Footprint |
|---|---|---|
| Full PCAP | Hours to days | Tens of TB per day |
| Flow data | Weeks to months | 1 to 2% of PCAP |
| Aggregate stats | Years | Minimal storage |

---

## What makes traffic retention work in practice

Storage capacity determines achievable retention. Flow data volume depends on network size and flow rate. High-speed networks generate millions of flows per hour. Storage must hold data for the required retention period.

Data lifecycle management automates retention. Automated deletion prevents storage from filling up. Archive policies move old data to cheaper storage extending retention without increasing costs. Automation ensures consistent policy enforcement.

---

## How Trisul handles traffic retention

Trisul supports configurable retention policies for flow data and packet capture. Storage policies let operators define exactly what gets written by protocol, direction, or custom LUA rules. The capture store distributes across multiple disks to extend retention. Flow data is retained without summarization or rollup enabling long-term historical analysis. Traffic retention supports weeks to months of flow data. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is packet capture?](/docs/glossary/packet-capture)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is retention policy?](/docs/glossary/retention-policy)
- [What is long term traffic retention?](/docs/glossary/long-term-traffic-retention)
- [What is archive?](/docs/glossary/archive)

---

## Frequently asked questions

### What is traffic retention?

Traffic retention defines how long flow data and packet capture are stored before deletion. It balances storage costs against operational needs for historical analysis, compliance, and forensic investigation. Retention policies determine what data is kept and for how long.

### What factors determine retention period?

Retention period depends on use case, compliance requirements, and storage capacity. Flow data can be retained for weeks to months on the same hardware storing PCAP for hours to days. Full fidelity retention of more than 7 to 14 days requires heavy filtering or purpose-built storage infrastructure.

### How does retention affect operations?

Retention affects forensic investigation capability, compliance, and historical analysis. Short retention limits investigation to recent events. Long retention enables analysis of past incidents but increases storage costs. Balance retention against operational needs.

### What are typical retention periods?

Typical retention periods include PCAP for hours to days (full fidelity), flow data for weeks to months, and aggregate statistics for years. Compliance requirements may mandate minimum retention periods. ISP analytics may retain data longer for billing.