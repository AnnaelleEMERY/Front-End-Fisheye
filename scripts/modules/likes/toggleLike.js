import checkIfLiked from './checkIfLiked.js';
import addLike from './addLike.js';
import removeLike from './removeLike.js';

// when a like button is pressed
function toggleLike(button) {
    // check if the user already liked the media
    const isLiked = checkIfLiked(button);

    // get the media and total amount of likes
    const likes = Number.parseInt(button.innerText);
    const photographerLikes = document.getElementById('js-photographer-likes');
    const totalLikes = Number.parseInt(photographerLikes.innerText);

    // if it hasn't been liked
    if (isLiked === false) {
        addLike(button, likes, photographerLikes, totalLikes);
    }

    // if it has been liked for less than 10s, allow the user to remove the like
    if (isLiked === 'pending') {
        removeLike(button, likes, photographerLikes, totalLikes)
    }

    // else block the likes counter
    if (isLiked === true) {
        return;
    }
}

export default toggleLike;