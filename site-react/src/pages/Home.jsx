import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import products from '../data/products.json'
import ProductCards from '../components/ProductCards'
import ComparisonTable from '../components/ComparisonTable'

export default function Home(){
  const list = Array.isArray(products) ? products : Object.values(products)
  const featured = list.filter(p => p.featured).slice(0,6)

  return (
    <Layout>
      <Seo title="Best Grow Lights & Panels" metaDescription="Trusted reviews, comparisons, and buying guides for light therapy panels." />
      <section className="hero">
        <h1>Best Grow Lights & Panels</h1>
        <p className="fineprint">Trusted reviews, comparisons, and buying guides for light therapy panels.</p>
      </section>

      <section>
        <h2>Top Picks</h2>
        <ProductCards products={featured.length ? featured : list.slice(0,6)} />
      </section>

      <section>
        <h2>Comparison</h2>
        <ComparisonTable products={list} />
      </section>
    </Layout>
  )
}
