import "./style.css";

async function getData() {
  //returns a promise
  try {
    const response = await fetch("https://narutodb.xyz/api/akatsuki"); //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data);
      //this is unique to THIS API
      data.akatsuki.forEach((akatsuki) => console.log(akatsuki.name));

      const container = document.getElementById("container");

      // akatsuki.forEach((characters) => {
      //   container.adjacentHTML(
      //     "afterbegin",
      //     `<div>
      //     <h1>${characters.name}</h1>
      //     </div>`
      //   );
      // });
    }
  } catch (error) {
    alert("hey i could not find that akatsuki");
  }
}

getData();
