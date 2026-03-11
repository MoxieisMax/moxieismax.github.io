import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Seo from './Seo'

export default function Layout({children}){
  return (
    <div>
      <Seo />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">Affilaite</a>
          <Nav />
        </div>
      </header>
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}
