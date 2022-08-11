import handleList from "./handleList.js"

//lendo arquivo json
const url = fetch("../json/__data.json");

url
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    function renderMaster() {
      const list = handleList(Object.values(data))

      return list;
    }

    document.getElementById("container").appendChild(renderMaster());
  })
  .catch((err) => {
    console.log(err);
  });
