document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Accordion Logic (for FAQ page)
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            // Toggle current accordion
            acc.classList.toggle('active');
            const panel = acc.nextElementSibling;
            const icon = acc.querySelector('.icon-plus');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                if (icon) icon.textContent = '+';
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                if (icon) icon.textContent = '-';
            }
        });
    });
});
