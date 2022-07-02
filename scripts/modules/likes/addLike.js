// increment the likes amount by one
function addLike(button, likes, photographerLikes, totalLikes) {
    button.innerText = likes + 1;
    photographerLikes.innerText = totalLikes + 1;

    // add a class to highlight the button
    button.classList.add('liked');
    // store the time at which the button has been pressed
    sessionStorage.setItem(`${button.previousElementSibling.textContent}`, `${Date.now()}`);
   
    // remove the class highlighting the button after 10s
    setTimeout(() => {
        button.classList.remove('liked');
    }, 10000);
}

export default addLike;