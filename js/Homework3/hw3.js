//Task 1 
const word='true';
const bool1 = false;
const ageM = 17;
const non = undefined;
const test= null;
console.log(typeof word)
console.log(typeof bool1)
console.log(typeof ageM)
console.log(typeof non)
console.log(typeof test)

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

    
    for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
      console.log(i);
      }
      }

  



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

  // Task 1 

  const yourName = prompt ("Enter name","пОлИнА нАбЕрЕжНаЯ")
  const index = yourName.indexOf(" ")
  const firstName = yourName.slice(0,index);
  const lastName = yourName.slice(index+1);
  const resfirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const reslastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  console.log(resfirstName, reslastName)



// Task 2 

const num1 = prompt ("Введите число");
const num2 = prompt ("Сколько отнять");
const num3 = prompt ("Сколько прибавить");
const num4 = prompt ("Сколько умножить");
const num5 = prompt ("На сколько поделить");
const result = (((num1 - num2) + num3) * num4/num5)
alert(`(((${num1} - ${num2}) + ${num3}) * ${num4} / ${num5}) = ${result}`)

//Task 3
let str = "#";
while (str.length<=6){
    console.log(str + "\n");
    str+="#";
}
