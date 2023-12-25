import React from 'react'
import Button from '../../assets/componets/button'
import "./index.scss"

function Header( props) {
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
        <Button  btnTxt={"headerBtn"}/>
        </div>
       </div>
    </header>
  )
}

export default Header