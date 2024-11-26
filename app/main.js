import "/style.css";

async function getData() {
  //returns a promise
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character"); //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data);
      //this is unique to THIS API
      data.results.forEach((results) => console.log(results.name));

      const container = document.getElementById("container");

      data.results.forEach((character) => {
        container.insertAdjacentHTML(
          "beforeend",
          `<div id = "container">
          <img src ="${character.image}" alt="">
          <h1>${character.name} ${character.status}</h1>
          </div>`
        );
      });
    }
  } catch (error) {
    alert("hey i could not find that character");
  }
}

getData();
