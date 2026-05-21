---
title: What is wire-speed packet capture?
description: Wire-speed packet capture records all packets at line rate without dropping packets even at high speeds (1G, 10G, 40G, 100G). It provides complete forensic visibility requiring specialized hardware and software optimized for high-speed capture.
sidebar_label: Wire-speed packet capture
sidebar_position: 123
slug: /glossary/wire-speed-packet-capture
keywords:
  - wire-speed capture
  - line rate capture
  - full fidelity capture
  - packet capture
  - high-speed capture
  - zero packet loss
  - forensic capture
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is wire-speed packet capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wire-speed packet capture records all packets at line rate without dropping packets even at high speeds (1G, 10G, 40G, 100G). It provides complete forensic visibility requiring specialized hardware and software optimized for high-speed capture. Wire-speed capture achieves zero packet loss."
      }
    },
    {
      "@type": "Question",
      "name": "How does wire-speed capture work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wire-speed capture uses specialized hardware (10G/40G/100G network cards) with kernel-bypass technologies (PF_RING, DPDK) and optimized capture engines. Packets are captured directly from NIC to userspace avoiding kernel overhead. Writing is optimized for sustained high throughput."
      }
    },
    {
      "@type": "Question",
      "name": "Why is wire-speed capture important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wire-speed capture is critical for forensic investigation requiring complete packet evidence. Packet loss means missing evidence. At high speeds, standard capture drops packets. Wire-speed capture ensures complete visibility even at 10G and above."
      }
    },
    {
      "@type": "Question",
      "name": "What enables wire-speed capture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wire-speed capture requires fast NICs (10G+, with hardware timestamping), kernel-bypass (PF_RING ZC, DPDK), fast storage (RAID, SSD), optimized capture software, and sufficient CPU. All components must handle line rate throughput."
      }
    }
  ]
};

# What is wire-speed packet capture?

Wire-speed packet capture records all packets at line rate without dropping packets even at high speeds (1G, 10G, 40G, 100G). It provides complete forensic visibility requiring specialized hardware and software optimized for high-speed capture. Wire-speed capture achieves zero packet loss.

---

## How wire-speed capture works

Wire-speed capture uses specialized hardware (10G/40G/100G network cards) with kernel-bypass technologies (PF_RING ZC, DPDK) and optimized capture engines. Packets are captured directly from NIC to userspace avoiding kernel overhead.

Writing is optimized for sustained high throughput. Storage must handle continuous write rates. Buffers absorb traffic spikes. When buffers fill, capture drops packets. Wire-speed capture minimizes drops through optimization.

---

## Wire-speed capture in network operations

In the NOC, wire-speed capture provides complete forensic visibility. Security teams require complete packet capture for incident investigation. Packet loss means missing evidence. Wire-speed capture ensures complete visibility even at 10G and above.

Capacity planning monitors capture system resources. CPU utilization, storage throughput, and buffer utilization must be tracked. When resources approach limits, capture may start dropping packets. Upgrade before dropping occurs.

---

## Wire-speed capture requirements

| Component | Requirement |
|---|---|
| NIC | 10G/40G/100G with hardware timestamping |
| Kernel-bypass | PF_RING ZC or DPDK |
| Storage | RAID with sustained write throughput |
| CPU | Multi-core with high clock speed |
| Memory | Sufficient for buffers |
| TAP | Matching link speed (10G, 40G, 100G) |

---

## What makes wire-speed capture work in practice

Storage throughput is the bottleneck. Sustained write throughput must exceed line rate. 10G full duplex at wire rate requires ~1.25 GB/s sustained write. RAID arrays or SSDs must handle this. Slow storage causes packet drops.

Kernel-bypass eliminates overhead. Standard packet capture goes through kernel network stack causing overhead. Kernel-bypass (PF_RING ZC, DPDK) captures directly from NIC to userspace. This reduces CPU usage and enables wire speed.

---

## How Trisul handles wire-speed packet capture

Trisul provides wire-speed packet capture through PF_RING ZC kernel-bypass technology capturing at line rate. Trisul captures raw packets continuously building per-flow index at write time using Slice Retentionᵀ. Packet capture records every packet headers and payload. Full fidelity capture at 10G and above is supported. Full documentation is at https://docs.trisul.org/docs/ug/caps/.

---

## Related terms

- [What is packet capture?](/glossary/packet-capture)
- [What is PF_RING?](/glossary/pf-ring)
- [What is zero packet loss capture?](/glossary/zero-packet-loss-capture)
- [What is network TAP?](/glossary/network-tap)
- [What is network forensics?](/glossary/network-forensics)

---

## Frequently asked questions

### What is wire-speed packet capture?

Wire-speed packet capture records all packets at line rate without dropping packets even at high speeds (1G, 10G, 40G, 100G). It provides complete forensic visibility requiring specialized hardware and software optimized for high-speed capture. Wire-speed capture achieves zero packet loss.

### How does wire-speed capture work?

Wire-speed capture uses specialized hardware (10G/40G/100G network cards) with kernel-bypass technologies (PF_RING, DPDK) and optimized capture engines. Packets are captured directly from NIC to userspace avoiding kernel overhead. Writing is optimized for sustained high throughput.

### Why is wire-speed capture important?

Wire-speed capture is critical for forensic investigation requiring complete packet evidence. Packet loss means missing evidence. At high speeds, standard capture drops packets. Wire-speed capture ensures complete visibility even at 10G and above.

### What enables wire-speed capture?

Wire-speed capture requires fast NICs (10G+, with hardware timestamping), kernel-bypass (PF_RING ZC, DPDK), fast storage (RAID, SSD), optimized capture software, and sufficient CPU. All components must handle line rate throughput.