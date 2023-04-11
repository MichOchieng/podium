'use client';
import React from 'react'
interface Props {
    circuitName: string
}

const Results = ({ circuitName }: Props) => {
    const [data, setData] = React.useState(null)
    const [time, setTime] = React.useState('')

    const handleSubmit = async (event:any) => {
        event.preventDefault();

        const formData = {
            time: time,
            circuit: circuitName
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        const response = await fetch('https://podium-model.herokuapp.com/predict', requestOptions);
        const data = await response.json();

        setData(data);
    }

    return (
        <>
            {/* Heading */}
            <h1 className="">Enter Your Time</h1>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="my-3">
                    <label htmlFor="time-input">Time:</label>
                    <input className="bg-black rounded-md ml-5 w-44 text-center" id="time-input" name="time" placeholder='1:20.293' onChange={(event) => setTime(event.target.value)} />
                </div>
                <input className="bg-[#e10600] rounded-md h-11 w-24 mx-auto cursor-pointer" type="submit" value="Submit" />
            </form>
            {/* Prediction response */}
            <div className="w-full flex items-center justify-center mt-5 aid">
                {
                    data &&
                    <>
                    {console.log(data)}
                        <h1 className='aid w-10 h-10'>test</h1>
                    </>
                }
            </div>
        </>
    )
}

export default Results