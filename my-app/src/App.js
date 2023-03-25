import  {useState} from 'react';
import './style.css';
import Navbar from './Componant/Navbar'
import TextAria from './Componant/TextAria'
import Services from './Componant/Services'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [mode, setmode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const togglemode = () => {
    if(mode.color === 'black'){
      setmode({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtntxt('Light Mode')
      setstyle({
        color: 'white',
        backgroundColor: 'black'
      })
      
    }
    else{
      setmode({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtntxt('Dark Mode')
      setstyle({
        color: 'black',
        backgroundColor: 'white'
      })
      
    }
  }

  

  const [btntxt, setbtntxt] = useState('Dark Mode');
  const [style, setstyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  

  return (
 <>

 
  <Navbar home={'/'} services={'/services'}  btntxt={btntxt} togglemode={togglemode}  style={style}/>
   
  
    <Routes>
      <Route path='/' element={<TextAria mode={mode} style={mode} />}>Home</Route>
      <Route path='/services' element={<Services/>}>Services</Route>
    </Routes>

 </>
  );
}

export default App;
