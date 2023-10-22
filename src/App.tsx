import React from "react";

import "./App.css";
import GamesList from "./components/GamesList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App__heading">Casino</h1>
      <GamesList />
    </div>
  );
};

export default App;
