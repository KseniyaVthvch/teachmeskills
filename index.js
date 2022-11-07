//Task 1 

const x = 20
const y = 58
const z = 42

console.log(x + y + z)

//Task 2

const minutes = 60
const hours = 60
const days = 24
const years = 365

let myAgeInSeconds = 630720000

//Task 3

const count = 42
const userName = '42'

console.log(typeof String(count))
console.log(typeof Number(userName))

//Task 4

let a = 1
let b = 2
let c = "белых медведей"

console.log(a + String(b)+ c)

//Task 5 

let aa = "доступ"
let bb = "морпех"
let ss = "наледь"
let xx = "попрек"
let zz = "рубило"

let lengthWords = aa.length + bb.length + ss.length + xx.length + zz.length

console.log(lengthWords)

//Task 6 

const string = "морпех"
const number = 43
const boolean = false

console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)

//Task 7

alert(`Hello`);
let name = prompt("NAME"),
age = prompt('age?', 18);
const info = `name:${name},age:${age}`
console.log(info)

//ADVANCED level

//В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(cipher)
//Создайте переменную **`cipher`** и поместите туда необходимые символы