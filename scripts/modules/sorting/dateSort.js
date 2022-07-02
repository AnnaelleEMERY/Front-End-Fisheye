function dateSort(tiles, dates) {
    dates = dates.map(date => new Date(date));
    const unrankedDates = dates.slice();
    // rank the dates in the reverse chronological order
    const rankedDates = dates.sort((a, b) => b - a);

    const rankedTiles = [];
    
    for (let i = 0; i < tiles.length; i += 1) {
        // look for the index of the ranked date in the unranked dates
        const index = unrankedDates.findIndex(date => date === rankedDates[i]);
        // remove the date in the unranked dates to prevent duplicates
        unrankedDates[index] = -1;
        // since the order of the unranked dates and the unranked tiles match, we can rank the tiles
        rankedTiles.push(tiles[index]);
    }

    return rankedTiles;
}

export default dateSort;