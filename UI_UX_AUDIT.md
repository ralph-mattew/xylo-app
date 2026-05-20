# XYLO Website — Critical UI/UX Audit

## 🎯 Audit Date: May 20, 2026
**Auditor**: Based on UNAWAIN best practices
**Current Status**: Good foundation, needs elevation

---

## 🔍 CRITICAL ISSUES

### 1. **Hero Section — Missing Visual Proof**
**Issue**: Hero has a mockup chat card but no real app screenshot
**UNAWAIN has**: Actual dark mode dashboard screenshot
**Impact**: Low trust, looks generic
**Fix**: Replace placeholder mockup with real iPhone screenshot showing chat interface

### 2. **No Social Proof / Testimonials**
**Issue**: Zero user testimonials, reviews, or metrics
**UNAWAIN has**: User quotes, success stories
**Impact**: Can't verify product quality
**Fix**: Add testimonials section (even if limited beta feedback)

### 3. **Weak CTA Placement**
**Issue**: Single CTA in hero, final CTA section is generic
**UNAWAIN has**: Multiple strategic CTAs throughout
**Impact**: Lost conversion opportunities
**Fix**: Add CTAs after features section, pricing, FAQ

### 4. **Missing Use Case Imagery**
**Issue**: No visual examples of documents being analyzed
**UNAWAIN has**: Screenshot carousel showing different document types
**Impact**: Users can't visualize the use cases
**Fix**: Add screenshot section with 3-4 real examples

### 5. **Chat Demo Is Too Simple**
**Issue**: 3 canned questions, no real interaction
**UNAWAIN inspiration**: Interactive elements that engage
**Impact**: Feels like a static demo, not a real feature
**Fix**: Add typing animation, make it feel more dynamic

---

## ⚠️ MAJOR ISSUES

### 6. **Problem Section Lacks Emotional Connection**
**Issue**: Generic pain points (dense documents, time pressure)
**Better approach**: Real user scenarios with names/context
**Fix**: 
- "Sarah, a lawyer, spent 3 hours reviewing a 40-page contract"
- "Marco missed a deadline clause buried in page 17"

### 7. **Missing Progress Indicators**
**Issue**: Users don't know how much they've scrolled
**UNAWAIN has**: Clear section navigation
**Fix**: Add section progress dots or numbered sections

### 8. **No "Before/After" Comparison**
**Issue**: Privacy section compares XYLO vs Cloud, but no visual demo
**Fix**: Show "Before: Reading full document" vs "After: AI chat answers in seconds"

### 9. **Pricing Feels Lonely**
**Issue**: Single tier, no comparison
**UNAWAIN has**: Free vs Premium side-by-side
**Impact**: No urgency, no comparison anchor
**Fix**: Consider adding a comparison even if one-time purchase

### 10. **Footer Is Bare Bones**
**Issue**: Minimal footer with just links
**UNAWAIN has**: Richer footer with story, contact, newsletter
**Fix**: Add "Made with care" story, maker's note

---

## ⚡ MINOR ISSUES (Polish)

### 11. **Navigation Lacks Context**
**Issue**: Generic "Features, How It Works, Privacy"
**Better**: Add icons or subtle descriptions
**Fix**: Small icons next to nav items

### 12. **No Loading States / Micro-interactions**
**Issue**: Buttons have basic hover, no press feedback
**Fix**: Add subtle scale-down on click, loading states

### 13. **Chat Demo Doesn't Auto-Start**
**Issue**: User has to click buttons to see demo
**UNAWAIN approach**: Auto-play on scroll into view (already in JS!)
**Fix**: Verify auto-play works, maybe add replay button

### 14. **Missing "Powered By" Section**
**Issue**: "Gemma 4 Edge" mentioned but not explained
**Fix**: Add small tech stack section with logos/icons

### 15. **No Mobile App Mockup Context**
**Issue**: Users don't see device context (iPhone, not web app)
**Fix**: Use iPhone frame mockups for screenshots

---

## 🎨 DESIGN ELEVATION OPPORTUNITIES

### 16. **Hero Background Is Static**
**Current**: Gradient orbs + pattern
**Elevate**: Add subtle parallax effect on scroll
**Inspiration**: UNAWAIN has layered motion

### 17. **Glass Cards All Look Same**
**Issue**: Every card has identical glass treatment
**Elevate**: Vary opacity/blur for hierarchy
- Feature cards: 70% opacity
- Premium highlight: 80% + border glow
- Demo cards: Full opacity for focus

### 18. **Typography Hierarchy Could Be Stronger**
**Issue**: h2/h3 sizes are close
**Fix**: Increase contrast between heading levels
- Display: 56-72px (hero)
- H2: 40-48px (sections)
- H3: 24-28px (cards)

### 19. **Whitespace Feels Cramped in Places**
**Issue**: Some sections (features grid) feel tight
**Fix**: Increase vertical spacing between sections to 120px

### 20. **Color Usage Is Too Conservative**
**Issue**: Violet + Gold is great but underutilized
**Elevate**: 
- Use gold for "Pro" indicators more prominently
- Add subtle violet-to-gold gradients on scroll

---

## 🚀 FEATURE GAPS (vs UNAWAIN)

### 21. **No FAQ Expandables**
**Issue**: FAQ items are all visible at once
**UNAWAIN has**: Accordion-style FAQs
**Fix**: Make FAQ items clickable accordions to save space

### 22. **Missing Download Metrics**
**Issue**: No "Join 10,000+ users" or App Store rating
**Fix**: Add download count or placeholder metric

### 23. **No Newsletter / Updates Section**
**Issue**: Can't capture leads before launch
**Fix**: Add "Get notified" email capture (optional)

### 24. **Missing App Store Badge**
**Issue**: Text link instead of official badge
**Fix**: Use official Apple "Download on App Store" badge

### 25. **No Video Demo**
**Issue**: Complex feature (document chat) needs video
**Fix**: Add 30-60 sec video showing workflow

---

## 💡 CONTENT ISSUES

### 26. **Hero Copy Could Be Punchier**
**Current**: "Turn any document into an AI assistant"
**Better**: "Your documents. Your AI. Your device."
**Or**: "Stop reading. Start asking."

### 27. **Feature Descriptions Are Generic**
**Issue**: "Automatically finds entities, key terms, and document structure"
**Better**: "Spots names, dates, amounts — the important stuff"

### 28. **Missing Technical Transparency**
**Issue**: RAG mentioned in FAQ but not explained
**Fix**: Add simple explainer: "XYLO reads your document in chunks, then answers from those exact sections — no hallucination."

### 29. **Call-Out Numbers Are Missing**
**Issue**: No stats in "How It Works" (e.g., "3 seconds to analyze 10 pages")
**Fix**: Add concrete metrics

### 30. **Privacy Section Needs Proof**
**Issue**: Claims "zero network" but no proof
**Fix**: Add: "Don't trust us? Use iOS network monitor — you'll see zero requests."

---

## 🎯 QUICK WINS (Do First)

### Priority 1 (Critical — Do Today)
1. ✅ Add real app screenshots (replace mockup)
2. ✅ Add App Store badge instead of text button
3. ✅ Add testimonials section (even 2-3 quotes)
4. ✅ Improve hero copy to be punchier
5. ✅ Add download metrics / social proof

### Priority 2 (Important — This Week)
6. ✅ Make FAQ accordion-style
7. ✅ Add before/after comparison visuals
8. ✅ Improve chat demo with typing animation
9. ✅ Add use case imagery (3-4 screenshots)
10. ✅ Strengthen typography hierarchy

### Priority 3 (Nice to Have — Before Launch)
11. Add video demo
12. Add newsletter capture
13. Add parallax effects
14. Add micro-interactions
15. Polish glass card variants

---

## 📊 SCORING

| Category | Current | Target | Gap |
|----------|---------|--------|-----|
| **Visual Hierarchy** | 7/10 | 9/10 | Needs stronger typography |
| **Trust Signals** | 4/10 | 9/10 | Missing social proof |
| **Clarity** | 8/10 | 10/10 | Good but can be punchier |
| **Engagement** | 6/10 | 9/10 | Missing video, weak demo |
| **Conversion** | 5/10 | 9/10 | Weak CTAs, no urgency |
| **Polish** | 7/10 | 9/10 | Needs micro-interactions |
| **Accessibility** | 9/10 | 10/10 | Already good |
| **Performance** | 9/10 | 10/10 | Fast load |

**Overall Score**: 6.9/10 → **Target**: 9.2/10

---

## 🎨 UNAWAIN PATTERNS TO ADOPT

### 1. Visual Rhythm
- UNAWAIN uses "banig divider" between sections
- **Adopt for XYLO**: Use subtle diagonal pattern dividers

### 2. Comparison Layout
- UNAWAIN has side-by-side bad vs good with shield divider
- **Adopt for XYLO**: Already have this, make it more visual

### 3. Section Labels
- UNAWAIN uses small caps labels above section titles
- **Adopt for XYLO**: Already have this, good!

### 4. Pricing Layout
- UNAWAIN has 2 tiers side-by-side with "BEST VALUE" badge
- **Consider for XYLO**: Even with one tier, show "Premium" badge

### 5. Footer Personality
- UNAWAIN has maker's story in footer
- **Adopt for XYLO**: Add personal touch

---

## 🚀 RECOMMENDED IMPLEMENTATION ORDER

**Week 1: Critical Fixes**
- Day 1: Add real screenshots
- Day 2: Add testimonials
- Day 3: Improve hero copy + CTAs
- Day 4: Add social proof metrics
- Day 5: Polish chat demo

**Week 2: Elevation**
- Day 1: Accordion FAQs
- Day 2: Before/after visuals
- Day 3: Typography improvements
- Day 4: Micro-interactions
- Day 5: Final polish + testing

**Week 3: Nice-to-Haves**
- Video demo
- Newsletter
- Advanced animations

---

## 💬 FEEDBACK FROM UNAWAIN ANALYSIS

**What UNAWAIN does exceptionally well**:
- Real screenshots everywhere (builds trust)
- Filipino-first language (creates connection)
- Side-by-side pricing (anchoring effect)
- Maker's story (human touch)
- Detailed privacy comparison (transparency)

**What XYLO should adopt**:
- Screenshot carousel
- Testimonials section
- More CTAs
- Richer footer
- Social proof metrics

**What XYLO already does better**:
- Cleaner navigation
- Better glass morphism
- Stronger color contrast
- Clearer feature hierarchy

---

## ✅ ACTION PLAN

1. **Immediate** (Today): Add screenshots, testimonials, metrics
2. **Short-term** (This week): Improve demo, add video, polish copy
3. **Medium-term** (Before launch): Add all missing sections
4. **Long-term** (Post-launch): A/B test, iterate based on metrics

**Target**: Transform from 6.9/10 to 9.2/10 before launch.

---

**Next Steps**: Prioritize Quick Wins list and implement in order.
