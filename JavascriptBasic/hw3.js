//Task 1

// Создайте переменные и присвойте им значения:

// 'true'
// false
// 17
// undefined
// null

// Затем с помощью оператора `typeof` выведите в консоль все типы созданных значений переменных.

const string = 'true'
const boolean = false
const number = 17
const und = undefined
const nul = null

console.log(typeof string);
console.log(typeof boolean);
console.log(typeof number);
console.log(typeof und);
console.log(typeof nul);


//Task 2

// Даны две переменные:

//     let height = 15
//     let width = 20

// С помощью условий выведите в консоль разработчика наибольшее число.

const height = 15
const width = 20


//1 way
console.log(Math.max(height, width));

//2 way
const res = height > width ? height : width
console.log(res)

//Task 3

// Написать перебор от 1 до 20, где выведутся все числа кратные трём.
// Для вычисления кратности обратите внимание на оператор %

for (let i = 1; i <= 20; i++) {
   if (i%3 === 0) {
      console.log(i)
   }
}

//Task 4

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы `|| &&`.

   const key = true
   const documents = true
   const pen = true
   const apple = false
   const orange = true

// Oтвет поместите в переменную **shouldGoToWork**

const shouldGoToWork = (key && documents && pen && (apple || orange)) 


//Task 5

// Запросить у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

const n = prompt('Enter number')

if(n%5 === 0 && n%3 !== 0) {
   console.log('Fiz');
}else if (n%3 === 0 && n%5 !== 0) {
   console.log('Buz');
}else if (n%3 === 0 && n%5 === 0) {
   console.log('FizBuz');
}

//Task 6

// Написать программу, которая выполняет следующие операции:

// Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
// Если меньше, то выводит сообщение - `Пей колу`. 
// Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.

const age = prompt('Enter age')

if (age > 18) {
   console.log('Попей пивка');
}else if (age >= 16  && age <= 18) {
   console.log('Можешь выкурить сигаретку, только маме не говори');
}else {
   console.log('Пей колу');
}


//Task 7

// Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. 
// После ввода данных мы должны вывести в консоль сообщение из списка. 
// Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// `юг` на юг пойдешь счастье найдешь
// `север` на север пойдешь много денег найдешь
// `запад` на запад пойдешь верного друга найдешь
// `восток` на восток пойдешь разработчиком станешь

// Используйте конструкцию switch

const cardinalDirection = prompt('Enter which side of the world would you like to go?')

switch(cardinalDirection) {
   case 'юг':
      console.log('на юг пойдешь счастье найдешь');
      break;
   case 'север':
      console.log('на север пойдешь много денег найдешь');
      break;
   case 'запад':
      console.log('на запад пойдешь верного друга найдешь');
      break;
   case 'восток':
      console.log('на восток пойдешь разработчиком станешь');
      break;
   default:
      console.log('try again');
}

//  ADVANCED level

//!Task 1

// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через **alert**
// Привет, Полина Набережная!

//!не понимаю как решить, сделала только в первом слове заглавную букву
const name = prompt('Enter name','пОлИнА нАбЕрЕжНаЯ')
const firstLetter = name[0].toUpperCase() + name.slice(1).toLowerCase()

alert(`Привет, ${firstLetter}!`)

//Task 2

// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
// ((((6 - 10) + 5) * 20) / 2 = 110)

const a = prompt('Number 1')
const b = prompt('Number 2')
const c = prompt('Number 3')
const d = prompt('Number 4')
const f = prompt('Number 5')
const result = ((((a - b) + c) * d) / f)

alert(`((((${a} - ${b}) + ${c}) * ${d}) / ${f}) = ${result}`)

//Task 3

// Написать программу, которая будет выводить в консоль лесенку.

//     #
//     ##
//     ###
//     ####
//     #####
//     ######

// Не забудьте вопспользоваться циклами

let point = '#'

while (point.length < 7) {  
   console.log(point);
   point+='#';
}