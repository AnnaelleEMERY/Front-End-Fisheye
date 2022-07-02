function sumLikes(media, photographerId) {
    const photographerLikes = [];

    media.forEach(m => {
        // if the media has the photographer ID linked to it
        if(m.photographerId === photographerId) {
            photographerLikes.push(m.likes||0);
        }
    })

    // add up all the likes together
    return photographerLikes.reduce((a, b) => a + b);
}

export default sumLikes;