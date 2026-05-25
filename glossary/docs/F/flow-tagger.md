---
title: What is flow tagger?
description: A flow tagger is a rule-based enrichment mechanism that assigns contextual labels to network flows based on matching conditions such as addresses, ports, protocols, applications, or metadata-derived attributes.
sidebar_label: Flow tagger
sidebar_position: 4
slug: /glossary/flow-tagger
keywords:
  - flow tagger
  - flow tagging
  - network flow labeling
  - flow enrichment
  - flow classification
  - telemetry enrichment
  - traffic tagging
  - trisul flow tagger
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What can you use flow tagging for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow tagging is commonly used to enrich flow telemetry with operationally meaningful labels such as countries, ASNs, internal services, application groups, customer identifiers, threat-intelligence matches, or policy-related classifications. Tagged flows become easier to search, aggregate, correlate, and analyze during operational or security investigations."
      }
    },
    {
      "@type": "Question",
      "name": "Can a single flow carry multiple tags?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A single flow may match multiple tagging rules simultaneously and therefore carry multiple contextual labels. Multi-tag visibility improves search flexibility and supports overlapping operational or security classifications."
      }
    },
    {
      "@type": "Question",
      "name": "What is automatic flow tagging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automatic flow tagging dynamically derives tag values from matched metadata rather than assigning only predefined static labels. Depending on the platform implementation, tags may be generated from attributes such as country codes, ASNs, applications, or other contextual telemetry fields."
      }
    },
    {
      "@type": "Question",
      "name": "How are flow tags different from firewall classification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Firewall classification typically operates within the forwarding path using inline policy logic, while flow tagging enriches telemetry after observation for analytics, search, reporting, and historical investigations. Flow tags are generally intended for visibility and analysis workflows rather than direct packet-forwarding decisions."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support flow-tagging workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports flow-tagging workflows through Flow Taggers, Trisul Filter Format rule matching, automatic tagging capabilities, Explore Flows integration, Aggregate Flows workflows, and contextual traffic-enrichment features for operational and security analysis."
      }
    }
  ]
};

# What is flow tagger?

A **flow tagger** is a rule-based enrichment mechanism that assigns contextual labels to network flows based on matching conditions such as addresses, ports, protocols, applications, or metadata-derived attributes.

Flow tagging adds operational context to traffic telemetry by attaching searchable labels directly to flow records.

Common tagging criteria include:
- IP addresses or subnets
- Ports and protocols
- ASN information
- Country metadata
- Application identifiers
- Service classifications
- Threat-intelligence matches
- User-defined filters

Tagged flows become easier to:
- Search
- Aggregate
- Correlate
- Investigate
- Report on
- Classify operationally

Flow tagging is commonly used in:
- Security operations
- Traffic investigations
- Historical analysis
- Service classification
- Customer visibility
- Threat hunting
- Policy-oriented reporting

Trisul supports flow-tagging workflows using Flow Taggers, contextual traffic enrichment, and integrated traffic-analysis capabilities.

---

## How flow tagging works

Flow tagging evaluates traffic telemetry against defined matching rules and attaches labels to matching flow records.

Typical workflow:

1. **Telemetry observation** → Flow records are generated or ingested
2. **Rule evaluation** → Matching logic is applied against flow metadata
3. **Context enrichment** → Matching labels are attached to flow records
4. **Historical storage** → Tagged flows are retained for later analysis
5. **Operational querying** → Analysts search and aggregate flows using tags

Matching conditions may include:
- Source or destination addresses
- Ports and protocols
- Application metadata
- ASN information
- Country codes
- Counter-group activity
- Behavioral indicators
- User-defined filter logic

Depending on implementation, tagging workflows may:
- Apply multiple tags simultaneously
- Use static labels
- Generate dynamic labels
- Enrich historical telemetry
- Support grouped tag namespaces

The exact behavior depends on:
- Platform capabilities
- Rule configuration
- Metadata availability
- Telemetry architecture

![](./images/flow-tagger.png)

---

## Flow tagging in network operations

Flow tagging is widely used across operational and security environments.

### SOC operations

Security teams use flow tagging for:
- Threat-intelligence enrichment
- Suspicious traffic classification
- Lateral movement visibility
- Data-exfiltration investigations
- High-risk communication tagging
- Historical threat hunting

Tagging improves operational workflows by making:
- Suspicious traffic easier to retrieve
- Investigations faster to scope
- Historical searches more efficient
- Correlation workflows more consistent

### NOC operations

Network operations teams use tagging for:
- Service classification
- Customer segmentation
- Geographic traffic analysis
- Application visibility
- Traffic engineering
- Operational reporting

Examples include:
- Labeling traffic by country
- Identifying customer traffic groups
- Marking internal services
- Tracking specific applications
- Classifying WAN traffic categories

### ISP and carrier environments

ISPs and carriers may use flow tagging for:
- Subscriber classification
- Traffic categorization
- Service visibility
- Usage reporting
- Operational troubleshooting
- Policy-oriented analytics

The operational value depends heavily on:
- Tagging accuracy
- Metadata quality
- Rule consistency
- Monitoring architecture

---

## Automatic flow tagging

Some telemetry platforms support dynamic or automatic tagging workflows.

Instead of assigning only predefined labels, automatic tagging may:
- Extract metadata values dynamically
- Generate contextual labels automatically
- Apply enrichment based on observed telemetry

Examples include:
- Country-code tagging
- ASN-based tagging
- Application-derived labels
- Dynamic service classification

This approach improves:
- Historical searchability
- Traffic enrichment
- Operational correlation
- Investigation workflows

Automatic tagging behaves similarly to telemetry enrichment workflows commonly used in:
- SIEM platforms
- Security analytics systems
- Observability pipelines
- Historical traffic-analysis systems

---

## Flow tagger vs flow tracker

| Dimension | Flow tagger | Flow tracker |
|---|---|---|
| Primary purpose | Enrich and classify telemetry | Detect operational or behavioral conditions |
| Common output | Searchable contextual labels | Alerts, notifications, or triggered workflows |
| Operational focus | Historical search and organization | Real-time monitoring and detection |
| Typical use case | Traffic classification and enrichment | Elephant-flow or anomaly detection |
| Workflow style | Metadata enrichment | Behavioral monitoring |

The two workflows are complementary and commonly used together.

---

## Operational considerations

Flow-tagging workflows commonly face operational considerations including:
- Rule complexity
- Metadata availability
- High-cardinality labels
- Telemetry scaling
- Rule-overlap behavior
- Historical retention
- Search performance
- Tag consistency

Operational accuracy depends heavily on:
- Rule quality
- Metadata completeness
- Monitoring placement
- Telemetry fidelity
- Namespace organization

Poorly designed tagging strategies may create:
- Excessive cardinality
- Inconsistent labels
- Operational confusion
- Query inefficiency

Organizations commonly use:
- Grouped tag namespaces
- Standardized tagging conventions
- Contextual metadata normalization
- Historical enrichment workflows

to improve operational consistency.

---

## How Trisul handles flow tagger

Trisul supports configurable flow-tagging workflows through integrated telemetry-enrichment and traffic-analysis capabilities.

Relevant capabilities include:

- **Flow Taggers** for contextual flow enrichment
- **Trisul Filter Format** rule matching
- **Automatic tagging workflows**
- **Tagger groups** for namespace organization
- **Explore Flows** integration
- **Aggregate Flows** workflows
- **Historical traffic analysis**
- **Host and application traffic visibility**
- **Operational search and correlation workflows**
- **Context-aware telemetry enrichment**

Trisul supports both:
- Static tag assignment
- Dynamic metadata-derived tagging

depending on operational requirements and rule configuration.

These capabilities help operators classify traffic, accelerate investigations, organize historical telemetry, enrich operational visibility, and support security-analysis workflows.

Trisul primarily focuses on scalable traffic analytics and operational visibility rather than inline enforcement workflows.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#incident-investigation
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-performance-monitoring

---

## Related terms

- [Flow](/glossary/flow)
- [Flow tracker](/glossary/flow-tracker)
- [Flow timeout](/glossary/flow-timeout)
- [NetFlow](/glossary/netflow)
- [IPFIX](/glossary/ipfix)
- [Full packet capture](/glossary/full-packet-capture)
- [Network security monitoring](/glossary/network-security-monitoring)
- [Traffic analysis](/glossary/traffic-analysis)

---

## Frequently asked questions

### What can you use flow tagging for?

Flow tagging is commonly used to enrich flow telemetry with operationally meaningful labels such as countries, ASNs, internal services, application groups, customer identifiers, threat-intelligence matches, or policy-related classifications. Tagged flows become easier to search, aggregate, correlate, and analyze during operational or security investigations.

### Can a single flow carry multiple tags?

Yes. A single flow may match multiple tagging rules simultaneously and therefore carry multiple contextual labels. Multi-tag visibility improves search flexibility and supports overlapping operational or security classifications.

### What is automatic flow tagging?

Automatic flow tagging dynamically derives tag values from matched metadata rather than assigning only predefined static labels. Depending on the platform implementation, tags may be generated from attributes such as country codes, ASNs, applications, or other contextual telemetry fields.

### How are flow tags different from firewall classification?

Firewall classification typically operates within the forwarding path using inline policy logic, while flow tagging enriches telemetry after observation for analytics, search, reporting, and historical investigations. Flow tags are generally intended for visibility and analysis workflows rather than direct packet-forwarding decisions.

### How does Trisul support flow-tagging workflows?

Trisul supports flow-tagging workflows through Flow Taggers, Trisul Filter Format rule matching, automatic tagging capabilities, Explore Flows integration, Aggregate Flows workflows, and contextual traffic-enrichment features for operational and security analysis.