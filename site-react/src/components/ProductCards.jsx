import React from 'react'

export default function ProductCards({products}){
  return (
    <div className="cards">
      {products.map((p, idx) => (
        <article className="card" key={idx}>
          <h3>{p.name}</h3>
          {p.wavelengths && <p><strong>Wavelengths:</strong> {p.wavelengths}</p>}
          {p.irradiance && <p><strong>Irradiance:</strong> {p.irradiance}</p>}
          {p.coverage && <p><strong>Coverage:</strong> {p.coverage}</p>}
          {p.best_for && <p className="updated">Best for: {p.best_for}</p>}

          {p.pros && p.pros.length > 0 && (
            <div>
              <h4>Pros</h4>
              <ul>
                {p.pros.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
          )}

          {p.cons && p.cons.length > 0 && (
            <div>
              <h4>Cons</h4>
              <ul>
                {p.cons.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
          )}

          <div>
            <a className="cta" href={p.affiliate_link} target="_blank" rel="noopener noreferrer">Check on Amazon</a>
          </div>
        </article>
      ))}
    </div>
  )
}

