import React from 'react'
import { Link } from 'react-router'

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#4c0519]">404</h1>
      <p className="mt-4 text-lg text-[#4c0519]">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded bg-[#F43F5E] px-6 py-2 text-white "
      >
        Go back home
      </Link>
    </div>
  )
}

export default Notfound