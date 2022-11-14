//Task 1 
const word='true';
const bool1 = false;
const ageM = 17;
const non = undefined;
const test= null;
console.log(typeof String(word))
console.log(typeof Boolean(bool1))
console.log(typeof Number(ageM))
console.log(typeof non)
console.log(typeof null)

//Task 2
let height = 15
let width = 20
let max = function (){
    if (height > width){
      console.log(height)
    } else if (height == width){
      console.log('Числа равны')
    } else {
      console.log(width);
    }
  }
  max();

  //Task 3
  const calculation = (n, maxNum) => {
    let number = [];
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
      console.log(i);
      }
      }
    return number;
  }
  console.log(calculation(3, 20));



   //Task 4 
  const key = true
  const documents = true
  const pen = true
  const apple = false
  const orange = true
  const shouldGoToWork = (key && documents && pen && (apple || orange))
console.log(shouldGoToWork)

   //Task 5

let num = Number(prompt("Введите число",""));
for ( ; num < 56; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
        console.log ( num, " = FizzBuzz" )
    } else {
        if ( num%5 === 0 ){
            console.log( num, " = Buzz" );
        } else {
            if ( num%3 === 0 ){
                console.log( num, " = Fizz" );
            }
        }
    }
}
//Task 6
const age =30
if (age>18){console.log(`Попей пивка`)}
else if (age>=16 && age<=18){console.log(`Можешь выкурить сигаретку, только маме не говори`)}
else{console.log(`Пей колу`)}

//Task 7
const a='юг'
const b='север'
const c='запад'
const d='восток'

function setDirection() {
    let choice = 'восток';
  
    switch (choice) {
      case 'юг':
        console.log ('на юг пойдешь счастье найдешь');
        break;
      case 'север':
        console.log ('на север пойдешь много денег найдешь');
        break;
      case 'запад':
        console.log ( 'на запад пойдешь верного друга найдешь');
        break;
      case 'восток':
        console.log ('на восток пойдешь разработчиком станешь');
        break;
      default:
        console.log ( '');
    }
  }
  // ADVANCED level

  // Task 1 не могу понять, почему 111я строка вызывает ошибку, что не так?

  const yourName = prompt ("Enter name","пОлИнА нАбЕрЕжНаЯ")
  const index = yourName.indexOf(" ")
  const firstName = yourName.slice(0,index);
  const lastName = yourName.slice(index+1);
  const resfirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const reslastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  console.log(resfirstName, reslastName)



// Task 2 

const num1 = promt("Введите число")
const num2 = promt("Сколько отнять")
const num3 = promt("Сколько прибавить")
const num4 = promt("Сколько умножить")
const num5 = promt("На сколько поделить")
const result = (((num1 - num2) + num3) * num4/num5)
alert(((((${num1}) - ${num2}) + ${num3})*${num1})/${num5} = ${result})

//Task 3
let str = "#";
while (str.length<=6){
    console.log(str + "\n");
    str+="#";
}
