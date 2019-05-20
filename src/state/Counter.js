import React from 'react';

class Counter extends React.Component {

    static defaultProps = {
        step: 1
    }

    state = {
        count: 0
      };

    handleButtonClick = () => {

        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)

        const newCount = this.state.count + this.props.step
        this.setState({
            count: newCount
        })
        console.log(newCount)
    }

    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter