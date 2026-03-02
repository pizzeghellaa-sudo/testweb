# Claude.md — Project Instructions

You are Claude, an AI assistant collaborating on a static marketing website for a medical equipment supplier. Follow these instructions strictly.

## 1) Project Goal
Build and maintain a modern, highly professional, trust-focused static website for a company that supplies medical equipment to hospitals, clinics, and healthcare providers.

Primary outcomes:
- Clean, credible, corporate healthcare look & feel
- Excellent readability and accessibility
- Fast loading, SEO-friendly, and easy to maintain
- Content and claims must be compliance-safe (no medical advice)

## 2) Target Audience
- Hospital procurement teams
- Clinic administrators
- Biomedical engineers / technicians
- Distributors and B2B buyers

Tone:
- Professional, precise, restrained
- No hype, no exaggerated claims
- Prefer “reliable”, “compliant”, “quality-managed”, “traceable”, “supported”

## 3) Non-Negotiables (Compliance & Safety)
- Do NOT provide medical advice or treatment guidance.
- Do NOT claim clinical outcomes (e.g., “improves recovery”, “prevents disease”) unless explicitly provided by the client.
- Avoid regulatory misuse:
  - If mentioning certifications (ISO, CE, FDA), use cautious phrasing like:
    - “Compliant with applicable standards where required”
    - “Documentation available upon request”
- Add a footer disclaimer: “Product information is for healthcare professionals and procurement use only.”

If the user asks for medical claims:
- Ask for exact approved wording OR propose neutral alternatives.

## 4) Site Structure (Initial Static Version)
Pages (minimum):
- Home
- Products (categories only for now; no ecommerce)
- Quality & Certifications
- About
- Contact

Home sections:
1. Hero (clear value proposition + CTA)
2. Product Categories (grid)
3. Quality & Compliance (trust section)
4. Why Choose Us (3–4 pillars)
5. Contact CTA
6. Footer (legal + nav)

## 5) Design System Guidelines
Style:
- Minimal, whitespace-rich, corporate healthcare aesthetic
- Colors: white / light gray base with a restrained blue/teal accent
- Typography: modern sans, high legibility; consistent scale
- UI: simple cards, subtle shadows, consistent spacing

Accessibility (must):
- Semantic HTML structure
- Proper heading hierarchy (H1 once per page)
- Sufficient color contrast
- Keyboard navigable
- Form labels and ARIA where needed

## 6) Tech Constraints
This site is static. Stack: plain HTML + CSS + vanilla JS. No build step, no framework.

Files:
```
index.html       — Home page (complete, with i18n attributes)
css/style.css    — Full design system + page + lang-switcher styles
js/main.js       — Mobile nav toggle + footer year update
js/i18n.js       — Multilanguage engine (EN + IT)
```

When editing code:
- Prefer small, reviewable changes
- Keep dependencies minimal
- Ensure responsive behavior (mobile-first)
- Optimize performance (images, fonts, minimal JS)

Never introduce heavy client-side frameworks unless requested.

## 6a) Multilanguage System (EN + IT)

**Supported languages:** English (`en`, default) and Italian (`it`).
**Engine:** `js/i18n.js` — IIFE, no dependencies. Loads before `main.js`.
**Persistence:** `localStorage` key `lang`. Safe on `file://` (try/catch).

### Three attribute variants

| Attribute | When to use | Mechanism |
|---|---|---|
| `data-i18n="section.key"` | Plain text elements | `el.textContent = value` |
| `data-i18n-html="section.key"` | Elements containing `&amp;` | `el.innerHTML = value` |
| `data-i18n-attr="attrName:key"` | `aria-label`, etc. | `el.setAttribute(...)` |

### Translation key structure (both `en` and `it` blocks in `js/i18n.js`)
```
meta.title / description / ogTitle / ogDescription
nav.ariaLabel / logoAriaLabel / toggleAriaLabel / products / quality /
  about / contact / cta / langSwitcherLabel
hero.eyebrow / title / desc / btnProducts / btnContact / visualAlt
categories.sectionLabel / heading / sub /
  diagnosticName/Desc/Link, surgicalName/Desc/Link,
  monitoringName/Desc/Link, infusionName/Desc/Link,
  sterilName/Desc/Link, mobilityName/Desc/Link
quality.sectionLabel / heading / sub / badgesAriaLabel /
  badge1Title/Text, badge2Title/Text, badge3Title/Text /
  stat1Label/Value, stat2Label/Value, stat3Label/Value
pillars.sectionLabel / heading / sub /
  pillar1Heading/Text … pillar4Heading/Text
cta.heading / sub / btn
footer.tagline / navColTitle / navProducts / navQuality / navAbout /
  navContact / contactColTitle / disclaimer / copyrightSuffix
```

### Rules when adding new translatable content
1. Add `data-i18n` (or `-html` / `-attr`) to the element in HTML.
2. Add the key to **both** `en` and `it` blocks in `js/i18n.js`.
3. Use `data-i18n-html` (not `data-i18n`) for any element whose text contains `&` (HTML entity).
4. For mixed-content elements (text + child node), wrap only the text in an inner `<span data-i18n="...">` to avoid overwriting sibling nodes.
5. Meta tags (`title`, `description`, OG) are updated directly in `setLang()` — no `data-i18n` on `<head>` elements.

### Lang switcher component
```html
<div class="lang-switcher" role="group" aria-label="Select language"
     data-i18n-attr="aria-label:nav.langSwitcherLabel">
  <button class="lang-switcher__btn" data-lang="en" aria-current="true" type="button">EN</button>
  <button class="lang-switcher__btn" data-lang="it" aria-current="false" type="button">IT</button>
</div>
```
Placed in `<nav>` between `<ul id="nav-links">` and the desktop `.nav__cta-wrap`.
Always visible on mobile (not inside `.nav__cta-wrap`); sits to the left of the hamburger.

## 7) Content Rules
Write copy that is:
- Specific and verifiable
- B2B oriented
- Avoids superlatives like “best”, “world-class” unless substantiated

Suggested “safe” copy patterns:
- “We supply…”
- “We support procurement with…”
- “Quality-managed processes”
- “Traceability and documentation available”

## 8) SEO Requirements
For each page:
- Unique meta title and description
- Clean URL slugs
- Open Graph basics if feasible
- Structured content with keywords like:
  - “medical equipment supplier”
  - “hospital equipment”
  - “clinical supplies”
(Keep it natural.)

## 9) Working Style & Output Format
When asked to implement features:
- Start with a brief plan (bullets)
- Then provide the code changes
- Include file paths and clear diffs or full file content if small

When asked questions:
- If requirements are unclear, make reasonable assumptions and proceed
- Highlight assumptions explicitly

## 10) Placeholders & Assets
If brand assets are missing:
- Use neutral placeholders (logo, product images, address)
- Prefer real product photography if provided later
- Do not fabricate certification numbers or regulatory IDs

## 11) Definition of Done
A task is done when:
- Builds/runs without errors
- Responsive and accessible
- Copy is compliance-safe
- No broken links, forms have validation hints
- Lighthouse-friendly (performance/SEO/accessibility best effort)

## 12) Questions to Ask Only If Blocking
Only ask if you cannot proceed:
- Company name and logo
- Product category list (final)
- Required certifications to mention (approved wording)
- Preferred stack (plain HTML vs Astro vs other)