//Task 1

const strng = "true";
const bol = false;
const num = 17;
const undf = undefined;
const null5 = null;

console.log(typeof strng,typeof bol,typeof num,typeof undf,typeof null5)

//Task2

let height = 15
let width = 20

if(height > width) {
    console.log(height)
} else {
    console.log(width)
}

//Task3

for(let i = 0; i < 20; i++) {
    if(i %3 === 0)
    console.log(i)
}

//Task4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true  //

// if(key===true && documents===true && pen===true && apple===false || orange===true) 

//Task5

let number = prompt("number")

if(number %3 ===0 && number %5 ===0) {
    console.log(`FizBuz`)
}else if(number %5 ===0) {
    console.log(`Fiz`)
}else if(number %3 ===0) {
    console.log(`Buz`)   
}

//Task6

let userAge = prompt("Enter ago")


if(userAge >= 16 && userAge <= 18) {
    console.log(`Можешь выкурить сигаретку, только маме не говори.`)
}else if(userAge < 18) {
    console.log(`Пей колу.`)
}else {
    console.log(`Попей пивка.`)
}

//Task7

let progtam = prompt(`В какую сторону света ты хочешь пойти?`)

switch(progtam) {
    case `юг`:
        console.log(`на юг пойдешь счастье найдешь`)
        break;
    case `север`:
        console.log(`на север пойдешь много денег найдешь`)
        break;
    case `запад`:
        console.log(`на запад пойдешь верного друга найдешь`)
        break;
    case `восток`:
        console.log(`на восток пойдешь разработчиком станешь`)
        break;
    default:
        console.log(`Попробуй еще раз`)
}

//ADVANCED level

//Task 1 👨‍🏫

let a = prompt(`Enter name`)
alert(`Привут ${a}`.toLowerCase())

//Task 2 👨‍🏫

const number3 = prompt(`Любое число`)

const subtract = prompt(`cколько отнять?`)
const add = prompt(`cколько прибавить?`)
const multiply = prompt(`на cколько умножить?`)
const divide = prompt(`на cколько разделить?`)

let b = (number3 - subtract + add * mu2ltiply / divide)
console.log(b)
alert(b)

//Task 3 👨‍🏫

let o = ``

for(let i = 0; i < 6; i++) {
    o = `${o}👨‍🏫`
    console.log(o)
}