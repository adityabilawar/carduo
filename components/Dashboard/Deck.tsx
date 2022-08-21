import Link from 'next/link'
import React from 'react'
import { DeckData } from '../../data/Deck'

// deck prop -> deck data passed down from parent
const Deck = (props: { deck: DeckData }) => {
  return (
    <div className="flex flex-col bg-[#DC3546] min-w-[330px] px-8 py-5 rounded m-2 cursor-pointer">

        {/* Titling for card deck component */}
        <div className="space-y-3 text-white mb-5">
            <h1 className="text-2xl font-semibold">{props.deck.title}</h1>
            <h1 className="text-sm">{props.deck.questions.length} cards in deck</h1>
        </div>
        
        {/* Bottom of the card deck component (deck page, room page href) */}
        <div className="border-t-2 border-[#AD0000] pt-5 text-white flex space-x-5 text-sm">
          <Link href={`/deck/${props.deck.id}`}>
            <button>Study</button>
          </Link>
          <Link href="/room">
            <button>Teach It</button>
          </Link>
        </div>

    </div>
  )
}

export default Deck