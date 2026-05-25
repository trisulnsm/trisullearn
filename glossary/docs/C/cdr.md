---
title: What is a CDR?
description: A CDR (Call Detail Record) is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information. CDRs are widely used in telecom systems for billing, reporting, auditing, and operational analytics.
sidebar_label: CDR
sidebar_position: 183
slug: /glossary/cdr
keywords:
  - CDR
  - call detail record
  - telecom record
  - session log
  - billing record
  - usage record
  - telecom analytics
  - subscriber usage
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a CDR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CDR (Call Detail Record) is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information."
      }
    },
    {
      "@type": "Question",
      "name": "What does a CDR contain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CDR typically contains caller and callee identifiers, timestamps, duration, routing information, service type, and usage details. The exact fields depend on the telecom platform and communication service."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CDRs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CDRs are important because they provide structured communication records used for billing, auditing, troubleshooting, subscriber analytics, operational reporting, and compliance workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How are CDRs used in analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CDRs are used to analyze subscriber behavior, communication patterns, service utilization, routing activity, and usage trends across telecom and service-provider environments."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul relate to CDR-style analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul can analyze session-oriented and flow-oriented communication metadata for traffic visibility, usage analysis, subscriber-oriented workflows, and operational analytics."
      }
    }
  ]
};

# What is a CDR?

A **CDR (Call Detail Record)** is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing information, and usage details.

CDRs are widely used in:
- Telecom networks
- VoIP systems
- Mobile carrier environments
- Subscriber services
- Billing and reporting systems

They are commonly used for:
- Billing
- Usage tracking
- Operational reporting
- Auditing
- Subscriber analytics
- Compliance workflows

Trisul can analyze session-oriented and communication-related metadata for operational visibility and usage-oriented analytics workflows.

---

## How a CDR works

A CDR is generated whenever a communication event or session occurs.

Depending on the service type, the record may describe:
- Voice calls
- VoIP sessions
- Messaging activity
- Subscriber sessions
- Data-service usage
- Multimedia communications

Typical workflow:

1. **Session initiation** → A communication event begins
2. **Metadata collection** → Session attributes are recorded
3. **Session completion** → Duration and usage metrics are finalized
4. **Record generation** → The system creates a structured CDR
5. **Storage and processing** → Records are used for billing, reporting, or analytics
6. **Operational analysis** → Operators analyze usage patterns and service behavior

CDRs typically contain metadata about communications rather than the communication content itself.

---

## CDRs in network operations

CDRs are important in telecom and service-provider environments because they provide structured operational visibility into communication activity.

Common operational use cases include:

- **Subscriber billing**
- **Usage accounting**
- **Service auditing**
- **Fraud investigation**
- **Subscriber behavior analysis**
- **Regulatory and compliance reporting**
- **Operational troubleshooting**

CDRs also help operators understand service demand, subscriber trends, and communication behavior over time.

---

## Common CDR fields

| Field | Meaning |
|---|---|
| Source | Session initiator or calling party |
| Destination | Receiving party or destination |
| Start time | When the session began |
| Duration | Length of the communication |
| Usage | Amount of service consumed |
| Service type | Voice, messaging, data, or multimedia |
| Routing information | Path or gateway metadata |
| Session status | Successful, failed, dropped, etc. |

The exact fields vary depending on the telecom platform, service type, and vendor implementation.

---

## Why CDRs are useful

CDRs provide structured and machine-readable communication metadata that is easy to process programmatically.

Benefits include:
- Consistent reporting formats
- Simplified billing workflows
- Historical usage visibility
- Subscriber activity analysis
- Easier operational auditing
- Automated analytics and reporting

Their standardized structure makes large-scale processing and aggregation practical in telecom environments.

---

## CDRs vs flow records

| Dimension | CDR | Flow record |
|---|---|---|
| Primary focus | Communication sessions | Network traffic flows |
| Typical environment | Telecom and subscriber systems | IP network monitoring |
| Common use | Billing and subscriber analytics | Traffic visibility and flow analysis |
| Data scope | Session metadata | Packet and traffic metadata |
| Operational focus | Usage accounting and services | Network behavior and utilization |

While both describe communication activity, CDRs are generally subscriber- or session-oriented, whereas flow records focus on network traffic visibility.

---

## How Trisul handles CDR-style analytics

Trisul is primarily a network traffic analytics platform rather than a telecom billing or CDR-generation system.

However, Trisul can support analysis workflows involving:
- Session-oriented metadata
- Subscriber-related visibility
- Usage-oriented analytics
- Historical traffic investigation
- Communication-pattern analysis

Relevant capabilities include:

- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Subscriber-oriented traffic visibility**
- **Historical traffic trending**
- **Aggregate Flows** for summarizing communication activity
- **Explore Flows** for investigation and drill-down analysis
- **Usage-oriented reporting workflows**

These capabilities help operators analyze communication behavior, traffic trends, and usage-related activity in service-provider and operational environments.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-network-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring

---

## Related terms

- [IPDR](/glossary/ipdr)
- [OSS/BSS](/glossary/oss-bss)
- [Subscriber billing](/glossary/subscriber-billing)
- [Session logs](/glossary/session-logs)
- [Telecom reporting](/glossary/telecom-reporting)
- [Flow monitoring](/glossary/flow-monitoring)
- [Subscriber analytics](/glossary/subscriber-analytics)

---

## Frequently asked questions

### What is a CDR?

A CDR (Call Detail Record) is a structured log that captures metadata about a communication session such as participants, timestamps, duration, routing, and usage information.

### What does a CDR contain?

A CDR typically contains caller and callee identifiers, timestamps, duration, routing information, service type, and usage details. The exact fields depend on the telecom platform and communication service.

### Why are CDRs important?

CDRs are important because they provide structured communication records used for billing, auditing, troubleshooting, subscriber analytics, operational reporting, and compliance workflows.

### How are CDRs used in analytics?

CDRs are used to analyze subscriber behavior, communication patterns, service utilization, routing activity, and usage trends across telecom and service-provider environments.

### How does Trisul relate to CDR-style analytics?

Trisul can analyze session-oriented and flow-oriented communication metadata for traffic visibility, usage analysis, subscriber-oriented workflows, and operational analytics.