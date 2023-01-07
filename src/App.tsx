import PlayerHorizontal from "./components/PlayerHorizontal";
import PlayerVertical from "./components/PlayerVertical";

function App() {
  return (
    <div>
      <PlayerVertical />
      <PlayerHorizontal barWidthPercent={40} />
      <PlayerHorizontal />
    </div>
  );
}

export default App;
