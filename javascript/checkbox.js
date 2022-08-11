function createCheckbox(name, id) {
    const label = document.createElement("label");

    label.setAttribute('for', id)
    label.className = 'lbl'
    
    const checkbox = document.createElement("input");
    
    checkbox.type = "checkbox";
    
    checkbox.setAttribute('id', id)

    checkbox.addEventListener('click', handleClick)
    
    label.appendChild(checkbox);
    
    label.appendChild(document.createTextNode(name));

    return label;
}

function handleClick(){
    const parent = this.parentElement.parentElement;

    const ul = parent.querySelector('ul')

    if(ul){
        const children = ul.querySelectorAll('input[type="checkbox"]')
    
        children.forEach(element => {
            checked(element, this.checked)
        });
    }

}

function checked(element, state){
    element.checked = state;
}

export default createCheckbox;
