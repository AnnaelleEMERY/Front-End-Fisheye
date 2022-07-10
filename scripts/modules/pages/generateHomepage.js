import loadConstants from "../../utils/loadConstants.js";

function generateHomepage(photographers) {
    let injectHTML = "";

    // generate the homepage photographer by photographer
    for (let i = 0; i < photographers.length; i += 1) {
        // generate the main part of the photographer header
        let photographerMain = `<a href="photographer/index.html?p=${encodeURIComponent(
            photographers[i].id
        )}" aria-label="${photographers[i].id}">
                                    <figure>
                                        <img src="${
                                            photographers[i].portrait
                                        }" alt="${
            photographers[i].name
        }" class="home-photographer__picture">
            
                                        <figcaption>
                                            <h2 class="home-photographer__name">${
                                                photographers[i].name
                                            }</h2>
                                        </figcaption>
                                    </figure>
                                </a>

                                <div tabindex="0">
                                    <p class="home-photographer__location">${
                                        photographers[i].location
                                    }</p>
                                    <p class="home-photographer__description">${
                                        photographers[i].tagline
                                    }</p>
                                    <p class="home-photographer__pricing">${
                                        photographers[i].price
                                    }</p>
                                </div>`;

        // put everything together
        let photographerFull = `<article id="photographer-${i}" class="home-photographer">
                                    ${photographerMain}
                                </article>`;

        injectHTML += photographerFull;
    }

    // add the photographers tiles to the page
    const main = document.getElementById("main");
    main.insertAdjacentHTML("beforeend", injectHTML);

    // return constants to update the ones that change
    const { ARIA } = loadConstants("shared");
    return { ARIA };
}

export default generateHomepage;
