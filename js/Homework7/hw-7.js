//Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach((item,index,arrey)=>{
    console.log(item)
}
)
//Task 1.1 (вторым способом ,через `function declaration` )
function example(num,...args){
    console.log(args)
}
example(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987)

// через цикл
for (let i = 0, l = fibonacci.length; i < l; i++) {
    console.log (fibonacci[i])
} 

//Task 2 
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
const newUsers = users.map((item,id) => (`member ${id + 1}` + ": " + `${item}`))
console.log(newUsers)

//2.1(вторым способом ,через `function declaration` )
function newUsersFunction(item,id) {
	return `member ${id + 1}` + ": " + `${item}`
}
console.log(users.map(newUsersFunction));

//Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21]
let positiveNumber=numbers.filter(function(item){
    return(item>0);
});
console.log(positiveNumber)
//3.1 (вторым способом ,через `function declaration` )

function positiveN(numb) {
	return numb >= 0
}
console.log(numbers.filter(positiveN))


//Task 4
const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
const total=fibonaci.reduce((acc,item,index,array)=>{
    return acc+item;
},0);
console.log(total)
//4.1(вторым способом ,через `function declaration` )
function ssum() {
    let result = 0;
    for (let i = 0; i < fibonaci.length; i++) {
      result += fibonaci[i];
  }
  return result;
}
    
    console.log(ssum(fibonaci));
//Task 5
const elements = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const res=elements.find(item=>item%2==0)
console.log(res)

//5.1(вторым способом ,через `function declaration` )
function evenElements(elem) {
	return elem % 2 === 0
}
console.log(elements.find(evenElements))


//ADVANCED level


//Task 2
let disemvowel = (str) => str.replace(/[aeiou]/gi, '')

console.log(disemvowel('This website is for losers LOL!'));

