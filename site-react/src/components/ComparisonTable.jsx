import React from 'react'
import productsData from '../data/products.json'

export default function ComparisonTable({ids}){
  const items = ids.map(id => productsData[id]).filter(Boolean)
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Wavelengths</th>
            <th>Irradiance</th>
            <th>Coverage</th>
            <th>Best for</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td><strong>{item.name}</strong></td>
              <td>{item.wavelengths}</td>
              <td>{item.irradiance}</td>
              <td>{item.coverage}</td>
              <td>{item.best_for}</td>
              <td><a className="cta" href={item.affiliate_link} target="_blank" rel="noopener noreferrer">Check on Amazon</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
