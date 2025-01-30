import React, { useState, useContext } from 'react'
import UserContext from '../../context/UserContext';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  }


  return (
    <div className='bg-gray-600 text-center text-white flex flex-col justify-center items-center p-4 rounded-md gap-4 m-4'>
      <h2 className=''>Login</h2>
      <input
        className='bg-gray-700 rounded-md p-1'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
      />
      {" "}
      <input
        className='bg-gray-700 rounded-md p-1'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />

      <button
        className='bg-blue-950 border-none p-2 hover:bg-blue-900 rounded-lg w-full
        '
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login