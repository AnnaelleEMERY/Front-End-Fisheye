import insertErrorMessage from './insertErrorMessage.js';
import removeErrorMessage from './removeErrorMessage.js';

// if the field is properly filled, remove the potential error message
// if the field is wrongly filled, add an error message
function errorMessage(input, isFieldValid) {
    if (input.name === 'firstName' && isFieldValid === false) {
        insertErrorMessage(input, 'Veuillez renseigner votre prénom');
    }

    if (input.name === 'lastName' && isFieldValid === false) {
        insertErrorMessage(input, 'Veuillez renseigner votre nom');
    }

    if (input.name === 'email' && isFieldValid === false) {
        insertErrorMessage(input, 'Veuillez renseigner votre email valide');
    }

    if (input.name === 'message' && isFieldValid === false) {
        insertErrorMessage(input, 'Veuillez ajouter un message');
    }

    if (input.name === 'firstName' && isFieldValid === true) {
        removeErrorMessage(input);
    }

    if (input.name === 'lastName' && isFieldValid === true) {
        removeErrorMessage(input);
    }

    if (input.name === 'email' && isFieldValid === true) {
        removeErrorMessage(input);
    }

    if (input.name === 'message' && isFieldValid === true) {
        removeErrorMessage(input);
    }
}

export default errorMessage;