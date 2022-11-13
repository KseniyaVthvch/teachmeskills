//Task 1

let x = 20
let y = 58
let z = 42

let summ = x + y + z;

console.log(summ);

//Task 2

const minPerSec = 60
const hourPerMin = 60
const dayPerHour = 24
const yearPerDay = 365

let myAgeInSeconds = 22 * yearPerDay * dayPerHour * hourPerMin * minPerSec

console.log(myAgeInSeconds);

//Task 3

let count = 42
let userName = '42'

console.log(String(count));
console.log(Number(userName));

//Task 4
//12 белых медведей

let a = 1
let b = 2
let c = "белых медведей"

let d = `${a}${b} ${c}`
console.log(d);

//Task 5

let k = 'доступ'
let l = 'морпех'
let m = 'наледь'
let n = 'попрек'
let o = 'рубило'

let lengthWords = (k + l + m + n + o).length

console.log(lengthWords);

//Task 6

let string = 'space'
let number = 12
let boolean = false

console.log(`Variable: ${string} have type: ${typeof string}`)
console.log(`Variable: ${number} have type: ${typeof number}`)
console.log(`Variable: ${boolean} have type: ${typeof boolean}`)

//Task 7 

let nam = prompt('Name')
let age = prompt('Age')

console.log(`Name: ${nam}, Age: ${age}`)

//ADVANCED level

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(cipher);