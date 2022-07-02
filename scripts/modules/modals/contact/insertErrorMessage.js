function insertErrorMessage(input, errorMessage) {
    // if there's already an error, doesn't add more
    const alreadyError = document.getElementById(`${input.name}-error-message`);
    if (alreadyError) { return; }

    input.insertAdjacentHTML('afterend', `<p class="contact-form__error-message" id="${input.name}-error-message">${errorMessage}.</p>`);
    input.classList.add('contact-form__error-input');
}

export default insertErrorMessage;