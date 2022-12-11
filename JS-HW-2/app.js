//Task 1

let x = 20
let y = 58
let z = 42
console.log(x + y + z)


//Task 2

const s = 60
const m = 60
const h = 24
const d = 365
let myAgeInSeconds = 23 * d * h * m  * s
console.log(myAgeInSeconds)

//Task 3

let count = 42
count = "" + count
console.log(typeof(count))
count = String(count)
console.log(typeof(count))

let userName = '42'
userName = +userName
console.log(typeof(userName))
userName = Number(userName)
console.log(typeof(userName)) 

//Task 4

let a = 1
let b = 2
let c = " белых медведей"
let result = String(a) + String(b) + c
console.log(result)

//Task 5

let str_a = "доступ"
let str_b = "морпех"
let str_c = "наледь"
let str_d = "попрек"
let str_e = "рубило"
lengthWords = str_a.length + str_b.length + str_c.length + str_d.length + str_e.length
console.log(lengthWords)


// Task 6 

const array1 = [21, "cat", ["homework"]]

for (let i = 0; i < array1.length; i++) {
    console.log(`Value: ${array1[i]}; Type ${typeof(array1[i])}`)
}

// Task 7

const NameResult = prompt("Ur name:")
const AgeResult = prompt("Ur age:")
console.log(`${NameResult} - ${AgeResult}`)

// Task 8

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = `${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`
console.log(cipher)