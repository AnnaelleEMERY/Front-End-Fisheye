import { Image } from '../../utils/image.js';
import { Video } from '../../utils/video.js';

function linkMedia(media, photographerId) {
    const photographerMedia = [];

    media.forEach(m => {
        // if the media has the photographer ID linked to it
        if(m.photographerId === photographerId) {
            // if the media is an image, create an image object
            if(m.image) {
                photographerMedia.push(new Image(m.image, m.title, m.alt, m.tags, m.likes, m.date))
            }
            // if the media is a video, create a video object
            if(m.video) {
                photographerMedia.push(new Video(m.video, m.title, m.alt, m.tags, m.likes, m.date))
            }
        }
    })

    return photographerMedia;
}

export default linkMedia;