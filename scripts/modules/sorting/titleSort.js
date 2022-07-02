function titleSort(tiles, titles) {
    titles = titles.map(title => title.toLowerCase());
    const unrankedTitles = titles.slice();
    // ranks the titles in the alphabetical order
    const rankedTitles = titles.sort((a, b) => a.localeCompare(b));

    const rankedTiles = [];
    
    for(let i = 0; i < tiles.length; i += 1) {
        // look for the index of the ranked title in the unranked titles
        const index = unrankedTitles.findIndex(title => title === rankedTitles[i]);
        // remove the title in the unranked titles to prevent duplicates
        unrankedTitles[index] = -1;
        // since the order of the unranked titles and the unranked tiles match, we can rank the tiles
        rankedTiles.push(tiles[index]);
    }

    return rankedTiles;
}

export default titleSort;