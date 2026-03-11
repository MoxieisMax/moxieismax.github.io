import React from 'react'
import moneyPosts from '../content/money'
import ProductCards from '../components/ProductCards'
import ComparisonTable from '../components/ComparisonTable'
import FAQ from '../components/FAQ'
import Disclosure from '../components/Disclosure'
import products from '../data/products.json'

export default function Money(){
  const post = moneyPosts[0]
  return (
    <div>
      <h1>{post.title}</h1>
      <p className="fineprint">{post.summary}</p>

      <section>
        <h2>Buying guide</h2>
        <div dangerouslySetInnerHTML={{__html: post.buying_guide_html}} />
      </section>

      <section>
        <h2>Product comparison</h2>
        <ComparisonTable ids={post.products} />
      </section>

      <section>
        <h2>Short cards</h2>
        <ProductCards products={post.products.map(id=>products[id])} />
      </section>

      <FAQ faqs={post.faqs} />
      <Disclosure />
    </div>
  )
}
