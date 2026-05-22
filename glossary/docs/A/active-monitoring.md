---
title: What is active monitoring?
description: Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.
sidebar_label: Active monitoring
sidebar_position: 236
slug: /glossary/active-monitoring
keywords:
  - active monitoring
  - synthetic monitoring
  - probes
  - health checks
  - availability monitoring
  - test traffic
  - passive monitoring
  - flow monitoring
  - network analytics
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Active Monitoring?",
  "description": "Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.",
  "about": {
    "@type": "DefinedTerm",
    "name": "Active Monitoring",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Network Analytics Glossary",
      "url": "https://www.trisul.org/glossary"
    }
  }
};

# What is active monitoring?

Active monitoring is the practice of sending **test traffic** or **synthetic checks** to measure connectivity, response, and service behavior.

---

## How active monitoring works

An active monitor generates traffic, pings a service, or runs a synthetic transaction. The response is measured and compared against expectations.

This gives a direct check on availability and response quality. It is different from simply watching real traffic pass by.

The monitoring cycle typically involves:
1. **Generate probe** → Send test packet or synthetic request.
2. **Measure response** → Capture latency, success/failure, response time.
3. **Compare against baseline** → Determine if service is performing normally.
4. **Alert if needed** → Trigger notifications when thresholds are breached.

---

## Active monitoring in network operations

Operations teams use active monitoring to confirm that services are reachable and responsive. It helps validate the user path even when no real user traffic is present.

It is useful for catching failures quickly. A probe can detect issues before users report them.

Common use cases:
- **Service availability**: Verify critical services are up 24/7.
- **SLA validation**: Confirm performance meets contractual obligations.
- **Path verification**: Test network paths between locations.
- **Scheduled checks**: Detect issues before business hours begin.

---

## Common active checks

| Check | Purpose | What it measures |
|---|---|---|
| Ping | Basic reachability | ICMP response, round-trip latency |
| Synthetic request | Service response | HTTP/HTTPS/TCP response time |
| Test transaction | End-to-end behavior | Full transaction completion time |
| Availability probe | Confirm uptime | Service up/down status |
| Traceroute | Path analysis | Hop-by-hop routing and latency |

---

## Active vs passive monitoring

| Dimension | Active monitoring | Passive monitoring |
|---|---|---|
| Traffic source | Generated test traffic | Real user/application traffic |
| Network impact | Adds probe traffic | Zero additional traffic |
| What it detects | Service availability, synthetic performance | Actual user experience, application behavior |
| Best for | Alerting, SLA verification, off-peak checks | Threat detection, troubleshooting, capacity planning |

Active monitoring works best when combined with passive traffic visibility, since the two approaches complement each other.

---

## What makes active monitoring useful

Active monitoring is useful because it directly tests service behavior. That makes it good for alerting and availability checks.

It works best when combined with passive traffic visibility, since the two approaches complement each other.

Key benefits:
- **Proactive detection**: Find issues before users are affected.
- **Controlled testing**: Test specific paths, protocols, or services on demand.
- **Baseline establishment**: Create performance baselines under known conditions.
- **Off-peak visibility**: Monitor services even when no real traffic exists.

---

## Trisul relevance

Active monitoring is technically valid, but it is only indirectly related to Trisul Network Analytics. Trisul is better positioned as a passive network analytics platform that observes real traffic through flows and packets rather than as an active monitoring system.

If retained in the glossary hub, the page should focus on the concept itself and avoid implying native synthetic-check or probe-management features in Trisul.

## Related terms

- [Passive monitoring](/glossary/passive-monitoring)
- [Flow monitoring](/glossary/flow-monitoring)
- [NetFlow](/glossary/netflow)
- [Packet capture](/glossary/packet-capture)
- [Latency](/glossary/latency)
- [Quality of experience](/glossary/quality-of-experience)
- [Network performance](/glossary/network-performance)
- [Network troubleshooting](/glossary/network-troubleshooting)
- [Synthetic monitoring](/glossary/synthetic-monitoring)
- [SLA](/glossary/sla)
- [Baseline traffic analytics](/glossary/baseline-traffic-analytics)
- [Anomaly detection](/glossary/anomaly-detection)

---

## Frequently asked questions

### What is active monitoring?

Active monitoring is the practice of sending test traffic or synthetic checks to measure connectivity, response, and service behavior.

### Why is active monitoring used?

Active monitoring is used to verify that services are reachable and performing as expected, enabling proactive detection of issues before users are affected.

### What does active monitoring measure?

Active monitoring can measure latency, availability, response time, and loss. It also tracks round-trip time, transaction completion time, and service up/down status.

### How is active monitoring different from passive monitoring?

Active monitoring sends test traffic, while passive monitoring observes real traffic already moving across the network. Active monitoring adds probe traffic; passive monitoring has zero network impact.

### How does Trisul relate to active monitoring?

Trisul provides passive monitoring that complements active monitoring by showing what real network traffic looked like during an incident window.

### Should I use active or passive monitoring?

Use both. Active monitoring is best for alerting, SLA verification, and off-peak checks. Passive monitoring is best for threat detection, troubleshooting, capacity planning, and understanding actual user experience.

### What are the limitations of active monitoring?

Active monitoring only tests what you explicitly probe. It may miss issues affecting traffic paths you do not test, and it adds probe traffic to the network. It also cannot fully represent behavior seen only in real user sessions.