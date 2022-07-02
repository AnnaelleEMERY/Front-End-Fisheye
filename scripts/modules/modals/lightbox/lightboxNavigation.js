import lightboxMediaPlay from './lightboxMediaPlay.js';

// add the lightbox navigation
function lightboxNavigation(lightboxData, startId, lightboxMedia, lightboxTitle) {
    const lightboxForward = document.querySelector('.lightbox__forward');
    const lightboxBackward = document.querySelector('.lightbox__backward');
    let currentIndex = startId;

    function checkKey(event) {
        if (event.key === 'ArrowRight') {
            moveLightboxForward();
        }
        if (event.key === 'ArrowLeft') {
            moveLightboxBackward();
        }
        if (event.key === 'Enter') {
            if (event.target.classList.contains('lightbox__forward')) {
                moveLightboxForward();
            }
            if (event.target.classList.contains('lightbox__backward')) {
                moveLightboxBackward();
            }
        }
    }

    // if click on forward, increase the index by one
    function moveLightboxForward() {
        currentIndex += 1;
    
        // if we reach the end of the array, go back to the start
        if (lightboxData[currentIndex] === undefined) {
            currentIndex = 0;
        }
        
        updateLightbox();
    }

    // if click on backward, lower the index by one
    function moveLightboxBackward() {
        currentIndex -= 1;

        // if we reach the start of the array, go back to the end
        if (lightboxData[currentIndex] === undefined) {
            currentIndex = lightboxData.length - 1;
        }

        updateLightbox();
    }

    // update the content of the lightbox
    function updateLightbox() {
        lightboxMedia.innerHTML = lightboxData[currentIndex].media.outerHTML;
        lightboxTitle.innerText = lightboxData[currentIndex].title;
    }
    
    lightboxForward.addEventListener('click', moveLightboxForward);
    lightboxBackward.addEventListener('click', moveLightboxBackward);
    document.body.addEventListener('keydown', checkKey);

    lightboxMediaPlay(true);
}

export default lightboxNavigation;