/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Created the Class in Game,js and Phrase.js , Now test your Code

//const phrase = new Phrase();
 //const game = new Game();
 // Test is ok . Code is workig perfect as instructions.
 //const phrase = new Phrase('Life is like a box of chocolates');// Test code
//  console.log(`Phrase - phrase: ${phrase.phrase}`); // Test code.
// Test Code passed . get the Required results.
//const game = new Game(); Test code // Success
 //game.phrase.forEach((phrase, index) => { // Test Code
     //console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
  //});// Test Code
/*const logPhrase = (phrase) => {
    console.log(`randomPhrases - phrase: `, phrase.phrase); };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase()); Test Code */

/*const game = new Game();// Test Code
const randomPhrase = game.getRandomPhrase();// Test Code
const phrase = new Phrase(randomPhrase.phrase);// Test Code
phrase.addPhraseToDisplay();// Test Code */

//const game = new Game();// Test code for step 7
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// Step 8. Add the eventListenert to the Start Button id  (btn__rest).

let game ;
//eventListener  for 'start button' to start the game.
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game ();
  game.startGame();// Call to startGame() Method on the new game object.
});// Test the Code // Success.


/********************************Step 10 *****************************/
// Click  eventListener to each of the onscreen Keboard Buttons//

$('.key').on('click',(e) => {
  game.handleInteraction(e.target);
});



