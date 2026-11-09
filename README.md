# BWH — Intelligent AD Solutions (PWA starter)

BWH is a bilingual (English/Arabic), rule-based troubleshooting reference for Active Directory, Windows Server, networking and security.

## Explicit design decisions
- No AI model, AI API, chatbot model, or machine-learning dependency.
- No connection to Active Directory, LDAP, domain controllers, company networks, or customer systems.
- No command execution. Commands are displayed as reference material only.
- Diagnostic decisions use explicit curated records and JavaScript matching/rules.
- PWA shell supports offline caching after the first successful load.
- Current starter version: 0.1.0.

## Run locally
Use a local HTTP server (service workers do not work from ordinary `file://` URLs).

Python:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080`.

## Deploy to cloud
Upload the complete `BWH` folder to an HTTPS static hosting provider. No backend is required for this prototype. A cloud backend can be added later for accounts, shared knowledge editing, analytics or synchronization, without adding AD connectivity or AI.

## Structure
- `index.html` — application shell and views
- `assets/css/style.css` — responsive visual design
- `assets/js/app.js` — navigation, search, bilingual rendering and deterministic diagnosis display
- `assets/js/knowledge.js` — curated starter knowledge pack
- `manifest.json` — PWA metadata
- `service-worker.js` — offline app-shell caching

## Knowledge quality
The included content is starter material, not an exhaustive or guaranteed-correct encyclopedia. Before production use, expand each article with:
- supported Windows Server versions and prerequisites
- precise symptoms and error codes
- diagnostic decision trees and branch conditions
- risk level and change impact
- tested resolution steps and rollback guidance
- Microsoft Learn references and review date

Do not run administrative commands in production without reviewing their scope and obtaining authorization. Some commands in the reference are read-only; others can change system state and are labelled accordingly.
