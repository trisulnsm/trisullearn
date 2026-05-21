---
title: What is hybrid flow monitoring?
description: Hybrid flow monitoring combines flow-based monitoring with full packet capture or enriched metadata to provide scalable visibility at high speeds while retaining deep packet-level detail for security investigations.
sidebar_label: Hybrid flow monitoring
sidebar_position: 48
slug: /glossary/hybrid-flow-monitoring
keywords:
  - hybrid flow monitoring
  - hybrid network monitoring
  - flow packet monitoring
  - enriched flows
  - NetFlow packet capture
  - network observability
  - full fidelity telemetry
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is hybrid flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hybrid flow monitoring combines flow-based monitoring with flow data for scalable, high-speed traffic analysis and full packet capture or enriched metadata for deep forensic investigation. This approach provides comprehensive visibility across on-premises, hybrid, and multi-cloud environments without the resource overhead of capturing all packets."
      }
    },
    {
      "@type": "Question",
      "name": "Why combine flow monitoring with packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring scales well at gigabit speeds and answers what and where but lacks packet-level detail. Packet capture provides full packet content needed to answer why but requires significant storage and processing. Hybrid monitoring uses flow data for baseline visibility and anomaly detection, then captures packets only when needed for investigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is enriched flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enriched flow monitoring adds application-layer metadata including DNS queries, HTTP requests, and SSL handshakes to traditional flow records. Metadata is extracted from network events without storing full packets, providing significant data reduction while maintaining security fidelity. This enables threat detection, incident response, and forensics with reduced storage costs."
      }
    },
    {
      "@type": "Question",
      "name": "How does hybrid monitoring work across hybrid cloud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hybrid monitoring normalizes flow logs from different sources including on-prem NetFlow, cloud VPC flow logs, and cloud NSG logs into a common format. Consistent unique identifiers across all logs enable analysts to stitch transactions and correlate activity across on-premises, hybrid, and multi-cloud environments from a single visibility layer."
      }
    }
  ]
};

# What is hybrid flow monitoring?

Hybrid flow monitoring combines flow-based monitoring for scalable visibility with full packet capture or enriched metadata for deep forensic investigation. This approach provides comprehensive network visibility across on-premises, hybrid, and multi-cloud environments without the resource overhead of capturing all packets.

---

## How hybrid flow monitoring works

Flow exporters on routers and switches aggregate traffic into flow records showing source and destination IPs, ports, protocols, and byte counts. When anomalies are detected or investigations are needed, packet capture is triggered selectively. Enriched flows add application-layer metadata including DNS, HTTP, and SSL without full packet storage, reducing data volume while maintaining security fidelity.

---

## Hybrid flow monitoring in network operations

In the NOC, use flow-based monitoring for real-time bandwidth analysis and capacity planning across all environments. Security teams trigger packet capture when flow data indicates suspicious activity, enabling deep forensic investigation without storing all packets. Cloud operations normalize flow logs from different sources into a single view for unified visibility.

---

## Monitoring approaches comparison

| Approach | Scalability | Detail level | Storage | Best for |
|---|---|---|---|---|
| Flow-only with NetFlow | High | Metadata only | Low | Bandwidth monitoring and capacity planning |
| Packet capture only | Low | Full packet content | Very high | Deep forensics and targeted troubleshooting |
| Hybrid with flow and packet | High | Selective full detail | Moderate | Production networks requiring both visibility and forensics |
| Enriched flows | High | Application metadata | Low to moderate | Security monitoring with reduced data volume |

---

## What makes hybrid flow monitoring work in practice

The key is using flow data as the always-on baseline and triggering packet capture only when needed. Flow exporters run on every router and switch, so coverage is complete. Packet capture targets specific conversations, interfaces, or time windows. This reduces storage by 60 to 80 percent compared to continuous capture while retaining the ability to investigate any alert.

Normalization across environments is the second challenge. On-prem NetFlow, cloud VPC flow logs, and cloud NSG logs have different field names and formats. A common schema maps each source to the same set of fields. With consistent identifiers, analysts can pivot from an on-prem alert to cloud traffic without switching tools.

---

## How Trisul handles hybrid flow monitoring

Trisul uses flow-based monitoring that collects NetFlow, J-Flow, sFlow, and IPFIX data, providing scalable visibility without requiring wire-speed packet capture. Trisul enriches flow records with BGP attributes including ASN, enabling geographic and AS-based traffic analysis. Flow processing occurs in real time with minimal latency. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/docs/glossary/flow-monitoring)
- [What is packet capture?](/docs/glossary/packet-capture)
- [What is network observability?](/docs/glossary/network-observability)
- [What is hybrid network monitoring?](/docs/glossary/hybrid-network-monitoring)

---

## Frequently asked questions

### What is hybrid flow monitoring?

Hybrid flow monitoring combines flow-based monitoring with flow data for scalable, high-speed traffic analysis and full packet capture or enriched metadata for deep forensic investigation. This approach provides comprehensive visibility across on-premises, hybrid, and multi-cloud environments without the resource overhead of capturing all packets.

### Why combine flow monitoring with packet capture?

Flow monitoring scales well at gigabit speeds and answers what and where but lacks packet-level detail. Packet capture provides full packet content needed to answer why but requires significant storage and processing. Hybrid monitoring uses flow data for baseline visibility and anomaly detection, then captures packets only when needed for investigation.

### What is enriched flow monitoring?

Enriched flow monitoring adds application-layer metadata including DNS queries, HTTP requests, and SSL handshakes to traditional flow records. Metadata is extracted from network events without storing full packets, providing significant data reduction while maintaining security fidelity. This enables threat detection, incident response, and forensics with reduced storage costs.

### How does hybrid monitoring work across hybrid cloud?

Hybrid monitoring normalizes flow logs from different sources including on-prem NetFlow, cloud VPC flow logs, and cloud NSG logs into a common format. Consistent unique identifiers across all logs enable analysts to stitch transactions and correlate activity across on-premises, hybrid, and multi-cloud environments from a single visibility layer.