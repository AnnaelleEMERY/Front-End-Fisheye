import { Media } from './media.js';

export class Video extends Media {
    constructor(media, title, alt, tag, likes, date) {
        super(media, title, alt, tag, likes, date);
    }
}