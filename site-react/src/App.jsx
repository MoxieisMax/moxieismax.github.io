import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Guides from './pages/Guides'
import GuideDetail from './pages/GuideDetail'
import Money from './pages/Money'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/guides" element={<Guides/>} />
        <Route path="/guides/:slug" element={<GuideDetail/>} />
        <Route path="/money" element={<Money/>} />
      </Routes>
    </Layout>
  )
}
