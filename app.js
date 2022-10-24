const URL = "https://hp-api.onrender.com/api/characters";
const container = document.getElementById('container');



window.addEventListener('DOMContentLoaded',getApi);

function getApi(){
    fetch(URL)
    .then(response => response.json())
    .then(response => response.forEach(element => {
        card(element);
    }
    ))
}
function card(element){

    const div = document.createElement("div");
    div.classList.add("card");
    
    
    const name = document.createElement("h1");
    name.textContent = element["name"];
    name.classList.add("name");
    
    const image = document.createElement("img");
    image.setAttribute('src',element["image"]);
    image.classList.add("image");

    const gender = document.createElement("h2");
    gender.textContent = element["gender"];
    gender.classList.add("gender");
    
    const age = document.createElement("h3");
    age.textContent = element["dateOfBirth"];
    
    
    
    div.appendChild(name);
    div.appendChild(gender);
    div.appendChild(age);
    div.appendChild(image);
    container.appendChild(div);
    
}
