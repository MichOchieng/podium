'use client';

import Card from './Card'
import { Circuit } from '@/typings'

interface Props {
    circuits: Circuit[]
}

const CircuitList = ({ circuits }: Props) => {    
    return (
        <div className="w-full h-full flex flex-row items-center justify-center flex-wrap">
            {circuits.map(circuit => (
                <Card key={circuit.slug.current} circuit={circuit} />
            ))}
        </div>
    )
}

export default CircuitList