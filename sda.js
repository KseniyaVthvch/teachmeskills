// //Task 1

const strng = "true";
const bol = false;
const num = 17;
const undf = undefined;
const null5 = null;

console.log(typeof strng,typeof bol,typeof num,typeof undf,typeof null5)

// //Task2

const height = 15
const width = 20

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

// //Task4

const key = true
const documents = true
const pen = true
const apple = false
const orange = true  

console.log(key && documents && pen && (apple || orange))

// //Task5

const number = prompt("number")

if(number %3 ===0 && number %5 ===0) {
    console.log(`FizBuz`)
}else if(number %5 ===0) {
    console.log(`Fiz`)
}else if(number %3 ===0) {
    console.log(`Buz`)   
}

// //Task6

const userAge = prompt("Enter ago")


if(userAge >= 16 && userAge <= 18) {
    console.log(`Можешь выкурить сигаретку, только маме не говори.`)
}else if(userAge < 18) {
    console.log(`Пей колу.`)
}else {
    console.log(`Попей пивка.`)
}

// //Task7

const progtam = prompt(`В какую сторону света ты хочешь пойти?`)

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

// //ADVANCED level

// //Task 1 👨‍🏫

const userName = prompt(`Enter name`,`сКвОрДа яН`)

const index = userName.indexOf(` `)

const firstName = userName.slice(0,index)
const lastName = userName.slice(index + 1)

const resfirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
const reslastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
console.log(resfirstName, reslastName)

// //Task 2 👨‍🏫

const number3 = prompt(`Любое число`)

const multiply = prompt(`на cколько умножить?`)
const divide = prompt(`на cколько разделить?`)
const subtract = prompt(`cколько отнять?`)
const add = prompt(`cколько прибавить?`)

const b = (number3 * multiply / divide - subtract + add)
console.log(b)
alert(b)

// //Task 3 👨‍🏫

let o = ``

for(let i = 0; i < 6; i++) {
    o = `${o}👨‍🏫`
    console.log(o)
}

