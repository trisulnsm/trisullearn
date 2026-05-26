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

A **NetFlow Collector** receives, decodes, and stores **flow records exported by NetFlow exporters** on routers and switches. It **aggregates flow data from multiple devices**, provides **analysis**, and generates **reports for bandwidth monitoring, traffic analysis, and security monitoring**. The collector typically listens on **UDP port 2055 or 9995** for incoming records.

---

## How NetFlow Collector works

A NetFlow Collector:

- Listens on a **UDP port** for incoming flow records (NetFlow, sFlow, J‑Flow, IPFIX).  
- **Decodes** each record using the appropriate format or **template** (for v9 and IPFIX).  
- **Stores** records in **databases or files** and **aggregates** them by interface, host, application, or protocol.  

For **NetFlow v9 and IPFIX**, the collector must **cache templates** to decode variable‑format data correctly.

---

## NetFlow Collector in network operations

In the **NOC and security operations**:

- Use the collector as the **central hub** for traffic‑level telemetry.  
- Generate **bandwidth, top‑talker, and application‑usage reports** for operations and security.  
- Implement **anomaly detection and capacity‑planning reports** from the same data.

Capacity planning, storage, and CPU must scale with **flow volume** from all exporters.

---

## NetFlow Collector capabilities

| Capability | Description |
|-----------|-------------|
| Flow aggregation | Group flows by interface, host, app, or service |
| Bandwidth tracking | Monitor utilization over time |
| Top talkers | Identify high‑traffic hosts and services |
| Anomaly detection | Detect traffic patterns deviating from baseline |
| Reporting | Generate utilization, capacity, billing‑style reports |
| Storage | Retain flow data for historical analysis and forensics |

---

## What makes NetFlow Collector work in practice

- **Template caching**: For v9 and IPFIX, the collector must **keep templates up to date**; expired or lost templates make records unreadable until new templates arrive.  
- **Storage and retention**:  
  - High‑speed networks generate **millions of flows per hour**.  
  - Retention must match **compliance and operational needs**, often using **tiered storage** for long‑term data.  
- **Scalability**:  
  - Large environments may use **clustered or distributed collectors** to avoid bottlenecks.

---

## How Trisul handles NetFlow Collector

Trisul acts as a **NetFlow Collector**, receiving **NetFlow v5, NetFlow v9, J‑Flow, sFlow, and IPFIX** data. It:

- Decodes records using **template‑aware parsing**.  
- Stores data in **backend databases** for **historical analysis and reporting**.  
- Provides dashboards, charts, and reports from the aggregated flow data.  

Operators log in to view views and alerts. For sizing and topology guidance, see Trisul documentation at [https://docs.trisul.org/docs/ug/flow/](https://docs.trisul.org/docs/ug/flow/).

---

## Related terms

- [What is NetFlow?](/docs/glossary/netflow)  
- [What is IPFIX?](/docs/glossary/ipfix)  
- [What is flow monitoring?](/docs/glossary/flow-monitoring)  
- [What is bandwidth monitoring?](/docs/glossary/bandwidth-monitoring)  
- [What is traffic analysis?](/docs/glossary/network-traffic-analysis)  

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