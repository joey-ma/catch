# Catch

Snake is one of the [first video game genres](https://en.wikipedia.org/wiki/Snake_(video_game_genre)).
Catch, a browser based version of the classic snake game, is created using an understanding of OOP and DOM manipulation to create this dynamic, single-page app. Catch is a tribute to both the classic snake game as well as the [Pokemon](https://www.pokemon.com/us) franchise. 

_I still remember playing the 1st generation (monochrome) and 2nd generation (color) Game Boys! Anyways..._

Hope you'll enjoy!

## Gotta Catch 'Em All

The game was built for desktop users in mind, and it is optimized for Google Chrome.

Note this game is not optimized for mobile devices.

Click anywhere inside the #gameboard, and you can use up, down, left, right arrow keys to start the game and move Ash (Snake Head).

Some keyboard shortcuts for you as you play this game:  
Press `P` to play and pause the music.  
Press `M` to mute the audio!  
Press `E` to set game level to Easy.  
Press `N` to set game level to Normal.  
Press `H` to set game level to Hard.  
Press `Space` to pause and resume the game.
Press `Enter` to restart the game at anytime.

## Learning Objectives

- Using JavaScript to change the look and behavior of the DOM
- React to user input
- Utilize object-oriented programming

## The Journey

### Building Snake

1. The **snake** is consisted of two files, `Head.js` & `Body.js`, with **Apple** consisting of, well, `Apple.js`.

  - Head
  - Body
  - Apple

Because each of the files is included in a script tag on index.html, these three classes are available to our main.js file (which is included AFTER the other script tags). To access classes (or instances of classes) from other classes, experiment leaving out the `var`, `let`, or `const` keywords. *Always be careful when messing with the global scope!

2. Head Class

   - [x] Make the head of the snake be able to turn based on the arrow keys
   - [x] When the head of the snake reaches a border, end the game

3. Apple Class

   - [x] The apple should appear randomly on the screen
   - [x] The apple should appear within the size of the board
   - [x] Remove the apple when the head of the snake reaches the apple
   - [x] Another apple should appear on the screen
   - [x] The apple should not appear on the snake

## Extension Challenges

1. Head Class

   - [x] The head of the snake should not be able to move backwards

2. Body Class

   - [x] Add a segment to the snake when the head of the snake reaches an apple
   - [x] End the game when the snake runs into its own segment

3. Make it your own!

   - [x] Once you've gotten the core functionality down, feel free to have fun! Modify the functionality, look, even sound of your game. Get creative!

## Testing

While we can certainly write tests for this, the more intuitive approach is to try playing the game by opening `index.html` in your browser.

## Stretch Goals

- [x] add keyboard shortcuts to turn on/off the music (currently autoplay is off)
- [x] add a pause functionality when hitting space bar
- [ ] improve code logic / readability
- [ ] add a larger background music collection
