import React, {useEffect} from 'react'

const SITE_TITLE = 'Affilaite'
const SITE_DESCRIPTION = 'Trusted product reviews and buying guides for light therapy panels.'

export default function Seo({title, metaDescription}){
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
    document.title = fullTitle

    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = metaDescription || SITE_DESCRIPTION

    return () => {
      // leave title as-is (pages may set their own)
    }
  }, [title, metaDescription])

  return null
}
