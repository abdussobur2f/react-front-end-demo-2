import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/About">about</Link> </li>
        <li><Link to="/ontact">contact</Link> </li>
      </ul>
    </div>
  )
}

export default Nav
