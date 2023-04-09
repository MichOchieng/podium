import React from 'react'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity-client'
import CircuitList from '@/components/CircuitList';


const query = groq`
*[_type=='circuit'] {
  ...,
} | order(name asc)
`;

async function PredictPage() {
  const circuits = await client.fetch(query)

  return (
    <div className='page-container'>
      {/* Circuits */}
      <CircuitList circuits={circuits} />
    </div>
  )
}

export default PredictPage