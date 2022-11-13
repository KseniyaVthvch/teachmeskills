//Task 1
function getSum(n){
    if (typeof n==="number" && n>=0)
    {
        let result=0
        for (let i=1; i<=n; i++){
            result=result+i}
            return result     
    }
}
const sum=getSum(100)
console.log("Sum",sum)

//Task 2 
function creditSum(s){
    if (typeof s==="number" && s>=0)
    {
        let result=0
        for (let i=5000; i<=s; i++){
            result=i*17/100*5}
            return result     
    }
}
const sumCredit=creditSum(5000)
console.log("Procint",sumCredit)

//Task 3
let str = 'Mozilla';
function trimString(str,a,b){
    if ((str.constructor===String) && (a>=0) && (b<=7))
    {
        return (str.slice(a,b) );
    }
}
console.log(trimString(str,1,5));

//Task 4 (getSum уже задействовано, использовала просто Sum)
let x = +prompt("Введите число","");
let y = Number(prompt("Введите число",""));

function range(x,y){
    let listRangeNumber = [];
    while( x <= y ){
        listRangeNumber.push(x);
        x++;
    }
    return listRangeNumber;
}

function Sum(range){
    let listSumNumber = 0;
    for (let k in range) {
        listSumNumber += range[k];
    }
    return listSumNumber;
}

alert( "Range this numbers " + range(x,y));
alert (Sum(range(x,y)));

//Task 5

let word = Boolean(prompt("Введите true or folse",""));
fooboo (
    function(foo) {return 'foo';},
    function(boo) {return 'boo';}
);

function fooboo (foo,boo){
    if (word === true){
        console.log(function(foo){return "foo"})
    }
    else(console.log(function(boo){return"boo"}))
}

//ADVANCED level
//Task 1
let arr = new Array(3);
let i;
for(i=0;i<3;i++)
{
    arr[i]= +prompt("Введите " +(i+1)+" сторону:","");
     }
    function trangel(arr){
    if(arr[0]<(arr[1]+arr[2])&&arr[1]<(arr[0]+arr[2])&&arr[2]<(arr[0]+arr[1]))
    {
    alert("Треугольник с такими сторонами существует");
    }
    else{
    alert("Треугольник с такими сторонами НЕ существует");
    }
    }
    trangel(arr);
    
//Task 2 не знаю как решить, попыталась аналогичный пример из нэта переделать, но не сработало
let n = Number(prompt("Введите число",""));
let m = Number(prompt("Введите число",""));
const calcChocolateSplits = (n, m) => n == 0 || m == 0 || n == 1 && m == 1 ? 0 : n*m-1;
const Solution = (n, m) => calcChocolateSplits(n, m);

describe('Описание', () => {
  it('тест #1', () => { expect(Solution(1, 1)).toEqual(0) })
  it('тест #2', () => { expect(Solution(2, 1)).toEqual(1) })
  it('тест #3', () => { expect(Solution(3, 1)).toEqual(2) })
})


//Task 3 не знаю как решить