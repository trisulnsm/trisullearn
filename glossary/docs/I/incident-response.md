---
title: What is incident response?
description: Incident response is the organized approach to detecting, responding to, containing, and recovering from security incidents or cyberattacks, following a structured process to minimize damage and prevent future incidents.
sidebar_label: Incident response
sidebar_position: 54
slug: /glossary/incident-response
keywords:
  - incident response
  - security incident response
  - incident response plan
  - cybersecurity incident
  - incident handling
  - incident response team
  - CSIRT
---

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is incident response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incident response is the organized approach to managing security incidents and cyberattacks. It contains and eradicates threats when an attacker exploits a vulnerability within an organization. Incident response follows a structured process to detect, respond to, contain, and recover from security breaches, minimizing damage and recovery time while reducing the risk of future incidents."
      }
    },
    {
      "@type": "Question",
      "name": "What are the steps of incident response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SANS Institute outlines six steps. Preparation establishes policies, builds an incident response team, deploys tools, and trains. Identification detects and validates incidents through monitoring, logs, and alerts. Containment stops the incident from worsening and isolates affected systems. Eradication removes threats and discovers root causes. Recovery restores systems from backup, patches, and returns to normal operations. Lessons learned conducts post-incident review and improves processes."
      }
    },
    {
      "@type": "Question",
      "name": "What is an incident response team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An incident response team known as CSIRT or Computer Security Incident Response Team is a cross-functional group responsible for handling security incidents. Roles include leadership that coordinates overall strategy, investigation that determines root cause, and response that executes containment and recovery. The team includes technical members and nontechnical roles for communication and liability decisions, with an executive advocate at the highest company levels."
      }
    },
    {
      "@type": "Question",
      "name": "How does incident response relate to network monitoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Network monitoring provides the data needed for early incident detection. Flow data including NetFlow, sFlow, and IPFIX and packet capture help identify indicators of compromise, detect unusual traffic patterns, and support forensic analysis. Incident responders use flow data to identify affected systems, trace attack paths, quantify data exfiltration, and validate that threats have been eradicated after containment."
      }
    }
  ]
};

# What is incident response?

Incident response is the organized approach to managing security incidents and cyberattacks. It contains and eradicates threats when an attacker exploits a vulnerability within an organization. Incident response follows a structured process to detect, respond to, contain, and recover from security breaches, minimizing damage and recovery time while reducing the risk of future incidents.

---

## How incident response works

Incident response begins with preparation including establishing policies, building a team, deploying tools, and training. When an incident occurs, identification detects and validates it through monitoring and alerts. Containment stops the spread. Eradication removes the threat. Recovery restores normal operations. Lessons learned improves future response.

---

## Incident response in network operations

In the SOC, incident response is the process for handling security breaches. NetFlow data and packet capture provide evidence for investigation. The NOC monitors network traffic for indicators of compromise and unusual patterns. The response team coordinates containment, eradication, and recovery activities. Leadership manages communication with stakeholders and executive advocacy.

---

## The 6 steps of incident response

| Step | Description |
|---|---|
| Preparation | Establish policies, build incident response team, deploy tools, create playbooks, and train the team through drills |
| Identification | Detect and validate incidents through monitoring, logs, alerts, intrusion detection systems, and error messages |
| Containment | Stop the incident from worsening, isolate affected systems, quarantine threats, and prevent spread |
| Eradication | Remove malware and threats, discover root causes, and eliminate attacker access |
| Recovery | Restore systems from backup, patch vulnerabilities, return to normal operations, and monitor for return of threat |
| Lessons learned | Conduct post-incident review, identify gaps, update procedures, improve processes, and provide additional training |

---

## What makes incident response work in practice

Preparation determines response speed. Teams with pre-written playbooks, tested runbooks, and practiced drills respond faster than teams that figure things out during an incident. Jump bags with forensic tools and laptops enable rapid deployment. Communication templates ensure consistent stakeholder updates.

Flow data enables forensic analysis without packet capture. Flow records show who talked to whom, when, and how much. This identifies affected systems and quantifies data exfiltration. When packet capture is available, analysts pivot from flow to packets for deep inspection. Without it, flow data still supports investigation and containment decisions.

---

## How Trisul handles incident response

Trisul supports incident response by providing flow-based visibility into network traffic that helps with early detection, analysis, and forensic investigation. NetFlow data enables identification of indicators of compromise, detection of unusual traffic patterns, and tracing of attack paths. Flow data helps quantify data exfiltration, identify affected systems, and validate threat eradication after containment. Full documentation is at https://docs.trisul.org/docs/ug/flow/.

---

## Related terms

- [What is threat detection?](/docs/glossary/threat-detection)
- [What is indicator of compromise?](/docs/glossary/indicator-of-compromise)
- [What is forensic analysis?](/docs/glossary/forensic-analysis)
- [What is network monitoring?](/docs/glossary/network-monitoring)
- [What is SIEM?](/docs/glossary/siem)

---

## Frequently asked questions

### What is incident response?

Incident response is the organized approach to managing security incidents and cyberattacks. It contains and eradicates threats when an attacker exploits a vulnerability within an organization. Incident response follows a structured process to detect, respond to, contain, and recover from security breaches, minimizing damage and recovery time while reducing the risk of future incidents.

### What are the steps of incident response?

The SANS Institute outlines six steps. Preparation establishes policies, builds an incident response team, deploys tools, and trains. Identification detects and validates incidents through monitoring, logs, and alerts. Containment stops the incident from worsening and isolates affected systems. Eradication removes threats and discovers root causes. Recovery restores systems from backup, patches, and returns to normal operations. Lessons learned conducts post-incident review and improves processes.

### What is an incident response team?

An incident response team known as CSIRT or Computer Security Incident Response Team is a cross-functional group responsible for handling security incidents. Roles include leadership that coordinates overall strategy, investigation that determines root cause, and response that executes containment and recovery. The team includes technical members and nontechnical roles for communication and liability decisions, with an executive advocate at the highest company levels.

### How does incident response relate to network monitoring?

Network monitoring provides the data needed for early incident detection. Flow data including NetFlow, sFlow, and IPFIX and packet capture help identify indicators of compromise, detect unusual traffic patterns, and support forensic analysis. Incident responders use flow data to identify affected systems, trace attack paths, quantify data exfiltration, and validate that threats have been eradicated after containment.