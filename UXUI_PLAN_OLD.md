# XYLO App - UI/UX Plan for GitHub Pages
> Based on UNAWAIN design system and adapted for XYLO's audio-first intelligence

## 📋 Executive Summary

XYLO is an on-device audio intelligence app for Filipinos. Drawing inspiration from UNAWAIN's successful document analysis approach, XYLO applies similar principles to audio: scan/record audio, get intelligent analysis in your own language, completely private and on-device.

---

## 🎨 Design Philosophy

### Core Principles (Inherited from UNAWAIN)
1. **Filipino-First**: Language, culture, and context matter
2. **Privacy-Centric**: 100% on-device processing, zero data collection
3. **Beautiful Simplicity**: Solihiya-inspired design patterns
4. **Accessible**: Works for everyone, regardless of technical expertise

### XYLO-Specific Adaptations
- **Audio-Visual Identity**: Waveforms, sound patterns, rhythm metaphors
- **Real-time Feedback**: Visual representations of audio processing
- **"Prism" Visual Language**: Violet-gold gradient palette inspired by light refraction
- **Glass Morphism**: Frosted glass cards with subtle backdrop blur
- **Geometric Patterns**: Diagonal weave patterns inspired by Filipino textiles

---

## 🎯 Target Audience

Based on the mobile app features, XYLO serves:

1. **Students** - Transcribe lectures, summarize discussions
2. **Professionals** - Meeting transcriptions, voice memos analysis
3. **Content Creators** - Podcast analysis, content extraction
4. **Journalists** - Interview transcription and keyword extraction
5. **OFWs** - Understanding voice messages in different languages
6. **Senior Citizens** - Voice-to-text with Filipino language support

---

## 🏗️ Page Structure

### 1. Hero Section
**Goal**: Immediate understanding of what XYLO does

```
┌─────────────────────────────────────────────────┐
│  Navigation: Logo | Features | How It Works |   │
│              Privacy | Pricing | Support        │
├─────────────────────────────────────────────────┤
│                                                  │
│  [Animated Waveform Particles Background]       │
│                                                  │
│      Marinig. Unawain. Suriin.                  │
│      I-record o i-upload ang audio —            │
│      makakuha ng matalinong buod sa             │
│      sarili mong wika. 100% pribado.            │
│                                                  │
│   [Download on App Store Button]                │
│   [Privacy Pill: 100% On-Device]                │
│                                                  │
│   [iPhone Mockup with Waveform Animation]       │
│                                                  │
└─────────────────────────────────────────────────┘
```

**Visual Elements**:
- Animated waveform particles (violet-gold gradient)
- Live waveform visualization matching app's WaveformView component
- Glass morphism cards with frosted backdrop blur
- Diagonal geometric weave pattern (matching app's PatternBackground)
- Color: Violet primary (#8B5CF6) + Electric gold accent (#FACC15)

---

### 2. Trust Strip
**Powered By**: Gemma 4 Edge • WhisperKit • NLLB-200

---

### 3. Problem Statement Section
**Headline**: "Hirap bang maalala o unawain ang mga audio recordings?"

**Content**:
- Voice messages na mahaba at gulo
- Meeting recordings na walang transcript
- Lectures na kelangan balikan
- Interviews na kelangan i-transcribe manually

**Solution**: Diyan papasok ang XYLO.

---

### 4. How It Works (3 Steps)

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  1. Record   │  │  2. Analyze  │  │  3. Unawain  │
│              │  │              │  │              │
│  [Mic Icon]  │  │  [AI Icon]   │  │  [Globe Icon]│
│              │  │              │  │              │
│  I-record o  │  │  AI extracts │  │  Read in your│
│  i-upload    │  │  insights,   │  │  language:   │
│  ang audio   │  │  keywords,   │  │  Filipino,   │
│              │  │  & summary   │  │  English, etc│
└──────────────┘  └──────────────┘  └──────────────┘
```

---

### 5. Features Section (Bento Grid Layout)

All feature cards should use **glass morphism** styling (frosted blur background with subtle violet tint).

#### A. 6 Languages + Dialects
- Filipino, Cebuano, Ilocano, Pangasinan, Waray, English
- Visual: Language chips in capsule shape (matching KeywordChip component)
- Glass background with violet-gold accent borders

#### B. 100% On-Device & Private
- No cloud, no server, no tracking
- Visual: Shield icon with checkmark (`shield.checkmark.fill`)
- Privacy badge component matching app design

#### C. Audio Intelligence
- Speaker diarization (who said what)
- Keyword extraction (capsule chips)
- Topic identification
- Smart summaries with sections
- Visual: Waveform with violet-gold gradient overlay

#### D. Multiple Templates
Based on the mobile app's `OutputTemplate` model:
- **Meeting Transcript**: Speaker labels, timestamps, action items
- **Lecture Notes**: Key concepts, summary, keywords
- **Interview**: Q&A format, themes
- **Podcast**: Chapters, topics, highlights
- **General**: Smart summary with sections
- Visual: Template cards in glass style

#### E. Document Chat (Future Feature)
- Ask questions about your audio
- "Ano ang sinabi tungkol sa budget?"
- Visual: Chat bubble with mic icon in glass card

#### F. Offline + Fast
- Works without internet after setup
- Metal GPU acceleration
- Visual: Lightning bolt icon in gold accent color

---

### 6. Live Demo Section

**Interactive Audio Analysis Demo**

```
┌─────────────────────────────────────────────────┐
│  Original Audio (Play button)                   │
│  [Waveform visualization]                       │
│  "Meeting recording sample..."                  │
├─────────────────────────────────────────────────┤
│  AI Analysis — Filipino ▼                       │
│                                                  │
│  Ito ay recording ng meeting tungkol sa         │
│  Q2 budget. Mga attendees: [Maria], [Juan],     │
│  [Pedro]. Mga pangunahing punto:                │
│  1. Budget increase ng 15%                      │
│  2. Timeline: June-August                       │
│  3. Action items: Submit proposal by May 31     │
│                                                  │
│  Keywords: [Budget] [Q2] [Timeline]             │
└─────────────────────────────────────────────────┘

[Language Selector Pills]
[Filipino] [Cebuano] [Ilocano] [English]
```

---

### 7. Screenshots Carousel (3D)

**Mockups to Create**:
1. Dashboard - "Marinig at Unawain ang Kahit Anong Audio"
2. Recording Screen - "I-record o I-upload"
3. Template Selection - "Piliin ang Format"
4. Analysis Results - "AI-powered na Summary"
5. Waveform View - "Visual Representation"
6. History - "Lahat ng Recordings, Pribado"
7. iPad View - "Mas Malaking Screen"

---

### 8. Audience Segments (Tabs)

Similar to UNAWAIN, but adapted:

- **Students**: Transcribe lectures
- **Professionals**: Meeting notes
- **Content Creators**: Podcast analysis
- **Journalists**: Interview transcription
- **OFWs**: Voice message understanding
- **Senior Citizens**: Simple voice-to-text

---

### 9. Privacy Section

**Visual Comparison**:

❌ **Regular Apps**:
- Upload to cloud servers
- Third-party analytics
- Data mining for ads

✅ **XYLO**:
- 100% on-device processing
- Zero network requests
- Your audio never leaves your phone
- Delete app = delete all data

**Link**: Full Privacy Policy

---

### 10. Stats Section

```
┌─────────────┬─────────────┬─────────────┐
│   [icon]    │   [icon]    │   [icon]    │
│  doc.text   │    flame    │    globe    │
│             │             │             │
│   10,000+   │    100%     │      6      │
│  Analyses   │  On-Device  │  Languages  │
│             │             │             │
│ [Glass Card]│ [Glass Card]│ [Glass Card]│
└─────────────┴─────────────┴─────────────┘
```

**Design Notes**:
- Each stat in a mini glass card (frosted blur effect)
- Icons from SF Symbols (or SVG equivalents)
- Primary stat in violet, accent stats in gold
- Matching the app's `StatMiniCard` component design
- Optional: Add "Top Keywords" section below with capsule chips

---

### 11. Technology Stack

**Powered by Open-Source AI**:
- 🎤 **WhisperKit** (Apple) - Audio transcription
- 🧠 **Gemma 4 Edge** (Google) - Intelligence
- 🌍 **NLLB-200** (Meta) - Translation
- ⚡ **Metal GPU** - Fast inference

**Requirements**:
- iOS 18.0+
- iPhone 15 Pro+ (6GB RAM minimum)
- Model download: 3.5-5.4 GB (one-time)

---

### 12. Pricing

```
┌──────────────────┐  ┌──────────────────┐
│      FREE        │  │   HABAMBUHAY     │
│      ₱0          │  │      ₱249        │
│                  │  │                  │
│ • 5 analyses     │  │ • Unlimited      │
│ • 6 languages    │  │ • All templates  │
│ • Basic insights │  │ • Priority       │
│                  │  │ • Lifetime       │
│                  │  │                  │
│ [Glass Card]     │  │ [Glass Card +    │
│  Violet Border   │  │  Gold Border]    │
└──────────────────┘  └──────────────────┘
```

**Note**: Cards styled with glass morphism effect. Free tier has violet accent, Lifetime has electric gold accent to emphasize premium tier.

---

### 13. Maker Section

"Gawa ng Pilipino, para sa Pilipino"

Made by Makata AI - a solo Filipino developer who believes audio intelligence should be accessible to all Filipinos, regardless of language or internet access.

---

### 14. Final CTA

**Headline**: "Simulan nang marinig at unawain ang iyong audio"

[Download on App Store]

"Libre ang unang 5 analyses"

---

### 15. Footer

```
XYLO Logo + Tagline

[Legal]           [Support]        [Social]
Privacy Policy    FAQ              Twitter/X
Terms of Use      Contact          GitHub
                  feedback@        
                  makata.ai
```

---

## 🎨 Visual Design System

### Color Palette (Xylo "Prism" Palette)

**Primary (Violet)**:
- Primary: `#8B5CF6` (Light) / `#A78BFA` (Dark) — Actions, headings, brand
- Primary Light: `#A78BFA` (Light) / `#C4B5FD` (Dark) — Secondary highlights
- Primary Dark: `#7C3AED` (Light) / `#8B5CF6` (Dark) — Emphasis

**Accent (Electric Gold)**:
- Accent: `#FACC15` (Light) / `#FDE68A` (Dark) — CTAs, highlights, achievements
- Accent Light: `#FDE68A` (Light) / `#FEF3C7` (Dark) — Soft highlights
- Accent Dark: `#EAB308` (Light) / `#FACC15` (Dark) — Pressed states

**Surfaces**:
- Surface: `#F3F1FA` (Light) / `#0F0F1A` (Dark) — Page backgrounds (violet-tinted)
- Card: `#FBFAFF` (Light) / `#1A1A2E` (Dark) — Elevated card backgrounds

**Text**:
- Text Primary: `#1E1B2E` (Light) / `#E2E8F0` (Dark) — Body text (violet-black/platinum)
- Text Secondary: `#7C7A9B` (Light) / `#9B99B8` (Dark) — Captions, timestamps

**Functional**:
- Success: `#10B981` (Both modes) — Positive states
- Error: `#EF4444` (Both modes) — Error states

### Typography

**Headings**: 
- Display/Brand: SF Pro Rounded/Serif (bold, large titles)
- Titles: SF Pro (semibold to bold weights)
- Tracking: -0.5px for display, -0.3px for titles

**Body**: SF Pro Text (regular to medium weights)

**Mono/Code**: SF Mono (for technical specs)

**Baybayin Accent**: Optional decorative script for "XYLO" or "Marinig"

### Spacing Scale (From App)

```
xs:   4px   — Tight padding, icon gaps
sm:   8px   — Chip padding, small gaps
md:   12px  — Standard gaps
lg:   16px  — Card padding, section gaps
xl:   24px  — Large section spacing
xxl:  32px  — Major section dividers
xxxl: 40px  — Hero spacing

Border Radius:
- Cards: 16px
- Buttons: 12px
- Chips: 8px (capsule for keywords)
```

### Animation & Motion

1. **Waveform Particles**: Floating gradient bars (violet-gold) that animate like audio waveforms
2. **Glass Card Animations**: Subtle backdrop-blur morphism on hover/scroll
3. **Scroll Reveals**: Stagger animations for feature cards (fade + slide up)
4. **Live Waveform**: Real-time bar height animations (matching app's WaveformView)
5. **Geometric Weave**: Animated diagonal pattern background (low opacity violet)
6. **Prism Gradient Shifts**: Subtle hue rotation on interactive elements

### Icons & Illustrations

**Icon Style**: SF Symbols (iOS native) for consistency with app
- **Mic Icon** (`mic.fill`): Recording features
- **Waveform** (`waveform`): Audio visualization
- **Shield** (`shield.checkmark.fill`): Privacy features
- **Globe** (`globe.asia.australia.fill`): Language support
- **Lightning** (`bolt.fill`): Speed/offline capability
- **Lock** (`lock.fill`): Encryption
- **Sparkles** (`sparkles`): AI features
- **Document** (`doc.text.fill`): Analysis results
- **Flame** (`flame.fill`): Streak/activity (matching app stats)

### Illustrations
- Waveform gradient bars (violet-gold transition)
- Geometric weave pattern (diagonal threads with intersection dots)
- Glass card mockups with frosted blur effect

---

## 📱 Responsive Design

### Desktop (1440px+)
- Full bento grid (2-3 columns)
- Side-by-side layouts
- 3D carousel with 5 visible slides

### Tablet (768px - 1439px)
- 2-column grid
- Stacked sections
- Simplified carousel

### Mobile (< 768px)
- Single column
- Sticky mobile CTA button
- Hamburger nav
- Touch-friendly tap targets (min 44px)

---

## 🔧 Technical Implementation

### Stack Recommendation

**Option 1: Static Site (Like UNAWAIN) — RECOMMENDED**
- Pure HTML/CSS/JS
- No build process needed
- Easy GitHub Pages deployment
- Inline critical CSS for performance
- SF Symbols via SVG or Icon Font

**Option 2: Modern Framework**
- Next.js or Astro
- Better component organization
- Image optimization
- Still static export

### CSS Variables (Design Tokens)

```css
:root {
  /* Colors - Light Mode */
  --xylo-primary: #8B5CF6;
  --xylo-primary-light: #A78BFA;
  --xylo-primary-dark: #7C3AED;
  --xylo-accent: #FACC15;
  --xylo-accent-light: #FDE68A;
  --xylo-accent-dark: #EAB308;
  --xylo-surface: #F3F1FA;
  --xylo-card: #FBFAFF;
  --xylo-text: #1E1B2E;
  --xylo-text-secondary: #7C7A9B;
  --xylo-success: #10B981;
  --xylo-error: #EF4444;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-xxl: 32px;
  --spacing-xxxl: 40px;
  
  /* Border Radius */
  --radius-card: 16px;
  --radius-button: 12px;
  --radius-chip: 8px;
  --radius-full: 9999px; /* capsule */
  
  /* Typography */
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
  --font-mono: "SF Mono", Monaco, "Courier New", monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --xylo-primary: #A78BFA;
    --xylo-primary-light: #C4B5FD;
    --xylo-primary-dark: #8B5CF6;
    --xylo-accent: #FDE68A;
    --xylo-accent-light: #FEF3C7;
    --xylo-accent-dark: #FACC15;
    --xylo-surface: #0F0F1A;
    --xylo-card: #1A1A2E;
    --xylo-text: #E2E8F0;
    --xylo-text-secondary: #9B99B8;
  }
}
```

### Key Features to Implement

1. **Scroll Progress Bar**: Top of page (violet gradient)
2. **Sticky Navigation**: Show/hide on scroll with glass morphism
3. **Intersection Observer**: Reveal animations (fade + slide up)
4. **Lazy Loading**: Images and mockups
5. **Service Worker**: Cache assets for offline demo
6. **Web Fonts**: Preload SF Pro (or system fonts fallback)
7. **Canvas Animation**: Waveform particles with gradient
8. **Carousel**: Touch/swipe support with glass cards
9. **Glass Morphism CSS**: Backdrop blur with proper fallbacks

#### Glass Morphism Implementation (CSS)

```css
.glass-card {
  background: rgba(251, 250, 255, 0.7); /* Light mode: #FBFAFF with alpha */
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(139, 92, 246, 0.1); /* Violet border */
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(139, 92, 246, 0.1);
}

.glass-card.dark {
  background: rgba(26, 26, 46, 0.7); /* Dark mode: #1A1A2E with alpha */
  border: 1px solid rgba(167, 139, 250, 0.15);
  box-shadow: 0 8px 32px 0 rgba(15, 15, 26, 0.4);
}
```

### Performance Targets

- Lighthouse Score: 95+ (Performance, Accessibility, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total Bundle: < 500KB (without images)

### SEO Optimization

```html
<title>XYLO — Filipino Audio Intelligence | On-Device AI</title>
<meta name="description" content="I-record o i-upload ang audio, makakuha ng matalinong buod sa Filipino. 100% pribado, walang internet. AI-powered audio analysis sa violet-gold prism interface.">
<meta name="keywords" content="XYLO, Filipino, audio analysis, transcription, AI, on-device, privacy, Cebuano, Ilocano, Tagalog">
<meta name="theme-color" content="#8B5CF6">
```

**Open Graph Image**: Should feature the violet-gold gradient, waveform, and glass UI elements.

**Structured Data**:
- SoftwareApplication schema
- Organization schema
- Breadcrumbs
- FAQ (if added)

---

## 🎭 Brand Voice & Messaging

### Tone
- **Accessible**: Not tech jargon-heavy
- **Reassuring**: Privacy-first messaging
- **Cultural**: Filipino idioms and expressions
- **Confident**: "Marinig. Unawain. Suriin."

### Key Messages

1. **Privacy**: "Ang audio mo, sa iyo lang"
2. **Language**: "Unawain sa sarili mong wika"
3. **Simplicity**: "I-record lang, automatic na ang buod"
4. **Offline**: "Walang internet? Walang problema."
5. **Cultural**: "Para sa bawat Pilipino"

---

## 🚀 Launch Checklist

### Pre-Launch
- [ ] Design mockups (Figma/Sketch)
- [ ] Screenshot creation (app + mockups)
- [ ] Icon assets (SVG icons for features)
- [ ] Copy finalization (Filipino + English)
- [ ] Video demo (optional, 30s explainer)

### Development
- [ ] HTML structure
- [ ] CSS styling (mobile-first)
- [ ] JavaScript interactivity
- [ ] Animation implementation
- [ ] Cross-browser testing
- [ ] Performance optimization

### Assets
- [ ] App icon (various sizes)
- [ ] OG image (1200x630)
- [ ] Favicon set
- [ ] Screenshot mockups (7 images)
- [ ] Privacy policy page
- [ ] Terms of use page
- [ ] Support/FAQ page

### Deployment
- [ ] GitHub Pages setup
- [ ] Custom domain (xylo.makata.ai?)
- [ ] SSL certificate
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Search Console
- [ ] Analytics (privacy-respecting)

---

## 📊 Success Metrics

### User Engagement
- Time on page > 2 minutes
- Scroll depth > 60%
- CTA click rate > 5%

### SEO
- Organic search impressions
- Keyword rankings ("Filipino audio transcription", etc.)
- Backlinks from Filipino tech blogs

### Conversion
- App Store page views from site
- App downloads (indirect tracking)

---

## 🔄 Future Enhancements

### Phase 2 Features (Post-Launch)
1. **Blog Section**: Audio AI insights, tips, Filipino language tech
2. **Use Case Library**: Real examples from users
3. **Video Tutorials**: Tagalog explainers
4. **Community Gallery**: User-submitted use cases
5. **Comparison Page**: XYLO vs competitors
6. **API Documentation**: If public API becomes available

### Localization
- Full Cebuano version of site
- Ilocano version
- Accessibility improvements (screen reader optimization)

---

## 📝 Content Calendar

### Week 1: Structure & Design
- Wireframes
- Visual design mockups
- Content writing (Filipino)

### Week 2: Development
- HTML/CSS/JS implementation
- Animation and interactivity
- Responsive testing

### Week 3: Polish & Assets
- Screenshot creation
- Copyediting
- Performance optimization

### Week 4: Launch
- Deployment
- SEO setup
- Social media announcement

---

## 🎯 Differentiation from UNAWAIN

| Aspect | UNAWAIN | XYLO |
|--------|---------|------|
| **Medium** | Documents (text/PDF) | Audio (voice/recording) |
| **Visual Identity** | Solihiya weave patterns | Prism gradient + glass morphism |
| **Primary Color** | Teal/Green (#00695C) | Violet (#8B5CF6) |
| **Accent Color** | N/A | Electric Gold (#FACC15) |
| **Pattern** | Diamond weave | Diagonal geometric threads |
| **Card Style** | Solid backgrounds | Glass morphism (frosted blur) |
| **Key Feature** | OCR + Document intelligence | Transcription + Audio intelligence |
| **Use Case** | Bills, contracts, notices | Meetings, lectures, interviews |
| **Motion** | Floating diamond particles | Waveform gradient bars |

---

## 💡 Inspiration Sources

1. **UNAWAIN**: Overall structure, privacy messaging, Filipino-first approach
2. **Linear.app**: Clean animations, dark mode, minimal design
3. **Superhuman**: Product marketing, feature highlights
4. **Apple.com**: Product presentation, imagery, glass morphism in iOS
5. **Raycast**: Keyboard-first UI inspiration (for shortcuts)
6. **iOS 17+ Design Language**: Glass morphism, SF Symbols, adaptive colors

---

## 🧵 Geometric Pattern Implementation

The app uses a **diagonal weave pattern** inspired by Filipino textiles (like solihiya in UNAWAIN, but with a different geometric approach).

### Pattern Specifications (from PatternBackground.swift)

```css
/* Diagonal Weave Pattern - CSS Canvas Implementation */
.pattern-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Pattern details:
   - Spacing: 52px between threads
   - Line width: 0.5px
   - Opacity: 2.5% (0.025) of primary violet color
   - Diagonal threads: ↘ and ↙ directions
   - Intersection dots: 1.5px diameter, 3.75% opacity
*/
```

**Implementation Notes**:
- Use HTML5 Canvas or SVG
- Violet color (#8B5CF6) at very low opacity (2.5%)
- Creates subtle texture without overwhelming content
- Should adapt to light/dark mode (same pattern, different base surface color)

---

## 🎨 Design Assets Needed

### Screenshots (Minimum)
1. Hero dashboard mockup (main screen with glass cards)
2. Recording in progress (with waveform visualization)
3. Template selection modal (glass cards in grid)
4. Analysis results (with violet-gold waveform + keyword chips)
5. History list view (stats with flame icon for streak)
6. Settings/dialect selection (glass picker)
7. iPad landscape view

**Important**: All screenshots must show the glass morphism UI with violet-gold color scheme.

### Icons (SF Symbols / SVG equivalents)
- `mic.fill` — Recording
- `waveform` — Audio visualization
- `shield.checkmark.fill` — Privacy
- `globe.asia.australia.fill` — Languages
- `bolt.fill` — Speed
- `lock.fill` — Encryption
- `sparkles` — AI
- `doc.text.fill` — Documents
- `flame.fill` — Activity streak

### Illustrations
- Waveform gradient visualization (violet → gold transition)
- Diagonal geometric weave pattern (low opacity violet)
- Phone/iPad mockup frames with glass UI inserts
- Prism/light refraction abstract elements

---

## 🔒 Privacy & Legal Pages

### Privacy Policy (xylo/privacy/)
- Data collection: **NONE**
- Analytics: **NONE**
- On-device processing only
- Model download (one-time)
- No user accounts
- No server communication

### Terms of Use (xylo/terms/)
- License grant
- Acceptable use
- Age requirements (13+)
- Disclaimer of warranties
- Limitation of liability

### Support Page (xylo/support/)
- FAQ
- System requirements
- Troubleshooting
- Contact email
- GitHub issues link (if applicable)

---

## 🌐 Domain & Hosting

**Recommended Domain**: `xylo.makata.ai` or `xyloapp.ph`

**GitHub Pages Setup**:
```
Repository: ralph-mattew/xylo-app
Branch: main or gh-pages
Custom Domain: CNAME file with domain
SSL: Automatic via GitHub
```

---

## 🎯 Call-to-Actions (Hierarchy)

### Primary CTA
**"I-download sa App Store"** (Hero, Pricing, Final CTA sections)

### Secondary CTAs
- "Tingnan ang Privacy Policy"
- "Basahin ang FAQ"
- "Subukan ang Demo" (if interactive demo)

### Tertiary CTAs
- Social share buttons
- Email signup (future newsletter)
- GitHub repo star (for developers)

---

## 📱 App Store Optimization (ASO) Alignment

Ensure website messaging aligns with App Store listing:
- **Title**: XYLO: Filipino Audio AI
- **Subtitle**: Smart transcription, private & offline
- **Description**: Match website hero subtitle
- **Keywords**: Audio, Filipino, transcription, AI, privacy, Tagalog, Cebuano

---

## ✅ Accessibility (WCAG 2.1 AA)

- [ ] Semantic HTML5
- [ ] ARIA labels for icons/buttons
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Alt text for all images
- [ ] Color contrast ratio > 4.5:1
- [ ] Skip navigation link
- [ ] Reduced motion media query

---

## 🎬 Launch Announcement Copy

**Twitter/X**:
> 🎤 Introducing XYLO — Filipino Audio Intelligence
> 
> I-record o i-upload ang audio → Automatic analysis sa sarili mong wika
> 
> ✅ 100% on-device
> ✅ 6 languages
> ✅ Walang data collection
> 
> Libre ang first 5 analyses. Download now: [link]
> 
> #Filipino #AI #Privacy

**LinkedIn**:
> I'm excited to launch XYLO, an on-device audio intelligence app designed specifically for Filipinos.
> 
> Like its sibling app UNAWAIN (document analysis), XYLO processes everything locally on your device. Record a meeting, upload a lecture, or analyze a voice memo — get intelligent summaries, keywords, and insights in Filipino, Cebuano, Ilocano, and more.
> 
> Built with Gemma 4 Edge, WhisperKit, and Meta's NLLB-200 translation models.
> 
> Try it free: [link]

---

## 🏁 Final Notes

This plan balances UNAWAIN's proven design patterns with XYLO's unique audio-focused features. The goal is a cohesive Makata AI product family while giving each app its distinct identity.

**Next Steps**:
1. Create wireframes based on this plan
2. Design mockups (Figma recommended)
3. Write Filipino copy (with translations)
4. Develop static site
5. Create app screenshots/mockups
6. Deploy to GitHub Pages
7. Submit to App Store (with matching branding)

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-20  
**Author**: Ralph Mattew Palomaria (with AI assistance)  
**License**: Internal use only


---

## 🎨 Quick Visual Reference

### Component Mapping (App → Web)

| App Component | Web Equivalent | Key Styling |
|---------------|----------------|-------------|
| `GlassCard` | `.glass-card` | `backdrop-filter: blur(20px)`, violet border |
| `WaveformView` | `<canvas>` waveform | Violet-gold gradient bars, 40 bars |
| `PatternBackground` | `.pattern-background` | Diagonal threads, 52px spacing, 2.5% opacity |
| `KeywordChip` | `.keyword-chip` | Capsule shape, glass background, 44px min-height |
| `StatMiniCard` | `.stat-card` | Glass card, SF Symbol icon, violet/gold tint |
| `PrivacyBadge` | `.privacy-badge` | Shield icon, "100% On-Device" text |
| `SegmentedProgressBar` | `.progress-bar` | Violet fill, glass container |

### Color Usage Guide

**When to use Violet (#8B5CF6)**:
- Brand elements (logo, headings)
- Primary CTAs
- Icons for main features
- Links and interactive elements
- Progress indicators

**When to use Gold (#FACC15)**:
- Accent highlights
- Achievement indicators (streak flame icon)
- Premium tier badges
- Secondary CTAs
- Waveform accent bars (every 5th bar)

**When to use Glass Morphism**:
- All cards (features, pricing, stats)
- Navigation bar
- Modal overlays
- Template picker
- Result displays

### Responsive Breakpoints

```css
/* Mobile first approach (matching iOS design) */
@media (min-width: 768px) {  /* iPad */
  /* 2-column layouts */
}

@media (min-width: 1024px) { /* Desktop */
  /* 3-column bento grid */
  /* Side-by-side layouts */
}

@media (min-width: 1440px) { /* Large desktop */
  /* Max-width container: 1280px */
}
```

### Accessibility Checklist (WCAG 2.1 AA)

**Color Contrast**:
- ✅ Violet (#8B5CF6) on white: 4.54:1 ✓
- ✅ Violet text (#1E1B2E) on light surface: 15.8:1 ✓
- ✅ Gold (#FACC15) on dark card: 10.3:1 ✓
- ⚠️ Avoid pure violet text on gold backgrounds

**Interactive Elements**:
- Minimum 44px touch target (matching iOS)
- Visible focus states (violet ring)
- Keyboard navigation support
- Screen reader labels for icons

**Motion**:
- `prefers-reduced-motion` media query
- Disable waveform animations if reduced motion
- Keep essential animations only

---

## 📋 Pre-Development Checklist

### Design Phase
- [ ] Create Figma/Sketch mockups with glass morphism effects
- [ ] Design waveform animation prototypes
- [ ] Finalize 7 app screenshots with violet-gold UI
- [ ] Create OG image (1200x630) with gradient and glass elements
- [ ] Export SF Symbols as SVG (or find web equivalents)
- [ ] Design dark mode variants

### Content Phase
- [ ] Write Filipino copy for all sections
- [ ] Translate to Cebuano, Ilocano (for language switcher)
- [ ] Prepare sample audio analysis demo
- [ ] Create privacy policy page
- [ ] Write FAQ section
- [ ] Prepare App Store listing copy (matching website)

### Development Phase
- [ ] Set up HTML structure (semantic, accessible)
- [ ] Implement CSS with design tokens (variables)
- [ ] Build glass morphism component system
- [ ] Create diagonal pattern background (Canvas/SVG)
- [ ] Implement waveform animation
- [ ] Add scroll animations (Intersection Observer)
- [ ] Build responsive layouts (mobile-first)
- [ ] Test on Safari (backdrop-filter support)
- [ ] Add prefers-color-scheme dark mode
- [ ] Optimize performance (Lighthouse 95+)

### Asset Phase
- [ ] Export app icons (favicon set)
- [ ] Create phone mockup frames
- [ ] Optimize all images (WebP with JPEG fallback)
- [ ] Generate sitemap.xml
- [ ] Create robots.txt
- [ ] Prepare manifest.json

### Launch Phase
- [ ] Deploy to GitHub Pages
- [ ] Configure custom domain (xylo.makata.ai)
- [ ] Submit to Google Search Console
- [ ] Test on multiple devices/browsers
- [ ] Verify Open Graph previews
- [ ] Check analytics setup (privacy-respecting)
- [ ] Cross-link from UNAWAIN site
- [ ] Announce on social media

---

## 🚨 Common Pitfalls to Avoid

1. **Glass Morphism Browser Support**
   - `backdrop-filter` not supported in old browsers
   - Always provide fallback solid backgrounds
   - Test on Safari (best support) and Firefox

2. **Color Contrast**
   - Don't put violet text on gold backgrounds
   - Ensure glass cards have enough opacity for text readability
   - Test in sunlight (mobile use case)

3. **Performance**
   - Canvas animations can be heavy on mobile
   - Use `requestAnimationFrame` properly
   - Lazy load images below fold
   - Preload hero image

4. **Accessibility**
   - Don't rely only on color for information
   - Provide text alternatives for icons
   - Test with VoiceOver/screen readers
   - Ensure keyboard navigation works

5. **Brand Consistency**
   - Match app's exact hex colors
   - Use same spacing scale (4px increments)
   - Keep border radius consistent (16px cards, 8px chips)
   - Mirror app's component styling

---

## 🎯 Success Criteria

### Launch Week Goals
- [ ] 500+ page views
- [ ] 50+ App Store clicks
- [ ] Average time on page: 2+ minutes
- [ ] Bounce rate: < 60%
- [ ] Lighthouse scores: 95+ across all categories

### 1 Month Goals
- [ ] Rank in top 10 for "Filipino audio transcription"
- [ ] 5+ organic backlinks
- [ ] Featured in Filipino tech blogs
- [ ] 100+ social shares

### Quality Benchmarks
- [ ] Pixel-perfect match to design mockups
- [ ] Smooth 60fps animations
- [ ] Page load < 2 seconds
- [ ] Perfect scores on mobile usability
- [ ] WCAG 2.1 AA compliance verified

---

## 📞 Feedback & Iteration

After launch, collect feedback on:
- **Visual Design**: Does glass morphism work well? Is violet-gold combination effective?
- **Clarity**: Do users understand what XYLO does immediately?
- **Trust**: Does privacy messaging resonate?
- **CTA**: Is the App Store button prominent enough?
- **Performance**: Any lag on lower-end devices?

Plan for iteration 1-2 weeks post-launch based on analytics and user feedback.

---

**End of UI/UX Plan**

For questions or clarifications, contact: feedback@makata.ai

