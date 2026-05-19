---
title: What is DoT Compliance?
description: DoT Compliance is adherence to India's Department of Telecommunications regulations for Internet Service Providers, including the 2021 mandate to maintain Internet Protocol Detail Record (IPDR) logs for two years for lawful interception and audit.
sidebar_label: DoT Compliance
sidebar_position: 22
slug: /glossary/dot-compliance
keywords:
  - dot compliance
  - department of telecommunications compliance
  - ISP compliance India
  - IPDR compliance
  - lawful interception India
  - TRAI compliance
  - data retention India
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the DoT IPDR mandate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2021, the Department of Telecommunications mandated all Indian ISP licensees to maintain Internet Protocol Detail Record (IPDR) logs for two years. The mandate was issued vide DoT letter no 8520-01/98-LR/Vol-IX Pt. I dated 16.11.2021. Failure to produce IPDR logs when requested results in stiff penalties. IPDR logs capture flow parameters including source and destination IP addresses, ports, timestamps, NAT events, and user IDs from AAA servers."
      }
    },
    {
      "@type": "Question",
      "name": "What data elements are required for IPDR compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required fields include start timestamp of the flow, end timestamp, source IPv4 or IPv6 address, source port, destination port, translated source address, translated source port, user ID from AAA, router IP reporting the flow, and source MAC address of the device. These fields are sufficient to meet DoT/TRAI compliance requirements and enable Law Enforcement Agencies to track dynamic IP addresses."
      }
    },
    {
      "@type": "Question",
      "name": "Why was IPDR compliance mandated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPDR compliance was mandated because ISPs use dynamic IP addresses and Network Address Translation (NAT) to conserve IP address space. Without IPDR logs, Law Enforcement Agencies could not track which subscriber used a dynamic IP at a given time, making it impossible to investigate cases and gather electronic evidence. IPDR logs enable LEAs to prosecute cases under the Indian Evidence Act meeting standards of electronic evidence."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow monitoring support DoT compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring captures network flow parameters from routers, switches, firewalls, NAT devices, and AAA servers. By correlating flow records, NAT events, and AAA events, a complete log of flow activities is stored meeting IPDR requirements. Advanced flow monitoring platforms provide real-time analysis, deduplication, and compression techniques for efficient storage and fast query response time, enabling cost-efficient compliance solutions."
      }
    }
  ]
};

# What is DoT Compliance?

DoT Compliance is adherence to India's Department of Telecommunications regulations for Internet Service Providers. The core requirement is the 2021 mandate that all ISP licensees maintain Internet Protocol Detail Record (IPDR) logs for two years. IPDR logs capture flow parameters including source and destination IP addresses, ports, timestamps, NAT events, and user IDs. Failure to produce IPDR logs when requested results in stiff penalties. Flow monitoring platforms that capture and store these fields enable ISPs to meet DoT/TRAI compliance requirements.

---

## What DoT Compliance requires

The DoT IPDR mandate requires ISPs to continuously capture network flow parameters from routers, switches, firewalls, NAT devices, and AAA servers. Required fields include start and end timestamps, source and destination IPv4 or IPv6 addresses, source and destination ports, translated source address and port, user ID from AAA, router IP reporting the flow, and source MAC address of the device.

IPDR logs correlate flow records, NAT events, and AAA events to create a complete log of flow activities. This enables Law Enforcement Agencies to track dynamic IP addresses and prosecute cases under the Indian Evidence Act meeting standards of electronic evidence.

---

## DoT Compliance in network operations

ISP operations teams use flow monitoring platforms to capture and store IPDR-compliant logs. The system must handle extremely high volumes of flow events efficiently, deduplicate repeated logs, and compress data to minimize storage requirements. Query response time must be fast when LEAs request logs for investigations.

Security teams use IPDR logs for audit and compliance reporting. The logs demonstrate that the ISP meets regulatory requirements and can produce electronic evidence when requested by authorized agencies.

---

## IPDR vs flow monitoring

| Dimension | IPDR logging | Flow monitoring |
|---|---|---|
| Primary purpose | Regulatory compliance and lawful interception | Network operations and security analytics |
| Data scope | Limited set required for DoT/TRAI compliance | Full flow metadata for analysis |
| Retention | 2 years mandated by DoT | Varies by deployment, typically 30-90 days |
| Query access | LEAs and auditors | NOC and SOC teams |
| Best fit | Compliance and audit | Detection, trending, scoping |

IPDR logging is a subset of flow monitoring focused on compliance. Full flow monitoring provides broader analytics for network operations and security.

---

## How Trisul handles DoT Compliance

Trisul provides an IPDR Solution for ISPs enabling DoT/TRAI compliance. It captures network flow parameters from routers, switches, firewalls, NAT devices, and AAA servers. The system correlates flow records, NAT events, and AAA events to create complete IPDR logs stored in a secured server.

Trisul IPDR Solution offers real-time analysis, deduplication, and compression techniques ensuring efficient storage, fast query response time, and cost-efficient compliance. The required fields—start timestamp, end timestamp, source and destination IP addresses and ports, translated addresses and ports, user ID from AAA, router IP, and source MAC address—are captured and stored for 2 years to meet DoT mandate requirements. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is IPDR?](/glossary/ipdr)
- [What is lawful interception?](/glossary/lawful-interception)
- [What is flow data?](/glossary/flow-data)
- [What is TRAI compliance?](/glossary/trai-compliance)
- [What is NAT?](/glossary/nat)

---

## Frequently asked questions

### What is the DoT IPDR mandate?

In 2021, the Department of Telecommunications mandated all Indian ISP licensees to maintain Internet Protocol Detail Record (IPDR) logs for two years. The mandate was issued vide DoT letter no 8520-01/98-LR/Vol-IX Pt. I dated 16.11.2021. Failure to produce IPDR logs when requested results in stiff penalties. IPDR logs capture flow parameters including source and destination IP addresses, ports, timestamps, NAT events, and user IDs from AAA servers.

### What data elements are required for IPDR compliance?

Required fields include start timestamp of the flow, end timestamp, source IPv4 or IPv6 address, source port, destination port, translated source address, translated source port, user ID from AAA, router IP reporting the flow, and source MAC address of the device. These fields are sufficient to meet DoT/TRAI compliance requirements and enable Law Enforcement Agencies to track dynamic IP addresses.

### Why was IPDR compliance mandated?

IPDR compliance was mandated because ISPs use dynamic IP addresses and Network Address Translation (NAT) to conserve IP address space. Without IPDR logs, Law Enforcement Agencies could not track which subscriber used a dynamic IP at a given time, making it impossible to investigate cases and gather electronic evidence. IPDR logs enable LEAs to prosecute cases under the Indian Evidence Act meeting standards of electronic evidence.

### How does flow monitoring support DoT compliance?

Flow monitoring captures network flow parameters from routers, switches, firewalls, NAT devices, and AAA servers. By correlating flow records, NAT events, and AAA events, a complete log of flow activities is stored meeting IPDR requirements. Advanced flow monitoring platforms provide real-time analysis, deduplication, and compression techniques for efficient storage and fast query response time, enabling cost-efficient compliance solutions.