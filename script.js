// This is the Start

var color = "green";
var name = "Mimi";
var radius = 5;
var letter = 'M';
var num1 = 3;
var num2 = 7;
var sum = num1 + num2;

console.log(sum);

//Practice

var randomNum = 32;

var parentDiv = document.getElementById("parent");

var pElement = document.getElementById("text");

if(randomNum < 10){
    console.log("The number is less than 10");
}

// FUNCTIONS 

function printHello(){
    console.log("Hello")
}

function changeWords(){
    pElement.innerText = "New stuff.";
}

printHello();

console.log(parentDiv);

parentDiv.addEventListener("click",printHello);

pElement.addEventListener("click", changeWords);