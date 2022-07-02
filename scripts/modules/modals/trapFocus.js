// trap the keyboard navigation in the modal currently opened
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll('.close-button, input, textarea, button, .lightbox__forward, .lightbox__backward');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    focusableElements[1].focus();

    focusableElements.forEach(element => {
        element.addEventListener('keydown', event => {
            if (event.key === 'Tab') {
                if (event.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        event.preventDefault();
                        lastFocusableElement.focus();
                    }
                }
                else {
                    if (document.activeElement === lastFocusableElement) {
                        event.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }
        });
    });
}

export default trapFocus;