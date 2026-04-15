# Chat-form (Anvil) — LCI Improvements Draft

Goal
- Improve the chat/contact form to collect high-quality Life Cycle Inventory (LCI) inputs, while preserving UX, privacy, and accessibility.

Scope
- Front-end form fields and validation
- UX flows and messaging (consent, progress, errors)
- Mapping of collected inputs to LCI variables
- Backend handling notes and verification steps for Anvil workflow

High-level requirements
- Minimal friction for users: progressive disclosure of advanced LCI inputs.
- Clear consent about data use and anonymization.
- Accessibility (WCAG 2.1 AA) and mobile-first layout.
- Validation and server-side verification to prevent malformed or inconsistent LCI entries.

Suggested form structure
- Step 1 — Basic context
  - `Purpose` (select: estimate, comparison, certification help) — required
  - `Product type` (text/select) — required
  - `Estimated production year` (number/select) — optional

- Step 2 — Key LCI inputs (progressive reveal)
  - `Material composition` (multi-select / tags) — e.g., silicon, glass, aluminum
  - `Panel power (W)` or `Device power (W)` — numeric with units
  - `Lifetime (years)` — numeric
  - `Annual energy generation/use (kWh)` — numeric (optional) — with help text

- Step 3 — Operational context
  - `Location / irradiance profile` (select or text) — optional, with recommended presets
  - `Grid emission factor` (gCO2/kWh) — optional with default based on location

- Step 4 — Contact & consent
  - `Email` (optional) — for follow-up
  - `Consent checkbox` — required: explains how anonymized data will be used

UX & validation rules
- Use multi-step wizard with saved progress in localStorage (optional opt-in).
- Validate numeric ranges client-side and re-check server-side.
- Provide inline help icons and example values for each LCI field.
- Offer a "Quick estimate" mode that only asks for 2–3 fields (e.g., power, lifetime, location).

Mapping to LCI variables
- `Material composition` -> material fractions table (used for embodied emissions)
- `Power` / `Annual energy` -> energy generation/use time series (or mean annual)
- `Lifetime` -> amortization period for embodied impacts
- `Location` + `Grid factor` -> operational emissions calculation

Backend/Anvil verification notes
- Endpoint: `POST /api/lci-submissions` accepts JSON with typed schema.
- Server verifies ranges, normalizes units, and stores anonymized payloads for model training/review.
- Run validation suite (unit tests) that checks schema enforcement and rejects inconsistent combos (e.g., zero lifetime with nonzero annual energy).

Privacy & evidence
- Store only anonymized LCI inputs unless user opt-in for contact.
- Generate an evidence bundle for Anvil runs: request payload, validation logs, test run outputs, and reviewer notes.

Example HTML snippet (front-end)
```html
<form id="lci-form">
  <label>Product type<input name="product" required></label>
  <label>Power (W)<input type="number" name="power" min="0" step="0.1"></label>
  <label>Lifetime (years)<input type="number" name="lifetime" min="0" step="0.1"></label>
  <label>Email (optional)<input type="email" name="email"></label>
  <label><input type="checkbox" name="consent" required> I consent to anonymized use</label>
  <button type="submit">Estimate</button>
</form>
```

Tests & verification (Anvil flow)
- Baseline: run site validation (`scripts/validate_content.py`) to ensure no regressions.
- Unit tests for API schema and a small integration test that submits valid and invalid LCI payloads.
- Adversarial review: create a short checklist for reviewers to try malformed inputs and privacy edge cases.

Next steps
- Review and confirm required fields vs optional (quick estimate vs detailed).
- I can implement a prototype `includes/chat-form.html`+JS and a server-side validator plus tests.

--
Created by Copilot assistant as initial draft for Anvil LCI improvements.
