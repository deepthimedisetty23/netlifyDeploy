import React,{useState} from 'react'

export default function RegistrationForm() {
    const [inputs,setInputs]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(inputs.userName+" "+inputs.mobileNumber+`${inputs.textarea},${inputs.course}`)
    }
    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value

        setInputs(values=>({...values,[name]:value}))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Enter Your name:
            <input type='text' name='userName' value={inputs.userName|| ""} onChange={handleChange}/>
        </label>
        <label>
            Enter Your phone number:
            <input type='text' name='mobileNumber' pattern='[0-9]{10}' value={inputs.mobileNumber||""} onChange={handleChange}/>
        </label>
        <label >Description:
        <textarea value={inputs.textarea} name='textarea' onChange={handleChange} />
        </label>

        <select value={inputs.course} name='course' onChange={handleChange} defaultValue={'HTML'}>
        <option value="HTML">html</option>
        <option value="CSS" >css</option>
        <option value="JavaSCript">js</option>
      </select>

        <input type='submit'/>
    </form>
    </>
  )
}
