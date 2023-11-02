import React, { Component } from 'react'

export default class Bai9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            output: ""
        };
    }

    Change = (event) => {
        this.setState({ inputText: event.target.value });
    };

    click = () => {
        this.setState({ output: this.state.inputText });
    };
    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.Change}
                />
                <button onClick={this.click}>Hiển thị</button>
                <p>{this.state.output}</p>
            </>
        )
    }
}