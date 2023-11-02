import React, { Component } from 'react'

export default class Bai10 extends Component {
    constructor(){
        super()
        this.state={
            text:"Day la doan van",
        }
        this.changeText=()=>{
            this.setState({
                text:"Day la doan van da thay doi"
            })
        }
    }
  render() {
    return (
      <>
        <div>{this.state.text}</div>
        <button onClick={this.changeText}>Thay doi</button>
      </>
    )
  }
}
