---
title: What is anomaly detection?
description: Anomaly detection identifies data points, events, or observations that deviate significantly from normal behavior.
sidebar_label: Anomaly detection
sidebar_position: 42
slug: /glossary/anomaly-detection
keywords:
  - anomaly detection
  - traffic anomaly detection
  - network anomaly detection
  - outlier detection
  - baseline deviation
  - threshold alerting
  - behavioral analytics
  - baseline traffic analytics
  - DDoS detection
  - flow monitoring
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Anomaly Detection?",
  "description": "Anomaly detection identifies data points, events, or observations that deviate significantly from normal behavior.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Anomaly Detection",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is anomaly detection?

Anomaly detection identifies data points, events, or observations that deviate significantly from **normal behavior**. In network security, it can help identify threats like DDoS attacks, port scans, and data exfiltration by comparing current traffic against established baselines. Static baselines are fixed; dynamic baselines adapt to time-of-day and day-of-week patterns for fewer false positives.

---

## How it works

Anomaly detection can use supervised learning with labeled data, unsupervised learning to find outliers, or semi-supervised learning trained only on normal data. It establishes baselines for normal traffic patterns, then flags deviations such as traffic spikes, unusual connection patterns, or asymmetric flows.

The detection process typically involves:
1. **Data collection** → Gather flow metrics, traffic volumes, and connection counts.
2. **Baseline establishment** → Learn normal patterns over time, such as hours, days, and weeks.
3. **Deviation analysis** → Compare current traffic against the baseline.
4. **Anomaly scoring** → Measure how far current behavior deviates from normal.
5. **Alerting** → Trigger notifications when deviation exceeds a threshold.

---

## In network operations

- **NOC:** Detect performance issues by identifying traffic spikes that deviate from baseline utilization patterns.
- **SOC:** Detect security incidents by identifying DDoS attacks, port scans, or data exfiltration through traffic anomalies.
- **Capacity Planning:** Identify links approaching saturation by detecting sustained deviations from normal traffic patterns.

Anomaly detection is most useful when the baseline reflects the network’s natural traffic patterns, since that reduces false positives.

---

## Types of anomalies

| Type | Description | Example |
|---|---|---|
| Point anomaly | An individual data point deviates from the norm | A single traffic spike at 3 PM |
| Contextual anomaly | A value is abnormal in a specific context | High traffic during off-peak hours |
| Collective anomaly | A group of points together indicates abnormality | Sustained high traffic from a single source |

---

## Approaches to anomaly detection

| Approach | How it works | Use Case |
|---|---|---|
| Supervised learning | Trains on labeled normal and abnormal data | Known attack patterns with labeled data |
| Unsupervised learning | Finds outliers without labeled data | Unknown threats, exploratory analysis |
| Semi-supervised learning | Trains only on normal data and flags deviations | Security monitoring when labeled attack data is scarce |

---

## Threshold vs baseline

| Dimension | Threshold-based | Baseline-based |
|---|---|---|
| Limits | Fixed values, such as 80% utilization | Derived from historical patterns |
| Adaptation | None | Accounts for time-of-day and day-of-week |
| False positives | Higher | Lower |
| Best for | Simple, stable networks | Dynamic modern networks |

Baseline-based detection is often more effective because it adapts to normal variation in the network.

---

## Network security uses

Anomaly detection supports network security by:

- **DDoS attack detection**: Identifying traffic volume spikes that deviate from baseline.
- **Port scan detection**: Finding unusual connection patterns where a single source contacts many destinations or ports.
- **Data exfiltration detection**: Identifying asymmetric traffic flows where outbound traffic exceeds normal patterns.
- **Reconnaissance activity**: Spotting scans of non-standard ports or unusual protocol usage.
- **Lateral movement detection**: Finding abnormal internal traffic patterns that may indicate compromise.

---

## Trisul relevance

Anomaly detection is relevant to Trisul Network Analytics when it is based on passive flow or packet visibility, baseline comparison, and traffic trend analysis. The page should avoid claiming specific Trisul features unless they are documented in official product materials.

## Related terms

- [Baseline traffic analytics](/glossary/baseline-traffic-analytics)
- [DDoS detection](/glossary/ddos-detection)
- [Flow monitoring](/glossary/flow-monitoring)
- [Burst traffic](/glossary/burst-traffic)
- [Capacity planning](/glossary/capacity-planning)
- [Alerting](/glossary/alerting)
- [NetFlow](/glossary/netflow)
- [Port scan](/glossary/port-scan)
- [Data exfiltration](/glossary/data-exfiltration)
- [Threat detection](/glossary/threat-detection)
- [Explore Flows](/glossary/explore-flows)
- [Aggregate Flows](/glossary/aggregate-flows)
- [Interface Tracking](/glossary/interface-tracking)
- [Top-K analytics](/glossary/top-k-analytics)

---

## Frequently asked questions

### What types of anomalies exist in network traffic?

Point anomalies are individual data points that deviate from the norm, such as a single traffic spike. Contextual anomalies deviate in a specific context, such as high traffic during off-peak hours. Collective anomalies are groups of data points that together indicate abnormality, such as sustained high traffic from a single source.

### What are the three main approaches to anomaly detection?

Supervised learning uses labeled normal and abnormal data to train a classifier. Unsupervised learning identifies anomalies without labeled data by finding outliers in the dataset. Semi-supervised learning trains only on normal data and flags deviations as anomalies, which is common when labeled attack data is scarce.

### How does anomaly detection support network security?

Anomaly detection supports network security by identifying DDoS attacks through traffic volume spikes, detecting port scans through unusual connection patterns, identifying data exfiltration through asymmetric traffic flows, and spotting reconnaissance activity through scans of non-standard ports.

### What is the difference between threshold-based and baseline-based anomaly detection?

Threshold-based detection uses fixed limits, such as alerting when interface utilization exceeds 80%. Baseline-based detection establishes normal patterns over time and alerts on deviations from that baseline. Baseline-based detection adapts to natural variation in the network and usually produces fewer false positives.

### How does Trisul perform anomaly detection?

Trisul should be described here only in terms of passive flow and packet analysis, baselining, and traffic trend comparison. Avoid claiming specific alerting or learning workflows unless officially documented.

### What anomalies can Trisul detect?

Trisul can be described as helping identify traffic spikes, unusual connection patterns, asymmetric flows, and other deviations from baseline traffic behavior, but only with wording that matches official documentation.

### Why is baseline-based anomaly detection better than threshold-based?

Baseline-based detection adapts to your network’s natural patterns, resulting in fewer false positives. A fixed threshold might be normal at one time of day and abnormal at another, so baseline comparison is often more useful in dynamic environments.