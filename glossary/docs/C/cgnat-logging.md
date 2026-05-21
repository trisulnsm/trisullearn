---
title: What is CGNAT logging?
description: CGNAT logging records the mapping between private subscriber IP addresses and the public IPv4 addresses and ports assigned by a Carrier-Grade NAT device, enabling ISPs to trace user activity for legal, security, and troubleshooting purposes.
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
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What fields are required in CGNAT logs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required fields include source private IP address, source private port, translated public IP address, translated public port, protocol (TCP, UDP, ICMP), timestamp of session start and end, and destination IP address. These fields enable tracing from a public IP and port back to the subscriber at a specific time."
      }
    },
    {
      "@type": "Question",
      "name": "How long must CGNAT logs be retained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention periods vary by jurisdiction. Most ISPs must store CGNAT logs for 6 months to 2 years. In India, DoT mandates IPDR retention for 2 years for ISPs. Law enforcement may require logs going back many years for investigations, so storage capacity must be planned accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "What is the storage requirement for CGNAT logs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 10,000 users, NAT log storage grows at approximately 0.4MB per second in raw ASCII format, or 346GB per day. With gzip compression (27:1 ratio), this reduces to 13GB per day per 10,000 users. For 2-year retention of 10,000 subscribers, approximately 4.7 terabytes of storage is required."
      }
    },
    {
      "@type": "Question",
      "name": "What is Port Block Allocation (PBA) in CGNAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Port Block Allocation pre-assigns fixed ranges of ports to each subscriber, reducing the volume of logging required. Instead of logging every individual port mapping, the CGNAT device logs which port block was assigned to which subscriber. This makes logging more efficient while maintaining traceability."
      }
    }
  ]
};

# What is CGNAT logging?

CGNAT logging records the mapping between private subscriber IP addresses and the public IPv4 addresses and ports assigned by a Carrier-Grade NAT device. ISPs use CGNAT to share a single public IPv4 among multiple customers, so without logging they cannot trace a public IP back to a specific subscriber. CGNAT logs enable compliance with law enforcement, security investigations, and troubleshooting.

---

## How it works

CGNAT devices log NAT session events including port mapping, session start and end, and protocol type. Logs are sent via Syslog or IPFIX to a central collector or external server with large storage. The collector stores logs with rotation and retention policies set by local requirements.

---

## In network operations

- **NOC:** Use CGNAT logs to diagnose connectivity issues by mapping internal IPs to public IPs and ports.
- **SOC:** Correlate CGNAT logs with security events to trace malicious activity back to the specific subscriber.
- **ISP:** Provide CGNAT logs to law enforcement agencies in response to subpoenas or legal requests.

---

## CGNAT logging vs IPDR

| Dimension | CGNAT logging | IPDR |
|---|---|---|
| Purpose | NAT port mapping traceability | ISP flow record compliance |
| Scope | Internal IP to public IP/port mapping | Full flow parameters including user ID |
| Transport | Syslog or IPFIX | IPFIX |
| Retention | 6 months to 2 years | 2 years mandated in India |

---

## How Trisul handles it

Trisul captures CGNAT logs by collecting Syslog or IPFIX feeds from CGNAT devices and storing them with flow records. Trisul's flow database enables correlation of CGNAT mapping data with broadband session logs and AAA events for complete subscriber traceability. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is IPDR?](/docs/glossary/ipdr)
- [What is DoT Compliance?](/docs/glossary/dot-compliance)
- [What is CGNAT?](/docs/glossary/cgnat)
- [What is NAT?](/docs/glossary/nat)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)

---

## Frequently asked questions

### What fields are required in CGNAT logs?

Required fields include source private IP address, source private port, translated public IP address, translated public port, protocol (TCP, UDP, ICMP), timestamp of session start and end, and destination IP address. These fields enable tracing from a public IP and port back to the subscriber at a specific time.

### How long must CGNAT logs be retained?

Retention periods vary by jurisdiction. Most ISPs must store CGNAT logs for 6 months to 2 years. In India, DoT mandates IPDR retention for 2 years for ISPs. Law enforcement may require logs going back many years for investigations, so storage capacity must be planned accordingly.

### What is the storage requirement for CGNAT logs?

For 10,000 users, NAT log storage grows at approximately 0.4MB per second in raw ASCII format, or 346GB per day. With gzip compression (27:1 ratio), this reduces to 13GB per day per 10,000 users. For 2-year retention of 10,000 subscribers, approximately 4.7 terabytes of storage is required.

### What is Port Block Allocation (PBA) in CGNAT?

Port Block Allocation pre-assigns fixed ranges of ports to each subscriber, reducing the volume of logging required. Instead of logging every individual port mapping, the CGNAT device logs which port block was assigned to which subscriber. This makes logging more efficient while maintaining traceability.