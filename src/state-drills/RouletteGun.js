import React, { Component } from 'react';

export default class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    
    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleChamberUpdate = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const num = Math.floor(Math.random() * 9 )
            
            this.setState({
                chamber: num,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    handleDisplay() {
        
        if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!'
        }
        else if (this.state.spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else {
            return "you're safe!"
        }
    }

    render() {
        return (
            <div>
                <p>{this.handleDisplay()}</p>
                <button onClick={this.handleChamberUpdate}>Pull the trigger!</button>
            </div>
        )
    }
}