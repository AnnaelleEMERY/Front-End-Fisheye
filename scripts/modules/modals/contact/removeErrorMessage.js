function removeErrorMessage(input) {
    const errorMessage = document.getElementById(`${input.name}-error-message`);

    // if there's an error message, removes the error
    if (errorMessage) {
        errorMessage.previousElementSibling.classList.remove('contact-form__error-input');
        errorMessage.remove();
    }
}

export default removeErrorMessage;