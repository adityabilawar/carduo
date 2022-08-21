import React from 'react'
import Navbar from '../../components/Navbar';

interface question {
    title: string;
    answer: string;
}

const Deck = ({title, answer}: question) => {
  return (
    <div>
        <Navbar />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-xl my-10">12 cards remaining</h1>
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#F5D9D9] mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-[200px] lg:px-8">
                    <h1 className="text-center text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                        <span className="block text-black">What is an algorithm?</span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                <input className="bg-white border border-gray-300 focus:border-gray-500 w-full" placeholder="Your answer..." />
                <button className="w-[200px] flex justify-center items-center bg-red-500  h-[46px]">Submit</button>
            </div>
        </div>
    </div>
  )
}

const getServerSideProps = (context) => {
    console.log(context);
    return { props: {} }
}

export default Deck