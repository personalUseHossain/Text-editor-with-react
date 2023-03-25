
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Componants/Home'
import About from './Componants/About'
import Navbar from './Componants/Navbar'

function App() {
  return (
    <>    
    <Navbar about={<About/>} home={<Home/>}/>
    <Routes>
     
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    
    </>

  );
}

export default App;
