import React from 'react';
//Image imports


class SelectPlayer extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Select a Player</h1>
                <button name="Good" onClick={this.props.toggleHeroOrVillain}>Good</button>
                <button name="Evil" onClick={this.props.toggleHeroOrVillain}>Evil</button>

                <div>
                    {this.props.playerOneIsHero ? this.props.heros.map(hero =>{return <button onClick={e => this.props.SelectPlayer(e)} name={hero.name} key={hero.name}>{hero.name}</button>}) : this.props.villains.map(vil =>{return <button onClick={e => this.props.SelectPlayer(e )}  name={vil.name} key={vil.name}>{vil.name}</button>})}
                </div>   
                <div>
                    <h3>Player 1: {this.props.playerOne.name}</h3>
                    <img src={this.props.playerOne.image} alt={`Profile image of ${this.props.playerOne.name}`}/>
                </div>
                <div>
                    <button onClick={e => this.props.computerPicksPlayer(e)}>Ready for Battle!</button>
                </div>
            </div>
        )
    }
}

export default SelectPlayer