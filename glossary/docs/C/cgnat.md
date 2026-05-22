---
title: What is CGNAT?
description: CGNAT, or Carrier-Grade NAT, is large-scale address translation used by ISPs to share a small pool of public IPv4 addresses among a large number of subscribers. Multiple subscribers share one public IP address.
sidebar_label: CGNAT
sidebar_position: 145
slug: /glossary/cgnat
keywords:
  - CGNAT
  - carrier grade NAT
  - large scale NAT
  - ISP NAT
  - shared public IP
  - IPv4 exhaustion
  - subscriber attribution
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is CGNAT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT, or Carrier-Grade NAT, is large-scale address translation used by ISPs to share a small pool of public IPv4 addresses among a large number of subscribers. Multiple subscribers share one public IP address."
      }
    },
    {
      "@type": "Question",
      "name": "How does CGNAT work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT translates private subscriber addresses to shared public IPs using port-based translation. Many subscribers may share a single public IP, distinguished only by their assigned port ranges. Translation logs record the mapping."
      }
    },
    {
      "@type": "Question",
      "name": "Why does CGNAT make analytics harder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT makes analytics harder because many subscribers share one public IP. Without NAT logs, it is impossible to identify which subscriber made a specific connection. This complicates troubleshooting, abuse investigation, and lawful intercept."
      }
    },
    {
      "@type": "Question",
      "name": "How is CGNAT handled in compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGNAT compliance requires storing NAT translation logs that map each public IP and port to the originating subscriber. These logs are essential for responding to law enforcement requests and abuse complaints."
      }
    }
  ]
};

# What is CGNAT?

CGNAT, or Carrier-Grade NAT, is large-scale address translation used by ISPs to share a small pool of public IPv4 addresses among a large number of subscribers. Multiple subscribers share one public IP address.

---

## How CGNAT works

CGNAT places a large NAT device in the ISP network that translates subscriber private addresses to shared public addresses. Port-based translation distinguishes sessions from different subscribers using the same public IP.

Each session is tracked in a translation table. When the session ends, the port is returned to the pool. NAT logs capture the mapping between subscriber, private address, public address, and port for later attribution.

---

## CGNAT in network operations

CGNAT is widely deployed because IPv4 addresses are exhausted. Without CGNAT, ISPs would need a unique public IP for every subscriber, which is no longer feasible at scale.

For operations and analytics, CGNAT creates a visibility challenge. Network-level traffic shows shared public IPs. Subscriber-level analysis requires correlating traffic with NAT logs to identify the actual source.

---

## CGNAT vs standard NAT

| Aspect | Standard NAT | CGNAT |
|---|---|---|
| Scale | Single site | ISP-wide |
| Subscribers per IP | Few | Hundreds |
| Log volume | Low | Very high |
| Compliance need | Limited | Mandatory |

---

## What makes CGNAT work in practice

Log retention is critical. NAT translation logs must be stored long enough to respond to law enforcement and abuse requests. ISPs must retain these logs in a searchable format with accurate timestamps.

Time synchronization is essential. All CGNAT devices must use the same time source. Without synchronized clocks, it is impossible to accurately match a translation log to a specific event.

---

## How Trisul handles CGNAT

Trisul collects NAT event logs from CGNAT devices alongside flow data. It correlates subscriber identity from RADIUS logs with NAT translations to provide full subscriber-level visibility in CGNAT environments. Full documentation is at https://docs.trisul.org/docs/ug/ipdr/.

---

## Related terms

- NAT
- IPDR
- Subscriber mapping
- IPv4 exhaustion
- Lawful intercept

---

## Frequently asked questions

### What is CGNAT?

CGNAT, or Carrier-Grade NAT, is large-scale address translation used by ISPs to share a small pool of public IPv4 addresses among a large number of subscribers. Multiple subscribers share one public IP address.

### How does CGNAT work?

CGNAT translates private subscriber addresses to shared public IPs using port-based translation. Many subscribers may share a single public IP, distinguished only by their assigned port ranges. Translation logs record the mapping.

### Why does CGNAT make analytics harder?

CGNAT makes analytics harder because many subscribers share one public IP. Without NAT logs, it is impossible to identify which subscriber made a specific connection. This complicates troubleshooting, abuse investigation, and lawful intercept.

### How is CGNAT handled in compliance?

CGNAT compliance requires storing NAT translation logs that map each public IP and port to the originating subscriber. These logs are essential for responding to law enforcement requests and abuse complaints.