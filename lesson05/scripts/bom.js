const chapterInput = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const chapterList = document.querySelector("#list");

addButton.addEventListener("click", () => {
    if (chapterInput.value === "") {
        console.log("Error: Input is Blank");
        chapterInput.focus();
    }

    else {
        const newItem = chapterInput.value;
        chapterInput.value = "";
        const listItem = document.createElement("li")
        const deleteItem = document.createElement("button");

        listItem.textContent = newItem;
        chapterList.appendChild(listItem)
        deleteItem.textContent = "❌";
        listItem.appendChild(deleteItem);
        deleteItem.addEventListener("click", () => {
            chapterList.removeChild(listItem);

        })
        chapterInput.focus();
    }
})