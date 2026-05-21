---
title: What is north south traffic?
description: North south traffic is data flowing between a data center and external networks such as the internet or branch offices. It contrasts with east west traffic which flows within the data center between servers.
sidebar_label: North south traffic
sidebar_position: 75
slug: /glossary/north-south-traffic
keywords:
  - north south traffic
  - north-south traffic
  - inbound traffic
  - outbound traffic
  - data center traffic
  - external traffic
  - traffic direction
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is north south traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "North south traffic is data flowing between a data center and external networks such as the internet or branch offices. It is also called client server traffic or inbound outbound traffic. North south traffic contrasts with east west traffic which flows within the data center between servers."
      }
    },
    {
      "@type": "Question",
      "name": "Why distinguish north south from east west traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Distinguishing north south from east west traffic helps with capacity planning, security policies, and network architecture. North south traffic typically goes through firewalls and load balancers at the data center edge. East west traffic flows within the data center through switches. Different security and performance requirements apply."
      }
    },
    {
      "@type": "Question",
      "name": "What are examples of north south traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Examples of north south traffic include web requests from internet users to data center servers, emails from data center mail servers to external recipients, API calls from external clients to cloud services, file downloads from data center to users, and backups from data center to cloud storage."
      }
    },
    {
      "@type": "Question",
      "name": "How is north south traffic monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "North south traffic is monitored at the data center edge where traffic enters or exits. Flow monitoring captures traffic at gateway interfaces. Packet capture at edge links records north south traffic for forensic investigation. Load balancers and firewalls track north south traffic for capacity and security."
      }
    }
  ]
};

# What is north south traffic?

North south traffic is data flowing between a data center and external networks such as the internet or branch offices. It contrasts with east west traffic which flows within the data center between servers. North south traffic is also called client server traffic or inbound outbound traffic.

---

## How north south traffic works

North south traffic enters or exits the data center through edge routers, firewalls, and load balancers. External clients initiate connections to servers in the data center. Server responses flow back to clients. All north south traffic passes through the data center perimeter.

---

## North south traffic in network operations

In the NOC, monitor north south traffic at the data center edge to detect congestion and anomalies. Security teams analyze north south traffic for threats entering or leaving the data center. Capacity planning tracks north south traffic volumes to plan bandwidth upgrades for edge links.

Load balancers distribute north south traffic across backend servers. Firewalls filter north south traffic for security. Track utilization on these devices to ensure capacity is adequate.

---

## North south vs east west comparison

| Aspect | North South Traffic | East West Traffic |
|---|---|---|
| Direction | Data center to external | Server to server within data center |
| Also called | Client server, inbound outbound | Server server, internal |
| Path | Through edge firewalls and load balancers | Through data center switches |
| Security focus | Perimeter defense, external threats | Lateral movement, internal threats |
| Capacity planning | Edge link bandwidth | Switch capacity and fabric bandwidth |

---

## What makes north south traffic monitoring work in practice

Edge monitoring captures all north south traffic. Flow exporters must be enabled on edge interfaces. Packet capture at edge links records north south traffic for forensic investigation. Without edge monitoring, north south traffic is invisible.

Bottleneck identification requires monitoring at the data center perimeter. When north south traffic exceeds edge capacity, users experience slow performance. Monitoring edge utilization identifies when upgrades are needed before users report problems.

---

## How Trisul handles north south traffic

Trisul monitors north south traffic at data center edge interfaces through flow data collection. NetFlow, J-Flow, sFlow, and IPFIX data from edge routers and firewalls capture north south traffic volumes. Trisul classifies traffic direction based on home network configuration distinguishing north south from east west. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is east west traffic?](/glossary/east-west-traffic)
- [What is inbound traffic?](/glossary/inbound-traffic)
- [What is outbound traffic?](/glossary/outbound-traffic)
- [What is data center monitoring?](/glossary/data-center-monitoring)
- [What is traffic direction?](/glossary/traffic-direction)

---

## Frequently asked questions

### What is north south traffic?

North south traffic is data flowing between a data center and external networks such as the internet or branch offices. It is also called client server traffic or inbound outbound traffic. North south traffic contrasts with east west traffic which flows within the data center between servers.

### Why distinguish north south from east west traffic?

Distinguishing north south from east west traffic helps with capacity planning, security policies, and network architecture. North south traffic typically goes through firewalls and load balancers at the data center edge. East west traffic flows within the data center through switches. Different security and performance requirements apply.

### What are examples of north south traffic?

Examples of north south traffic include web requests from internet users to data center servers, emails from data center mail servers to external recipients, API calls from external clients to cloud services, file downloads from data center to users, and backups from data center to cloud storage.

### How is north south traffic monitored?

North south traffic is monitored at the data center edge where traffic enters or exits. Flow monitoring captures traffic at gateway interfaces. Packet capture at edge links records north south traffic for forensic investigation. Load balancers and firewalls track north south traffic for capacity and security.