---
title: What is endpoint detection and response?
description: Endpoint detection and response (EDR) is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident-response actions on devices such as laptops, servers, and workstations.
sidebar_label: Endpoint detection and response
sidebar_position: 160
slug: /glossary/endpoint-detection-and-response
keywords:
  - EDR
  - endpoint detection
  - endpoint response
  - host security
  - threat detection
  - incident response
  - endpoint telemetry
  - endpoint monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is endpoint detection and response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Endpoint detection and response (EDR) is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident-response actions on devices such as laptops, servers, and workstations."
      }
    },
    {
      "@type": "Question",
      "name": "What does EDR monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR platforms commonly monitor process activity, file changes, registry activity, user behavior, endpoint network connections, command execution, authentication activity, and security events on managed endpoints."
      }
    },
    {
      "@type": "Question",
      "name": "How is EDR different from network security monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR focuses on activity occurring directly on endpoints, while network security monitoring analyzes traffic and communications moving across the network. The two approaches are complementary and are often correlated during investigations."
      }
    },
    {
      "@type": "Question",
      "name": "Why is EDR important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDR is important because many attacks generate observable endpoint behavior such as malware execution, credential abuse, persistence mechanisms, suspicious processes, or unauthorized activity that may not be fully visible through network monitoring alone."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul complement EDR workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul complements EDR workflows through network traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help correlate endpoint events with network communications and external connections."
      }
    }
  ]
};

# What is endpoint detection and response?

**Endpoint detection and response (EDR)** is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident-response actions on devices such as laptops, servers, and workstations.

EDR platforms are commonly used to:
- Detect malicious activity
- Investigate endpoint behavior
- Correlate security events
- Analyze post-compromise activity
- Support incident response
- Improve endpoint visibility
- Monitor host-level telemetry

Endpoints commonly include:
- Employee laptops
- Servers
- Virtual machines
- Workstations
- Cloud-hosted systems
- Managed desktops

EDR is an important component of modern security operations because many attacks generate observable activity directly on endpoints.

Trisul complements endpoint-oriented investigations through network traffic analytics and traffic-visibility workflows.

---

## How EDR works

EDR platforms commonly deploy agents or monitoring components on managed endpoints.

These systems may collect:
- Process execution activity
- File modifications
- Registry or configuration changes
- User and authentication activity
- Network connections
- Command execution history
- Security alerts
- System telemetry

Typical workflow:

1. **Endpoint telemetry collection** → Activity is collected from managed devices
2. **Behavioral analysis** → Security systems analyze suspicious behavior
3. **Alert generation** → Potential threats or anomalies are identified
4. **Investigation workflows** → Analysts review endpoint and related activity
5. **Response actions** → Systems may isolate, remediate, or contain affected endpoints

Different EDR platforms support different:
- Detection models
- Telemetry depth
- Automated response capabilities
- Investigation workflows
- Endpoint coverage models

---

## EDR in security operations

EDR is widely used in:
- SOC environments
- Incident response
- Threat hunting
- Malware investigations
- Insider-threat investigations
- Compliance monitoring
- Managed security operations

Common operational use cases include:

- **Malware detection**: Identify suspicious process behavior
- **Credential-abuse investigation**: Analyze unauthorized access activity
- **Persistence detection**: Identify long-term attacker footholds
- **Ransomware investigation**: Analyze endpoint encryption activity
- **Threat hunting**: Investigate suspicious endpoint patterns
- **Incident response**: Correlate endpoint and network events

Endpoint telemetry often reveals activity that may not be visible through network-only monitoring approaches.

---

## EDR vs network security monitoring

| Dimension | EDR | Network security monitoring |
|---|---|---|
| Primary visibility | Endpoint and host activity | Network communications and traffic behavior |
| Data source | Endpoint telemetry and agents | Flow data, packets, and network telemetry |
| Typical focus | Processes, files, users, execution | Traffic patterns, sessions, communications |
| Deployment location | Endpoints and hosts | Network infrastructure and monitoring points |
| Operational strength | Host-level visibility | Network-wide communication visibility |

The two approaches are complementary and often correlated during investigations.

For example:
- EDR may identify malware execution on a host
- Network monitoring may reveal command-and-control communications or lateral movement

Combining endpoint and network visibility improves investigation accuracy and operational context.

---

## EDR and lateral movement

Attackers frequently move between systems after initial compromise.

EDR systems may help detect:
- Suspicious remote execution
- Credential misuse
- Abnormal administrative activity
- Privilege escalation
- Persistence mechanisms

Network analytics may complement EDR by identifying:
- Lateral traffic patterns
- Internal communications
- Suspicious connections
- Beaconing activity
- Data exfiltration behavior

Correlating endpoint and network telemetry improves visibility into distributed attacks.

---

## Operational considerations

EDR deployments commonly face operational considerations including:
- Endpoint coverage consistency
- Agent-management overhead
- Telemetry retention
- Alert volume
- False positives
- Endpoint performance impact
- Investigation scalability

Unmanaged or uninstrumented systems may create visibility gaps.

Effective operations often require:
- Consistent endpoint coverage
- Centralized investigation workflows
- Correlation with network telemetry
- Historical visibility
- Threat-intelligence integration

The exact capabilities depend on the EDR platform and deployment model.

---

## How Trisul complements EDR workflows

Trisul complements EDR workflows through network traffic analytics and operational visibility capabilities.

Relevant capabilities include:

- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Packet visibility and traffic investigation**
- **Historical traffic analysis**
- **Explore Flows** for traffic investigation and drill-down workflows
- **Traffic anomaly visibility**
- **Lateral movement visibility through traffic analytics**
- **Flow and packet correlation workflows**
- **Operational visibility into external and internal communications**

These capabilities help analysts correlate endpoint alerts with network activity, investigate suspicious communications, analyze lateral movement behavior, and improve operational visibility during incident investigations.

Trisul primarily provides network traffic analytics and visibility rather than endpoint-agent functionality or direct endpoint remediation capabilities.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring

---

## Related terms

- [Network security monitoring](/glossary/network-security-monitoring)
- [Threat detection](/glossary/threat-detection)
- [Incident response](/glossary/incident-response)
- [Host monitoring](/glossary/host-monitoring)
- [Lateral movement](/glossary/lateral-movement)
- [XDR](/glossary/xdr)
- [Flow monitoring](/glossary/flow-monitoring)

---

## Frequently asked questions

### What is endpoint detection and response?

Endpoint detection and response (EDR) is a security approach that continuously monitors endpoints for suspicious behavior, supports threat investigation, and enables incident-response actions on devices such as laptops, servers, and workstations.

### What does EDR monitor?

EDR platforms commonly monitor process activity, file changes, registry activity, user behavior, endpoint network connections, command execution, authentication activity, and security events on managed endpoints.

### How is EDR different from network security monitoring?

EDR focuses on activity occurring directly on endpoints, while network security monitoring analyzes traffic and communications moving across the network. The two approaches are complementary and are often correlated during investigations.

### Why is EDR important?

EDR is important because many attacks generate observable endpoint behavior such as malware execution, credential abuse, persistence mechanisms, suspicious processes, or unauthorized activity that may not be fully visible through network monitoring alone.

### How does Trisul complement EDR workflows?

Trisul complements EDR workflows through network traffic analytics, flow visibility, packet analysis, and historical traffic investigation capabilities that help correlate endpoint events with network communications and external connections.