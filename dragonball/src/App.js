import React, { Component } from 'react';
import { Route} from 'react-router-dom';
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
        name: "",
        health: null,
        saiyanPwr: null,
        saiyanName: "",
        attackPwr: null,
        attackName: "",
        image: "",
        hits: null,
        mainColor: '',
        secondColor: '',
        healColor: '',
        healColorDark: '',
      },
      playerTwo: {
        name: "",
        health: null,
        saiyanPwr: null,
        saiyanName: "",
        attackPwr: null,
        attackName: "",
        image: "",
        hits: null,
        mainColor: '',
        secondColor: '',
        healColor: '',
        healColorDark: '',
      },
      onePlayer: true,
      twoPlayer: false,
      playerOneIsHero: true,
      characters:[],
      heros: [],
      villains: []
    }
  }

  componentDidMount(){
    this.setState({
      characters: characterData.characters,
      heros: characterData.characters[0].Heros,
      villains: characterData.characters[1].Villains,
      playerOne: characterData.characters[0].Heros[0],
      playerTwo: characterData.characters[1].Villains[0],
    });
    
    this.setState({});
    this.setState({})
  }
  // Functions 
  SelectPlayer = e =>{
    e.preventDefault();
    if(this.state.playerOneIsHero === true){
    const chosenPlayer = e.target.name
    const setPlayer = this.state.heros.find(player => player.name === chosenPlayer);
    this.setState({playerOne: setPlayer})
    } else{
    const chosenPlayer = e.target.name
    const setPlayer = this.state.villains.find(player => player.name === chosenPlayer);
    this.setState({playerOne: setPlayer})
  }
}
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  computerPicksPlayer = e =>{
    e.preventDefault();
    const value = this.getRandomInt(4)
    if(this.state.playerOneIsHero){
      this.setState({playerTwo: this.state.villains[`${value}`]})
    } else{
      this.setState({playerTwo: this.state.heros[`${value}`]})
    }
  }

  toggleHeroOrVillain = e =>{
    console.log(e.target.name)
    if(e.target.name === "Evil"){
      this.setState({playerOneIsHero: false})
    }
    else{
      this.setState({playerOneIsHero: true})
    }
  }



  render() {
    return (
      <div className="App ">
        <header className="App-header">
            <Route
            exact path="/"
            render={()=> 
            <LandingPage />}
            />     
            <Route 
            path="/select-character" 
            render={ () => 
            <SelectPlayer 
            computerPicksPlayer={this.computerPicksPlayer}
            SelectPlayer = {this.SelectPlayer}
            heros={this.state.heros}
            villains={this.state.villains}
            playerOneIsHero={this.state.playerOneIsHero}
            playerOne={this.state.playerOne}
            playerTwo={this.state.playerTwo}
            toggleHeroOrVillain={this.toggleHeroOrVillain}
            />}/>
            <Route 
            path="/arena" 
            render={ () => <Arena />}/>
            
        </header>
      </div>
    );
  }
}

export default App;
