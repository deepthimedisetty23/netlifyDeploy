import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponet extends Component {
  constructor()
  {
    super()
    this.state={
      show:true
    }
  }
  changeState()
  {
    this.setState({show:false})
  }
  render() {
    return (

      <div>
        {this.state.show?<ChildComponent/>:null}
        <button onClick={this.changeState.bind(this)}>Click</button>
      </div>
    )
  }
}
