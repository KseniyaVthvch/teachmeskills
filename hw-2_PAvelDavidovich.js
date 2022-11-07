//Task 1
let x = 20;
let y = 58;
let z = 42;
// console.log(x+y+z);
//Task 2
let sec = 1;
let min = sec * 60;
let hrs = min * 60;
let day = hrs * 24;
let year;
let myAgeInSeconds = day * 22;
// console.log(myAgeInSeconds);
function ageInSeconds(age, month, birthday){
    let result = 0;
    for(let i = 0; i < age; i++){
        if(age - i === 1){
            result += year + (day * 30.416667 * month) + (day * birthday);
            console.log(result);
            break;  
        }
        i % 4 ===0 ? (year = day*366): (year = day*365);
        result += year;
    }
    return console.log(Math.round(result));
}
ageInSeconds(25, 4, 16);
