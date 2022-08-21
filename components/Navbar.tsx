import Link from 'next/link'
import React from 'react'

const menuItems = {
    title: "Customize",
    items: ["SQ3R Method", "Spaced repetition", "PQ4R Method", "Feynman Technique"],
}

const Navbar = () => {
  return (
    <div className="left-0 right-0 top-0 h-40 shadow flex px-10 justify-between items-center">
        <Link href="/dashboard">
            <div className="flex justify-center items-center space-x-3 cursor-pointer">
                <img src="/logo.svg" />
                <h1 className="text-2xl font-bold">Carduo</h1>
            </div>
        </Link>
        <ul className="flex space-x-10 items-center">
            <Link href="/dashboard">
                <li className="cursor-pointer">Decks</li>
            </Link>
            <Link href="/resources">
                <li className="cursor-pointer">Resources</li>
            </Link>
            <li>
                <Link href="/register">
                    <button className="bg-[#EE5253] text-white inline-flex justify-center w-full rounded-md shadow-sm px-8 py-2 text-sm font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
                        onClick={(e) => localStorage.clear()}
                    >
                        Logout
                    </button>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar

