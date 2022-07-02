import { regexConst } from '../../../utils/regexConst.js';
import errorMessage from './errorMessage.js';

// when the user goes to the next input, check the validity of the previous one
function focusOutInputCheck(input) {
    if (input.name === 'firstName') {
        errorMessage(input, regexConst.nameRegex.test(input.value));
    }

    if (input.name === 'lastName') {
        errorMessage(input, regexConst.nameRegex.test(input.value));
    }

    if (input.name === 'email') {
        errorMessage(input, regexConst.emailRegex.test(input.value));
    }

    if (input.name === 'message') {
        errorMessage(input, input.value.length >= 20);
    }
}

export default focusOutInputCheck;