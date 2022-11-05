//1.
let x = 20
let y = 58
let z = 42
console.log (x+y+z)

//2.
const sec = 60
const min = 60
const h = 24
const day = 365 

let myAgeInSeconds = 25*day*h*min*sec
const information = `myAgeInSeconds is ${myAgeInSeconds}`
console.log (information)

//3.
let count = 42
let userName = '42'
console.log(String(count))
console.log(Number(userName))

//4.
let a = 1
let b = 2
let c = "белых медведей"
let d = String(a) + String(b)


console.log (d + " " + c)

//5.
const str1 = "доступ" 
const str2 = "морпех"
const str3= "наледь"
const str4 = "попрек"
const str5 = "рубило"

let lengthWords = str1.length + str2.length + str3.length + str4.length + str5.length
console.log(lengthWords)

//6
let me = 'Poncik'
let age = 9
let all = false
console.log(("Variable:")+('me ') +("have type:")+(typeof me))
console.log(("Variable:")+('age ') +("have type:")+(typeof age))
console.log(("Variable:")+('all ') +("have type:")+(typeof all))

//7
prompt('Name')
prompt('Age')

//8
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]
console.log(cipher)

