import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import EndQuiz from '../../components/EndQuiz';
import Navbar from '../../components/Navbar';
import { Card, DeckData } from '../../utils/Deck';
import { isUserAuth } from '../../utils/auth';
import data from '../../data/decks.json';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
const deckJSON = data as DeckData[];

// quiz page (/deck/[id])
const Quiz = ({ id }: InferGetServerSidePropsType<GetServerSideProps>) => {
  
  const router = useRouter();
  const deck = deckJSON[id];
  const [shuffledDeck, setDeck] = useState(deck.questions);
  const [cardIndex, setCardIndex] = useState(0);
  const [bool, setBool] = useState(true);
  const [answer, setAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [statData, setStatData] = useState({ // statistic data (passed down to EndQuiz comp.)
    correct: 0,
    incorrect: 0,
    incorrectCards: [],
    inputs: []
  });

  // auth check + deck shuffle
  useEffect(() => {
    if(!isUserAuth(localStorage)) router.push('/register');
    if(bool) {
      setBool(false)
      setDeck(shuffle(deck.questions));
    }
  }, [shuffledDeck]);

  // submit answer handler (changes stats, checked if finished, goes to next card)
  const submitAnswer = () => {
    if(answer == shuffledDeck[cardIndex].answer) {
      const newStats = {...statData};
      newStats.correct = statData.correct+1;
      newStats.inputs.push(answer);
      setStatData(newStats);
    }
    else {
      const newStats = {...statData};
      newStats.incorrect = statData.incorrect+1;
      newStats.incorrectCards.push(cardIndex);
      newStats.inputs.push(answer);
      setStatData(newStats);
    }
    setAnswer('');
    if(cardIndex == shuffledDeck.length-1) {
      setIsFinished(true);
    }
    else {
      setCardIndex(cardIndex+1);
    }
  }
  
  if(isFinished) return <EndQuiz stats={statData} deck={shuffledDeck} />
  return (
    <div>
        <Navbar />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-xl my-10">{cardIndex+1} out of {shuffledDeck.length} cards</h1>
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#F5D9D9] mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-[200px] lg:px-8">
                    <h1 className="text-center text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                        <span className="block text-black">{shuffledDeck[cardIndex].question}</span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                <input className="bg-white border border-gray-300 focus:border-gray-500 w-full" placeholder="Enter your answer" onChange={(e) => setAnswer(e.target.value)} value={answer} />
                <button className="w-[200px] flex justify-center items-center bg-red-500 text-white  h-[46px]" onClick={submitAnswer} >Submit</button>
            </div>
        </div>
    </div>
  )
}

// shuffle array - Simple Randomized Sort Algorithm
const shuffle = (arr: Card[]) => {
  return arr.sort(() => Math.random() - 0.5);
}

// for id query data
export const getServerSideProps: GetServerSideProps = async(context) => {
  return { props: { id: context.query.id } };
}

export default Quiz;