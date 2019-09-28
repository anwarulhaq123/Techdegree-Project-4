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

const game = new Game();// Test code for step 7
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
