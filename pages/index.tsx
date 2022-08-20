import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Content from '../components/Dashboard/Content'
import Navbar from '../components/Navbar'
import { isUserAuth } from '../utils/auth'

// index page (/)
const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if(!isUserAuth(localStorage)) router.push('/register');
  });

  return (
    <div>
        <Navbar />
        <Content />
    </div>
  )
}

export default Home
