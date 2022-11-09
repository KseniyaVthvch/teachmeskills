// Задание 1
let x = 20
let y = 58
let z = 42

console.log(x+y+z)

// Задание 2
const sec = 60
const min = 60
const hours = 24
const days = 365
const oneYearSec = days * hours * min * sec
const oneDaySec = hours * min * sec
let myAgeInSeconds = oneYearSec * 20 + oneDaySec * 166

console.log(myAgeInSeconds)

// Задание 3
let count = 42
let userName = '42'
// Способ 1
let test1 = String(count)
let test2 = Number(userName)

console.log(typeof test1)
console.log(typeof test2)

// Способ 2
let test3 = `${count}`
let test4 = +userName

console.log(typeof test3)
console.log(typeof test4)

// Задание 4
let a = 1
let b = 2
let c = "белых медведей"

console.log(`${a}${b} ${c}`)

// Задание 5
let word1 = "доступ"
let word2 = "морпех"
let word3 = "наледь"
let word4 = "попрек"
let word5 = "рубило"
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length

console.log(lengthWords)

// Задание 6
let q = "Privet"
let w = 11
let e = true

console.log(`Variable: ${q} have type: ${typeof q}`)
console.log(`Variable: ${w} have type: ${typeof w}`)
console.log(`Variable: ${e} have type: ${typeof e}`)

// Задание 7
let name = prompt("Введите ваше имя")
let age = prompt("Введите ваш возраст")

console.log("Имя: " + name + "; Возраст: " + age)

// Advanced level
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(codeWord1[1] + codeWord2[1] + codeWord3[1]+ codeWord4[1]+ codeWord5[1])