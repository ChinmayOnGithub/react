
import './App.css'

import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className='text-center text-white bg-green-500 p-4 rounded-lg'>Vite with Tailwind</h1>
      <Card username="chinmay" post="Senior software developer" imageURL='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' />
      <Card />
    </>
  )
}

export default App
