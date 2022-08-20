import React from 'react'


interface cardProps {
    status: string;
    title: string;
    cardCount: number;
    color: string;
}

const Deck = (cardProps: cardProps) => {
  return (
    // ${cardProps.color}
    <div className="flex flex-col bg-[#DC3546] max-w-[350px] px-8 py-5 rounded m-2">
        <div className="space-y-3 text-white mb-5">
            <h1 className="text-sm">{cardProps.status}</h1>
            <h1 className="text-2xl font-semibold">{cardProps.title}</h1>
            <h1 className="text-sm">{cardProps.cardCount} cards in deck</h1>
        </div>
        <div className="border-t-2 border-[#AD0000] pt-5 text-white flex space-x-5 text-sm">
          <button>Study</button>
          <button>Edit Deck</button>
          <button>Teach It</button>
        </div>
    </div>
  )
}

export default Deck