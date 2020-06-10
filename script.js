'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) //Если число конечное то тру
};

let income = 'Фриланс';
let period = 12;
let mission = 1000000; 
let money; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, телефон'); 
let deposit = confirm('Есть ли у вас депозит в банке?');  
/* let expenses1 = prompt('Введите обязательную статью расходов?', 'Аренда квартиры'); 
let amount1 = prompt('Во сколько это обойдется?', '30000'); 
let expenses2 = prompt('Введите  еще одну обязательную статью расходов?', 'оплата счетов'); 
let amount2 = prompt('Во сколько это обойдется?', '1000'); */
//console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

 /* let start = function() {
    money = prompt('Ваш месячный доход?');
    //while (isNaN(money) || money.trim() === '' || money === null) {
        while (/*isNaN(parseFloat(money)) !isNumber(money)){
        money = prompt('Ваш месячный доход?');
    }
};

start();*/

do { money = prompt('Ваш месячный доход?'); } while (!isNumber(money));

let ShowTypeOf = function(data) {
    console.log(data, typeof data);    
}
ShowTypeOf(money);
ShowTypeOf(income);
ShowTypeOf(deposit);
 
//let expenses1, expenses2;
let expenses = [];

let amount;
function getExpensesMonth() {
    let sum =0;
   for ( let i=0; i<2; i++){
     expenses[i] = prompt('Введите обязательную статью расходов?');
     do {amount = prompt('Во сколько это обойдется?'); } while (!isNumber(amount));
    sum += +amount;
   }

    console.log(expenses);
    return sum;
} 

let expensesAmount = getExpensesMonth();
console.log('Сумма ваших обязательных расходов в месяц ' + expensesAmount + ' рублей');

function getAccumulatedMonth () {
    return (money - expensesAmount);
}
let accumulatedMonth = getAccumulatedMonth();
console.log('Ваш месячный бюджет с учетом обязательных расходов ' + accumulatedMonth + ' рублей');

function getTargetMonth() {
    return mission/accumulatedMonth;
}

if (getTargetMonth()>0) {
console.log('ваша цель будет достигнута через ' + Math.ceil(getTargetMonth()) + ' месяцев, если вы не будете никуда тратить деньги и кушать только мамины пирожки');
} else {
    console.log('цель не будет достигнута')
}

let budgetDay = Math.floor(accumulatedMonth/30);

console.log('Ваш дневной бюджет: ' + budgetDay + ' рублей');

function getStatusIncome () {
if (budgetDay >= 1200 ) {
    console.log('У вас высокий уровень дохода')
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода')
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего')
    } else { console.log('Что то пошло не так')
    }
}
getStatusIncome();

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
//console.log(typeof addExpenses);
console.log(addExpenses);

















