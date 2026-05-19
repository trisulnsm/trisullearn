---
title: What is flow tagger?
description: A flow tagger is a rule-based mechanism in Trisul Network Analytics that assigns one or more text labels to network flows in real time, based on matching criteria such as IP addresses, ports, protocols, or counter group activity.
sidebar_label: Flow tagger
sidebar_position: 4
slug: /glossary/flow-tagger
keywords:
  - flow tagger
  - flow tagging
  - network flow labeling
  - flow classification
  - flow enrichment
  - trisul flow tagger
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What can you use a flow tagger for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow taggers are used to classify flows that are operationally meaningful but not identifiable from the 5-tuple alone. Common examples include tagging all flows to a specific country or ASN, labeling traffic associated with known internal services, or marking connections that involve a high-risk IP range. Once tagged, flows can be retrieved, grouped, and aggregated by label without rebuilding filter expressions each time."
      }
    },
    {
      "@type": "Question",
      "name": "Can a single flow carry more than one tag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A single flow can be matched by multiple taggers simultaneously and will carry all matching tags. This means a flow from an internal host to an external IP in a monitored country that also matches a threat intelligence rule can be labeled with both tags at once, making it retrievable from either search context."
      }
    },
    {
      "@type": "Question",
      "name": "What is automatic flow tagging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automatic flow tagging uses the AUTO: prefix on a tagger rule and selects a counter group with a wildcard key. Instead of matching a specific value, Trisul automatically extracts the actual key from the counter group and attaches it as the tag value. For example, configuring auto-tagging against the country counter group will tag each flow with the actual country code observed, rather than a static label. This is equivalent to log enrichment in SIEM workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How do flow tags differ from firewall or router-level traffic classification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall and router classification happens at the forwarding plane and is limited to what the device can match in line. Flow tags are applied by a monitoring platform after the fact, using richer context: counter group activity, geolocation, protocol behavior, or combinations of conditions that would not be expressible as a single ACL or policy rule. Tags also persist in the flow record for historical search, whereas forwarding-plane classification typically leaves no searchable audit trail."
      }
    }
  ]
};

# What is flow tagger?

A flow tagger is a rule-based mechanism that assigns one or more text labels to network flows in real time as traffic is observed. Rules are defined against matching criteria: IP addresses, port ranges, protocols, or activity in any Trisul counter group such as country, ASN, or URL category. When a flow matches a rule, the configured label is attached to its record and stored, making that flow searchable and groupable by tag for the lifetime of its retention in the database.

---

## How flow tagger works

Each flow tagger rule is built from a Trisul filter expression that specifies the matching condition and a tag string that will be written to matching flow records. Rules are evaluated in real time as flows are observed. A flow that matches one or more rules receives all matching tags simultaneously; there is no limit to how many tags a single flow can carry.

Trisul also supports automatic flow tagging using the AUTO: prefix on a tag name. In this mode, instead of writing a static label, Trisul extracts the actual value of the matched counter group key and uses it as the tag. Configuring automatic tagging against the country counter group, for example, tags every flow with the actual country code seen in that flow rather than a predefined string. This is functionally equivalent to log enrichment in SIEM workflows: the tag makes raw flow records carry contextual metadata that would otherwise require a separate lookup at query time.

---

## Flow tagger in network operations

The primary value of flow tagging is that it moves classification work to ingestion time rather than query time. Without tags, an analyst investigating traffic to a specific country or internal service segment must reconstruct filter expressions for every search. With a tagger in place, the label is already on the record and a simple tag search returns all matching flows regardless of when they occurred.

In SOC workflows, flow taggers are used to flag traffic matching threat intelligence criteria, mark east-west flows between sensitive segments, or identify connections involving monitored user groups. In ISP and enterprise operations, taggers are used to classify traffic by customer, service type, or geographic destination. In both cases, tagged flows can be reviewed through the Flow Taggers tool, searched using Explore Flows, or aggregated using the Aggregate Flows tool in Trisul.

---

## Flow tagger vs flow tracker

| Dimension | Flow tagger | Flow tracker |
|---|---|---|
| Primary function | Assigns text labels to flows at ingestion | Monitors flows for conditions and generates alerts |
| Trigger | Matching rule on IP, port, protocol, or counter group | Threshold or behavioral condition on an active flow |
| Output | A searchable label on the flow record | An alert or notification when condition is met |
| Query use | Retrieve and group flows by label after the fact | Active detection during flow lifetime |
| Best fit | Classification, enrichment, retrospective search | Real-time detection of elephant flows, anomalies |

Flow taggers and flow trackers address different operational needs and are typically used together. Taggers organize and enrich the flow database for investigative search; trackers fire alerts during live traffic observation.

---

## How Trisul handles flow tagger

Trisul ships with a set of built-in flow taggers that are disabled by default. Operators create and enable taggers through the admin interface under Context: default, Profile0, Flows, Flow Taggers. Each tagger requires a session group, a tag string, and a filter rule built using the Trisul Filter Format or the interactive Rule Builder. Changes take effect after a Trisul restart.

Tagger groups provide a namespace for tags, allowing operators to distinguish tags from different classification contexts when using the Aggregate Flows tool. For example, tags from a country-based tagger and tags from a service-classification tagger can be kept in separate groups and queried independently. Full documentation is at https://docs.trisul.org/docs/ug/flow/tagger/.

---

## Related terms

- [What is a flow?](/glossary/flow)
- [What is flow tracker?](/glossary/flow-tracker)
- [What is flow timeout?](/glossary/flow-timeout)
- [What is NetFlow?](/glossary/netflow)
- [What is IPFIX?](/glossary/ipfix)
- [What is full packet capture?](/glossary/full-packet-capture)
- [What is network security monitoring?](/glossary/network-security-monitoring)

---

## Frequently asked questions

### What can you use a flow tagger for?

Flow taggers are used to classify flows that are operationally meaningful but not identifiable from the 5-tuple alone. Common examples include tagging all flows to a specific country or ASN, labeling traffic associated with known internal services, or marking connections that involve a high-risk IP range. Once tagged, flows can be retrieved, grouped, and aggregated by label without rebuilding filter expressions each time.

### Can a single flow carry more than one tag?

Yes. A single flow can be matched by multiple taggers simultaneously and will carry all matching tags. This means a flow from an internal host to an external IP in a monitored country that also matches a threat intelligence rule can be labeled with both tags at once, making it retrievable from either search context.

### What is automatic flow tagging?

Automatic flow tagging uses the AUTO: prefix on a tagger rule and selects a counter group with a wildcard key. Instead of matching a specific value, Trisul automatically extracts the actual key from the counter group and attaches it as the tag value. For example, configuring auto-tagging against the country counter group will tag each flow with the actual country code observed, rather than a static label. This is equivalent to log enrichment in SIEM workflows.

### How do flow tags differ from firewall or router-level traffic classification?

Firewall and router classification happens at the forwarding plane and is limited to what the device can match in line. Flow tags are applied by a monitoring platform using richer context: counter group activity, geolocation, protocol behavior, or combinations of conditions not expressible as a single ACL. Tags also persist in the flow record for historical search, whereas forwarding-plane classification typically leaves no searchable audit trail.