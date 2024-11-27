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
          `<div id="cards" class="rounded-[5px] mx-auto border-2 border-black w-[24%] h-[375px] mt-[15px] mb-[15px] text-center text-black">
          <img src ="${character.image}" class="mx-auto mt-5" alt="">
          <h1>${character.name}</h1>
          <h2>Status: ${character.status}</h2>
          </div>`
        );
      });
    }
  } catch (error) {
    alert("hey i could not find that character");
  }
}

getData();
