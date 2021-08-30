"use strict";

const person = document.getElementsByClassName("character_name")[0];
const gender = document.getElementsByClassName("character_gender")[0];
const button = document.getElementsByClassName("btn")[0];
const species = document.getElementsByClassName("character_species")[0];
const status = document.getElementsByClassName("character_status")[0];
const image = document.getElementsByClassName("Character_image")[0];
const website = 'https://rickandmortyapi.com/api/character/';
let randomNumber = (Math.floor(Math.random()*670))+1;

button.addEventListener("click", generator);

function generator(){
    let link = website + String(randomNumber);
    async function getISS() {
        const response = await fetch(link);
        const data = await response.json();
        person.innerText= 'Name: ' + data.name;
        gender.innerText= 'Gender: ' + data.gender;
        status.innerText= 'Status: ' + data.status;
        species.innerText= 'Species: ' + data.species;
        image.src = data.image;
    }

    getISS()
    randomNumber = (Math.floor(Math.random()*670))+1;
}
