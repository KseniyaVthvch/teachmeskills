// TASK 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// Способо 1
function getFib(item) {
   console.log(item)
}
fibonacci.forEach(getFib)
// Способ 2
const fibo = fibonacci.forEach((item) => {
   console.log(item)
})


//TASK 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
console.log(users)

// Способо 1
function createUsers(item) {
   return (`member: ${item}`)
}
console.log(users.map(createUsers))
// Способ 2
const user2 = users.map((item) => (`member: ${item}`))
console.log(user2)


//TASK 3
const numbers = [7, -4, 32, -90, 54, 32, -21]

//Способ 1
const namberPL = numbers.filter((item) => item >= 0)
console.log(namberPL)
// Способ 2
function getNumb(item) {
   return item >= 0
}
console.log(numbers.filter(getNumb))


//TASK 4
const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//Способ 1 
const fiboSumFirst = fibonaci.reduce((acc, item) => {
   return acc + item
}, 0)
console.log(fiboSumFirst)

//Способ 2 

function calcSum(acc, item) {
   return acc + item
}
console.log(fibonaci.reduce(calcSum))
// во втором способе не совсем понимаю как задать для acc нулевое значение
//(хотя и без него он посчитал сумму правильно,наверно потому что массив начинается с 0)


//TASK 5
const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// Способ 1
function showNumb(item) {
   return item % 2 === 0
}

console.log(number.find(showNumb))
// Способ 2
const numSec = number.find((item) => item % 2 === 0)
console.log(numSec)



//Advanced level 

function Student(salary, rate, name) {
   this.salary = salary
   this.rate = rate
   this.name = name
   this.getCred = function () {
      if (rate == 'a') {
         let rateA = salary * 12
         console.log(alert(`Сумма вашего кредита составит: ${rateA}`))
      } else if (rate == 'b') {
         let rateB = salary * 9
         console.log(alert(`Сумма вашего кредита составит: ${rateB}`))
      } else if (rate == 'c') {
         let rateC = salary * 6
         console.log(alert(`Сумма вашего кредита составит: ${rateC}`))
      } else if (rate == 'd') {
         console.log(alert("Mы не можем дать кредит"))
      }
   }
}

const stud1 = new Student(prompt('Введите вашу заработную плату'), prompt('Введите ваш кредитный рейтинг'), 'Alexandra')
stud1.getCred()
console.log(stud1)
const stud2 = new Student(prompt('Введите вашу заработную плату'), prompt('Введите ваш кредитный рейтинг'), 'Polina')
stud2.getCred()
console.log(stud2)
const stud3 = new Student(prompt('Введите вашу заработную плату'), prompt('Введите ваш кредитный рейтинг'), 'Bogdan')
stud3.getCred()
console.log(stud3)
const stud4 = new Student(prompt('Введите вашу заработную плату'), prompt('Введите ваш кредитный рейтинг'), 'Daniil')
stud4.getCred()
console.log(stud4)
const stud5 = new Student(prompt('Введите вашу заработную плату'), prompt('Введите ваш кредитный рейтинг'), 'Veronika')
stud5.getCred()
console.log(stud5)
const student = [stud1, stud2, stud3, stud4, stud5]
console.log(student)
const studCreditSum = student.reduce((acc, item) => {
   // return acc + т.е. здесь как записать результат выполнения функции getCred
}, 0)
console.log(studCreditSum)


// Задумка выполнения задания была следующая:
//  каждый из студетнов сам вводит сумму з/п и рейтинг, на основе которого потом выводится сумма возможного кредита,
// затем создается массив, на основе которого нужно посчитать общую сумму возможного кредита для группы,
// понимаю , что это можно сделать через reduce, но зависла и не знаю как записать результат выполнения функции getCred
//  в качестве item для функции studCreditSum
// наворотила тут конкретно, но не хотелось привязываться к фиксированным salary, rate


// TASK 2

let showStr = (str) => str.replace(/[aeiou]/gi, '')
console.log(showStr('This website is for losers LOL!'));

// этот вариант нашла в интернете и понимаю как это работает
// только вопрос по синтаксису, в теории которую прочитала по replace  аргумент, который передается
// в скобках записывается без [], но тут если их убрать, код перестает работать 

//TASK 4
let str1 = "1 2 3 4 5";
const arr1 = str1.split(' ');
function highAndLowF() {
   return (` ${Math.max(...arr1)}  ${Math.min(...arr1)}`)
}
console.log(highAndLowF(arr1))

let str2 = "1 2 -3 4 5";
const arr2 = str2.split(' ');
function highAndLowS() {
   return (` ${Math.max(...arr2)}  ${Math.min(...arr2)}`)
}
console.log(highAndLowS(arr2))

let str3 = "1 9 3 4 -5";
const arr3 = str3.split(' ');
function highAndLowTh() {
   return (` ${Math.max(...arr3)}  ${Math.min(...arr3)}`)
}
console.log(highAndLowTh(arr3))
