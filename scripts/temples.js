// Get the current year and populate the copyright year span
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document and populate the lastModified paragraph
const lastModified = new Date(document.lastModified);
const month = String(lastModified.getMonth() + 1).padStart(2, '0');
const day = String(lastModified.getDate()).padStart(2, '0');
const year = lastModified.getFullYear();
const hours = String(lastModified.getHours()).padStart(2, '0');
const minutes = String(lastModified.getMinutes()).padStart(2, '0');
const seconds = String(lastModified.getSeconds()).padStart(2, '0');
document.getElementById("lastModified").innerHTML = `Last Modification: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const nav = document.querySelector('nav');
    
    if (!hamburgerMenu || !navMenu || !nav) {
        return;
    }
    
    // Toggle menu when hamburger button is clicked
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a navigation link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Handle window resize - close menu if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

