---
title: What is flow forensics?
description: Flow forensics is the use of historical flow records to reconstruct network activity, trace the scope of security incidents, and answer investigative questions after an event has occurred.
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
        "text": "Flow forensics can answer questions across weeks or months of traffic history because flow records are compact enough to retain at long timescales. Packet capture at equivalent retention would require impractical storage. When an indicator of compromise surfaces weeks after an intrusion, flow records let analysts determine which hosts communicated with the flagged destination, when, and how much data was transferred, even if the packets themselves are long gone."
      }
    },
    {
      "@type": "Question",
      "name": "What are the limits of flow forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow forensics can tell you that a connection happened and how much data moved, but not what was exchanged. It cannot recover file contents, commands, credentials, or any application-layer detail. For incidents where payload evidence is required, such as confirming data exfiltration or recovering malware artifacts, flow records can identify the conversation but packet capture is needed to confirm what was transferred."
      }
    },
    {
      "@type": "Question",
      "name": "How does sampling affect flow forensics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sampled flow data is a significant liability for forensic use. A targeted exfiltration over a low-bandwidth channel, a slow lateral scan, or a beaconing agent checking in on a long interval may generate fewer packets than the sampling interval and simply not appear in the record. Forensic flow analysis requires unsampled collection. If the network infrastructure cannot provide unsampled exports, packet-based flow reconstruction at a probe is the alternative."
      }
    },
    {
      "@type": "Question",
      "name": "How far back can flow forensics reach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retention depth depends on storage capacity and flow volume, but most deployments retain flow records for 30 to 90 days. At typical enterprise flow volumes, storing 90 days of unsampled flow records requires far less infrastructure than storing even 24 hours of equivalent full packet capture. The practical limit is not technical but policy-driven: retention periods must be long enough to cover the typical dwell time of a threat actor in the environment, which security teams often estimate at 30 days or more."
      }
    }
  ]
};

# What is flow forensics?

Flow forensics is the use of stored flow records to reconstruct past network activity, trace the path and scope of a security incident, and answer investigative questions after an event has occurred. Unlike real-time flow monitoring, which focuses on current traffic, flow forensics works backward through history: finding which hosts communicated with a compromised IP, identifying the first time a connection pattern appeared, or mapping how far a threat moved laterally across the network. Because flow records are compact, they can be retained for weeks to months, making them the primary investigative data source for incidents discovered well after the fact.

---

## How flow forensics works

An investigation typically starts with an indicator: a known malicious IP, a suspicious domain, an unusual internal connection. The analyst queries the flow database for all records matching that indicator within a defined time window. The results reveal which internal hosts were involved, when the connections occurred, how long they lasted, and how much data moved in each direction.

From those initial results, the investigation expands. A host identified in the first query becomes the subject of a second query: what else did it connect to, and when? This iterative pivoting through flow records lets analysts reconstruct a timeline of activity and map the scope of an incident across the network without needing packet-level data for every step.

Where confirmation of payload content is needed, flow forensics identifies the specific conversations of interest, and packet capture provides the evidence. The two capabilities are most effective when used in sequence: flow records for scope and timeline, packets for confirmation.

---

## Flow forensics in network operations

In SOC environments, flow forensics is the first response layer when an incident is reported late. A threat intelligence feed flagging an IP as malicious today may relate to activity that happened three weeks ago. Flow records answer whether any internal host communicated with that IP, without requiring the packets from that period to still be available.

Flow forensics also supports post-incident scoping. After a compromised host is identified, analysts use flow records to determine which other hosts it communicated with, which services it accessed, and whether it initiated any outbound connections that suggest exfiltration. This lateral movement mapping is difficult or impossible to reconstruct from logs alone when the flow database spans weeks of history.

For regulatory and compliance contexts, flow records serve as the audit trail for lawful intercept and data retention obligations. Investigators can produce a documented record of network activity for a specific host or time period directly from the flow database.

---

## Flow forensics vs packet forensics

| Dimension | Flow forensics | Packet forensics |
|---|---|---|
| What it examines | Flow metadata: who, when, how much | Full packet content including payload |
| Retention depth | Weeks to months | Hours to days at full fidelity |
| Payload visibility | None | Full, subject to encryption |
| Investigative scope | Broad: topology-wide, long time range | Deep: specific conversations, full content |
| Best fit | Scoping, timeline reconstruction, lateral movement mapping | Confirming what was transferred, recovering artifacts |

Flow forensics and packet forensics address different phases of an investigation. Flow records establish scope and timeline; packet records provide evidence of content. Most investigation workflows use flow records to narrow the question before pulling packet data for the specific conversations that matter.

---

## How Trisul handles flow forensics

Trisul stores every flow record without rollup or summarization, preserving full resolution across the retention window. The Explore Flows interface lets analysts query the flow database by any combination of IP, port, protocol, time range, or flow tag, and returns matching records for pivoting and export. Flow Taggers extend this further by attaching searchable labels to flows at ingestion, so flows associated with specific threat categories, geographic origins, or service types can be retrieved by label without reconstructing filter expressions.

For incidents where flow scope needs to be confirmed at the packet level, Trisul's per-flow PCAP index allows direct pivot from any flow record to the underlying packets, provided the packets fall within the capture retention window. Retro analysis complements this by allowing detection rules and flow taggers to be applied against historical data, so newly received threat intelligence can be checked against flows that were recorded before the indicator was known. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is a flow?](/glossary/flow)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is flow tagger?](/glossary/flow-tagger)
- [What is flow sampling?](/glossary/flow-sampling)
- [What is full packet capture?](/glossary/full-packet-capture)
- [What is retro analysis?](/glossary/retro-analysis)
- [What is network security monitoring?](/glossary/network-security-monitoring)

---

## Frequently asked questions

### What can flow forensics determine that packet capture cannot?

Flow forensics can answer questions across weeks or months of traffic history because flow records are compact enough to retain at long timescales. Packet capture at equivalent retention would require impractical storage. When an indicator of compromise surfaces weeks after an intrusion, flow records let analysts determine which hosts communicated with the flagged destination, when, and how much data was transferred, even if the packets themselves are long gone.

### What are the limits of flow forensics?

Flow forensics can tell you that a connection happened and how much data moved, but not what was exchanged. It cannot recover file contents, commands, credentials, or any application-layer detail. For incidents where payload evidence is required, such as confirming data exfiltration or recovering malware artifacts, flow records can identify the conversation but packet capture is needed to confirm what was transferred.

### How does sampling affect flow forensics?

Sampled flow data is a significant liability for forensic use. A targeted exfiltration over a low-bandwidth channel, a slow lateral scan, or a beaconing agent checking in on a long interval may generate fewer packets than the sampling interval and simply not appear in the record. Forensic flow analysis requires unsampled collection. If the network infrastructure cannot provide unsampled exports, packet-based flow reconstruction at a probe is the alternative.

### How far back can flow forensics reach?

Retention depth depends on storage capacity and flow volume, but most deployments retain flow records for 30 to 90 days. At typical enterprise flow volumes, storing 90 days of unsampled flow records requires far less infrastructure than storing even 24 hours of equivalent full packet capture. The practical limit is not technical but policy-driven: retention periods must be long enough to cover the typical dwell time of a threat actor in the environment, which security teams often estimate at 30 days or more.