# AURA Health
### Advanced Health Management and Analytics Platform

AURA Health is a secure, role-based health management system designed to bridge the gap between patients and healthcare providers through data-driven insights. The platform prioritizes high data integrity, identity security, and scalable architecture, adhering to modern software engineering best practices.

---

## Current Project Status: Active Development
The project is currently in its initial development phase, focusing on establishing a robust **Identity and Access Management (IAM)** framework. All core authentication and authorization protocols have been implemented and verified through a rigorous manual QA process.

### Core Features (Implemented and Verified)
* **Secure Identity Management:** Integrated Firebase Authentication providing secure sign-up and sign-in workflows.
* **Role-Based Access Control (RBAC):** Sophisticated redirection logic that distinguishes between `Doctor` and `Patient` users based on Firestore metadata.
* **Automated Email Verification:** Decoupled registration flow where Firestore profiles are provisioned only upon successful email validation to ensure data quality.
* **Security & Brute-Force Protection:** Implementation of rate-limiting through a 30-second lockout mechanism after three consecutive failed login attempts.
* **State-Synchronized Provisioning:** Fallback logic within the `useAuth` hook to maintain 100% consistency between Firebase Auth and Firestore user documents.

---

## Technical Architecture

| Component | Technology Stack |
| :--- | :--- |
| **Frontend Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Authentication** | Firebase Auth |
| **Database** | Cloud Firestore (NoSQL) |
| **Styling** | Tailwind CSS |
| **QA Methodology** | Manual Testing via Structured Test Cases |

---

## Quality Assurance (QA) Metrics
To ensure software reliability, the authentication module was subjected to a comprehensive testing suite. 

* **Total Test Cases executed:** 07
* **Pass Rate:** 100%
* **Focus Areas:** Edge-case handling for unverified users, data persistence during session transitions, and UI/UX consistency under error states.

---

## Project Roadmap

### Milestone 1: Foundation (Completed)
* Initial project scaffolding with TypeScript.
* Centralized Authentication and Authorization logic.
* QA verification of all entry points.

### Milestone 2: Patient and Provider Dashboards (In Progress)
* Development of a modular Dashboard UI for Patients.
* Implementation of Professional Profile verification for Medical Doctors.
* Firestore-driven health record logging system.

### Milestone 3: AI Integration (Planned)
* Deployment of LLM-based health summary generation.
* Advanced data visualization for patient health metrics.

---

## Directory Structure Highlights
* `src/hooks/useAuth.ts`: Manages the global authentication state and Firestore document synchronization.
* `src/components/auth`: Contains reusable UI components for the registration and verification lifecycle.
* `docs/qa`: Contains the official test plan and status reports for audit purposes.

---

**Developed by W2 Tech Solutions**
*Committed to engineering secure and scalable health technology solutions.*