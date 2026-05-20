---
title: What is home network in Trisul?
description: In Trisul, home network defines the IP subnets under your administrative domain. Trisul uses this to classify traffic direction (incoming, outgoing, internal, transit) and enable features like directional traffic reports and flow tagging.
sidebar_label: Home network
sidebar_position: 49
slug: /glossary/home-network
keywords:
  - home network
  - trisul home network
  - traffic direction
  - incoming traffic
  - outgoing traffic
  - transit traffic
  - internal traffic
  - administrative domain
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is home network in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Trisul, home network defines which IP addresses belong to your network under your administrative domain. Several Trisul features depend on distinguishing between home network IPs and external IPs. By default, Trisul considers RFC1918 private IP ranges (10.0.0.0/8, 192.168.0.0/16, 172.16.0.0/12) as home networks. Admin can add custom subnets to define home network accurately."
      }
    },
    {
      "@type": "Question",
      "name": "What are the traffic direction classifications in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul classifies traffic into four directions based on home network: Outgoing Traffic (source IP in home network, destination IP external), Incoming Traffic (source IP external, destination IP in home network), Internal Traffic (both source and destination IP in home network), and Transit Traffic (both source and destination IP external to home network). These directional metrics appear in Aggregates counter group."
      }
    },
    {
      "@type": "Question",
      "name": "How do you configure home network in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Login as admin, go to Context: Default → Profile0 → Home Networks. Click Add button, enter an IP and subnet mask (e.g., 59.92.0.0 and 255.255.0.0) that represents your home network, then click Create. You can add networks one by one or copy-paste comma-separated or one-per-line networks in CIDR format. Click Delete to remove networks or Edit to modify existing entries."
      }
    },
    {
      "@type": "Question",
      "name": "How does home network enable flow tagging in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses Flow Taggers to tag each flow with a direction hint based on endpoint home addresses. Enable TagFlowsWithDirection setting in the NetFlow configuration file. Then in Tools → Explore Flows, you can search for flows with directional tags. For example, to see all Transit flows, enter tag=[dir]transit in the search query."
      }
    }
  ]
};

# What is home network in Trisul?

In Trisul, **home network** defines the IP subnets under your administrative domain. Trisul uses this to classify traffic direction (incoming, outgoing, internal, transit) and enable features like directional traffic reports and flow tagging. By default, Trisul considers RFC1918 private IP ranges as home networks, but admins can add custom subnets for accurate classification.

---

## Traffic direction classifications

Trisul classifies traffic into four directions based on home network configuration:

| Direction | Definition |
|---|---|
| **Outgoing Traffic** | Source IP is in home network, but Dest IP is not |
| **Incoming Traffic** | Source IP is not in home network, but Dest IP is in home network |
| **Internal Traffic** | Both Source IP and Dest IP are in home network |
| **Transit Traffic** | Both Source IP and Dest IP are not in home network |

---

## Default home network ranges

Trisul by default considers the RFC1918 private IP ranges as home networks:

- 10.0.0.0/8
- 192.168.0.0/16
- 172.16.0.0/12

For most users who deployed NAT, this should be sufficient with no additional configuration needed.

---

## How to configure home network

### Add a new home network

1. Login as **admin**
2. Go to **Context: Default → Profile0 → Home Networks**
3. Click **Add** button on the upper right hand side
4. Enter an IP and subnet mask (e.g., 59.92.0.0 and 255.255.0.0)
5. Click **Create** button to add the home network

### Add networks in bulk

Copy-paste comma-separated or one-per-line networks in CIDR format in "Network Number". When using CIDR format, you can leave the "Network Mask" field blank.

### Edit or delete networks

- Click the action button against any network number and select **Edit** to modify network number and mask, then click **Update**
- Select **Delete** to remove a single home network
- Click **Delete non private networks** to remove all elements except the three built-in private ranges

---

## Viewing traffic direction

Home network is crucial for Trisul reports. Beyond Internal/External Hosts classification, you can view directional traffic data.

### Metrics in Aggregates Counter Group

Login as `user` and go to **Tools → Long Term Traffic**:

- Counter group = Aggregates
- Meter = Total
- Keys to the Item = DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, DIR_WITHINHOME

This shows traffic details in each direction (into home, out of home, transit, within home).

### Flow tagging with direction

Trisul uses Flow Taggers to tag each flow with a direction hint based on endpoint home addresses:

1. Enable the `TagFlowsWithDirection` setting in the NetFlow configuration file
2. Go to **Tools → Explore Flows** to search for flows with directional tags
3. For example, to see all Transit flows, enter `tag=[dir]transit` in the search query

---

## Home network in ISP deployment

For ISP deployments, the home network is defined differently. The Home AS Number is configured in the NetFlow and Geo configuration files. All autonomous systems (AS) whose prefixes are advertised by the network being monitored by Trisul are considered home networks.

Trisul automatically collects route information from public and private BGP peering locations (Amsterdam, Singapore, Chicago) and uses BGP analytics to compute a list of AS advertised as downstream from the Trisul customer. This information is automatically fed into processing for traffic direction classification.

---

## How Trisul handles it

Trisul uses home network configuration to classify traffic direction and enable directional reporting. Flow data is tagged with direction hints (DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, DIR_WITHINHOME) based on whether source/destination IPs are in the home network. This directional classification appears in Aggregates counter group and can be queried in Explore Flows using directional flow tags. Full documentation is at https://docs.trisul.org/docs/ag/context/home_networks/.

---

## Related terms

- [What is flow tagging?](/glossary/flow-tagging)
- [What is Explore Flows?](/glossary/explore-flows)
- [What is counter group?](/glossary/counter-group)
- [What is BGP peering analytics?](/glossary/bgp-peering-analytics)
- [What is RFC1918?](/glossary/rfc1918)

---

## Frequently asked questions

### What is home network in Trisul?

In Trisul, home network defines which IP addresses belong to your network under your administrative domain. Several Trisul features depend on distinguishing between home network IPs and external IPs. By default, Trisul considers RFC1918 private IP ranges (10.0.0.0/8, 192.168.0.0/16, 172.16.0.0/12) as home networks. Admin can add custom subnets to define home network accurately.

### What are the traffic direction classifications in Trisul?

Trisul classifies traffic into four directions based on home network: Outgoing Traffic (source IP in home network, destination IP external), Incoming Traffic (source IP external, destination IP in home network), Internal Traffic (both source and destination IP in home network), and Transit Traffic (both source and destination IP external to home network). These directional metrics appear in Aggregates counter group.

### How do you configure home network in Trisul?

Login as admin, go to Context: Default → Profile0 → Home Networks. Click Add button, enter an IP and subnet mask (e.g., 59.92.0.0 and 255.255.0.0) that represents your home network, then click Create. You can add networks one by one or copy-paste comma-separated or one-per-line networks in CIDR format. Click Delete to remove networks or Edit to modify existing entries.

### How does home network enable flow tagging in Trisul?

Trisul uses Flow Taggers to tag each flow with a direction hint based on endpoint home addresses. Enable TagFlowsWithDirection setting in the NetFlow configuration file. Then in Tools → Explore Flows, you can search for flows with directional tags. For example, to see all Transit flows, enter tag=[dir]transit in the search query.