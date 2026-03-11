import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/money">Best Picks</Link>
      <Link to="/guides">Guides</Link>
    </nav>
  )
}
