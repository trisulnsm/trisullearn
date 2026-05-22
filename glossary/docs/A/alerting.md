---
title: What is alerting?
description: Alerting is the process of notifying operators when monitored systems, traffic, or services match a condition that may need attention.
sidebar_label: Alerting
sidebar_position: 248
slug: /glossary/alerting
keywords:
  - alerting
  - alerts
  - notifications
  - monitoring alerts
  - event detection
  - incident notification
  - anomaly detection
  - baseline analytics
  - network security
  - rule builder
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Alerting?",
  "description": "Alerting is the process of notifying operators when monitored systems, traffic, or services match a condition that may need attention.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Alerting",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is alerting?

Alerting is the process of notifying operators when monitored systems, traffic, or services match a condition that may need attention.

---

## How alerting works

A monitoring or security system watches metrics, logs, or flows and compares them against rules or learned baselines. When a condition is met, it generates an alert.

The alert may be sent to dashboards, email, chat, or incident tools. The goal is to reduce the time between detection and response.

The alerting lifecycle typically involves:
1. **Detection** → System monitors metrics, logs, or flow data.
2. **Condition evaluation** → Compare against thresholds or baselines.
3. **Alert generation** → Create alert with context and severity.
4. **Notification** → Send to dashboards, email, chat, or incident tools.
5. **Response** → Operator investigates and takes action.
6. **Resolution** → Alert closes when the issue is resolved.

---

## Alerting in operations

Alerting is central to network and security operations. It helps teams react to outages, performance degradation, suspicious activity, and policy violations.

Good alerting reduces blind spots, but poor alerting can create noise. That is why thresholds and rules need careful tuning.

Common operational use cases:
- **Network outages**: Detect when interfaces, services, or hosts go down.
- **Performance degradation**: Alert on high latency, packet loss, or bandwidth saturation.
- **Security threats**: Detect port scans, DDoS attacks, data exfiltration, and malware communication.
- **Policy violations**: Alert when traffic violates security policies or access controls.
- **Capacity warnings**: Notify when bandwidth or storage approaches limits.

---

## Common alert sources

| Source | Example |
|---|---|
| Metrics | High latency or loss |
| Logs | Authentication failures |
| Flows | Suspicious traffic patterns |
| Availability checks | Service down |
| Baseline deviations | Anomalous traffic volume |

---

## Alert types and severity

| Alert Type | Trigger | Typical Severity |
|---|---|---|
| Threshold-based | Value exceeds limit, such as bandwidth > 80% | Warning/Critical |
| Anomaly-based | Deviation from learned baseline | Warning/Critical |
| Event-based | Specific pattern detected, such as a port scan | Medium/High |
| State-based | Service up/down status | Critical |
| Correlation-based | Multiple events combined | High/Critical |

---

## What makes alerting useful

Alerting is useful when it points to events that are both real and actionable. Too many false positives make operators ignore important signals.

It works best when alerts are enriched with context. The more background an alert provides, the faster a team can respond.

Key principles for effective alerting:
- **Actionable**: Every alert should require or suggest a response.
- **Context-rich**: Include source/destination IPs, ports, traffic volume, and time window.
- **Properly tuned**: Reduce false positives through baseline learning and threshold optimization.
- **Clear escalation path**: Define ownership and escalation procedures.
- **Correlation**: Combine related events to reduce alert fatigue.

---

## Trisul relevance

Alerting is relevant to Trisul Network Analytics only where it is derived from passive flow or packet analysis, baselines, and rule-based correlation. The page should avoid implying native endpoint-style or probe-based alerting unless that behavior is documented in official Trisul materials.

## Related terms

- [Anomaly detection](/glossary/anomaly-detection)
- [Baseline traffic analytics](/glossary/baseline-traffic-analytics)
- [Rule Builder](/glossary/rule-builder)
- [Flow taggers](/glossary/flow-taggers)
- [Custom meters](/glossary/custom-meters)
- [Flow monitoring](/glossary/flow-monitoring)
- [NetFlow](/glossary/netflow)
- [Syslog](/glossary/syslog)
- [SIEM](/glossary/siem)
- [Network troubleshooting](/glossary/network-troubleshooting)
- [Threat intelligence](/glossary/threat-intelligence)
- [Uptime monitoring](/glossary/uptime-monitoring)
- [Availability](/glossary/availability)
- [Explore Flows](/glossary/explore-flows)
- [Aggregate Flows](/glossary/aggregate-flows)

---

## Frequently asked questions

### What is alerting?

Alerting is the process of notifying operators when monitored systems, traffic, or services match a condition that may need attention.

### Why is alerting important?

Alerting is important because it helps teams respond quickly to failures, anomalies, and security events, reducing mean time to detection (MTTD) and mean time to response (MTTR).

### What triggers an alert?

An alert can be triggered by thresholds, anomalies, outages, policy matches, or correlated events.

### How is alerting used?

Alerting is used to notify teams about conditions that may require investigation or action. Alerts are sent to dashboards, email, chat tools, incident management systems, or SIEM platforms.

### How does Trisul handle alerting?

Trisul should be described here only in terms of passive flow and packet analysis, baselining, and rule-based correlation. Avoid claiming specific alert delivery or endpoint-style alerting functions unless officially documented.

### What makes a good alert?

A good alert is actionable, context-rich, properly tuned, and has a clear escalation path. Baseline analytics can help reduce false positives by learning normal traffic patterns.

### How does Trisul reduce alert fatigue?

Trisul can help reduce alert fatigue through baseline-oriented anomaly detection and correlation of related flow events, but this should be stated conservatively and only where supported by product documentation.