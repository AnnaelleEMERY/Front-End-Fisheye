// get all the data required to fill the lightbox
function getLightboxData(modalBasics) {
    const lightboxData = []

    // for each elements of the portfolio
    modalBasics.lightbox.openButtons.forEach(element => {
        // clone the element so one doesn't affect the other
        const media = element.cloneNode(false);
        // remove all the classes and set just one
        media.className = 'lightbox__media';

        // if the media is a video, add controls
        if (media.tagName === 'VIDEO') {
            media.setAttribute('controls', '');
        }

        // get the title corresponding to the media
        const title = element.parentElement.lastElementChild.querySelector('.portfolio__element-title').innerText;

        lightboxData.push({
            'media': media,
            'title': title
        });
    });

    return lightboxData;
}

export default getLightboxData;