import React from 'react';

class Arena extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1>Battle Arena</h1>
                <div>
                    <div>
                        <h3>Player 1: {this.props.playerOne.name}</h3>
                        <img src={this.props.playerOne.image} alt=""/>
                        <div>
                            <p>Health: {this.props.playerOne.health}</p>
                            <div className="bg-grey-light py-1 px-1 w-64 rounded-sm flex justify-start items-start">
                                <div className="bg-red p-1 w-full  rounded-sm "></div>
                            </div>
                            <p>Strength: {this.props.playerOne.attackPwr}</p>
                            <p>Saiyan: </p>
                            <div className="bg-grey-light py-1 px-1 w-64 rounded-sm flex justify-start items-start">
                                <div className="bg-orange p-1 w-full rounded-sm "></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>{this.props.twoPlayer ? `Player 2: ${this.props.playerTwo.name}` : `Computer: ${this.props.playerTwo.name}`}</h3>
                        <img src={this.props.playerTwo.image} alt=""/>
                        <div>
                            <p>Health: {this.props.playerOne.health}</p>
                            <div className="bg-grey-light py-1 px-1 w-64 rounded-sm flex justify-start items-start">
                                <div className="bg-red p-1 w-full  rounded-sm "></div>
                            </div>
                            <p>Strength: {this.props.playerOne.attackPwr}</p>
                            <p>Saiyan: </p>
                            <div className="bg-grey-light py-1 px-1 w-64 rounded-sm flex justify-start items-start">
                                <div className="bg-orange p-1 w-full rounded-sm "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arena