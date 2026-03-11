import React from 'react'

export default function FAQ({faqs}){
  if(!faqs || !faqs.length) return null
  return (
    <section>
      <h2>FAQs</h2>
      {faqs.map((f, i) => (
        <div key={i}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </section>
  )
}
