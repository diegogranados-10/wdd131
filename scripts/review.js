// Track review count using localStorage
function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');
    
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }
    
    // Increment the count
    reviewCount++;
    
    // Store the updated count
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Display the count
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        countElement.textContent = reviewCount;
    }
}

// Display review details from URL parameters
function displayReviewDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const reviewDetails = document.getElementById('reviewDetails');
    
    if (reviewDetails && urlParams.toString()) {
        let detailsHTML = '<dl>';
        
        if (urlParams.get('productName')) {
            detailsHTML += `<dt>Product Name:</dt><dd>${urlParams.get('productName')}</dd>`;
        }
        
        if (urlParams.get('installationDate')) {
            detailsHTML += `<dt>Installation Date:</dt><dd>${urlParams.get('installationDate')}</dd>`;
        }
        
        if (urlParams.get('rating')) {
            const rating = urlParams.get('rating');
            const stars = '☆'.repeat(parseInt(rating));
            detailsHTML += `<dt>Rating:</dt><dd>${stars} (${rating}/5)</dd>`;
        }
        
        if (urlParams.get('features')) {
            const features = urlParams.getAll('features');
            detailsHTML += `<dt>Useful Features:</dt><dd>${features.join(', ')}</dd>`;
        }
        
        if (urlParams.get('writtenReview')) {
            detailsHTML += `<dt>Review:</dt><dd>${urlParams.get('writtenReview')}</dd>`;
        }
        
        if (urlParams.get('userName')) {
            detailsHTML += `<dt>User Name:</dt><dd>${urlParams.get('userName')}</dd>`;
        }
        
        detailsHTML += '</dl>';
        reviewDetails.innerHTML = detailsHTML;
    }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    updateReviewCount();
    displayReviewDetails();
});
