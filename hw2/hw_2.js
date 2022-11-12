// #### Task 1

let x = 20
let y = 58
let z = 42
console.log(x + y + z)

// #### Task 2 

const secInMin = 60
const minInHrs = 60
const hrInDay = 24
const dayInYear = 365
let myAgeInSeconds = 29 * dayInYear * hrInDay * minInHrs * secInMin
console.log(myAgeInSeconds)

// #### Task 3 💻


let count = 42
let userName = '42'
console.log(String(count))
console.log(count.toString())

console.log(Number(userName))
console.log(+userName)

// #### Task 4 

let a = 1
let b = 2
let c = "белых медведей"
console.log(a + b.toString() + " " + c)

// #### Task 5

// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:

let word1 = "доступ"
let word2 = "морпех"
let word3 = "наледь"
let word4 = "попрек"
let word5 = "рубило"
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length
console.log(lengthWords)

// #### Task 6 💻

let var1 = 21
let var2 = "21"
let var3 = false
console.log("Variable: " + Object.keys({ var1 }) + " have type: " + typeof (var1))
console.log("Variable: " + Object.keys({ var2 }) + " have type: " + typeof (var2))
console.log("Variable: " + Object.keys({ var3 }) + " have type: " + typeof (var3))


// #### Task 7 💻

let name1 = promt("Enter ypor name")
let age1 = promt("Enter your age")
console.log(age1, name1)



// ### ADVANCED level

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
console.log(cipher)
