import { enableScroll } from './toggleScroll.js';
import lightboxMediaPlay from './lightbox/lightboxMediaPlay.js';

// close both modals, doesn't matter which one was opened since only one can be opened at once
function closeModal(contactModalBackground, lightboxModalBackground) {
    contactModalBackground.style.display = 'none';
    lightboxModalBackground.style.display = 'none';
    // remove the space bar to play video event listener
    lightboxMediaPlay(false);
    enableScroll();
}

export default closeModal;