// TASK 1

const str = 'true'
const bool = false
const num = 17
const und = undefined
const n = null
console.log(typeof str)
console.log(typeof bool)
console.log(typeof num)
console.log(typeof und)
console.log(typeof n)

//TASK 2
const height = 15
const width = 20
if (height < width) {
   console.log(width)
} else {
   console.log(height)
}

//TASK 3

for (let i = 1; i < 21; i++) {
   if (i % 3 === 0) {
      console.log(i)
   }
}

// TASK 4

const key = true
const documents = true
const pen = true
const apple = false
const orange = true
const shouldGoToWork = (key && documents && pen && apple && orange && (apple || orange))
console.log(shouldGoToWork)

//TASK 5
const str1 = prompt("Enter number")

if (str1 % 3 === 0 && str1 % 5 === 0) {
   console.log('FizBuz');
} else if (str1 % 3 === 0) {
   console.log('Buz')
} else if (str1 % 5 === 0) {
   console.log('Fiz')
}

// TASK 6

const age = prompt('Enter age')
if (age >= 19) {
   console.log("Попей пивка")
} else if (age <= 15) {
   console.log("Попей колы")
} else if (age >= 16 && age <= 18) {
   console.log("Можешь выкурить сигаретку, только маме не говори.")
}

// TASK 7
const tur = prompt(" Куда бы Вы хотели отправиться")
switch (tur) {
   case "юг":
      console.log("на юг пойдешь счастье найдешь")
      break;
   case "север":
      console.log("на север пойдешь много денег найдешь")
      break;
   case "запад":
      console.log("на запад пойдешь верного друга найдешь")
      break;
   case "восток":
      console.log("на восток пойдешь разработчиком станешь")
      break;
   default:
      console.log("Неверные данные. Попробуйте ещё раз")
}

// ADVANCED level
// TASK 1
const userName = prompt(" Enter your name")
const newStr = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
const userHi = alert(`Привет, ${newStr}`)

//TASK2
const userNumb = prompt('Введите число')
const a = prompt('Сколько отнять?')
const b = prompt('Сколько прибавить?')
const c = prompt('На сколько умножить?')
const d = prompt('На сколько разделить?')
const res = (((userNumb - a) + b) * c) / d

alert(`(((${userNumb} - ${a}) + ${b}) * ${c}) / ${d} = ${res}`)

// TASK3

let slow = "#"

for (let il = 0; il < 8; il++) {
   console.log(slow)
   slow += '#'
}


