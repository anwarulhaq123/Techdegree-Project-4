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
    this.activePhrase = ' '; // This is the phrase object thats's Currently in play.
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
    return this.phrase[randomPhrases];//returns the random Phrases from index.
  // Lets got to app.js and test our Code.
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
    // Hide the Start Screen overlay
let hideOverlay = document.querySelector('#overlay');
hideOverlay.style.display = 'none';
    // Gets the Randome Phrase
 this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
    //Add the random phrase to display.
 this.activePhrase.addPhraseToDisplay();
// Lets move to app.js and test the code by applying the following test code.// Test code
//const game = new Game();// Test Code in app.js
//game.startGame(); // Test code
 //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);// Test Code//Success. 

}
  /*************************** Step 9 . Part 2 **********************************/
  //user interaction to the game

  /**
  * Checks for winning move  *
   @return {boolean} True if game has been won, false if game wasn't won   */
  checkForWin() {// Method to Check if the Player has reveald all the letters.
       const classLetter = document.querySelectorAll('.letter').length;
       const classShow =document.querySelectorAll('.show').length;
           if(classLetter === classShow ) {
               return true
           } else {
               return false
           }
       }// Test the code in the console with the following code.
  //game.checkForWin(); // Success.
  
  
  /**
  * Increases the value of the missed property  *
  Removes a life from the scoreboard  *
  Checks if player has remaining lives and ends game if player is out  */

  removeLife(){
        const life = document.querySelectorAll('#scoreboard img');

        for (let heartImg of life){
            if (heartImg.src.includes("liveHeart.png")){
                heartImg.src = 'images/lostHeart.png';
                break;
            }
        }
        this.missed += 1;

        if (this.missed === 5){

            this.gameOver(false);
        }
    }


gameOver(gameWon){ //Method to Check if the Player Win or Lost the game.
let overlay = document.querySelector('#overlay');
let message = document.querySelector('#game-over-message');
if (gameWon){
  overlay.style.display = 'block';
overlay.classList.add('win');
overlay.classList.remove('lose');
message.textContent=" Congratulations ! You Win ";
// Test Code// game.gameOver(true)// Success
this.resetGame()
}else{
  overlay.style.display = 'block';
  overlay.classList.add('lose');
  overlay.classList.remove('win');
message.textContent=" Sorry ! Better Luck Next Time ";
 // Test Code // game.removeLife();// Success. 
this.resetGame();


}

}

/********************************Step 10 *****************************/

handleInteraction(button) {
      if ($(button).attr('disabled')) {
          return;
      }  //console.log(button); // Success// Test Code.
      const buttonClick = $(button).text();

     if (this.activePhrase.checkLetter(buttonClick) === true) {
        //disable the Selected letters on screen.
          $(button).prop('disabled', true).addClass('chosen');
          this.activePhrase.showMatchedLetter(buttonClick);
          if (this.checkForWin() === true) {
              this.gameOver(true);
          }
      } else {
          // Add the 'wrong'Class and remove the life
          $(button).prop('disabled', true).addClass('wrong');
          this.removeLife();
    }

  }

/*  Step 12  Update your app to reset the gameboard between games*****/

    resetGame() {// Method to reset the game, Make it ready to play again.
      $('#phrase li').remove();
      $('.key').removeClass('chosen');
      $('.key').removeClass('wrong');
      $('.key').removeAttr('disabled');
      $('.tries img').attr('src', 'images/liveHeart.png');

    }

}
