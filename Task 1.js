// Task 7.1

const priceFruits = {
    apple: 100,
    watermelon: 50,
    banana: 70,
    orange: 60,
}

const fruitsAndVegetables = Object.create(priceFruits);

fruitsAndVegetables.cucumber = 55;
fruitsAndVegetables.tomato = 85;

function ownKeys(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${key}: ${object[key]}`);
    }
}
}
ownKeys(fruitsAndVegetables)