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

// FUNCTIONS -------

function printHello(){
    console.log("Hello")
}

function changeWords(){
    pElement.innerText = "New stuff.";
}

printHello();

console.log(parentDiv);

//ON CLICKS --------

parentDiv.addEventListener("click",printHello);

pElement.addEventListener("click", changeWords);

//PARAMETERS --------

function addNumbers(leftNumber, rightNumber){

    // var numOne = 4;
    // var numTwo = 2;
    var sum = leftNumber + rightNumber;
    console.log(sum);

    return sum;

}

var sum = addNumbers(0, 4);
console.log(sum);

//EVENT ----------

var text = document.getElementById("line")

function elementClicked(event){
    console.log(event.target);
}

line.addEventListener("click", elementClicked);

//ARRAY -----

var list = [1, 2, 3, 4, 5, 6]

console.log(list);

var listLength = list.length;

console.log(listLength);

list.push(7);

console.log(list);