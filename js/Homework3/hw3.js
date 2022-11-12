//Task 1 
let word='true';
const bool1 = false;
const age = 17;
const non = undefined;
const test= null;
console.log(typeof word)
console.log(typeof bool1)
console.log(typeof age)
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
  const Calculation = (n, maxNum) => {
    let number = [];
    for (let i = 1; i < maxNum; i++) {
      if (i % n === 0) {
        number.push(i);
      }
    }
    return number;
  }
  console.log(Calculation(3, 20));

   //Task 4 
   let key = true
   let documents = true
   let pen = true
   let apple = false
   let orange = true
   let shouldGoToWork = "ready"
   if(key===true && documents === true && pen === true && apple === false || orange === true){
    console.log(shouldGoToWork);
   }
   else {
    console.log( "no ready");
}

   //Task 5

let num = 55;
for ( ; num < 56; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
        console.log ( num, " = FizzBuzz" )
    } else {
        if ( num%5 === 0 ){
            console.log( num, " = Buzz" );
        } else {
            if ( num%3 === 0 ){
                console.log( num, " = Fizz" );
            } else {
                console.log( num );
            }
        }
    }
}
//Task 6
const Age =30
if (Age>18){console.log(`Попей пивка`)}
else if (Age>=16 && Age<=18){console.log(`Можешь выкурить сигаретку, только маме не говори`)}
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
  const index = yourName.indexOf("")
  const firstName = yourName.slice(0,index);
  const lastName = yourName.slice(index+1);
  const resfirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const reslastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  console.log(resfirstName, reslastName)



// Task 2 нашла,но не сама, такой вариант решения, не очень понятен но работает. Если есть другой, то прошу помочь.

let Action = function(name, str, block) {
  this.name = name;
  this.str = str;
  this.call = block;
};
let del = new Action('Сколько отнять от предыдущего результата?', ' - ', function(a, b) {
  return a - b;
});
let add = new Action('Сколько прибавить к предыдущему результату?', ' + ', function(a, b) {
  return a + b;
});
let multiply = new Action('На сколько умножить предыдущий результат?', ' * ', function(a, b) {
  return a * b;
});
let divide = new Action('На сколько разделить предыдущий результат?', ' / ', function(a, b) {
  if (b == 0) throw 'Division by zero';
  return a / b;
});
 
let bot = function(actions) {
  let gets = function(index) {
    return +prompt(actions[index].name);
  };
 
  let lastAction = actions.length - 1;
 
  let singleAction = function() {
    let x = +prompt('Введите число:'),
      y = gets(lastAction);
 
    return x + actions[lastAction].str + y + ' = ' + actions[lastAction].call(x, y);
  }

  let severalActions = function() {
    let x = +prompt('Введите число:'),
      y, formula;
 
    formula = x;
 
    for (var i = 0; i < lastAction; i++) {
      y = gets(i);
      formula = '(' + formula + actions[i].str + y + ')';
      x = actions[i].call(x, y);
    }
 
    y = gets(lastAction);
    x = actions[lastAction].call(x, y);
    formula += actions[lastAction].str + y + ' = ' + x;
    return formula;
  }
 
  return lastAction == 0 ? singleAction() : severalActions();
}
 
let actions = [del, add, multiply, divide];
 
alert(bot(actions));

//Task 3
let str = "#";
while (str.length<=6){
    console.log(str + "\n");
    str+="#";
}
