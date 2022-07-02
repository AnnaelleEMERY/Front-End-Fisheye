import closeModal from "./closeModal.js";

// add event listener so if an user press escape it closes the currently opened modal
function escapeModal(modalBackground) {
    function checkKey(event) {
        if (event.key === "Escape") {
            if (modalBackground) {
                closeModal(modalBackground, modalBackground);
            }
        }
    }

    document.body.addEventListener("keydown", checkKey);
}

export default escapeModal;
