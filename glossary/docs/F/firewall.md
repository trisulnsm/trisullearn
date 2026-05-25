---
title: What is a firewall?
description: A firewall is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies.
sidebar_label: Firewall
sidebar_position: 128
slug: /glossary/firewall
keywords:
  - firewall
  - network firewall
  - security policy
  - packet filtering
  - traffic control
  - network security
  - zone protection
  - stateful firewall
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a firewall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A firewall is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies."
      }
    },
    {
      "@type": "Question",
      "name": "How does a firewall work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A firewall evaluates traffic against configured security rules or policies. Depending on firewall type and deployment model, it may inspect packet headers, connection state, protocols, applications, or traffic behavior before allowing or blocking communications."
      }
    },
    {
      "@type": "Question",
      "name": "What types of firewalls are there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common firewall types include packet-filtering firewalls, stateful firewalls, proxy firewalls, web application firewalls, and next-generation firewalls. Different firewall types provide different levels of visibility, inspection, and policy enforcement."
      }
    },
    {
      "@type": "Question",
      "name": "Why is firewall monitoring important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall monitoring helps organizations analyze blocked traffic, policy violations, suspicious connection attempts, traffic anomalies, and operational changes. Monitoring firewall activity improves troubleshooting, security investigations, and policy validation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support firewall-related investigations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports firewall-related investigations through traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help operators analyze communication behavior and correlate firewall-related traffic patterns."
      }
    }
  ]
};

# What is a firewall?

**A firewall** is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies.

Firewalls are commonly used to:
- Enforce network-access policies
- Restrict unauthorized communications
- Segment security zones
- Monitor traffic behavior
- Protect internal systems
- Control application access
- Improve operational visibility

Firewalls may be deployed:
- Between internal and external networks
- Between datacenter zones
- Between cloud environments
- Between user and server segments
- Within micro-segmented environments

Modern firewall platforms may combine:
- Packet filtering
- Stateful inspection
- NAT functionality
- Application awareness
- Logging and telemetry
- Threat-detection capabilities

Trisul supports firewall-related traffic investigation workflows through network traffic analytics and operational visibility capabilities.

---

## How a firewall works

Firewalls evaluate traffic against configured rules or security policies.

Typical workflow:

1. **Traffic inspection** → The firewall receives traffic crossing a boundary or security zone
2. **Policy evaluation** → Rules determine whether traffic is allowed, denied, or further inspected
3. **State or protocol analysis** → Some firewalls track connection state or analyze protocols
4. **Traffic decision** → Traffic may be forwarded, blocked, logged, or redirected
5. **Operational logging** → Events and decisions may be recorded for analysis

Depending on firewall type and deployment model, inspection may include:
- IP addresses
- Ports and protocols
- Connection state
- Application behavior
- Session characteristics
- User identity
- Traffic anomalies

The exact visibility and enforcement depth depend on:
- Firewall architecture
- Deployment placement
- Encryption usage
- Performance requirements
- Security policy configuration

---

## Firewall types

| Firewall type | Operational purpose |
|---|---|
| Packet-filtering firewall | Filters traffic using packet-header rules |
| Stateful firewall | Tracks active connections and session state |
| Proxy firewall | Terminates and intermediates application sessions |
| Next-generation firewall (NGFW) | Adds application-aware inspection and advanced policy capabilities |
| Web application firewall (WAF) | Protects web applications and HTTP-based services |

Different firewall types provide different:
- Visibility levels
- Inspection depth
- Performance characteristics
- Operational complexity
- Policy-enforcement capabilities

---

## Firewalls in network operations

Firewalls play an important role in:
- Security operations
- Network segmentation
- Access control
- Compliance monitoring
- Incident response
- Datacenter operations
- Cloud-security workflows

Common operational use cases include:

- **Access control**: Restrict unauthorized communications
- **Traffic segmentation**: Separate security zones
- **Threat monitoring**: Detect suspicious connection behavior
- **Policy validation**: Verify rule effectiveness
- **Operational troubleshooting**: Investigate blocked or failed communications
- **Incident investigations**: Correlate firewall events with network activity

Firewall telemetry and logs are often important during:
- Security investigations
- Connectivity troubleshooting
- Policy audits
- Threat hunting
- Operational change analysis

---

## Firewall monitoring and visibility

Firewall monitoring may include:
- Traffic logs
- Session records
- Policy-hit statistics
- Blocked-connection analysis
- NAT visibility
- Traffic trends
- Rule usage
- Security alerts

Operational analysis often focuses on:
- Blocked traffic
- Unexpected communications
- Policy violations
- Traffic anomalies
- High-volume flows
- Suspicious access attempts

Firewall visibility is influenced by:
- Logging configuration
- Traffic placement
- Encryption usage
- Rule granularity
- Telemetry retention

Combining firewall telemetry with network analytics improves operational context and investigation depth.

---

## Firewalls and encrypted traffic

Encrypted traffic can affect firewall visibility.

Depending on firewall capabilities and deployment architecture, firewalls may analyze:
- TLS metadata
- Certificate details
- Traffic behavior
- Connection patterns
- Application fingerprints

Full payload inspection of encrypted traffic may require:
- TLS interception
- Decryption workflows
- Certificate management
- Additional privacy and compliance considerations

The exact visibility level depends on:
- Encryption protocols
- Firewall capabilities
- Deployment policy
- Monitoring architecture

---

## Operational considerations

Firewall deployments commonly face operational considerations including:
- Rule-management complexity
- Performance overhead
- Logging volume
- Policy sprawl
- Encryption visibility limitations
- Segmentation design
- Operational scalability

Overly restrictive policies may disrupt legitimate applications, while overly broad policies may reduce security effectiveness.

Effective firewall operations typically require:
- Rule review processes
- Traffic baselining
- Continuous monitoring
- Historical visibility
- Operational correlation with network telemetry

---

## How Trisul supports firewall-related investigations

Trisul supports firewall-related traffic investigation workflows through network traffic analytics and operational visibility capabilities.

Relevant capabilities include:

- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Packet visibility and traffic investigation**
- **Historical traffic analysis**
- **Explore Flows** for communication investigation workflows
- **Traffic anomaly visibility**
- **Host and traffic correlation workflows**
- **Operational visibility into communication patterns**
- **Historical trend analysis for traffic behavior changes**

These capabilities help operators investigate communication behavior, analyze suspicious traffic patterns, validate operational changes, correlate firewall-related events with traffic activity, and improve troubleshooting workflows.

Trisul primarily provides network traffic analytics and visibility rather than firewall policy enforcement or inline firewall functionality.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring

---

## Related terms

- [Packet filtering](/glossary/packet-filtering)
- [ACL](/glossary/acl)
- [Network segmentation](/glossary/network-segmentation)
- [Policy enforcement](/glossary/policy-enforcement)
- [Security zone](/glossary/security-zone)
- [NGFW](/glossary/ngfw)
- [Traffic analysis](/glossary/traffic-analysis)

---

## Frequently asked questions

### What is a firewall?

A firewall is a security control that monitors and filters network traffic between systems, networks, or security zones based on defined security policies.

### How does a firewall work?

A firewall evaluates traffic against configured security rules or policies. Depending on firewall type and deployment model, it may inspect packet headers, connection state, protocols, applications, or traffic behavior before allowing or blocking communications.

### What types of firewalls are there?

Common firewall types include packet-filtering firewalls, stateful firewalls, proxy firewalls, web application firewalls, and next-generation firewalls. Different firewall types provide different levels of visibility, inspection, and policy enforcement.

### Why is firewall monitoring important?

Firewall monitoring helps organizations analyze blocked traffic, policy violations, suspicious connection attempts, traffic anomalies, and operational changes. Monitoring firewall activity improves troubleshooting, security investigations, and policy validation.

### How does Trisul support firewall-related investigations?

Trisul supports firewall-related investigations through traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help operators analyze communication behavior and correlate firewall-related traffic patterns.