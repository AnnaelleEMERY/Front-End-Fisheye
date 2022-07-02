// count the amount of text in the message field and update the required amount counter
function textCounter(contactFormMessage) {
    const characterAmount = contactFormMessage.value.length;
    const characterCounter = document.getElementById('character-counter');

    const requiredCharacterAmount = 20 - characterAmount;
    if (requiredCharacterAmount < 0) { return; }

    characterCounter.innerText = `Caractères requis: ${requiredCharacterAmount}`;
}

export default textCounter;