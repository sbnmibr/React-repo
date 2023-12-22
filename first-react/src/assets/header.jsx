import React from 'react'
import { FaPersonHarassing } from "react-icons/fa6";

function Header() {
  return ( 
    <header>
        <div className="container">
            <div className="header">
                <div className="head-icon">
                <h2>Electrochip</h2>
                 <FaPersonHarassing className='icon'/>
                </div>
               
                <nav>
                    <ul>
                        <li>
                           <button>Home</button>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header