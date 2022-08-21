import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isUserAuth } from '../utils/auth'

// index page (/)
const Home: NextPage = () => {

  // auth check
  const router = useRouter();
  useEffect(() => {
    if(!isUserAuth(localStorage)) router.push('/register');
    else router.push('/dashboard');
  });

  return (
    <div>
    </div>
  )
}

export default Home
