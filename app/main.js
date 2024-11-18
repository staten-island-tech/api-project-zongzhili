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
      //document.querySelector("div").insertAdjacentHTML("afterbegin", `<h1>${agent.displayName}</h1>)
    }
  } catch (error) {
    alert("hey i could not find that akatsuki");
  }
}

getData();

const container = document.querySelector("container");
akatsuki.forEach((characters) => Container.adjacentHTML);
