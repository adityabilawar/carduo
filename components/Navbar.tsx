import React from 'react'
import Dropdown from './Dropdown'

const menuItems = {
    title: "Customize",
    items: ["SQ3R Method", "Spaced repetition", "PQ4R Method", "Feynman Technique"],
}

const Navbar = () => {
  return (
    <div className="left-0 right-0 top-0 h-40 shadow flex px-10 justify-between items-center">
        <div className="flex justify-center items-center space-x-3">
            <img src="/logo.svg" />
            <h1 className="text-2xl font-bold">Carduo</h1>
        </div>
        <ul className="flex space-x-10 items-center">
            <li>Decks</li>
            <li>Resources</li>
            <li>
                <Dropdown {...menuItems} />
            </li>
            <li>Decks</li>
        </ul>
    </div>
  )
}

export default Navbar

