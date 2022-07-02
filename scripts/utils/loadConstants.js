function sharedConstants() {
    const ARIA = {
        filters: document.querySelectorAll('.filter__option'),
        skipLinks: document.querySelectorAll('.skip-link'),
    };

    const filters = document.querySelectorAll('.filter__option');

    return { ARIA  };
}

function photographerConstants() {
    const modalBasics = {
        general: {
            closeButtons: document.querySelectorAll('.close-button'),
        },
        contact: {
            openButton: document.getElementById('contact-button'),
            background: document.getElementById('contact-form__background'),
        },
        lightbox: {
            openButtons: document.querySelectorAll('.portfolio__element-media'),
            background: document.getElementById('lightbox__background'),
        },
    };
    
    const contactModal = {
        form: document.forms.contact,
        inputs: {
            all: document.querySelectorAll('input.contact-form__text-input, textarea.contact-form__text-input'),
            message: document.getElementById('contact-form__message'),
        },
        submit: {
            status: sessionStorage.getItem('formStatus'),
            button: document.getElementById('contact-form__submit-button'),
        },
    };
    
    const sorter = document.getElementById('sorting-menu');

    const likesButtons = document.querySelectorAll('.portfolio__element-likes');

    return { modalBasics, contactModal, sorter, likesButtons };
}

function loadConstants(request) {
    let { ARIA , modalBasics, contactModal, sorter, likesButtons } = {};

    if (request === 'all') {
        ({ ARIA  } = sharedConstants());
        ({ modalBasics, contactModal, sorter, likesButtons } = photographerConstants());
        return { ARIA , modalBasics, contactModal, sorter, likesButtons };
    }
    if (request === 'shared') {
        ({ ARIA  } = sharedConstants());
        return { ARIA  };
    }
    if (request === 'photographer') {
        ({ modalBasics, contactModal, sorter, likesButtons } = photographerConstants());
        return { modalBasics, contactModal, sorter, likesButtons };
    }
}

export default loadConstants;