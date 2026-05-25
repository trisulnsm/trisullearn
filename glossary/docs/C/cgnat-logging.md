---
title: What is CGNAT logging?
description: CGNAT logging records the mapping between subscriber private IP addresses and translated public IPv4 addresses and ports assigned by Carrier-Grade NAT systems. These logs help ISPs support subscriber traceability, troubleshooting, compliance, and security investigations.
sidebar_label: CGNAT logging
sidebar_position: 30
slug: /glossary/cgnat-logging
keywords:
  - cgnat logging
  - carrier-grade nat logging
  - lsn logging
  - large-scale nat logging
  - nat session logging
  - ipdr
  - port mapping logging
  - subscriber traceability
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What fields are commonly required in CGNAT logs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common fields include private subscriber IP address, translated public IP address, source and translated ports, protocol, timestamps, destination information, and session metadata required for subscriber traceability."
      }
    },
    {
      "@type": "Question",
      "name": "How long are CGNAT logs retained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention periods vary by jurisdiction, regulatory requirements, and operator policy. ISPs commonly retain CGNAT logs for extended periods to support compliance, auditing, and law-enforcement investigations."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CGNAT logs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT logs are important because multiple subscribers may share a single public IPv4 address. Logging enables operators to trace traffic activity back to a specific subscriber and time period."
      }
    },
    {
      "@type": "Question",
      "name": "What is Port Block Allocation in CGNAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Port Block Allocation assigns groups of ports to subscribers instead of logging every individual port mapping. This reduces logging volume while maintaining subscriber traceability."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul relate to CGNAT logging workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul can assist operational workflows involving CGNAT environments through flow visibility, subscriber-oriented analytics, historical traffic investigation, and traffic correlation capabilities."
      }
    }
  ]
};

# What is CGNAT logging?

**CGNAT logging** records the mapping between subscriber private IP addresses and translated public IPv4 addresses and ports assigned by a Carrier-Grade NAT (CGNAT) system.

Because multiple subscribers may share a single public IPv4 address, operators require logging to identify which subscriber was associated with a public IP address and port at a specific time.

CGNAT logging is commonly used for:
- Subscriber traceability
- Regulatory compliance
- Security investigations
- Abuse handling
- Troubleshooting
- Operational auditing

Trisul can support operational workflows involving CGNAT environments through flow visibility and subscriber-oriented analytics.

---

## How it works

CGNAT systems translate private subscriber addresses into shared public IPv4 addresses using port mappings.

During this process, logging systems record metadata such as:
- Private subscriber IP address
- Public translated IP address
- Port mappings
- Protocol type
- Session timestamps
- Destination information

Typical workflow:

1. **Subscriber connection** → Subscriber traffic reaches the CGNAT platform
2. **Address translation** → Private addresses are translated to shared public IPv4 addresses
3. **Port assignment** → Public ports are allocated for subscriber sessions
4. **Log generation** → Translation and session metadata are recorded
5. **Central collection** → Logs are exported to centralized storage or analytics systems
6. **Operational analysis** → Operators investigate subscriber activity or operational events

Logs are commonly exported using:
- Syslog
- IPFIX
- Vendor-specific telemetry formats

---

## CGNAT logging in network operations

CGNAT logging is critical in ISP and service-provider environments because public IPv4 addresses are shared among many subscribers.

Common operational use cases include:

- **Subscriber traceability**
- **Security investigations**
- **Law-enforcement response workflows**
- **Abuse complaint handling**
- **Connectivity troubleshooting**
- **Compliance reporting**
- **Subscriber session correlation**

Without logging, operators may be unable to associate public IPv4 activity with a specific subscriber.

---

## Common CGNAT log fields

| Field | Description |
|---|---|
| Private IP address | Subscriber-side address |
| Public IP address | Translated shared IPv4 address |
| Private port | Subscriber source port |
| Public port | Translated public port |
| Protocol | TCP, UDP, ICMP, etc. |
| Timestamp | Session timing information |
| Destination IP | External communication target |
| Session metadata | Additional NAT or subscriber details |

The exact fields depend on vendor implementation, logging format, and regulatory requirements.

---

## CGNAT logging vs IPDR

| Dimension | CGNAT logging | IPDR |
|---|---|---|
| Primary purpose | NAT translation traceability | Subscriber and usage reporting |
| Main focus | IP and port mappings | Session and usage records |
| Typical use | Subscriber identification | Compliance and usage analytics |
| Common transport | Syslog, IPFIX | IPFIX and structured records |
| Operational scope | Address translation tracking | Broader subscriber activity reporting |

While related, CGNAT logs and IPDR records serve different operational purposes.

---

## What is Port Block Allocation (PBA)?

**Port Block Allocation (PBA)** assigns ranges of ports to subscribers instead of dynamically logging every individual translation event.

Benefits include:
- Reduced logging volume
- Improved scalability
- Lower storage requirements
- Simplified operational traceability

PBA is commonly used in large-scale CGNAT deployments to reduce operational overhead.

---

## Why CGNAT logging matters

CGNAT logging is operationally important because IPv4 address sharing reduces direct subscriber traceability.

Accurate logging helps operators:
- Identify subscribers associated with network activity
- Investigate abuse reports
- Support security investigations
- Meet regulatory obligations
- Troubleshoot connectivity issues

Retention requirements and storage strategies vary depending on jurisdiction and operational policy.

---

## How Trisul handles CGNAT-related analytics

Trisul is primarily a network traffic analytics platform rather than a dedicated CGNAT logging system.

However, Trisul can support operational workflows involving CGNAT environments through:

- **Flow-based traffic visibility** using NetFlow, IPFIX, sFlow, and related telemetry
- **Subscriber-oriented traffic analysis**
- **Historical traffic investigation**
- **Flow correlation workflows**
- **Aggregate Flows** for usage and traffic summarization
- **Explore Flows** for investigation and drill-down analysis
- **Operational visibility into shared-address environments**

These capabilities help operators investigate traffic behavior, correlate usage patterns, and analyze activity within CGNAT-enabled service-provider environments.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-network-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring

---

## Related terms

- [IPDR](/glossary/ipdr)
- [DoT compliance](/glossary/dot-compliance)
- [CGNAT](/glossary/cgnat)
- [NAT](/glossary/nat)
- [Flow monitoring](/glossary/flow-monitoring)
- [Subscriber analytics](/glossary/subscriber-analytics)

---

## Frequently asked questions

### What fields are commonly required in CGNAT logs?

Common fields include private subscriber IP address, translated public IP address, source and translated ports, protocol, timestamps, destination information, and session metadata required for subscriber traceability.

### How long are CGNAT logs retained?

Retention periods vary by jurisdiction, regulatory requirements, and operator policy. ISPs commonly retain CGNAT logs for extended periods to support compliance, auditing, and law-enforcement investigations.

### Why are CGNAT logs important?

CGNAT logs are important because multiple subscribers may share a single public IPv4 address. Logging enables operators to trace traffic activity back to a specific subscriber and time period.

### What is Port Block Allocation in CGNAT?

Port Block Allocation assigns groups of ports to subscribers instead of logging every individual port mapping. This reduces logging volume while maintaining subscriber traceability.

### How does Trisul relate to CGNAT logging workflows?

Trisul can assist operational workflows involving CGNAT environments through flow visibility, subscriber-oriented analytics, historical traffic investigation, and traffic correlation capabilities.