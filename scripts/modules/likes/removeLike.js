// decrement the likes amount by one
function removeLike(button, likes, photographerLikes, totalLikes) {
    button.innerText = likes - 1;
    photographerLikes.innerText = totalLikes - 1;

    // remove the class highlighting the button
    button.classList.remove('liked');
    // remove the time at which the button has been pressed
    sessionStorage.removeItem(`${button.previousElementSibling.textContent}`);
}

export default removeLike;