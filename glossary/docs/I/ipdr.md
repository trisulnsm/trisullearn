---
title: What is IPDR?
sidebar_label: IPDR
sidebar_position: 56
slug: /glossary/ipdr
description: Learn what IPDR is, how Internet Protocol Detail Records work, and why IPDR systems are important for ISP traffic analytics, subscriber traceability, and compliance monitoring.
keywords:
  - IPDR
  - Internet Protocol Detail Record
  - IPDR monitoring
  - subscriber traceability
  - ISP traffic analytics
  - telecom compliance
---

# What is IPDR?

IPDR (Internet Protocol Detail Record) is a structured record of internet usage activity that contains information about subscriber sessions, IP assignments, traffic usage, and communication behavior across a network.

IPDR systems help ISPs and telecom providers maintain subscriber traceability and traffic visibility for operational analytics, billing, troubleshooting, and regulatory compliance.

An IPDR record may include:
- subscriber identity
- source and destination IP addresses
- timestamps
- session duration
- bandwidth usage
- protocol information
- NAT mappings
- traffic metadata

IPDR is widely used in:
- ISP environments
- telecom infrastructures
- subscriber monitoring
- compliance systems
- traffic analytics platforms

## How IPDR Works

ISPs and telecom providers generate network activity data from:
- broadband gateways
- CGNAT systems
- routers
- firewalls
- DHCP servers
- authentication systems
- traffic monitoring platforms

IPDR systems collect and organize this information into searchable usage records.

A typical workflow looks like this:

1. A subscriber connects to the network
2. IP assignments and traffic activity are recorded
3. Session metadata is stored as IPDR records
4. Monitoring platforms analyze and retain the data

For example:

1. A subscriber accesses internet services
2. Traffic activity and session details are logged
3. NAT mappings and timestamps are recorded
4. Analysts can later trace the subscriber activity if required

<!-- IMAGE: IPDR generation and subscriber traceability workflow -->

## Why IPDR Matters

Large ISP and telecom environments must manage millions of subscriber sessions daily.

Without IPDR visibility, organizations may struggle to:
- trace subscriber activity
- investigate abuse complaints
- analyze traffic behavior
- support compliance requirements
- troubleshoot subscriber issues
- investigate security incidents

IPDR helps organizations:
- maintain subscriber traceability
- analyze traffic usage
- support lawful investigations
- improve operational visibility
- retain historical session data
- support telecom compliance workflows

It is especially important in:
- ISPs
- telecom providers
- broadband operators
- CGNAT environments
- large subscriber infrastructures

## Common Operational Use Cases

### Subscriber Traceability

Identify which subscriber used a specific IP address at a given time.

### Telecom Compliance

Support regulatory and lawful traffic retention requirements.

### Abuse Investigation

Investigate spam, phishing, or malicious traffic activity.

### Traffic Analytics

Analyze subscriber bandwidth and usage behavior.

### CGNAT Mapping

Correlate private and public IP address assignments.

## IPDR vs NetFlow

| Feature | IPDR | NetFlow |
|---|---|---|
| Primary Focus | Subscriber activity and sessions | Traffic flow visibility |
| Subscriber Mapping | Strong | Limited |
| Compliance Usage | High | Moderate |
| Traffic Granularity | Session-focused | Flow-focused |
| ISP Relevance | Very high | High |

IPDR focuses more on subscriber traceability and session activity, while NetFlow focuses on traffic flow analytics.

## How Trisul Supports IPDR Visibility

Trisul provides scalable traffic analytics and subscriber visibility workflows for ISP and telecom environments.

Combined with:
- CGNAT Logging
- Flow Analysis
- Subscriber Mapping
- Retro Analysisᵀ
- Contextᵀ
- Long-Term Traffic Retention

Trisul helps teams:
- analyze subscriber traffic behavior
- investigate historical session activity
- monitor NAT mappings
- support compliance workflows
- visualize bandwidth usage
- improve operational visibility

Trisul can also integrate [DoT Compliance](/glossary/dot-compliance), [CGNAT Logging](/glossary/cgnat-logging), and [Flow Analysis](/glossary/flow-analysis) workflows for deeper ISP analytics visibility.

## Related Terms

- [DoT Compliance](/glossary/dot-compliance)
- [CGNAT Logging](/glossary/cgnat-logging)
- [Subscriber Mapping](/glossary/subscriber-mapping)
- [Flow Analysis](/glossary/flow-analysis)
- [NetFlow](/glossary/netflow)
- [ISP Traffic Analytics](/glossary/isp-traffic-analytics)

---

## FAQ

### What is IPDR?

IPDR stands for Internet Protocol Detail Record, a structured record of subscriber internet usage and session activity.

### Why is IPDR important?

It helps ISPs maintain subscriber traceability, support compliance requirements, and analyze traffic behavior.

### What information does an IPDR contain?

An IPDR may contain subscriber identity, IP addresses, timestamps, bandwidth usage, session details, and NAT mappings.

### What's the difference between IPDR and NetFlow?

IPDR focuses on subscriber sessions and traceability, while NetFlow focuses on traffic flow visibility and analytics.

### Is IPDR useful for telecom compliance?

Yes. IPDR systems are widely used for lawful traffic retention and telecom regulatory requirements.

### Can IPDR help investigate abuse complaints?

Yes. IPDR records help identify subscriber activity related to suspicious or malicious communication.