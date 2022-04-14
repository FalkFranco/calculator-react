import React from 'react'

const Result = ({input, setInput}) => {
  return (
    <div>
        <div className="">
            <form action="">
                <input className=' px-5 py-2 text-2xl md:text-5xl bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white  text-right rounded-2xl font-RobotoMono' 
                type="text" 
                value={input}
                onChange = { e => setInput(e.target.value)}
                />
            </form>
        </div>
    </div>
  )
}

export default Result