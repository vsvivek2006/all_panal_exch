# Agent.md — Single-Pass UI Clone & Production Polish Brief

## 0. Mission

Build the frontend of `https://allpaanelexch.org` so its **visual structure, spacing, hierarchy, navigation patterns, responsive behavior, and interaction style closely match the reference site**:

**Reference:** `https://anna-book-live.vercel.app`
**Target:** `https://allpaanelexch.org`

This is a **UI/UX reconstruction task**. Do not build or wire real-money wagering, payment processing, deposit/withdrawal processing, account funding, or other transactional gambling functionality. Where such controls are visible on the reference, reproduce their **visual presentation only** using non-functional UI states.

The goal is that a user comparing the two sites side-by-side immediately recognizes the reference site's layout language, while the target feels cleaner, more polished, more responsive, and more trustworthy.

---

## 1. First Step: Inspect Before Coding

Before changing code, perform a visual and structural audit of the reference site using the browser/dev tools available to you.

Inspect:

- desktop layout
- tablet layout
- mobile layout
- header and navigation behavior
- hero/banner composition
- section ordering
- typography hierarchy
- font weights and sizes
- colors, gradients, borders, shadows
- card dimensions and corner radii
- button styles and states
- icons and icon placement
- image aspect ratios
- whitespace and section spacing
- footer structure
- hover/focus/active interactions
- sticky/fixed elements
- mobile bottom navigation, if present
- menus, accordions, sliders, tabs, carousels, and dropdowns
- scroll behavior and entrance animations

Create a mental/component-level map of the reference before implementation. Do **not** guess the layout merely from the original text specification in this file.

If the reference is temporarily unavailable, continue with the closest reproducible interpretation from the information available, but keep the code structured so visual details can be tuned without rewiring the application.

---

## 2. Core Rule: Reproduce the UI, Not Just the Content

Do not make a generic betting-style landing page.

The implementation must prioritize **visual similarity** to the reference:

1. same overall page rhythm
2. same major section hierarchy
3. same navigation model
4. same hero composition
5. same card/grid patterns
6. same alignment logic
7. similar typography scale
8. similar visual density
9. similar mobile experience
10. similar interaction patterns

Then improve polish without destroying the reference's identity.

Do not arbitrarily redesign the page into an unrelated SaaS/e-commerce template.

---

## 3. Target Brand

Use the target site's brand identity/content where the existing project already provides it.

Do not automatically keep every brand name, logo, domain, testimonial, statistic, claim, phone number, or promotional statement from the reference. Replace reference-specific identity with target-brand information where appropriate.

If the target project already contains usable assets, copy, components, routes, or styling tokens, reuse and improve them instead of unnecessarily replacing them.

---

## 4. Existing Project Audit

Before writing new code:

- inspect the repository structure
- identify framework and build tooling
- identify the existing entry point
- inspect routing
- inspect reusable components
- inspect global CSS/Tailwind configuration
- inspect image/font/icon assets
- inspect existing SEO metadata
- inspect any existing responsive breakpoints
- identify dead, duplicated, or conflicting styles

Preserve the current stack unless there is a strong technical reason to change it.

Do not perform a needless full-stack rewrite when this task is primarily UI reconstruction.

---

## 5. Recommended Frontend Architecture

Use a clean component architecture appropriate to the existing project.

Suggested structure:

```text
src/
  components/
    layout/
      Header
      MobileNav
      Footer
    sections/
      Hero
      TrustStrip
      About
      Categories
      Trending
      Features
      AppSection
      GuideSection
      Testimonials
      FAQ
      BlogPreview
      Disclaimer
    ui/
      Button
      Badge
      Card
      IconButton
      SectionHeading
      Container
  pages/ or app/
  data/
  lib/
  styles/
```

Use reusable data-driven components for repeated cards instead of duplicating JSX.

---

## 6. Page Structure

Reconstruct the exact section order visible on the reference. Use the following as the minimum content architecture when those sections exist in the reference or are already present in the target:

### Header
- branded logo area
- primary navigation
- category/menu access when applicable
- primary CTA presented as a visual UI element
- mobile menu / compact navigation
- sticky behavior when the reference uses it

### Hero
- large visual/banner area
- primary heading
- supporting copy
- primary and secondary CTA styles
- trust/status badges where appropriate
- supporting image or illustration
- responsive composition matching the reference

### Trust / Value Strip
Use compact visual blocks for the key value propositions visible in the target/reference.

### About / Intro
- strong heading
- concise supporting content
- image or decorative visual if present in reference
- balanced two-column desktop layout where appropriate

### Category / Service Grid
Recreate the reference's card or tile treatment:

- icon/image
- title
- short description
- optional metadata/badge
- hover state

### Trending / Featured Area
Use the reference's actual composition pattern, such as:

- horizontal cards
- grid cards
- tabs
- slider/carousel
- featured item + supporting items

Do not use a carousel just because one is technically available; match the reference.

### Feature / Why Choose Us
Use icon cards or the reference's equivalent layout.

### App / Product Promotion
Recreate the visual treatment of the reference with:

- device/mockup image
- benefit list
- CTA block
- platform badges where relevant

All CTAs remain presentation-only unless the project already contains a legitimate non-transactional destination.

### Guides / Information Sections
Where the reference contains instructional content, reproduce its visual hierarchy with:

- step cards
- numbered steps
- tabs
- accordions
- callout boxes

Do not wire real payment or wagering flows.

### Testimonials
Use a polished responsive card/slider layout matching the reference. Avoid fabricating claims presented as verified facts.

### FAQ
Use accessible accordion components with keyboard support and smooth open/close transitions.

### Blog / News Preview
Use reusable article cards:

- category
- title
- short excerpt
- date/author only when source data exists
- image if available
- visual READ MORE/link affordance

### Disclaimer / Legal Area
Keep it visually clear but unobtrusive. Do not present legal guarantees or regulatory claims unless supplied by the target project.

### Footer
Match the reference's:

- column structure
- link density
- social/icon placement
- legal links
- copyright area
- mobile stacking behavior

---

## 7. Visual Design System

### Colors
Extract the reference's approximate palette from the rendered UI instead of inventing random colors.

Create CSS variables/design tokens for:

```css
--color-bg
--color-surface
--color-surface-2
--color-primary
--color-primary-strong
--color-accent
--color-text
--color-text-muted
--color-border
--color-success
--color-warning
```

Keep gradients subtle and intentional.

### Typography
Match the visual character of the reference:

- display heading scale
- body scale
- small metadata scale
- weight hierarchy
- line-height
- letter spacing

Use a web-safe or project-provided font when the reference font cannot legally/technically be reused.

### Spacing
Use a consistent spacing system. Avoid random margins added section-by-section.

### Cards
Match:

- radius
- padding
- image ratio
- border treatment
- shadow depth
- hover elevation

### Buttons
Create reusable variants:

- primary
- secondary
- outline
- ghost/icon

Include hover, active, focus-visible, disabled states.

---

## 8. Responsive Requirements

The mobile experience is not an afterthought.

Implement and test at minimum:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

Requirements:

- no horizontal overflow
- no clipped headings
- no overlapping cards
- no unusable tap targets
- readable line lengths
- responsive images
- correct grid collapse
- correct mobile navigation behavior
- correct sticky/fixed element behavior
- preserved visual hierarchy

Where the reference changes composition on mobile, reproduce that change rather than simply shrinking the desktop layout.

---

## 9. Interaction & Motion

Add restrained production-quality interaction:

- hover transitions
- button press feedback
- card elevation/translation
- accordion animation
- menu open/close
- slider transitions
- section reveal animations

Animations must remain subtle and fast.

Respect `prefers-reduced-motion`.

Avoid excessive particles, parallax, glowing effects, or animation that makes the site look less trustworthy.

---

## 10. Image & Asset Handling

Prefer existing target-project assets when available.

For missing visuals:

- use clean local placeholders or neutral generated assets
- preserve the reference's aspect ratio and composition
- optimize large images
- use modern formats where supported
- add meaningful `alt` text
- do not hotlink random external assets

Do not copy third-party copyrighted logos, photographs, or proprietary graphics unless they are already supplied for this project or otherwise authorized.

---

## 11. Accessibility

Build the interface with production accessibility in mind:

- semantic HTML
- proper heading hierarchy
- accessible buttons and links
- keyboard navigation
- visible focus states
- correct ARIA only where needed
- sufficient contrast
- descriptive image alt text
- accessible accordions/menus
- touch targets of practical mobile size

Do not sacrifice accessibility just to imitate a visual effect.

---

## 12. SEO / Technical Hygiene

For the frontend implementation:

- use semantic `header`, `nav`, `main`, `section`, `article`, `footer`
- provide a unique page title
- provide a useful meta description
- define Open Graph metadata where supported by the existing framework
- canonicalize the page appropriately
- keep heading hierarchy logical
- avoid keyword stuffing
- avoid hidden text
- ensure crawlable navigation
- optimize page rendering and image loading
- eliminate unnecessary client-side JavaScript

Do not add deceptive SEO claims, fake ratings, fake user counts, or fabricated trust signals.

---

## 13. Performance

Target a fast production UI:

- avoid unnecessary dependencies
- lazy-load below-the-fold images when appropriate
- use responsive images
- avoid oversized assets
- prevent layout shift
- minimize render-blocking code
- keep repeated components lightweight
- avoid unnecessary re-renders

Use the existing framework's recommended image/font optimization when available.

---

## 14. Functional Boundaries

This task is frontend/UI reconstruction.

Do NOT implement or connect:

- real-money betting/wagering
- payment gateways
- deposit processing
- withdrawal processing
- wallet funding
- KYC document collection
- financial transaction APIs
- real gambling account creation
- automated wagering logic

Interactive controls should be mocked as UI states or point to safe, non-transactional destinations already present in the project.

---

## 15. Code Quality Rules

The final code must be:

- clean
- modular
- readable
- reusable
- type-safe where the project supports TypeScript
- free of obvious dead code
- free of duplicated styling when a shared component/token can be used
- free of console errors
- free of broken links caused by the implementation

Do not create one giant page component.

Do not hard-code repeated content directly into dozens of markup blocks.

Use arrays/config objects for repeated UI.

---

## 16. Do Not Stop at the First Render

After implementing the page, run a visual QA pass.

Check the rendered result against the reference for:

- overall proportions
- header height
- hero height
- container width
- alignment
- section spacing
- card density
- typography
- button dimensions
- imagery
- mobile layout
- footer height

Fix obvious mismatches before considering the task complete.

The first implementation is a draft, not the final result.

---

## 17. Acceptance Checklist

Before finishing, verify all of the following:

- [ ] target site runs successfully
- [ ] reference-inspired layout is recognizable side-by-side
- [ ] header/navigation matches the reference pattern
- [ ] hero composition is close to reference
- [ ] all major reference sections are represented where applicable
- [ ] responsive layout works from mobile to large desktop
- [ ] no horizontal scrolling
- [ ] no broken images
- [ ] no console errors
- [ ] interactive UI states work
- [ ] keyboard navigation works for menus/accordions
- [ ] typography is consistent
- [ ] spacing is consistent
- [ ] visual hierarchy is strong
- [ ] code is componentized
- [ ] assets are optimized
- [ ] metadata is present
- [ ] no real-money transaction functionality was introduced

---

## 18. Final Antigravity Instruction

> **Act as a senior frontend engineer, UI/UX designer, and visual QA specialist.**
>
> First inspect the existing `allpaanelexch.org` codebase and then audit the live reference `anna-book-live.vercel.app` before making changes. Reconstruct the reference site's frontend visual system—its layout, section ordering, spacing, navigation, hero, cards, typography, responsive behavior, and interaction patterns—inside the existing target project. Preserve the target brand identity and existing useful content/assets, while replacing reference-specific branding where necessary. Improve polish, accessibility, responsiveness, performance, and consistency without changing the core visual language into a different design.
>
> Do not wait for clarification when a reasonable implementation decision can be made. Make those decisions yourself and complete the entire frontend in one pass. Use reusable components and data-driven rendering. After implementation, run a visual QA pass at mobile, tablet, and desktop widths and fix the most obvious visual mismatches. The final result should feel like a carefully reconstructed, production-quality version of the reference UI—not a generic template.
>
> Keep all transactional/gambling functionality non-operational and presentation-only. Do not implement real-money wagering, payment, deposit, withdrawal, wallet, KYC, or gambling transaction APIs.
