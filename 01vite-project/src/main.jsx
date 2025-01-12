import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


/* 
const customReactElement = {
  type: 'a',
  props: {
    href: "http://google.com",
    target: "_blank"
  },
  children: "Click me"
} 
*/



/* function MyAppCustom() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
} */

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank"
  },
  'Click to visit Google'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
