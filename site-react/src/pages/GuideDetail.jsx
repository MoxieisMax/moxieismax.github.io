import React from 'react'
import { useParams } from 'react-router-dom'
import guides from '../content/guides'

export default function GuideDetail(){
  const { slug } = useParams()
  const guide = guides.find(g => g.slug === slug)
  if(!guide) return <div>Guide not found</div>
  return (
    <article>
      <h1>{guide.title}</h1>
      <div dangerouslySetInnerHTML={{__html: guide.html}} />
    </article>
  )
}
