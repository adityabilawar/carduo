import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { isUserAuth } from '../../utils/auth';

const Deck = () => {
  
  const router = useRouter();
  useEffect(() => {
    if(!isUserAuth(localStorage)) router.push('/register');
  });
  
  return (
    <div>
        <Navbar />
        <h1>Hello</h1>
    </div>
  )
}

// const getServerSideProps = (context) => {
//     console.log(context);
//     return { props: {} }
// }

export default Deck