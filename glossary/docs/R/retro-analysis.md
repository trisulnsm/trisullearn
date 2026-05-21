---
title: What is retro analysis?
description: Retro analysis applies new detection rules to historical packet capture and flow data after the fact. It enables investigators to determine whether past traffic matched newly discovered threats without requiring continuous inspection.
sidebar_label: Retro analysis
sidebar_position: 92
slug: /glossary/retro-analysis
keywords:
  - retro analysis
  - retrospective analysis
  - historical analysis
  - backward scanning
  - threat hunting
  - pcap retro scan
  - flow retro analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is retro analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retro analysis applies new detection rules to historical packet capture and flow data after the fact. It enables investigators to determine whether past traffic matched newly discovered threats without requiring continuous inspection. Retro analysis matters because threat intelligence often arrives days after an intrusion."
      }
    },
    {
      "@type": "Question",
      "name": "Why is retro analysis important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retro analysis is critical for incident investigation. When a new threat is discovered, retro analysis determines whether hosts communicated with newly-discovered malicious domains before the threat was known. Without retro analysis, you cannot detect past infections from new threats."
      }
    },
    {
      "@type": "Question",
      "name": "How does retro analysis work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retro analysis runs detection logic and flow taggers against stored historical PCAP and flow data after the fact. New threat signatures are applied to archived data. Matching traffic is flagged for investigation. Results show when and how past traffic matched the new threat."
      }
    },
    {
      "@type": "Question",
      "name": "What data does retro analysis scan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retro analysis scans historical packet capture (PCAP) and flow records. PCAP retro analysis examines packet payloads for threat signatures. Flow retro analysis examines flow metadata for indicators of compromise. Both provide retrospective threat detection."
      }
    }
  ]
};

# What is retro analysis?

Retro analysis applies new detection rules to historical packet capture and flow data after the fact. It enables investigators to determine whether past traffic matched newly discovered threats without requiring continuous inspection. Retro analysis matters because threat intelligence often arrives days after an intrusion.

---

## How retro analysis works

Retro analysis runs detection logic and flow taggers against stored historical PCAP and flow data. New threat signatures are applied to archived data. Matching traffic is flagged for investigation. Results show when and how past traffic matched the new threat.

Flow taggers apply custom rules to historical flows. PCAP retro analysis scans packet payloads for threat signatures. Both enable retrospective threat detection without continuous inspection.

---

## Retro analysis in network operations

In the SOC, use retro analysis when new threats are discovered. When threat intelligence reveals a new malicious domain, retro analysis determines whether any host communicated with it before you knew to look for it. Incident scope becomes clear.

Security teams run retro analysis after detecting compromises to determine how far back the attacker went. Retro analysis shows the full timeline of the incident.

---

## Retro analysis capabilities

| Capability | Description |
|---|---|
| PCAP retro scan | Scan historical PCAP for threat signatures |
| Flow retro analysis | Scan historical flows for indicators |
| Threat hunting | Apply new signatures to archived data |
| Incident timeline | Determine full incident scope |
| Historical taggers | Apply custom rules to past flows |

---

## What makes retro analysis work in practice

Data availability determines retro analysis capability. You cannot retro-analyze data you do not have retained. Flow data and PCAP must be stored for retro analysis. Short retention periods limit retro analysis to recent events.

Index quality determines retro analysis speed. Without per-flow indexing, retro analysis scans raw files manually. With indexing, retro analysis retrieves matching data quickly. For terabyte-scale archives, indexing is the difference between usable and unusable retro analysis.

---

## How Trisul handles retro analysis

Trisul provides retro analysis through flow taggers and PCAP scanning that run against historical data after the fact. Detection logic and flow taggers can be run against historical packet data after the fact. From any alert, analysts can pivot to historical flows and PCAP. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is packet capture?](/glossary/packet-capture)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is threat hunting?](/glossary/threat-hunting)
- [What is network forensics?](/glossary/network-forensics)
- [What is long term traffic retention?](/glossary/long-term-traffic-retention)

---

## Frequently asked questions

### What is retro analysis?

Retro analysis applies new detection rules to historical packet capture and flow data after the fact. It enables investigators to determine whether past traffic matched newly discovered threats without requiring continuous inspection. Retro analysis matters because threat intelligence often arrives days after an intrusion.

### Why is retro analysis important?

Retro analysis is critical for incident investigation. When a new threat is discovered, retro analysis determines whether hosts communicated with newly-discovered malicious domains before the threat was known. Without retro analysis, you cannot detect past infections from new threats.

### How does retro analysis work?

Retro analysis runs detection logic and flow taggers against stored historical PCAP and flow data after the fact. New threat signatures are applied to archived data. Matching traffic is flagged for investigation. Results show when and how past traffic matched the new threat.

### What data does retro analysis scan?

Retro analysis scans historical packet capture (PCAP) and flow records. PCAP retro analysis examines packet payloads for threat signatures. Flow retro analysis examines flow metadata for indicators of compromise. Both provide retrospective threat detection.