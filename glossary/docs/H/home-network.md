---
title: What is home network in Trisul?
description: In Trisul, home network defines the IP subnets under your administrative domain. Trisul uses this to classify traffic direction as incoming, outgoing, internal, or transit and enable features like directional traffic reports and flow tagging.
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
        "text": "In Trisul, home network defines which IP addresses belong to your network under your administrative domain. Several Trisul features depend on distinguishing between home network IPs and external IPs. By default, Trisul considers RFC1918 private IP ranges including 10.0.0.0/8, 192.168.0.0/16, and 172.16.0.0/12 as home networks. Admin can add custom subnets to define home network accurately."
      }
    },
    {
      "@type": "Question",
      "name": "What are the traffic direction classifications in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul classifies traffic into four directions based on home network. Outgoing Traffic has source IP in home network but destination IP external. Incoming Traffic has source IP external but destination IP in home network. Internal Traffic has both source and destination IP in home network. Transit Traffic has both source and destination IP external to home network. These directional metrics appear in Aggregates counter group."
      }
    },
    {
      "@type": "Question",
      "name": "How do you configure home network in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Login as admin, go to Context: Default, then Profile0, then Home Networks. Click Add button, enter an IP and subnet mask such as 59.92.0.0 and 255.255.0.0 that represents your home network, then click Create. You can add networks one by one or copy-paste comma-separated or one-per-line networks in CIDR format. Click Delete to remove networks or Edit to modify existing entries."
      }
    },
    {
      "@type": "Question",
      "name": "How does home network enable flow tagging in Trisul?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul uses Flow Taggers to tag each flow with a direction hint based on endpoint home addresses. Enable TagFlowsWithDirection setting in the NetFlow configuration file. Then in Tools, select Explore Flows, and you can search for flows with directional tags. For example, to see all Transit flows, enter tag equals [dir]transit in the search query."
      }
    }
  ]
};

# What is home network in Trisul?

In Trisul, home network defines the IP subnets under your administrative domain. Trisul uses this to classify traffic direction as incoming, outgoing, internal, or transit and enable features like directional traffic reports and flow tagging. By default, Trisul considers RFC1918 private IP ranges as home networks, but admins can add custom subnets for accurate classification.

---

## How home network works in Trisul

Trisul collects flow data from network devices and classifies traffic by network segment. Home network traffic is identified by IP address ranges, device types, or network topology configuration. Explore Flows enables querying traffic by home network segment, showing bandwidth usage, top applications, and communication patterns specific to home devices.

---

## Home network in network operations

Login as admin and go to Context: Default, then Profile0, then Home Networks to configure. Traffic direction metrics appear in the Aggregates counter group. Login as user and go to Tools, then Long Term Traffic, set Counter group to Aggregates, Meter to Total, and Keys to the Item to DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, and DIR_WITHINHOME to view directional traffic data.

---

## Traffic direction classifications

| Direction | Definition |
|---|---|
| Outgoing Traffic | Source IP is in home network, but destination IP is not |
| Incoming Traffic | Source IP is not in home network, but destination IP is in home network |
| Internal Traffic | Both source IP and destination IP are in home network |
| Transit Traffic | Both source IP and destination IP are not in home network |

---

## What makes home network classification work in practice

The home network definition must match your actual network topology. If you add new subnets and forget to update the home network configuration, traffic from those subnets will be classified as transit instead of internal. This skews reports and breaks directional alerts. Review the configuration after any network change.

For ISP deployments, the home network is defined differently. The Home AS Number is configured in the NetFlow and Geo configuration files. All autonomous systems whose prefixes are advertised by the network being monitored by Trisul are considered home networks. Trisul automatically collects route information from public and private BGP peering locations and uses BGP analytics to compute AS advertised as downstream.

---

## How Trisul handles home network

Trisul uses home network configuration to classify traffic direction and enable directional reporting. Flow data is tagged with direction hints including DIR_INTOHOME, DIR_OUTOFHOME, DIR_TRANSIT, and DIR_WITHINHOME based on whether source and destination IPs are in the home network. This directional classification appears in Aggregates counter group and can be queried in Explore Flows using directional flow tags. Full documentation is at https://docs.trisul.org/docs/ag/context/home_networks/.

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

In Trisul, home network defines which IP addresses belong to your network under your administrative domain. Several Trisul features depend on distinguishing between home network IPs and external IPs. By default, Trisul considers RFC1918 private IP ranges including 10.0.0.0/8, 192.168.0.0/16, and 172.16.0.0/12 as home networks. Admin can add custom subnets to define home network accurately.

### What are the traffic direction classifications in Trisul?

Trisul classifies traffic into four directions based on home network. Outgoing Traffic has source IP in home network but destination IP external. Incoming Traffic has source IP external but destination IP in home network. Internal Traffic has both source and destination IP in home network. Transit Traffic has both source and destination IP external to home network. These directional metrics appear in Aggregates counter group.

### How do you configure home network in Trisul?

Login as admin, go to Context: Default, then Profile0, then Home Networks. Click Add button, enter an IP and subnet mask such as 59.92.0.0 and 255.255.0.0 that represents your home network, then click Create. You can add networks one by one or copy-paste comma-separated or one-per-line networks in CIDR format. Click Delete to remove networks or Edit to modify existing entries.

### How does home network enable flow tagging in Trisul?

Trisul uses Flow Taggers to tag each flow with a direction hint based on endpoint home addresses. Enable TagFlowsWithDirection setting in the NetFlow configuration file. Then in Tools, select Explore Flows, and you can search for flows with directional tags. For example, to see all Transit flows, enter tag equals [dir]transit in the search query.