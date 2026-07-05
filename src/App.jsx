import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import MainPlayingScreen from "./MainPlayingScreen/MainPlayingScreen";
import { useGame } from "./GameProvider/GameProvider";
export default function App() {
  const { isPlaying } = useGame();
  return <>{!isPlaying ? <WelcomeScreen /> : <MainPlayingScreen />}</>;
}
