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
          `<div id="cards" class="rounded-[5px] mx-auto border-2 border-black w-[24%] h-[400px] mt-[15px] mb-[15px] text-center text-black">
          <img src ="${character.image}" class="mx-auto mt-5" alt="">
          <h1>${character.name} (${character.gender} ${character.species})</h1>
          <h2>Status: ${character.status} on ${character.location.name}<br> Origins: ${character.origin.name}</h2>
          </div>`
        );
      });
    }
  } catch (error) {
    alert("hey i could not find that character");
  }
}

getData();

// async function searchCharacter() {
//   const searchQuery = document.getElementById("search-input").value.trim();
//   if (!searchQuery) return alert("Please enter a character name to search.");

//   const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`; // Modify the URL to include query params

//   getData(searchUrl); // Make the API call with the search query
// }

// // Event listener for the search button
// document
//   .getElementById("search-button")
//   .addEventListener("click", searchCharacter);

// // Event listener for the Enter key to trigger the search
// document
//   .getElementById("search-input")
//   .addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       searchCharacter();
//     }
//   });
