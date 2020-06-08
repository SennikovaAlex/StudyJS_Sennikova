'use strict'

//let income = 'Фриланс';
//let period = 12;

/*console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(typeof addExpenses);
console.log(addExpenses);*/

//let budgetDay = money/30; 
//console.log(Math.round(budgetDay));
let mission = 1000000; 
let money = prompt('Ваш месячный доход?', '80000'); 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Например: Интернет, телефон'); 
let deposit = confirm('Есть ли у вас депозит в банке?');  
let expenses1 = prompt('Введите обязательную статью расходов?', 'Аренда квартиры'); 
let amount1 = prompt('Во сколько это обойдется?', '30000'); 
let expenses2 = prompt('Введите  еще одну обязательную статью расходов?', 'оплата счетов'); 
let amount2 = prompt('Во сколько это обойдется?', '1000'); 

let budgetMonth = money - amount1 - amount2;

console.log('Ваша цель будет достигнута через ' + Math.ceil(mission/budgetMonth) + 
' месяцев, если вы не будете никуда тратить деньги и кушать только мамины пирожки');
/* здесь по идее необходимо учитывать наличие депозита поэтому можно добавить if (deposit) {
    console.log ('Возможно, благодаря депозиту, вы достигнете цели быстрее')
}
*/
let budgetDay = Math.floor(budgetMonth/30);
// console.log(budgetDay);
// console.log(budgetMonth);

if (budgetDay >= 1200 ) {
    console.log('У вас высокий уровень дохода')
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода')
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего')
    } else { console.log('Что то пошло не так')
    }








