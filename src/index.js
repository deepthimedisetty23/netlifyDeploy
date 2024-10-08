import React from 'react';
import ReactDOM from 'react-dom/client'
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import LifeCycleMethods from './components/LifeCycleMethods';
import ParentComponet from './components/ParentComponet';
import List from './components/List';
import RegistrationForm from './components/RegistrationForm';
import HooksExample from './components/HooksExample';
import CounterOne from './components/CounterOne';
import UseContextEx from './components/UseContextEx';
import ExAxios1 from './components/ExAxios1';
 
// let heading=React.createElement('h1',{id:'head1'},'this is my first heading ')
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <ExAxios1/>
        <UseContextEx/>
        <CounterOne/>
        {/* {<HooksExample/>} */}
        {/* <RegistrationForm/> */}
        {/* <List/>
        <ParentComponet/> */}
         {/* <LifeCycleMethods color='yellow'></LifeCycleMethods>  */}
        {/* <Welcome message='please subscibe'></Welcome> */}

        {/* <Message name='Entri' className='msg1' id='m1'></Message> */}
        {/* <Counter/>

       
        <Welcome name='sowndarys'></Welcome>
        <h1>this is my heading</h1>
        <p className='para1'>djsbhsd
        </p> */}
    </div>

    
)
