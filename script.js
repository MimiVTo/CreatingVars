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

var listLength = list.length;

console.log(listLength);

list.push(7);

console.log(list);

list.pop(); // Gets rid of last one

console.log(list);

var stringList = list.toString(); //toString turns it into a string
console.log(stringList);

var joinList = list.join("-"); // Changes the ", " into dashes
console.log(joinList);

// EXAMPLE 

var Fname = "Mimi";

var numOfChar = Fname.length;

console.log(numOfChar);

var pieceMimi = Fname.slice(1,4);
console.log(pieceMimi);

// LOOPS

var studentNames = ["Mimi", "Imani","Niusha"];
var Nums = [2, 6, 5, 1];
var HighestNum = Nums[0];

for (var i=0; i < list.length;i++){
    console.log("done");
}

for (var i=0;i<studentNames.length;i++){
    console.log(studentNames[i]);
}

for (var i=0; i < Nums.length; i++){

    if(Nums[i]>HighestNum){
        HighestNum = Nums[i];
        console.log(HighestNum);
    }
}
