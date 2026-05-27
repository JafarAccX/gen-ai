# Responsive Design Transformation Log

This file tracks all CSS, layout, and component modifications deployed to make the GenAI website fully responsive across all target viewports (Mobile: 320px–767px, Tablet: 768px–1023px, Laptop: 1024px–1279px, Desktop: 1280px+) while keeping the desktop UI ($\ge 1280\text{px}$) pixel-perfect.

---

## Log of Changes

### 1. Global & Layout Core (`index.css`)
- **Depth 4 General Descendant Capping**: Extended the `.responsive-section` width capping override to depth 4 children (`.responsive-section > div > div > div > div`). This ensures that nested divs with hardcoded inline widths (such as the inner elements of Capstone cards) scale down gracefully inside the fluid card containers.
- **Capstone Stacking Range Adjustment**: Shifted the starting threshold of the 2-column tablet layout media query from `481px` to `680px`. Viewports between `481px` and `679px` (which were too narrow to fit two cards side-by-side) now render as a single stacked column, eliminating horizontal overlap and text clipping.
- **Outcomes Left Box Alignment**: Added `align-items: flex-start !important` to `.outcomes-left-box` in the media query. This stops the overflowing table rows from being centered and pushed off the left viewport edge (which was permanently clipping characters like `"Productivity"` $\rightarrow$ `"oductivity"`).
- **Tool Stack Vignette Masking**: Added a `box-shadow` override to `.tool-stack-marquee-container` under `max-width: 1279px` to reduce the left/right vignettes from `80px` to `24px` inset. This stops tool cards from being blacked out on small viewports.
- **Mentors Vignette Overrides**: Overrode `.mentors-profiles-container > div[style*="width: 100px"]` to `width: 24px !important` on mobile/tablet to shrink the massive fade-out overlays, keeping mentors profiles fully readable.
- **Marquee Height Collapsing**: Set explicit heights on `.outcomes-logos-section` (`80px !important`) and `.mentors-profiles-section` (`280px !important`) to stop these containers from collapsing to `0px` high when the parent gets resets.

### 2. Desktop Breakpoint Alignment (`xl:` vs `lg:`)
- **Header Navigation & Sidebar**: Replaced `lg:` responsive Tailwind prefixes with `xl:` in `Header.tsx`. This aligns the mobile toggle triggers and desktop links with the global `1280px` boundary, preventing any laptop layout overlaps.
- **Hero Title & Elements**: Changed all `lg:` class prefixes in `Hero.tsx` to `xl:`. The absolute desktop layout is now isolated strictly to $\ge 1280\text{px}$, and laptop/tablet screens render the beautiful relative centered mobile hero, eliminating character clipping.
- **Track Badging & Toggle**: Replaced `lg:` with `xl:` in `TrackToggle.tsx` and `TrackBadge.tsx` to prevent desktop absolute controls from showing on laptops.
- **Program Track Cards**: Swapped `lg:` for `xl:` in `ProgramArchitecture.tsx`. The three program track cards now stack vertically below `1280px` to prevent overflow and keep a premium structure.

### 3. Typography Progressive Scaling & Spacing Refinements
- **Progressive Heading scaling (`clamp()`)**: Replaced the static `22px` responsive heading size with a fluid formula: `font-size: clamp(20px, 2.8vw, 30px) !important;` inside `index.css`. This ensures that headings look appropriately sized and premium on large laptops (e.g. `28.6px` at `1024px`) while scaling down to `20px` on small phones to prevent line breaks.
- **Fluid Subtitle Scaling**: Updated section paragraph descriptions to use: `font-size: clamp(13px, 1.4vw, 15px) !important;` and line-height `1.55` for high readability.
- **Card Spacing & Padding Optimization**:
  - **Program Architecture Cards**: Restored the original, pixel-perfect absolute overlapping cards (`-66px` margins on the central card), nested title header structures, and precise Figma widths/coordinates exclusively for desktop viewports ($\ge 1280\text{px}$). Reduced vertical layout gap from `48px` to `clamp(24px, 4vw, 36px) !important;` and stacked the layout vertically below `1280px` using custom center positioning for fluid scaling. Added targeted overrides to reduce phase card titles to `16px` and body text to `13px`.
  - **Curriculum Accordions**: Restored the exact original desktop inline styling parameters (with absolute dimensions, specific paddings, alignment parameters, and horizontal row flex direction) isolated exclusively for $\ge 1280\text{px}$ viewports. Repaired the HTML tag nesting structure by properly encapsulating the Chevron SVG inside the `curriculum-card-right` container, while preserving all responsive CSS overrides for mobile viewports ($< 1280\text{px}$).
  - **Capstone Cards**: Reduced card padding from `24px 20px` to `clamp(16px, 3.5vw, 24px) clamp(14px, 3vw, 20px) !important` (~15% reduction). Added explicit overrides to clamp inner title sizes to `clamp(15px, 1.8vw, 17px) !important` and descriptions to `clamp(12.5px, 1.5vw, 13px) !important` with auto-height to accommodate various content lengths elegantly.
  - **FAQ Item Spacing**: Compressed vertical padding to `clamp(14px, 2.2vw, 18px) clamp(12px, 2vw, 16px) !important` for improved density.
  - **CTA Banner**: Refined content padding to `clamp(24px, 4vw, 32px) clamp(16px, 3vw, 24px) !important;` and clamped title sizes to `clamp(20px, 2.5vw, 24px) !important;` on mobile.
  - **Investment Pricing Card**: Overrode hardcoded paddings from `40px` to `clamp(24px, 4.5vw, 36px) clamp(16px, 3.5vw, 24px) !important;` on mobile/tablet viewports and adjusted internal price text dynamically using `clamp()`.

### 4. Hero Section Mobile Optimization (`Hero.tsx`)
- **Mobile Heading scale**: Optimized the responsive breakpoints for the mobile H1 heading to `text-[22px] xs:text-[25px] sm:text-[30px] md:text-[34px]` with line-height `1.25` to stop text wrapping into too many awkward lines.
- **Metrics Card Density**: Compressed mobile stats container padding to `py-4 px-5` and adjusted inline metric titles to `text-[15px]` and subtitles to `text-[10px]` for high-end styling.

---

## Viewport Verification Checklist

| Viewport Width | Device Target | Verification Status | Notes |
| :--- | :--- | :--- | :--- |
| **320px** | iPhone SE (Mobile) | [Verified - Pristine] | Clean visual hierarchy, zero overflow, optimized density |
| **375px** | Standard Mobile | [Verified - Pristine] | Perfect text wrapping, Outcomes table swipes smoothly |
| **768px** | iPad (Tablet) | [Verified - Pristine] | Responsive card layouts fit elegantly |
| **1024px** | Laptop Standard | [Verified - Pristine] | Centered hero layout renders with balanced margins |
| **1280px** | Entry Desktop | [Verified - Pristine] | 100% pixel-perfect absolute coordinates isolated |
| **1440px** | High-Res Desktop | [Verified - Pristine] | Verified pixel-perfect matching of Figma layout |

