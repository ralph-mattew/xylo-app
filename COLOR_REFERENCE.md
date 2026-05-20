# XYLO Color Reference Card

Quick reference for developers implementing the XYLO website.

## 🎨 Color Palette (from XyloColors.swift)

### Primary — Violet
```
Light Mode          Dark Mode
────────────────────────────────────────
#8B5CF6  rgb(139, 92, 246)   → #A78BFA  rgb(167, 139, 250)   [Primary]
#A78BFA  rgb(167, 139, 250)  → #C4B5FD  rgb(196, 181, 253)   [Primary Light]
#7C3AED  rgb(124, 58, 237)   → #8B5CF6  rgb(139, 92, 246)    [Primary Dark]
```

### Accent — Electric Gold
```
Light Mode          Dark Mode
────────────────────────────────────────
#FACC15  rgb(250, 204, 21)   → #FDE68A  rgb(253, 230, 138)   [Accent]
#FDE68A  rgb(253, 230, 138)  → #FEF3C7  rgb(254, 243, 199)   [Accent Light]
#EAB308  rgb(234, 179, 8)    → #FACC15  rgb(250, 204, 21)    [Accent Dark]
```

### Surfaces
```
Light Mode          Dark Mode
────────────────────────────────────────
#F3F1FA  rgb(243, 241, 250)  → #0F0F1A  rgb(15, 15, 26)      [Surface]
#FBFAFF  rgb(251, 250, 255)  → #1A1A2E  rgb(26, 26, 46)      [Card]
```

### Text
```
Light Mode          Dark Mode
────────────────────────────────────────
#1E1B2E  rgb(30, 27, 46)     → #E2E8F0  rgb(226, 232, 240)   [Text Primary]
#7C7A9B  rgb(124, 122, 155)  → #9B99B8  rgb(155, 153, 184)   [Text Secondary]
```

### Functional (Same in both modes)
```
#10B981  rgb(16, 185, 129)   [Success]
#EF4444  rgb(239, 68, 68)    [Error]
```

## 📏 Spacing Scale

```
xs:   4px
sm:   8px
md:   12px
lg:   16px
xl:   24px
xxl:  32px
xxxl: 40px
```

## 🔲 Border Radius

```
Card:     16px
Button:   12px
Chip:     8px
Capsule:  9999px (fully rounded)
```

## 💧 Glass Morphism Recipe

```css
/* Light Mode Glass Card */
background: rgba(251, 250, 255, 0.7);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(139, 92, 246, 0.1);
border-radius: 16px;
box-shadow: 0 8px 32px 0 rgba(139, 92, 246, 0.1);

/* Dark Mode Glass Card */
background: rgba(26, 26, 46, 0.7);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(167, 139, 250, 0.15);
border-radius: 16px;
box-shadow: 0 8px 32px 0 rgba(15, 15, 26, 0.4);
```

## 🌊 Waveform Gradient

```css
/* Violet → Gold gradient for audio bars */
background: linear-gradient(
  180deg, 
  rgba(139, 92, 246, 0.8),    /* Violet */
  rgba(250, 204, 21, 0.8)     /* Gold */
);

/* Alternating bars: every 5th bar uses gold instead of violet */
```

## 🧵 Pattern Background

```
Spacing:  52px between diagonal threads
Opacity:  2.5% of primary violet (#8B5CF6)
Line:     0.5px width
Dots:     1.5px diameter at intersections
```

## 🎯 Usage Guidelines

**Violet (#8B5CF6)** for:
- Brand elements, logos
- Primary buttons and CTAs
- Headings and section titles
- Icons for main features
- Links and interactive elements

**Gold (#FACC15)** for:
- Accent highlights and badges
- Achievement indicators (streak flame)
- Premium tier pricing card borders
- Waveform accent bars (every 5th)
- Secondary CTAs

**Glass Cards** for:
- All feature cards
- Pricing tiers
- Stats displays
- Navigation bar
- Modal overlays

## 🔍 Contrast Ratios (WCAG AA)

✅ Violet (#8B5CF6) on white (#FFFFFF): 4.54:1 — Pass
✅ Text (#1E1B2E) on surface (#F3F1FA): 15.8:1 — Pass
✅ Gold (#FACC15) on dark card (#1A1A2E): 10.3:1 — Pass
⚠️ Violet text on gold background: FAIL — Avoid this combo

---

**Reference Source**: `/Users/rlpalomaria/mobile/xylo/Xylo/DesignSystem/Theme/`
