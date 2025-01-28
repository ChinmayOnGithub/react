// import React from 'react'

import { Link } from "react-router"

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <Link to='/' className="flex items-center">
            <img
              width={40}
              src="https://www.svgrepo.com/show/530597/hat.svg"
              className="h-6 w-6"
              alt="logo"
            />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header