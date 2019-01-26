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
    this.setState({characters: characterData.characters});
    this.setState({heros: characterData.characters[0].Heros});
    this.setState({villains: characterData.characters[1].Villains});
  }
  // Functions 
  selectAPlayer(){

  }
  computerPicksPlayer(){

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
            render={()=> <LandingPage />}
            />     
            <Route 
            path="/select-character" 
            render={ () => 
            <SelectPlayer 
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
