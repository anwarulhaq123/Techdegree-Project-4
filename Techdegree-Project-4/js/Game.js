/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Step 2 Declare the Game Class

class Game {
  // Step 3 . Create a constructor method inside each class .

  constructor() { // no Perametes for  this constructor.
    // The Game class has the following properties.

    this.missed = 0; // initiall Value is '0' bcz no guess is made yet or in the start.
    this.phrase = this.createPhrases(); // initailly set as an empty arrray
    // Lets go to app.js to check our code after intilising the Game class.
    this.activePhrase = 'null'; // This is the phrase object thats's Currently in play.
  }

  // Step 4. Option # 1
  /* Creates phrases for use in game
    @return {array} An array of phrases that could be used in the game  */
    createPhrases() {
         return [{
             phrase: 'I love Javascript'
         },
         {
             phrase: 'Every moment is a fresh beginning'
         },
         {
             phrase: 'Never regret anything that made you smile.'
         },
         {
             phrase: 'Die with memories not dreams'
         },
         {
             phrase: 'Aspire to inspire before we expire'
         }];
     }

     // Lets got to app.js and test our code. All phrases should be log in to console.
     //Success by Applying the test Code.

// Step 5. getRandomPhrase(); Method
/* Selects random phrase from phrases property
  @return {Object} Phrase object chosen to be used  */
getRandomPhrase() {
   const randomPhrases= Math.floor(Math.random() * this.phrase.length);
    return this.phrase[randomPhrases];// Lets got to app.js and test our Code.
// This code will log on the random Quoutes on the console.
// Success with the following test code in app.js
/*const logPhrase = (phrase) => {
    console.log(`randomPhrases - phrase: `, phrase.phrase); };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase()); Test Code in app.js */
}
// Step 7. /* Begins game by selecting a random phrase and displaying it to user  */
startGame() {





}
 






}
