/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Step 2 Declare the Phrase Class.

class Phrase {
  // Step 3 . Create a constructor method inside each class .
  constructor(phrase) { // phrase class constructor method receive a on parameter 'phrase'.
      // Properties of Phrase class.
      // first set to 'phrase'parameter then convert to lower case as instructed.
      this.phrase = phrase.toLowerCase();

      // lets go to app.js and test our code.

}
      // Step 6 . Create a method addPhraseToDisplay();
      /* Display phrase on game board  */
      addPhraseToDisplay(){// Display the Phrase to the game board.
        const selectElement = document.querySelector('#phrase ul');
        let letters = '';
        const noOfWords = this.phrase.split('');
        noOfWords.forEach(char => {
            if (char !== ' ') {
              letters+= (`<li class="hide letter ${char}">${char}</li>`);
            } else {
              letters += (`<li class="space">${char}</li>`);
            }
            return selectElement.innerHTML = letters;
          });

      //Lets go to app.js and test our code.and test this in app.js with the following code
/*const game = new Game(); Test Code in app.js
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay(); Success */
// Back to Game.js  complete the Step-7//

}
 
    /*************************** Step 9 . Part 2 **********************************/
  //user interaction to the game
  /**
   * Checks if passed letter is in phrase
    @ parameter (string) letter - Letter to check
  */
  checkLetter(letter) {// Check if the letters selected by player Match to phrase.
    return this.phrase.includes(letter);
  } // Test code run in console with the following code
  //game.activePhrase.checkLetter('a') // Success

  /**
  * Displays passed letter on screen after a match is found  *
   @param (string) letter - Letter to display  */

  showMatchedLetter(letter) {
//Reveals the letter(s) on the board that matches the  player's selection
       if (this.checkLetter(letter) === true) {
           $('.letter').each(function() {
               if ($(this).text() === letter) {
                   $(this).addClass('show');
                   $(this).removeClass('hide');
               }
           });
       }
     }
  
}
