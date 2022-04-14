import { useState } from 'react'
import Calculator from './components/Calculator'
import Result from './components/Result'
import Math from './components/Math';


function App() {
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className='bg-indigo-600 h-screen'>
      <h1 className='text-center py-10 text-white font-bold  text-5xl font-ArchivoBlack'>Calculator</h1>
      <div className="flex flex-col justify-center items-center gap-8">
        <Result
          input = {input}
          setInput = {setInput}

          output = {output}
          setOutput = {setOutput}
        />
        <Calculator
        input = {input}
        setInput = {setInput}
        
        output = {output}
        setOutput = {setOutput}
        />

        <Math />
      </div>

    </div>
  )
}

export default App
