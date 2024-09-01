const track = document.querySelector('.image-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const imageCircleWidth = 150; // Width of each image circle including margin
const imageMargin = 30; // Margin between images
const visibleImages = 11; // Number of visible images at a time (adjust based on your layout)
let currentIndex = 0;

function updateTrackWidth() {
    const totalWidth = track.children.length * (imageCircleWidth + imageMargin);
    track.style.width = `${totalWidth}px`;
}

function updateTrackPosition() {
    const totalImages = track.children.length;
    const maxIndex = totalImages - visibleImages;
    const newTransformValue = -currentIndex * (imageCircleWidth + imageMargin);

    // Ensure the track is not scrolled beyond the images
    track.style.transform = `translateX(${Math.max(Math.min(newTransformValue, 0), -maxIndex * (imageCircleWidth + imageMargin))}px)`;
    updateArrowsVisibility();
}

function updateArrowsVisibility() {
    const totalImages = track.children.length;
    const maxIndex = totalImages - visibleImages;

    // Hide/show left arrow based on current index
    leftArrow.style.display = (currentIndex > 0) ? 'block' : 'none';
    
    // Hide/show right arrow based on the current position
    rightArrow.style.display = (currentIndex < maxIndex) ? 'block' : 'none';
}

// Event listeners for arrows
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTrackPosition();
    }
});

rightArrow.addEventListener('click', () => {
    const totalImages = track.children.length;
    const maxIndex = totalImages - visibleImages;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateTrackPosition();
    }
});

// Initialize the track width and arrows visibility
updateTrackWidth();
updateArrowsVisibility();

// Ensure the first image is visible on load
updateTrackPosition();


document.querySelector('.navbar li:first-child a').onclick = function() {
    var dropdown = document.querySelector('.dropdown-content');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
};

const content = document.querySelector('.content');
const readMoreBtn = document.querySelector('.read-more');
const readLessBtn = document.querySelector('.read-less');

readMoreBtn.addEventListener('click', () => {
    content.classList.add('show');
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'block';
});

readLessBtn.addEventListener('click', () => {
    content.classList.remove('show');
    readMoreBtn.style.display = 'block';
    readLessBtn.style.display = 'none';
});

