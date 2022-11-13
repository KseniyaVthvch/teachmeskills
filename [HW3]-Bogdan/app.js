//TASK 1
 const a = 'true'
 const b = false
 const c = 17
 const d = undefined
 const e = null

 console.log(typeof a)
 console.log(typeof b)
 console.log(typeof c)
 console.log(typeof d)
 console.log(typeof f)

//TASK 2
 
 let height = 15
 let width = 20

 const res = height < width ? "20" : "15"
 console.log(res)


//TASK 3

 for (let i = 1; i <= 20; i++){
    if (i%3 === 0) {
        console.log(i)
    }
 }

//TASK 4

let key = true
let documents =true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = true
if ((key  && documents  && pen ) && ( apple || orange )) {
    shouldGoToWork = "goToWork"
    console.log(shouldGoToWork)
} 

//TASK 5
const num = prompt('Write a number')

if (num % 5 === 0) {
	console.log('Fiz')
} else if (num % 3 === 0) {
	console.log('Buz')
} else if (num % 3 === 0 && num % 5 === 0) {
	console.log('FizBuz')
}

//TASK 6
let Age = prompt('How old are you?');
if (Age >= 16 && Age <= 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори")
} else if (Age > 18) {
  console.log("Попей пивка")
} else {
  console.log("Пей колу")
}

//TASK 7
let userDestination = prompt('Choose the direction?');
switch (userDestination) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("Проверьте данные");}

    //ADVANCED level

    // TASK 1

    const Name = prompt("Enter name", 'пОлИнА нАбЕрЕжНаЯ')

    const index = Name.indexOf(" ")
    const firstName = Name.slice(0, index);
    const lastName = Name.slice(index + 1)

    const resFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
    const resLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()

    console.log(resFirstName, resLastName)

    //TASK 2

    let number = prompt(`Назови любое число`);
    let minus= prompt(`На сколько разделить?`);
    let plus = prompt(`На сколько увеличить?`);
    let multiply = prompt(`На сколько умножить?`);
    let devid = prompt(`На сколько разделить?`);

    
    const res1 = (((number - minus) + plus) * multiply) / devid

    alert(`(((${number} - ${minus}) + ${plus}) * ${multiply}) / ${devid} = ${res1}`)
    

    // Task 3

    let h = ''

    for (let i = 0; i < 6 ; i++) {
      h = h + '#'
      console.log(h)
    }