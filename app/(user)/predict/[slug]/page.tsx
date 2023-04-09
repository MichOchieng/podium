import { client } from '@/lib/sanity-client';
import { Circuit } from '@/typings'
import { groq } from 'next-sanity';
import React from 'react'

interface Props {
    params: {
        slug: string
    }
  }
async function CircuitPage( { params: { slug } }: Props ){
    // Get circuit data based on passed slug (url)
    const query = groq`
        *[_type=='circuit' && slug.current == $slug][0] {...,}
    `;
    const circuit: Circuit = await client.fetch(query,{ slug })
    

    return (
        <div>
            <h1>{circuit.name}</h1>
        </div>
    );
}

export default CircuitPage