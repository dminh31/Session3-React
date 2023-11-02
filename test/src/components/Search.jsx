import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
    }
  }
  changeValue = (event) => {
    // lấy giá trị ô input
    // sau khi lấy set lại state 
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    return (
      <>
        <input onChange={this.changeValue} type="text" />
        <button onClick={() => this.props.search(this.state.search)}>Tìm kiếm</button>
      </>
    )
  }
}
