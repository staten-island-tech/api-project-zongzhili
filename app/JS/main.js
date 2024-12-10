import "../CSS/style.css";

async function getData(url = "https://rickandmortyapi.com/api/character") {
  //returns a promise
  try {
    const response = await fetch(url); //guard clause

    if (response.status !== 200) {
      throw new Error(response);
    }
    const data = await response.json();
    console.log(data.results);
    //this is unique to THIS API
    const container = document.getElementById("container");
    container.innerHTML = ""; //clear

    data.results.forEach((character) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="cards rounded-[5px] mx-auto border-2 border-black w-[24%] h-[400px] mt-[15px] mb-[15px] text-center text-black bg-white hover:scale-105 transition-transform duration-300">
          <img src ="${character.image}" class="mx-auto mt-[20px]" alt="">
          <h1>${character.name} (${character.gender} ${character.species})</h1>
          <h2>Status: ${character.status} on ${character.location.name}<br> Origins: ${character.origin.name}</h2>
        </div>`
      );
    });
  } catch (error) {
    console.error(error);
    alert("An error occurred. Please try again.");
  }
}
getData();

async function searchCharacter() {
  const searchQuery = document.getElementById("search-input").value;
  if (!searchQuery) return alert("Please enter a character name to search.");

  const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
  getData(searchUrl);
}

document
  .getElementById("search-button")
  .addEventListener("click", searchCharacter);
