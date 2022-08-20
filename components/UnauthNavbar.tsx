import React from 'react'

const UnauthNavbar = () => {
  return (
    <div className="left-0 right-0 top-0 h-40 shadow flex px-10 fixed justify-between items-center bg-white">
        <div className="flex justify-center items-center space-x-3">
            <img src="/logo.svg" />
            <h1 className="text-2xl font-bold">Carduo</h1>
        </div>
    </div>
  )
}

export default UnauthNavbar

