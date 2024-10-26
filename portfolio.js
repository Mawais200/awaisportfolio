document.addEventListener("DOMContentLoaded", function () {
    // Navigation Toggle
    const navToggler = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    const navLinks = document.querySelectorAll(".nav a");

    navToggler.addEventListener("click", () => {
        aside.classList.toggle("open");
        navToggler.classList.toggle("open");
    });

    // Smooth Scroll for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
            aside.classList.remove("open");
            navToggler.classList.remove("open");
        });
    });

    // Scroll Reveal Effect for Service and Portfolio Items
    const revealElements = document.querySelectorAll(".service-item, .portfolio-item");
    window.addEventListener("scroll", function () {
        revealElements.forEach((item) => {
            const itemPosition = item.getBoundingClientRect().top;
            if (itemPosition < window.innerHeight - 50) {
                item.classList.add("show");
            }
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector(".contact-form");
    const nameInput = contactForm.querySelector('input[placeholder="Name"]');
    const emailInput = contactForm.querySelector('input[placeholder="E-mail"]');
    const subjectInput = contactForm.querySelector('input[placeholder="Subject"]');
    const messageInput = contactForm.querySelector('textarea[placeholder="Message"]');
    const submitButton = contactForm.querySelector("button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;

        // Simple form validation
        if (!nameInput.value.trim()) {
            isValid = false;
            alert("Please enter your name.");
        }
        if (!emailInput.value.trim() || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }
        if (!subjectInput.value.trim()) {
            isValid = false;
            alert("Please enter a subject.");
        }
        if (!messageInput.value.trim()) {
            isValid = false;
            alert("Please enter a message.");
        }

        // If the form is valid, submit or process the data
        if (isValid) {
            alert("Message sent successfully!");
            contactForm.reset();
        }
    });

    // Optional: Highlight active nav link based on scroll position
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
                scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25) {
                const currentId = section.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === currentId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
