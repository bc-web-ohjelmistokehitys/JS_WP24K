'use strict';
const addCarForm = document.querySelector('#addCar');
const searchCarForm = document.querySelector('#searchForm');
const cars = [];

class Car {
  constructor(licence, maker, model, owner, price, color) {
    this.licence = licence;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (e) => {
  e.preventDefault();

  const licence = document.querySelector('#licence').value;
  const maker = document.querySelector('#maker').value;
  const model = document.querySelector('#model').value;
  const owner = document.querySelector('#owner').value;
  const price = document.querySelector('#price').value;
  const color = document.querySelector('#color').value;

  const newCar = new Car(licence, maker, model, owner, price, color);
  cars.push(newCar);

  displayTable();

  addCarForm.reset();
};

const displayTable = () => {
  const table = document.querySelector('#carsTable');

  table.innerHTML = table.rows[0].innerHTML;

  cars.forEach((car) => {
    const row = table.insertRow(-1);

    Object.entries(car).forEach(([key, value]) => {
      const cell = row.insertCell(-1);
      if (key === 'color') {
        const colorDiv = document.createElement('div');
        colorDiv.style.width = '20px';
        colorDiv.style.height = '20px';
        colorDiv.style.backgroundColor = value;
        cell.appendChild(colorDiv);
      } else {
        cell.textContent = value;
      }
    });
  });
};

const searchCar = (e) => {
  e.preventDefault();
  const licenceQuery = document
    .querySelector('#search')
    .value.trim()
    .toLowerCase();

  const display = document.querySelector('#searchResult');

  if (!licenceQuery) {
    display.textContent = 'Please enter a license plate to search';
    return;
  }

  try {
    const result = cars.find(({ licence }) =>
      licence.toLowerCase().includes(licenceQuery)
    );

    display.textContent = result
      ? `Found ${result.maker}, ${result.model}, owned by ${result.owner} `
      : 'No car with that license plate';
  } catch (error) {
    console.error('Error occurred:', error);
    display.textContent = 'Something went wrong, try again';
  }
};

addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);
