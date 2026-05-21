---
title: What is BGP peering analytics?
description: BGP peering analytics monitors traffic flows across BGP peerings by combining flow data with BGP routing information to analyze traffic per autonomous system, prefix, and peering interface in real time.
sidebar_label: BGP peering analytics
sidebar_position: 35
slug: /glossary/bgp-peering-analytics
keywords:
  - bgp peering analytics
  - peering analytics
  - isp peering analytics
  - bgp traffic analysis
  - as traffic mapping
  - prefix traffic analysis
  - route analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does BGP peering analytics measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BGP peering analytics measures traffic volume flows per Autonomous System number, cleanly split into upstream, downstream, peer, and origin AS. It also tracks traffic per prefix, per gateway device, and per peering interface. Popular content providers like Google, Amazon, and Facebook are tracked separately."
      }
    },
    {
      "@type": "Question",
      "name": "How does BGP peering analytics help ISPs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BGP peering analytics helps ISPs negotiate with content providers and upstream peers, optimize costs, and select new peering policies. It provides visibility into which ASes and prefixes are driving traffic, which peering links are congested, and where traffic engineering changes would improve performance."
      }
    },
    {
      "@type": "Question",
      "name": "What data sources does BGP peering analytics use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BGP peering analytics combines flow data from NetFlow, J-Flow, sFlow, and IPFIX with BGP routing information from route collectors or internal BGP viewpoints. The BGP data is automatically in sync with traffic tables, enabling drilldown from AS to prefix to peering interface."
      }
    },
    {
      "@type": "Question",
      "name": "What visualizations are available in BGP peering analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visualizations include nested tables showing hierarchical traffic by AS, prefix, and gateway, as well as Sankey views showing traffic flows between ASes. Full M:N degree drilldowns let operators pivot from any angle to any other angle without writing queries."
      }
    }
  ]
};

# What is BGP peering analytics?

BGP peering analytics monitors traffic flows across BGP peerings by combining flow data with BGP routing information. It analyzes traffic per autonomous system, prefix, and peering interface in real time. ISPs use it to negotiate with peers, optimize costs, and select new peering policies.

---

## How it works

BGP peering analytics combines flow data from NetFlow, J-Flow, sFlow, and IPFIX with BGP routing information from route collectors. The BGP data is automatically in sync with traffic tables. Traffic is mapped to AS number, prefix, gateway, next hop, and peering interface with real-time and historical trending.

![](./images/bgp-peering-analytics.png)

---

## In network operations

- **NOC:** Monitor which peering links are congested and which ASes are driving traffic volume.
- **ISP:** Use AS and prefix traffic analysis to negotiate settlement-free peering or paid peering.
- **Traffic Engineering:** Optimize exit selection by analyzing geo traffic flows and route topology.

---

## AS traffic mapping

| Category | Description |
|---|---|
| Upstream AS | Traffic sent to upstream providers via transit |
| Downstream AS | Traffic received from downstream customers |
| Peer AS | Traffic exchanged with settlement-free peers |
| Origin AS | Traffic to/from the network's own AS |

---

## How Trisul handles it

Trisul provides ISP Peering Analytics with real-time monitoring of active route topology, nested table and Sankey views, and an inbuilt BGP route receiver automatically in sync with traffic tables. A dozen dashboards show AS peerings, prefix analysis, route analytics, and content-to-subscriber maps. Full solution page is at https://www.trisul.org/solutions/peering-analytics/.

---

## Related terms

- [What is BGP?](/docs/glossary/bgp)
- [What is ASN?](/docs/glossary/asn)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)

---

## Frequently asked questions

### What does BGP peering analytics measure?

BGP peering analytics measures traffic volume flows per Autonomous System number, cleanly split into upstream, downstream, peer, and origin AS. It also tracks traffic per prefix, per gateway device, and per peering interface. Popular content providers like Google, Amazon, and Facebook are tracked separately.

### How does BGP peering analytics help ISPs?

BGP peering analytics helps ISPs negotiate with content providers and upstream peers, optimize costs, and select new peering policies. It provides visibility into which ASes and prefixes are driving traffic, which peering links are congested, and where traffic engineering changes would improve performance.

### What data sources does BGP peering analytics use?

BGP peering analytics combines flow data from NetFlow, J-Flow, sFlow, and IPFIX with BGP routing information from route collectors or internal BGP viewpoints. The BGP data is automatically in sync with traffic tables, enabling drilldown from AS to prefix to peering interface.

### What visualizations are available in BGP peering analytics?

Visualizations include nested tables showing hierarchical traffic by AS, prefix, and gateway, as well as Sankey views showing traffic flows between ASes. Full M:N degree drilldowns let operators pivot from any angle to any other angle without writing queries.