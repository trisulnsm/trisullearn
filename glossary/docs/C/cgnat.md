---
title: What is CGNAT?
description: CGNAT (Carrier-Grade NAT) is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers. It helps ISPs conserve IPv4 address space while continuing to provide Internet connectivity at scale.
sidebar_label: CGNAT
sidebar_position: 145
slug: /glossary/cgnat
keywords:
  - CGNAT
  - carrier grade NAT
  - large scale NAT
  - ISP NAT
  - shared public IP
  - IPv4 exhaustion
  - subscriber attribution
  - NAT translation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is CGNAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT (Carrier-Grade NAT) is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers."
      }
    },
    {
      "@type": "Question",
      "name": "How does CGNAT work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT translates private subscriber addresses into shared public IPv4 addresses using port-based translation. Multiple subscribers can share the same public IP address while remaining distinguishable through port mappings."
      }
    },
    {
      "@type": "Question",
      "name": "Why does CGNAT make analytics more complex?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT makes analytics more complex because many subscribers share the same public IPv4 address. Subscriber attribution requires NAT translation logs and timestamp correlation."
      }
    },
    {
      "@type": "Question",
      "name": "Why are CGNAT logs important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT logs are important because they allow operators to associate public IP addresses and ports with specific subscribers for troubleshooting, abuse handling, compliance, and security investigations."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul relate to CGNAT environments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports operational visibility in CGNAT environments through flow analytics, subscriber-oriented traffic analysis, historical investigation workflows, and traffic correlation capabilities."
      }
    }
  ]
};

# What is CGNAT?

**CGNAT (Carrier-Grade NAT)** is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers.

CGNAT is widely deployed by:
- ISPs
- Mobile carriers
- Broadband providers
- Large service-provider networks

It helps conserve limited IPv4 address space by allowing multiple subscribers to share a smaller pool of public IPv4 addresses.

Trisul supports operational visibility in CGNAT environments through flow analytics and subscriber-oriented traffic analysis workflows.

---

## How CGNAT works

CGNAT systems translate private subscriber addresses into shared public IPv4 addresses using port-based translation mechanisms.

Because many subscribers may share the same public IP address, unique source ports are used to distinguish subscriber sessions.

Typical workflow:

1. **Subscriber traffic generation** → Devices use private IP addressing
2. **Address translation** → CGNAT devices translate private addresses to shared public IPv4 addresses
3. **Port allocation** → Public source ports are assigned for each session
4. **Session tracking** → Translation state is maintained during the communication session
5. **Log generation** → NAT translation metadata may be recorded for traceability
6. **Session expiration** → Port mappings are released after sessions end

CGNAT commonly relies on:
- Port Address Translation (PAT)
- Stateful translation tables
- Large-scale session tracking
- NAT logging systems

---

## Why CGNAT is widely used

CGNAT became common because globally routable IPv4 addresses are limited.

Benefits include:
- Delayed IPv4 exhaustion
- Reduced public IPv4 address consumption
- Large-scale subscriber support
- Continued IPv4 Internet access for growing subscriber bases

CGNAT is often used as a transitional approach while IPv6 adoption continues to expand.

---

## CGNAT in network operations

CGNAT introduces operational and analytical challenges because public IPv4 addresses no longer uniquely identify subscribers.

Common operational considerations include:

- **Subscriber traceability**
- **Security investigations**
- **Abuse handling**
- **Law-enforcement response workflows**
- **Troubleshooting**
- **Compliance and auditing**
- **NAT log retention**

Subscriber attribution typically requires correlation between:
- NAT translation logs
- Timestamps
- Port mappings
- Subscriber-session information

Accurate time synchronization is important for reliable correlation and investigation workflows.

---

## CGNAT vs standard NAT

| Aspect | Standard NAT | CGNAT |
|---|---|---|
| Deployment scope | Home or enterprise edge | ISP or carrier scale |
| Public IP sharing | Limited | Extensive |
| Subscriber scale | Small number of users | Large subscriber populations |
| Logging complexity | Lower | Much higher |
| Operational requirements | Basic translation | Large-scale traceability and logging |

CGNAT operates at significantly larger scale and requires more extensive operational visibility than traditional edge NAT deployments.

---

## Why CGNAT logging matters

Because many subscribers share public IPv4 addresses, NAT translation logs are important for operational traceability.

Logs commonly record:
- Subscriber private IP address
- Public translated IP address
- Source and translated ports
- Protocol type
- Session timestamps

These records help operators:
- Investigate abuse reports
- Troubleshoot subscriber issues
- Correlate network activity
- Support compliance workflows
- Perform subscriber attribution

Retention policies and logging requirements vary depending on operator policy and regulatory obligations.

---

## How Trisul handles CGNAT-related analytics

Trisul is primarily a network traffic analytics platform rather than a dedicated CGNAT gateway or NAT logging appliance.

However, Trisul can support operational workflows in CGNAT environments through:

- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Subscriber-oriented traffic visibility**
- **Historical traffic investigation**
- **Traffic correlation workflows**
- **Aggregate Flows** for summarizing traffic behavior
- **Explore Flows** for drill-down investigation and analysis
- **Operational visibility into shared-address environments**

These capabilities help operators analyze traffic behavior, investigate activity patterns, and improve operational visibility in CGNAT-enabled service-provider environments.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-network-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring

---

## Related terms

- [NAT](/glossary/nat)
- [IPDR](/glossary/ipdr)
- [Subscriber mapping](/glossary/subscriber-mapping)
- [IPv4 exhaustion](/glossary/ipv4-exhaustion)
- [Lawful intercept](/glossary/lawful-intercept)
- [CGNAT logging](/glossary/cgnat-logging)
- [Flow monitoring](/glossary/flow-monitoring)

---

## Frequently asked questions

### What is CGNAT?

CGNAT (Carrier-Grade NAT) is a large-scale network address translation technique used by service providers to share public IPv4 addresses among many subscribers.

### How does CGNAT work?

CGNAT translates private subscriber addresses into shared public IPv4 addresses using port-based translation. Multiple subscribers can share the same public IP address while remaining distinguishable through port mappings.

### Why does CGNAT make analytics more complex?

CGNAT makes analytics more complex because many subscribers share the same public IPv4 address. Subscriber attribution requires NAT translation logs and timestamp correlation.

### Why are CGNAT logs important?

CGNAT logs are important because they allow operators to associate public IP addresses and ports with specific subscribers for troubleshooting, abuse handling, compliance, and security investigations.

### How does Trisul relate to CGNAT environments?

Trisul supports operational visibility in CGNAT environments through flow analytics, subscriber-oriented traffic analysis, historical investigation workflows, and traffic correlation capabilities.