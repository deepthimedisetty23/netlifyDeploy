import React from "react";
class Counter extends React.Component{
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    increment()
    {
        this.setState((prevState)=>(
        {count:prevState.count+1}
        )
        ,()=>{})
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render()
    {
        return(
            <div>
            <div>Count {this.state.count}</div>
            <button onClick={()=>{this.incrementFive()}}>click</button>
           </div>
        )
       
       
    }
}
export default Counter