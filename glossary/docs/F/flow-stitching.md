---
title: What is flow stitching?
description: Flow stitching is the process of correlating and combining related unidirectional flow records into a bidirectional or conversation-oriented view for traffic analysis, troubleshooting, and security investigations.
sidebar_label: Flow stitching
sidebar_position: 5
slug: /glossary/flow-stitching
keywords:
  - flow stitching
  - bidirectional flow
  - biflow
  - flow correlation
  - netflow stitching
  - flow deduplication
  - flow legs
  - telemetry correlation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does flow stitching become difficult in asymmetric routing environments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow stitching generally works best when both traffic directions are visible within the same telemetry-analysis workflow. In asymmetric routing environments, the forward and return paths may traverse different exporters, interfaces, or collectors, making directional correlation more difficult and potentially reducing stitching accuracy."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between flow stitching and flow deduplication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow stitching correlates related directional flow records into a conversation-oriented view, while flow deduplication removes overlapping telemetry generated when multiple exporters observe the same communication path. The two workflows solve different telemetry-correlation problems and may be used together in multi-device monitoring environments."
      }
    },
    {
      "@type": "Question",
      "name": "Does flow stitching affect traffic accounting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow stitching may improve operational readability by combining directional traffic into a conversation-oriented representation. However, accurate traffic accounting also depends on exporter placement, deduplication workflows, sampling behavior, and telemetry completeness across the monitoring environment."
      }
    },
    {
      "@type": "Question",
      "name": "Can flow stitching work across NAT boundaries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT environments complicate stitching because addresses and ports may change across translation boundaries. Some platforms support NAT-aware correlation workflows that use timestamps, ports, interface context, or heuristic matching to associate related telemetry before and after translation."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support flow-stitching workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports flow-stitching and correlation workflows through Flow Legs Correlation, MergeMultipleSources configuration options, NAT-aware telemetry correlation, historical traffic analysis, and operational visibility workflows for multi-device environments."
      }
    }
  ]
};

# What is flow stitching?

**Flow stitching** is the process of correlating and combining related unidirectional flow records into a bidirectional or conversation-oriented view for traffic analysis, troubleshooting, and security investigations.

Many telemetry systems export traffic directionally:
- Client-to-server traffic appears as one record
- Server-to-client traffic appears as another record

Flow stitching associates these related records so analysts can work with a unified conversation view instead of separate directional entries.

Flow stitching is commonly used with:
- NetFlow
- IPFIX
- Packet-derived flow telemetry
- Multi-device telemetry environments

The goal is operational clarity:
- Understanding full conversations
- Improving traffic visibility
- Simplifying investigations
- Supporting historical analysis
- Correlating communication behavior

Trisul supports flow-stitching and flow-correlation workflows for operational and security visibility.

---

## How flow stitching works

Flow stitching correlates related telemetry records representing opposite directions of a communication.

Typical workflow:

1. **Telemetry ingestion** → Directional flow records are received
2. **Directional matching** → Related traffic directions are identified
3. **Correlation analysis** → Timing, addresses, ports, and metadata are compared
4. **Conversation association** → Related records are grouped logically
5. **Operational visualization** → Analysts work with a conversation-oriented view

Correlation commonly uses:
- Source and destination addresses
- Ports and protocols
- Traffic timing
- Flow duration
- Export timestamps
- Interface metadata
- Exporter identifiers

Depending on platform design, stitched views may:
- Preserve original telemetry records
- Create correlated overlays
- Generate derived bidirectional views
- Support visual grouping workflows

Different implementations handle:
- Timing windows
- Flow expiration
- Protocol behavior
- Export delays
- Multi-device correlation

in different ways.

![](./images/flow-stitching.png)

---

## Flow stitching in network operations

Flow stitching is widely used across operational and security environments.

### NOC operations

Network operations teams use stitched visibility for:
- Traffic troubleshooting
- Application analysis
- Bandwidth investigations
- Congestion analysis
- Session-level visibility
- Communication-path analysis

Conversation-oriented visibility helps operators understand:
- Who initiated communication
- Which direction carried most traffic
- How sessions evolved over time
- Whether communication behaved normally

### SOC operations

Security teams use flow stitching for:
- Threat hunting
- Lateral movement investigations
- Historical communication analysis
- Data-exfiltration investigations
- Incident response
- Timeline reconstruction

Correlated directional visibility improves:
- Investigation readability
- Communication tracking
- Historical context
- Threat reconstruction workflows

### ISP and carrier environments

ISPs and carriers may use stitching workflows for:
- Subscriber traffic analysis
- Traffic engineering
- Usage visibility
- Operational reporting
- Capacity analysis
- Historical traffic investigations

The operational value depends heavily on:
- Exporter placement
- Telemetry completeness
- Correlation quality
- Monitoring architecture

---

## Flow stitching vs flow deduplication

| Dimension | Flow stitching | Flow deduplication |
|---|---|---|
| Primary purpose | Correlate opposite traffic directions | Remove overlapping telemetry from multiple exporters |
| Input telemetry | Directional communication records | Multiple observations of the same traffic |
| Operational outcome | Conversation-oriented visibility | Normalized telemetry visibility |
| Common challenge | Asymmetric visibility | Multi-hop overlap |
| Typical use case | Bidirectional traffic analysis | Multi-device traffic normalization |

The two workflows are complementary and commonly coexist in large-scale telemetry-analysis systems.

---

## Flow stitching and asymmetric routing

Asymmetric routing complicates stitching because:
- Forward and return traffic may traverse different devices
- Different exporters may observe each direction
- Timing differences may occur
- Collectors may receive incomplete visibility

In distributed telemetry architectures:
- One collector may see only one direction
- Different telemetry paths may arrive asynchronously
- Correlation windows may expire before matching occurs

Some environments address this using:
- Centralized collectors
- Cross-collector correlation
- Multi-source telemetry analysis
- Historical stitching workflows

Perfect stitching may not always be possible in highly distributed environments.

---

## NAT and flow stitching

NAT environments complicate directional matching because:
- Addresses change across translation boundaries
- Source ports may be rewritten
- Internal and external visibility differ
- Exact tuple matching may fail

NAT-aware stitching workflows may therefore use:
- Timestamp proximity
- Port heuristics
- Interface context
- Directionality analysis
- Session timing
- Exporter relationships

The exact implementation varies across platforms and telemetry architectures.

NAT-aware correlation improves:
- Traffic attribution
- Historical investigations
- Path reconstruction
- Security visibility

---

## Operational considerations

Flow-stitching workflows commonly face operational considerations including:
- Asymmetric routing
- Export timing variation
- Multi-device visibility overlap
- Sampling inconsistencies
- Exporter clock drift
- NAT translation
- Correlation-window tuning
- High-cardinality telemetry

Operational accuracy depends heavily on:
- Exporter placement
- Telemetry completeness
- Timing synchronization
- Monitoring architecture
- Correlation logic

Organizations commonly balance:
- Correlation fidelity
- Operational scalability
- Historical retention
- Investigation usability
- Raw telemetry preservation

Understanding telemetry limitations is important for accurate analysis.

---

## How Trisul handles flow stitching

Trisul supports configurable flow-stitching and telemetry-correlation workflows for multi-device monitoring environments.

Relevant capabilities include:

- **Flow Legs Correlation** workflows
- **MergeMultipleSources** configuration options
- **NAT-aware correlation workflows**
- **Historical traffic analysis**
- **Explore Flows** for interactive investigations
- **Interface Tracking** for per-interface visibility
- **Flow Taggers** for contextual traffic enrichment
- **Host and application traffic analysis**
- **Operational traffic-correlation workflows**
- **Preservation of underlying telemetry perspectives where configured**

Trisul can preserve original telemetry records while also supporting correlated operational views depending on deployment requirements.

These capabilities help operators analyze conversations, investigate historical communications, normalize overlapping telemetry, and support operational or security workflows.

Trisul primarily focuses on scalable traffic analytics and operational visibility rather than payload-only forensic workflows.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-and-carrier-monitoring

---

## Related terms

- [Flow](/glossary/flow)
- [Flow timeout](/glossary/flow-timeout)
- [Flow Tagger](/glossary/flow-tagger)
- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [Flow sampling](/glossary/flow-sampling)
- [Flow legs](/glossary/flow-legs)
- [Network security monitoring](/glossary/network-security-monitoring)

---

## Frequently asked questions

### Why does flow stitching become difficult in asymmetric routing environments?

Flow stitching generally works best when both traffic directions are visible within the same telemetry-analysis workflow. In asymmetric routing environments, the forward and return paths may traverse different exporters, interfaces, or collectors, making directional correlation more difficult and potentially reducing stitching accuracy.

### What is the difference between flow stitching and flow deduplication?

Flow stitching correlates related directional flow records into a conversation-oriented view, while flow deduplication removes overlapping telemetry generated when multiple exporters observe the same communication path. The two workflows solve different telemetry-correlation problems and may be used together in multi-device monitoring environments.

### Does flow stitching affect traffic accounting?

Flow stitching may improve operational readability by combining directional traffic into a conversation-oriented representation. However, accurate traffic accounting also depends on exporter placement, deduplication workflows, sampling behavior, and telemetry completeness across the monitoring environment.

### Can flow stitching work across NAT boundaries?

NAT environments complicate stitching because addresses and ports may change across translation boundaries. Some platforms support NAT-aware correlation workflows that use timestamps, ports, interface context, or heuristic matching to associate related telemetry before and after translation.

### How does Trisul support flow-stitching workflows?

Trisul supports flow-stitching and correlation workflows through Flow Legs Correlation, MergeMultipleSources configuration options, NAT-aware telemetry correlation, historical traffic analysis, and operational visibility workflows for multi-device environments.