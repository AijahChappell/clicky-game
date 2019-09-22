import React from "react";
import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Scores from "./components/Scores";

class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "Click any image to start the game",
    id1: 0,
    id2: 0,
    id3: 0,
    id4: 0,
    id5: 0,
    id6: 0,
    id7: 0,
    id8: 0,
    id9: 0,
    id10: 0,
    id11: 0,
    id12: 0
  };

  handleClick = event => {
    const id = "id" + event.target.id;
    if (this.state[id] === 1) {
      return this.resetGame();
    }
    const updatedScore = this.state.currentScore + 1;
    this.setState({
      currentScore: updatedScore,
      [id]: 1,
      message: "Great job!"
    });
    this.checkTopScore(updatedScore);
  };

  checkTopScore = updatedScore => {
    if (updatedScore > this.state.topScore) {
      this.setState({
        topScore: updatedScore
      });
    }
  };

  resetGame = () => {
    this.setState({
      message: "Game over! Click any image to try again!",
      currentScore: 0,
      id1: 0,
      id2: 0,
      id3: 0,
      id4: 0,
      id5: 0,
      id6: 0,
      id7: 0,
      id8: 0,
      id9: 0,
      id10: 0,
      id11: 0,
      id12: 0
    });
  };

  render() {
    return(
    
    );
  };
};

export default App;