# AI Cyber Hygiene Awareness Campaign for Students

![Cybersecurity](https://img.shields.io/badge/Security-AI%20Cyber%20Hygiene-00F0FF?style=for-the-badge&logo=shield)
![Status](https://img.shields.io/badge/Status-Production%20Ready-10B981?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-38BDF8?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-Zero%20Dependencies%20(100%25%20Client--Side)-A855F7?style=for-the-badge)
![Helpline](https://img.shields.io/badge/Official%20Helpline-1930%20(India)-EF4444?style=for-the-badge)

An interactive, modern, client-side educational web application engineered to empower college and school students with defensive cybersecurity habits. Designed to combat contemporary digital threats—including generative AI voice clones, automated spear-phishing, credential stuffing, public Wi-Fi snooping, and campus infostealers—while providing official reporting guidance under the Government of India's cybercrime framework.

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
  - [1. Landing Page & Live Cyber Defense Radar](#1-landing-page--live-cyber-defense-radar)
  - [2. Cyber Hygiene Tips & Deep Dives](#2-cyber-hygiene-tips--deep-dives)
  - [3. Interactive Phishing Lab & Link Inspector](#3-interactive-phishing-lab--link-inspector)
  - [4. Client-Side Password Safety Meter & Generator](#4-client-side-password-safety-meter--generator)
  - [5. 10-Scenario Cyber Safety Quiz](#5-10-scenario-cyber-safety-quiz)
  - [6. Daily & Weekly Habit Checklist](#6-daily--weekly-habit-checklist)
  - [7. Awareness Hub & Printable Student Pledge](#7-awareness-hub--printable-student-pledge)
  - [8. Official Cybercrime Reporting Guide (India Focus)](#8-official-cybercrime-reporting-guide-india-focus)
- [Technologies & Design System](#-technologies--design-system)
- [Project Directory Structure](#-project-directory-structure)
- [Quick Start & Local Preview](#-quick-start--local-preview)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [College Capstone & Demonstration Guide](#-college-capstone--demonstration-guide)
- [Privacy & Security Guarantee](#-privacy--security-guarantee)
- [License & Open Education](#-license--open-education)

---

## 🎯 Project Overview

College students are among the most connected demographics, yet they are increasingly targeted by sophisticated attacks:
1. **Generative AI Scams**: Audio deepfakes that clone a student's voice from reels to extort money from parents.
2. **Spear-Phishing**: Lookalike university exam alerts and fake scholarship portals.
3. **Campus Wi-Fi Insecurity**: Rogue "Evil Twin" hotspots in libraries and cafeterias.
4. **Trojanized Software**: Infostealers embedded inside cracked CAD tools, game mods, and free textbook downloads.

**AI Cyber Hygiene Awareness Campaign for Students** addresses these threats through hands-on simulations rather than dry lectures. Students can inspect real phishing messages, test passwords locally without privacy risk, challenge their instincts in scenario quizzes, track daily cyber habits, and access official helpline resources.

---

## 🚀 Key Features

### 1. Landing Page & Live Cyber Defense Radar
- **Cyberpunk Navy & Electric Cyan Theme**: Modern dark aesthetic with glassmorphism, responsive navigation, and accessible typography.
- **Interactive Cyber Threat Radar**: Real-time rotating defense protocols highlighting the latest AI clone threats and Wi-Fi defense rules.
- **Quick Metric Bar**: Clear indicators highlighting 100% private client-side processing, 10+ modules, and the 1930 emergency helpline.

### 2. Cyber Hygiene Tips & Deep Dives
- Filterable habit cards categorized by:
  - *All Habits*
  - *Passwords & 2FA*
  - *Wi-Fi & Browsing*
  - *Software & Updates*
  - *Privacy & Socials*
  - *AI Threat Defense*
- Expandable drawers containing real-world attack breakdowns (e.g., prompt bombing, infostealers, MITM attacks, barcode leaks).

### 3. Interactive Phishing Lab & Link Inspector
- **3 Realistic College Scenarios**:
  1. *University Exam Hall Ticket Notice* (Spoofed `.ac.in` domain and dangerous `.docm` macro attachment).
  2. *Banking KYC Suspension Alert* (Fake SMS urgency with unencrypted HTTP links).
  3. *AI Part-Time Campus Job Offer* (Advance-fee Telegram scam promising ₹4,500/day).
- **Interactive "Highlight Red Flags" Button**: Reveals visual warnings highlighting sender spoofing, panic language, and disguised URLs.
- **Hyperlink Destination Decoder**: Shows the deceptive displayed text vs. the actual destination link behind the scenes.
- **Interactive Decision Simulation**: Allows students to choose whether to click or report, providing instant educational feedback.

### 4. Client-Side Password Safety Meter & Generator
- **Zero-Data Transmission**: Evaluates passwords strictly within local browser memory using regex and entropy calculations. Never sends keystrokes over any network.
- **Real-Time Entropy Evaluation**:
  - Minimum 12-16 characters
  - Lowercase, uppercase, numbers, and special symbols
  - Pattern detection (blocks "password", "123456", "admin", repeating characters)
- **Estimated Supercomputer Crack Time**: Displays realistic brute-force estimates (e.g., "Instant", "A few hours", "Millions of centuries").
- **Cryptographic Password Generator**: Uses `window.crypto.getRandomValues()` for high-entropy keys with configurable length, character sets, and 1-click clipboard copying.

### 5. 10-Scenario Cyber Safety Quiz
- **10 Practical Scenarios**: Covering voice clones, public Wi-Fi, 2FA fatigue, BadUSB drops, pirated cracks, LLM prompt privacy, Quishing (QR scams), social media barcodes, passphrase math, and India's Golden Hour 1930 rule.
- **Instant Visual Feedback**: Color-coded answers (Green/Red) accompanied by explanations of the underlying security principle.
- **Comprehensive Score Dashboard**:
  - Performance rank badges (*Cyber Sentinel Master*, *Digital Cyber Defender*, *Cyber Hygiene Novice*).
  - Accuracy percentage and question breakdown.
  - Collapsible review drawer showing every question, selected answer, and correct response.

### 6. Daily & Weekly Habit Checklist
- Practical habits organized into **Daily Routines**, **Weekly Checkups**, and **Monthly & AI Defense**.
- **Persistent State**: Utilizes browser `localStorage` so checklist progress remains intact across page reloads.
- **Interactive Progress Bar**: Live completion percentages with reset options and celebration banners upon 100% completion.

### 7. Awareness Hub & Printable Student Pledge
- **Campus Slogans Carousel**: Rotating memorable security maxims with 1-click copy functionality.
- **Shareable WhatsApp & Social Tips**: Pre-formatted snippets ready to copy and post to student groups.
- **Customizable Cyber Pledge Certificate**:
  - Students enter their name to generate a formatted Cyber Hygiene Pledge Certificate.
  - Dedicated `@media print` CSS enables direct printing or saving as PDF without headers, footers, or background clutter.

### 8. Official Cybercrime Reporting Guide (India Focus)
- **Emergency Helpline 1930**: Explains the **Golden Hour Rule** (calling within 2 hours of unauthorized debit to freeze stolen funds).
- **National Portal Link**: Official direct link to [cybercrime.gov.in](https://cybercrime.gov.in).
- **Incident-Specific Guidance Matrix**: Detailed steps for Financial Fraud, Cyberbullying & Deepfake Defamation, Account Hijacking, and Malicious Phishing Sites.
- **Evidence Preservation Checklist**: Crucial items to keep before filing (transaction IDs, `.eml` email headers, uncropped screenshots, call logs).
- **Official Disclaimer**: Clarifies that the platform is an educational campaign and not a government portal.

---

## 🛠️ Technologies & Design System

- **HTML5**: Semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) with ARIA attributes for screen readers and keyboard navigation.
- **CSS3**:
  - Custom CSS properties for consistent color tokenization.
  - Fluid CSS Grid and Flexbox layouts.
  - Glassmorphic card styling (`backdrop-filter: blur()`).
  - Radar sweep animations and micro-interactions.
  - Fully responsive across desktop, laptop, tablet, and smartphone screens.
  - Custom `@media print` rules for certificates.
- **Vanilla JavaScript (ES6+)**:
  - Modular, cleanly commented code.
  - `IntersectionObserver` for active navbar tracking.
  - Web Crypto API for secure password generation.
  - Web Storage API (`localStorage`) for checklist persistence.
  - Clipboard API with fallback toast messaging.
- **Zero External Dependencies**: Works 100% offline without external npm packages, frameworks, or backend databases.

---

## 📂 Project Directory Structure

```text
vac/
├── index.html        # Complete single-page application structure & semantic sections
├── style.css         # Responsive styling, color variables, animations, print media
├── script.js         # Interactive application logic, quiz, checklist, checkers
└── README.md         # Full project documentation & deployment guide
```

---

## 💻 Quick Start & Local Preview

This project requires **no build step, no npm install, and no backend server**.

### Option A: Direct Browser Preview
1. Navigate to the project folder:
   `c:\Users\Yuva\OneDrive\Desktop\vac`
2. Double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option B: Using VS Code Live Server
1. Open the `vac` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if not already installed.
3. Right-click on `index.html` and click **"Open with Live Server"**.
4. The website will automatically launch at `http://127.0.0.1:5500`.

### Option C: Using Python Simple HTTP Server
If you have Python installed:
```bash
# Open PowerShell or Command Prompt in the vac directory:
cd c:\Users\Yuva\OneDrive\Desktop\vac

# Run Python's built-in HTTP server:
python -m http.server 8080
```
Open your browser and navigate to: `http://localhost:8080`

---

## 🌐 Deploying to GitHub Pages

You can host this project online for free using GitHub Pages in under 2 minutes:

### Step 1: Create a GitHub Repository
1. Log into your account at [github.com](https://github.com).
2. Click **New Repository**.
3. Name it: `ai-cyber-hygiene-students`.
4. Set visibility to **Public** and click **Create repository**.

### Step 2: Push Files via Git
Open PowerShell in `c:\Users\Yuva\OneDrive\Desktop\vac`:
```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Complete AI Cyber Hygiene Awareness Campaign Web App"

# Rename default branch to main
git branch -M main

# Link your GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/ai-cyber-hygiene-students.git

# Push files
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and root directory `/ (root)`.
4. Click **Save**.
5. Wait 60 seconds; your website will be live at:
   `https://YOUR_USERNAME.github.io/ai-cyber-hygiene-students/`

---

## 🎓 College Capstone & Demonstration Guide

If presenting this project for a college cybersecurity capstone, seminar, or viva:

1. **Introduction (1 min)**:
   - Introduce the title and problem statement: the surge of AI-assisted phishing and voice scams targeting students.
   - Highlight that the application is 100% client-side with zero data collection, prioritizing student privacy.

2. **Feature Walkthrough (3-4 mins)**:
   - **Hero & Threat Radar**: Show the live rotating AI threat rules.
   - **Phishing Lab**: Select the *University Exam Notice* scenario, click **Highlight Red Flags** to demonstrate sender spoofing and macro analysis, then show the URL decoder.
   - **Password Checker**: Type weak sample passwords (e.g., `student123`) to show the real-time crack calculation, then generate a high-entropy key and demonstrate the XKCD passphrase concept.
   - **Cyber Safety Quiz**: Answer 1-2 questions to demonstrate the instant explanation feature and show the final ranking dashboard.
   - **Daily Checklist**: Check off items to demonstrate progress tracking and refresh the page to prove `localStorage` persistence.
   - **Certificate Generator**: Enter your name, generate the Cyber Pledge Certificate, and click Print to showcase the print-optimized stylesheet.
   - **Official 1930 & Reporting Section**: Emphasize India's *Golden Hour* principle and the distinction between 1930 and cybercrime.gov.in.

3. **Key Viva Defense Points**:
   - *Why Vanilla JS?* Ensures lightning-fast loading, zero dependency vulnerabilities (no `node_modules` attack vectors), and offline capability.
   - *How is Password Safety Preserved?* No passwords ever leave browser memory; evaluation is performed using local JavaScript regex and mathematical entropy calculations.

---

## 🔒 Privacy & Security Guarantee

- **Zero Data Collection**: This platform does not collect, record, track, or transmit any user information.
- **Local Password Processing**: Evaluated entirely within browser RAM. Keystrokes are not sent across HTTP requests.
- **Educational Distinction**: The application explicitly informs users that it is an awareness tool and links out to official government portals for actual incident reporting.

---

## 📜 License & Open Education

This project is created as an **Open Educational Resource (OER)** for students, educators, and cybersecurity enthusiasts. Feel free to use, adapt, and share it for academic and non-commercial awareness campaigns.
