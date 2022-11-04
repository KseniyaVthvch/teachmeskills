
// TASK 1

let x = 20
let y = 58
let z = 42

console.log(x + y + z);

// TASK 2

const secondsInMinute = 60
const minutesInHour = 60
const hoursInDay = 24
let daysYear = 365
let age = 27
let myAgeInSeconds = age * daysYear * hoursInDay * minutesInHour * secondsInMinute

console.log(myAgeInSeconds)

// TASK 3

let count = 42
let userName = '42'

console.log(String(count))
console.log(Number(userName))

console.log(typeof String(count))
console.log(typeof Number(userName))

// TASK 4

let a = 1
let b = 2
let c = "белых медведей"
let d = String(a) + String(b)

console.log(d, c)

// TASK 5

let text1 = 'доступ'
let text2 = 'морпех'
let text3 = 'наледь'
let text4 = 'попрек'
let text5 = 'рубило'
let lengthWords = (text1.length) + (text2.length) + (text3.length) + (text4.length) + (text5.length)

console.log(lengthWords)

// TASK 6
const myName = 'Alexandra'
console.log(myName)
console.log(typeof myName)

let mySymbol = Symbol('id')
console.log(mySymbol)
console.log(typeof mySymbol)

let myAge = 27
console.log(myAge)
console.log(typeof myAge)


// TASK 7

prompt('Name')
prompt('Age')


// TASK 8

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!"
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(cipher)