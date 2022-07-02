import trapFocus from "./trapFocus.js";
import { disableScroll } from "./toggleScroll.js";
import escapeModal from "./escapeModal.js";

// open any modal
function openModal(modalBackground) {
    modalBackground.style.display = "block";
    trapFocus(modalBackground);
    disableScroll();
    escapeModal(modalBackground);
}

export default openModal;
