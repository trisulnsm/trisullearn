---
title: What is hybrid flow monitoring?
description: Hybrid flow monitoring combines flow-based monitoring (NetFlow, sFlow, IPFIX) with full packet capture or enriched metadata to provide scalable visibility at high speeds while retaining deep packet-level detail for security investigations.
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
        "text": "Hybrid flow monitoring combines flow-based monitoring (NetFlow, sFlow, IPFIX) for scalable, high-speed traffic analysis with full packet capture or enriched metadata for deep forensic investigation. This approach provides comprehensive visibility across on-premises, hybrid, and multi-cloud environments without the resource overhead of capturing all packets."
      }
    },
    {
      "@type": "Question",
      "name": "Why combine flow monitoring with packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring scales well at gigabit speeds and answers 'what' and 'where' but lacks packet-level detail. Packet capture provides full packet content needed to answer 'why' but requires significant storage and processing. Hybrid monitoring uses flow data for baseline visibility and anomaly detection, then captures packets only when needed for investigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is enriched flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enriched flow monitoring adds application-layer metadata (DNS queries, HTTP requests, SSL handshakes) to traditional flow records. Metadata is extracted from network events without storing full packets, providing significant data reduction while maintaining security fidelity. This enables threat detection, incident response, and forensics with reduced storage costs."
      }
    },
    {
      "@type": "Question",
      "name": "How does hybrid monitoring work across hybrid cloud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hybrid monitoring normalizes flow logs from different sources (on-prem NetFlow, cloud VPC flow logs, cloud NSG logs) into a common format. Consistent unique identifiers across all logs enable analysts to stitch transactions and correlate activity across on-premises, hybrid, and multi-cloud environments from a single visibility layer."
      }
    }
  ]
};

# What is hybrid flow monitoring?

Hybrid flow monitoring combines flow-based monitoring (NetFlow, sFlow, IPFIX) for scalable visibility with full packet capture or enriched metadata for deep forensic investigation. This approach provides comprehensive network visibility across on-premises, hybrid, and multi-cloud environments without the resource overhead of capturing all packets.

---

## How it works

Flow exporters on routers and switches aggregate traffic into flow records showing source/destination IPs, ports, protocols, and byte counts. When anomalies are detected or investigations are needed, packet capture is triggered selectively. Enriched flows add application-layer metadata (DNS, HTTP, SSL) without full packet storage, reducing data volume while maintaining security fidelity.

---

## In network operations

- **NOC:** Use flow-based monitoring for real-time bandwidth analysis and capacity planning across all environments.
- **SOC:** Trigger packet capture when flow data indicates suspicious activity, enabling deep forensic investigation without storing all packets.
- **Cloud Operations:** Normalize flow logs from different sources into a single view for unified visibility.

---

## Monitoring approaches comparison

| Approach | Scalability | Detail Level | Storage | Best For |
|---|---|---|---|---|
| Flow-only (NetFlow) | High | Metadata only | Low | Bandwidth monitoring, capacity planning |
| Packet capture only | Low | Full packet content | Very High | Deep forensics, targeted troubleshooting |
| Hybrid (flow + packet) | High | Selective full detail | Moderate | Production networks requiring both visibility and forensics |
| Enriched flows | High | Application metadata | Low-Moderate | Security monitoring with reduced data volume |

---

## Key benefits

- **Scalability:** Flow monitoring scales to gigabit speeds without packet loss
- **Deep visibility:** Packet capture provides full context when needed for investigation
- **Cost efficiency:** Enriched metadata reduces data volume while maintaining detection fidelity
- **Unified visibility:** Normalized flow data across on-premises, hybrid, and multi-cloud environments
- **Faster investigations:** Consistent identifiers across multiple logs for easier correlation

---

## How Trisul handles it

Trisul uses flow-based monitoring that collects NetFlow, J-Flow, sFlow, and IPFIX data, providing scalable visibility without requiring wire-speed packet capture. Trisul enriches flow records with BGP attributes including ASN, enabling geographic and AS-based traffic analysis. Flow processing occurs in real time with minimal latency. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is packet capture?](/glossary/packet-capture)
- [What is network observability?](/glossary/network-observability)
- [What is hybrid network monitoring?](/glossary/hybrid-network-monitoring)

---

## Frequently asked questions

### What is hybrid flow monitoring?

Hybrid flow monitoring combines flow-based monitoring (NetFlow, sFlow, IPFIX) for scalable, high-speed traffic analysis with full packet capture or enriched metadata for deep forensic investigation. This approach provides comprehensive visibility across on-premises, hybrid, and multi-cloud environments without the resource overhead of capturing all packets.

### Why combine flow monitoring with packet capture?

Flow monitoring scales well at gigabit speeds and answers 'what' and 'where' but lacks packet-level detail. Packet capture provides full packet content needed to answer 'why' but requires significant storage and processing. Hybrid monitoring uses flow data for baseline visibility and anomaly detection, then captures packets only when needed for investigation.

### What is enriched flow monitoring?

Enriched flow monitoring adds application-layer metadata (DNS queries, HTTP requests, SSL handshakes) to traditional flow records. Metadata is extracted from network events without storing full packets, providing significant data reduction while maintaining security fidelity. This enables threat detection, incident response, and forensics with reduced storage costs.

### How does hybrid monitoring work across hybrid cloud?

Hybrid monitoring normalizes flow logs from different sources (on-prem NetFlow, cloud VPC flow logs, cloud NSG logs) into a common format. Consistent unique identifiers across all logs enable analysts to stitch transactions and correlate activity across on-premises, hybrid, and multi-cloud environments from a single visibility layer.