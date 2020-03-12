//different ways to get an html collection of elements
let numArray = [];
shuffleCards();

//checkForMatch();



let getAllButtons = document.querySelectorAll('.button');

let index=0;
getAllButtons.forEach((Element)=>{
    console.log(Element)
    flipCards()
    index++})   


function flipCards()
{

    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("flip-card-to-back").style.visibility ="visible";
        document.getElementById("flip-card-to-front").style.visibility ="visible";
    
        document.getElementById("flip-card-to-back").onclick = function() {
        document.getElementById("flip-card").classList.toggle("do-flip");
        };
    
        document.getElementById("flip-card-to-front").onclick = function() {
        document.getElementById("flip-card").classList.toggle("do-flip");
        };
    });
}    

/*
//ateempt 1
var refreshIt = document.getElementById("refresh");
refreshIt.addEventListener("click", shuffleCards);
*/

/*
//attempt2
var buttonOn = document.getElementById("front");
var buttonOff = document.getElementById("back");

document.getElementById("buttonOnclick").onclick = function(){
    myFunction()
};

function myFunction(){
    document.getElementById("back").classList.toggle("show");
}


document.getElementById("refresh1").onclick = function() {
    refresh1.innerHTML = "Im refreshing";
    //   shuffleCards()
};

document.getElementById("score1").onclick = function() {
    score1.innerHTML = "You win";
};
*/

function shuffleCards()
{
    numArray = shuffleArray();

    console.log("shuffleArray function: " + numArray);

    var allBackButtons = document.querySelectorAll('.toChange');
    console.log(allBackButtons);
    let i=0;
    allBackButtons.forEach(function(buttonValue){
            buttonValue.innerHTML = '' + numArray[i];   
        console.log(buttonValue.textContent);
        i++;
      

    })
}

function checkForMatch()
{
    let score = 0;
    console.log("Checking for a Match");

    var buttonsCheck = document.querySelectorAll('.toChange');
    let i = 0;
    let button1;
    let button2;
    buttonsCheck.forEach(function(buttonValue){
        let button1 = buttonValue.textContent;
        console.log("Value in button1: " + button1);
        
        let button2 = buttonValue.textContent;
        console.log("Value in button2: " + button2);        
    })
   

}



//bringOverLay();  


function shuffleArray()
{
    numArray = generateArray();
    numArray = copyArray();

    newLength = numArray.length - 1;
    let newIndex, temp;
        for (let j = newLength; j >= 0; j-- )
        {
            newIndex = Math.floor(Math.random()* (j+1));
            temp = numArray[j];
            numArray[j] = numArray[newIndex];
            numArray[newIndex] = temp;
        }
    return numArray;
}

function generateArray()
{
  for(let i = 0; i < 8; i ++)
  {
    let randomNum = (Math.ceil((Math.random()) * 9));
    while(numArray.lastIndexOf(randomNum) !== -1)//returns -1 if number not found. 
    {
      randomNum = (Math.ceil((Math.random()) * 9));
    }  
    numArray.push(randomNum);
  }
  return numArray;
}

function copyArray(){
  let length = (numArray.length-1);
    for(var i = 0; i <= length; i++)
    {
      numArray.push(numArray[i]);
    }
   return numArray;
}

function bringOverLay()
{
    var overLay = document.getElementById("overLayer");
    if(overLay.style.display === "block"){
        overLay.style.display = "none";
    }else{
        overLay.style.display = "block";
    }
}
/*

var allBackButtons = document.querySelectorAll('.toChange');
console.log(allBackButtons);

allBackButtons.forEach(function(buttonValue){
    buttonValue.textContent = 'testing';
    console.log(buttonValue.textContent);
})


let allBackButtons = document.getElementsByClassName('toChange');

Array.from(allBackButtons).forEach(function(item){
    console.log(item);
})


for(let i = 0; i < allBackButtons.length; i++) {
    console.log(' ' + allBackButtons[i].innerHTML.valueOf('h1'));
    console.log(allBackButtons[i]);
}

for(let i = 0; i < allBackButtons.length; i++) {
    let buttonValue = 'ZZZ';

    document.getElementsByClassName('toChange').innerHTML = buttonValue;
    console.log(' ' + allBackButtons[i].innerHTML.valueOf('h1'));
    console.log(allBackButtons[i]); 
}

*/
