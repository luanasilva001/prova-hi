import itens from "./createItem.js"

function handleList(list) {
    const listUL = document.createElement("ul");

    listUL.setAttribute("id", `ul-${list[0].level}`);

    list.forEach(item => {
        const li = itens(item.name, item.id)

        if (Object.entries(item.children).length !== 0) {
            const children = handleList(Object.values(item.children))

            li.appendChild(children)
        }
        listUL.appendChild(li);

    })

    return listUL;
}

export default handleList;
