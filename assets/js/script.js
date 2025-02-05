document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Prevent zooming
    }
}, { passive: false });


const exploreBtn = document.querySelector('.explore-btn');
const exploreIcon = document.querySelector('.explore img');

// Define original and hover images
const newImageSrc = '/assets/images/main/explore-icon-hover.png';
const originalImageSrc = '/assets/images/main/explore-icon.png';

// Add hover event listeners
exploreBtn.addEventListener('mouseover', () => {
    exploreIcon.src = newImageSrc; // Change to hover image
    exploreIcon.style.height = '120px'; // Increase size
    exploreIcon.style.top = '-25px'; // Adjust position
});

exploreBtn.addEventListener('mouseout', () => {
    exploreIcon.src = originalImageSrc; // Restore original image
    exploreIcon.style.height = '100px'; // Restore size
    exploreIcon.style.top = '0'; // Restore position
});



