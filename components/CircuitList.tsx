'use client';

import Card from './Card'
import { Circuit } from '@/typings'

interface Props {
    circuits: Circuit[]
}

const CircuitList = ({ circuits }: Props) => {
    console.log(circuits.length);
    
    return (
        <div className="flex flex-row items-center justify-center flex-wrap">
            {/* {circuits.map(circuit => (
                <Card key={circuit.slug} />
            ))} */}
        </div>
    )
}

export default CircuitList