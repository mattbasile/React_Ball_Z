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
  constructor(props){
    super(props);
    this.state={
      playerOne: {
        name: "",
        health: null,
        activeHealth: null,
        saiyanPwr: null,
        saiyanName: "",
        attackPwr: null,
        currentPower: null,
        attackName: "",
        image: "",
        hits: null,
        mainColor: '',
        secondColor: '',
        healColor: '',
        healColorDark: '',
        saiyanMode: false,
      },
      playerTwo: {
        name: "",
        health: null,
        activeHealth: null,
        saiyanPwr: null,
        saiyanName: "",
        attackPwr: null,
        currentPower: null,
        attackName: "",
        image: "",
        hits: null,
        mainColor: '',
        secondColor: '',
        healColor: '',
        healColorDark: '',
        saiyanMode: false
      },
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
  computerPicksPlayer = () =>{
    const value = this.getRandomInt(4)
    if(this.state.playerOneIsHero){
      this.setState({playerTwo: this.state.villains[`${value}`]})
    } else{
      this.setState({playerTwo: this.state.heros[`${value}`]})
    }
  }
  moveToBattleArena = e =>{
    e.preventDefault();
    this.computerPicksPlayer();
    this.props.history.push("/arena");
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
  userAttack = (e, player) => {
    e.preventDefault()
    const attackPwr = player.currentPower;
    const accuracy = this.getRandomInt(player.attackPwr);
    if(accuracy > attackPwr/4){
      this.setState(prevState => { return {playerTwo: { ...prevState.playerTwo, activeHealth: prevState.playerTwo.activeHealth - attackPwr } }})
      this.setState(prevState => { return {playerOne: { ...prevState.playerOne, hits: ++prevState.playerOne.hits } }})
      this.saiyanActivate(player);
      if(player.saiyanMode === true && player.hits >= 3){
        this.saiyanDeactivate()
    }
    } else{
      alert('Attack has missed how unusual!')
    }
  }
  saiyanActivate = player =>{
    if(player.hits === 2){
      this.setState(prevState => { return {playerOne: { ...prevState.playerOne, saiyanMode: true, currentPower: prevState.playerOne.saiyanPwr } }})
    }
  }
  saiyanDeactivate = () =>{
    this.setState(prevState => { return {playerOne: { ...prevState.playerOne, saiyanMode: false, hits: 0, currentPower: prevState.playerOne.attackPwr } }})
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
            moveToBattleArena={this.moveToBattleArena}
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
            render={ () =>
            <Arena 
            userAttack={this.userAttack}
            twoPlayer ={this.state.twoPlayer}
            playerOne={this.state.playerOne}
            playerTwo={this.state.playerTwo}
            />
            }/>
            
        </header>
      </div>
    );
  }
}

export default App;
