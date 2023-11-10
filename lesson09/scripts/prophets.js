const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthInfo = document.createElement("p");
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthInfo.innerHTML = `Date of Birth: ${prophet.birthdate} <br>Place: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `portrait-of-${prophet.name}-${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "645px");
        portrait.setAttribute("height", "800px");
        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);
        cards.appendChild(card);

    }))
}

getProphetData(url);

