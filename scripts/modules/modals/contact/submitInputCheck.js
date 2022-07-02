import { regexConst } from '../../../utils/regexConst.js';

// checks the validity of the form
function submitInputCheck(contactFormInputs) {
    if (contactFormInputs.length === 0) { return false; }

    const isFormValid = {
        firstName: {
            valid: regexConst.nameRegex.test(contactFormInputs[0].value),
            element: contactFormInputs[0],
        },
        lastName: {
            valid: regexConst.nameRegex.test(contactFormInputs[1].value),
            element: contactFormInputs[1],
        },
        email: {
            valid: regexConst.emailRegex.test(contactFormInputs[2].value),
            element: contactFormInputs[2],
        },
        message: {
            valid: contactFormInputs[3].value.length >= 20,
            element: contactFormInputs[3],
        },
    };

    // add a checksum to sum up the state of the form
    const checksum = [];
    Object.keys(isFormValid).forEach(key => checksum.push(isFormValid[key].valid));
    isFormValid.checksum = checksum.reduce((a, b) => a && b);
    
    return isFormValid;
}

export default submitInputCheck;