// XYLO Main JavaScript
// Interactive features and animations

(function() {
  'use strict';

  // ==========================================
  // Scroll Progress Bar
  // ==========================================
  
  function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    scrollProgress.style.width = progress + '%';
  }
  
  window.addEventListener('scroll', updateScrollProgress);
  
  // ==========================================
  // Navigation
  // ==========================================
  
  const nav = document.getElementById('site-nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Add shadow when scrolled
    if (currentScroll > 10) {
      nav.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // ==========================================
  // Mobile Menu Toggle
  // ==========================================
  
  window.toggleMenu = function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
  };
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.remove('open');
    });
  });
  
  // ==========================================
  // Diagonal Pattern Background (Canvas)
  // ==========================================
  
  function drawDiagonalPattern() {
    const canvas = document.getElementById('hero-pattern');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const spacing = 52;
    const lineWidth = 0.5;
    
    // Always dark mode
    const color = 'rgba(167, 139, 250, 0.025)';
    const dotColor = 'rgba(167, 139, 250, 0.0375)';
    
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    
    // Draw diagonal lines (↘)
    for (let x = -height; x <= width + height; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + height, height);
      ctx.stroke();
    }
    
    // Draw diagonal lines (↙)
    for (let x = -height; x <= width + height; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - height, height);
      ctx.stroke();
    }
    
    // Draw intersection dots
    ctx.fillStyle = dotColor;
    const dotSize = 1.5;
    for (let x = -height; x <= width + height; x += spacing) {
      for (let y = 0; y <= height; y += spacing) {
        const ix = x + y;
        if (ix >= -dotSize && ix <= width + dotSize) {
          ctx.beginPath();
          ctx.arc(ix, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }
  
  // Draw pattern on load and resize
  window.addEventListener('load', drawDiagonalPattern);
  window.addEventListener('resize', drawDiagonalPattern);
  
  // No color scheme listener needed — always dark
  
  // ==========================================
  // Chat Demo Interactive
  // ==========================================
  
  const demoQuestions = [
    {
      question: "What is the payment schedule?",
      answer: "Based on Section 4, payment is due within 30 days of invoice delivery. The client agrees to a late fee of 1.5% per month after the due date.",
      citation: "Section 4, Page 3"
    },
    {
      question: "Can I terminate early?",
      answer: "Yes. According to Section 7, either party may terminate with 14 days written notice. However, you must complete any work in progress and will be paid for completed deliverables only.",
      citation: "Section 7, Page 5"
    },
    {
      question: "Who owns the deliverables?",
      answer: "Section 9 states that all work product becomes the client's property upon full payment. You retain the right to use the work in your portfolio with prior written consent.",
      citation: "Section 9, Page 6"
    }
  ];
  
  let currentDemoIndex = -1;
  let isTyping = false;
  
  function typeText(element, text, speed = 20) {
    return new Promise((resolve) => {
      let i = 0;
      element.textContent = '';
      isTyping = true;
      
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          isTyping = false;
          resolve();
        }
      }
      type();
    });
  }
  
  window.askQuestion = async function(index) {
    if (isTyping) return;
    
    const chatMessages = document.getElementById('demo-chat-messages');
    if (!chatMessages || index === currentDemoIndex) return;
    
    currentDemoIndex = index;
    const demo = demoQuestions[index];
    
    // Clear previous messages
    chatMessages.innerHTML = '';
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message chat-message-user';
    const userP = document.createElement('p');
    userMessage.appendChild(userP);
    chatMessages.appendChild(userMessage);
    
    // Type user question
    await typeText(userP, demo.question, 30);
    
    // Wait before AI response
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Add AI message container
    const aiMessage = document.createElement('div');
    aiMessage.className = 'chat-message chat-message-ai';
    const aiP = document.createElement('p');
    aiMessage.appendChild(aiP);
    chatMessages.appendChild(aiMessage);
    
    // Type AI answer
    await typeText(aiP, demo.answer, 15);
    
    // Add citation after typing completes
    const citation = document.createElement('div');
    citation.className = 'citation';
    citation.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
        <path d="M3 0h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H3c-1.66 0-3-1.34-3-3V3c0-1.66 1.34-3 3-3z"/>
      </svg>
      ${demo.citation}
    `;
    aiMessage.appendChild(citation);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };
  
  // Auto-trigger first question on section visible
  const demoSection = document.getElementById('chat-demo');
  if (demoSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && currentDemoIndex === -1) {
          setTimeout(() => askQuestion(0), 800);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(demoSection);
  }
  
  // ==========================================
  // Scroll Reveal Animations
  // ==========================================
  
  const revealElements = document.querySelectorAll('.glass-card, .step-card, .feature-card, .faq-item');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealObserver.observe(element);
  });
  
  // ==========================================
  // Smooth Scroll for Anchor Links
  // ==========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for sticky nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ==========================================
  // Gradient Orbs Animation Enhancement
  // ==========================================
  
  const orbs = document.querySelectorAll('.hero-gradient-orb');
  
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 20;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      
      orb.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  
  // ==========================================
  // Performance: Reduce Motion
  // ==========================================
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
  }
  
  // ==========================================
  // FAQ Accordion
  // ==========================================
  
  window.toggleFAQ = function(button) {
    const faqItem = button.closest('.faq-accordion');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-accordion').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  };
  
  // ==========================================
  // Initialize on DOM Load
  // ==========================================

  document.addEventListener('DOMContentLoaded', () => {

    // ── Floating Download CTA Bar ──
    const floatingCTA = document.getElementById('floating-cta');
    if (floatingCTA) {
      const heroCTA = document.querySelector('.hero-cta-group') || document.querySelector('.hero');
      const footerSection = document.querySelector('.footer');

      function updateFloatingCTA() {
        if (!heroCTA) return;
        const triggerBottom = heroCTA.getBoundingClientRect().bottom;
        const footerTop = footerSection ? footerSection.getBoundingClientRect().top : Infinity;
        const show = triggerBottom < 0 && footerTop > window.innerHeight;
        floatingCTA.classList.toggle('visible', show);
        floatingCTA.setAttribute('aria-hidden', String(!show));
      }

      window.addEventListener('scroll', updateFloatingCTA, { passive: true });
      window.addEventListener('resize', updateFloatingCTA, { passive: true });
      updateFloatingCTA();
    }
    // ── End Floating CTA ──
    console.log('🎨 XYLO website loaded');
    
    // Add loaded class for animations
    document.body.classList.add('loaded');
    
    // Open first FAQ by default
    const firstFAQ = document.querySelector('.faq-accordion');
    if (firstFAQ) {
      firstFAQ.classList.add('active');
    }

    // Initialize carousel
    initCarousel();
  });

  // ===============================================
  // SCREENSHOT CAROUSEL
  // ===============================================
  
  let currentSlide = 0;
  const totalSlides = 9;

  function initCarousel() {
    updateCarousel();
  }

  function moveCarousel(direction) {
    currentSlide += direction;
    
    // Loop around
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!track || slides.length === 0) return;
    
    // Move track
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active states
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Auto-advance carousel every 5 seconds
  let carouselInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);

  // Pause auto-advance on user interaction
  document.addEventListener('click', (e) => {
    if (e.target.closest('.carousel-btn') || e.target.closest('.carousel-dot')) {
      clearInterval(carouselInterval);
      // Restart after 10 seconds of inactivity
      carouselInterval = setInterval(() => {
        moveCarousel(1);
      }, 10000);
    }
  });

  // Make functions global
  window.moveCarousel = moveCarousel;
  window.goToSlide = goToSlide;

  // ===============================================
  // VIDEO DEMO
  // ===============================================
  
  function playVideoDemo() {
    const placeholder = document.getElementById('video-placeholder');
    const embed = document.getElementById('video-embed');
    const iframe = document.getElementById('video-iframe');
    
    if (!placeholder || !embed || !iframe) return;
    
    // Replace with actual video URL when available
    const videoUrl = 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1';
    
    // For now, show a message
    placeholder.innerHTML = `
      <div style="text-align: center; padding: 3rem;">
        <p style="font-size: 1.25rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 1rem;">
          Demo video coming soon!
        </p>
        <p style="color: rgba(255, 255, 255, 0.6);">
          Add your video URL in main.js (line ~450)
        </p>
      </div>
    `;
    
    // Uncomment when video is ready:
    // iframe.src = videoUrl;
    // placeholder.style.display = 'none';
    // embed.style.display = 'block';
  }

  window.playVideoDemo = playVideoDemo;

})();
