import React from 'react';
import Navbar from '../components/Navbar';

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-left text-red-600 font-semibold tracking-wide uppercase">
                RESOURCES
              </span>
              <span className="mt-2 block text-3xl text-left leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Understand How You Learn
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
            As any student, it’s imperative to develop effective time management and study techniques that help you retain the most information. As the workload and content difficulty for courses increases, cramming the night before doesn’t cut it anymore. Dive into the new school year with a new strategy and try some of these effective study tips below.
            </p>
          </div>
          <div className="mt-6 prose prose-red prose-lg text-gray-500 mx-auto">
            <blockquote>
              <p>
                Never regard study as a duty, but as the enviable opportunity to learn
              </p>
            </blockquote>
            <h3>Study techniques</h3>
            <p>
            Everybody learns differently, which is why <span className="text-red-600">Carduo</span> has 3 different technique implementations designed in our program to help anyone develop a solid grasp on their course content- for good. From live 1-on-1 teaching sessions that implement the Feyman Method to difficulty recognition based on how long you take to complete a problem, our programs combine the best scientifically proven methods to turn you into a high achieving student. Whether you’re in kindergarten or graduate school, it’s never too late to refine your technique.
            </p>
            <h3>Make that jump in your GPA</h3>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1591382696684-38c427c7547a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>Don’t know what these techniques are? Don’t worry! You clicked on the resources page for a reason: to learn how to learn. </figcaption>
            </figure>
            <h3>We implement the Feynman Technique</h3>
            <p>
              Created by Richard Feynman, a world renowned theoretical physicist, the Feynman Technique is an efficient method of learning a concept quickly by explaining it in simple terms. 
            </p>
            <p>
              How it works on Carduo:
            </p>
            <ol>
              <li>Take your lecture notes and compile them into questions</li>
              <li>Input the questions and answers into individual cards in a Carduo deck</li>
              <li>Study the cards; complete the study set at least three times to ensure you’ve familiarized yourself with the content</li>
              <li>Head to your Dashboard and click “Teach It” under the deck you would like to study for</li>
              <li>Once matched with a study buddy, explain the topic(s) you are studying in simple terms to your buddy on the receiving end</li>
              <li>Your buddy will attempt to answer the same questions from your study deck (so make them clear & concise!)</li>
              <li>You may take your friend’s score as a metric to evaluate how well you’ve explained the content. If your friend performs well on your quiz, then you know you have a solid understanding of the content!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources