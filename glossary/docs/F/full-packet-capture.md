---
title: What is full packet capture?
description: Full packet capture (PCAP) is the practice of recording complete network packets, including headers and payload where visible, for troubleshooting, traffic analysis, forensic investigation, and security monitoring.
sidebar_label: Full packet capture
sidebar_position: 1
slug: /glossary/full-packet-capture
keywords:
  - full packet capture
  - pcap
  - network packet capture
  - packet forensics
  - raw packet capture
  - network forensics
  - packet analysis
  - deep packet inspection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much storage does full packet capture require?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Storage requirements depend on link speed, utilization, traffic composition, retention goals, and capture policies. High-speed links can generate very large volumes of data, so organizations commonly use filtering, tiered storage, selective retention, or rolling capture windows to manage storage consumption."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between full packet capture and NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow and IPFIX summarize communications using flow metadata such as addresses, ports, byte counts, and timestamps. Full packet capture preserves the actual packets observed on the network, enabling deeper protocol analysis and packet-level investigation. The two approaches are complementary and are often used together."
      }
    },
    {
      "@type": "Question",
      "name": "Does full packet capture work with encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packet capture records encrypted traffic exactly as it appears on the wire. While encrypted payloads remain unreadable without decryption capabilities or session keys, analysts can still observe metadata such as addresses, protocols, TLS handshakes, certificates, timing, and traffic behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Why is packet loss a concern in PCAP deployments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dropped packets reduce investigative accuracy because the retained capture no longer reflects the complete communication sequence. High-speed environments require careful capture architecture, storage planning, and monitoring to minimize packet loss during sustained traffic loads."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support full packet capture workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports full packet capture workflows through packet recording, indexed traffic analysis, Explore Flows investigations, historical querying, PF_RING integration, and packet-to-flow correlation workflows for operational troubleshooting and incident investigation."
      }
    }
  ]
};

# What is full packet capture?

Full packet capture (PCAP) is the practice of recording complete network packets, including headers and payload where visible, for troubleshooting, traffic analysis, forensic investigation, and security monitoring.

Unlike flow telemetry, which summarizes traffic into metadata records, full packet capture preserves the actual observed packets from the network.

Packet capture is commonly used for:
- Incident investigation
- Network forensics
- Application troubleshooting
- Protocol analysis
- Threat hunting
- Security monitoring
- Historical traffic reconstruction
- Operational troubleshooting

Full packet capture is widely associated with:
- PCAP and PCAPNG file formats
- Network security monitoring
- Protocol analyzers
- Deep packet inspection workflows
- Historical traffic analysis

Trisul supports full packet capture and indexed packet-analysis workflows for operational and security investigations.

---

## How full packet capture works

Packet-capture systems observe network traffic from:
- Network TAPs
- SPAN or mirror ports
- Virtual taps
- Inline capture devices
- Software capture interfaces

Captured packets are written to storage in formats such as:
- PCAP
- PCAPNG

Typical workflow:

1. **Traffic observation** → Packets are mirrored or intercepted
2. **Packet capture** → Raw packets are written to storage
3. **Timestamping** → Packets are associated with capture timestamps
4. **Indexing and metadata generation** → Systems build searchable references
5. **Historical analysis** → Analysts retrieve and inspect packets later

Captured visibility may include:
- Ethernet headers
- IP headers
- TCP and UDP metadata
- Protocol exchanges
- DNS activity
- TLS handshakes
- Application-layer payloads where visible

The exact visibility depends on:
- Encryption usage
- Capture location
- Network architecture
- Storage policies
- Packet-loss conditions

At higher traffic rates, specialized capture frameworks may be used to improve sustained capture performance and reduce packet loss.

![](./images/full-packet-capture.png)

---

## Full packet capture in network operations

Full packet capture is widely used across operational and security environments.

### SOC operations

Security teams use PCAP for:
- Incident confirmation
- Malware investigations
- Threat hunting
- Command-and-control analysis
- Data-exfiltration investigations
- Historical communication reconstruction

Flow telemetry may indicate:
- Which systems communicated
- When communication occurred
- How much traffic was exchanged

Packet capture can provide additional protocol-level evidence and investigative detail where traffic visibility is available.

### NOC operations

Network operations teams use packet capture for:
- Application troubleshooting
- TCP analysis
- TLS troubleshooting
- Protocol debugging
- Latency investigations
- Root-cause analysis

Packet-level visibility helps operators investigate:
- Retransmissions
- Connection failures
- Protocol errors
- Session behavior
- Handshake failures

### Compliance and investigative workflows

Organizations may also use PCAP for:
- Audit investigations
- Historical analysis
- Regulatory review
- Internal investigations
- Traffic reconstruction

The operational value depends heavily on:
- Capture completeness
- Retention duration
- Storage scalability
- Search performance
- Time synchronization

---

## Full packet capture vs NetFlow

| Dimension | Full packet capture | NetFlow / IPFIX |
|---|---|---|
| Primary visibility | Raw packets and protocol exchanges | Flow metadata and traffic summaries |
| Investigative depth | Packet-level analysis | Conversation-level visibility |
| Storage requirements | High | Relatively low |
| Retention duration | Often shorter due to storage cost | Often longer |
| Payload visibility | Possible where traffic is not encrypted | No payload visibility |
| Common use case | Forensics and troubleshooting | Trending and operational analytics |

The two approaches are complementary and commonly used together in mature monitoring environments.

---

## Encrypted traffic and packet capture

Packet capture records encrypted traffic exactly as it appears on the network.

Even when payloads are encrypted, analysts may still observe:
- Addresses
- Ports
- Protocol metadata
- TLS certificates
- Handshake behavior
- Session timing
- Traffic patterns

Payload inspection generally requires:
- TLS interception infrastructure
- Session keys
- Endpoint-level visibility
- Decryption workflows

Encryption therefore reduces payload visibility but does not eliminate traffic-analysis value entirely.

---

## Operational considerations

Full packet-capture deployments commonly face operational considerations including:
- Storage scalability
- Packet-loss prevention
- Capture-interface limitations
- Search performance
- Historical retention
- High-speed traffic handling
- Encryption visibility
- Distributed monitoring architectures

Operational effectiveness depends heavily on:
- Capture completeness
- Retention planning
- Index quality
- Monitoring placement
- Timestamp accuracy
- Storage architecture

Packet loss is particularly important because:
- Missing packets reduce investigative confidence
- Incomplete captures may distort timelines
- Dropped packets weaken protocol reconstruction

Organizations commonly improve PCAP operations through:
- Tiered storage architectures
- Selective retention policies
- Indexed packet retrieval
- Centralized analysis workflows
- High-performance capture frameworks
- Capture filtering strategies

---

## How Trisul handles full packet capture

Trisul supports full packet capture and indexed traffic-analysis workflows for operational troubleshooting and security investigations.

Relevant capabilities include:

- **Packet recording and historical retention**
- **Indexed packet retrieval workflows**
- **Explore Flows** for packet-to-flow investigation
- **Flow Taggers** for contextual telemetry enrichment
- **Historical traffic analysis**
- **PF_RING integration for high-speed capture workflows**
- **Packet and flow correlation**
- **Operational dashboards and drill-down workflows**
- **NetFlow, IPFIX, sFlow, and packet-derived telemetry support**
- **Traffic reconstruction and investigation workflows**

Trisul can help operators:
- Investigate historical communications
- Correlate packets with flows
- Troubleshoot protocol behavior
- Analyze suspicious activity
- Support forensic investigations

Capture policies and storage workflows can also be tuned to balance:
- Retention duration
- Investigative fidelity
- Storage efficiency
- Operational scalability

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring

---

## Related terms

- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [Flow tagger](/glossary/flow-tagger)
- [Retro analysis](/glossary/retro-analysis)
- [Network security monitoring](/glossary/network-security-monitoring)
- [Deep packet inspection](/glossary/dpi)
- [sFlow](/glossary/sflow)
- [Flow tracker](/glossary/flow-tracker)

---

## Frequently asked questions

### How much storage does full packet capture require?

Storage requirements depend on link speed, utilization, traffic composition, retention goals, and capture policies. High-speed links can generate very large volumes of data, so organizations commonly use filtering, tiered storage, selective retention, or rolling capture windows to manage storage consumption.

### What is the difference between full packet capture and NetFlow?

NetFlow and IPFIX summarize communications using flow metadata such as addresses, ports, byte counts, and timestamps. Full packet capture preserves the actual packets observed on the network, enabling deeper protocol analysis and packet-level investigation. The two approaches are complementary and are often used together.

### Does full packet capture work with encrypted traffic?

Packet capture records encrypted traffic exactly as it appears on the wire. While encrypted payloads remain unreadable without decryption capabilities or session keys, analysts can still observe metadata such as addresses, protocols, TLS handshakes, certificates, timing, and traffic behavior.

### Why is packet loss a concern in PCAP deployments?

Dropped packets reduce investigative accuracy because the retained capture no longer reflects the complete communication sequence. High-speed environments require careful capture architecture, storage planning, and monitoring to minimize packet loss during sustained traffic loads.

### How does Trisul support full packet capture workflows?

Trisul supports full packet capture workflows through packet recording, indexed traffic analysis, Explore Flows investigations, historical querying, PF_RING integration, and packet-to-flow correlation workflows for operational troubleshooting and incident investigation.