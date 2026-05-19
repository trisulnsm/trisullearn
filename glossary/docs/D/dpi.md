---
title: What is DPI?
description: Deep packet inspection (DPI) is a method of examining the full content of network packets, including headers and payloads, to identify applications, detect threats, and enforce security policies.
sidebar_label: DPI
sidebar_position: 21
slug: /glossary/dpi
keywords:
  - dpi
  - deep packet inspection
  - packet payload inspection
  - application identification
  - threat detection
  - network security inspection
  - layer 7 inspection
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does DPI differ from flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring examines only packet metadata: the 5-tuple, byte counts, and timestamps. DPI examines the full packet content, including headers and payload. Flow monitoring cannot see inside encrypted traffic or identify applications by their signatures. DPI can identify applications by signature and detect malware in payloads, but it cannot inspect encrypted payloads without decryption."
      }
    },
    {
      "@type": "Question",
      "name": "Can DPI work on encrypted traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DPI cannot inspect encrypted payloads unless the traffic is decrypted first. DPI can still examine unencrypted TLS handshake fields like Server Name Indication, JA3 fingerprints, and certificate details. For full payload inspection of encrypted traffic, the organization must perform TLS decryption (interception) before the DPI engine can analyze the payload."
      }
    },
    {
      "@type": "Question",
      "name": "What are the primary uses of DPI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DPI is used for application identification and control, threat detection and malware blocking, data loss prevention, quality of service and traffic shaping, and web filtering. It allows organizations to identify applications regardless of port, detect malware signatures in payloads, block sensitive data from leaving the network, and prioritize traffic based on application type."
      }
    },
    {
      "@type": "Question",
      "name": "What are the limitations of DPI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DPI cannot inspect encrypted payloads without decryption, which raises privacy and legal concerns. It requires significant processing power and can introduce latency. DPI effectiveness depends on signature databases being up to date with new applications and threats. It also cannot detect encrypted command-and-control traffic that uses known-good certificates."
      }
    }
  ]
};

# What is DPI?

Deep packet inspection (DPI) examines the full content of network packets, including headers and payloads, to identify applications, detect threats, and enforce security policies. Unlike flow monitoring, which only sees metadata like IP addresses and byte counts, DPI analyzes the actual data in packets. DPI operates at Layer 7 of the OSI model and can identify applications regardless of port, detect malware signatures, and enforce granular security policies.

---

## How DPI works

DPI inspects packets as they pass through a network device, examining both headers and payload content. It uses signature matching to identify applications, protocols, and threats. For example, DPI can identify HTTP traffic by matching against known HTTP patterns, detect malware by matching against signature databases, and identify file transfers by matching against file type signatures.

DPI can reassemble fragmented packets and analyze TCP streams to understand the full context of a conversation. It maintains state across multiple packets, allowing it to detect multi-stage attacks and protocol anomalies that single-packet analysis cannot identify.

---

## DPI in network operations

SOC teams use DPI for threat detection and malware blocking. DPI engines compare packet payloads against known malware signatures and block traffic that matches malicious patterns. DPI can also detect data exfiltration by identifying sensitive data patterns in outgoing traffic, supporting data loss prevention policies.

NOC teams use DPI for application identification and traffic management. DPI identifies applications regardless of port or encryption, allowing organizations to enforce policies based on application type rather than port number. DPI supports quality of service by identifying traffic that should be prioritized, such as VoIP or video conferencing.

ISPs use DPI for traffic shaping, web filtering, and compliance. DPI allows ISPs to identify and throttle bandwidth-intensive applications, block access to prohibited websites, and provide data retention compliance for regulatory requirements.

---

## DPI vs flow monitoring

| Dimension | DPI | Flow monitoring |
|---|---|---|
| What it examines | Full packet content including payload | Metadata only: 5-tuple, counts, timestamps |
| Payload visibility | Full, subject to encryption | None |
| Application identification | Signature-based, port-independent | Port-based or metadata-based |
| Encryption handling | Requires decryption for payload inspection | Cannot see encrypted content |
| Performance impact | High, requires significant processing | Low, minimal processing required |
| Best fit | Threat detection, application control | Trending, detection, compliance |

DPI and flow monitoring are complementary. Flow monitoring provides breadth and retention; DPI provides depth and application-level visibility at specific observation points.

---

## How Trisul handles DPI

Trisul provides packet capture and flow analysis capabilities but does not perform full deep packet inspection for application identification or malware detection. Trisul extracts TLS metadata from packet captures, including JA3 fingerprints, certificate details, and Server Name Indication, which provides some application-level visibility without full DPI.

For full DPI capabilities including malware detection, application identification, and signature-based threat detection, Trisul should be paired with dedicated DPI tools such as network intrusion detection systems or next-generation firewalls. Trisul's flow analytics can identify suspicious traffic patterns that warrant deeper inspection by DPI tools. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is full packet capture?](/glossary/full-packet-capture)
- [What is encrypted traffic analytics?](/glossary/encrypted-traffic-analytics)
- [What is IDS?](/glossary/ids)
- [What is NGFW?](/glossary/ngfw)
- [What is JA3?](/glossary/ja3)

---

## Frequently asked questions

### How does DPI differ from flow monitoring?

Flow monitoring examines only packet metadata: the 5-tuple, byte counts, and timestamps. DPI examines the full packet content, including headers and payloads. Flow monitoring cannot see inside encrypted traffic or identify applications by their signatures. DPI can identify applications by signature and detect malware in payloads, but it cannot inspect encrypted payloads without decryption.

### Can DPI work on encrypted traffic?

DPI cannot inspect encrypted payloads unless the traffic is decrypted first. DPI can still examine unencrypted TLS handshake fields like Server Name Indication, JA3 fingerprints, and certificate details. For full payload inspection of encrypted traffic, the organization must perform TLS decryption (interception) before the DPI engine can analyze the payload.

### What are the primary uses of DPI?

DPI is used for application identification and control, threat detection and malware blocking, data loss prevention, quality of service and traffic shaping, and web filtering. It allows organizations to identify applications regardless of port, detect malware signatures in payloads, block sensitive data from leaving the network, and prioritize traffic based on application type.

### What are the limitations of DPI?

DPI cannot inspect encrypted payloads without decryption, which raises privacy and legal concerns. It requires significant processing power and can introduce latency. DPI effectiveness depends on signature databases being up to date with new applications and threats. It also cannot detect encrypted command-and-control traffic that uses known-good certificates.