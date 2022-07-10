import linkMedia from "../modules/api/linkMedia.js";
import sumLikes from "../modules/api/sumLikes.js";

export class Photographer {
    constructor(photographer, media) {
        this._id = photographer.id;
        this._portrait = photographer.portrait;
        this._name = photographer.name;
        this._city = photographer.city;
        this._country = photographer.country;
        this._tagline = photographer.tagline;
        this._price = photographer.price;
        this._media = linkMedia(media, photographer.id);
        this._likes = sumLikes(media, photographer.id);
    }

    set media(array) {
        if (Array.isArray(array)) {
            this._media = array;
        }
    }

    get id() {
        return this._id;
    }

    get portrait() {
        return `/assets/images/photographers/portrait/${this._portrait}`;
    }

    get name() {
        return this._name;
    }

    get location() {
        return `${this._city}, ${this._country}`;
    }

    get tagline() {
        return this._tagline;
    }

    get price() {
        return `${this._price}€/jour`;
    }

    get tags() {
        return this._tags;
    }

    get media() {
        return this._media;
    }

    get likes() {
        return this._likes;
    }
}
