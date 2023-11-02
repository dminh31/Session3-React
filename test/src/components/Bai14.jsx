import React, { Component } from 'react'

export default class Bai14 extends Component {
    constructor(){
        super()
        this.state={
            tabs:"",
        }
        this.thethao=()=>{
            console.log(this.thethao);
            this.setState({
                tabs:"Day la the thao"
            })
        }
        this.vanhoa=()=>{
            this.setState({
                tabs:"Day la van hoa"
            })
        }
        this.khoahoc=()=>{
            this.setState({
                tabs:"Day la khoa hoc"
            })
        }
    }
  render() {
    return (
      <>
        <div>{this.state.tabs}</div>
        <button onClick={this.thethao}>The thao</button>
        <button onClick={this.vanhoa}>Van hoa</button>
        <button onClick={this.khoahoc}>Khoa hoc</button>
      </>
    )
  }
}


