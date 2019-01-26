import React from 'react';

class SelectPlayer extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Select a Player</h1>
                <button name="Good" onClick={this.props.toggleHeroOrVillain}>Good</button>
                <button name="Evil" onClick={this.props.toggleHeroOrVillain}>Evil</button>
            </div>
        )
    }
}

export default SelectPlayer