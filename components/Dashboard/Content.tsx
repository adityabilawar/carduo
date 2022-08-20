import Deck from "./Deck"
import React, { useState, useEffect } from 'react'
import data from "../../data/decks.json"


const cardProps = {
    status: "Need more practice",
    title: "AP Computer Science A",
    cardCount: 15,
    color: "#DC3546",
}

const Content = () => {
    console.log(data);
  return (
    <div className="flex-1 flex items-stretch overflow-hiddenz-[-10]">
      <main className="flex-1 overflow-y-auto h-screen">
        <section aria-labelledby="primary-heading" className="p-10 min-w-0 flex-1 h-full flex flex-col lg:order-last">
          <h1 className="text-2xl">My Decks</h1>
          <div className="mt-10 flex flex-wrap">
            {data.decks.map((deck, index) => (
                <Deck {...deck} cardCount={5} color="#DC3546" key={index} />
            ))}
          </div>
        </section>
      </main>
      <aside className="hidden p-10 w-96 border-l border-gray-200 overflow-y-auto lg:block sticky">
        <h1 className="text-3xl">Create Deck</h1>
        <h1>Create a custom study set</h1>
        <button className="bg-[#EE5253] text-white mt-5 inline-flex justify-center w-full rounded-md shadow-sm px-8 py-2 text-sm font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500">
            Create new
        </button>
      </aside>
    </div>
  )
}

export default Content