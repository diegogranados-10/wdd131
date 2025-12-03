// Product array for dynamic select options
const products = [
    { id: "1", name: "Web Development Framework" },
    { id: "2", name: "Database Management System" },
    { id: "3", name: "Cloud Storage Service" },
    { id: "4", name: "Code Editor" },
    { id: "5", name: "Version Control Tool" },
    { id: "6", name: "API Testing Tool" },
    { id: "7", name: "Project Management Software" },
    { id: "8", name: "Design Tool" },
    { id: "9", name: "Analytics Platform" },
    { id: "10", name: "Security Software" }
];

// Populate product select options dynamically
function populateProductSelect() {
    const productSelect = document.getElementById("productName");
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

// Initialize form when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    populateProductSelect();
});
