// Task 1.
const x = 20;
const y = 58;
const z = 42;
console.log(x + y + z);
// Task 2. 
const sec = 60;
const min = 60;
const hours = 24;
const days = 365;
const myAge = 31;
const myAgeInSeconds = sec * min * hours * days * myAge;
console.log(myAgeInSeconds);
// Task 3.
const count = 42
const userName = '42'
console.log(typeof String(count));
console.log(typeof Number(userName));
console.log(typeof `${count}`);
console.log(typeof +userName);
// Task 4.
const a = 1
const b = 2
const c = "белых медведей"
console.log(a + `${b} ` + c);
console.log(a + String(b) + ' ' + c);
// Task 5.
const a1 = 'доступ' 
const b1 = 'морпех'
const c1 = 'наледь'
const d1 = 'попрек'
const e1 = 'рубило'
const lengthWords = a1.length + b1.length + c1.length + d1.length + e1.length 
console.log(lengthWords);
// Task 6.
const typeString = 'string'
const typeNumber = 25
const typeBoolean = true
console.log(`Variable: typeString have type: ${typeof typeString}`)
console.log(`Variable: typeNumber have type: ${typeof typeNumber}`)
console.log(`Variable: typeBoolean have type: ${typeof typeBoolean}`)
// Task 7.
let User = prompt('Enter your name and age');
console.log(User);

// Task 8.
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);