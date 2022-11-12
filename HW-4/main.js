//Task 1
function getSum(maxNumber) {
  let i = 0;
  let sum = i;
  while (i < maxNumber) {
    sum = sum + i;
    i++;
  }
  return sum;
}


//Task2
function getOverPayment(amount) {
  const percent = 17;
  const years = 5;
  let summary = 0;
  let i = 0;
  while (i < years) {
    let amountLeft = amount - (amount / years * i);
    let overPayment = amountLeft * percent / 100;

    summary = summary + overPayment;
    i++
  }

  return summary;
}
console.log(getOverPayment(5000));


//Task 3
function trimString(string, numFrom, numTo) {
  string = String(string);
  const stringSliced = string.slice(numFrom, numTo);
  return stringSliced;
}


//Task 4
function getSummary(a, b) {
  let sum = b;
  if (a === b) {
    return sum;
  }
  else {
    while (a < b) {
      sum = sum + a;
      a++;
    }
    return sum;
  }
}


//Task 5
function foo() {
  console.log("foo");
}

function boo() {
  console.log("boo");
}

function fooboo(a, f1, f2) {
  if (a === true) {
    f1();
  }
  else {
    f2();
  }
}
fooboo(true, foo, boo);