---
title: What is jitter monitoring?
description: Jitter monitoring measures the variation in packet arrival times across a network. It detects inconsistent delay between packets that can cause packet reordering, voice quality degradation, and application performance issues.
sidebar_label: Jitter monitoring
sidebar_position: 56
slug: /glossary/jitter-monitoring
keywords:
  - jitter monitoring
  - jitter measurement
  - packet delay variation
  - network jitter
  - latency jitter
  - VoIP quality
  - network performance
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is jitter in networking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jitter means small random changes in the time between data packets arriving across a network. It measures how inconsistent the delay is between packets. Jitter refers to the slight difference in the time it takes for packets to arrive from one end to the other. This deviation from true periodicity is often in relation to a reference clock signal."
      }
    },
    {
      "@type": "Question",
      "name": "Why is jitter monitoring important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jitter monitoring is critical for real-time applications like VoIP, video conferencing, and online gaming. High jitter causes packet reordering, voice quality degradation, video freezing, and application timeouts. When delay varies significantly between packets, receivers cannot reconstruct smooth audio or video streams."
      }
    },
    {
      "@type": "Question",
      "name": "How does jitter differ from latency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Latency is the total time for a packet to travel from source to destination. Jitter is the variation in that time across multiple packets. You can have low latency with high jitter where packets arrive quickly but inconsistently, or high latency with low jitter where packets arrive slowly but predictably."
      }
    },
    {
      "@type": "Question",
      "name": "How is jitter measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jitter is measured as the difference between expected and actual packet arrival times. The most common calculation subtracts consecutive packet delays to find the variation. A 30 millisecond difference between expected arrival time and actual arrival time is known as jitter measurement."
      }
    }
  ]
};

# What is jitter monitoring?

Jitter monitoring measures the variation in packet arrival times across a network. It detects inconsistent delay between packets that can cause packet reordering, voice quality degradation, and application performance issues. Jitter refers to the slight difference in the time it takes for packets to arrive from one end to the other.

---

## How jitter monitoring works

Jitter monitoring calculates the difference between consecutive packet arrival times. If packets arrive at regular intervals, jitter is low. When arrival times vary significantly, jitter is high. Monitoring tools track jitter over time and alert when thresholds are exceeded.

Flow data from NetFlow, sFlow, or IPFIX provides the timestamps needed to calculate jitter. packet capture gives more precise measurements by recording exact wire times. Both methods track the time between packets to measure variation.

---

## Jitter monitoring in network operations

In the NOC, monitor jitter on links carrying real-time traffic like VoIP and video conferencing. High jitter on these links indicates network problems that need immediate attention. Security teams use jitter analysis to detect anomalies that might indicate network congestion or attacks.

Capacity planning tracks jitter trends to identify when links are approaching saturation. When jitter increases consistently on a link, it signals that bandwidth upgrades are needed before users experience quality problems.

---

## Jitter vs latency comparison

| Aspect | Jitter | Latency |
|---|---|---|
| Definition | Variation in packet arrival times | Total time for packet to travel |
| Impact | Causes reordering and quality issues | Causes delay in response time |
| Measurement | Difference between consecutive delays | Time from source to destination |
| Real-time impact | High impact on VoIP and video | Moderate impact on interactive apps |
| Mitigation | Jitter buffers and traffic shaping | Optimize routing and reduce hops |

---

## What makes jitter monitoring work in practice

Accurate timestamping is essential for jitter measurement. If timestamps are not synchronized across network devices, jitter calculations become unreliable. Network Time Protocol (NTP) synchronization ensures consistent time across all measurement points.

Jitter buffers help mitigate jitter impact on real-time applications. Buffers store incoming packets and release them at regular intervals. This smooths out variation but adds latency. The buffer size must balance jitter reduction against acceptable delay.

---

## How Trisul handles jitter monitoring

Trisul monitors jitter through flow data analysis and packet capture timestamps. Flow records include timing information that enables jitter calculation across conversations. Packet capture provides precise wire-level timestamps for accurate jitter measurement. Trisul correlates jitter with traffic patterns to identify causes of variation. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is latency monitoring?](/docs/glossary/latency-monitoring)
- [What is network performance?](/docs/glossary/network-performance)
- [What is VoIP?](/docs/glossary/voip)
- [What is packet capture?](/docs/glossary/packet-capture)
- [What is flow monitoring?](/docs/glossary/flow-monitoring)

---

## Frequently asked questions

### What is jitter in networking?

Jitter means small random changes in the time between data packets arriving across a network. It measures how inconsistent the delay is between packets. Jitter refers to the slight difference in the time it takes for packets to arrive from one end to the other. This deviation from true periodicity is often in relation to a reference clock signal.

### Why is jitter monitoring important?

Jitter monitoring is critical for real-time applications like VoIP, video conferencing, and online gaming. High jitter causes packet reordering, voice quality degradation, video freezing, and application timeouts. When delay varies significantly between packets, receivers cannot reconstruct smooth audio or video streams.

### How does jitter differ from latency?

Latency is the total time for a packet to travel from source to destination. Jitter is the variation in that time across multiple packets. You can have low latency with high jitter where packets arrive quickly but inconsistently, or high latency with low jitter where packets arrive slowly but predictably.

### How is jitter measured?

Jitter is measured as the difference between expected and actual packet arrival times. The most common calculation subtracts consecutive packet delays to find the variation. A 30 millisecond difference between expected arrival time and actual arrival time is known as jitter measurement.