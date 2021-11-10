'use strict';

//DOM = UMOŽŇUJE V JS PRACOVAT S HTML
//document object model
//PRÁCE V DOM NENÍ JAVASCRIPT FUNDAMENTALS, ALE SPÍŠ NADSTAVBA - KNIHOVNA, framework
//DĚJE SE BEHIND THE SCENES, NEMUSÍM NIC INSTALOVAT

document.querySelector('.message');
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent); //zobrazí čistě jen text

document.querySelector('.message').textContent;
//document.querySelector('.message').textContent = "Correct Number"; //změnil jsem text

//document.querySelector('.guess').value = 0; //nastavil jsem defaultní hodnotu

/*
const makeSomethingOnHandleOfClick = function(){
  console.log(document.querySelector('.guess').value); //vypíše do konzole hodnotu
  document.querySelector('.message').textContent = "Correct Number!" //přepíšu text z .message
} 

document.querySelector('.check').addEventListener('click', makeSomethingOnHandleOfClick); //HANDLE NA CLICK 
*/
  

//MÍT PROMĚNNOU, VE KTERÉ BUDEME MÍT ULOŽENÉ RANDOM ČÍSLO

let secretNumber = Math.trunc(Math.random() * 20) + 1;      //Math.trunc = vše, co je za desetinnou čárkou, SMAŽE
console.log(secretNumber);
let score = 20;
let highScore = 0;

//DRY!!!
const displayMessage = function (message) { //má obsahovat queryselector a ukládat do toho hodnotu parametru
  document.querySelector('.message').textContent = message;
}

const displayCMessage = function (clas, message) { //má obsahovat queryselector a ukládat do toho hodnotu parametru
  document.querySelector(`.${clas}`).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value); //přetypuje ze stringu do čísla
  console.log(guess, typeof guess);
  if(guess > 20 || guess < 0 ) { //MOJE ŘEŠENÍ -> OŠETŘIL JSEM HRANICE OD-DO ZVOLENÉHO ČÍSLA
     //document.querySelector('.message').textContent = 'Select number between 1-20';
     displayCMessage('message', 'Select number between 1-20'); //POUŽIJU VŠUDE, KDE JE .TEXTCONTENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   } else if(secretNumber === guess) {
     //document.querySelector('.message').textContent = 'Correct Number'; //upravit v HTML => zobrazí text "CORRECT NUMBER"
     displayMessage('Correct Number');
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
     document.querySelector('.number').textContent = secretNumber;
     if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
     } 
   } else if(guess > secretNumber) {
     //document.querySelector('.message').textContent = 'Too high'; //jedna výtka 
     displayMessage('Too high');
     score = score - 1;                                          //score--
     document.querySelector('.score').textContent = score;
        if (score === 0) {
        //document.querySelector('.message').textContent = 'YOU LOSE'; //PROHRAL JSI (při score = 0)
        displayMessage('You lose');
        }
   } else if(guess < secretNumber) {
     //document.querySelector('.message').textContent = 'Too low'; //jedna výtka
     displayMessage('Too low'); 
     score = score - 1;  
     document.querySelector('.score').textContent = score;
        if (score === 0) {
        //document.querySelector('.message').textContent = 'YOU LOSE'; //PROHRAL JSI (při score = 0)
        displayMessage('You lose');
        }
   }
    }
);

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

const resetFunction = function () {
  document.querySelector('.guess').value = ''; //reset guessu
  //document.querySelector('.message').textContent = 'Start guessing...'; //reset hlášky
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = 20; //reset score
  document.querySelector('body').style.backgroundColor = '#222'; //reset barvy pozadí
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?'; 
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; 
  console.log(secretNumber);
}

document.querySelector('.again').addEventListener('click', resetFunction);





//3. 10.
//DRY - dont repeat yourself

//PŘEPSAT KOD, AT JE KRATŠÍ pomocí fce 40-43 

//NOVÁ VERZE - záloha

const displayMessage = function (message) { //má obsahovat queryselector a ukládat do toho hodnotu parametru
  document.querySelector('.message').textContent = message;
}

const displayCMessage = function (clas, message) { //má obsahovat queryselector a ukládat do toho hodnotu parametru
  document.querySelector(`.${clas}`).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value); //přetypuje ze stringu do čísla
  console.log(guess, typeof guess);
  if(guess > 20 || guess < 0 ) {
     //původní kod: document.querySelector('.message').textContent = 'Select number between 1-20';
     displayCMessage('message', 'Select number between 1-20'); //POUŽIJU VŠUDE, KDE JE .TEXTCONTENT!!!
   } else if(secretNumber === guess) {
     //původní kod: document.querySelector('.message').textContent = 'Correct Number'; //upravit v HTML => zobrazí text "CORRECT NUMBER"
     displayMessage('Correct Number');
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
     displayCMessage('.number', secretNumber);
     if(score > highScore) {
        highScore = score;
        displayCMessage('.highscore', score);
     } 
   } else if(guess > secretNumber) {
     //původní kod: document.querySelector('.message').textContent = 'Too high'; //jedna výtka 
     displayMessage('Too high');
     score = score - 1; //score--
     displayCMessage('.score', score);
        if (score === 0) {
        //původní kod: document.querySelector('.message').textContent = 'YOU LOSE';
        displayMessage('You lose');
        }
   } else if(guess < secretNumber) {
     //původní kod: document.querySelector('.message').textContent = 'Too low'; //jedna výtka
     displayMessage('Too low'); 
     score = score - 1;  
     displayCMessage('.score', score);
        if (score === 0) {
        //původní kod: document.querySelector('.message').textContent = 'YOU LOSE'; //PROHRAL JSI (při score = 0)
        displayMessage('You lose');
        }
   }
    }
);

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/

const resetFunction = function () {
  document.querySelector('.guess').value = ''; //reset guessu
  //původní kod: document.querySelector('.message').textContent = 'Start guessing...'; //reset hlášky
  displayMessage('Start guessing');
  displayCMessage('.score', '20') //document.querySelector('.score').textContent = 20; //reset score
  document.querySelector('body').style.backgroundColor = '#222'; //reset barvy pozadí
  document.querySelector('.number').style.width = '15rem';
  displayCMessage('.number', '?') //document.querySelector('.number').textContent = '?'; 
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; 
  console.log(secretNumber);
}

document.querySelector('.again').addEventListener('click', resetFunction);
