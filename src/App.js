import React from "react";
import Leaderboard from "./components/Leaderboard";
import AddScore from "./components/AddScore";

function App() {
  const refreshLeaderboard = () => {
    window.location.reload(); // Simple reload to refresh leaderboard
  };

  return (
    <div className="App">
      <h1>Leaderboard App</h1>
      <AddScore refreshLeaderboard={refreshLeaderboard} />
      <Leaderboard />
    </div>
  );
}

export default App;
