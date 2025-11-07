// Array of temple data with name and image URL
const temples = [
    { name: "Templo Columbia River, Washington", url: "https://www.churchofjesuschrist.org/imgs/a4b69ff6daf25c70235e2823612a01872a7b2abc/full/500%2C/0/default" },
    { name: "Abidjan Ivory Coast Temple", url: "https://www.churchofjesuschrist.org/imgs/bal80d1i45vz2eluh67xvxs09ep6p2m1lfv69t0q/full/500%2C/0/default" },
    { name: "Accra Ghana Temple", url: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/500%2C/0/default" },

];

// Function to create temple figure elements dynamically
function createTempleFigures() {
    const templeGrid = document.getElementById("temple-grid");
    
    if (!templeGrid) {
        return;
    }
    
    // Clear any existing content
    templeGrid.innerHTML = "";
    
    // Loop through temples array and create figure elements
    temples.forEach(temple => {
        // Create figure element
        const figure = document.createElement("figure");
        
        // Create image element
        const img = document.createElement("img");
        img.src = temple.url;
        img.alt = `${temple.name} Temple`;
        
        // Create figcaption element
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = temple.name;
        
        // Append image and figcaption to figure
        figure.appendChild(img);
        figure.appendChild(figcaption);
        
        // Append figure to grid
        templeGrid.appendChild(figure);
    });
}

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

// Hamburger menu toggle functionality and temple figure creation
document.addEventListener('DOMContentLoaded', function() {
    // Create temple figures dynamically
    createTempleFigures();
    
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

