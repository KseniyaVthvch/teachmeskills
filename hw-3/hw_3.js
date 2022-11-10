//Task 1
const strng = "true";
const boll = false;
const num = 17;
const undf = undefined;
const null_const = null;
console.log(typeof strng, typeof boll, typeof num, typeof undf, typeof null_const);

//Task 2
let height = 15;
let width = 20;

if (height > width) {
  console.log(height)
} else {
  console.log(width)
}


//Task 3
for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
  else {
    continue
  }
}

//Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = false;
let shouldGoToWork = false;
if ((key === true && documents === true && pen === true) && (apple === true || orange === true)) {
  shouldGoToWork = true
}

//Task 5
let userNumber = prompt(`Напишите любое число?`);
if ((userNumber % 3 === 0) && (userNumber % 5 === 0)) {
  console.log("FizBuz")
} else if (userNumber % 3 === 0) {
  console.log("Buz")
} else if (userNumber % 5 === 0) {
  console.log("Fiz")
}

//second solution
let userNumber2 = prompt(`Напишите любое число?`);
let result = "";
if (userNumber % 5 === 0) {
  result = result + "Fiz"
}
if (userNumber2 % 3 === 0) {
  result = result + "Buz"
}
console.log(result)

//Task 6
let userAge = prompt(`Сколько тебе лет?`);
if (userAge > 18) {
  console.log("Попей пивка")
} else {
  console.log("Пей колу")
}
if (userAge >= 16 && userAge <= 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори")
}

//Task 7 
let userDestination = prompt(`Выберите направление`);
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
    console.log("Проверьте данные");
}

//ADVANCED level
//Task 1 
let userName = 'пОлИнА нАбЕрЕжНаЯ';
userName = userName.toLowerCase();
let userSurnameIndex = userName.indexOf(' ') + 1;
let newUserName = userName[0].toUpperCase() + userName.slice(1, userSurnameIndex) + userName[userSurnameIndex].toUpperCase() + userName.slice(userSurnameIndex + 1);
console.log(`Привет, ${newUserName}`);

//Task 2
let startNumber = prompt(`Назови любое число`);
let minNumber = prompt(`На сколько разделить?`);
let addNumber = prompt(`На сколько увеличить?`);
let multipleNumber = prompt(`На сколько умножить?`);
let devideNumber = prompt(`На сколько разделить?`);
console.log(`((((${startNumber} - ${minNumber}) + ${addNumber}) * ${multipleNumber}) / ${devideNumber} = ` + ((((startNumber - minNumber) + addNumber) * multipleNumber) / devideNumber));

//Task 3
let output = '';
for (let i = 0; i < 6; i++) {
  output = `${output}#`;
  console.log(output);
}