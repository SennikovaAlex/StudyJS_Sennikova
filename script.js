let money = 80000; 
let income = 'Фриланс';
let addExpenses = 'Интернет, Подписки, Телефон, Метро, Квартира';
let deposit = true; 
let mission = 10000000; 
let period = 12;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(typeof addExpenses);
console.log(addExpenses);

let budgetDay = money/30; 
console.log(Math.round(budgetDay));







//alert ('Привет, я важное сообщение!');
//console.log('Привет, я консоль, я буду тебе помогать');


