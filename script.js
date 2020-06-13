'use strict'
let money; 

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) //Если число конечное то тру
};

let start = function() {
  
    do { money = prompt('Ваш месячный доход?'); } while (!isNumber(money));
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 5000000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expenseMonth:0,

    asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, телефон'); 
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
       let sum =0; 
       
        for ( let i=0; i<2; i++){
            
            let expens = prompt('Введите обязательную статью расходов?');
            
            let amount;
            do {amount = prompt('Во сколько это обойдется?'); } while (!isNumber(amount));
            appData.expenses[expens] = amount;
          }
          
          //console.log(appData.expenses);
                
                },

    
    getTargetMonth: function() {
        return appData.mission/appData.getExpensesMonth();
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 1200 ) {
            console.log('У вас высокий уровень дохода')
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            console.log('У вас средний уровень дохода')
        } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего')
            } else { console.log('Что то пошло не так')
            }
    },

     getExpensesMonth: function() {
         let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
            }  
            
           return sum
    },

    getBudget: function() {
        
        appData.budgetMonth = (appData.budget - appData.getExpensesMonth());
        appData.budgetDay = Math.floor(appData.getExpensesMonth()/30);
    },
}

appData.asking();


console.log('Сумма ваших обязательных расходов в месяц ' + appData.getExpensesMonth() + ' рублей')
if (appData.getTargetMonth()>0) {
console.log('ваша цель будет достигнута через ' + Math.ceil(appData.getTargetMonth()) + ' месяцев, если вы не будете никуда тратить деньги и кушать только мамины пирожки');
} else {
    console.log('цель не будет достигнута')
}

appData.getStatusIncome();
console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(key + ':  '+ appData[key])
}

















