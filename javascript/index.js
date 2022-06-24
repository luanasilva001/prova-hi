//lendo arquivo json
const url = fetch('../data.json')

url.then(response => {
    return response.json();
}).then(data => {
    // let content = document.getElementById('demo');
    console.log(data)


    function makeUL(array) {
        // criando uma lista dos elementos json
        var list = document.createElement('ul');

        //utilizamos o object.keys para percorrer uma matriz com nomes
        //fazendo o mapeamento com forEach
        Object.keys(data).forEach(function (key) {

            //cria o item da lista:
            var item = document.createElement('li');

            //cria input
            var checkbox = document.createElement('input');

            //do tipo checkbox
            checkbox.type = "checkbox";

            var element = document.createElement("div");
            document.getElementById("demo").setAttribute("class", "democlass"); 


            checkbox.appendChild(element);
            item.appendChild(checkbox);


            // prende os valores do item:
            item.appendChild(document.createTextNode(data[key].name));


            // Add it to the list:
            list.appendChild(item);

        })

        // retorna a construção da lista
        return list;
     }

    //adicina os elementos ao dom
    document.getElementById('demo').appendChild(makeUL(data[0]));

}).catch(err => {
    console.log(err)
});