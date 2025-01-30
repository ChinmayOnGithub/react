
import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='h-screen w-full bg-gray-700 flex flex-col justify-center items-center text-white
      '>
        <h1>React video for context API</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
