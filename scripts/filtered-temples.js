const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 25",
      area: 72000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-702653-wallpaper.jpg"
    },
    {
      templeName: "Orlando Florida",
      location: "Orlando, Florida, United States",
      dedicated: "1994, October, 9",
      area: 70000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/400x250/orlando-florida-temple-lds-background-702675.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 53997,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-702694-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160340.jpg"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44175,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior4.jpg"
    },
    {
      templeName: "Sydney Australia",
      location: "Sydney, Australia",
      dedicated: "1984, September, 20",
      area: 30067,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-1027503-wallpaper.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 51921,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-lds-85197-wallpaper.jpg"
    },
    {
      templeName: "Bountiful Utah",
      location: "Bountiful, Utah, United States",
      dedicated: "1995, January, 8",
      area: 104000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766633-wallpaper.jpg"
    },
    {
      templeName: "Portland Oregon",
      location: "Lake Oswego, Oregon, United States",
      dedicated: "1989, August, 19",
      area: 80500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/400x250/portland-oregon-temple-lds-702692-wallpaper.jpg"
    }
  ];

// Function to extract year from dedication date string
function getDedicationYear(dedicated) {
    const year = parseInt(dedicated.split(',')[0].trim());
    return year;
}

// Function to create a temple card element
function createTempleCard(temple) {
    const figure = document.createElement('figure');
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    
    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        <span class="temple-location">${temple.location}</span><br>
        <span class="temple-dedicated">Dedicated: ${temple.dedicated}</span><br>
        <span class="temple-area">Area: ${temple.area.toLocaleString()} sq ft</span>
    `;
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    return figure;
}

// Function to display temples in the grid
function displayTemples(templesToDisplay) {
    const templeGrid = document.getElementById('temple-grid');
    if (!templeGrid) {
        return;
    }
    
    // Clear existing content
    templeGrid.innerHTML = '';
    
    // Create and append temple cards
    templesToDisplay.forEach(temple => {
        const card = createTempleCard(temple);
        templeGrid.appendChild(card);
    });
}

// Filter functions
function filterOldTemples() {
    const oldTemples = temples.filter(temple => {
        const year = getDedicationYear(temple.dedicated);
        return year < 1900;
    });
    displayTemples(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => {
        const year = getDedicationYear(temple.dedicated);
        return year > 2000;
    });
    displayTemples(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
}

function displayAllTemples() {
    displayTemples(temples);
}

// Hamburger menu toggle functionality and navigation event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the current year and populate the copyright year span
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
    
    // Get the last modified date of the document and populate the lastModified paragraph
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const month = String(lastModified.getMonth() + 1).padStart(2, '0');
        const day = String(lastModified.getDate()).padStart(2, '0');
        const year = lastModified.getFullYear();
        const hours = String(lastModified.getHours()).padStart(2, '0');
        const minutes = String(lastModified.getMinutes()).padStart(2, '0');
        const seconds = String(lastModified.getSeconds()).padStart(2, '0');
        lastModifiedElement.innerHTML = `Last Modification: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    }
    
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
    
    // Navigation event listeners for filtering
    const navHome = document.getElementById('nav-home');
    const navOld = document.getElementById('nav-old');
    const navNew = document.getElementById('nav-new');
    const navLarge = document.getElementById('nav-large');
    const navSmall = document.getElementById('nav-small');
    
    if (navHome) {
        navHome.addEventListener('click', function(e) {
            e.preventDefault();
            displayAllTemples();
        });
    }
    
    if (navOld) {
        navOld.addEventListener('click', function(e) {
            e.preventDefault();
            filterOldTemples();
        });
    }
    
    if (navNew) {
        navNew.addEventListener('click', function(e) {
            e.preventDefault();
            filterNewTemples();
        });
    }
    
    if (navLarge) {
        navLarge.addEventListener('click', function(e) {
            e.preventDefault();
            filterLargeTemples();
        });
    }
    
    if (navSmall) {
        navSmall.addEventListener('click', function(e) {
            e.preventDefault();
            filterSmallTemples();
        });
    }
    
    // Display all temples on page load
    displayAllTemples();
});

