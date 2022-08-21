import Link from 'next/link'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Card } from '../data/Deck'
  
// for dropdown stats
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// interface for data passed down (statData) from parent
interface statData {
  correct: number,
  incorrect: number,
  incorrectCards: number[],
  inputs: string[]
}
  
// quiz stats component (shows results and card/question review)
// statData and card array passed down from parent
const EndQuiz = (props: { stats: statData, deck: Card[] }) => {
  // For "Try Again" button
  const handleClick = () => {
    location.reload();
  }
  
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 z-[10] bg-white flex flex-col justify-center items-center">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center space-y-5">
        <h1 className="text-xl">Completed</h1>
        {/* Stat Ratio */}
        <h1 className="text-3xl">Your score: {props.stats.correct} / {props.stats.correct + props.stats.incorrect}</h1>

        {/* Quiz Review */}
        <div className="relative border overflow-y-auto flex flex-wrap p-5 min-w-[80rem] max-w-[80rem] min-h-[500px] max-h-[500px]">
          <dl className="mt-6 space-y-2 w-full">

            {/* Mapping out DROPDOWN cards for review list */}
            {props.deck.map((card, i) => (
              <Disclosure as="div" key={card.question} className="pt-6">
                {({ open }) => (
                  <>

                    {/* Dropdown Functionality & Unfolded properties */}
                    <dt className={`text-lg ${(props.stats.incorrectCards.includes(i)) ? "bg-red-100" : "bg-green-100"} p-5`}>
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{card.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>

                    {/* Dropdown Text */}
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">Answer: {card.answer}</p>
                      <p className="text-base text-gray-500">Your Answer: {props.stats.inputs[i]}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        {/* Bottom Buttons (options: return home, try again) */}
        <div className="flex justify-between">
          <Link href="/dashboard">
            <button className="btn text-white">Return home</button>
          </Link>
          <button className="btn text-white" onClick={handleClick}>Try again</button>
        </div>

      </div>
    </div>
  )
}

export default EndQuiz