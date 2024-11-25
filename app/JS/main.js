import "/CSS/style.css";

async function getData() {
  //returns a promise
  try {
    const response = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    ); //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data);
      //this is unique to THIS API
      data.data.forEach((data) => console.log(data.name));

      const container = document.getElementById("container");

      const spellCards = data.data.filter(
        (spell) => spell.type === "Trap Card"
      );

      spellCards.forEach((data) => {
        container.insertAdjacentHTML(
          "beforeend",
          `<div id = "container">
          <img src ="${data.image_url}" alt="">
          <h1>${data.name}</h1>
          </div>`
        );
      });
    }
  } catch (error) {
    alert("hey i could not find that character");
  }
}

getData();
