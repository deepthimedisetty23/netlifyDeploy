import React from "react";
const Message=(props)=>
{
    const c=props.id
    console.log(props)
    const {name,className}=props
    console.log(name,className)
    return (
        <div>
            <h1>Hi {name}</h1>

        </div>
    )
}
export default Message
