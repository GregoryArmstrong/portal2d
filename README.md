# Portal 2D

A JavaScript 2D version of [Portal](http://www.valvesoftware.com/games/portal.html).

![Game In Action](http://g.recordit.co/pR03Mk2xuc.gif)

See the full demo [here](http://recordit.co/pR03Mk2xuc).

### How to play

Visit [http://gregoryarmstrong.github.io/portal2d/](http://gregoryarmstrong.github.io/portal2d/) to play the game.

Use the left and right arrow keys to move left and right. The up arrow key will make the player jump. Use the A key to shoot left, the W key to shoot up, the D key to shoot right, and the X key to shoot down. The shift key will change the color of the portal to be created (either orange or blue).

Falling into the lava will result in the players death, and the level is automatically restarted. To win the level, the player must get to the brown door.

### Features

* **Levels of increasing difficulty:** Puzzles get harder with each level.
* **Track number of attempts:** The game will track how many times you've attempted each level within each game. Total number of attempts are stored in `sessionStorage` and the total number of attempts for each game played in that session are displayed at the end of each game.

### Tools

* Javascript
* lodash
* HTML 5 Canvas
* Mocha / Chai


### The Team

#### Greg Armstrong

<img src="https://avatars2.githubusercontent.com/u/13356027?v=3&s=400" alt="Greg Armstrong" width=150>

[Github](https://github.com/GregoryArmstrong) // [Email](MrGregTArmstrong@gmail.com)

I’m an endlessly inquisitive full-stack developer that thrives on taking on new problems and building long-lasting relationships with those I collaborate with. My previous experiences in spinal cord research and surgery have endowed me with a critical eye and steady hand for crafting adroit, performant code. I am eager to join a team doing meaningful work which will push me to continuously improve my abilities through mentorship while also exposing me to new technologies. Lets improve the world together.

#### Beth Secor

<img src="https://avatars2.githubusercontent.com/u/11467561?v=3&s=460" alt="Beth Secor" width=150>

[Blog](http://bethsecor.github.io/) // [Github](https://github.com/bethsecor) // [Email](mailto:elizabeth.a.secor@gmail.com)

As a full stack developer, I have the ability to balance finishing a project on schedule while also maintaining code quality. I love learning new things and enjoy new challenges. Talking about code with other people is one of my favorite parts about programming.

Before coming to Turing, I studied statistics at UC Berkeley and worked for four years analyzing a range of different data related to neuroscience and public health.

---
### To run locally:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
