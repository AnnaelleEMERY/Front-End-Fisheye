import sortResults from "../../../scripts/modules/sorting/sortResults.js";

import toggleLike from "../likes/toggleLike.js";

import closeModal from "../../modules/modals/closeModal.js";
import openModal from "../../modules/modals/openModal.js";

import focusOutInputCheck from "../../modules/modals/contact/focusOutInputCheck.js";
import textCounter from "../../modules/modals/contact/textCounter.js";
import submitForm from "../../modules/modals/contact/submitForm.js";

import fillLightbox from "../../modules/modals/lightbox/fillLightbox.js";
import loadConstants from "../../../scripts/utils/loadConstants.js";

// update the various event listeners that are deleted/modified when the page is updated
function updatePortfolio(modalBasics, contactModal, sorter, likesButtons) {
    // sort by menu
    ({ modalBasics, contactModal, sorter, likesButtons } = sortResults(
        sorter.value
    ));

    //lightbox modal open
    modalBasics.lightbox.openButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            openModal(modalBasics.lightbox.background);
            fillLightbox(btn, modalBasics);
        });
        btn.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                openModal(modalBasics.lightbox.background);
                fillLightbox(btn, modalBasics);
            }
        });
    });

    // likes
    likesButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggleLike(btn);
        });
        btn.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                toggleLike(btn);
            }
        });
    });

    return { modalBasics, contactModal, sorter, likesButtons };
}

export function updateModalsClose(modalBasics) {
    // modals close
    modalBasics.general.closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            closeModal(
                modalBasics.contact.background,
                modalBasics.lightbox.background
            );
        });
        btn.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                closeModal(
                    modalBasics.contact.background,
                    modalBasics.lightbox.background
                );
            }
        });
    });
}

function photographerPage(modalBasics, contactModal, sorter, likesButtons) {
    // sort portfolio by page default
    ({ modalBasics, contactModal, sorter, likesButtons } = updatePortfolio(
        modalBasics,
        contactModal,
        sorter,
        likesButtons
    ));

    // when the user changes the value of the sorting menu
    sorter.addEventListener("input", () => {
        ({ modalBasics, contactModal, sorter, likesButtons } = updatePortfolio(
            modalBasics,
            contactModal,
            sorter,
            likesButtons
        ));
    });

    updateModalsClose(modalBasics);

    // contact modal open
    modalBasics.contact.openButton.addEventListener("click", () => {
        openModal(modalBasics.contact.background);
    });

    // contact modal validation
    if (contactModal.form) {
        // checks inputs on focus out
        contactModal.inputs.all.forEach((input) => {
            input.addEventListener("focusout", () => {
                focusOutInputCheck(input);
            });
        });

        // count amount of characters in the message field
        ["keyup", "keydown"].forEach((event) => {
            contactModal.inputs.message.addEventListener(event, () => {
                textCounter(contactModal.inputs.message);
            });
        });

        // when submitting contact modal
        contactModal.submit.button.addEventListener("click", () => {
            submitForm(
                contactModal.inputs.all,
                contactModal.form,
                contactModal.submit.button
            );
            ({ modalBasics, contactModal, sorter, likesButtons } =
                loadConstants("photographer"));
            updateModalsClose(modalBasics);
        });
    }
}

export default photographerPage;
