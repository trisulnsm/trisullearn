---
title: What is RTP?
description: RTP, or Real-time Transport Protocol, is a protocol used to carry real-time audio and video over IP networks.
sidebar_label: RTP
sidebar_position: 263
slug: /glossary/rtp
keywords:
  - RTP
  - Real-time Transport Protocol
  - voice transport
  - video transport
  - realtime media
  - media streaming
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is RTP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP, or Real-time Transport Protocol, is a protocol used to carry real-time audio and video over IP networks."
      }
    },
    {
      "@type": "Question",
      "name": "What is RTP used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP is used for voice, video, and other time-sensitive media streams."
      }
    },
    {
      "@type": "Question",
      "name": "Why is RTP important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP is important because it supports real-time delivery of media where timing matters."
      }
    },
    {
      "@type": "Question",
      "name": "How is RTP monitored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RTP is monitored by tracking media streams, packet timing, loss, and jitter."
      }
    }
  ]
};

# What is RTP?

RTP, or Real-time Transport Protocol, is a protocol used to carry real-time audio and video over IP networks.

---

## How RTP works

RTP is designed for media that must arrive in time to be useful. It carries sequence and timing information so receivers can rebuild the stream smoothly.

Because it is time-sensitive, RTP is affected by delay, jitter, and packet loss. Those conditions can reduce media quality quickly.

---

## RTP in network operations

RTP is common in VoIP, video conferencing, and other realtime media services. It is often paired with signaling protocols that set up the session.

Operations teams watch RTP quality to understand call and media performance. Problems often appear as choppiness, freezing, or audio dropouts.

---

## Common RTP signals

| Signal | Meaning |
|---|---|
| Sequence | Order of packets |
| Jitter | Variation in arrival time |
| Packet loss | Missing media packets |
| Stream timing | Media delivery cadence |

---

## What makes RTP useful

RTP is useful because it supports media delivery where timing matters more than perfect retransmission. That makes it well suited to voice and video.

Its main limitation is that real-time media cannot wait for late retransmissions the way TCP traffic can.

---

## How Trisul handles RTP

Trisul can identify and analyze RTP streams to help operators assess media quality and network behavior.

---

## Related terms

- VoIP
- Realtime traffic
- Streaming video
- Quality of experience
- Latency

---

## Frequently asked questions

### What is RTP?

RTP, or Real-time Transport Protocol, is a protocol used to carry real-time audio and video over IP networks.

### What is RTP used for?

RTP is used for voice, video, and other time-sensitive media streams.

### Why is RTP important?

RTP is important because it supports real-time delivery of media where timing matters.

### How is RTP monitored?

RTP is monitored by tracking media streams, packet timing, loss, and jitter.