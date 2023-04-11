/* eslint-disable @next/next/no-img-element */
import { client } from '@/lib/sanity-client';
import { Circuit } from '@/typings';
import { groq } from 'next-sanity';
import urlFor from '@/lib/urlFor';
import Results from '@/components/Results';

interface Props {
    params: {
        slug: string
    }
}

async function CircuitPage({ params: { slug } }: Props) {
    // Get circuit data based on passed slug (url)
    const query = groq`
        *[_type=='circuit' && slug.current == $slug][0] {...,}
    `;
    const circuit: Circuit = await client.fetch(query, { slug })

    return (
        <div className='page-container lg:flex-row'>
            {/* Track info */}
            <div className="w-full lg:w-4/6 h-[550px] flex flex-col items-center justify-center rounded-tr-md border-t-4 border-r-4 border-[#e10600] overflow-hidden mr-5">
                {/* Track name */}
                <div className="w-full">
                    <h1 className="text-3xl font-formulaBold">{circuit.modelName}</h1>
                </div>
                {/* Track Layout */}
                <div className="w-full h-[300px] justify-center overflow-hidden flex my-5">
                    <img className='object-contain object-center' src={urlFor(circuit.trackLayout).url()} alt='trackImg' />
                </div>
                {/* Track info */}
                <div className="grid grid-cols-2 grid-rows-2 gap-y-4 w-full">
                    {/* # Laps */}
                    <div className="trackInfoElement col-span-1">
                        <span className="w-full text-left text-xs">Number of laps</span>
                        <h1 className="">{circuit.laps}</h1>
                    </div>
                    {/* Circuit Length */}
                    <div className="trackInfoElement col-span-1">
                        <span className="w-full text-left text-xs">Circuit Length</span>
                        <h1 className="">{circuit.length}</h1>
                    </div>
                    {/* Race Distance */}
                    <div className="trackInfoElement col-span-1">
                        <span className="w-full text-left text-xs">Race Distance</span>
                        <h1 className="">{circuit.raceDistance}</h1>
                    </div>
                    {/* Lap Record */}
                    <div className="trackInfoElement col-span-1">
                        <span className="w-full text-left text-xs">Lap Record</span>
                        <h1 className="">{circuit.lapRecord} <span className='text-xs ml-1'>{circuit.lapRecordHolder}</span></h1>
                    </div>
                </div>
            </div>
            {/* Get prediction */}
            <div className="bg-[#1e1e1e] w-full h-96  flex flex-col items-center justify-center my-5 lg:my-0 lg:w-2/6 min-w-[400px] lg:h-[550px] rounded-xl drop-shadow-md">
                <Results circuitName={circuit.modelName}/>
            </div>
        </div>
    );
}

export default CircuitPage