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
                <div className="w-4/5 mx-auto flex ">
                    <div className="mx-32 w-1/2 flex flex-col">
                        <h3>Player 1: {this.props.playerOne.name}</h3>
                        <img className="m-16 self-center" src={this.props.playerOne.image} alt=""/>
                        <div>
                            <div className="flex w-full items-center justify-evenly">
                                <button className="w-1/3 border" onClick={ e =>this.props.userAttack(e, this.props.playerOne)}>Attack</button>
                                <button className="w-1/3 border">Saiyan</button>
                                <button className="w-1/3 border">Heal</button>
                            </div>
                            <p>Health: {this.props.playerOne.activeHealth}</p>
                            <div className="bg-grey-light py-1 px-1 w-full rounded-sm flex justify-start items-start">
                                <div className="bg-red p-1 w-full  rounded-sm "></div>
                            </div>
                            <p>Strength: {this.props.playerOne.attackPwr}</p>
                            <p>Saiyan: </p>
                            <div className="bg-grey-light py-1 px-1 w-full rounded-sm flex justify-start items-start">
                                <div className="bg-orange p-1 w-full rounded-sm "></div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-32 w-1/2 flex flex-col">
                        <h3>{this.props.twoPlayer ? `Player 2: ${this.props.playerTwo.name}` : `Computer: ${this.props.playerTwo.name}`}</h3>
                        <img className="self-center m-16" src={this.props.playerTwo.image} alt=""/>
                        <div>
                            <div className="flex w-full items-center justify-evenly">
                                <button className="w-1/3 border">Attack</button>
                                <button className="w-1/3 border">Saiyan</button>
                                <button className="w-1/3 border">Heal</button>
                            </div>
                            <p>Health: {this.props.playerTwo.activeHealth}</p>
                            <div className="bg-grey-light py-1 px-1 w-full rounded-sm flex justify-start items-start">
                                <div className="bg-red p-1 w-full  rounded-sm "></div>
                            </div>
                            <p>Strength: {this.props.playerTwo.attackPwr}</p>
                            <p>Saiyan: </p>
                            <div className="bg-grey-light py-1 px-1 w-full rounded-sm flex justify-start items-start">
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