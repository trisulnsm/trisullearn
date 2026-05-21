---
title: What is NetFlow Collector?
description: A NetFlow Collector receives, decodes, and stores flow records exported by NetFlow exporters. It aggregates flow data, provides analysis, and generates reports for bandwidth monitoring, traffic analysis, and security monitoring.
sidebar_label: NetFlow collector
sidebar_position: 70
slug: /glossary/netflow-collector
keywords:
  - NetFlow collector
  - flow collector
  - flow aggregation
  - NetFlow analysis
  - traffic monitoring
  - flow storage
  - bandwidth analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a NetFlow Collector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A NetFlow Collector receives, decodes, and stores flow records exported by NetFlow exporters. It aggregates flow data from multiple routers and switches, provides analysis, and generates reports for bandwidth monitoring, traffic analysis, and security monitoring. The collector listens on UDP port 2055 or 9995 for incoming NetFlow data."
      }
    },
    {
      "@type": "Question",
      "name": "How does a NetFlow Collector work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow Collector listens on a UDP port for incoming flow records. When records arrive, the collector decodes them based on NetFlow version and template. Data is stored in databases or files for analysis. Aggregation across interfaces, applications, and hosts provides traffic insights and reports."
      }
    },
    {
      "@type": "Question",
      "name": "What are the requirements for a NetFlow Collector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow Collector requires network connectivity to receive flows, UDP port configuration for listening, database or file storage for flow records, CPU and memory for processing incoming flows, and disk space for storage. Collector capacity must match flow volume from all exporters."
      }
    },
    {
      "@type": "Question",
      "name": "What can a NetFlow Collector do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow Collector provides bandwidth utilization tracking, top talkers identification, traffic pattern analysis, application usage reports, anomaly detection, capacity planning reports, billing and chargeback reports, and security monitoring through flow analysis. It enables comprehensive network visibility without packet capture."
      }
    }
  ]
};

# What is NetFlow Collector?

A NetFlow Collector receives, decodes, and stores flow records exported by NetFlow exporters. It aggregates flow data, provides analysis, and generates reports for bandwidth monitoring, traffic analysis, and security monitoring. The collector listens on UDP port 2055 or 9995 for incoming NetFlow data.

---

## How NetFlow Collector works

NetFlow Collector listens on a UDP port for incoming flow records. When records arrive, the collector decodes them based on NetFlow version and template. NetFlow v9 and IPFIX require template caching to decode variable-format records. Data is stored in databases or files for analysis.

---

## NetFlow Collector in network operations

In the NOC, use the NetFlow Collector to aggregate flow data from all routers and switches. Bandwidth utilization reports show link usage over time. Top talkers reports identify hosts consuming most bandwidth. Security teams analyze flow data for anomalies and threats.

Collector capacity must match flow volume. If flow rate exceeds collector capacity, data is dropped. Monitor collector CPU, memory, and storage to ensure capacity is adequate. Scale collectors when flow volume increases.

---

## Collector capabilities

| Capability | Description |
|---|---|
| Flow aggregation | Aggregate flows by interface, host, application |
| Bandwidth tracking | Track utilization over time |
| Top talkers | Identify high-traffic hosts |
| Anomaly detection | Detect unusual traffic patterns |
| Reporting | Generate utilization and capacity reports |
| Storage | Store flow data for historical analysis |

---

## What makes NetFlow Collector work in practice

Template caching is essential for NetFlow v9 and IPFIX. The collector must cache templates to decode data records. If templates are lost or expired, data cannot be decoded until new templates arrive. Template resend intervals must be configured correctly on exporters.

Storage capacity must support retention requirements. Flow data volume depends on network size and flow rate. High-speed networks generate millions of flows per hour. Storage must hold data for the required retention period. Archiving old data to cheaper storage extends retention.

---

## How Trisul handles NetFlow Collector

Trisul acts as a NetFlow Collector receiving NetFlow v5, NetFlow v9, J-Flow, sFlow, and IPFIX data. Trisul decodes flow records using template caching for v9 and IPFIX. Flow data is stored in backend databases enabling historical analysis and reporting. Login as user to view dashboards, charts, and reports. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is NetFlow?](/glossary/netflow)
- [What is IPFIX?](/glossary/ipfix)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is bandwidth monitoring?](/glossary/bandwidth-monitoring)
- [What is traffic analysis?](/glossary/traffic-analysis)

---

## Frequently asked questions

### What is a NetFlow Collector?

A NetFlow Collector receives, decodes, and stores flow records exported by NetFlow exporters. It aggregates flow data from multiple routers and switches, provides analysis, and generates reports for bandwidth monitoring, traffic analysis, and security monitoring. The collector listens on UDP port 2055 or 9995 for incoming NetFlow data.

### How does a NetFlow Collector work?

NetFlow Collector listens on a UDP port for incoming flow records. When records arrive, the collector decodes them based on NetFlow version and template. Data is stored in databases or files for analysis. Aggregation across interfaces, applications, and hosts provides traffic insights and reports.

### What are the requirements for a NetFlow Collector?

NetFlow Collector requires network connectivity to receive flows, UDP port configuration for listening, database or file storage for flow records, CPU and memory for processing incoming flows, and disk space for storage. Collector capacity must match flow volume from all exporters.

### What can a NetFlow Collector do?

NetFlow Collector provides bandwidth utilization tracking, top talkers identification, traffic pattern analysis, application usage reports, anomaly detection, capacity planning reports, billing and chargeback reports, and security monitoring through flow analysis. It enables comprehensive network visibility without packet capture.