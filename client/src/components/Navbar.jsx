import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Vector BOT 🤖</h1>
        <div>
            <Link to={"/"}>Extract✨</Link>
            <Link to={"/search"}>Search🔎</Link>
        </div>
    </nav>
  )
}
