import React from 'react'
import Navbar from '../../components/Navbar';

const Deck = () => {
  return (
    <div>
        <Navbar />
        <h1>Hello</h1>
    </div>
  )
}

const getServerSideProps = (context) => {
    console.log(context);
    return { props: {} }
}

export default Deck