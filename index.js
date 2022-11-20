 hw4Yan
//NORMAL level

//Task 1 💻

function getSum(n) {
    let myFn = 0
    for(let i = 0; i <= n; i++) {
        myFn += i
    }
    console.log(myFn)
}

getSum(100)  /////////////////////////   (тут почему то не работает , но раньше работала)

//Task 2 💻

function getCredit(amount) {
    const proc = 0.17
    const years = 5

    const a = amount * proc *years

    console.log(a)
}

getCredit(1000)

//Task  3💻

function trimString(string , b, v) {
   let str = string.slice(b,v)
   console.log(str) 
}

trimString(`Привте`,0,2)

//Task 4 💻

function getSum (a,b) {
    let get = 0
    if(a === b) {
        return a
    }else {
        for(let i = a; i <= b; i++) {
            get = get + i
        }
        return get
    }
} 
console.log(getSum(2,7))

//Task 5 💻

const indexBooFoo = prompt(`Введите 1 или 0`,`1`)
const myFn = Boolean(indexBooFoo)

function foo(bool) {
    if(bool === true) {
        console.log(`foo`)
    }
}
function boo(bool) {
    if(bool === false) {
        console.log(`boo`)
    }
}
function fooboo (bool) {
    foo(bool)
    boo(bool)
}
fooboo(myFn)

//ADVANCED level

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

console.log(minutes*hours*days*years*myAgeInSeconds)
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

console.log(`Variable:` + string + ` have type:` + typeof string)
console.log(`Variable:` + number + ` have type:` + typeof number)
console.log(`Variable:` + boolean + ` have type:` + typeof boolean)

//Task 7

alert(`Hello`);
let name = prompt("NAME");
let age = prompt('age?', 18);
alert(age)
const info = `name:${name}
age:${age}`
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
 Yan_Skvoroda
