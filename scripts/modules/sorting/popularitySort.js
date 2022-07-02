function popularitySort(tiles, likes) {
    likes = likes.map(like => Number.parseInt(like));
    const unrankedLikes = likes.slice();
    // ranks the likes in descending order
    const rankedLikes = likes.sort((a, b) => b - a);

    const rankedTiles = [];
    
    for(let i = 0; i < tiles.length; i += 1) {
        // look for the index of the ranked like in the unranked likes
        const index = unrankedLikes.findIndex(like => like === rankedLikes[i]);
        // remove the like in the unranked likes to prevent duplicates
        unrankedLikes[index] = -1;
        // since the order of the unranked likes and the unranked tiles match, we can rank the tiles
        rankedTiles.push(tiles[index]);
    }

    return rankedTiles;
}

export default popularitySort;