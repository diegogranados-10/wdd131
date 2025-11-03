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
