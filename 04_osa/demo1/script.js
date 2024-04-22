
//elementtien poimiminen domista:
const text = document.querySelector('h1');
const text2 = document.querySelector('#first');
const text3 = document.querySelector('.second');

const longText = document.querySelectorAll('p');

console.log(text.textContent);
console.log(text2.textContent);
console.log(text3.textContent);
console.log(longText);

// funktioiden määrittely:
const myFunction1 = () => alert('onclick event, funktio sisällytetty HTML-elementtiin');

const myFunction2 = () => alert('addeventlistener eli tapahtumankäsittelijä esimerkki');

// näin nappi-elementti valitaan:
const button = document.querySelector('#myButton');

// tapahtumakäsittelijän käyttäminen:
button.addEventListener("click", myFunction2);

