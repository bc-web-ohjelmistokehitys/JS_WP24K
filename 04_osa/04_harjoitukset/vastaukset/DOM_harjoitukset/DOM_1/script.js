/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/

const changeText = () => {
  const textPlacement = document.getElementById('content');
  textPlacement.textContent = 'Hei maailma!';
};

// Saman voi ilmaista myös ilman muuttujaa näin
/*
const changeText = () => {
  document.getElementById('content').textContent= "Hei, maailma!";
}
*/