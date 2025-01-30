import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about/' element={<About />} />
      <Route
        loader={githubInfoLoader}
        path='github/'
        element={<Github />} />
      <Route path='contact/' element={<Contact />} />
      <Route path='user/' element={<User />} >
        <Route path=':userId' element={<User />} />
      </Route>
      <Route path='*' element={<div className='bg-red-600 text-white p-4'>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
