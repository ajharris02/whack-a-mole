export default function WelcomeScreen({ onPlay, highScore }) {
  return (
    <div className="welcomeScreen">
      <h1>Welcome to Whack-a-Mole!</h1>
      <p>
        Welcome to the homepage of the game Whack-a-Mole. Here you will be able
        to play this fun game. Let me explain how it works... once the play
        button is clicked you will travel to a different page to start the game.
        You will start at a current score of 0 and a number of holes will appear
        on your screen. There is a mole that will randomly pop out of 1 hole and
        you the user has to click the hole the mole is in. Everytime you click
        the right hole your score goes up by 1. If the user decides to play
        again after retarting user score will go back to 0. Press the Play
        button below to start playing the game!
      </p>
      <h3>High Score: {highScore}</h3>
      <button className="playButton" onClick={onPlay}>
        Play
      </button>
    </div>
  );
}
