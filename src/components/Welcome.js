import React from "react";
class Welcome extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message:this.props.message
        }
    }
    shouldComponentUpdate()
    {
        return true
    }
    
    changeMessage()
    {
        this.setState(
            {
                message:'thanks for subscribing'
            },()=>{console.log(this.state)}
        )
        
    }
    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Welcome