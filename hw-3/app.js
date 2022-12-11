//1
const one = true
const two = false
const three = 17
const four = undefined
const five = null

console.log(
   typeof one,
   typeof two,
   typeof three,
   typeof four,
   typeof five)

//2
let height = 15
let width = 20

const a = height < width

console.log(a)

//3
for (let i = 1; i < 20; i++) {
   if (i % 3 === 0)

      console.log(i)
}

//4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = (key && documents && pen && (apple || orange))

console.log(shouldGoToWork)

//5
const num = prompt("Number")
if (num % 3 === 0 && num % 5 === 0) {
   console.log("FizBuz")
}
else if (num % 3 === 0) {
   console.log("Buz")
}
else if (num % 5 === 0) {
   console.log("Fiz")
}

//6
const age = prompt("Enter Age")

if (age >= 16 && age <= 18) {
   console.log("Можешь выкурить сигаретку, только маме не говори")
}
else if (age >= 18) {
   console.log("Попей пивка")
}
else {
   console.log("Пей колу ")
}

//7
const world = prompt("User")
switch (world) {
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
   default: console.log("Попробуйте ещё раз")
}

//ADVANCED level
//1
const name = prompt("Enter Name", "пОлИнА нАбЕрЕжНаЯ")

const index = name.indexOf(" ")
const firstName = name.slice(0, index)
const lastName = name.slice(index + 1)

const resFirstName = firstName[0].
   toUpperCase() + firstName.slice(1).toLowerCase()
const resLastName = lastName[0].
   toUpperCase() + lastName.slice(1).toLowerCase()

alert(`Привет, ${resFirstName}  ${resLastName}!`)

//2
const numb = prompt("Введите число")
const a1 = prompt("Сколько отнять")
const a2 = prompt("Сколько прибавить")
const a3 = prompt("На сколько умножить")
const a4 = prompt("На сколько разделить")

const resl = (((numb - a1) + a2) * a3) / a4
alert(`(((${numb}-${a1})+${a2})*${a3})/${a4}=${resl}`)


//3
let n = ""
for (let i = 0; i < 6; i++) {
   n = n + "#"
   console.log(n)
}