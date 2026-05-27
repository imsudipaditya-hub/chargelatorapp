# Security Policy

## Supported Versions

We actively monitor and patch the latest version of the application. Please ensure you are running the most recent deployment of the Progressive Web App (PWA) before submitting a report.

| Version | Supported          |
| ------- | ------------------ |
| v3.0.x  | ✅ Triage & Active |
| < v3.0  | ❌ Deprecated      |

## Reporting a Vulnerability

**Do not open a public GitHub Issue for a suspected security vulnerability.** Publicly disclosing security flaws exposes running instances to exploitation before a remediation patch can be deployed.

Instead, please report security vulnerabilities by following these steps:

1.  **Draft a Private Report:** Document the clear steps required to reproduce the vulnerability, including any relevant payloads, environment details (browser engine version), and the potential operational impact.
2.  **Submit Privately:** * *Option A (Preferred):* Use the native GitHub Private Vulnerability Reporting feature by navigating to the **Security** tab of this repository, clicking **Vulnerabilities**, and selecting **Report a vulnerability**.
    * *Option B:* Send an encrypted or direct email to the maintainer at: **sudip.aditya@agoda.com**.

### Our Commitment

Upon receiving a valid report, the maintainer will:
* Acknowledge receipt of the report within 48 hours.
* Provide an estimated timeline for triage and remediation.
* Coordinate a patch rollout via the automated PWA deployment pipeline (`sw.js`).
* Credit the reporter in the release notes if desired, following successful resolution.
