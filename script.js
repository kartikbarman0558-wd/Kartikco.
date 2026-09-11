document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. HERO SECTION LOAD ANIMATIONS
       ========================================= */
    const heroTexts = [
        document.querySelector('.script-greeting'),
        document.querySelector('.main-name'),
        document.querySelector('.sub-role'),
        document.querySelector('.hero-bio'),
        document.querySelector('.hero-btn')
    ];

    // Staggered text reveal
    heroTexts.forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        }
    });

    setTimeout(() => {
        heroTexts.forEach((el, index) => {
            if (el) {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 120); // Speedy, elegant staggered entrance
            }
        });
    }, 100);

    /* --- Premium 3D Image Layering Effect --- */
    const bgCircle = document.querySelector('.bg-circle');
    const portrait = document.querySelector('.arch-portrait');
    const archOutline = document.querySelector('.arch-outline');
    const badge = document.querySelector('.floating-badge');

    // Set initial hidden states
    [bgCircle, portrait, archOutline, badge].forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
        }
    });

    if (bgCircle) bgCircle.style.transform = 'translateY(-50%) scale(0.9)';
    if (portrait) portrait.style.transform = 'scale(0.95)';
    if (archOutline) archOutline.style.transform = 'translate(calc(-50% - 15px), calc(-50% + 15px)) scale(0.95)';
    if (badge) badge.style.transform = 'translateY(20px)';

    // Reveal layers one by one for depth
    setTimeout(() => {
        if (bgCircle) {
            bgCircle.style.opacity = '1';
            bgCircle.style.transform = 'translateY(-50%) scale(1)';
        }
        setTimeout(() => {
            if (portrait) {
                portrait.style.opacity = '1';
                portrait.style.transform = 'scale(1)';
            }
            if (archOutline) {
                archOutline.style.opacity = '1';
                archOutline.style.transform = 'translate(calc(-50% - 15px), calc(-50% + 15px)) scale(1)';
            }
        }, 200); // Portrait and frame follow the background
        setTimeout(() => {
            if (badge) {
                badge.style.opacity = '1';
                badge.style.transform = 'translateY(0)';
            }
        }, 500); // Badge floats in last
    }, 200);


    /* =========================================
       2. SCROLL ANIMATIONS (STATS & PROJECTS)
       ========================================= */
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                scrollObserver.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15 
    });

    // Animate Stats Bar
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
        scrollObserver.observe(el);
    });

    // Animate the New Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        // Stagger the project cards slightly so they glide in seamlessly
        el.style.transition = `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`;
        scrollObserver.observe(el);
    });
});
    /* =========================================
       3. TOOLS & ABOUT SCROLL ANIMATIONS (PREMIUM)
       ========================================= */
    
    // Animate the Tool Icons (Staggered Grid Reveal)
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        // Creates a beautiful cascading ripple effect as they appear
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`;
        scrollObserver.observe(el);
    });

    // Animate the About Text 
    const aboutText = document.querySelector('.about-text-col');
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateY(40px)';
        aboutText.style.transition = 'opacity 0.8s ease-out 0.2s, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s';
        scrollObserver.observe(aboutText);
    }

    // Animate the Mini-Arch Image (Floats in slightly after the text)
    const miniArch = document.querySelector('.mini-arch');
    if (miniArch) {
        miniArch.style.opacity = '0';
        miniArch.style.transform = 'translateY(50px) scale(0.95)';
        miniArch.style.transition = 'opacity 1s ease-out 0.4s, transform 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s';
        scrollObserver.observe(miniArch);
    }


