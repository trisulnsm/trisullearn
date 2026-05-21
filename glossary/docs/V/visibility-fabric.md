---
title: What is Visibility Fabric?
description: Visibility Fabric is a network architecture that aggregates traffic from multiple observation points (TAPs, SPAN ports, virtual TAPs) and distributes it to monitoring tools. It provides comprehensive network visibility through centralized traffic aggregation.
sidebar_label: Visibility Fabric
sidebar_position: 119
slug: /glossary/visibility-fabric
keywords:
  - visibility fabric
  - network visibility
  - traffic aggregation
  - observation fabric
  - monitoring fabric
  - network TAP fabric
  - packet broker
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Visibility Fabric?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visibility Fabric is a network architecture that aggregates traffic from multiple observation points (TAPs, SPAN ports, virtual TAPs) and distributes it to monitoring tools. It provides comprehensive network visibility through centralized traffic aggregation. Visibility Fabric eliminates monitoring blind spots."
      }
    },
    {
      "@type": "Question",
      "name": "How does Visibility Fabric work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visibility Fabric collects traffic from observation points through network TAPs, SPAN ports, and virtual TAPs. Packet brokers aggregate, filter, and replicate traffic to monitoring tools. Traffic is distributed based on rules ensuring each tool receives relevant traffic."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Visibility Fabric?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visibility Fabric provides comprehensive visibility eliminating blind spots, centralized management of observation points, efficient tool utilization through traffic filtering and replication, scalability adding observation points without reconfiguration, and reduced complexity through standardized architecture."
      }
    },
    {
      "@type": "Question",
      "name": "What components make up Visibility Fabric?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visibility Fabric components include network TAPs (physical and virtual), SPAN ports, packet brokers for aggregation and filtering, monitoring tools (IDS, NMS, PCAP), and interconnected switching infrastructure. Packet brokers are the core intelligence layer."
      }
    }
  ]
};

# What is Visibility Fabric?

Visibility Fabric is a network architecture that aggregates traffic from multiple observation points (TAPs, SPAN ports, virtual TAPs) and distributes it to monitoring tools. It provides comprehensive network visibility through centralized traffic aggregation. Visibility Fabric eliminates monitoring blind spots.

---

## How Visibility Fabric works

Visibility Fabric collects traffic from observation points through network TAPs, SPAN ports, and virtual TAPs. Packet brokers aggregate traffic from multiple sources. Traffic is filtered, aggregated, and replicated based on rules. Monitoring tools receive relevant traffic.

Traffic distribution ensures each tool receives what it needs. IDS receives security-relevant traffic. PCAP systems receive traffic for retention. NMS receives flow data. Packet brokers optimize tool utilization by eliminating redundant traffic.

---

## Visibility Fabric in network operations

In the NOC, Visibility Fabric provides centralized visibility into distributed network segments. Observation points are managed centrally through the packet broker. Adding new observation points doesn't require reconfiguring monitoring tools.

Security teams use Visibility Fabric to ensure comprehensive coverage. Critical links have TAPs feeding the fabric. Traffic from all critical segments is visible. Security tools receive traffic from across the network.

---

## Visibility Fabric components

| Component | Purpose |
|---|---|
| Network TAPs | Passive observation points |
| SPAN ports | Switch-based observation |
| Virtual TAPs | Virtual machine observation |
| Packet brokers | Aggregation, filtering, replication |
| Monitoring tools | IDS, NMS, PCAP, flow collectors |
| Switching | Interconnects fabric components |

---

## What makes Visibility Fabric work in practice

Packet broker capacity determines fabric scale. Packet brokers must handle aggregate traffic from all observation points. Oversubscription causes packet loss. Capacity must exceed total observation point traffic.

Rule configuration determines traffic distribution. Packet broker rules filter and replicate traffic to tools. Incorrect rules send wrong traffic to tools. Rules must be carefully designed for each tool's requirements.

---

## How Trisul handles Visibility Fabric

Trisul integrates with Visibility Fabric through flow data and packet capture from aggregated observation points. Trisul receives traffic from packet brokers aggregating multiple TAPs and SPAN ports. Trisul's flow monitoring and packet capture work with Visibility Fabric providing comprehensive visibility. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is network TAP?](/glossary/network-tap)
- [What is SPAN port?](/glossary/span-port)
- [What is packet broker?](/glossary/packet-broker)
- [What is observation point?](/glossary/observation-point)
- [What is passive network monitoring?](/glossary/passive-network-monitoring)

---

## Frequently asked questions

### What is Visibility Fabric?

Visibility Fabric is a network architecture that aggregates traffic from multiple observation points (TAPs, SPAN ports, virtual TAPs) and distributes it to monitoring tools. It provides comprehensive network visibility through centralized traffic aggregation. Visibility Fabric eliminates monitoring blind spots.

### How does Visibility Fabric work?

Visibility Fabric collects traffic from observation points through network TAPs, SPAN ports, and virtual TAPs. Packet brokers aggregate, filter, and replicate traffic to monitoring tools. Traffic is distributed based on rules ensuring each tool receives relevant traffic.

### What are the benefits of Visibility Fabric?

Visibility Fabric provides comprehensive visibility eliminating blind spots, centralized management of observation points, efficient tool utilization through traffic filtering and replication, scalability adding observation points without reconfiguration, and reduced complexity through standardized architecture.

### What components make up Visibility Fabric?

Visibility Fabric components include network TAPs (physical and virtual), SPAN ports, packet brokers for aggregation and filtering, monitoring tools (IDS, NMS, PCAP), and interconnected switching infrastructure. Packet brokers are the core intelligence layer.