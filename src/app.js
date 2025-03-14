//Erinevate funktsioonide import alafailidest
import { jokes, getCurrentJoke, nextJoke, prevJoke, getJokeIndex, setJokeIndex } from "./jokes.js";
import { memes, getCurrentMeme, nextMeme, prevMeme, getMemeIndex, setMemeIndex } from "./memes.js";
import { initBackgroundChanger } from "./backgroundChanger.js";
import { hideAll } from "./helpers.js";
import { getRandomMovie } from './movies.js';
  
//Eventlistenerid taustavärvi muutmiseks ning menüüvalikute peale reaageerimiseks
document.addEventListener("DOMContentLoaded", () => {
    initBackgroundChanger();
      
    document.getElementById("btnJoke").addEventListener("click", () => {
        setJokeIndex(0);  //Reset indeks
        showJoke();
    });

    document.getElementById("btnMeme").addEventListener("click", () => {
        setMemeIndex(0);  //Reset indeks
        showMeme();
    });
});

//Naljade esitamine
function showJoke() {
    hideAll();
    const output = document.getElementById("output");
    output.innerHTML = `<p id="joke-text">${getCurrentJoke()}</p>`;
    addNavButtons("joke"); //Edasi-tagasi liikumise nupud
}

//Meemide esitamine
function showMeme() {
    hideAll();
    const output = document.getElementById("output");
    output.innerHTML = `<img id="meme" src="${getCurrentMeme()}" alt="Meem" style="max-width:100%">`;
    addNavButtons("meme");
}

//Edasi-tagasi navigeerimisnuppude loomine, liikumine esimesest viimaseni ja tagasi
function addNavButtons(type) {
    const output = document.getElementById("output");
    const container = document.createElement("div");
    container.className = "button-container";
  
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "⬅ Previous";
  
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next ➡";
  
    if (type === "joke") {
        prevBtn.onclick = () => { prevJoke(); showJoke(); };
        nextBtn.onclick = () => { nextJoke(); showJoke(); };
        prevBtn.disabled = getJokeIndex() === 0;
        nextBtn.disabled = getJokeIndex() === jokes.length - 1;
    } else if (type === "meme") {
        prevBtn.onclick = () => { prevMeme(); showMeme(); };
        nextBtn.onclick = () => { nextMeme(); showMeme(); };
        prevBtn.disabled = getMemeIndex() === 0;
        nextBtn.disabled = getMemeIndex() === memes.length - 1;
    }
  
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);
    output.appendChild(container);
}

//Filmide esitamiseks
function showMovieRecommendation() {
    const movie = getRandomMovie();  // Valime suvalise filmi, ei tule järjekorras
    document.getElementById('output').innerHTML = `<p> ${movie.title} (${movie.year})</p>`;
}

//Nupu kuulaja, mis kutsub välja filmi kuvamise, bootstrapi nupu kaudu
const btnFilm = document.querySelector(".btn-dark");

btnFilm.addEventListener("click", showMovieRecommendation);