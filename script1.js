// Initializing the current image index
let currentIndex = 1;
const totalImages = 781;

// Getting references to the buttons and image element
const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const startButton = document.getElementById('start');
const endButton = document.getElementById('end');

// Function to update the image based on the current index
function updateImage() {
    imageElement.src = `a${currentIndex}.jpg`;
}

// Function to go to the previous image
function goPrev() {
    if (currentIndex > 1) {
        currentIndex--;
        updateImage();
    }
}

// Function to go to the next image
function goNext() {
    if (currentIndex < totalImages) {
        currentIndex++;
        updateImage();
    }
}

// Function to go to the first image
function goStart() {
    currentIndex = 1;
    updateImage();
}

// Function to go to the last image
function goEnd() {
    currentIndex = totalImages;
    updateImage();
}

// Add event listeners for the buttons
prevButton.addEventListener('click', goPrev);
nextButton.addEventListener('click', goNext);
startButton.addEventListener('click', goStart);
endButton.addEventListener('click', goEnd);

