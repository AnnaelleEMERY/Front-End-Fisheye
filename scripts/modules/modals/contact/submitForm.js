import submitInputCheck from './submitInputCheck.js';
import errorMessage from './errorMessage.js';
import confirmFormSubmit from './confirmFormSubmit.js';

// when the submit button is pressed
function submitForm(contactFormInputs, form, formSubmit) {
    // check if the form is complete and valid
    const isFormValid = submitInputCheck(contactFormInputs);

    if (isFormValid.checksum) {
        // if the button is the submit one, and not the close one
        if (!formSubmit.classList.contains('close-button')) {
            // send the field content to the console
            contactFormInputs.forEach(input => {
                console.log(`${input.name}: ${input.value}`);
            });
        }

        confirmFormSubmit(form, formSubmit);
    }

    // if form invalid, add error messages where needed
    Object.keys(isFormValid).forEach(key => {
        if (key === 'checksum') { return; }

        errorMessage(isFormValid[key].element, isFormValid[key].valid);
    })
}

export default submitForm;