import React from 'react'
import { Link } from 'react-router-dom'
import guides from '../content/guides'

export default function Guides(){
  return (
    <div>
      <h1>Guides</h1>
      <ul>
        {guides.map(g => (
          <li key={g.slug}><Link to={`/guides/${g.slug}`}>{g.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}
