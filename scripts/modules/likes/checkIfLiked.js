// check if the user already liked the media
function checkIfLiked(button) {
    const hasBeenClicked = sessionStorage.getItem(`${button.previousElementSibling.textContent}`);
    const timeClicked = Number.parseInt(hasBeenClicked);

    // if the user already liked
    if(button.classList.contains('liked')) {
        if (hasBeenClicked !== null) {
            // and if it's been around 10s
            if(Date.now() - timeClicked >= 9080) {
                button.classList.remove('liked');
                // block the like counter
                return true;
            }
            // if it's been less than 10s
            return 'pending';
        }
    }

    if(hasBeenClicked === null) {
        return false;
    }

    return true;
}

export default checkIfLiked;