import React, { Component } from 'react'

export default class ChildComponent extends Component {
    componentWillUnmount()
    {
        console.log('un mounting')
    }
  render() {
    return (
      <div>ChildComponent</div>
    )
  }
}
