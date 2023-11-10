const baseURL = "https://timsansone.github.io/wdd230/";
const linksURL = "https://timsansone.github.io/wdd230/data/links.json"
const mainList = document.querySelector(".list");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data);
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((weekLesson => {
        const listItem = document.createElement("li");
        listItem.innerHTML = 'Learning Activity ${weekLesson.lesson}: '
        let linkList = weekLesson.links;
        linkList.forEach((link => {
            const anchor = document.createElement("a");
            anchor.setAttribute("href", link.url);
            anchor.setAttribute("target", "_blank");
            anchor.innerHTML = '${link.title} | ';
            listItem.appendChild(anchor);
            console.log(anchor)
        }));
        mainList.appendChild(listItem);
    }))
}

getLinks(baseURL);