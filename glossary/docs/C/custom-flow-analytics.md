---
title: What is custom flow analytics?
description: Custom flow analytics extends standard flow monitoring by applying user-defined classification, enrichment, tagging, and detection logic to flow data for organization-specific operational, security, and business analytics workflows.
sidebar_label: Custom flow analytics
sidebar_position: 25
slug: /glossary/custom-flow-analytics
keywords:
  - custom flow analytics
  - flow analytics
  - custom network analytics
  - flow tagger
  - lua flow analytics
  - user defined flow analytics
  - flow based detection
  - traffic enrichment
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is custom flow analytics needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom flow analytics adds organization-specific operational and security context to standard flow monitoring by allowing custom classification, tagging, enrichment, and detection workflows tailored to local requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What can custom flow analytics classify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom flow analytics can classify traffic by customer, subnet, business unit, application, geographic region, ASN, security category, service type, operational role, or organization-specific traffic patterns."
      }
    },
    {
      "@type": "Question",
      "name": "How does Lua extend flow analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lua scripting enables custom flow processing, enrichment, tagging, counters, alerts, and organization-specific analytical workflows within Trisul traffic analytics environments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between flow tagging and flow filtering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flow tagging enriches traffic records with additional labels or metadata while retaining the original records. Flow filtering selectively limits or isolates traffic records for analysis or processing workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How does Trisul support custom flow analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trisul supports custom flow analytics through Flow Taggers, Lua scripting, custom counter groups, traffic enrichment workflows, and flow-based operational analytics."
      }
    }
  ]
};

# What is custom flow analytics?

**Custom flow analytics** extends standard flow monitoring by applying user-defined classification, enrichment, tagging, and detection logic to flow data for organization-specific operational, security, and business analytics workflows.

Traditional flow analytics typically focuses on:
- Top talkers
- Protocol distribution
- Interface utilization
- Traffic volumes
- Basic flow visibility

Custom flow analytics adds organizational context by enabling operators to:
- Tag traffic
- Apply business-specific classifications
- Create custom detections
- Build specialized operational metrics
- Implement policy-aware analytics
- Enrich flow data with external context

Trisul supports custom flow analytics through Flow Taggers, Lua scripting, and extensible traffic analytics workflows.

---

## How custom flow analytics works

Custom flow analytics extends standard telemetry processing with user-defined analytical logic.

Typical workflow:

1. **Flow ingestion** → Flow telemetry is collected from exporters
2. **Traffic classification** → User-defined logic categorizes traffic
3. **Enrichment and tagging** → Labels or metadata are attached to flows
4. **Custom analytics processing** → Rules, counters, or detections are applied
5. **Aggregation and reporting** → Results appear in dashboards and analytics workflows
6. **Operational investigation** → Analysts investigate tagged or enriched traffic

Custom analytics may use:
- IP ranges
- Ports
- Protocols
- ASN mappings
- Geographic metadata
- Security intelligence
- Organizational rules
- Business-specific classifications

These workflows allow traffic analysis to reflect operational and organizational requirements rather than only generic network metrics.

---

## Custom flow analytics in network operations

Custom analytics workflows are commonly used in enterprise, ISP, SOC, and managed-service environments.

Common operational use cases include:

- **Customer-based analytics**: Group traffic by tenant or subscriber
- **Security analytics**: Detect organization-specific policy violations or suspicious activity
- **Compliance workflows**: Label traffic associated with regulated environments
- **Service analytics**: Classify applications or business-critical services
- **Threat investigation**: Enrich flows with threat intelligence or risk metadata
- **Operational reporting**: Build organization-specific traffic reports and dashboards

Custom enrichment improves the operational usefulness of flow telemetry by aligning traffic analytics with business and security requirements.

---

## Flow tagging vs flow filtering

| Dimension | Flow tagging | Flow filtering |
|---|---|---|
| Purpose | Add metadata or labels | Restrict or isolate traffic |
| Record retention | Original records remain available | Analysis scope may be reduced |
| Operational focus | Enrichment and categorization | Selection and isolation |
| Typical use | Business or security labeling | Scoped analysis or processing |

Tagging enriches flow visibility while filtering narrows the analytical scope.

---

## Custom analytics vs built-in analytics

| Dimension | Built-in analytics | Custom flow analytics |
|---|---|---|
| Classification | Standard traffic dimensions | Organization-specific logic |
| Detection | Generic analytics workflows | Customized detections and policies |
| Reporting | Predefined operational views | Business-specific operational reporting |
| Extensibility | Platform defaults | User-defined enrichment and scripting |
| Operational context | Generic traffic visibility | Tailored organizational intelligence |

Custom analytics helps operators adapt flow monitoring to real operational environments.

---

## What is flow enrichment?

Flow enrichment adds contextual information to flow records to improve operational visibility and analysis.

Examples include:
- Customer labels
- Business-unit mappings
- Threat intelligence metadata
- Geographic information
- Service classifications
- Organizational ownership
- Compliance scopes

Enriched flow records improve:
- Searchability
- Reporting
- Security analysis
- Traffic investigation
- Operational context awareness

---

## How Trisul handles custom flow analytics

Trisul supports custom flow analytics through extensible traffic-processing and enrichment workflows.

Relevant capabilities include:

- **Flow Taggers** for traffic classification and enrichment
- **Lua scripting** for custom analytics logic
- **Custom counter groups** for organization-specific aggregation
- **Flow-based traffic analytics** using NetFlow, IPFIX, sFlow, and related telemetry
- **Top-K analytics integration**
- **Traffic investigation workflows**
- **Operational dashboards and reporting**
- **Historical traffic trending and analysis**

These capabilities help operators adapt analytics workflows to local operational, business, and security requirements.

Relevant Trisul use cases:
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#network-security-monitoring
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#advanced-threat-detection
- https://www.trisul.org/trisul-netflow-analyzer-usecases/#isp-network-monitoring

---

## Related terms

- [Flow tagger](/glossary/flow-tagger)
- [Flow monitoring](/glossary/flow-monitoring)
- [Flow analysis](/glossary/flow-analysis)
- [Top-K analytics](/glossary/top-k-analytics)
- [Flow data](/glossary/flow-data)
- [Counter groups](/glossary/counter-groups)
- [Traffic enrichment](/glossary/traffic-enrichment)

---

## Frequently asked questions

### Why is custom flow analytics needed?

Custom flow analytics adds organization-specific operational and security context to standard flow monitoring by allowing custom classification, tagging, enrichment, and detection workflows tailored to local requirements.

### What can custom flow analytics classify?

Custom flow analytics can classify traffic by customer, subnet, business unit, application, geographic region, ASN, security category, service type, operational role, or organization-specific traffic patterns.

### How does Lua extend flow analytics?

Lua scripting enables custom flow processing, enrichment, tagging, counters, alerts, and organization-specific analytical workflows within Trisul traffic analytics environments.

### What is the difference between flow tagging and flow filtering?

Flow tagging enriches traffic records with additional labels or metadata while retaining the original records. Flow filtering selectively limits or isolates traffic records for analysis or processing workflows.

### How does Trisul support custom flow analytics?

Trisul supports custom flow analytics through Flow Taggers, Lua scripting, custom counter groups, traffic enrichment workflows, and flow-based operational analytics.