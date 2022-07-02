//identify the media that opened the lightbox
function identifyId(btn, modalBasics) {
    let i = 0;
    let startId = undefined;

    // the element that opened the lightbox is the same as the button
    modalBasics.lightbox.openButtons.forEach(element => {
        if(element === btn) {
            startId = i;
        }
        i += 1;
    });

    return startId;
}

export default identifyId;