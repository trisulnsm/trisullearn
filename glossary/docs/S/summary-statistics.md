---
title: What are summary statistics in network analytics?
description: Summary statistics are aggregate numerical measures that describe the overall behavior of a dataset, such as totals, averages, minimums, maximums, and counts.
sidebar_label: Summary statistics
sidebar_position: 256
slug: /glossary/summary-statistics
keywords:
  - summary statistics
  - aggregates
  - average
  - totals
  - descriptive statistics
  - metrics summary
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are summary statistics in network analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summary statistics are aggregate numerical measures that describe the overall behavior of a dataset, such as totals, averages, minimums, maximums, and counts."
      }
    },
    {
      "@type": "Question",
      "name": "Why are summary statistics useful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summary statistics are useful because they condense large amounts of data into a small number of understandable measures."
      }
    },
    {
      "@type": "Question",
      "name": "What do summary statistics include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summary statistics can include totals, means, peaks, counts, percentiles, and rates."
      }
    },
    {
      "@type": "Question",
      "name": "How are summary statistics used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summary statistics are used in reporting, dashboards, baselines, and trend analysis."
      }
    }
  ]
};

# What are summary statistics in network analytics?

Summary statistics are aggregate numerical measures that describe the overall behavior of a dataset, such as totals, averages, minimums, maximums, and counts.

---

## How summary statistics work

Instead of inspecting every individual record, a system calculates a small set of descriptive measures. These measures show the overall shape and scale of the data.

For example, a dataset of flows might be summarized by total bytes, average session size, and peak traffic rate. That gives a quick sense of what the traffic looked like.

---

## Summary statistics in operations

Summary statistics are widely used in dashboards, reports, and historical analysis. They help teams understand network behavior without reading raw records.

They are also useful for baselines. Comparing current statistics with past values can show whether something has changed.

---

## Common summary measures

| Measure | Meaning |
|---|---|
| Total | Overall amount |
| Average | Typical value |
| Maximum | Highest observed value |
| Count | Number of records |

---

## What makes summary statistics useful

Summary statistics are useful because they reduce complexity while preserving important patterns. They make large datasets easier to communicate.

Their main limitation is loss of detail. If a statistic looks unusual, raw data may still be needed for explanation.

---

## How Trisul handles summary statistics

Trisul can compute and present summary statistics to help operators understand traffic and performance at a glance.

---

## Related terms

- Batch processing
- Ranking
- Aggregate counter group
- Monthly usage reports
- Traffic estimation

---

## Frequently asked questions

### What are summary statistics in network analytics?

Summary statistics are aggregate numerical measures that describe the overall behavior of a dataset, such as totals, averages, minimums, maximums, and counts.

### Why are summary statistics useful?

Summary statistics are useful because they condense large amounts of data into a small number of understandable measures.

### What do summary statistics include?

Summary statistics can include totals, means, peaks, counts, percentiles, and rates.

### How are summary statistics used?

Summary statistics are used in reporting, dashboards, baselines, and trend analysis.