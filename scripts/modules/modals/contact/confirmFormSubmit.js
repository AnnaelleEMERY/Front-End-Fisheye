// if the form is submitted
function confirmFormSubmit(form, formSubmit) {
    const formTitle = document.getElementById("js-contact-title");

    // remove the content of the form except for the submit button
    while (form.childElementCount > 1) {
        form.firstElementChild.remove();
    }

    // replace the content of the remaining form to confirm its submission
    formTitle.innerText = "Merci de votre email !";
    formSubmit.innerText = "Fermer";
    formSubmit.classList.add("close-button");
}

export default confirmFormSubmit;
