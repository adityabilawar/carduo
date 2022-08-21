import React from 'react'
import Navbar from '../components/Navbar'

const Room = () => {
  return (
    <div>
        <Navbar />
        <div className="p-20 text-2xl">
            <h1>Teach It</h1>
            <div className="text-lg mt-10 h-[600px] w-full bg-[#ECECEC] p-20 flex justify-around">
                <div className="bg-[#D9D9D9] h-full mr-5 w-[40%]"></div>
                <div className="bg-[#D9D9D9] h-full ml-5 w-[40%]"></div>
            </div>
            <button className="btn text-white mt-5">Next</button>
        </div>
    </div>
  )
}

export default Room