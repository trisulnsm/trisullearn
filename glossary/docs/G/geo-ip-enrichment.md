---
title: What is GeoIP enrichment?
description: GeoIP enrichment adds geolocation data (country, city, ASN, coordinates, ISP) to IP addresses in network logs and flow records, enabling traffic analysis by geographic region and security monitoring by threat origin location.
sidebar_label: GeoIP enrichment
sidebar_position: 47
slug: /glossary/geoip-enrichment
keywords:
  - geoip enrichment
  - geolocation enrichment
  - ip geolocation
  - geo enrichment
  - ip enrichment
  - geographic traffic analysis
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What data does GeoIP enrichment add?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GeoIP enrichment adds country code (ISO two-letter), continent, city, postal code, latitude and longitude coordinates, Autonomous System Number (ASN), Autonomous System organization name, ISP, connection type, timezone, and whether the IP is in the EU. It also identifies the public range to which the IP belongs."
      }
    },
    {
      "@type": "Question",
      "name": "What databases are used for GeoIP enrichment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GeoIP enrichment uses geolocation databases for city-level geolocation and ASN information. These databases cover nearly all IP addresses in use, are updated automatically, and provide latency-free lookups without per-query charges."
      }
    },
    {
      "@type": "Question",
      "name": "What are the use cases for GeoIP enrichment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use cases include security monitoring by threat origin location, compliance with geographic data regulations, traffic analysis by geographic region, building dashboards showing traffic by country, triggering alarms for traffic from specific countries, and optimizing content delivery based on user location."
      }
    },
    {
      "@type": "Question",
      "name": "How does GeoIP enrichment relate to flow monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow monitoring captures source and destination IP addresses. GeoIP enrichment adds geographic context to these IP addresses, enabling querying and reporting by country, city, or ASN. Flow records are enriched with BGP attributes including ASN, which can be combined with GeoIP data for geographic AS traffic analysis."
      }
    }
  ]
};

# What is GeoIP enrichment?

GeoIP enrichment adds geolocation data (country, city, ASN, coordinates, ISP) to IP addresses in network logs and flow records. It enables traffic analysis by geographic region and security monitoring by threat origin location. The enrichment adds fields like country code, continent, city, latitude/longitude, and ASN organization name.

---

## How it works

GeoIP enrichment looks up IP addresses in geolocation databases. For each IP, it adds metadata fields including ISO country code, geographic coordinates, ASN number, and organization name. Private IP addresses (10.0.0.0/8, 192.168.0.0/16, 172.16.0.0/12) are skipped as they have no geographic location.

---

## In network operations

- **NOC:** Build dashboards showing traffic by country or region to identify geographic traffic patterns.
- **SOC:** Trigger alarms for traffic from high-risk countries or detect threats originating from unexpected geographic locations.
- **ISP:** Analyze traffic by geographic region to optimize peering and capacity planning for specific regions.

---

## Enriched data fields

| Field | Description |
|---|---|
| IsoCode | Two-letter country code (US, IN, CN) |
| IsInEU | Boolean indicating if IP is in EU |
| GeoCoords | Latitude and longitude |
| ASNNumber | Autonomous System Number |
| ASNOrg | Autonomous System organization name |
| SourceRange | Public IP range containing the IP |

---

## How Trisul handles it

Trisul enriches flow records with BGP attributes including source and destination ASN. This ASN data can be combined with GeoIP enrichment for geographic AS traffic analysis. Explore Flows enables querying and reporting by country, city, or ASN when GeoIP enrichment is applied. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is ASN?](/glossary/asn)
- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is BGP peering analytics?](/glossary/bgp-peering-analytics)
- [What is IP address?](/glossary/ip-address)

---

## Frequently asked questions

### What data does GeoIP enrichment add?

GeoIP enrichment adds country code (ISO two-letter), continent, city, postal code, latitude and longitude coordinates, Autonomous System Number (ASN), Autonomous System organization name, ISP, connection type, timezone, and whether the IP is in the EU. It also identifies the public range to which the IP belongs.

### What databases are used for GeoIP enrichment?

GeoIP enrichment uses geolocation databases for city-level geolocation and ASN information. These databases cover nearly all IP addresses in use, are updated automatically, and provide latency-free lookups without per-query charges.

### What are the use cases for GeoIP enrichment?

Use cases include security monitoring by threat origin location, compliance with geographic data regulations, traffic analysis by geographic region, building dashboards showing traffic by country, triggering alarms for traffic from specific countries, and optimizing content delivery based on user location.

### How does GeoIP enrichment relate to flow monitoring?

Flow monitoring captures source and destination IP addresses. GeoIP enrichment adds geographic context to these IP addresses, enabling querying and reporting by country, city, or ASN. Flow records are enriched with BGP attributes including ASN, which can be combined with GeoIP data for geographic AS traffic analysis.