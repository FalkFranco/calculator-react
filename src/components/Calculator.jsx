import React from 'react'
import {evaluate} from 'mathjs'

const Calculator = ({input, setInput, setOutput }) => {

  const resultado = ()=>{
    setOutput(evaluate(input).toString());
    setInput(evaluate(input).toString());
  }
  const clear = ()=>{
    setInput(''); 
    setOutput('');
  }
  const clearLast =()=>{
    setInput(input.toString().slice(0, -1));
  }

  
  return (
    <div className='p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white grid  grid-cols-4 gap-2 text-3xl md:text-5xl rounded-2xl font-RobotoMono'>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='AC' onClick={(e)=> clear()}>AC</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='C' onClick={(e)=> clearLast()}>C</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='%' onClick={(e)=> setInput(input + e.target.value)}>%</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='/' onClick={(e)=> setInput(input + e.target.value)}>/</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='7' onClick={(e)=> setInput(input + e.target.value)}>7</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='8' onClick={(e)=> setInput(input + e.target.value)}>8</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='9' onClick={(e)=> setInput(input + e.target.value)}>9</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='*' onClick={(e)=> setInput(input + e.target.value)}>*</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='4' onClick={(e)=> setInput(input + e.target.value)}>4</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='5' onClick={(e)=> setInput(input + e.target.value)}>5</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='6' onClick={(e)=> setInput(input + e.target.value)}>6</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='-' onClick={(e)=> setInput(input + e.target.value)}>-</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='1' onClick={(e)=> setInput(input + e.target.value)}>1</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='2' onClick={(e)=> setInput(input + e.target.value)}>2</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='3' onClick={(e)=> setInput(input + e.target.value)}>3</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='+' onClick={(e)=> setInput(input + e.target.value)}>+</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='00' onClick={(e)=> setInput(input + e.target.value)}>00</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='0' onClick={(e)=> setInput(input + e.target.value)}>0</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='.' onClick={(e)=> setInput(input + e.target.value)}>.</button>
        <button className='p-5 md:p-10 rounded-lg bg-slate-900' value='=' onClick={()=> resultado()}>=</button>
    </div>
  )
}

export default Calculator