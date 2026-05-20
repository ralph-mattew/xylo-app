# XYLO Website Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

### 1. Initialize Git Repository

```bash
cd /Users/rlpalomaria/pages/xylo-app
git init
git add .
git commit -m "Initial XYLO website commit"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `xylo-app`
3. Description: "Official landing page for XYLO: AI Document Intelligence"
4. Public repository
5. Do NOT initialize with README (we already have one)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/ralph-mattew/xylo-app.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Click Save

Your site will be live at: `https://ralph-mattew.github.io/xylo-app/`

### 5. Configure Custom Domain (Optional)

If using `xyloapp.com` or `xylo.makata.ai`:

1. Add `CNAME` file to root:
```bash
echo "xyloapp.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. Configure DNS:
   - A Records: Point to GitHub Pages IPs
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - OR CNAME: `ralph-mattew.github.io`

3. In GitHub Settings → Pages:
   - Custom domain: `xyloapp.com`
   - Enforce HTTPS: ✓

DNS propagation may take 24-48 hours.

---

## 📁 File Structure

```
xylo-app/
├── index.html              ← Main landing page
├── sitemap.xml             ← SEO sitemap
├── robots.txt              ← Search engine instructions
├── .nojekyll               ← Disable Jekyll processing
├── CNAME                   ← Custom domain (if used)
├── README.md               ← Repository overview
├── UXUI_PLAN.md            ← Complete design spec
├── COLOR_REFERENCE.md      ← Quick color guide
├── DEPLOYMENT.md           ← This file
├── assets/
│   ├── css/
│   │   └── main.css        ← All styles (glass morphism, Prism colors)
│   ├── js/
│   │   └── main.js         ← Interactions (chat demo, animations)
│   ├── img/
│   │   ├── icons/          ← (To be added: favicon, etc.)
│   │   └── screenshots/    ← (To be added: app screenshots)
├── privacy/
│   └── index.html          ← Privacy policy
├── terms/
│   └── index.html          ← Terms of use
└── support/
    └── index.html          ← Support & FAQ
```

---

## ✅ Pre-Launch Checklist

### Content
- [ ] Replace placeholder App Store link with real URL
- [ ] Add real app screenshots to `/assets/screenshots/`
- [ ] Create and add app icon/favicon to `/assets/img/icons/`
- [ ] Generate OG image (1200x630) for social sharing
- [ ] Update email addresses (support@xyloapp.com)

### Assets Needed
- [ ] App icon (512x512, 192x192, 180x180, 32x32, 16x16)
- [ ] 7 app screenshots (PNG, optimized)
- [ ] OG image for social media
- [ ] Favicon set

### Testing
- [ ] Test on mobile Safari (iOS)
- [ ] Test on Chrome (desktop + mobile)
- [ ] Test on Firefox
- [ ] Test dark mode appearance
- [ ] Verify all links work
- [ ] Test navigation scroll behavior
- [ ] Check interactive chat demo
- [ ] Verify responsive layouts (mobile/tablet/desktop)

### Performance
- [ ] Run Lighthouse audit (aim for 95+ across all categories)
- [ ] Optimize images (use WebP with fallbacks if needed)
- [ ] Minify CSS/JS for production (optional, already quite lean)
- [ ] Test on slow 3G network

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Open Graph preview on Facebook Debugger
- [ ] Verify Twitter Card preview
- [ ] Check meta descriptions are compelling

### Analytics (Optional)
- [ ] If desired, add privacy-respecting analytics (Plausible, Fathom)
- [ ] Or use GitHub Pages traffic stats only

---

## 🎨 Customization Guide

### Updating Colors

All colors are defined in CSS variables in `assets/css/main.css`:

```css
:root {
  --xylo-primary: #8B5CF6;        /* Violet */
  --xylo-accent: #FACC15;         /* Electric Gold */
  --xylo-surface: #F3F1FA;        /* Background */
  /* etc. */
}
```

To change the color scheme, update these variables.

### Updating Content

- **Hero section**: Edit `index.html` line ~90
- **Features**: Edit `index.html` line ~400
- **Pricing**: Edit `index.html` line ~600
- **FAQ**: Edit `index.html` line ~700

### Adding New Sections

1. Add HTML in `index.html`
2. Add corresponding styles in `assets/css/main.css`
3. Add any interactions in `assets/js/main.js`
4. Update navigation links if needed

---

## 🔧 Development Server (Optional)

For local testing:

```bash
# Python 3
python3 -m http.server 8000

# Or if you have npm
npx serve .
```

Then visit: `http://localhost:8000`

---

## 📊 Performance Targets

Current site should achieve:
- **Lighthouse Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+
- **Page Load**: < 2 seconds (excluding images)
- **First Contentful Paint**: < 1.5s
- **Total Bundle Size**: ~50KB (HTML+CSS+JS)

---

## 🐛 Troubleshooting

### Site not updating after push?
- Wait 2-3 minutes for GitHub Pages to rebuild
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+F5)
- Check GitHub Actions tab for build status

### Glass morphism not working?
- Ensure browser supports `backdrop-filter` (Safari, Chrome 76+)
- Firefox requires enabling in `about:config`

### Animations janky on mobile?
- Check for high-resolution images loading
- Verify pattern canvas isn't too large
- Consider reducing animation complexity for mobile

### Custom domain not working?
- Verify DNS propagation: https://dnschecker.org
- Check CNAME file is at repository root
- Ensure "Enforce HTTPS" is enabled in GitHub Pages settings

---

## 📝 Update Workflow

When making changes:

```bash
# Make your edits
git add .
git commit -m "Update: description of changes"
git push

# Wait 2-3 minutes for GitHub Pages to rebuild
# Hard refresh browser to see changes
```

---

## 🎯 Post-Launch

### Week 1
- Monitor GitHub Pages traffic
- Share on social media (Twitter/X, LinkedIn)
- Submit to relevant directories/forums
- Reach out to tech bloggers for coverage

### Month 1
- Track Google Search Console performance
- Analyze which sections users engage with most
- A/B test different hero headlines (if using analytics)
- Gather feedback from early users

### Ongoing
- Keep App Store link updated
- Update screenshots when app UI changes
- Add testimonials/reviews if applicable
- Blog about updates (optional)

---

## 🔗 Useful Links

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Lighthouse Testing**: https://pagespeed.web.dev/
- **OG Image Debugger**: https://www.opengraph.xyz/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **DNS Checker**: https://dnschecker.org/

---

**Ready to launch!** 🚀

For questions: support@xyloapp.com
