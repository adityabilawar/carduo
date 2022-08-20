import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Content from '../components/Dashboard/Content'
import Navbar from '../components/Navbar'
import { isUserAuth } from '../utils/auth'

// index page (/)
const Home: NextPage = () => {
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
