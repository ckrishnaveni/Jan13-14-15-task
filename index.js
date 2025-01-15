//FizzBuzz with "Hello" and "Javascript" 
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("hello javascript")
    }
    else if (i % 3 === 0) {
        console.log("hello")
    }
    else if (i % 5 === 0) {
        console.log("javascript")
    }
    else {
        console.log(i);
    }  

}

// Check Leap Year 
let year=prompt("Enter year");
let leapYearResult;
function isLeapyear(){
if((year%100===0) ? (year%400===0):
(year%4===0)) {
    leapYearResult="leap year"
}
else {
    leapYearResult="Not a leap year"
}
}
isLeapyear();
alert(leapYearResult);

// factorial
let factNum = prompt("Enter a No. to check the factorial");
let factorialresult;
function factorial() {
    factNum = parseInt(factNum)
    if (factNum === 0) {
        factorialresult = 1;
    }
    else if (factNum < 0) {
        factorialresult = "Factorial is not defined for negative numbers"
    }
    else {
        factorialresult=factNum;
        for (let i = factNum-1; i > 0; i--) {
            factorialresult *= i;
        }
    }
}
factorial();
alert(factorialresult)

// even no's
let enternum = prompt("Enter a number to get even numbers");
let numResult=""
enternum=Number(enternum)
function EvenNum(){
if(enternum<0 || isNaN(enternum)){
console.log("Please enter a valid non-negative number.")
}
else{
    for (let i = 0; i <= enternum; i++) {
        if (i % 2 === 0) {
            numResult +=i+(i<enternum && i+2<=enternum? ",":"")
        }     
        else {
        }
    }
}
}
EvenNum();
console.log(numResult);


// multiplication table
let num=prompt("Enter a Num to get multiplication table");
let endnum=10;
let mulResult;
function multiplication(){
for(i=1;i<=endnum;i++){
    console.log(`${num} X ${i} = ${num*i}`)
}
}
multiplication()

// greet user
let user=prompt("Enter your name");
alert(`Hello, ${user}!`)

// Remove vowels from a string
let inputStr=prompt("Enter text to remove vowels");
let resultstr=inputStr.replace(/[aeiouAEIOU]/g,'');
alert("String after removing vowels: " + resultstr);

// sum of digits in a number
let sum=prompt("Enter a number to sum the digits")
sum = Number(sum)
let result=0;
function sumOfDigits(){
    let sumString=sum.toString()
for(i=0;i<sumString.length;i++){
result+=Number(sumString[i]);
}
}
sumOfDigits();
alert(`The sum of digits is: ${result}`)