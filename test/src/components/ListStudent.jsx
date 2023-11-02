import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
  render() {
    const { student } = this.props
    return (
      <>
      <table border={1} cellPadding={5} cellSpacing={10}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item,index)=>{
            return <Student student={item} index={index} key={index}> </Student>
          })}
        </tbody>
      </table>
      </>
    )
  }
}
