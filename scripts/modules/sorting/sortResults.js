import loadConstants from "../../utils/loadConstants.js";
import popularitySort from "./popularitySort.js";
import dateSort from "./dateSort.js";
import titleSort from "./titleSort.js";

function sortResults(sortBy) {
    const portfolioTiles = document.querySelectorAll(".portfolio__element");
    const mainPortfolio = document.querySelector("main.portfolio");

    const likes = [];
    const dates = [];
    const titles = [];
    let rankedTiles = [];

    // get all the likes/dates/titles in the page
    portfolioTiles.forEach((tile) => {
        likes.push(tile.querySelector(".portfolio__element-likes").textContent);
        dates.push(tile.querySelector(".portfolio__element-date").textContent);
        titles.push(
            tile.querySelector(".portfolio__element-title").textContent
        );
        tile.remove();
    });

    if (sortBy === "popularity") {
        rankedTiles = popularitySort(portfolioTiles, likes, mainPortfolio);
    }

    if (sortBy === "date") {
        rankedTiles = dateSort(portfolioTiles, dates, mainPortfolio);
    }

    if (sortBy === "title") {
        rankedTiles = titleSort(portfolioTiles, titles, mainPortfolio);
    }

    rankedTiles.forEach((tile) => {
        mainPortfolio.insertAdjacentHTML("beforeend", tile.outerHTML);
    });

    const { modalBasics, contactModal, sorter, likesButtons } =
        loadConstants("photographer");
    return { modalBasics, contactModal, sorter, likesButtons };
}

export default sortResults;
