import { useState } from "react";

export default function MainPlayingScreen({ onRestart }) {
  const [score, setScore] = useState(0);

  const [moleHole, setMoleHole] = useState(() => Math.floor(Math.random() * 9));
  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleMoleClick = () => {
    setScore(score + 1);

    let nextHole = moleHole;
    while (nextHole == moleHole) {
      nextHole = Math.floor(Math.random() * 9);
    }
    setMoleHole(nextHole);
  };
  return (
    <div className="Game">
      <h1>Whack-a-Mole!</h1>
      <div className="score-container">
        <h2 className="score">Score: {score}</h2>
        <button className="restartButton" onClick={() => onRestart(score)}>
          Restart
        </button>
      </div>
      <div className="image-container">
        {holes.map((holeId) => (
          <div key={holeId} className="hole">
            {holeId === moleHole ? (
              <img
                src="/mole.png"
                alt="Mole"
                className="mole-img"
                onClick={handleMoleClick}
              />
            ) : (
              <img src="/hole.png" alt="Mole hole" className="hole-img" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
