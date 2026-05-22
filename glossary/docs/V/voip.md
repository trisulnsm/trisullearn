---
title: What is VoIP?
description: VoIP, or Voice over Internet Protocol, is the delivery of voice calls over an IP network instead of a traditional phone circuit. It depends on low delay, low jitter, and minimal packet loss.
sidebar_label: VoIP
sidebar_position: 199
slug: /glossary/voip
keywords:
  - VoIP
  - voice over IP
  - internet calling
  - call quality
  - jitter
  - packet loss
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is VoIP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP, or Voice over Internet Protocol, is the delivery of voice calls over an IP network instead of a traditional phone circuit. It depends on low delay, low jitter, and minimal packet loss."
      }
    },
    {
      "@type": "Question",
      "name": "What affects VoIP quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP quality is affected by latency, jitter, packet loss, bandwidth contention, and congestion."
      }
    },
    {
      "@type": "Question",
      "name": "Why is VoIP sensitive to network issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP is sensitive to network issues because voice traffic must arrive quickly and in order to sound natural."
      }
    },
    {
      "@type": "Question",
      "name": "How is VoIP monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VoIP is monitored using call quality metrics, traffic analysis, jitter checks, loss measurements, and session visibility."
      }
    }
  ]
};

# What is VoIP?

VoIP, or Voice over Internet Protocol, is the delivery of voice calls over an IP network instead of a traditional phone circuit. It depends on low delay, low jitter, and minimal packet loss.

---

## How VoIP works

VoIP converts voice into packets and sends them across the network like other data. The receiving side rebuilds the audio stream in real time.

Because voice is time-sensitive, even small network problems can affect quality. That is why VoIP needs steady delivery rather than just high bandwidth.

---

## VoIP in network operations

Operators watch VoIP closely because call quality is easy to degrade but hard for users to diagnose. Problems often appear as choppiness, echoes, or dropped audio.

The most important signals are delay, jitter, and packet loss. These often reveal more about call quality than raw bandwidth does.

---

## Common VoIP signals

| Signal | Meaning |
|---|---|
| Latency | Delay in voice delivery |
| Jitter | Uneven arrival times |
| Packet loss | Missing audio packets |
| MOS | Quality score estimate |
| Call setup | Signaling success or failure |

---

## What makes VoIP useful

VoIP is a good example of realtime traffic. It shows why a network can be “up” but still not usable.

For that reason, VoIP monitoring usually looks at both the network path and the application stream.

---

## How Trisul handles VoIP

Trisul helps identify VoIP traffic and correlate call quality with network behavior so operators can diagnose issues faster.

---

## Related terms

- Realtime traffic
- Network performance
- Congestion detection
- Packet loss
- Jitter