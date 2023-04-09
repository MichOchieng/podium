import { Circuit } from '@/typings'
import Link from 'next/link'
import React from 'react'

interface Props {
  circuit: Circuit
}

const Card = ({ circuit }: Props) => {
  return (
    <div className='card'>
      {/* Image */}
      {/* `/predict/${circuit.slug}` */}
      <Link href={'/'}>

      </Link>
      {/* title */}
      <h1 className="font-formulaBold text-2xl absolute hover:scale-105 smoothed">{circuit.name}</h1>
    </div>
  )
}

export default Card