import Link from 'next/link'
import React from 'react'
import { DeckData } from '../../data/Deck'

const Deck = (props: { deck: DeckData, color: string }) => {
  return (
    <Link href={`/deck/${props.deck.id}`}>
      <div className="flex flex-col bg-[#DC3546] min-w-[330px] px-8 py-5 rounded m-2 cursor-pointer">
          <div className="space-y-3 text-white mb-5">
              <h1 className="text-2xl font-semibold">{props.deck.title}</h1>
              <h1 className="text-sm">{props.deck.questions.length} cards in deck</h1>
          </div>
          <div className="border-t-2 border-[#AD0000] pt-5 text-white flex space-x-5 text-sm">
            <button>Study</button>
            <button>Edit Deck</button>
            <button>Teach It</button>
          </div>
      </div>
    </Link>
  )
}

export default Deck