// Task 7.2

const priceFruits = {
    apple: 100,
    watermelon: 50,
    banana: 70,
    orange: 60,
}

function trueOrFalse(object, fruit) {
    return fruit in object;
}

console.log(trueOrFalse(priceFruits, 'fds'));