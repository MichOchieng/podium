import urlFor from '@/lib/urlFor'
import { Circuit } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  circuit: Circuit
}

const Card = ({ circuit }: Props) => {
  return (
    <div className='card'>
      {/* `/predict/${circuit.slug}` */}
      <Link className='flex items-center justify-center h-full w-full relative group' href={'/'}>
        {/* title */}
        <h1 className="font-formulaBold text-3xl absolute z-20 hover:scale-105 smoothed">{circuit.name}</h1>
        <span className="bg-black/40 group-hover:bg-black/25 smoothed absolute z-10 h-full w-full flex"></span>
        <Image className='object-cover h-full w-full z-0' fill src={urlFor(circuit.trackThumbnail).url()} alt='trackImg' />
      </Link>
    </div>
  )
}

export default Card