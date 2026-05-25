---
title: What is a flow leg?
description: A flow leg is an individual flow-telemetry record representing a network conversation as observed and exported from a specific device, interface, or observation point within the traffic path.
sidebar_label: Flow legs
sidebar_position: 8
slug: /glossary/flow-legs
keywords:
  - flow legs
  - flow duplication
  - netflow legs
  - flow deduplication
  - multi-device flow export
  - flow leg correlation
  - duplicate flow records
  - telemetry correlation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do flow legs cause over-counting in traffic reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When multiple exporters observe and export telemetry for the same communication path, collectors may receive multiple flow legs representing the same traffic. Without correlation or deduplication workflows, traffic volume may be counted multiple times, especially in large multi-hop environments."
      }
    },
    {
      "@type": "Question",
      "name": "Why do some platforms preserve flow legs separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preserving individual flow legs maintains per-device, per-interface, and path-level context that may be useful for troubleshooting, topology analysis, congestion investigations, and security workflows. Merging records may simplify reporting but can reduce operational visibility into how traffic moved through the network."
      }
    },
    {
      "@type": "Question",
      "name": "What is NAT leg correlation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAT leg correlation is the process of associating flow records observed before and after network address translation. Because translated traffic changes addresses or ports, exact tuple matching may not work, so correlation workflows may use timestamps, ports, interface context, or heuristic matching to associate related telemetry."
      }
    },
    {
      "@type": "Question",
      "name": "How are flow legs different from flow stitching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow legs represent multiple observations of the same communication across different exporters or interfaces, while flow stitching combines separate directional flow records into a bidirectional conversation view. The two workflows solve different telemetry-correlation problems."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support flow-leg workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports flow-leg workflows through Flow Legs Correlation, MergeMultipleSources options, NAT-aware correlation workflows, historical traffic analysis, and operational traffic-visibility capabilities for multi-exporter environments."
      }
    }
  ]
};

# What is a flow leg?

**A flow leg** is an individual flow-telemetry record representing a network conversation as observed and exported from a specific device, interface, or observation point within the traffic path.

When traffic traverses multiple monitored devices:
- Routers
- Switches
- Firewalls
- Monitoring probes

each exporter may generate its own telemetry record for the same communication.

These individual records are called **flow legs**.

Flow legs commonly differ in:
- Interface metadata
- Export timestamps
- Observation points
- Routing perspective
- Sampling behavior
- Exporter metadata

Although the records describe the same communication, each leg reflects the perspective of the exporter that observed it.

Flow legs are a natural consequence of:
- Multi-hop telemetry collection
- Distributed monitoring architectures
- Overlapping exporter deployment
- Multi-interface visibility
- Packet-derived and exporter-derived telemetry coexistence

Trisul supports flow-leg correlation and operational visibility workflows for overlapping telemetry environments.

---

## How flow legs arise

A communication session may traverse several monitored devices before reaching its destination.

For example:
- An edge router observes the traffic
- A core router exports the same communication
- A peering router exports another view
- A monitoring probe generates packet-derived telemetry

The collector therefore receives multiple records describing the same traffic path.

Each flow leg is valid from its local observation point.

Differences between legs may include:
- Ingress and egress interfaces
- Timestamps
- Byte counters
- Sampling ratios
- DSCP markings
- NAT-translated addresses
- Tunnel metadata
- Exporter identifiers

These differences make correlation more complex than simple duplicate removal.

![](./images/flow-legs.png)

---

## Flow legs in network operations

Flow legs are common in:
- ISP and carrier environments
- Enterprise backbone monitoring
- Datacenter telemetry
- Cloud-network visibility
- Distributed telemetry architectures
- Security-monitoring deployments

### NOC operations

Network operations teams use flow legs for:
- Interface troubleshooting
- Congestion investigations
- Traffic-path analysis
- Topology visibility
- Per-device traffic analysis
- Routing-behavior investigations

Preserving individual legs helps operators understand:
- Which interfaces carried traffic
- Which devices observed communications
- How traffic traversed the network
- Where congestion or asymmetry appeared

### SOC operations

Security teams may use flow legs for:
- Lateral movement visibility
- Multi-hop communication analysis
- Path reconstruction
- NAT investigations
- Traffic-correlation workflows
- Historical investigations

Multiple telemetry perspectives may improve:
- Investigation accuracy
- Path visibility
- Timeline reconstruction
- Scope analysis

The operational value depends on telemetry placement and correlation quality.

---

## Flow legs and over-counting

Flow legs may create reporting challenges because multiple records can represent the same communication.

Without normalization or correlation:
- Traffic totals may be overcounted
- Utilization reports may become inflated
- Capacity metrics may become misleading
- Dashboards may contain duplicate visibility

The operational impact increases in environments with:
- Many exporters
- Multi-hop traffic paths
- Overlapping visibility zones
- Distributed telemetry architectures

Some platforms therefore support:
- Deduplication
- Correlation workflows
- Grouped visualization
- Normalized reporting

However, aggressive merging may remove:
- Per-interface visibility
- Device-specific context
- Investigative detail
- Path-level information

Operational workflows often balance:
- Reporting simplicity
- Investigative fidelity
- Topology visibility
- Historical accuracy

---

## Flow legs vs flow stitching

| Dimension | Flow legs | Flow stitching |
|---|---|---|
| Primary issue | Multiple telemetry observations of the same communication | Separate directional records for opposite traffic directions |
| Cause | Multi-exporter or overlapping visibility | Unidirectional export behavior |
| Operational goal | Correlate overlapping telemetry | Create bidirectional conversation visibility |
| Visibility impact | May involve preserving path context | Usually preserves conversation semantics |
| Common environments | Multi-hop monitoring architectures | General flow-analysis workflows |

The two workflows often operate together in large-scale telemetry-analysis systems.

---

## NAT and flow-leg correlation

NAT environments complicate flow-leg correlation because:
- Source addresses change
- Ports may be translated
- Internal and external views differ
- Exact tuple matching may fail

Correlation workflows may therefore use:
- Timestamp proximity
- Port heuristics
- Interface context
- Traffic directionality
- Session timing
- Exporter relationships

The exact correlation logic depends on:
- Telemetry quality
- NAT behavior
- Export timing
- Monitoring placement
- Platform implementation

NAT-aware correlation improves:
- Attribution accuracy
- Historical investigations
- Path reconstruction
- Security visibility

---

## Operational considerations

Flow-leg workflows commonly face operational considerations including:
- Multi-path routing
- Timestamp drift
- Sampling inconsistencies
- Exporter timing variation
- High-cardinality telemetry
- Correlation complexity
- Retention scaling
- Topology asymmetry

Perfect correlation may not always be possible because:
- Exporters observe traffic differently
- Sampling may alter counters
- Timing varies between devices
- NAT changes tuple visibility
- Packet loss may affect telemetry completeness

Organizations commonly choose between:
- Preserving raw telemetry legs
- Creating correlated views
- Using hybrid workflows

depending on operational priorities.

---

## How Trisul handles flow legs

Trisul supports configurable flow-leg correlation and multi-source telemetry workflows for overlapping monitoring environments.

Relevant capabilities include:

- **Flow Legs Correlation** workflows
- **MergeMultipleSources** configuration options
- **NAT-aware correlation workflows**
- **Historical traffic analysis**
- **Explore Flows** for interactive traffic investigations
- **Interface Tracking** for per-interface visibility
- **Flow Taggers** for contextual traffic enrichment
- **Host and application traffic analysis**
- **Operational traffic-correlation workflows**
- **Preservation of underlying telemetry perspectives where configured**

These capabilities help operators investigate traffic paths, reduce duplicate-telemetry confusion, preserve device-level visibility, analyze NAT environments, and support operational or security investigations.

Trisul emphasizes operational flexibility by supporting both correlated and original telemetry workflows depending on deployment requirements.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-and-carrier-monitoring

---

## Related terms

- [Flow](/glossary/flow)
- [Flow stitching](/glossary/flow-stitching)
- [Flow monitoring](/glossary/flow-monitoring)
- [NetFlow](/glossary/netflow)
- [Flow sampling](/glossary/flow-sampling)
- [Flow timeout](/glossary/flow-timeout)
- [Flow deduplication](/glossary/flow-deduplication)
- [NAT](/glossary/nat)

---

## Frequently asked questions

### How do flow legs cause over-counting in traffic reports?

When multiple exporters observe and export telemetry for the same communication path, collectors may receive multiple flow legs representing the same traffic. Without correlation or deduplication workflows, traffic volume may be counted multiple times, especially in large multi-hop environments.

### Why do some platforms preserve flow legs separately?

Preserving individual flow legs maintains per-device, per-interface, and path-level context that may be useful for troubleshooting, topology analysis, congestion investigations, and security workflows. Merging records may simplify reporting but can reduce operational visibility into how traffic moved through the network.

### What is NAT leg correlation?

NAT leg correlation is the process of associating flow records observed before and after network address translation. Because translated traffic changes addresses or ports, exact tuple matching may not work, so correlation workflows may use timestamps, ports, interface context, or heuristic matching to associate related telemetry.

### How are flow legs different from flow stitching?

Flow legs represent multiple observations of the same communication across different exporters or interfaces, while flow stitching combines separate directional flow records into a bidirectional conversation view. The two workflows solve different telemetry-correlation problems.

### How does Trisul support flow-leg workflows?

Trisul supports flow-leg workflows through Flow Legs Correlation, MergeMultipleSources options, NAT-aware correlation workflows, historical traffic analysis, and operational traffic-visibility capabilities for multi-exporter environments.