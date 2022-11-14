// 1
const x = 20
const y = 58
const z = 42
console.log(x + y + z)

//2
const seconds_min = 60
const min_hours = 60
const hours_day = 24
const days_year = 365
let myAgeInSeconds = 0

myAgeInSeconds = seconds_min * min_hours * hours_day * days_year * 27

console.log(myAgeInSeconds)

//3
let count = 42
let userName = "42"
let userName2

userName2 = userName
userName = count
count = userName2


console.log(count + count)
console.log(userName + userName)

//4
let a = 1
let b = 2
let c = "белых медведей"

b = "2 "
console.log(a + b + c)

//5 
let d = "доступ"
let m = "морпех"
let n = "наледь"
let p = "попрек"
let r = "рубило"

let lengthWords = d.length + m.length + n.length + p.length + r.length

console.log(lengthWords)

//6
const num = 33
const word = "слово"
const value = Symbol()


console.log("Variable: num have type: ", typeof num)
console.log("Variable: word have type: ", typeof word)
console.log("Variable: value have type: ", typeof value)

//7
let Name = prompt("Name")
let age = prompt("Age")
console.log("Меня зовут", Name)
console.log("Мне ", age, "лет")

//8
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
const cipher1 = codeWord1[1]
const cipher2 = codeWord2[1]
const cipher3 = codeWord3[1]
const cipher4 = codeWord4[1]
const cipher5 = codeWord5[1]

const cipher = cipher1 + cipher2 + cipher3 + cipher4 + cipher5

console.log(cipher)
