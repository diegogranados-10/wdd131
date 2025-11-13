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
document.getElementById("lastModified").textContent = `Last Modification: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

// Static values for temperature and wind speed (matching displayed values)
const temperature = 75; // Fahrenheit
const windSpeed = 5; // mph

// Calculate windchill factor
// Formula: windchill = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
// where T is temperature in Fahrenheit and V is wind speed in mph
// Only calculate if temperature <= 50°F and wind speed > 3 mph
function calculateWindChill(temp, wind) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
}

// Display windchill or N/A based on conditions
const windChillElement = document.getElementById("windChill");
if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}°F`;
} else {
    windChillElement.textContent = "N/A";
}

