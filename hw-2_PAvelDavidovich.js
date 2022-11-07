//Task 1
let x = 20;
let y = 58;
let z = 42;
// console.log(x+y+z);
//TASK 2
let sec = 1;
let min = sec * 60;
let hrs = min * 60;
let day = hrs * 24;
let numberDaysTillNextMonth;
let year;
let myAgeInSeconds = day * 22;
console.log(myAgeInSeconds);
//Right decision
// function newAgeInSeconds(birthday) {
//     return console.log(Math.round((new Date() - new Date(birthday)) / 1000));
// }
// setInterval(() => {
//     newAgeInSeconds('1997-09-17')
// }, 1000);
//TASK 3
let numToStr = 42;
numToStr = String(numToStr);
let strToNum = '42';
strToNum = Number(strToNum);
//TASK 4
let a = 1
let b = 2
let c = "белых медведей";
console.log(`${a}${b} ${c}`);
//TASK 5
let w1 = 'доступ'; 
let w2 = 'морпех';
let w3 = 'наледь';
let w4 = 'попрек';
let w5 = 'рубило';
const lengthWords = `${w1.length + w2.length+ w3.length + w4.length + w5.length}`;
console.log(lengthWords);
//TASK 6
let num = 123;
console.log(`Variable ${num} has type: ${typeof num}`);
let str = '123';
console.log(`Variable ${str} has type: ${typeof str}`);
let boolean = true;
console.log(`Variable ${boolean} has type: ${typeof boolean}`);
//TASK 7
// console.log(prompt('Input age and name:'));
//TASK 8
const arr = ["обернись", "неужели", "огурцы", "липкие", "?!"];
const getWordFrom2ndLetters = arr.reduce((result, el)=>{
    return typeof el[1] !== 'undefined' ? result + el[1]: result;
}, '');
console.log(getWordFrom2ndLetters);
