// Task 1
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

let x = 20
let y = 58
let z = 42
console.log(x + y + z)

//Task 2
/*Создайте переменные:
    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
Посчитайте ваш возраст в секундах и поместите результат в переменную `myAgeInSeconds`*/
const secInMin = 60
const minInHour = 60
const hourInDay = 24
const dayInYear = 365
const myAge = 33
console.log(myAge * dayInYear * hourInDay * minInHour * secInMin)

//Task 3
/*Создайте две переменные. Поместите в них переменную **`count`** и 
превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.*/

let count = 42
let userName = '42'

console.log(String(count))
console.log('' + count)
console.log(+ userName)
console.log(Number(userName))

//Task 4 

//Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.
let a = 1
let b = 2
let c = ' белых медведей'
let bear = String(a) + String(b) + c
console.log(bear)

// Task 5

// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

let d = 'доступ'
let e = 'морпех'
let f = 'наледь'
let g = 'попрек'
let h = 'рубило'
let lengthWords = d + e + f + g + h
console.log(lengthWords.length)

// Task 6

/*Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
    `Variable: %variable name% have type: %type variable%`*/

const myName = 'Olga'
const age = 33
let smTh
let test1 = `Variable: ${myName} have type ${typeof (myName)}`
console.log(test1)
let test2 = `Va riable: ${age} have type ${typeof (age)}`
console.log(test2)
let test3 = `Variable: ${smTh} have type ${typeof (smTh)}`
console.log(test3)

//Task 7 

//Запросить у пользователя имя и возраст и вывести их в консоль.
let nameUser = prompt('Enter your name')
let ageUser = prompt('Enter your age')
console.log(nameUser + ageUser)

// ADVANCED level

//В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
console.log(cipher)










