import getLightboxData from './getLightboxData.js';
import identifyId from './identifyId.js';
import lightboxNavigation from './lightboxNavigation.js';

function fillLightbox(btn, modalBasics) {
    const lightboxMedia = document.querySelector('.lightbox__media-container');
    const lightboxTitle = document.querySelector('.lightbox__media-title');

    // get all the data required to fill the lightbox
    const lightboxData = getLightboxData(modalBasics);

    //identify the media that opened the lightbox
    const startId = identifyId(btn, modalBasics);
    
    // fill the lightbox
    lightboxMedia.innerHTML = lightboxData[startId].media.outerHTML;
    lightboxTitle.innerText = lightboxData[startId].title;

    // add event listeners for the navigation
    lightboxNavigation(lightboxData, startId, lightboxMedia, lightboxTitle);
}

export default fillLightbox;