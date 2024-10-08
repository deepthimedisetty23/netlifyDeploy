import React,{useState,useEffect, useRef} from 'react'

function HooksExample() {
    const [count,setCount]=useState(0)
    const [show,setShow]=useState(false)
    const [inputValue,setInputValue]=useState()
    const countRender=useRef(0)
    // useEffect(()=>{
    //     // setInterval(()=>{
    //     //     let i=0
    //     //     console.log(i++)
            
    //     // },1000)
    // },[])
    useEffect(()=>{
        countRender.current=countRender+1
        console.log(countRender.current)},[countRender.count])
    function handleClickEvent(event)
    {
        setCount(count=>count+1)
    }
    function handleChange(event)
    {

        setInputValue((inputValue)=>inputValue=event.target.value)
    }
  return (
    <>
        <h1>{count}</h1>
        <button type='button' onClick={handleClickEvent}>click here</button>
        <button type='button' onClick={()=>setShow(!show)}>Toogle</button>
        {show && <Child/>}
        <input type='text' value={inputValue} onChange={handleChange} />

    </>
  )
  function Child()
  {
    useEffect(()=>{
        let i=0;
        let Interval= setInterval(()=>console.log(i++),1000)
        return function(){
            console.log('i am leaving')
            clearInterval(Interval)
        }

    },[])
    return(
        <>
        Child component
        </>
    )
  }
}
export default HooksExample
