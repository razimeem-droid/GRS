document.addEventListener("DOMContentLoaded", () => {
    // Products Data
    const products = [
        { title: "Laptops & Desktops", img: "assets/service_1_laptop.png", desc: "Top-of-the-line computing explicitly engineered for enterprise professionals." },
        { title: "Hardware & Accessories", img: "assets/service_5_hardware.png", desc: "Premium peripherals, ergonomic workflows, and precise desktop components." },
        { title: "CCTV & Security", img: "assets/service_6_cctv.png", desc: "Advanced physical premise surveillance and IP-controlled monitoring systems." },
        { title: "Printers", img: "assets/product_printer.png.png", desc: "High-efficiency enterprise document management infrastructure." },
        { title: "POS Machines", img: "assets/service_8_pos.png", desc: "Cutting-edge dual-axis point of sale terminals built to streamline massive transaction volumes natively." }
    ];

    // Services Data
    const services = [
        { title: "Server Solutions", img: "assets/service_2_server.png", desc: "In a business environment, management of applications is as important as managing your business. With a proper server solution the jobs can be easily managed in a productive way. Our server management in Dubai are fine tuned for your end-to-end business technology solutions. It includes the solutions and support on all versions Microsoft servers and Linux based servers." },
        { title: "Network Solutions", img: "assets/service_3_network.png", desc: "We have proved our expertise in implementing the complex network solutions across wide range of clients. Comprising Switching, Firewalls, Servers, Storage and Structured Cabling." },
        { title: "Network Security", img: "assets/service_4_security.png", desc: "We are the leading Network security provider. From medium businesses to global enterprises, we resolve network security concerns and apply watch-dog applications." },
        { title: "Storage Solutions", img: "assets/Gemini_Generated_Image_4wpes54wpes54wpe.png", desc: "Empowering users to access their information via physical and cloud options. With extensive delivery of prompt services, we are the best storage provider in Dubai." },
        { title: "Cloud Solutions", img: "assets/service_cloud.png.png", desc: "If you are looking for secured and reliable cloud solutions, we design and implement the best for your business infrastructure. Delivering the most integrated architecture." },
        { title: "Backup Solution", img: "assets/Gemini_Generated_Image_g05e1ig05e1ig05e.png", desc: "Performing reliable backups of critical data defined by clear-cut methodical policies, employing methods that recover data simply and quickly." },
        { title: "Enterprise Mail", img: "assets/Gemini_Generated_Image_l5ubg4l5ubg4l5ub.png", desc: "We strive to enable organizations to plan and build systems as per needs with leading email platforms. Delivering on-premise hybrid and cloud-based solutions." },
        { title: "Wireless Solutions", img: "assets/Gemini_Generated_Image_mu2ok3mu2ok3mu2o.png", desc: "Providing platforms for accessing enterprise application data over the air, granting reliable access to voice, databases, and critical info." },
        { title: "Network Cabling", img: "assets/Gemini_Generated_Image_bf429ubf429ubf42.png", desc: "Full-service network cabling solutions throughout a business including fiber and copper installations, connector faceplates, and rigorous testing." }
    ];

    // Render Products
    const productGrid = document.querySelector(".product-grid");
    if(productGrid) {
        products.forEach((p) => {
            const card = document.createElement("a");
            card.href = "#";
            card.className = "product-card";
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${p.img}" alt="${p.title}" class="service-img" loading="lazy" />
                </div>
                <div class="card-content">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // Render Services
    const uniformGrid = document.querySelector(".uniform-grid");
    if(uniformGrid) {
        services.forEach((s) => {
            const card = document.createElement("a");
            card.href = "#";
            card.className = "service-card";
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${s.img}" alt="${s.title}" class="service-img" loading="lazy" />
                </div>
                <div class="card-content">
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                </div>
            `;
            uniformGrid.appendChild(card);
        });
    }

    // Create Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="ph ph-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Navbar glassmorphism effect
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (currentScroll > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Advanced Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for reveal animation
    const elementsToReveal = document.querySelectorAll(
        '.section-headers, .product-grid, .uniform-grid, .about-grid, .contact-container'
    );
    
    elementsToReveal.forEach(el => {
        revealObserver.observe(el);
    });

    // Form submission handling with animation
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.btn-submit');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Animate button on submit
            submitBtn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="ph ph-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                
                // Reset form
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Request';
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Add subtle parallax to hero image
    const heroImage = document.querySelector('.hero-image-mount');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxScroll = window.innerHeight * 0.5;
            if (scrolled < maxScroll) {
                const yPos = Math.min(scrolled * 0.3, 60);
                heroImage.style.transform = `perspective(1000px) rotateX(2deg) translateY(${yPos}px)`;
            }
        });
    }
});
