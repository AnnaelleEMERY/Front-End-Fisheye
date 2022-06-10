function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");

        const img = document.createElement("img");
        img.setAttribute("src", picture);

        const h2 = document.createElement("h2");
        h2.textContent = name;

        const h3 = document.createElement("h3");
        h3.textContent = city + ", " + country;

        const tag = document.createElement("p");
        tag.textContent = tagline;
        tag.classList.add("tag");

        const pr = document.createElement("p");
        pr.textContent = price + "€/jour";
        pr.classList.add("price");

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(tag);
        article.appendChild(pr);
        return article;
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM };
}
