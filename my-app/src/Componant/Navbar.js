import React from 'react'
import {Link} from 'react-router-dom'

// import TextAria from './TextAria';

export default function Hoga(nunu) {
  







  return (
    <div>
      <>
      <nav style={nunu.style}>
        <ul>
          <li style={nunu.style}><Link  to={nunu.home}>Home</Link></li>
          <li style={nunu.style}><Link to={nunu.services}>Services</Link></li>
          <li>Blog</li>
          <li>
            
           About
          </li>
          <li>Contact Us</li>
          <button style={nunu.style} onClick={nunu.togglemode}>{nunu.btntxt}</button>
        </ul>
      </nav>
         
      
    </>
    </div>
  )
}


