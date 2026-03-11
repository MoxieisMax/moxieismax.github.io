const guides = [
  {
    slug: '660-vs-850',
    title: '660nm vs 850nm Explained',
    html: `
      <h2>Device-focused meaning</h2>
      <ul>
        <li><strong>660nm (red):</strong> visible red LEDs commonly included in consumer panels.</li>
        <li><strong>850nm (near-infrared):</strong> invisible LEDs commonly paired with red.</li>
      </ul>
      <h2>What to compare when shopping</h2>
      <ul>
        <li>Whether the device offers <strong>both wavelengths</strong></li>
        <li>Whether it offers <strong>mode control</strong> (red only / NIR only / both)</li>
        <li>Whether the listing clearly states wavelength specs</li>
      </ul>
    `
  },
  {
    slug: 'panel-vs-handheld',
    title: 'Panel vs Handheld Red Light Devices',
    html: `
      <h2>Panels</h2>
      <ul>
        <li>larger coverage</li>
        <li>repeatable “station” setup</li>
      </ul>
      <h2>Handheld</h2>
      <ul>
        <li>portable</li>
        <li>smaller coverage per session</li>
      </ul>
      <p><strong>Quick decision:</strong> if you want coverage per session, choose a panel; if you want portability, choose handheld.</p>
    `
  }
  ,{
    slug: 'what-is-irradiance',
    title: 'What is Irradiance',
    html: `
      <h2>What is irradiance?</h2>
      <p>Irradiance is the power of light delivered per unit area, typically measured in mW/cm². Higher irradiance means more energy reaches the target area in the same amount of time.</p>
      <h2>Why it matters</h2>
      <ul>
        <li>Determines treatment time: higher irradiance = shorter sessions.</li>
        <li>Affects penetration: combined with wavelength, influences how deep energy is delivered.</li>
      </ul>
      <h2>Shopping tip</h2>
      <p>Look for irradiance figures at a specified distance (e.g., at 6 inches) and prefer manufacturers who publish measured values.</p>
    `
  }
]

export default guides
