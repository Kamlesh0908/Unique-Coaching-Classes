// =====================================================
// UNIQUE COACHING CLASSES - Main JavaScript
// Interactive Features and Form Handling
// =====================================================

// =====================================================
// 1. GLOBAL VARIABLES & INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initScrollEffects();
    initFAQAccordion();
    initGalleryFilters();
    initTestimonialsSlider();
    initRegistrationForm();
    initContactForm();
    initScrollTopButton();
    initActiveNavLinks();
    initNoticeBoard();
}

// =====================================================
// 2. MOBILE NAVIGATION MENU
// =====================================================

function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileToggle && navMenu) {
        // Toggle menu on hamburger click
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// =====================================================
// 3. SMOOTH SCROLLING
// =====================================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty anchors
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =====================================================
// 4. SCROLL EFFECTS (Header & Animations)
// =====================================================

function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        // Header shadow on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Animate elements on scroll
        animateOnScroll();
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .course-card, .faculty-card, .why-card, .story-card, .testimonial-card, .gallery-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize element opacity for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.service-card, .course-card, .faculty-card, .why-card, .story-card, .testimonial-card, .gallery-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// =====================================================
// 5. ACTIVE NAVIGATION LINKS
// =====================================================

function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// =====================================================
// 6. FAQ ACCORDION
// =====================================================

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// =====================================================
// 7. GALLERY FILTERS
// =====================================================

function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// =====================================================
// 8. TESTIMONIALS SLIDER
// =====================================================

function initTestimonialsSlider() {
    const slider = document.querySelector('.testimonials-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (slider && prevBtn && nextBtn) {
        let currentIndex = 0;
        const cards = slider.querySelectorAll('.testimonial-card');
        const visibleCards = window.innerWidth <= 768 ? 1 : 2;
        const maxIndex = Math.ceil(cards.length / visibleCards) - 1;
        
        function updateSlider() {
            const cardWidth = cards[0].offsetWidth;
            const gap = 30;
            const offset = -(currentIndex * visibleCards * (cardWidth + gap));
            slider.style.transform = `translateX(${offset}px)`;
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });
        
        // Auto slide
        setInterval(function() {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 5000);
        
        // Update on resize
        window.addEventListener('resize', function() {
            updateSlider();
        });
    }
}

// =====================================================
// 9. REGISTRATION FORM HANDLING
// =====================================================

function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                studentName: document.getElementById('studentName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                parentPhone: document.getElementById('parentPhone').value.trim(),
                class: document.getElementById('class').value,
                course: document.getElementById('course').value,
                preferredBatch: document.getElementById('preferredBatch').value,
                modeOfLearning: document.getElementById('modeOfLearning').value,
                address: document.getElementById('address').value.trim(),
                message: document.getElementById('message').value.trim(),
                demoClass: document.getElementById('demoClass').checked,
                submittedAt: new Date().toISOString(),
                status: 'pending'
            };
            
            // Validate form
            if (!validateRegistrationForm(formData)) {
                showFormMessage(formMessage, 'Please fill in all required fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('.btn-submit');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            try {
                // Submit to database using RESTful Table API
                const response = await fetch('tables/registrations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    showFormMessage(formMessage, 'Registration submitted successfully! Our counselor will contact you within 24 hours.', 'success');
                    form.reset();
                    
                    // Scroll to message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Registration error:', error);
                showFormMessage(formMessage, 'There was an error submitting your registration. Please try again or contact us directly.', 'error');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
}

function validateRegistrationForm(data) {
    // Check required fields
    if (!data.studentName || !data.email || !data.phone || !data.class || !data.course || !data.modeOfLearning) {
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    // Validate phone format (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        return false;
    }
    
    return true;
}

// =====================================================
// 10. CONTACT FORM HANDLING
// =====================================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('contactFormMessage');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('contactName').value.trim(),
                email: document.getElementById('contactEmail').value.trim(),
                phone: document.getElementById('contactPhone').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('contactMessage').value.trim(),
                submittedAt: new Date().toISOString(),
                status: 'unread'
            };
            
            // Validate form
            if (!validateContactForm(formData)) {
                showFormMessage(formMessage, 'Please fill in all fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('.btn-primary');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                // Submit to database using RESTful Table API
                const response = await fetch('tables/contact_messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    showFormMessage(formMessage, 'Thank you for contacting us! We will get back to you soon.', 'success');
                    form.reset();
                    
                    // Scroll to message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Contact form error:', error);
                showFormMessage(formMessage, 'There was an error sending your message. Please try again or call us directly.', 'error');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
}

function validateContactForm(data) {
    // Check required fields
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    // Validate phone format
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        return false;
    }
    
    return true;
}

// =====================================================
// 11. FORM MESSAGE DISPLAY
// =====================================================

function showFormMessage(element, message, type) {
    if (element) {
        element.textContent = message;
        element.className = 'form-message ' + type;
        element.style.display = 'block';
        
        // Auto hide success messages after 10 seconds
        if (type === 'success') {
            setTimeout(() => {
                element.style.display = 'none';
            }, 10000);
        }
    }
}

// =====================================================
// 12. SCROLL TO TOP BUTTON
// =====================================================

function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// =====================================================
// 13. NOTICE BOARD ANIMATION
// =====================================================

function initNoticeBoard() {
    const notices = [
        'New batches starting from January 2025! Limited seats available. Register now!',
        'Special discount of 20% on early bird registrations! Hurry up!',
        'Free demo classes available for all courses. Book your slot today!',
        'Summer crash course registration is now open. Enroll before seats fill up!',
        'Congratulations to our students for excellent board exam results!'
    ];
    
    const noticeText = document.getElementById('noticeText');
    let currentNoticeIndex = 0;
    
    if (noticeText) {
        setInterval(function() {
            // Fade out
            noticeText.style.opacity = '0';
            
            setTimeout(function() {
                // Change text
                currentNoticeIndex = (currentNoticeIndex + 1) % notices.length;
                noticeText.textContent = notices[currentNoticeIndex];
                
                // Fade in
                noticeText.style.opacity = '1';
            }, 500);
        }, 5000);
    }
}

// =====================================================
// 14. UTILITY FUNCTIONS
// =====================================================

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// 15. PERFORMANCE OPTIMIZATION
// =====================================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =====================================================
// 16. ANALYTICS & TRACKING (Optional)
// =====================================================

// Track form submissions
function trackEvent(category, action, label) {
    console.log('Event tracked:', category, action, label);
    // Integrate with analytics service (Google Analytics, etc.)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track page views
window.addEventListener('load', function() {
    trackEvent('Page', 'View', window.location.pathname);
});

// =====================================================
// 17. ERROR HANDLING
// =====================================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Log to error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Log to error tracking service
});

// =====================================================
// 18. ACCESSIBILITY IMPROVEMENTS
// =====================================================

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const mobileToggle = document.getElementById('mobileToggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
});

// Focus management for modals and overlays
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// =====================================================
// 19. BROWSER COMPATIBILITY
// =====================================================

// Polyfill for smooth scroll
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// =====================================================
// 20. CONSOLE MESSAGE
// =====================================================

console.log('%c🎓 UNIQUE COACHING CLASSES', 'font-size: 20px; font-weight: bold; color: #0D47A1;');
console.log('%cWebsite developed with ❤️ for students', 'font-size: 12px; color: #FF6F00;');
console.log('%cFor technical support: info@uniquecoaching.com', 'font-size: 10px; color: #666;');

// =====================================================
// END OF SCRIPT
// =====================================================