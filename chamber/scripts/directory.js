const url = "https://timsansone.github.io/wdd230/chamber/json/directory.json"
const cards = document.querySelector("#busCards");

// -- Button Selection and Class Change (Grid vs. List display) -- //
const gridbutton = document.querySelector("#gridButton");
const listbutton = document.querySelector("#listButton");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("busGrid");
    display.classList.remove("busList");
});

listbutton.addEventListener("click", () => {
    display.classList.add("busList");
    display.classList.remove("busGrid");
});

// --  Pulling JSON Data and injecting it into HTML -- //

async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayBusinessData(data.businesses);
}

const displayBusinessData = (businesses) => {
    businesses.forEach((business => {
        const card = document.createElement("section");
        card.className = "businessCard";
        const businessLogo = document.createElement("img");
        const businessName = document.createElement("h3");
        const businessAddress = document.createElement("h5");
        const businessPhone = document.createElement("h5");
        const businessWeb = document.createElement("h5");
        const businessLevel = document.createElement("h6");
        businessLogo.setAttribute("src", business.links[0].logo);
        businessLogo.setAttribute("alt", `${business.name} logo`);
        businessLogo.setAttribute("loading", "lazy");
        businessLogo.setAttribute("width", "800px")
        businessLogo.setAttribute("height", "300px")
        businessName.innerHTML = business.name;
        businessAddress.innerHTML = business.address;
        businessPhone.innerHTML = business.phone;
        businessWeb.innerHTML = `${business.links[0].web}`
        businessLevel.innerHTML = `Level: ${business.membership}`;
        card.appendChild(businessLogo);
        card.appendChild(businessName); 
        card.appendChild(businessAddress); 
        card.appendChild(businessPhone);
        card.appendChild(businessWeb); 
        card.appendChild(businessLevel); 
        cards.appendChild(card);
    }))
}
getBusinessData(url);