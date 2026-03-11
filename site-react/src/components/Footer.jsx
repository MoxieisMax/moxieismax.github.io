import React from 'react'

export default function Footer(){
  return (
    <footer className="container" style={{paddingTop:20, paddingBottom:40}}>
      <div className="fineprint">© {new Date().getFullYear()} Affilaite — disclosures and affiliate links.</div>
    </footer>
  )
}
