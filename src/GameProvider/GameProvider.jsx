import { createContext, useState, useContext } from "react";
const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const handleGameEnd = (finalScore) => {
    if (finalScore > highScore) {
      setHighScore(finalScore);
    }
    setIsPlaying(false);
  };
  const value = {
    isPlaying,
    setIsPlaying,
    highScore,
    handleGameEnd,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
export function useGame() {
  return useContext(GameContext);
}
