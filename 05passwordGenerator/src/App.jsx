import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    // as long as things dont change frequently we use useCallback
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword()

  }, [length, numberAllowed, charAllowed, generatePassword])


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-8 bg-gray-900 text-orange-400">
      <h1 className='text-center my-3 text-white font-bold text-xl'>Password Generator</h1>

      {/* password input box */}
      <div className='flex shadow-lg overflow-hidden rounded-md m-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}

        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      {/* tool box div */}
      <div
        className='flex text-sm gap-x-2 m-4'>

        {/* slider for length */}
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id=''
          />
          <label htmlFor="length">Length: {length}</label>

        </div>

        {/* checkbox for numbers */}
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() =>
              setNumberAllowed((prev) => !prev)} //  react sometime dont work fast that why it can think it was old value if user is clicking too fast. 
            // To avoid any confusion we are providing the prev value to the react and then taking its complement. Hence using callback
            name=''
            id=''
          />
          <label htmlFor="number">Numbers</label>

        </div>

        {/* checkbox for Characters*/}
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() =>
              setCharAllowed((prev) => !prev)} //  react sometime dont work fast that why it can think it was old value if user is clicking too fast. 
            // To avoid any confusion we are providing the prev value to the react and then taking its complement. Hence using callback
            name=''
            id=''
          />
          <label htmlFor="charInput">Characters</label>

        </div>



      </div>
    </div>
  )
}

export default App
