---
title: What is home network in Trisul?
description: In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow-tagging workflows.
sidebar_label: Home network
sidebar_position: 49
slug: /glossary/home-network
keywords:
  - home network
  - trisul home network
  - traffic direction
  - incoming traffic
  - outgoing traffic
  - transit traffic
  - internal traffic
  - administrative domain
  - directional traffic analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is home network in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow-tagging workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What traffic directions does Trisul classify using home networks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul classifies traffic as incoming, outgoing, internal, or transit depending on whether the source and destination IP addresses belong to configured home-network ranges. These directional classifications are used in traffic reports, flow tagging, and aggregate traffic analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How are home networks configured in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Administrators configure home networks by defining IP subnets or CIDR ranges that represent the monitored administrative domain. Accurate configuration is important because directional traffic analysis depends on correct identification of internal and external traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Why is home network configuration important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home network configuration is important because it affects traffic-direction classification, reporting accuracy, flow tagging, and operational visibility. Incorrect subnet definitions may cause internal traffic to be classified as external or transit traffic."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul use home network information in flow analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses home network definitions to enrich flows with directional context such as internal, incoming, outgoing, or transit communication. These classifications can then be used in Explore Flows, traffic reports, historical analysis, and operational investigations."
      }
    }
  ]
};

# What is home network in Trisul?

In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow-tagging workflows.

Home network definitions help Trisul determine:
- Which systems are internal
- Which traffic is external
- Which traffic is transit traffic
- Which flows remain inside the organization
- Which communications cross administrative boundaries

Directional classification is important for:
- Traffic reporting
- Flow analysis
- Security investigations
- Capacity planning
- Traffic baselining
- Operational visibility
- Flow tagging workflows

By default, private RFC1918 ranges are commonly treated as internal networks, but administrators can define additional subnets and network ranges depending on deployment requirements.

Trisul uses home-network context across traffic-analysis and flow-investigation workflows.

---

## How home network classification works

Home-network classification compares source and destination IP addresses against configured internal-network definitions.

Typical workflow:

1. **Subnet definition** → Administrators define internal network ranges
2. **Traffic observation** → Flow or packet telemetry is collected
3. **Address comparison** → IP addresses are matched against home-network ranges
4. **Direction classification** → Traffic is categorized by direction
5. **Operational analysis** → Reports and investigations use directional context

Common telemetry sources include:
- NetFlow
- IPFIX
- sFlow
- Packet telemetry
- Interface traffic analysis

Directional classification commonly depends on:
- Source IP address
- Destination IP address
- Configured subnet ranges
- Administrative-domain boundaries

The exact behavior depends on:
- Deployment architecture
- Monitoring placement
- Network segmentation
- Tunnel visibility
- Addressing design

![](./images/home-network.png)

---

## Home network classification in network operations

Home-network awareness is widely used across operational and security environments.

### NOC operations

Network operations teams use home-network classification for:
- Traffic-direction reporting
- WAN analysis
- Capacity planning
- Utilization analysis
- Transit-traffic visibility
- Internal traffic analysis

Operators commonly investigate:
- Unexpected outbound traffic
- High inbound utilization
- Excessive transit traffic
- Internal communication patterns
- Directional traffic growth

Historical directionality helps teams identify:
- Long-term traffic trends
- Utilization imbalance
- Network-boundary changes
- Routing or segmentation issues

### SOC operations

Security teams use home-network context for:
- Threat investigations
- Data-exfiltration analysis
- Suspicious outbound traffic detection
- Internal lateral-movement analysis
- External communication monitoring
- Traffic attribution workflows

Directional classification helps analysts identify:
- Which systems initiated communication
- Which traffic crossed organizational boundaries
- Which communications remained internal
- Which flows involved external destinations

Security investigations commonly correlate:
- Flow telemetry
- DNS activity
- Firewall logs
- Endpoint telemetry
- Historical traffic patterns

### ISP and carrier environments

In ISP and carrier environments, home-network concepts may also include:
- Customer network ranges
- Autonomous-system ownership
- Downstream prefixes
- Routed administrative domains

Operational value depends heavily on:
- Correct subnet configuration
- Routing visibility
- BGP awareness
- Historical telemetry retention
- Traffic-correlation workflows

---

## Common traffic direction classifications

| Direction | Meaning |
|---|---|
| Incoming traffic | External source communicating with internal destination |
| Outgoing traffic | Internal source communicating with external destination |
| Internal traffic | Both endpoints belong to the home network |
| Transit traffic | Neither endpoint belongs to the home network |

These classifications may be used in:
- Aggregate traffic reports
- Directional traffic analysis
- Flow tagging
- Historical reporting
- Security investigations

---

## Home network classification vs routing awareness

| Dimension | Home-network classification | Routing awareness |
|---|---|---|
| Primary focus | Administrative ownership of address space | Reachability and forwarding paths |
| Main input | Configured internal subnets | Routing tables and topology |
| Operational purpose | Directional traffic visibility | Path and forwarding analysis |
| Common use case | Reporting and flow classification | Routing operations and troubleshooting |
| Typical telemetry | Flow and address metadata | Routing and topology telemetry |

The two workflows are complementary and commonly correlated together.

---

## What makes home network classification effective

Effective home-network classification depends heavily on:
- Accurate subnet definitions
- Up-to-date network inventory
- Correct routing visibility
- Consistent segmentation
- Telemetry completeness
- Historical correlation workflows

Operational challenges commonly include:
- Missing subnet updates
- NAT visibility limitations
- Overlapping address spaces
- Hybrid-cloud architectures
- Tunnel visibility gaps
- Multi-site deployments

Classification quality also depends on:
- Monitoring placement
- Addressing consistency
- Exporter configuration
- Historical telemetry retention

Incorrect home-network configuration may cause:
- Internal traffic to appear external
- Transit traffic misclassification
- Reporting inaccuracies
- Incorrect flow tagging
- Misleading operational dashboards

Organizations commonly improve classification accuracy through:
- Centralized subnet management
- Automated inventory workflows
- Routing-aware telemetry correlation
- Historical validation workflows

---

## How Trisul handles home network

Trisul uses home-network definitions to enrich traffic telemetry with directional context for operational analysis and investigations.

Relevant capabilities include:

- **Directional traffic analysis**
- **Flow and packet visibility**
- **Explore Flows** for investigative drill-down
- **Flow Taggers** for contextual telemetry enrichment
- **Historical traffic analysis**
- **Traffic-pattern and aggregate analysis**
- **NetFlow, IPFIX, sFlow, and packet-derived telemetry support**
- **Operational dashboards and reporting workflows**
- **Directional flow classification workflows**

Trisul can help operators:
- Analyze incoming and outgoing traffic
- Investigate transit traffic behavior
- Identify internal communication patterns
- Correlate directional traffic trends
- Support operational and security investigations

These workflows are particularly useful for:
- Traffic reporting
- Capacity planning
- Security investigations
- Traffic attribution
- Operational baselining
- Directional traffic analysis

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-and-carrier-monitoring

---

## Related terms

- [Flow tagging](/glossary/flow-tagging)
- [Explore Flows](/glossary/explore-flows)
- [Counter group](/glossary/counter-group)
- [BGP peering analytics](/glossary/bgp-peering-analytics)
- [RFC1918](/glossary/rfc1918)
- [Flow attribution](/glossary/flow-attribution)
- [Traffic analysis](/glossary/traffic-analysis)

---

## Frequently asked questions

### What is home network in Trisul?

In Trisul, home network refers to the IP subnets and network ranges considered part of the monitored administrative domain. Trisul uses this definition to classify traffic direction as incoming, outgoing, internal, or transit for traffic analysis, reporting, and flow-tagging workflows.

### What traffic directions does Trisul classify using home networks?

Trisul classifies traffic as incoming, outgoing, internal, or transit depending on whether the source and destination IP addresses belong to configured home-network ranges. These directional classifications are used in traffic reports, flow tagging, and aggregate traffic analysis.

### How are home networks configured in Trisul?

Administrators configure home networks by defining IP subnets or CIDR ranges that represent the monitored administrative domain. Accurate configuration is important because directional traffic analysis depends on correct identification of internal and external traffic.

### Why is home network configuration important?

Home network configuration is important because it affects traffic-direction classification, reporting accuracy, flow tagging, and operational visibility. Incorrect subnet definitions may cause internal traffic to be classified as external or transit traffic.

### How does Trisul use home network information in flow analysis?

Trisul uses home network definitions to enrich flows with directional context such as internal, incoming, outgoing, or transit communication. These classifications can then be used in Explore Flows, traffic reports, historical analysis, and operational investigations.