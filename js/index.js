// task 1
let x = 20
let y = 58
let z = 42

console.log(x+y+z)

// task 2
const secInMinute = 60
const minInHours = 60
const hoursInDay = 24
const dayInYear = 365

// task 3
let count = 42
let userName = '42'

let countString = String(count)
let userNameNumber = Number(userName)

//task 4
let a = 1
let b = 2
let c = "белых медведей"

let bears = `${a}${b} ${c}`
console.log(bears)

//task 5

let dost = 'доступ'
let morp = 'морпех'
let nal = 'наледь'
let poper = 'поперек'
let rubil = 'рубило'

const lengthWords = dost.length + morp.length + nal.length + poper.length + rubil.length
console.log(lengthWords)

//task 6???

let variable1 = 12 
let variable2 = '12'
let variable3 = false

console.log(`Variable: ${variable1} have type: ${typeof variable1}`)
console.log(`Variable: ${variable2} have type: ${typeof variable2}`)
console.log(`Variable: ${variable3} have type: ${typeof variable3}`)

//task 7

let usersName = prompt('Укажите ваше имя.', 'Василек')
let usersAge = prompt('Укажите свой возраст.', 100)

console.log(usersName ,usersAge )

// ADVANCED level

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(cipher)