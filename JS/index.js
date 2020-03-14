let numArray = [];
var allNumberCards = null;
let allCards = document.querySelectorAll('.memoryCard');
let score = 0;
shuffleCards();
displayScore();
refreshGame();
function shuffleCards(){  
    allNumberCards = document.querySelectorAll('.cardNumber');

    let newLength = allNumberCards.length - 1;
    let newIndex, temp;
       
    for (var j = newLength; j >= 0; j-- )
    {
        newIndex = Math.floor(Math.random()* (j+1));
        temp = allNumberCards[j].innerHTML;
        allNumberCards[j].innerHTML = allNumberCards[newIndex].innerHTML;
        allNumberCards[newIndex].innerHTML = temp;
    }

    for(let i = 0; i < allNumberCards.length; i++)
    {
        allCards[i].dataset.number = allNumberCards[i].innerHTML;
        console.log("Dataset number: " + allCards[i].dataset.number);    

    }
}

//selecting all the cards and saving them in a nodeList
//defining the click and calling function flipCard to flip each card

let cardHasFlipped = false; /*shows js has flipped card. will turn true if card flipped */
let lockOtherCards = false; 
let firstCardFlipped;
let secondCardFlipped;

//accessing the card that was clicked with this. 
//further access to elements classlist
function flipCard() {

    //if its true, dont flip more cards
    if (lockOtherCards) 
        return;
    
    //doesnt allow d´same card to flip twice and match with itself
    if(this === firstCardFlipped)
        return;
    

    this.classList.add('flip'); //adds a flip

    /**If no card flipped, flip clicked card and set flip to true */
    if(!cardHasFlipped) {
        cardHasFlipped = true;
        firstCardFlipped = this;
        return;
    }
    
    secondCardFlipped = this;
    lockOtherCards = true;

    checkForMatch();
}

function checkForMatch() {

//    let isMatch = firstCardFlipped.dataset.number === secondCardFlipped.dataset.number;
//    isMatch ? removeTheFlip() : turnCardsBack();
    if(firstCardFlipped.dataset.number === secondCardFlipped.dataset.number) {
        removeTheFlip();
        score ++;
        console.log("Score " + score);
        if(score === 8)
        {
            bringOverLay();
        }
    }
    else{
        turnCardsBack();
    }

}

function removeTheFlip() {
    firstCardFlipped.removeEventListener('click', flipCard);
    secondCardFlipped.removeEventListener('click', flipCard);
    resetBoard();
}

function turnCardsBack () {
    //    lockOtherCards = true; /*lock cards until two selected cards turn back */
    setTimeout(() => {
        firstCardFlipped.classList.remove('flip');
        secondCardFlipped.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard(){
    firstCardFlipped = null;
    secondCardFlipped = null;
    cardHasFlipped = false;
    lockOtherCards = false;
    
}
allCards.forEach(card => card.addEventListener('click', flipCard)); 

function refreshGame() {
   let refrehButton = document.getElementById('refresh');
   refrehButton.addEventListener('click', function() {
  //     shuffleCards();
        setTimeout(location.reload(true),t)
   });  
}

function displayScore() {
   let scoreButton = document.getElementById('score');
   scoreButton.addEventListener('mouseover', scoreFunction);
   scoreButton.addEventListener('mouseout', pointsFunction);
   
   function scoreFunction() {
       scoreButton.innerHTML = score;
   }
   
   function pointsFunction() {
       scoreButton.innerHTML = "Check Score";
   }
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

