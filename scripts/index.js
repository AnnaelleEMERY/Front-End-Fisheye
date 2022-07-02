import loadConstants from "../scripts/utils/loadConstants.js";
import buildPhotographer from "./modules/api/buildPhotographer.js";

import generateHomepage from "./modules/pages/generateHomePage.js";
import generatePhotographerPage from "./modules/pages/generatePhotographerPage.js";
import photographerPage from "./modules/pages/photographerPage.js";

import focusSkipLinkTarget from "./modules/aria/focusSkipLinkTarget.js";

// for dev - to delete when going to prod
sessionStorage.clear();

// import constants
let { ARIA, modalBasics, contactModal, sorter, likesButtons } =
    loadConstants("all");

// indentify the page
const path = location.pathname.replace("index.html", "");

// fetch data from the API
const photographers = buildPhotographer();

photographers.then((photographers) => {
    // generate pages
    if (path === "/") {
        ({ ARIA } = generateHomepage(photographers));
    }

    if (path === "/photographer/") {
        ({ ARIA, modalBasics, contactModal, sorter, likesButtons } =
            generatePhotographerPage(photographers));
        photographerPage(modalBasics, contactModal, sorter, likesButtons);
    }

    // general ARIA
    // when the user uses a skip link
    ARIA.skipLinks.forEach((link) => {
        link.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                focusSkipLinkTarget(link, event);
            }
        });
    });
});
