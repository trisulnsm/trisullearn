---
title: What is flow monitoring?
description: Flow monitoring is the practice of collecting, storing, and analyzing flow telemetry exported by network devices or generated from packet observations to gain visibility into traffic behavior, bandwidth usage, applications, and security-relevant network activity.
sidebar_label: Flow monitoring
sidebar_position: 7
slug: /glossary/flow-monitoring
keywords:
  - flow monitoring
  - network flow monitoring
  - netflow monitoring
  - ipfix monitoring
  - sflow monitoring
  - traffic flow analysis
  - flow telemetry
  - network traffic visibility
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between flow monitoring and packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring analyzes summarized communication metadata such as addresses, ports, timestamps, and traffic counters, while packet capture preserves individual packets and payload content where available. Flow telemetry is typically more scalable for long-term visibility, whereas packet capture provides deeper protocol and payload detail for forensic workflows."
      }
    },
    {
      "@type": "Question",
      "name": "Can flow monitoring detect threats in encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring cannot inspect encrypted payload content, but it can still identify suspicious communication behavior using metadata such as connection timing, traffic volume, protocol usage, destination patterns, TLS metadata fields, and anomalous communication relationships."
      }
    },
    {
      "@type": "Question",
      "name": "How does flow monitoring scale to large networks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow telemetry summarizes communications into compact metadata records rather than storing every packet payload. This makes flow monitoring significantly more scalable for long-term visibility across large enterprise, datacenter, cloud, and ISP environments."
      }
    },
    {
      "@type": "Question",
      "name": "What is multi-hop flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-hop flow monitoring collects telemetry from multiple observation points along a traffic path. Correlation workflows can help operators analyze how communications traverse routers, switches, interfaces, or network segments across the topology."
      }
    },
    {
      "@type": "Question",
      "name": "How does sampling affect flow monitoring accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampling reduces telemetry volume by observing only a subset of traffic. While this improves scalability, low-volume or short-duration communications may be underrepresented or missed entirely. The operational impact depends on sampling ratios, traffic patterns, exporter behavior, and investigation requirements."
      }
    }
  ]
};

# What is flow monitoring?

**Flow monitoring** is the practice of collecting, storing, and analyzing flow telemetry exported by network devices or generated from packet observations to gain visibility into traffic behavior, bandwidth usage, applications, and security-relevant network activity.

Flow monitoring summarizes communication activity using metadata such as:
- Source and destination addresses
- Ports and protocols
- Byte and packet counters
- Timestamps and durations
- Interface metadata
- Application identifiers
- Traffic directionality

Unlike full packet capture, flow monitoring typically does not preserve payload content.

This makes flow telemetry:
- Scalable
- Efficient for historical retention
- Suitable for large networks
- Useful for operational visibility
- Effective for traffic trending and investigations

Flow monitoring is widely used in:
- Enterprise networks
- Datacenter environments
- ISP and carrier operations
- Cloud-network visibility
- Security operations
- Capacity planning
- Historical traffic analysis

Trisul supports large-scale flow monitoring using NetFlow, IPFIX, sFlow, and packet-derived telemetry workflows.

---

## How flow monitoring works

Network devices or monitoring systems observe traffic and generate summarized flow records.

Typical workflow:

1. **Traffic observation** → Packets are observed on monitored interfaces or capture points
2. **Flow generation** → Communications are grouped into telemetry records
3. **Telemetry export** → Exporters send records using NetFlow, IPFIX, sFlow, or related protocols
4. **Telemetry ingestion** → Collectors receive and parse incoming records
5. **Correlation and enrichment** → Telemetry may be normalized or enriched with contextual metadata
6. **Storage and querying** → Historical traffic visibility becomes available for analysis

Flow records commonly contain:
- Source and destination IP addresses
- Ports and protocols
- Byte and packet counters
- Flow timing information
- Interface metadata
- Sampling information

The exact telemetry depth depends on:
- Export protocol
- Exporter capabilities
- Sampling configuration
- Monitoring placement
- Telemetry templates

Modern telemetry platforms may also support:
- Application metadata
- Tunnel visibility
- VLAN information
- BGP attributes
- Cloud-network metadata
- Security context

![](./images/flow-monitoring.png)

---

## Flow monitoring in network operations

Flow monitoring is widely used across operational environments.

### NOC operations

Network operations teams use flow monitoring for:
- Bandwidth trending
- Interface-utilization analysis
- Capacity planning
- Congestion visibility
- Application monitoring
- Traffic troubleshooting

Flow visibility helps operators identify:
- High-volume applications
- Saturated links
- Traffic anomalies
- Routing asymmetry
- Unexpected traffic growth

### SOC operations

Security teams use flow telemetry for:
- Threat hunting
- Historical investigations
- Lateral movement visibility
- Data-exfiltration investigations
- Anomaly detection
- Communication analysis

Even when traffic is encrypted, metadata may still reveal:
- Suspicious destinations
- Beaconing behavior
- Abnormal transfer patterns
- Long-duration sessions
- Unusual communication relationships

### ISP and carrier operations

ISPs and carriers use flow monitoring for:
- Traffic engineering
- Peering analysis
- Subscriber visibility
- ASN-level traffic analysis
- Capacity management
- Operational reporting

The operational value depends heavily on:
- Exporter placement
- Telemetry completeness
- Retention depth
- Sampling behavior
- Analytics workflows

---

## Flow monitoring vs packet-based monitoring

| Dimension | Flow monitoring | Packet-based monitoring |
|---|---|---|
| Primary visibility | Communication metadata | Full packets and payload visibility |
| Payload inspection | Typically none | Available where payloads are visible |
| Scalability | Very high | Lower because of storage and processing demands |
| Typical retention | Often weeks or months | Often shorter because of storage requirements |
| Infrastructure source | Exporters or packet-derived telemetry | TAPs, SPAN ports, or packet-capture systems |
| Common operational use | Trending, detection, historical visibility | Deep protocol analysis and forensic validation |

The two approaches are complementary rather than competing.

Many mature environments combine:
- Topology-wide flow visibility
- Selective packet capture
- Historical telemetry retention
- Packet-to-flow investigation workflows

---

## Flow monitoring and encrypted traffic

Encryption hides payload content but does not eliminate all telemetry visibility.

Flow monitoring may still reveal:
- Communication timing
- Transfer volume
- Connection frequency
- Destination patterns
- TLS metadata fields
- Session duration
- Traffic asymmetry

Some exporters and telemetry platforms may expose additional metadata such as:
- TLS Server Name Indication (SNI)
- JA3 or JA3S fingerprints
- Application identifiers

depending on exporter capabilities and visibility architecture.

However, flow monitoring alone usually cannot:
- Recover payloads
- Inspect encrypted application content
- Confirm file contents
- Analyze decrypted sessions without additional tooling

Operational workflows often combine:
- Flow telemetry
- Packet visibility
- Endpoint telemetry
- Log correlation

for stronger investigative context.

---

## Sampling and telemetry accuracy

Many exporters use sampling to reduce telemetry overhead.

Sampling may:
- Improve scalability
- Reduce exporter load
- Lower bandwidth consumption

However, sampled telemetry may also:
- Miss short-duration flows
- Underrepresent low-volume traffic
- Reduce anomaly visibility
- Affect forensic accuracy

High-volume traffic patterns are often represented more accurately than infrequent or low-volume communications.

Flow-analysis platforms may estimate traffic totals using exporter-provided sampling metadata.

The operational impact depends on:
- Sampling ratios
- Traffic patterns
- Export consistency
- Monitoring placement
- Investigation requirements

Operators should understand telemetry limitations when interpreting sampled flow data.

---

## Operational considerations

Flow-monitoring deployments commonly face operational considerations including:
- Exporter coverage gaps
- Telemetry loss under load
- Sampling limitations
- Template synchronization
- Multi-source correlation
- Long-term retention scaling
- Query scalability
- Distributed telemetry architectures

Operational visibility depends heavily on:
- Exporter placement
- Telemetry completeness
- Collector scalability
- Historical retention policies
- Monitoring architecture

Telemetry gaps may occur because of:
- Unconfigured exporters
- Network congestion
- Export overload
- Collector limitations
- Monitoring blind spots

Organizations commonly validate telemetry quality using:
- Exporter statistics
- Collector-ingestion monitoring
- Baseline traffic comparison
- Interface utilization checks
- Telemetry health dashboards

---

## How Trisul handles flow monitoring

Trisul supports large-scale flow monitoring through integrated telemetry-ingestion and traffic-analysis workflows.

Relevant capabilities include:

- **NetFlow, IPFIX, sFlow, and related telemetry ingestion**
- **Auto-discovery of routers and interfaces**
- **Historical traffic analysis**
- **Explore Flows** for interactive traffic investigations
- **Top-K analytics** for identifying dominant traffic entities
- **Flow Taggers** for contextual traffic enrichment
- **Interface Tracking** for interface-level visibility
- **Packet-derived flow generation workflows**
- **Host and application traffic analysis**
- **Operational dashboards and historical querying workflows**

Trisul can also generate flow telemetry from packet observations in environments where native exporter functionality is unavailable or incomplete.

These capabilities help operators analyze traffic behavior, investigate operational anomalies, troubleshoot network problems, and support security investigations.

Trisul primarily focuses on scalable traffic analytics and operational visibility rather than payload-only forensic workflows.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-and-carrier-monitoring

---

## Related terms

- [Flow](/glossary/flow)
- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [sFlow](/glossary/sflow)
- [Flow sampling](/glossary/flow-sampling)
- [Flow stitching](/glossary/flow-stitching)
- [Flow Tagger](/glossary/flow-tagger)
- [Full packet capture](/glossary/full-packet-capture)

---

## Frequently asked questions

### What is the difference between flow monitoring and packet capture?

Flow monitoring analyzes summarized communication metadata such as addresses, ports, timestamps, and traffic counters, while packet capture preserves individual packets and payload content where available. Flow telemetry is typically more scalable for long-term visibility, whereas packet capture provides deeper protocol and payload detail for forensic workflows.

### Can flow monitoring detect threats in encrypted traffic?

Flow monitoring cannot inspect encrypted payload content, but it can still identify suspicious communication behavior using metadata such as connection timing, traffic volume, protocol usage, destination patterns, TLS metadata fields, and anomalous communication relationships.

### How does flow monitoring scale to large networks?

Flow telemetry summarizes communications into compact metadata records rather than storing every packet payload. This makes flow monitoring significantly more scalable for long-term visibility across large enterprise, datacenter, cloud, and ISP environments.

### What is multi-hop flow monitoring?

Multi-hop flow monitoring collects telemetry from multiple observation points along a traffic path. Correlation workflows can help operators analyze how communications traverse routers, switches, interfaces, or network segments across the topology.

### How does sampling affect flow monitoring accuracy?

Sampling reduces telemetry volume by observing only a subset of traffic. While this improves scalability, low-volume or short-duration communications may be underrepresented or missed entirely. The operational impact depends on sampling ratios, traffic patterns, exporter behavior, and investigation requirements.