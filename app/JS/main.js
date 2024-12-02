import "../CSS/style.css";

async function getData() {
  //returns a promise
  try {
    const response = await fetch("https://api.api-onepiece.com/v2/fruits/en"); //guard clause

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    } else {
      const data = await response.json();
      data.forEach((fruit) => {
        console.log(fruit.name);
      });
    }
    //this is unique to THIS API
    const container = document.getElementById("container");
    container.innerHTML = ""; //clear

    // data.forEach((fruit) => {
    //   container.insertAdjacentHTML(
    //     "beforeend",
    //     `<div class="cards rounded-[5px] mx-auto border-2 border-black w-[24%] h-[400px] mt-[15px] mb-[15px] text-center text-black">
    //       <h1>${fruit.name} (${fruit.roman_name})<br>Type: ${fruit.type}</h1>
    //       <h2>${fruit.description}</h2>
    //     </div>`
    //   );
    // });
  } catch (error) {
    console.error(error);
    alert("An error occurred. Please try again.");
  }
}

// async function searchCharacter() {
//   const searchQuery = document.getElementById("search-input").value;
//   if (!searchQuery) return alert("Please enter a character name to search.");

//   const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
//   getData(searchUrl);
// }

// document
//   .getElementById("search-button")
//   .addEventListener("click", searchCharacter);

getData();
