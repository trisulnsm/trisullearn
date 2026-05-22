---
title: What is full packet capture?
description: Full packet capture (PCAP) records every packet on a network link — headers and payload — to disk for analysis and forensic investigation.
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
        "text": "A 1 Gbps link at 50% utilization generates roughly 5–6 TB of PCAP per day. Most deployments reduce this by filtering out known-good traffic such as bulk backups and encrypted CDN streams, and tiering storage between fast NVMe for recent data and cheaper disk for archive. Retaining more than 7–14 days at full fidelity requires either heavy filtering or purpose-built storage infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between full packet capture and NetFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NetFlow records who talked to whom, when, and how much. Full packet capture records what was actually exchanged. Flow data tells you a host sent 2 GB over port 443 at 2AM; PCAP shows you what was in that transfer. The two are complementary: flow data for detection and triage, PCAP for investigation and confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Does full packet capture work on encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PCAP captures the encrypted bytes as they appear on the wire. Headers are readable; TLS payloads are ciphertext. You still get flow metadata, TLS certificate details, and JA3 fingerprints from the handshake. To inspect payload content, you need either a TLS inspection proxy inline or access to session keys."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main failure modes in a full packet capture deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common failure is silent packet loss at the capture interface. SPAN ports drop mirrored packets under load, often without any visible counter increment. Passive optical taps are lossless but require per-link hardware. The second failure mode is storage exhaustion: PCAP stores fill quietly and overwrite the data you need before an investigation begins."
      }
    },
    {
      "@type": "Question",
      "name": "How do analysts navigate from an alert to the relevant PCAP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In platforms with per-flow indexing, analysts click from an alert directly to the matching packets. The flow 5-tuple and timestamp handle the lookup automatically. Without indexing, analysts load large capture files into Wireshark and filter by hand. That manual process works at small scale but breaks down when your archive spans terabytes."
      }
    },
    {
      "@type": "Question",
      "name": "Can you apply new detection rules to traffic that was already captured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this is called retro analysis. New detection rules or threat indicators can be run against stored historical PCAP after the fact. This matters because threat intelligence often arrives days after an intrusion. With retro analysis, you can determine whether a host communicated with a newly-discovered malicious domain before you knew to look for it."
      }
    },
    {
      "@type": "Question",
      "name": "What capture interface should be used for high-speed full packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Above 1 Gbps, kernel-bypass frameworks like PF_RING or AF_PACKET (TPACKET_V3) are required. Standard libpcap introduces enough CPU overhead to cause dropped packets at line rate on busy links. The capture interface should be fed by a passive network TAP rather than a SPAN port to avoid hardware-level loss."
      }
    }
  ]
};

# What is full packet capture?

Full packet capture (PCAP) is the practice of recording every packet on a network link, both headers and payload, to persistent storage. Unlike flow monitoring, which summarizes traffic into conversation records, PCAP preserves the complete wire-level data. It is the definitive record of what actually crossed the network, and the foundation for forensic investigation and incident response.

---

## How full packet capture works

Packets are intercepted at a tap or SPAN port and written to disk in PCAP or PCAPNG format as a continuous ring buffer. Each frame is timestamped, and the raw bytes from the Ethernet frame onwards are stored verbatim.

At speeds above 1 Gbps, standard socket-based capture drops packets. Kernel-bypass frameworks such as PF_RING or AF_PACKET move packets directly from the NIC to disk, bypassing the kernel networking stack and eliminating that overhead.

Most platforms also build a per-flow index at write time, mapping each 5-tuple to its byte offsets in the capture store. This lets analysts retrieve packets for a specific conversation in seconds rather than scanning terabytes of raw files.

---

## Full packet capture in network operations

In a SOC, PCAP is the evidence layer. Flow data or IDS alerts tell you something suspicious happened. PCAP tells you what was exchanged: commands issued, files transferred, credentials passed. For incident confirmation, there is no substitute.

NOC teams use PCAP for application performance root cause analysis. TCP retransmissions, window behavior, TLS handshake failures, and application-level error codes are only visible at the packet level. Flow telemetry shows a conversation; it does not show that the conversation was broken.

Storage is the central operational constraint. A 10 Gbps link at moderate utilization generates tens of terabytes per day. Deployments manage this with capture filters, excluding encrypted bulk traffic, focusing on externally-routed flows, or applying per-flow rules, which can reduce stored volume by 60 to 80% without significant loss to investigative value.

---

## Full packet capture vs NetFlow

| Dimension | Full packet capture | NetFlow / IPFIX |
|---|---|---|
| What it stores | Complete packet: headers and payload | Flow metadata: 5-tuple, byte counts, timestamps |
| Investigative depth | Payload content, application behavior, file transfers | Who talked to whom, volume, duration |
| Storage footprint | Very high, scales with wire speed | Low, approximately 1 to 2% of equivalent PCAP volume |
| Retention period | Hours to days at full fidelity | Weeks to months |
| Encrypted traffic | Headers readable; payload is ciphertext | Metadata only, no payload visibility |
| Best fit | Forensic investigation, incident confirmation | Traffic trending, anomaly detection, compliance |

Both are complementary. Flow data handles detection and long-term trending; PCAP handles investigation and confirmation. Most mature SOC and NSM deployments run both.

---

## What makes full packet capture work in practice

The capture point determines loss. SPAN ports drop packets under load silently, above roughly 500 Mbps on a busy switch. Passive optical taps are the only lossless option for high-speed links.

Index quality determines investigation speed. Without per-flow indexing, analysts scan raw files manually. With it, any alert can pivot directly to the relevant packets in seconds. For a terabyte-scale archive, this is the difference between a usable tool and an unusable one.

Retention management must be active. Ring-buffer overflow is the most common operational failure in PCAP deployments. The store fills, overwrites old data, and nobody notices until an investigation needs packets that no longer exist. Monitoring write rate and store utilization is not optional.

Capture policies reduce storage without reducing value. Excluding known-good encrypted bulk flows, tiering to cheaper storage, and applying flow-level filters all extend effective retention significantly on the same hardware.

---

## How Trisul handles full packet capture

Trisul captures raw packets continuously using PF_RING or AF_PACKET and builds a per-flow index at write time. From any alert, topper, or flow in the dashboard, analysts can pivot directly to the matching PCAP without manual file correlation. The capture store distributes across multiple disks to extend retention and reduce cost per byte.

Storage policies let operators define exactly what gets written, by protocol, direction, or custom LUA rules, to control volume without losing investigative coverage. Retro analysis allows detection logic and flow taggers to be run against historical packet data after the fact, so new IOCs or detection rules can be applied to traffic captured before the threat was known. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is NetFlow?](/docs/glossary/netflow)
- [What is IPFIX?](/docs/glossary/ipfix)
- [What is flow tagger?](/docs/glossary/flow-tagger)
- [What is retro analysis?](/docs/glossary/retro-analysis)
- [What is network security monitoring?](/docs/glossary/network-security-monitoring)
- [What is deep packet inspection?](/docs/glossary/dpi)
- [What is sFlow?](/docs/glossary/sflow)
- [What is flow tracker?](/docs/glossary/flow-tracker)

---

## Frequently asked questions

### How much storage does full packet capture require?

A 1 Gbps link at 50% utilization generates roughly 5 to 6 TB of PCAP per day. Most deployments reduce this by filtering out known-good traffic such as bulk backups and encrypted CDN streams, and tiering storage between fast NVMe for recent data and cheaper disk for archive. Retaining more than 7 to 14 days at full fidelity requires either heavy filtering or purpose-built storage infrastructure.

### What is the difference between full packet capture and NetFlow?

NetFlow records who talked to whom, when, and how much. Full packet capture records what was actually exchanged. Flow data tells you a host sent 2 GB over port 443 at 2AM; PCAP shows you what was in that transfer. The two are complementary: flow data for detection and triage, PCAP for investigation and confirmation.

### Does full packet capture work on encrypted traffic?

PCAP captures the encrypted bytes as they appear on the wire. Headers are readable; TLS payloads are ciphertext. You still get flow metadata, TLS certificate details, and JA3 fingerprints from the handshake. To inspect payload content, you need either a TLS inspection proxy inline or access to session keys.

### What are the main failure modes in a full packet capture deployment?

The most common failure is silent packet loss at the capture interface. SPAN ports drop mirrored packets under load, often without any visible counter increment. Passive optical taps are lossless but require per-link hardware. The second failure mode is storage exhaustion: PCAP stores fill quietly and overwrite the data you need before an investigation begins.

### How do analysts navigate from an alert to the relevant PCAP?

In platforms with per-flow indexing, analysts click from an alert directly to the matching packets. The flow 5-tuple and timestamp handle the lookup automatically. Without indexing, analysts load large capture files into Wireshark and filter by hand. That manual process works at small scale but breaks down when your archive spans terabytes.

### Can you apply new detection rules to traffic that was already captured?

Yes, this is called retro analysis. New detection rules or threat indicators can be run against stored historical PCAP after the fact. This matters because threat intelligence often arrives days after an intrusion. With retro analysis, you can determine whether a host communicated with a newly-discovered malicious domain before you knew to look for it.

### What capture interface should be used for high-speed full packet capture?

Above 1 Gbps, kernel-bypass frameworks like PF_RING or AF_PACKET (TPACKET_V3) are required. Standard libpcap introduces enough CPU overhead to cause dropped packets at line rate on busy links. The capture interface should be fed by a passive network TAP rather than a SPAN port to avoid hardware-level loss.