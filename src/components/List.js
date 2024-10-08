import React, { Component } from 'react'

export default class List extends Component {
    
  render() {
    const names=[
      {
        'id':'1',
        'name':'deepthi'
      },
      {
        'id':'2',
        'name':'jyothi'
      },
      {
        'id':'3',
        'name':'praveen'
      },
    ]
    const nameList=names.map((el)=>{return <p key={el.id}>{el.name}</p>})
    console.log(nameList)
    return (
      <>
        {nameList}
      </>
    )
  }
}
