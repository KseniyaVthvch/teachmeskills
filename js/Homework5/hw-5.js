//Task 1
const car={
    color:'green',
    maxSpead:350,
}
delete car.color
delete car.maxSpead
console.log(car)

//Task 2
const bag = {
    material:'linen',
    colorBag:'red', 
}
 console.log("material" in bag)

//Task 3
const student = {
        name: 'John',
        age: 19,
        isHappy: true
}
for (let key in student) {
    console.log(key);  
    console.log(student[key]); 
  }

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
}

console.log(colors['ru pum pu ru rum'].red,colors['ru pum pu ru rum'].blue)


//Task 5
const salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
function calcSalaries(obj){
    let sum=0
    for (let k in obj){
        sum=sum+obj[k]}
        return sum/Object.keys(obj).length
    }
console.log(calcSalaries(salaries))

//Task 6
const secureUserName1= prompt('Введите имя');
const secureUserPasword1=Number(prompt('Введите число'));
const secureUserName2= prompt('подтвердите имя');
const secureUserPasword2=Number(prompt('подтвердите число'));
let superSecureTerminal={
    allUserNames:[],
    _userName:'',
    allUserPasword:[],
    _userPasword:'',
    showHistory(){
        console.log(this.allUserNames);
        console.log(this.allUserPasword);
      },
    
  get username(){
    return this._userName;
  },
  set username(name){
    if (name===secureUserName1&&secureUserName2){
    this._userName=name;
    this.allUserNames.push(name);}
    else{
        console.log("is not true")
    }
  },  
  get userpasword(){
    return this._userPasword;
  },
  set userpasword(pasword){
    if (pasword===secureUserPasword1&&secureUserPasword2){
    this._userPasword=pasword;
    this.allUserPasword.push(pasword);}
    else{
        console.log("is not true")
    }
  }  
}
let myTerminal =Object.create(superSecureTerminal);
myTerminal.username=secureUserName1;
myTerminal.userpasword=secureUserPasword1;
myTerminal.showHistory();

//ADVANCED level
//Task 1
const student1 = {
    name: 'Polina',
    age: 27,
}

const student2 = {
    name: 'Polina',
    age: 27,
}
JSON.stringify(student1)
console.log(JSON.stringify(student1)===JSON.stringify(student2))

//Task 2
const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    }
 }
function getName(context){
    context.bird
 }
 console.log(getName);
