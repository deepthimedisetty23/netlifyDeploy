import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            color:'green'
        }
        console.log("in constructur")
    }
    // static getDerivedStateFromProps(props,state)
    // {
    //     console.log('derived sate')
    //     console.log(props.favcol)
    //     return {color:props.favcol}
    // }
    componentDidMount()
    {
        console.log('component did mount')
        setTimeout(()=>this.setState({
            color:'red'
        }),1000)
    }
    getSnapshotBeforeUpdate(prevState,prevProps)
    {
        console.log(prevState)
        document.getElementById('div1').innerHTML=`previous color ${prevState.color}`
    }
  render() {
    console.log('render method')
    return (
        <>
              <div>{this.state.color}</div>
              <div id='div1'></div>
        </>

    )
  }
}
