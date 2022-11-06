//Task 1 
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

//Task 2
let secInMin = 60;
let minInHour = 60;
let hourInDay = 24;
let daysInYear = 365;
let myAgeInSeconds = secInMin * minInHour * hourInDay * daysInYear * 28;
console.log(myAgeInSeconds);

//Task 3
let count = 42;
let userName = '42';
console.log(String(count));
console.log(Number(userName));
//second method
console.log(count + '');
console.log(userName * 1);

//Task 4
let a = 1;
let b = 2;
let c = "белых медведей";
console.log(`${a}${b} ${c}`);

//Task 5
let a5 = "доступ";
let b5 = "морпех";
let c5 = "наледь";
let d5 = "попрек";
let e5 = "рубило";
let lengthWords = a5.length + b5.length + c5.length + d5.length + e5.length;

//Task 6
let decorations = "pillow";
let d = 23;
let result = true;
console.log(`Variable: decorations have type: ${typeof decorations}`);
console.log(`Variable: d have type: ${typeof d}`);
console.log(`Variable: result have type: ${typeof result}`);

//Task 7
let userName1 = prompt("Enter your name");
let userAge = prompt("Enter your age");
console.log(userName1, userAge);

//Task 8
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];