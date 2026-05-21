---
title: What is query based traffic investigation?
description: Query based traffic investigation uses search queries to find specific traffic patterns in flow data or packet capture. It enables analysts to investigate security incidents, troubleshoot problems, and analyze traffic by searching for specific IPs, ports, protocols, or patterns.
sidebar_label: Query based traffic investigation
sidebar_position: 88
slug: /glossary/query-based-traffic-investigation
keywords:
  - query based traffic investigation
  - traffic search
  - flow search
  - pcap search
  - traffic investigation
  - network search
  - traffic query
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is query based traffic investigation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Query based traffic investigation uses search queries to find specific traffic patterns in flow data or packet capture. It enables analysts to investigate security incidents, troubleshoot problems, and analyze traffic by searching for specific IPs, ports, protocols, or patterns. Search queries filter traffic data to surface relevant flows."
      }
    },
    {
      "@type": "Question",
      "name": "How does query based investigation work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Query based investigation uses search boxes to enter queries filtering by IP address, port, protocol, application, or pattern. The search engine uses per-flow indexing to retrieve matching flows quickly. Results show matching flows with details. Clicking results pivots to PCAP for deeper investigation."
      }
    },
    {
      "@type": "Question",
      "name": "What can you search for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can search for IP addresses, port numbers, protocol types, application names, byte counts, packet counts, time ranges, TCP flags, DNS queries, HTTP URLs, and custom patterns. Searches can combine multiple criteria using AND, OR, and NOT operators."
      }
    },
    {
      "@type": "Question",
      "name": "Why is query based investigation important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Query based investigation enables rapid response to security incidents. When an alert indicates suspicious activity, search queries find all related traffic instantly. Without fast search, investigators must manually scan flow data or PCAP files. Efficient search reduces investigation time from hours to minutes."
      }
    }
  ]
};

# What is query based traffic investigation?

Query based traffic investigation uses search queries to find specific traffic patterns in flow data or packet capture. It enables analysts to investigate security incidents, troubleshoot problems, and analyze traffic by searching for specific IPs, ports, protocols, or patterns. Search queries filter traffic data to surface relevant flows.

---

## How query based investigation works

Search boxes accept queries filtering traffic by various criteria. The search engine uses per-flow indexing to retrieve matching flows quickly. Without indexing, searching requires scanning all flow records manually. With indexing, queries return results in seconds even from terabytes of data.

Results show matching flows with key details including source, destination, bytes, packets, and timestamps. Clicking results pivots to Key Dashboard or PCAP for deeper investigation. Search queries can be saved and reused for recurring investigations.

---

## Query based investigation in network operations

In the SOC, use query based investigation to respond to security alerts. When an IDS alert indicates suspicious activity, search for the IP address to find all related traffic. Trace attack paths by searching for destination IPs or ports.

NOC teams use query based investigation to troubleshoot application problems. Search for application names to find traffic patterns. Identify top talkers by searching for high byte counts. Investigate connectivity issues by searching for specific IP pairs.

---

## Search criteria

| Criteria | Example |
|---|---|
| IP address | 192.0.2.1 |
| Port | 443 |
| Protocol | TCP, UDP, DNS, HTTP |
| Application | Netflix, Zoom, WhatsApp |
| Byte count | > 1GB |
| Time range | Last 24 hours |
| DNS query | malicious.com |

---

## What makes query based investigation work in practice

Per-flow indexing is essential for fast search. Without it, queries scan raw files manually. With indexing, any query retrieves matching flows in seconds. For terabyte-scale archives, indexing is the difference between usable and unusable search.

Query syntax must be intuitive. Complex query languages require training. Simple keyword search works for basic queries. Advanced queries support Boolean operators for complex filtering. Balance simplicity with power.

---

## How Trisul handles query based traffic investigation

Trisul provides query based investigation through search functionality. Search boxes accept queries filtering by IP, port, protocol, application, and patterns. Per-flow indexing enables fast retrieval of matching flows. From any search result, analysts pivot directly to Key Dashboard or PCAP without manual file correlation. Full documentation is at https://docs.trisul.org/docs/ug/cg/tasks/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is packet capture?](/glossary/packet-capture)
- [What is Key Dashboard?](/glossary/key-dashboard)
- [What is per-flow indexing?](/glossary/per-flow-indexing)
- [What is incident investigation?](/glossary/incident-investigation)

---

## Frequently asked questions

### What is query based traffic investigation?

Query based traffic investigation uses search queries to find specific traffic patterns in flow data or packet capture. It enables analysts to investigate security incidents, troubleshoot problems, and analyze traffic by searching for specific IPs, ports, protocols, or patterns. Search queries filter traffic data to surface relevant flows.

### How does query based investigation work?

Query based investigation uses search boxes to enter queries filtering by IP address, port, protocol, application, or pattern. The search engine uses per-flow indexing to retrieve matching flows quickly. Results show matching flows with details. Clicking results pivots to PCAP for deeper investigation.

### What can you search for?

You can search for IP addresses, port numbers, protocol types, application names, byte counts, packet counts, time ranges, TCP flags, DNS queries, HTTP URLs, and custom patterns. Searches can combine multiple criteria using AND, OR, and NOT operators.

### Why is query based investigation important?

Query based investigation enables rapid response to security incidents. When an alert indicates suspicious activity, search queries find all related traffic instantly. Without fast search, investigators must manually scan flow data or PCAP files. Efficient search reduces investigation time from hours to minutes.