---
title: What is east-west traffic?
description: East-west traffic is network communication between devices within the same data center or network, such as server-to-server communication, database replication, and inter-process calls.
sidebar_label: East-west traffic
sidebar_position: 18
slug: /glossary/east-west-traffic
keywords:
  - east-west traffic
  - lateral traffic
  - internal traffic
  - data center traffic
  - server-to-server traffic
  - north-south traffic
  - micro-segmentation
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are examples of east-west traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common examples include database replication between servers, file transfers within a data center, inter-process communication in microservices architectures, application requests between services, and VM migration traffic. These are all server-to-server communications that stay inside the network perimeter and never traverse external firewalls or gateways."
      }
    },
    {
      "@type": "Question",
      "name": "Why is east-west traffic harder to secure than north-south traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "East-west traffic stays within the trusted internal network and typically bypasses perimeter security devices like firewalls and intrusion detection systems that sit at the network edge. Once an attacker compromises one host, they can move laterally across the network using east-west traffic without triggering perimeter alerts. This is why micro-segmentation and internal traffic monitoring are essential for east-west security."
      }
    },
    {
      "@type": "Question",
      "name": "How does east-west traffic relate to lateral movement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lateral movement is the technique attackers use to move east-west across a network after compromising an initial host. They use east-west traffic to access other servers, escalate privileges, and exfiltrate data from within the network. Monitoring east-west traffic is critical for detecting lateral movement and stopping attackers before they reach high-value targets."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between east-west and north-south traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "East-west traffic flows horizontally within a data center or network, between servers and devices inside the perimeter. North-south traffic flows vertically into or out of the network, between clients outside and servers inside. East-west is internal and lateral; north-south is external and perimeter-crossing. They require different security approaches: micro-segmentation for east-west, perimeter firewalls for north-south."
      }
    }
  ]
};

# What is east-west traffic?

East-west traffic is network communication between devices within the same data center or network. It includes server-to-server communication, database replication, file transfers, and inter-process calls in microservices architectures. East-west traffic stays inside the network perimeter and never traverses external firewalls or gateways. As cloud and containerized applications have grown, east-west traffic now accounts for most data center traffic, making its security critical.

---

## What east-west traffic includes

Examples include database replication between servers, file transfers within a data center, inter-process communication in microservices architectures, application requests between services, and VM migration traffic. All are server-to-server communications that originate and terminate within the same network scope.

The term comes from network diagram conventions where internal communications are drawn horizontally, from left to right across the diagram. North-south traffic, by contrast, is drawn vertically, up and down between the network and external clients.

---

## East-west traffic in network operations

SOC teams monitor east-west traffic to detect lateral movement. Once an attacker compromises one host, they move east-west to reach other servers, escalate privileges, and access high-value data. This movement is often invisible to perimeter security that only monitors north-south traffic.

NOC teams monitor east-west traffic for performance and capacity planning. Database replication, VM migration, and microservices chatter can consume significant bandwidth between racks or switches. Unusual east-west traffic patterns can indicate misconfiguration, performance issues, or application errors.

Enterprise architects use east-west traffic analysis to design micro-segmentation policies. Without segmentation, east-west traffic between any two hosts flows unimpeded, creating a flat network where lateral movement is easy. Micro-segmentation restricts east-west traffic to only what is required for applications to function.

---

## East-west traffic vs north-south traffic

| Dimension | East-west traffic | North-south traffic |
|---|---|---|
| Direction | Horizontal within data center | Vertical into or out of network |
| Scope | Internal, server-to-server | External, client-to-server |
| Security perimeter | Bypasses perimeter firewalls | Crosses perimeter security |
| Monitoring focus | Internal traffic, lateral movement | Ingress and egress traffic |
| Best protection | Micro-segmentation | Perimeter firewalls and IDS |

Both traffic types require security, but they are protected differently. East-west traffic needs internal visibility and segmentation; north-south traffic needs perimeter protection and detection.

---

## How Trisul handles east-west traffic

Trisul monitors east-west traffic through flow monitoring and packet capture within the data center. It captures internal traffic between servers, VMs, and containers, providing visibility into lateral communication patterns. Flow records show which hosts communicate, when, and how much data is exchanged.

Trisul's flow analytics support east-west traffic analysis by identifying top talkers, detecting anomalous internal traffic patterns, and enabling search for lateral movement indicators. For micro-segmentation visibility, Trisul can be deployed with internal traffic taps or SPAN ports at the data center level. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is north-south traffic?](/glossary/north-south-traffic)
- [What is lateral movement?](/glossary/lateral-movement)
- [What is micro-segmentation?](/glossary/micro-segmentation)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is network security monitoring?](/glossary/network-security-monitoring)
- [What is a flow?](/glossary/flow)

---

## Frequently asked questions

### What are examples of east-west traffic?

Common examples include database replication between servers, file transfers within a data center, inter-process communication in microservices architectures, application requests between services, and VM migration traffic. These are all server-to-server communications that stay inside the network perimeter and never traverse external firewalls or gateways.

### Why is east-west traffic harder to secure than north-south traffic?

East-west traffic stays within the trusted internal network and typically bypasses perimeter security devices like firewalls and intrusion detection systems that sit at the network edge. Once an attacker compromises one host, they can move laterally across the network using east-west traffic without triggering perimeter alerts. This is why micro-segmentation and internal traffic monitoring are essential for east-west security.

### How does east-west traffic relate to lateral movement?

Lateral movement is the technique attackers use to move east-west across a network after compromising an initial host. They use east-west traffic to access other servers, escalate privileges, and exfiltrate data from within the network. Monitoring east-west traffic is critical for detecting lateral movement and stopping attackers before they reach high-value targets.

### What is the difference between east-west and north-south traffic?

East-west traffic flows horizontally within a data center or network, between servers and devices inside the perimeter. North-south traffic flows vertically into or out of the network, between clients outside and servers inside. East-west is internal and lateral; north-south is external and perimeter-crossing. They require different security approaches: micro-segmentation for east-west, perimeter firewalls for north-south.