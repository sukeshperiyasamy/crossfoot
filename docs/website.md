# Complete Website Development Guide & Master Top-to-Bottom Blueprint
## Business Data Consolidation & Reporting Automation Practice

**Target Brand Name:** ReconcilePro / AccuRecon Analytics (or your selected trade name)  
**Target Market:** Owner-managed industrial, electrical, and engineering wholesale distributors in Coimbatore, Chennai, and Tamil Nadu  
**Core Offer:** 4-Day Operational Reconciliation & Leakage Diagnostic (₹8,500 + GST)  
**Primary Goal of the Website:** Convert qualified business owners into booking an ₹8,500 diagnostic or a 15-minute discovery call  
**Secondary Goal:** Instant WhatsApp consultation and direct download of an anonymized sample exception report  
**Effective Date:** 27 October 2026  

---

## PART 1: Website Architecture & Technical Development Guide

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              PRODUCTION WEB STACK ARCHITECTURE                         │
├────────────────────────────┬────────────────────────────┬──────────────────────────────┤
│ 1. CORE ENGINE             │ 2. STYLING & DESIGN        │ 3. LOGIC & INTERACTION       │
│ Semantic HTML5             │ Modern Vanilla CSS3        │ Lightweight Vanilla JS       │
│ • Blazing fast (100 score) │ • Design Token Variables   │ • Live Leakage Calculator    │
│ • Clean SEO & Microdata    │ • Glassmorphism & Accents  │ • Dynamic FAQ Accordion      │
│ • Zero heavy dependencies  │ • Fully Responsive Mobile  │ • WhatsApp CTA Generator     │
├────────────────────────────┴────────────────────────────┴──────────────────────────────┤
│ 4. ZERO-COST HOSTING & SERVERLESS DEPLOYMENT                                           │
│ Cloudflare Pages / Vercel / Netlify / GitHub Pages · Free SSL · Custom Domain (₹800/yr)│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1. Technology Stack Decisions (Why This Stack?)

* **Core Stack:** Pure **HTML5 + Vanilla CSS3 + Vanilla JavaScript**.
* **Zero Bloat / Zero Frameworks:** Avoid heavy frameworks like React or Next.js for this stage. A static HTML/CSS/JS site loads in $<0.5$ seconds, scores 100/100 on Google Lighthouse, costs **₹0/month** to host, and will never break due to dependency updates.
* **Hosting Options (All 100% Free Tier):**
  1. **Cloudflare Pages (Recommended):** Ultra-fast Indian CDN edge servers (Chennai, Mumbai, Bangalore nodes), free automated SSL, DDoS protection, and continuous git deployment.
  2. **Vercel / Netlify:** Instant drag-and-drop deployment or GitHub integration.
  3. **GitHub Pages:** Free static hosting directly from a repository.
* **Serverless Lead Capture:** Use **Web3Forms** or **Formspree** (free tiers provide 50–250 form submissions/month directly to your business email and WhatsApp without requiring a backend server).

---

### 2. File and Directory Structure

Create a clean, dedicated website project folder:

```
reconcile-website/
├── index.html              # Complete single-page landing page
├── css/
│   └── style.css           # Premium responsive styling & design tokens
├── js/
│   └── script.js           # Interactive calculator, accordion, and tracking
├── assets/
│   ├── favicon.ico         # 32x32 favicon
│   ├── logo.svg            # Clean geometric vector logo
│   ├── sample_report.pdf   # Anonymized sample diagnostic report download
│   └── images/
│       ├── tally_recon_mockup.png   # High-res exception register preview
│       └── security_badge.svg       # Air-gapped security badge
├── robots.txt              # Search engine crawler instructions
└── sitemap.xml             # XML sitemap for Google indexing
```

---

### 3. Step-by-Step Development & Deployment Instructions

#### Step 1: Set Up Local Development
1. Create the `reconcile-website` folder on your machine.
2. Place `index.html`, `css/style.css`, and `js/script.js` in their respective directories.
3. Preview locally using any local server (e.g., Python `python -m http.server 8000`, VS Code Live Server, or by opening `index.html` in your browser).

#### Step 2: Configure Serverless Contact Form
1. Visit [web3forms.com](https://web3forms.com) (free, no sign-up required).
2. Enter your business email to receive an Access Key.
3. Paste the Access Key into the hidden form field in `index.html`.

#### Step 3: Deploy to Cloudflare Pages (5 Minutes)
1. Push your code to a free GitHub repository (e.g., `github.com/yourname/reconcile-website`).
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) $\rightarrow$ **Workers & Pages** $\rightarrow$ **Create Application** $\rightarrow$ **Pages** $\rightarrow$ **Connect to Git**.
3. Select your repository. Build settings: Leave build command blank; set output directory to `/`.
4. Click **Save and Deploy**. Your website is now live worldwide on a free `.pages.dev` domain with automatic SSL.

#### Step 4: Connect Custom Domain
1. Purchase a `.in` or `.com` domain (e.g., `reconcilepro.in` via Dynadot, Namecheap, or GoDaddy for ~₹600–₹900/year).
2. In Cloudflare Pages, go to **Custom Domains** $\rightarrow$ **Set up a domain** $\rightarrow$ Enter your domain. Cloudflare configures the DNS and provides an SSL certificate automatically.

---

### 4. SEO, Social Graph & Structured Schema Markup

Include comprehensive JSON-LD structured data in the `<head>` of `index.html` so Google recognizes the business as a verified local IT and business consultancy:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ReconcilePro Analytics",
  "description": "Fixed-scope operational-to-financial reconciliation and profit leakage diagnostic for industrial and electrical wholesale distributors.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0168",
    "longitude": "76.9558"
  },
  "priceRange": "₹8,500 - ₹50,000",
  "openingHours": "Mo-Sa 09:00-18:30",
  "telephone": "+91-XXXXXXXXXX",
  "url": "https://yourdomain.in"
}
</script>
```

---

## PART 2: Complete Top-to-Bottom Page Details & Wireframe

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              FULL PAGE WIREFRAME (TOP TO BOTTOM)                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [TOP BAR] Emergency Announcement & Quick WhatsApp Line                                 │
│ [NAVBAR] Logo · Services · How It Works · Calculator · Security · [Book Diagnostic CTA]│
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 1: HERO]                                                                      │
│ • Badge: "Engineered for Coimbatore & Chennai Industrial Wholesalers"                  │
│ • Headline: "Stop Losing Money Between Dispatched Goods and Tally Invoices"            │
│ • Subhead: 4-Day Fixed Diagnostic · 100% Traceable Row-Level Audit · ₹8,500 + GST     │
│ • Dual CTAs: [Book 4-Day Diagnostic (₹8,500)]  [Chat on WhatsApp (Instant)]             │
│ • Visual Hero Mockup: Split view of messy Tally/Challans turning into Clean Ledger     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 2: TRUST & COMPATIBILITY BAR]                                                 │
│ Logos: TallyPrime · Busy · Excel / Power Query · SAP B1 · MSME Registered · 100% Local │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 3: THE PROBLEM] "The 3 Invisible Profit Leaks in Wholesale Distribution"      │
│ Card 1: Unbilled Delivery Challans · Card 2: Return Mismatches · Card 3: Clerical Drag │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 4: THE SOLUTION] "The 4-Day Reconciliation & Leakage Diagnostic"              │
│ Scope: Up to 2 files / 100,000 rows · 4 Core Deliverables · Fixed Fee: ₹8,500 + GST    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 5: INTERACTIVE LEAKAGE & ROI CALCULATOR]                                      │
│ Sliders: Monthly Dispatches & Average Invoice Value ──► Real-Time Leakage & Payback    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 6: HOW IT WORKS] The 4-Step Concierge Journey (15-Min NDA to Final Handover)  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 7: PRICING & SERVICE LADDER]                                                  │
│ Tier 1: ₹8,500 Diagnostic · Tier 2: ₹35,000 Sprint · Tier 3: ₹6,000/mo Retainer       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 8: COMPETITIVE COMPARISON] Us vs. Internal Accountant vs. Tally Partner vs CA │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 9: AIR-GAPPED SECURITY & PRIVACY] DPDPA 2023 · 0% Cloud AI · 30-Day Shred     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 10: FAQS] 8 Deep-Dive Objections Addressed (Tally replacement, CA trust, etc.)│
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SECTION 11: LEAD CAPTURE & BOOKING FORM] Secure File Review & Discovery Scheduler     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [FOOTER] Legal notices · MSME Udyam ID · Limitation of Liability · Contact & Copyright │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Detailed Section-by-Section Specifications

#### Top Bar (Emergency Header)
* **Text:** ⚡ *"Running on TallyPrime + Excel? Uncover unbilled dispatches before month-end close."*
* **Direct Link:** WhatsApp Fast-Line: *“Chat directly with our Technical Lead: +91-XXXXXXXXXX”*

#### Section 1: Hero Section (The Hook & Value Proposition)
* **Eyebrow Badge:** 🛡️ *Specialist Data Practice for Coimbatore & Chennai Wholesalers*
* **Primary H1 Headline:**  
  **"Stop Losing Unbilled Revenue Between Your Warehouse Dispatches and Tally Invoices."**
* **Supporting Sub-Headline:**  
  *"We ingest your raw delivery challans and Tally sales registers, run an automated deterministic reconciliation, and hand you a 100% auditable exception register showing exactly what wasn't billed, what was under-billed, and why. Delivered in 4 business days for a fixed fee of ₹8,500 + GST."*
* **Primary Call-to-Action (CTA):** `[Book 4-Day Diagnostic — ₹8,500]` *(Smooth scrolls to booking form)*
* **Secondary Call-to-Action:** `[Chat on WhatsApp 💬]` *(Opens direct pre-filled WhatsApp message: "Hi, I'm an industrial distributor in Coimbatore and want to check my unbilled dispatches.")*
* **Micro-Trust Badges below CTAs:**  
  `✓ Zero Software to Install` &nbsp;|&nbsp; `✓ 100% Offline Air-Gapped Security` &nbsp;|&nbsp; `✓ 100% Fee Credited to Implementation`

#### Section 2: Compatibility & Ecosystem Bar
* **Heading:** Seamlessly compatible with your current operational software:
* **Logos / Badges:** TallyPrime 4.0 / Tally.ERP 9 · Busy Accounting · Microsoft Excel / Power Query · Google Sheets · SAP Business One · Transporter Lorry Receipts (LRs).

#### Section 3: The Problem We Solve ("The Hidden Leakage Trap")
* **Headline:** Why Standard Tally Reports Still Leave Profit on the Table
* **3-Column Grid of Pain Points:**
  1. **The Unbilled Dispatch Leak:** Goods leave the godown on an urgent delivery challan (DC) during peak hours. The sales invoice is delayed, forgotten, or mismatched—resulting in goods shipped that are never collected.
  2. **The Disputed Return & Credit Note Drift:** Customers return partial goods with driver delivery slips. Credit notes are issued with differing SKU rates or unlinked reference numbers, leading to payment deductions at month-end.
  3. **The 30-Hour Clerical Drag:** Senior accountants spend the first 7 days of every month manually running fragile VLOOKUPs, cross-referencing paper slips, and fixing `#REF!` errors instead of collecting outstanding cash.

#### Section 4: The Core Offer — The 4-Day Reconciliation Diagnostic
* **Headline:** Exactly What You Receive in the ₹8,500 Diagnostic
* **Deliverable Breakdown:**
  * **1. Traceable Excel Exception Register:** Every flagged mismatch is tagged with original source row IDs (`DC_RowID`, `Tally_RowID`). Filterable by: *Unbilled Dispatch*, *Rate Variance*, *Quantity Shortage*, and *Timing Lag*.
  * **2. Executive Reconciliation Summary (PDF):** A board-ready management briefing quantifying total reconciled turnover, net rupee leakage identified, and percentage accuracy.
  * **3. Documented Matching Rules:** A clear, human-readable specification of your business's matching logic for your internal team's future reference.
  * **4. 30-Minute Executive Handover Session:** A screen-share or in-person walkthrough with the Managing Director and Head Accountant detailing actionable recovery steps.
* **Strict Scope Limits:** Up to 2 files (e.g., Dispatch Register + Tally Sales Register) · Up to 100,000 combined rows · Delivered in 4 business days.

#### Section 5: Interactive Financial Leakage & Payback Calculator
An embedded, live interactive widget allowing owners to visualize potential recovery:
* **Slider 1:** Average Monthly Dispatches (Range: 200 to 5,000 dispatches)
* **Slider 2:** Average Invoice Value (Range: ₹5,000 to ₹1,50,000)
* **Slider 3:** Estimated Unbilled Error Rate (Range: 0.2% to 2.5%, default 0.8%)
* **Dynamic Output Display:**
  * Estimated Annual Revenue at Risk: **₹[Calculated Value]**
  * Estimated Clerical Hours Burned / Year: **[Hours]**
  * ROI on ₹8,500 Diagnostic: **[X]% Payback in First Month**

#### Section 6: How It Works (The 4-Step Concierge Journey)
* **Step 1: 15-Minute Scoping & Signed NDA (Day 1):** We verify your file formats, sign our 1-page mutual NDA, and define the single reconciliation question.
* **Step 2: Secure File Intake & Advance (Day 1):** You export closed-month CSVs/Excel registers and clear the ₹8,500 fee via bank NEFT/RTGS.
* **Step 3: Automated Pipeline Execution & QA (Days 2–3):** We run deterministic cleaning and join pipelines on an air-gapped machine, cross-checking 100% of control totals.
* **Step 4: Executive Handover & Credit (Day 4):** We walk you through every exception. *Bonus:* If you choose to automate this permanently, **100% of your ₹8,500 fee is credited toward the Implementation Sprint.**

#### Section 7: Transparent Packaging & Pricing Ladder
Three clear tiers showing that the diagnostic is a low-risk stepping stone:

| Package Tier | Scope & Focus | Deliverables | Fixed Price |
| :--- | :--- | :--- | :---: |
| **Reconciliation Diagnostic** *(Recommended Entry)* | 1 workflow (Dispatch vs Invoice) · Historical closed month · Up to 100k rows | Traceable Exception Register, Executive PDF Report, 30-min Handover | **₹8,500 + GST** *(100% credited to Sprint)* |
| **Permanent Implementation Sprint** | Automating the workflow permanently inside your team's routine | Custom Python/Power Query 1-click pipeline, staff training, SOP guide | **₹35,000 + GST** *(Less ₹8,500 credit)* |
| **Monthly Managed Retainer** | Ongoing monthly verification & reporting refresh | Monthly data ingestion, exception scrubbing, and executive MIS briefing | **₹6,000 / month** |

#### Section 8: Competitive Comparison Matrix

| Feature / Capability | ReconcilePro Practice | Traditional CA Firm | Tally Software Partner | Internal Bookkeeper |
| :--- | :---: | :---: | :---: | :---: |
| **Focus Area** | Operational-to-Financial Leakage | Statutory Tax & GST Audit | Software License & TDL Customization | Daily Data Entry |
| **Row-Level Discrepancy Audit** | **100% Traceable Row IDs** | Sample Checks Only | No (Focus on Tally Only) | Manual VLOOKUP (High Error) |
| **Turnaround Time** | **4 Business Days** | 3–6 Weeks (During Tax Close) | 2–4 Weeks | Continuous Month-End Drag |
| **System Modification Required** | **Zero (Read-Only Exports)** | None | Yes (Changes TDL/Config) | None |
| **Pricing Predictability** | **Fixed ₹8,500 SOW** | Hourly / Annual Retainer | Heavy Custom Quoting | Fixed Monthly Salary |

#### Section 9: Institutional Data Privacy & Security Protocols
* **Air-Gapped Local Processing:** Data is processed exclusively on BitLocker-encrypted local NVMe drives. No customer files are ever uploaded to multi-tenant cloud storage.
* **Zero Public AI Exposure:** We guarantee that no client data, pricing, or customer names are ever pasted into ChatGPT or public AI tools.
* **1-Page Mutual NDA:** Formal legal confidentiality executed prior to receiving a single byte of client data.
* **30-Day Cryptographic Purge:** Following client acceptance, all raw working exports are cryptographically wiped (`shred -u`).

#### Section 10: Frequently Asked Questions (Accordion)
1. **Does this require installing software on our office computers?**  
   *No. We work entirely with read-only Excel or CSV exports that you generate from your existing Tally or billing software. Zero installation, zero IT disruption.*
2. **Will our current Chartered Accountant (CA) feel offended?**  
   *Not at all. We do not perform statutory audits, file tax returns, or dispute accounting ledgers. We perform operational reconciliation between your warehouse and billing records—providing clean, pre-scrubbed numbers that make your CA's audit faster and easier.*
3. **What if our Excel sheets have typos, missing codes, or irregular date formats?**  
   *That is exactly what our pipeline is built to handle. Our automated cleaning scripts normalize dates, strip whitespace, handle leading zeros, and isolate unmapped records into a dedicated review tab.*
4. **How do you guarantee that a flagged exception is real and not a false match?**  
   *Every reported exception contains the exact row numbers from both source files and the explicit rule that triggered it. We also verify that control totals balance 100% against your raw source registers before delivery.*
5. **How does the 100% implementation credit work?**  
   *If your diagnostic reveals recurring discrepancies and you commission our ₹35,000 Implementation Sprint to automate the process permanently, the entire ₹8,500 diagnostic fee is deducted from your final invoice.*

#### Section 11: Lead Capture & Diagnostic Booking Form
A clean, frictionless form:
* Fields:
  1. Full Name
  2. Company Name & Location (Coimbatore, Chennai, Other)
  3. Industry / Trade Vertical (Electrical Wholesaler, Pumps/Valves, Industrial Fasteners, Other)
  4. WhatsApp / Phone Number *(Mandatory)*
  5. Primary Software (TallyPrime, Busy, Custom ERP, Spreadsheets)
  6. Estimated Monthly Dispatches ($<500$, $500–2,000$, $>2,000$)
  7. Brief Description of Current Mismatch Pain
* **Button:** `[Request Diagnostic Review & SOW]`
* **Direct Instant Option:** *"Prefer a direct chat? Click to talk on WhatsApp (+91-XXXXXXXXXX) with our technical lead."*

#### Section 12: Footer & Compliance Notices
* Registered Entity: ReconcilePro Analytics (Sole Proprietorship / MSME Udyam Registered)
* Physical Address: R.S. Puram / Gandhipuram, Coimbatore, Tamil Nadu, India
* Contact: `contact@reconcilepro.in` · +91-XXXXXXXXXX
* Legal Links: Terms of Service · Privacy Policy (DPDPA 2023 Compliant) · Limitation of Liability
* Copyright: © 2026 ReconcilePro Analytics. All rights reserved.

---

## PART 3: Production-Ready Source Code

Below is the complete, modular source code for `index.html`, `css/style.css`, and `js/script.js`. You can copy these directly into your project directory.

### 1. `index.html` (Complete Production Document)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReconcilePro | 4-Day Reconciliation & Leakage Diagnostic for Distributors</title>
  <meta name="description" content="Stop losing unbilled revenue between your warehouse delivery challans and Tally invoices. 4-day fixed-scope diagnostic for Coimbatore & Chennai wholesalers.">
  
  <!-- Google Fonts: Inter & Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ReconcilePro Analytics",
    "description": "Fixed-scope reconciliation and profit leakage diagnostic for industrial distributors.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "priceRange": "₹8,500 - ₹50,000",
    "telephone": "+91-9876543210"
  }
  </script>
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-bar">
    <div class="container top-bar-content">
      <span>⚡ <strong>Running on TallyPrime + Excel?</strong> Identify unbilled delivery challans in 4 days.</span>
      <a href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20the%204-day%20reconciliation%20diagnostic." target="_blank" class="top-bar-link">WhatsApp Fast-Line: +91-98765-43210 →</a>
    </div>
  </div>

  <!-- Main Navigation -->
  <header class="navbar">
    <div class="container nav-container">
      <a href="#" class="brand-logo">
        <span class="logo-mark">⚡</span> Reconcile<span>Pro</span>
      </a>
      <nav class="nav-menu" id="navMenu">
        <a href="#problem">The Problem</a>
        <a href="#diagnostic">Diagnostic Scope</a>
        <a href="#calculator">ROI Calculator</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#security">Security</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="nav-cta">
        <a href="#book" class="btn btn-primary btn-sm">Book Diagnostic (₹8,500)</a>
      </div>
      <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu">☰</button>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="badge">🛡️ Tailored for Coimbatore & Chennai Industrial Wholesalers</div>
        <h1 class="hero-title">Stop Losing Unbilled Revenue Between Warehouse Dispatches & Tally.</h1>
        <p class="hero-subhead">
          We cross-check your raw delivery challans against your Tally sales registers, run an automated deterministic reconciliation, and hand you a <strong>100% auditable exception register</strong> showing what was unbilled, under-billed, or delayed.
        </p>
        <div class="hero-highlights">
          <span>✓ Fixed Turnaround: 4 Business Days</span>
          <span>✓ Fixed Fee: ₹8,500 + GST</span>
          <span>✓ 100% Credited to Permanent Automation</span>
        </div>
        <div class="hero-actions">
          <a href="#book" class="btn btn-primary btn-lg">Book 4-Day Diagnostic — ₹8,500</a>
          <a href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20an%20industrial%20distributor%20and%20want%20to%20discuss%20our%20dispatch%20reconciliation." target="_blank" class="btn btn-secondary btn-lg">
            💬 Quick WhatsApp Chat
          </a>
        </div>
        <p class="hero-guarantee">🔒 100% Offline Air-Gapped Processing · Signed Mutual NDA Included</p>
      </div>
      <div class="hero-preview">
        <div class="mockup-card">
          <div class="mockup-header">
            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
            <span class="mockup-title">Audit_Exception_Register_Aug2026.xlsx</span>
          </div>
          <div class="mockup-body">
            <div class="recon-stat">
              <div><small>Turnover Analyzed</small><strong>₹1.42 Crore</strong></div>
              <div><small>Unbilled Dispatches</small><strong class="text-danger">18 Challans</strong></div>
              <div><small>Net Cash at Risk</small><strong class="text-warning">₹1,84,200</strong></div>
            </div>
            <table class="mockup-table">
              <thead>
                <tr>
                  <th>DC No</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Variance</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row-danger">
                  <td>DC-1045</td>
                  <td>12-Aug</td>
                  <td><span class="tag tag-danger">Unbilled Dispatch</span></td>
                  <td>-₹34,500</td>
                </tr>
                <tr class="row-warning">
                  <td>DC-1088</td>
                  <td>18-Aug</td>
                  <td><span class="tag tag-warning">Qty Shortfall (10u)</span></td>
                  <td>-₹8,200</td>
                </tr>
                <tr class="row-success">
                  <td>DC-1102</td>
                  <td>22-Aug</td>
                  <td><span class="tag tag-success">Exact Match</span></td>
                  <td>₹0</td>
                </tr>
              </tbody>
            </table>
            <div class="mockup-footer">
              <span>Traceable Row IDs Verified</span>
              <span>100% Reconciled to Tally</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Compatibility Bar -->
  <section class="ecosystem-bar">
    <div class="container ecosystem-content">
      <p>Works seamlessly with your existing software exports:</p>
      <div class="ecosystem-tags">
        <span>TallyPrime 4.0 / ERP 9</span>
        <span>Busy Accounting</span>
        <span>Microsoft Excel / Power Query</span>
        <span>SAP Business One</span>
        <span>Transporter Lorry Receipts (LR)</span>
      </div>
    </div>
  </section>

  <!-- Problem Section -->
  <section class="section-padding" id="problem">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">The Three Hidden Profit Leaks in Wholesale Distribution</h2>
        <p class="section-subtitle">Why standard month-end closing still lets unbilled goods slip through the cracks.</p>
      </div>
      <div class="grid-3">
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>1. The Unbilled Dispatch Leak</h3>
          <p>Goods are dispatched on an urgent physical Delivery Challan during high-volume afternoon lorry cutoffs. The sales invoice is delayed, forgotten, or misplaced—leaving thousands of rupees in shipped inventory unbilled.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>2. Disputed Returns & Credit Notes</h3>
          <p>Clients return partial goods with delivery drivers. Credit notes are issued with differing SKU rates or unlinked reference numbers, causing major customer disputes and payment hold-ups 45 days later.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⏳</div>
          <h3>3. 30 Hours of Month-End Clerical Panic</h3>
          <p>Senior accountants spend the first week of every month manually copying and pasting columns, fixing broken `#REF!` formulas, and cross-checking paper binders instead of collecting outstanding receivables.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution & Deliverables Section -->
  <section class="section-padding bg-alt" id="diagnostic">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge">The Fixed-Scope Diagnostic</span>
        <h2 class="section-title">What You Get in the 4-Day Reconciliation Diagnostic</h2>
        <p class="section-subtitle">A deterministic, auditable investigation of one core operational workflow for a fixed fee of ₹8,500 + GST.</p>
      </div>
      <div class="grid-2">
        <div class="deliverable-card">
          <div class="deliverable-num">01</div>
          <div class="deliverable-info">
            <h3>Traceable Excel Exception Register</h3>
            <p>Every single mismatch linked directly to original row numbers in your files (`DC_RowID`, `Tally_RowID`). Filter easily by unbilled dispatches, rate differences, and partial deliveries.</p>
          </div>
        </div>
        <div class="deliverable-card">
          <div class="deliverable-num">02</div>
          <div class="deliverable-info">
            <h3>Executive Reconciliation PDF Briefing</h3>
            <p>A concise, board-ready 3-page executive summary detailing total turnover analyzed, verified match percentage, net unbilled leakage, and recommended recovery steps.</p>
          </div>
        </div>
        <div class="deliverable-card">
          <div class="deliverable-num">03</div>
          <div class="deliverable-info">
            <h3>Documented Matching Logic</h3>
            <p>A clear, plain-language document specifying the exact validation and matching criteria used, giving your internal finance team a permanent reference standard.</p>
          </div>
        </div>
        <div class="deliverable-card">
          <div class="deliverable-num">04</div>
          <div class="deliverable-info">
            <h3>30-Minute Management Walkthrough</h3>
            <p>An in-person or screen-share handover session with the Managing Director and Head Accountant walking through high-value exceptions and recovery actions.</p>
          </div>
        </div>
      </div>
      <div class="scope-box">
        <h4>📋 Diagnostic Scope Boundaries</h4>
        <p>• <strong>Scope:</strong> One defined workflow (e.g., Dispatch Challans vs. Tally Sales Register) &nbsp;|&nbsp; • <strong>Inputs:</strong> Up to 2 files / 100,000 combined rows &nbsp;|&nbsp; • <strong>Turnaround:</strong> 4 Business Days &nbsp;|&nbsp; • <strong>Fee:</strong> ₹8,500 + GST (100% credited toward permanent automation).</p>
      </div>
    </div>
  </section>

  <!-- Interactive ROI Calculator -->
  <section class="section-padding" id="calculator">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge">Interactive ROI Estimator</span>
        <h2 class="section-title">Calculate Your Potential Profit Leakage</h2>
        <p class="section-subtitle">See what unbilled dispatches and clerical drag might be costing your distribution business each year.</p>
      </div>
      <div class="calc-wrapper">
        <div class="calc-inputs">
          <div class="form-group">
            <label for="monthlyDispatches">Monthly Dispatch Volume (Challans): <strong id="dispatchVal">800</strong></label>
            <input type="range" id="monthlyDispatches" min="200" max="3000" step="50" value="800">
          </div>
          <div class="form-group">
            <label for="avgOrderVal">Average Challan Value (₹): <strong id="orderVal">₹25,000</strong></label>
            <input type="range" id="avgOrderVal" min="5000" max="150000" step="5000" value="25000">
          </div>
          <div class="form-group">
            <label for="errorRate">Estimated Unbilled / Shortfall Rate: <strong id="rateVal">0.8%</strong></label>
            <input type="range" id="errorRate" min="0.2" max="2.0" step="0.1" value="0.8">
          </div>
        </div>
        <div class="calc-results">
          <div class="calc-card">
            <small>Estimated Annual Revenue at Risk</small>
            <h3 id="annualLeakage">₹1,92,000</h3>
            <p>Based on unbilled deliveries, missing challans, and rate variance deductions.</p>
          </div>
          <div class="calc-card highlight">
            <small>Diagnostic ROI Multiplier</small>
            <h3 id="roiMultiple">22.5x</h3>
            <p>Your one-time ₹8,500 investment pays for itself if it identifies just 1–2 unbilled challans.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="section-padding bg-alt" id="how-it-works">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">How It Works: 4 Steps in 4 Days</h2>
        <p class="section-subtitle">A low-friction, concierge delivery process that respects your operational time.</p>
      </div>
      <div class="process-steps">
        <div class="step-card">
          <div class="step-badge">Step 1</div>
          <h3>15-Min Scoping & Mutual NDA</h3>
          <p>We confirm your file formats, execute our standardized 1-page mutual NDA, and define the single reconciliation question.</p>
        </div>
        <div class="step-card">
          <div class="step-badge">Step 2</div>
          <h3>Secure File Intake & Deposit</h3>
          <p>You export last month's closed records (CSVs/Excel) and clear the ₹8,500 advance payment via bank transfer.</p>
        </div>
        <div class="step-card">
          <div class="step-badge">Step 3</div>
          <h3>Automated Pipeline Run & QA</h3>
          <p>We run deterministic Python transformations on an air-gapped machine, cross-checking 100% of control totals back to your raw data.</p>
        </div>
        <div class="step-card">
          <div class="step-badge">Step 4</div>
          <h3>Executive Handover & Credit</h3>
          <p>We deliver your Exception Register and Executive PDF. If you choose to automate this permanently, 100% of the ₹8,500 fee is credited toward the build.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Ladder Section -->
  <section class="section-padding" id="pricing">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge">Predictable Pricing</span>
        <h2 class="section-title">Transparent Packages. No Hidden Retainers.</h2>
        <p class="section-subtitle">Start with a low-risk diagnostic. Scale into permanent automation only when proven profitable.</p>
      </div>
      <div class="grid-3 pricing-grid">
        <div class="pricing-card featured">
          <div class="popular-tag">Most Popular Entry</div>
          <h3>4-Day Diagnostic</h3>
          <div class="price">₹8,500 <span>+ GST</span></div>
          <p class="price-desc">One-time audit of one historical closed month.</p>
          <ul class="pricing-features">
            <li>✓ Up to 2 files / 100,000 rows</li>
            <li>✓ Traceable Excel Exception Register</li>
            <li>✓ Executive Findings PDF Report</li>
            <li>✓ 30-min Handover Walkthrough</li>
            <li>✓ <strong>100% Credited to Implementation</strong></li>
          </ul>
          <a href="#book" class="btn btn-primary btn-block">Book Diagnostic</a>
        </div>
        <div class="pricing-card">
          <h3>Implementation Sprint</h3>
          <div class="price">₹35,000 <span>+ GST</span></div>
          <p class="price-desc">Automate the workflow permanently for your team.</p>
          <ul class="pricing-features">
            <li>✓ Custom 1-click Python/Power Query pipeline</li>
            <li>✓ Standard Operating Procedure (SOP) manual</li>
            <li>✓ Staff training session for internal finance</li>
            <li>✓ 30 days of post-handover bug-fix warranty</li>
            <li>✓ <em>Less ₹8,500 diagnostic credit = ₹26,500</em></li>
          </ul>
          <a href="#book" class="btn btn-secondary btn-block">Inquire for Sprint</a>
        </div>
        <div class="pricing-card">
          <h3>Monthly Retainer</h3>
          <div class="price">₹6,000 <span>/ month</span></div>
          <p class="price-desc">Ongoing peace of mind for monthly closings.</p>
          <ul class="pricing-features">
            <li>✓ Monthly raw data ingestion & cleaning</li>
            <li>✓ Month-end discrepancy audit before tax close</li>
            <li>✓ Updated executive dashboard & KPI summary</li>
            <li>✓ Priority technical email & phone support</li>
            <li>✓ Month-to-month flexibility (Cancel anytime)</li>
          </ul>
          <a href="#book" class="btn btn-secondary btn-block">Explore Retainer</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Air-Gapped Security Section -->
  <section class="section-padding bg-alt" id="security">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge">Institutional Security</span>
        <h2 class="section-title">Your Operational Data Never Leaves Secure Local Storage</h2>
        <p class="section-subtitle">We treat your customer names, item margins, and billing data with institutional confidentiality.</p>
      </div>
      <div class="grid-4">
        <div class="sec-card">
          <div class="sec-icon">🔒</div>
          <h4>Air-Gapped Processing</h4>
          <p>Files are processed exclusively on BitLocker-encrypted NVMe machines. Zero multi-tenant cloud storage.</p>
        </div>
        <div class="sec-card">
          <div class="sec-icon">🚫</div>
          <h4>Zero Public AI Exposure</h4>
          <p>We never paste your commercial spreadsheets into ChatGPT, Claude, or any third-party AI models.</p>
        </div>
        <div class="sec-card">
          <div class="sec-icon">📝</div>
          <h4>1-Page Mutual NDA</h4>
          <p>We execute a legally binding Non-Disclosure Agreement before receiving a single row of client data.</p>
        </div>
        <div class="sec-card">
          <div class="sec-icon">🗑️</div>
          <h4>30-Day Data Shredding</h4>
          <p>Following final sign-off, all raw working copies are cryptographically purged (`shred -u`) from our machines.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Accordion -->
  <section class="section-padding" id="faq">
    <div class="container max-w-800">
      <div class="section-header text-center">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Everything you need to know about the diagnostic process.</p>
      </div>
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-header">Does this require installing software on our office computers? <span class="arrow">▼</span></button>
          <div class="accordion-body">
            <p>No. We operate entirely on standard Excel or CSV exports that you extract from Tally or your warehouse system. You install zero software, and our work never touches your production Tally database.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">Will our Chartered Accountant (CA) feel offended? <span class="arrow">▼</span></button>
          <div class="accordion-body">
            <p>Not at all. We do not do tax audits, file returns, or dispute bookkeeping entries. We perform operational cross-checking between dispatch challans and sales invoices—giving your CA clean, verified numbers that make their quarterly audits much faster.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">What if our Excel sheets have messy typos or missing codes? <span class="arrow">▼</span></button>
          <div class="accordion-body">
            <p>That is the exact reason automated reconciliation exists. Our Python pipeline automatically normalizes dates, trims whitespace, standardizes casing, and isolates unmapped entries into a clear review tab.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">How do you guarantee that flagged exceptions are accurate? <span class="arrow">▼</span></button>
          <div class="accordion-body">
            <p>Every single exception reported includes the exact row number in your source file and the matching rule that triggered it. In addition, we verify that control totals match your raw source files 100% before delivering the report.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">How does the 100% implementation credit work? <span class="arrow">▼</span></button>
          <div class="accordion-body">
            <p>If you decide to commission our ₹35,000 Implementation Sprint to automate this reconciliation permanently into a 1-click routine, the entire ₹8,500 diagnostic fee is credited against your invoice.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Booking & Lead Capture Section -->
  <section class="section-padding bg-alt" id="book">
    <div class="container max-w-800">
      <div class="section-header text-center">
        <span class="badge">Start Your Diagnostic</span>
        <h2 class="section-title">Book Your 4-Day Reconciliation Diagnostic</h2>
        <p class="section-subtitle">Fill out the brief intake below or contact us directly on WhatsApp. We will confirm scope and send our mutual NDA within 4 business hours.</p>
      </div>
      <div class="form-card">
        <form id="leadForm" action="https://api.web3forms.com/submit" method="POST">
          <!-- Replace with your Web3Forms Access Key -->
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
          <input type="hidden" name="subject" value="New Diagnostic Booking Request">
          <input type="hidden" name="from_name" value="ReconcilePro Website">

          <div class="grid-2">
            <div class="form-group">
              <label for="fullName">Your Full Name *</label>
              <input type="text" id="fullName" name="name" required placeholder="e.g. S. Ramanathan">
            </div>
            <div class="form-group">
              <label for="companyName">Company Name & City *</label>
              <input type="text" id="companyName" name="company" required placeholder="e.g. Sri Krishna Electricals, Coimbatore">
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label for="phone">WhatsApp / Phone Number *</label>
              <input type="tel" id="phone" name="phone" required placeholder="e.g. 9876543210">
            </div>
            <div class="form-group">
              <label for="software">Primary Accounting / Billing Tool</label>
              <select id="software" name="software">
                <option value="TallyPrime">TallyPrime</option>
                <option value="Tally.ERP 9">Tally.ERP 9</option>
                <option value="Busy Accounting">Busy</option>
                <option value="Microsoft Excel Only">Excel Spreadsheets Only</option>
                <option value="Other ERP">Other ERP / Custom Software</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="volume">Estimated Monthly Dispatches (Challans)</label>
            <select id="volume" name="volume">
              <option value="200-500">200 – 500 dispatches / month</option>
              <option value="500-1500" selected>500 – 1,500 dispatches / month</option>
              <option value="1500+">More than 1,500 dispatches / month</option>
            </select>
          </div>

          <div class="form-group">
            <label for="notes">Briefly describe the mismatch or files you want to check (Optional)</label>
            <textarea id="notes" name="notes" rows="3" placeholder="e.g. We want to verify that all physical delivery challans from August match our Tally sales vouchers."></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="submitBtn">
            Request Diagnostic Scope & NDA (₹8,500)
          </button>
          <div id="formStatus" class="form-status"></div>
        </form>

        <div class="direct-contact-divider">
          <span>OR CHAT DIRECTLY</span>
        </div>
        <div class="direct-contact-box">
          <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%204-day%20reconciliation%20diagnostic%20for%20my%20business." target="_blank" class="btn btn-whatsapp btn-block">
            💬 Open Instant WhatsApp Chat (+91-98765-43210)
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-col">
        <a href="#" class="brand-logo footer-logo">⚡ Reconcile<span>Pro</span></a>
        <p>Specialized operational-to-financial reconciliation and profit leakage diagnostic practice for industrial wholesale distributors.</p>
        <p class="msme-badge">🇮🇳 MSME Registered Practice · Coimbatore, Tamil Nadu</p>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#problem">The Problem</a></li>
          <li><a href="#diagnostic">Diagnostic Deliverables</a></li>
          <li><a href="#calculator">ROI Calculator</a></li>
          <li><a href="#pricing">Pricing Packages</a></li>
          <li><a href="#security">Data Security</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Direct Contact</h4>
        <p>📍 R.S. Puram, Coimbatore, Tamil Nadu, India</p>
        <p>✉️ <a href="mailto:contact@reconcilepro.in">contact@reconcilepro.in</a></p>
        <p>📞 +91-98765-43210</p>
        <p>🕒 Mon – Sat: 09:30 AM – 06:30 PM IST</p>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© 2026 ReconcilePro Analytics. All rights reserved. 100% DPDPA 2023 Compliant.</p>
      <p class="disclaimer">Disclaimer: ReconcilePro is an independent data consultancy. TallyPrime and Tally.ERP 9 are registered trademarks of Tally Solutions Pvt. Ltd.</p>
    </div>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
```

---

### 2. `css/style.css` (Premium Modern Styling)

```css
/* ==========================================================================
   RECONCILEPRO MODERN DESIGN SYSTEM & TOKENS
   ========================================================================== */
:root {
  --primary: #2563eb;         /* Crisp Royal Blue */
  --primary-hover: #1d4ed8;
  --primary-light: #eff6ff;
  --secondary: #0f172a;       /* Deep Slate / Charcoal */
  --accent: #10b981;          /* Emerald Green (Profit/Safety) */
  --warning: #f59e0b;         /* Amber */
  --danger: #ef4444;          /* Crimson Leakage */
  --text-dark: #0f172a;
  --text-muted: #64748b;
  --text-light: #f8fafc;
  --bg-main: #ffffff;
  --bg-alt: #f8fafc;
  --border-color: #e2e8f0;
  --border-radius: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06);
  --shadow-lg: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.06);
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Base Resets */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: var(--text-dark);
  background-color: var(--bg-main);
  line-height: 1.6;
}

body {
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Outfit', sans-serif;
  color: var(--secondary);
  line-height: 1.25;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.max-w-800 {
  max-width: 800px;
}

.section-padding {
  padding: 88px 0;
}

.bg-alt {
  background-color: var(--bg-alt);
}

.text-center {
  text-align: center;
}

.text-danger { color: var(--danger); }
.text-warning { color: var(--warning); }
.text-success { color: var(--accent); }

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--primary-light);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 16px;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  transition: var(--transition);
}

.btn-primary {
  background-color: var(--primary);
  color: #fff;
}
.btn-primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.25);
}

.btn-secondary {
  background-color: #fff;
  color: var(--secondary);
  border: 1px solid var(--border-color);
}
.btn-secondary:hover {
  background-color: var(--bg-alt);
  border-color: #cbd5e1;
}

.btn-whatsapp {
  background-color: #25D366;
  color: #fff;
  font-size: 1rem;
}
.btn-whatsapp:hover {
  background-color: #20ba59;
}

.btn-sm { padding: 8px 16px; font-size: 0.9rem; }
.btn-lg { padding: 15px 30px; font-size: 1.05rem; }
.btn-block { width: 100%; }

/* Header & Navbar */
.top-bar {
  background-color: var(--secondary);
  color: var(--text-light);
  font-size: 0.85rem;
  padding: 8px 0;
}
.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar-link {
  color: #38bdf8;
  font-weight: 600;
}
.top-bar-link:hover { text-decoration: underline; }

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand-logo {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--secondary);
}
.brand-logo span { color: var(--primary); }
.nav-menu {
  display: flex;
  gap: 28px;
}
.nav-menu a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
}
.nav-menu a:hover { color: var(--primary); }
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
}

/* Hero Section */
.hero-section {
  padding: 80px 0 60px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}
.hero-container {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
}
.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.hero-subhead {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}
.hero-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 32px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}
.hero-guarantee {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Hero Mockup Card */
.mockup-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.mockup-header {
  background-color: var(--secondary);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.red { background-color: #ef4444; }
.dot.yellow { background-color: #f59e0b; }
.dot.green { background-color: #10b981; }
.mockup-title {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-left: 8px;
  font-family: monospace;
}
.mockup-body {
  padding: 20px;
}
.recon-stat {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background-color: var(--bg-alt);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.recon-stat small {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
}
.recon-stat strong {
  font-size: 1.05rem;
}
.mockup-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
  margin-bottom: 16px;
}
.mockup-table th, .mockup-table td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--border-color);
  text-align: left;
}
.mockup-table th { color: var(--text-muted); font-weight: 600; }
.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}
.tag-danger { background-color: #fee2e2; color: #b91c1c; }
.tag-warning { background-color: #fef3c7; color: #b45309; }
.tag-success { background-color: #d1fae5; color: #047857; }
.mockup-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Ecosystem Bar */
.ecosystem-bar {
  background-color: #fff;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 20px 0;
}
.ecosystem-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}
.ecosystem-content p {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}
.ecosystem-tags {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.ecosystem-tags span {
  background-color: var(--bg-alt);
  border: 1px solid var(--border-color);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--secondary);
}

/* Grids & Cards */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

.section-header {
  margin-bottom: 48px;
}
.section-title {
  font-size: 2.2rem;
  margin-bottom: 12px;
}
.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
}

.feature-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.feature-icon {
  font-size: 2.2rem;
  margin-bottom: 16px;
}
.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
}
.feature-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.deliverable-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.deliverable-num {
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--primary);
  background-color: var(--primary-light);
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.deliverable-info h3 { font-size: 1.15rem; margin-bottom: 6px; }
.deliverable-info p { color: var(--text-muted); font-size: 0.92rem; }

.scope-box {
  background-color: #fff;
  border: 1px solid #bfdbfe;
  border-left: 5px solid var(--primary);
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 32px;
  font-size: 0.92rem;
}
.scope-box h4 { margin-bottom: 4px; color: var(--primary); }

/* Interactive Calculator */
.calc-wrapper {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  padding: 36px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
}
.calc-inputs .form-group {
  margin-bottom: 24px;
}
.calc-inputs label {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.calc-inputs input[type="range"] {
  width: 100%;
  accent-color: var(--primary);
}
.calc-results {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
}
.calc-card {
  background-color: var(--bg-alt);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
.calc-card.highlight {
  background-color: var(--primary-light);
  border-color: #bfdbfe;
}
.calc-card small { font-size: 0.85rem; color: var(--text-muted); }
.calc-card h3 { font-size: 2.2rem; color: var(--secondary); margin: 6px 0; }
.calc-card.highlight h3 { color: var(--primary); }
.calc-card p { font-size: 0.82rem; color: var(--text-muted); }

/* How It Works Steps */
.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.step-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  position: relative;
}
.step-badge {
  display: inline-block;
  background-color: var(--secondary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.step-card h3 { font-size: 1.05rem; margin-bottom: 8px; }
.step-card p { font-size: 0.88rem; color: var(--text-muted); }

/* Pricing */
.pricing-grid { align-items: stretch; }
.pricing-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
}
.pricing-card.featured {
  border: 2px solid var(--primary);
  box-shadow: var(--shadow-lg);
  transform: scale(1.03);
}
.popular-tag {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.pricing-card h3 { font-size: 1.4rem; margin-bottom: 8px; }
.pricing-card .price { font-family: 'Outfit', sans-serif; font-size: 2.4rem; font-weight: 800; color: var(--secondary); margin-bottom: 4px; }
.pricing-card .price span { font-size: 0.9rem; font-weight: 500; color: var(--text-muted); }
.price-desc { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 24px; }
.pricing-features { list-style: none; margin-bottom: 32px; flex-grow: 1; }
.pricing-features li { font-size: 0.92rem; margin-bottom: 12px; color: var(--text-dark); }
.pricing-features li strong { color: var(--primary); }

/* Security Cards */
.sec-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
}
.sec-icon { font-size: 2rem; margin-bottom: 12px; }
.sec-card h4 { font-size: 1.05rem; margin-bottom: 8px; }
.sec-card p { font-size: 0.85rem; color: var(--text-muted); }

/* Accordion */
.accordion { display: flex; flex-direction: column; gap: 12px; }
.accordion-item {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}
.accordion-header {
  width: 100%;
  background: none;
  border: none;
  padding: 18px 24px;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: var(--secondary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordion-header:hover { color: var(--primary); }
.accordion-header .arrow { font-size: 0.75rem; transition: transform 0.2s ease; }
.accordion-item.active .arrow { transform: rotate(180deg); }
.accordion-body {
  padding: 0 24px 20px;
  display: none;
  color: var(--text-muted);
  font-size: 0.92rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
}
.accordion-item.active .accordion-body { display: block; }

/* Lead Form */
.form-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 40px;
  box-shadow: var(--shadow-md);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--secondary);
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: var(--transition);
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}
.form-status {
  margin-top: 16px;
  font-size: 0.9rem;
  text-align: center;
}
.direct-contact-divider {
  text-align: center;
  position: relative;
  margin: 32px 0 24px;
}
.direct-contact-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--border-color);
}
.direct-contact-divider span {
  position: relative;
  background-color: #fff;
  padding: 0 16px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

/* Footer */
.footer {
  background-color: var(--secondary);
  color: #94a3b8;
  padding: 64px 0 32px;
}
.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr;
  gap: 48px;
  margin-bottom: 48px;
}
.footer-logo { color: #fff; margin-bottom: 16px; display: inline-block; }
.footer-col p { font-size: 0.88rem; margin-bottom: 12px; }
.footer-col h4 { color: #fff; font-size: 1rem; margin-bottom: 16px; }
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 8px; font-size: 0.88rem; }
.footer-col ul li a:hover { color: #fff; }
.msme-badge {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #e2e8f0;
}
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

/* Responsive Breakpoints */
@media (max-width: 992px) {
  .hero-container { grid-template-columns: 1fr; gap: 40px; }
  .grid-3 { grid-template-columns: 1fr; }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .process-steps { grid-template-columns: repeat(2, 1fr); }
  .calc-wrapper { grid-template-columns: 1fr; }
  .pricing-card.featured { transform: none; }
  .footer-content { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .grid-2 { grid-template-columns: 1fr; }
  .grid-4 { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; }
  .nav-menu { display: none; }
  .nav-cta { display: none; }
  .mobile-toggle { display: block; }
  .top-bar { display: none; }
}
```

---

### 3. `js/script.js` (Interactive Calculator & Dynamic Logic)

```javascript
/* ==========================================================================
   RECONCILEPRO SCRIPT: CALCULATOR, ACCORDION & FORM HANDLING
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Interactive ROI & Leakage Calculator ---
  const dispatchesInput = document.getElementById('monthlyDispatches');
  const orderValInput = document.getElementById('avgOrderVal');
  const rateInput = document.getElementById('errorRate');

  const dispatchValLabel = document.getElementById('dispatchVal');
  const orderValLabel = document.getElementById('orderVal');
  const rateValLabel = document.getElementById('rateVal');

  const annualLeakageEl = document.getElementById('annualLeakage');
  const roiMultipleEl = document.getElementById('roiMultiple');

  function updateCalculator() {
    const dispatches = parseFloat(dispatchesInput.value);
    const avgOrder = parseFloat(orderValInput.value);
    const errorRate = parseFloat(rateInput.value) / 100;

    // Update labels
    dispatchValLabel.textContent = dispatches.toLocaleString('en-IN');
    orderValLabel.textContent = '₹' + avgOrder.toLocaleString('en-IN');
    rateValLabel.textContent = (errorRate * 100).toFixed(1) + '%';

    // Annual Calculation: Monthly Turnover * Error Rate * 12
    const monthlyTurnover = dispatches * avgOrder;
    const monthlyLeakage = monthlyTurnover * errorRate;
    const annualLeakage = monthlyLeakage * 12;

    // ROI Multiplier on Rs 8,500 Fee (Payback multiple over 1 year)
    const roiMultiple = (annualLeakage / 8500).toFixed(1);

    // Render formatted currency (Indian Numbering)
    annualLeakageEl.textContent = '₹' + Math.round(annualLeakage).toLocaleString('en-IN');
    roiMultipleEl.textContent = roiMultiple + 'x';
  }

  if (dispatchesInput && orderValInput && rateInput) {
    dispatchesInput.addEventListener('input', updateCalculator);
    orderValInput.addEventListener('input', updateCalculator);
    rateInput.addEventListener('input', updateCalculator);
    updateCalculator(); // Initialize on load
  }

  // --- 2. FAQ Accordion Functionality ---
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      accordionItems.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- 3. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = '#ffffff';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
      }
    });
  }

  // --- 4. Serverless Lead Form Submission (Web3Forms) ---
  const leadForm = document.getElementById('leadForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Request...';
      formStatus.textContent = '';

      const formData = new FormData(leadForm);

      try {
        const response = await fetch(leadForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = await response.json();

        if (response.status === 200) {
          formStatus.innerHTML = '<span style="color: #059669; font-weight: 600;">✓ Diagnostic request received! We will send our SOW and mutual NDA to your WhatsApp/email within 4 business hours.</span>';
          leadForm.reset();
        } else {
          formStatus.innerHTML = '<span style="color: #dc2626;">Submission failed. Please message us directly on WhatsApp (+91-98765-43210).</span>';
        }
      } catch (err) {
        formStatus.innerHTML = '<span style="color: #dc2626;">Network error. Please chat with us on WhatsApp (+91-98765-43210).</span>';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Request Diagnostic Scope & NDA (₹8,500)';
      }
    });
  }

});
```

---

## PART 4: Verification Checklist Before Launching

Before pushing this website live to prospective clients:

- [ ] **Access Key Configured:** Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` in `index.html` with your actual free key from [web3forms.com](https://web3forms.com).
- [ ] **Phone & WhatsApp Updated:** Replace `919876543210` across `index.html` and `style.css` with your verified business WhatsApp number.
- [ ] **Email Address Checked:** Update `contact@reconcilepro.in` to your working Google Workspace or professional domain email.
- [ ] **Tested on Mobile:** Verify that the calculator sliders, WhatsApp link, and booking form function smoothly on an Android and iPhone device.
- [ ] **Legal Protection:** Verify that the [legal_contract_pack_nda_and_sow.md](file:///c:/Users/sukes/Downloads/business%20plan/legal_contract_pack_nda_and_sow.md) terms match the diagnostic deliverables outlined on this page.

---

*Related Operational Documentation:*
* [legal_contract_pack_nda_and_sow.md](file:///c:/Users/sukes/Downloads/business%20plan/legal_contract_pack_nda_and_sow.md) — 1-Page Offline NDA & 4-Day Diagnostic SOW Contract.
* [customer_discovery_and_mom_test_playbook.md](file:///c:/Users/sukes/Downloads/business%20plan/customer_discovery_and_mom_test_playbook.md) — 18-Minute Discovery Interview Protocol.
* [lean_startup_validation_experiments_guide.md](file:///c:/Users/sukes/Downloads/business%20plan/lean_startup_validation_experiments_guide.md) — Pre-Registered Thresholds & 5-Tab Measurement Ledger.
* [startup_pre_mortem_and_risk_register.md](file:///c:/Users/sukes/Downloads/business%20plan/startup_pre_mortem_and_risk_register.md) — 12-Risk Register and Delivery Labor Downside Curves.
