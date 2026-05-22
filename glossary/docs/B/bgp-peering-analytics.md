---
title: What is BGP peering analytics?
description: BGP peering analytics monitors traffic flows across BGP peerings by combining flow data with BGP routing information. Trisul provides ISP Peering Analytics with real-time route topology monitoring, nested tables, and Sankey views.
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
  - flow monitoring
  - ASN analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is BGP Peering Analytics?",
  "description": "BGP peering analytics monitors traffic flows across BGP peerings by combining flow data with BGP routing information. Trisul provides ISP Peering Analytics with real-time route topology monitoring, nested tables, and Sankey views.",
  "about": {
    "@type": "DefinedTerm",
    "name": "BGP Peering Analytics",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is BGP peering analytics?

**BGP peering analytics** monitors traffic flows across BGP peerings by combining flow data with BGP routing information. It analyzes traffic per autonomous system, prefix, and peering interface in real time. ISPs use it to negotiate with peers, optimize costs, and select new peering policies. Trisul provides ISP Peering Analytics with real-time route topology monitoring and comprehensive peering dashboards.

---

## How it works

BGP peering analytics combines flow data from NetFlow, J-Flow, sFlow, and IPFIX with BGP routing information from route collectors. The BGP data is automatically in sync with traffic tables. Traffic is mapped to AS number, prefix, gateway, next hop, and peering interface with real-time and historical trending.

The BGP peering analytics process:
1. **Flow data collection** → Gather NetFlow, J-Flow, sFlow, IPFIX from routers/switches
2. **BGP route collection** → Receive BGP routing information from route collectors or internal BGP viewpoints
3. **Data synchronization** → Automatically sync BGP data with traffic tables
4. **Traffic mapping** → Map flows to AS number, prefix, gateway, next hop, peering interface
5. **Analysis and visualization** → Display traffic per AS, prefix, interface with trending
6. **Drilldown** → Pivot from AS to prefix to interface without writing queries

![./images/bgp-peering-analytics.png](./images/bgp-peering-analytics.png)

---

## In network operations

- **NOC:** Monitor which peering links are congested and which ASes are driving traffic volume.
- **ISP:** Use AS and prefix traffic analysis to negotiate settlement-free peering or paid peering.
- **Traffic Engineering:** Optimize exit selection by analyzing geo traffic flows and route topology.

Trisul's BGP peering analytics supports all three operational use cases through real-time route topology monitoring and comprehensive peering dashboards.

---

## AS traffic mapping

| Category | Description | Use Case |
|---|---|---|
| Upstream AS | Traffic sent to upstream providers via transit | Transit cost optimization |
| Downstream AS | Traffic received from downstream customers | Customer billing and capacity planning |
| Peer AS | Traffic exchanged with settlement-free peers | Peering relationship management |
| Origin AS | Traffic to/from the network's own AS | Internal traffic analysis |

---

## What BGP peering analytics measures

| Metric | Description | Use Case |
|---|---|---|
| Traffic per AS number | Volume flows per Autonomous System | Identify top traffic-driving ASes |
| Traffic per prefix | Volume per IP prefix | Prefix-level capacity planning |
| Traffic per gateway | Volume per gateway device | Gateway performance monitoring |
| Traffic per interface | Volume per peering interface | Link congestion detection |
| Next hop analysis | Traffic by BGP next hop | Route optimization |
| Popular content providers | Traffic from Google, Amazon, Facebook, etc. | Content provider peering decisions |

Popular content providers like Google, Amazon, and Facebook are tracked separately for peering negotiation.

---

## How BGP peering analytics helps ISPs

BGP peering analytics helps ISPs in several critical ways:

- **Peering negotiations**: Provides visibility into which ASes and prefixes are driving traffic, enabling data-driven negotiations with content providers and upstream peers
- **Cost optimization**: Identifies traffic patterns that can be optimized through settlement-free peering instead of paid transit
- **New peering policy selection**: Shows which potential peering relationships would be most beneficial based on traffic volumes
- **Congestion detection**: Identifies which peering links are congested and need capacity upgrades
- **Traffic engineering**: Shows where traffic engineering changes would improve performance by optimizing exit selection

---

## What data sources does BGP peering analytics use

BGP peering analytics combines multiple data sources:

| Data Source | Type | Purpose |
|---|---|---|
| NetFlow | Flow data | Traffic volume and metadata |
| J-Flow | Flow data | Juniper flow records |
| sFlow | Flow data | Sampled flow data |
| IPFIX | Flow data | Standardized flow protocol |
| Route collectors | BGP data | External BGP routing information |
| Internal BGP viewpoints | BGP data | Network's own BGP routing table |

The BGP data is automatically in sync with traffic tables, enabling drilldown from AS to prefix to peering interface.

---

## How Trisul handles BGP peering analytics

Trisul provides comprehensive **ISP Peering Analytics** as a complete solution for BGP traffic analysis:

- **Real-time monitoring of active route topology**: Trisul monitors BGP route topology in real time, showing active peering relationships and route changes as they happen
- **Inbuilt BGP route receiver**: Trisul has an inbuilt BGP route receiver that automatically receives and processes BGP routing information, keeping it in sync with traffic tables without requiring external route collectors
- **Nested tables and Sankey views**: Trisul provides nested tables showing hierarchical traffic by AS, prefix, and gateway, plus Sankey views visualizing traffic flows between ASes
- **Multiple specialized dashboards**: Trisul includes dashboards showing AS peerings, prefix analysis, route analytics, and content-to-subscriber maps for comprehensive peering visibility
- **Flow data integration**: Trisul combines flow data from NetFlow, J-Flow, sFlow, and IPFIX with BGP routing information for comprehensive peering analysis
- **M:N degree drilldowns**: Trisul enables full M:N degree drilldowns, letting operators pivot from any angle (AS, prefix, gateway, interface) to any other angle without writing queries

Trisul provides ISP Peering Analytics with real-time monitoring of active route topology, nested table and Sankey views, and an inbuilt BGP route receiver automatically in sync with traffic tables. Multiple dashboards show AS peerings, prefix analysis, route analytics, and content-to-subscriber maps for comprehensive BGP peering visibility.

---

## Related terms

- [BGP](/glossary/bgp)
- [ASN](/glossary/asn)
- [Flow monitoring](/glossary/flow-monitoring)
- [ASN peering](/glossary/asn-peering)
- [NetFlow](/glossary/netflow)
- [Peering analytics](/glossary/peering-analytics)
- [Traffic engineering](/glossary/traffic-engineering)
- [Peering dashboards](/glossary/peering-dashboards)
- [Route collector](/glossary/route-collector)
- [Internet Exchange Point](/glossary/ixp)
- [Transit](/glossary/transit)

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

### How does Trisul implement BGP peering analytics?

Trisul implements BGP peering analytics through ISP Peering Analytics with real-time route topology monitoring, an inbuilt BGP route receiver that stays in sync with traffic tables, nested tables and Sankey views, and multiple specialized dashboards for AS peerings, prefix analysis, route analytics, and content-to-subscriber maps.

### What makes Trisul's BGP peering analytics unique?

Trisul's BGP peering analytics includes an inbuilt BGP route receiver (no external route collectors needed), real-time active route topology monitoring, M:N degree drilldowns without query writing, and comprehensive dashboards covering all aspects of peering analysis.