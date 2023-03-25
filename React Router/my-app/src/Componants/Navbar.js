import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav>

       <li> <Link to='/' element={props.home}>Home</Link></li>
        <li><Link to='/about' element={props.about}>About</Link></li>
        </nav>
    </div>
  )
}
