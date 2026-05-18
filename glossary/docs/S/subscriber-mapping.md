---
title: What is Subscriber Mapping?
sidebar_label: Subscriber Mapping
sidebar_position: 107
slug: /glossary/subscriber-mapping
description: Learn what subscriber mapping is, how subscriber identity correlation works, and why mapping users to IP activity is important for ISPs, compliance, and traffic investigations.
keywords:
  - subscriber mapping
  - IP subscriber mapping
  - subscriber identity correlation
  - ISP subscriber analytics
  - NAT subscriber mapping
  - user activity mapping
---

# What is Subscriber Mapping?

Subscriber Mapping is the process of correlating network activity, IP addresses, sessions, and traffic records with specific subscribers, users, or customer identities.

It enables organizations and ISPs to identify:
- which subscriber used an IP address
- when a session occurred
- what traffic activity was generated
- how users accessed network resources
- which services were consumed

Subscriber mapping helps organizations define user visibility roles by connecting traffic behavior to subscriber identities.

It is especially important for:
- ISPs
- telecom providers
- broadband operators
- hotspot networks
- compliance systems
- security investigations

## **How Subscriber Mapping Works**

Subscriber mapping systems correlate visibility data from:

- RADIUS logs
- DHCP logs
- NAT logs
- IPDR records
- authentication systems
- traffic analytics platforms

A typical workflow looks like this:

Subscriber Authentication → IP Assignment → Traffic Activity → Subscriber Mapping

For example:

- A subscriber connects to the ISP network
- The subscriber receives a temporary IP address
- Traffic activity is generated
- Subscriber mapping correlates the IP and session with the user identity

Subscriber mapping may track:

- subscriber IDs
- assigned IP addresses
- NAT translations
- session timestamps
- usage duration
- access methods
- traffic behavior

![](images/subscriber-mapping.png)

---

## **Why Subscriber Mapping Matters**

Modern networks frequently use:

- dynamic IP assignment
- CGNAT
- temporary sessions
- shared address pools

Without subscriber mapping, organizations may struggle to:

- identify users behind IP addresses
- investigate suspicious activity
- support compliance requirements
- troubleshoot subscriber issues
- trace historical communication
- correlate user sessions accurately

Subscriber mapping helps teams:

- improve user traceability
- strengthen forensic investigations
- maintain compliance visibility
- investigate security incidents
- analyze subscriber behavior
- improve operational visibility

It is especially important in:

- ISP infrastructures
- telecom environments
- Wi-Fi access networks
- broadband services
- VPN environments
- regulatory compliance systems

Humans ran out of IPv4 addresses, stuffed thousands of users behind shared IPs, then invented elaborate mapping systems to remember who did what. A masterpiece of self-inflicted complexity.

---

## **Common Operational Use Cases**

### Telecom Compliance

Maintain subscriber traceability for regulatory requirements.

### Security Investigations

Identify which subscriber generated suspicious traffic.

### NAT Correlation

Map users behind shared CGNAT addresses.

### Subscriber Troubleshooting

Analyze connectivity and session issues.

### Usage Analytics

Monitor subscriber behavior and traffic trends.

---

## **Subscriber Mapping vs NAT Logging**

| Feature | Subscriber Mapping | NAT Logging |
|---|---|---|
| Primary Focus | User identity correlation | Address translation records |
| Subscriber Visibility | Strong | Moderate |
| Authentication Context | Included | Limited |
| Session Correlation | Advanced | Moderate |
| Compliance Use | Critical | Critical |

Subscriber mapping connects traffic activity to actual user identities, while NAT logging focuses mainly on translation records.

---

## **How Trisul Handles Subscriber Mapping**

Trisul provides scalable subscriber visibility and traffic correlation for enterprise and ISP environments.

Combined with:

- NAT Logging
- CGNAT Logging
- IPDR Visibility
- RADIUS Logging
- Contextᵀ
- Retro Analysisᵀ

Trisul helps teams:

- correlate subscriber sessions
- map IP activity to users
- investigate suspicious traffic
- maintain long-term traceability
- support compliance workflows
- improve subscriber analytics visibility

Trisul can also integrate:

- IPDR
- NAT Logging
- DoT Compliance

workflows for deeper subscriber visibility.

---

## **Related Terms**

- IPDR
- NAT Logging
- CGNAT Logging
- RADIUS Logging
- DoT Compliance
- Traffic Investigation

---

## **FAQ**

### What is subscriber mapping?

Subscriber mapping is the process of correlating network activity and IP addresses with specific users or subscribers.

### Why is subscriber mapping important?

It helps organizations identify users behind traffic activity, support compliance, and investigate incidents.

### What data sources are used for subscriber mapping?

Common sources include RADIUS logs, DHCP logs, NAT logs, IPDR records, and authentication systems.

### How does subscriber mapping help ISPs?

It helps ISPs trace subscriber activity, troubleshoot sessions, and maintain compliance visibility.

### Why is subscriber mapping important in CGNAT environments?

Multiple users may share the same public IP address, making identity correlation difficult without subscriber mapping.

### What's the difference between subscriber mapping and NAT logging?

Subscriber mapping identifies users associated with traffic activity, while NAT logging records address translation events.