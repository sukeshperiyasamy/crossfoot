# Crossfoot — B2B Reconciliation & Data Automation Practice

🌐 **Live Production Website:** [https://crossfoot.netlify.app](https://crossfoot.netlify.app)  
📦 **GitHub Repository:** [https://github.com/sukeshperiyasamy/crossfoot](https://github.com/sukeshperiyasamy/crossfoot)

> **The Ledger Control Engine**: A fixed-scope business data consolidation and reconciliation practice for distributors and manufacturers in Tamil Nadu (Coimbatore & Chennai).

Crossfoot matches warehouse physical dispatches against accounting sales records (Tally / ERP) to isolate unbilled challans, quantity shortfalls, rate discrepancies, and timing lags with row-level proof.

---

## 📁 Repository Structure

- **`/website`**: The official marketing site built with Astro 5, Tailwind CSS v4, and modern semantic typography.
  - Complete 14-page marketing suite (`/`, `/diagnostic`, `/how-it-works`, `/proof`, `/pricing`, `/security`, `/faq`, `/about`, `/contact`, `/legal-summary`, `/nda`, `/who-we-help`, `/privacy`, `/thanks`).
  - Zero cloud database exposure — 100% air-gapped security posture.
- **`/docs`**: Master Strategic Playbooks & Research Suite (26 documents):
  - `docs/business_model_strategy_and_canvas.md`: Full operating economics, beachhead strategy, and revenue projections.
  - `docs/pricing_strategy_and_economic_model.md`: Unit economics, ₹1,999 entry diagnostic, and ₹25k–₹50k sprint tiers.
  - `docs/operational_technical_and_regulatory_playbook.md`: Air-gapped Python/DuckDB pipeline, 4-day sprint workflow.
  - `docs/legal_contract_pack_nda_and_sow.md`: Mutual NDA, Statement of Work, and data disposal protocols.
  - `docs/seo_strategy_and_local_domination_playbook.md`: Local organic search playbook for Coimbatore & Chennai B2B clusters.
  - `docs/customer_acquisition_plan_coimbatore_distributors.md`: 18-minute discovery calls, channel partnerships, and lead lists.
  - `docs/startup_pre_mortem_and_risk_register.md`: 12 failure modes, early warning indicators, and mitigation protocols.
  - *(See `/docs` for all 26 strategy guides, risk registers, and operational specifications)*

---

## 🚀 Running the Marketing Site Locally

```bash
cd website
npm install
npm run dev
```

Local dev server runs on `http://localhost:4321` (or next available port).

To build for production:

```bash
npm run build
npm run preview
```

---

## 🔒 Confidentiality & Security Standard

1. **100% Air-Gapped**: Client records never leave client-designated secure environments.
2. **Zero Third-Party AI / Cloud Storage**: Reconciliations run strictly on local memory engines (DuckDB / Pandas).
3. **Formal Evidence Disposal**: Cryptographic deletion certificates issued within 14 days of project completion.
