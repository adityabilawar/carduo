import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <Register />
    </div>
  )
}

export default Home
