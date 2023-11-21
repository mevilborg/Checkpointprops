import React from "react";
import PlayerList from "./PlayerList";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Basketball Players</h1>
      <PlayerList />
    </div>
  );
}

export default App;