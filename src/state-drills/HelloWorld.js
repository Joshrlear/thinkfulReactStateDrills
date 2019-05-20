import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "World"
    }

    handleButtonClick = (event) => {
        const btnClicked = event.target.id;
        this.setState({
            who: btnClicked
        })
        console.log(btnClicked)
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button id="World" onClick={this.handleButtonClick}>World</button>
                <button id="Friend" onClick={this.handleButtonClick}>Friend</button>
                <button id="React" onClick={this.handleButtonClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld