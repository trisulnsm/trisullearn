---
title: What is NetFlow?
sidebar_label: NetFlow
sidebar_position: 71
slug: /glossary/netflow
description: Learn what NetFlow is, how NetFlow monitoring works, and why NetFlow is important for bandwidth visibility, traffic analysis, and network monitoring.
keywords:
  - NetFlow
  - NetFlow monitoring
  - network flow monitoring
  - traffic flow analysis
  - bandwidth monitoring
  - network traffic analytics
---

# What is NetFlow?

NetFlow is a network flow monitoring technology developed by Cisco that records and exports metadata about network traffic flowing through routers, switches, and firewalls.

Instead of capturing every packet, NetFlow summarizes communication into flow records that describe how devices, applications, and users interact across the network.

NetFlow helps organizations define traffic roles by identifying:
- who is communicating
- where traffic is going
- which applications are active
- how much bandwidth is being used
- how long communication lasts

NetFlow is widely used for:
- bandwidth monitoring
- traffic analysis
- security monitoring
- troubleshooting
- ISP analytics
- capacity planning

## How NetFlow Works

Network devices observe packets flowing through their interfaces and group related traffic into flows.

A flow is typically identified using attributes such as:
- source IP address
- destination IP address
- source port
- destination port
- protocol
- interface
- traffic direction

The device then creates and exports a flow record containing metadata such as:
- packet counts
- byte counts
- timestamps
- session duration
- application information

A typical NetFlow workflow looks like this:

1. Traffic passes through a router or switch
2. The device creates flow records
3. Flow records are exported to a collector
4. Analytics platforms process and visualize the traffic

```text id="y8p4qm"
Network Device → NetFlow Exporter → Flow Collector → Flow Analyzer