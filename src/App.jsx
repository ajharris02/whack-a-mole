import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import MainPlayingScreen from "./MainPlayingScreen/MainPlayingScreen";
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const handleGameEnd = (finalScore) => {
    if (finalScore > highScore) {
      setHighScore(finalScore);
    }
    setIsPlaying(false);
  };
  return (
    <>
      {!isPlaying ? (
        <WelcomeScreen
          onPlay={() => setIsPlaying(true)}
          highScore={highScore}
        />
      ) : (
        <MainPlayingScreen onRestart={handleGameEnd} />
      )}
    </>
  );
}
