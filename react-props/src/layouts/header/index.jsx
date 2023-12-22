import React from 'react'
import "./index.scss"

function Header() {
  return (
    <header>
       <div className="container">
        <div className="header">
        <h2>React</h2>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Portfolio</a></li>
            </ul>
        </nav>
        </div>
       </div>
    </header>
  )
}

export default Header