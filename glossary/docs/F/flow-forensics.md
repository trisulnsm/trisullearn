---
title: What is flow forensics?
description: Flow forensics is the use of historical flow telemetry to reconstruct network activity, investigate security incidents, analyze communication patterns, and determine the scope and timeline of operational or security events.
sidebar_label: Flow forensics
sidebar_position: 9
slug: /glossary/flow-forensics
keywords:
  - flow forensics
  - network forensics
  - forensic netflow
  - flow-based investigation
  - network traffic forensics
  - flow data investigation
  - incident response flow data
  - historical flow analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What can flow forensics determine that packet capture cannot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow forensics supports broad historical investigations across long retention windows because flow telemetry is compact and scalable compared to full packet capture. Analysts can identify communication relationships, traffic timing, transferred volume, and historical connection patterns across weeks or months of retained telemetry."
      }
    },
    {
      "@type": "Question",
      "name": "What are the limits of flow forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow forensics primarily provides metadata-level visibility rather than payload content. It can reveal communication behavior, timing, and traffic relationships, but usually cannot recover application payloads, files, commands, or message content without complementary packet-capture visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How does sampling affect flow forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampled telemetry may reduce forensic visibility because low-volume, short-duration, or infrequent communications can be underrepresented or missed entirely. Unsampled telemetry generally provides stronger forensic fidelity, but the operational impact depends on sampling ratios, traffic patterns, exporter behavior, and investigation requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How far back can flow forensics reach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention depth depends on telemetry volume, storage architecture, retention policy, and operational requirements. Many organizations retain flow telemetry for weeks or months because flow records are significantly more storage-efficient than full packet capture."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support flow-forensics workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports flow-forensics workflows through historical traffic analysis, Explore Flows investigations, Flow Taggers, packet-to-flow correlation workflows, retro-analysis capabilities, and operational traffic analytics using NetFlow, IPFIX, sFlow, and packet-derived telemetry."
      }
    }
  ]
};

# What is flow forensics?

**Flow forensics** is the use of historical flow telemetry to reconstruct network activity, investigate security incidents, analyze communication patterns, and determine the scope and timeline of operational or security events.

Unlike real-time monitoring, flow forensics focuses on:
- Historical investigations
- Timeline reconstruction
- Communication analysis
- Lateral movement visibility
- Threat scoping
- Traffic-pattern analysis
- Retrospective investigations

Flow forensics uses stored flow telemetry such as:
- NetFlow
- IPFIX
- sFlow
- Packet-derived flow records

to answer questions including:
- Which systems communicated?
- When did communication occur?
- How much data was transferred?
- Which protocols were used?
- Which hosts communicated with suspicious destinations?
- How did activity evolve over time?

Because flow telemetry is compact compared to packet capture, organizations commonly retain it for much longer periods.

Trisul supports flow-forensics workflows through historical traffic analysis, flow investigations, and packet-correlation capabilities.

---

## How flow forensics works

Flow-forensics investigations typically begin with:
- An indicator of compromise
- A suspicious host
- A malicious IP address
- A domain name
- An anomalous traffic pattern
- A timeline of suspicious activity

Analysts query historical flow telemetry to identify:
- Communication peers
- Traffic timing
- Connection duration
- Data-transfer volumes
- Protocol usage
- Traffic directionality

Typical workflow:

1. **Indicator identification** → Suspicious activity or indicators are identified
2. **Historical querying** → Analysts search retained flow telemetry
3. **Communication mapping** → Related hosts and traffic relationships are identified
4. **Timeline reconstruction** → Activity progression is reconstructed over time
5. **Scope expansion** → Additional related communications are investigated
6. **Operational correlation** → Flow evidence is correlated with logs, alerts, or packet data

Flow-forensics workflows commonly involve iterative pivoting:
- A suspicious host becomes the next query target
- A destination becomes a communication cluster
- A protocol pattern becomes a broader investigation

This iterative process helps analysts reconstruct operational or security events without requiring full packet retention across the entire network.

![](./images/flow-forensics.png)

---

## Flow forensics in network operations

Flow forensics is widely used across operational and security environments.

### SOC investigations

Security teams use flow forensics for:
- Incident response
- Threat hunting
- Lateral movement analysis
- Data-exfiltration investigations
- Historical communication analysis
- Scope-of-compromise analysis

Flow telemetry helps analysts determine:
- Which hosts communicated with suspicious infrastructure
- Whether malware activity spread internally
- Which systems exchanged data
- When suspicious traffic first appeared
- How incidents evolved over time

### NOC and operational investigations

Operational teams use flow forensics for:
- Historical troubleshooting
- Congestion investigations
- Application-behavior analysis
- Traffic-pattern reconstruction
- Service-impact analysis
- Network anomaly investigations

Historical traffic visibility is especially useful when:
- Problems are intermittent
- Incidents are reported late
- Real-time visibility is unavailable
- Packet capture has expired

### ISP and carrier environments

ISPs and carriers use flow-forensics workflows for:
- Historical traffic analysis
- Subscriber investigations
- Abuse investigations
- Traffic-pattern reconstruction
- Regulatory reporting
- Operational troubleshooting

The operational value depends heavily on:
- Retention depth
- Telemetry completeness
- Sampling behavior
- Monitoring placement
- Analytics workflows

---

## Flow forensics vs packet forensics

| Dimension | Flow forensics | Packet forensics |
|---|---|---|
| Primary visibility | Communication metadata | Full packet and payload visibility |
| Retention depth | Often weeks or months | Often shorter because of storage demands |
| Payload visibility | Typically none | Available when not encrypted |
| Scalability | Very high | Lower because of storage and processing requirements |
| Common use case | Timeline reconstruction and scoping | Deep protocol and payload investigation |

The two approaches are complementary.

In many investigations:
- Flow telemetry establishes scope and timelines
- Packet analysis confirms payload-level evidence

Operational visibility improves significantly when both telemetry types are available together.

---

## Flow forensics and telemetry quality

The quality of flow-forensics investigations depends heavily on telemetry completeness.

Important operational factors include:
- Exporter placement
- Sampling ratios
- Retention policies
- Timestamp accuracy
- Export reliability
- Monitoring coverage
- Collector scalability

Sampled telemetry may:
- Miss short-duration flows
- Underrepresent low-volume traffic
- Reduce anomaly visibility
- Affect investigation completeness

Unsampled telemetry generally improves forensic visibility but may require:
- Larger storage systems
- Higher ingestion capacity
- Additional monitoring infrastructure

The operational tradeoff depends on:
- Security requirements
- Retention goals
- Network scale
- Investigation priorities

---

## Flow forensics and packet correlation

Flow forensics often works together with packet-level visibility.

Flow telemetry helps identify:
- Which conversations matter
- Which hosts are suspicious
- Which time windows require inspection

Packet workflows then provide:
- Protocol-level analysis
- Payload inspection
- File recovery
- Application-level evidence
- Deep forensic validation

This layered workflow improves operational efficiency because analysts can narrow investigations before reviewing large packet datasets.

Some platforms support direct pivoting from:
- Flow records
- Hosts
- Alerts
- Time windows

into related packet visibility where available.

---

## Operational considerations

Flow-forensics workflows commonly face operational considerations including:
- Long-term retention scaling
- High-cardinality telemetry
- Telemetry gaps
- Exporter inconsistency
- Sampling limitations
- Query scalability
- Multi-source correlation complexity
- Historical indexing requirements

Retention strategies depend on:
- Storage architecture
- Regulatory requirements
- Security policy
- Investigation goals
- Telemetry scale

Organizations commonly balance:
- Retention depth
- Visibility fidelity
- Storage cost
- Operational performance

Understanding telemetry limitations is important for accurate investigative conclusions.

---

## How Trisul handles flow forensics

Trisul supports historical flow-forensics workflows through integrated traffic analytics and operational investigation capabilities.

Relevant capabilities include:

- **Historical traffic analysis**
- **Explore Flows** for interactive flow investigations
- **Flow Taggers** for contextual traffic enrichment
- **Retro-analysis workflows** for applying updated detection logic to historical data
- **Packet-to-flow correlation workflows**
- **Host and application traffic analysis**
- **Top-K analytics** for identifying dominant traffic entities
- **NetFlow, IPFIX, sFlow, and packet-derived telemetry ingestion**
- **Operational dashboards and historical querying workflows**

Trisul can also correlate retained packet visibility with historical flow telemetry where packet retention is available.

These capabilities help analysts investigate historical communications, reconstruct timelines, analyze suspicious traffic behavior, and support operational or security investigations.

Trisul primarily focuses on scalable traffic analytics and operational visibility rather than payload-only forensic workflows.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring

---

## Related terms

- [Flow](/glossary/flow)
- [Flow monitoring](/glossary/flow-monitoring)
- [Flow Tagger](/glossary/flow-tagger)
- [Flow sampling](/glossary/flow-sampling)
- [Full packet capture](/glossary/full-packet-capture)
- [Retro analysis](/glossary/retro-analysis)
- [Network security monitoring](/glossary/network-security-monitoring)
- [Traffic analysis](/glossary/traffic-analysis)

---

## Frequently asked questions

### What can flow forensics determine that packet capture cannot?

Flow forensics supports broad historical investigations across long retention windows because flow telemetry is compact and scalable compared to full packet capture. Analysts can identify communication relationships, traffic timing, transferred volume, and historical connection patterns across weeks or months of retained telemetry.

### What are the limits of flow forensics?

Flow forensics primarily provides metadata-level visibility rather than payload content. It can reveal communication behavior, timing, and traffic relationships, but usually cannot recover application payloads, files, commands, or message content without complementary packet-capture visibility.

### How does sampling affect flow forensics?

Sampled telemetry may reduce forensic visibility because low-volume, short-duration, or infrequent communications can be underrepresented or missed entirely. Unsampled telemetry generally provides stronger forensic fidelity, but the operational impact depends on sampling ratios, traffic patterns, exporter behavior, and investigation requirements.

### How far back can flow forensics reach?

Retention depth depends on telemetry volume, storage architecture, retention policy, and operational requirements. Many organizations retain flow telemetry for weeks or months because flow records are significantly more storage-efficient than full packet capture.

### How does Trisul support flow-forensics workflows?

Trisul supports flow-forensics workflows through historical traffic analysis, Explore Flows investigations, Flow Taggers, packet-to-flow correlation workflows, retro-analysis capabilities, and operational traffic analytics using NetFlow, IPFIX, sFlow, and packet-derived telemetry.