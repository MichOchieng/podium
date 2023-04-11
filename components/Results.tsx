'use client';
import React from 'react'
interface Props {
    circuitName: string
}

type ResponseData = {
    podium: boolean | null
}

const Results = ({ circuitName }: Props) => {
    const [data, setData]: any = React.useState(null)
    const [time, setTime] = React.useState('')
    const [showResult,setShowResult] = React.useState(false)

    // Displays result for 5 seconds
    React.useEffect(() => {
        if (showResult) {
          const timer = setTimeout(() => {
            setShowResult(false);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [showResult]);

    const handleSubmit = async (event: any) => {
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
        const data: ResponseData = await response.json();
        setShowResult(true)
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
            <div className="w-full flex items-center justify-center mt-5 text-center p-5 smoothed overflow-hidden">
                {
                    (data !== null) && // API Returned a result from the model\
                        data.podium ? // Model returned True
                        (
                            <div className="">
                                {showResult && <h1 className="smoothed">Congrats! Your time of {time} will land you on the Podium!</h1>}
                            </div>
                        )
                        :
                        (
                            <div className="">
                                {showResult && <h1 className="smoothed">Too slow! With a time of {time} you wont make it to the Podium!</h1>}
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Results