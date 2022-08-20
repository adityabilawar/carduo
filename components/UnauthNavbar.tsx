import React from 'react'
import Dropdown from './Dropdown'

const menuItems = {
    title: "Customize",
    items: ["SQ3R Method", "Spaced repetition", "PQ4R Method", "Feynman Technique"],
}

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

