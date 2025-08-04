 
// // console.log( "a + b = " , c );
// // console.log("a - b = ", a - b );
// // console.log("a * b = " ,a * b);
// // console.log(" a * b =" , a * b)
// // console.log(" a % b =", a%b )
// // console.log("a ** b =", a**b)
// // console.log( "++a = ", ++a)
// // console.log(" --a =", --a)
//  let a = 8
//  let b = 5
//  console.log("a =" , a, "& b = " ,b);
// a **= 4;
// console.log("a =", a )


// conditional statement 

// let age = 19

// if ( age > 18 ){
//     console.log (" you can vote ")
// }

// if ( age < 18) {
//  console.log(" you cannot vote")   
// }

// let num = 1000000093839835

// if ( num% 2 === 0){
//     console.log( num ,"is even")
// } else { 
//     console.log( num ,"is odd")
// }

// let mode = "green";
// let color;

// if ( mode === "dark"){
//     color = "dark"
// } else if ( mode === "blue"){
//     color = "blue"
// } else if ( mode === "purple"){
//     color = "purple"
// } else if ( mode === "pink"){
//     color = "pink"
// } else{
//     color = "white"
// }

// console.log(color)
// let mode = prompt("Enter a theme (dark, blue, purple, pink):");
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "purple") {
//   color = "purple";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else if (mode === "white") {
//   color = "white";
// } else {
//   color = "green";  // default
// }

// console.log("Color is: ", color);


// let age = 19;
// age >= 18 ? console.log("adult") : console.log("not-adult");



// let number = +prompt("Enter your number:");

// if (number % 5 === 0) {
//   console.log(number, "is a multiple of 5");
// } else {
//   console.log(number, "is not a multiple of 5");
// }

// let num = +prompt("Enter your obtained marks");

// if (num >= 80 && num <= 100) {
//   console.log("Your Grade Is A");
// } else if (num >= 70 && num <= 79) {
//   console.log("Your Grade Is B");
// } else if {
//   console.log("Your Grade Is C or below");
// }


// for ( let i = 0 ; i<= 100 ; i++){
//   if ( i%2 === 0){
//     console.log( "num is ", i)
//   }
// }

// let gameNum = 25;
// let userNum = +prompt("Guess the number");   

// while (userNum !== gameNum) {
//   userNum = +prompt("Your number is not correct, guess again");
// }     

// console.log("Congratulations! You guessed the correct number:", gameNum);

// let str1 = " apnacollege"
// console.log(str1 [3]);//a

// let obj ={
// item : "pen",
// cost : 100,
// };
// let output = `the cost of ${Obj.item} is ${obj.cost} rupee `;
// console.log ( output );
// let name = prompt ("enter your name");
// let length = name.length;
//  let finalname = "@" + name + length;
//  console.log(finalname);

// arrays

// let marks =[ 57,9,30,83];
// console.log(marks);
// console.log(marks.length);
// console.log( marks[2] = 93);
// console.log( marks [ 2 ]); 


// arrays k upper looping

// let marks = [ 9,56,94,61,85,10,];
//  for ( let i = 0 ; i< marks.length ; i++ ){
//      console.log(marks[i]);
//  }

// for (let num of marks){
//     console.log(num);
// }

// let marks = [43,45,23,65,234,29,39,94,64]
// let sum = 0

// for ( let val of marks ){
// sum += val
// }
// let avg = sum / marks.length;
// console.log ( " avg marks of class is"  ,avg);

// let fod = ["apple" ,"banana" ," grapes"];
// console.log ( fod );

// let marks = [0,9,8,3,4,6,0,7]
// marks.splice (1,3,101,102 );
// console.log( marks)


// practic qs

// let companies = [ "blomeberg", "microsoft", " uber", " google", "IBM", "Netflix"]
// companies.shift ()
// companies.splice (1,1,"ola");
// companies.push ( "Amazone");
// console.log(companies)

// function Name (){
//     console.log("hello world")
// }
// Name()

// const mul = ( a , b ,c , d) => {
// console.log(a*b+c*d);
// }

// mul(3,5,7,2)//


// prac qs

// function count (str){
//     for (val of str ){
    
//   if ( val === "a" || val === "e" ||val === "i" ||val === "o" ||val === "u"  ){
//         count++
// }} 
// return count;
// }
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " From Apna Colege" 





// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".Choice");
// const userScoreDisplay = document.getElementById("User-Number");
// const compScoreDisplay = document.getElementById("comp-number");
// const msgBox = document.getElementById("Msg-box");


// function getComputerChoice() {
//   const options = ["Rock", "paper", "Scissor"];
//   const randomIndex = Math.floor(Math.random() * 3); // 0, 1, 2
//   return options[randomIndex];
// }


// function playGame(userChoice) {
//   const compChoice = getComputerChoice();

//   if (userChoice === compChoice) {
//     // Draw condition
//     msgBox.innerText = `Draw! Both chose ${userChoice}`;
//     msgBox.style.backgroundColor = "#7c7c7c";
//   } else if (
//     (userChoice === "Rock" && compChoice === "Scissor") ||
//     (userChoice === "paper" && compChoice === "Rock") ||
//     (userChoice === "Scissor" && compChoice === "paper")
//   ) {
//     //user wins
//     userScore++;
//     userScoreDisplay.innerText = userScore;
//     msgBox.innerText = `You Win! ${userChoice} beats ${compChoice}`;
//     msgBox.style.backgroundColor = "green";
//   } else {
   
//     compScore++;
//     compScoreDisplay.innerText = compScore;
//     msgBox.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
//     msgBox.style.backgroundColor = "red";
//   }
// }


// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });

//simple function
// function myFunction(){
//   console.log("welcome!");
//   console.log ("Apna College")
//}
//greet function
// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Mustafa");

//add function
// function add(a,b){
//   return a + b;
// }
// let result = add(5,7)
// console.log(result);
//arrow function
// let add2 = (a, b) => {
//   return a + b;
// };
// let answer = add2 (5,4)
// console.log (answer)
//functions at page
// function myintro(){
//   console.log("my name is Mustafa");
//}
// //call back 
// function greetUser(callback) {
//   console.log("User ko greet karna hai...");
//   callback();
// }

// function sayHello() {
//   console.log("Hello from callback!");
// }

// greetUser(sayHello);
//callback 2
// function greetUser(callback) {
//   console.log("hello");
// }

// function sayhello() {
//   console.log("Mustafa");
// }

// let helloMustafa = greetUser(sayhello);
// console.log(helloMustafa);
//ASYNC PROGRAMMING FUNCTION

// setTimeout(()=>{
// console.log ("hello");
// }, 5000)
//functions at page
// function myintro(){
//   document.writeln("my name is Mustafa");
//   document.writeln("<br>")
//   document.writeln("i am 15 yeras old");
//   document.writeln("<br>")
//   document.writeln("i live in karachi");
//    document.writeln("<br>")
//}
//myintro()
//function with arrguments
// function fullnamefunc(fname, lname){
//   document.writeln("Hello" + "Mustafa", "Memon"  )
//     document.writeln("<br>")
//     document.writeln("Hello" + "Ali", "Memon"  )
//       document.writeln("<br>")
//     document.writeln("Hello" + "Waqas", "Memon"  )
// }
// fullnamefunc();
// Promises
// let promise = new Promise((resolve, reject) => {
//   resolve("Promise completed successfully");
// });

// function asyncfunc (){
// return new Promise ((resolve , reject ) => {
//   setTimeout (() => {
//     console.log ( " done" );
//     resolve ("success")
//    },2000 );
// });
// }

// let p1 = asyncfunc()
// p1.then ((res) =>{
//   console.log(res);
// }
// )

//fetch API 

// let p = fetch(()=>{
//         console.log ("API is successfull ")
// }
// )
let btn = document.querySelector("#btn")
let p = document.querySelector("#para")
const url = "https://catfact.ninja/fact"
const getcatfacts = async ()=>{
let response = await fetch (url) ;
let data = await response.json();
p.innerText = (data.fact);
}
getcatfacts()
btn.addEventListener("click", getcatfacts);