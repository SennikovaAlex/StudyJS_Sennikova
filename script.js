'use strict'

let income = 'Фриланс';
let period = 12;
let mission = 1000000; 
let money = prompt('Ваш месячный доход?', '80000'); 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Например: Интернет, телефон'); 
let deposit = confirm('Есть ли у вас депозит в банке?');  
let expenses1 = prompt('Введите обязательную статью расходов?', 'Аренда квартиры'); 
let amount1 = prompt('Во сколько это обойдется?', '30000'); 
let expenses2 = prompt('Введите  еще одну обязательную статью расходов?', 'оплата счетов'); 
let amount2 = prompt('Во сколько это обойдется?', '1000'); 
//console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');


let ShowTypeOf = function(data) {
    console.log(data, typeof data);    
}
ShowTypeOf(money);
ShowTypeOf(income);
ShowTypeOf(deposit);


function getExpensesMonth() {
    let amountAll = +amount1 + +amount2;
    return amountAll;
} 
console.log('Сумма ваших обязательных расходов в месяц ' + getExpensesMonth()) + ' рубллей';

function getAccumulatedMonth () {
    return (money - getExpensesMonth());
}
let accumulatedMonth = getAccumulatedMonth();
console.log('Ваш месячный бюджет с учетом обязательных расходов ' + accumulatedMonth + ' рублей');

function getTargetMonth() {
    return mission/accumulatedMonth;
}
console.log('ваша цель будет достигнута через ' + Math.ceil(getTargetMonth()) + ' месяцев, если вы не будете никуда тратить деньги и кушать только мамины пирожки');

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


















