---
title: What are dropped packets?
description: Dropped packets are network packets that fail to reach their destination, typically due to buffer overflows, congestion, hardware errors, or interface overruns. Packet loss is a key indicator of network performance problems.
sidebar_label: Dropped packets
sidebar_position: 19
slug: /glossary/dropped-packets
keywords:
  - dropped packets
  - packet loss
  - network packet drops
  - interface drops
  - rx drops
  - tx drops
  - buffer overflow
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the common causes of dropped packets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common causes include buffer overflows at routers when traffic arrives faster than the device can forward, network congestion, hardware errors in NICs or cables, interface overruns, misconfigured QoS policies that drop low-priority traffic, and wireless interference. On Linux systems, rx_dropped can also indicate Softnet backlog full, bad VLAN tags, or unknown protocols."
      }
    },
    {
      "@type": "Question",
      "name": "How do dropped packets affect TCP versus UDP traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TCP detects dropped packets through missing acknowledgments and retransmits them, so dropped packets cause reduced throughput and increased latency but not data loss. UDP does not retransmit, so dropped UDP packets result in lost data that is never recovered. In VoIP and video, this manifests as audio glitches, video artifacts, or call drops."
      }
    },
    {
      "@type": "Question",
      "name": "How do you diagnose dropped packets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diagnose by checking interface counters for rx_dropped and tx_dropped on routers and switches, reviewing switch port error counters, using network monitoring tools to track packet loss over time, checking for congestion on high-utilization links, and examining TCP retransmission rates. On Linux, /proc/net/softnet_stat shows Softnet backlog drops. On Junos, use show commands for packet drop statistics."
      }
    },
    {
      "@type": "Question",
      "name": "Are dropped packets always a problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. TCP uses packet loss as a congestion signal and intentionally reduces throughput when drops occur, which is normal behavior. In high-performance networks, even small drop rates can indicate problems. In wireless networks, some packet loss is expected due to interference and signal degradation. The key is whether the drop rate exceeds acceptable thresholds for the application."
      }
    }
  ]
};

# What are dropped packets?

Dropped packets are network packets that fail to reach their destination. They are typically caused by buffer overflows, congestion, hardware errors, or interface overruns. When a router, switch, or network interface card receives more packets than it can process or forward, it discards the excess. TCP retransmits lost packets, so dropped packets cause latency and reduced throughput. UDP does not retransmit, so dropped packets result in permanent data loss.

---

## What causes dropped packets

Packets are dropped when buffers fill up and cannot accept new data. This happens when traffic arrives faster than the device can forward, a condition called congestion. Routers and switches drop packets to signal that the network is overloaded.

Other causes include hardware errors in network interface cards or cables, interface overruns when the NIC cannot keep up with wire speed, misconfigured QoS policies that intentionally drop low-priority traffic, and wireless interference causing packets to be corrupted and discarded.

On Linux systems, rx_dropped can also indicate Softnet backlog full, bad VLAN tags, unknown protocols, or IPv6 frames when the server is not configured for IPv6. These frames are dropped before reaching the protocol stack.

---

## Dropped packets in network operations

NOC teams monitor dropped packets as a key performance metric. Interface counters for rx_dropped and tx_dropped reveal where in the network packets are being lost. High drop rates on a specific interface indicate congestion, hardware problems, or misconfiguration that requires intervention.

SOC teams monitor dropped packets for security analysis. Unusual drop patterns can indicate a denial-of-service attack targeting a specific interface, or a compromised device flooding the network with traffic. Sudden spikes in drop rates without corresponding traffic increases can indicate hardware failure.

Network engineers use dropped packet analysis to identify bottlenecks and plan capacity. Links that consistently show high drop rates during peak hours need higher bandwidth or load balancing. Wireless networks with high drop rates may need access point repositioning or additional capacity.

---

## Dropped packets vs corrupted packets

| Dimension | Dropped packets | Corrupted packets |
|---|---|---|
| What happens | Packet discarded before reaching destination | Packet arrives with data errors |
| Primary cause | Buffer overflow, congestion, policy | Hardware errors, interference, noise |
| Detection | Interface drop counters | CRC errors, FCS errors |
| Recovery | TCP retransmits, UDP does not | Retransmitted if TCP, lost if UDP |
| Best fix | Increase capacity, reduce congestion | Replace hardware, fix cables, reduce interference |

Dropped packets and corrupted packets are distinct problems requiring different fixes. Drops indicate capacity or congestion issues; corruption indicates hardware or physical layer problems.

---

## How Trisul handles dropped packets

Trisul monitors network traffic through flow records and packet capture. It can detect traffic anomalies that correlate with dropped packets, such as sudden traffic spikes or interface saturation. However, Trisul does not directly measure packet drops on the network infrastructure itself, as drops occur at the router or switch level before the traffic reaches the monitoring point.

For direct dropped packet monitoring, operators should use network device counters (rx_dropped, tx_dropped) and integrate them with Trisul's flow data for a complete picture. Trisul's flow analytics can identify the traffic patterns that precede or coincide with drops, helping to diagnose the root cause. Full flow analysis documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is flow monitoring?](/glossary/flow-monitoring)
- [What is network performance monitoring?](/glossary/network-performance-monitoring)
- [What is TCP retransmission?](/glossary/tcp-retransmission)
- [What is congestion?](/glossary/congestion)
- [What is QoS?](/glossary/qos)
- [What is interface saturation?](/glossary/interface-saturation)

---

## Frequently asked questions

### What are the common causes of dropped packets?

Common causes include buffer overflows at routers when traffic arrives faster than the device can forward, network congestion, hardware errors in NICs or cables, interface overruns, misconfigured QoS policies that drop low-priority traffic, and wireless interference. On Linux systems, rx_dropped can also indicate Softnet backlog full, bad VLAN tags, or unknown protocols.

### How do dropped packets affect TCP versus UDP traffic?

TCP detects dropped packets through missing acknowledgments and retransmits them, so dropped packets cause reduced throughput and increased latency but not data loss. UDP does not retransmit, so dropped UDP packets result in lost data that is never recovered. In VoIP and video, this manifests as audio glitches, video artifacts, or call drops.

### How do you diagnose dropped packets?

Diagnose by checking interface counters for rx_dropped and tx_dropped on routers and switches, reviewing switch port error counters, using network monitoring tools to track packet loss over time, checking for congestion on high-utilization links, and examining TCP retransmission rates. On Linux, /proc/net/softnet_stat shows Softnet backlog drops. On Junos, use show commands for packet drop statistics.

### Are dropped packets always a problem?

No. TCP uses packet loss as a congestion signal and intentionally reduces throughput when drops occur, which is normal behavior. In high-performance networks, even small drop rates can indicate problems. In wireless networks, some packet loss is expected due to interference and signal degradation. The key is whether the drop rate exceeds acceptable thresholds for the application.