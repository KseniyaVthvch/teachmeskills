// task 1

let v1 = 'true'
let v2 = false
let v3 = 17
let v4 = undefined
let v5 = null

console.log(typeof v1)
console.log(typeof v2)
console.log(typeof v3)
console.log(typeof v4)
console.log(typeof v5)

// task 2

const height = 15
const width = 20

console.log(Math.max (height, width))

if(height>width) {
    console.log('Большее значение', height)
} else {
    console.log('Большее значение', width)
}

// task 3

for(let i=1; i<=20; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}

// task 4

const key = true
const documents = true
const pen = true
const apple = false
const orange = true

const  shouldGoToWork = (key && documents && pen && (apple || orange))
console.log(shouldGoToWork)

// task 5

const userNumber = prompt('Введите число?')

if(userNumber % 5 === 0 && userNumber % 3 ===0){
    console.log('FizBuz')
} else if(userNumber % 3 === 0 && userNumber % 5 !== 0){
    console.log('Buz')
} else if(userNumber % 5 === 0 && userNumber % 3 !== 0) {
    console.log('Fiz')
} else {
    console.log('Указанное число не делится ни на 3, ни на 5')
}

//task 6

const userAge = prompt('Введите ваш возраст')

if(userAge >= 18) {
    console.log('Попей пивка')
} if(userAge >= 16, userAge <= 18){
    console.log('Можешь выкурить сигаретку, только маме не говори')
} else if(userAge < 18){
    console.log('Пей колу')
}

// task 7

const sideOfTheWorld = prompt('Введите сторону света')

switch(sideOfTheWorld){
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default: ('сторона света введена неверно')
}

// ADVANCED Task 1

const nameOfUser = prompt('Enter name','дИмА пЕтРоВ')

const index = nameOfUser.indexOf(" ")
const firstName = nameOfUser.slice(0, index);
const lastName = nameOfUser.slice(index + 1)

const resFirstName = firstName[0].toUpperCase()  + firstName.slice(1).toLowerCase()
const resLastName = lastName[0].toUpperCase()  + lastName.slice(1).toLowerCase()

alert(`Привет, ${resFirstName} ${resLastName}!`)

// ADVANCED Task 2

const a = prompt('Number 1')
const b = prompt('Number 2')
const c = prompt('Number 3')
const d = prompt('Number 4')
const f = prompt('Number 5')
const r = ((((a - b) + c) * d) / f)

alert(`((((${a} - ${b}) + ${c}) * ${d}) / ${f}) = ${r}`)

// ADVANCED Task 3

let latt = `#`

while (latt.length < 7) {  
   console.log(latt);
   latt+=`#`;
}
