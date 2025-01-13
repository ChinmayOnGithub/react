// import { useState } from 'react'

import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen' style={
      { backgroundColor: color }
    }>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-stone-800 px-3 py-2 rounded-full">

          <button className='rounded-full bg-red-600 p-3 text-2xl shadow-lg' onClick={() => setColor('red')}></button>
          <button className='rounded-full bg-green-600 p-3 text-2xl shadow-lg' onClick={() => setColor('green')}></button>
          <button className='rounded-full bg-blue-600 p-3 text-2xl shadow-lg' onClick={() => setColor('blue')}></button>
        </div>
      </div>
    </div>
  )
}

export default App
