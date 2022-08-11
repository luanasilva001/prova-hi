import createCheckbox from "./checkbox.js"

function createItem(name, id) {
    const item = document.createElement("li");

    const checkbox = createCheckbox(name, id);

    item.appendChild(checkbox);

    return item;
}

export default createItem;
