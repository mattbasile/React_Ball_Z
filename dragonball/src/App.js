import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import characters from './player-data.json';
// Components
import LandingPage from './components/LandingPage';
import Arena from './components/Arena';
import SelectPlayer from './components/SelectPlayer';

const characterData = characters;

class App extends Component {
  constructor(){
    super();
    this.state={
      playerOne: {

      },
      playerTwo: {

      },
      onePlayer: true,
      twoPlayer: false,
      playerOneHero: true,
      characters:[]
    }
  }

  componentDidMount(){
    this.setState({characters: characterData.characters})
  }
  render() {
    return (
      <div className="App ">
        <header className="App-header">
            <Route
            exact path="/"
            render={()=> <LandingPage />}
            />     
            <Route 
            path="/select-character" 
            render={ () => <SelectPlayer />}/>
            <Route 
            path="/arena" 
            render={ () => <Arena />}/>
            
        </header>
      </div>
    );
  }
}

export default App;
