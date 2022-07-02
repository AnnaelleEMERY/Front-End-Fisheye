export class Media {
    constructor(media, title, alt, tags, likes, date) {
        this._path = media;
        this._title = title;
        this._alt = alt;
        this._likes = likes;
        this._tag = tags;
        this._date = date;
    }

    get path() {
        return `/assets/images/photographers/media/${this._path}`;
    }

    get title() {
        return this._title;
    }

    get alt() {
        return this._alt;
    }

    get likes() {
        return this._likes;
    }

    get tag() {
        return this._tag;
    }

    get date() {
        return this._date;
    }
}