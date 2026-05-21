---
title: What is threshold-based alerting?
description: Threshold-based alerting triggers notifications when network metrics exceed configured limits. It enables rapid detection of congestion, bandwidth spikes, security anomalies, and performance degradation.
sidebar_label: Threshold-based alerting
sidebar_position: 111
slug: /glossary/threshold-based-alerting
keywords:
  - threshold alerting
  - alerting threshold
  - bandwidth alerting
  - anomaly alerting
  - network alerting
  - threshold monitoring
  - alert triggers
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is threshold-based alerting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threshold-based alerting triggers notifications when network metrics exceed configured limits. It enables rapid detection of congestion, bandwidth spikes, security anomalies, and performance degradation. Alerts trigger when metrics cross thresholds."
      }
    },
    {
      "@type": "Question",
      "name": "How does threshold alerting work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Threshold alerting monitors metrics continuously comparing against configured limits. When a metric exceeds its threshold, an alert is generated. Alerts are sent via email, SMS, or dashboard notifications. Thresholds can be static or dynamic based on baselines."
      }
    },
    {
      "@type": "Question",
      "name": "What metrics can be alerted on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metrics include bandwidth utilization, packet loss, latency, jitter, top talkers, new connections, DNS queries, application usage, flow count, and custom patterns. Any measurable traffic metric can have threshold-based alerts."
      }
    },
    {
      "@type": "Question",
      "name": "What are good threshold values?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Good thresholds balance sensitivity against false positives. Bandwidth utilization alerts at 70-80%. Packet loss alerts above 1%. Latency alerts above 50ms. Dynamic thresholds based on historical baselines reduce false positives from normal variation."
      }
    }
  ]
};

# What is threshold-based alerting?

Threshold-based alerting triggers notifications when network metrics exceed configured limits. It enables rapid detection of congestion, bandwidth spikes, security anomalies, and performance degradation. Alerts trigger when metrics cross thresholds.

---

## How threshold alerting works

Threshold alerting monitors metrics continuously comparing against configured limits. Static thresholds use fixed values. Dynamic thresholds use historical baselines and alert on deviations. When a metric exceeds its threshold, an alert is generated.

Alerts are sent via email, SMS, Slack, or dashboard notifications. Alert severity levels (info, warning, critical) indicate urgency. Alert suppression prevents alert flooding. Alert escalation routes critical alerts to on-call staff.

---

## Threshold alerting in network operations

In the NOC, threshold alerting enables rapid response to issues. Bandwidth utilization alerts warn of approaching congestion. Packet loss alerts indicate network problems. Security teams use threshold alerts for anomaly detection.

Capacity planning uses utilization thresholds to identify links needing upgrades. When utilization consistently exceeds 70%, upgrade the link. Threshold alerts automate capacity monitoring.

---

## Common thresholds

| Metric | Warning Threshold | Critical Threshold |
|---|---|---|
| Bandwidth utilization | 70% | 85% |
| Packet loss | 0.5% | 1% |
| Latency | 50ms | 100ms |
| Jitter | 30ms | 50ms |
| New connections/min | Baseline + 50% | Baseline + 100% |

---

## What makes threshold alerting work in practice

Threshold tuning reduces false positives. Too sensitive thresholds trigger alerts for normal variation. Too loose thresholds miss real problems. Start with conservative thresholds and tune based on alert volume and accuracy.

Baseline-based thresholds adapt to normal patterns. Dynamic thresholds learn typical traffic patterns and alert on deviations. This reduces false positives from normal daily variation. Static thresholds require manual adjustment for different times.

---

## How Trisul handles threshold-based alerting

Trisul provides threshold-based alerting through Flow Tracker Alerts that trigger when metrics exceed configured thresholds. Bandwidth utilization, packet loss, top talkers, and custom patterns can trigger alerts. Alerts are sent via email and displayed in the dashboard. Traffic Pattern Alerts are promptly generated for anomalies deviating from expected patterns. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is alerting?](/glossary/alerting)
- [What is traffic pattern analysis?](/glossary/traffic-pattern-analysis)
- [What is anomaly detection?](/glossary/anomaly-detection)
- [What is QoS monitoring?](/glossary/qos-monitoring)
- [What is bandwidth monitoring?](/glossary/bandwidth-monitoring)

---

## Frequently asked questions

### What is threshold-based alerting?

Threshold-based alerting triggers notifications when network metrics exceed configured limits. It enables rapid detection of congestion, bandwidth spikes, security anomalies, and performance degradation. Alerts trigger when metrics cross thresholds.

### How does threshold alerting work?

Threshold alerting monitors metrics continuously comparing against configured limits. When a metric exceeds its threshold, an alert is generated. Alerts are sent via email, SMS, or dashboard notifications. Thresholds can be static or dynamic based on baselines.

### What metrics can be alerted on?

Metrics include bandwidth utilization, packet loss, latency, jitter, top talkers, new connections, DNS queries, application usage, flow count, and custom patterns. Any measurable traffic metric can have threshold-based alerts.

### What are good threshold values?

Good thresholds balance sensitivity against false positives. Bandwidth utilization alerts at 70-80%. Packet loss alerts above 1%. Latency alerts above 50ms. Dynamic thresholds based on historical baselines reduce false positives from normal variation.