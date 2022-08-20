import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Content from '../components/Dashboard/Content'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import UnauthNavbar from '../components/UnauthNavbar'
import { isUserAuth } from '../utils/auth'

// index page (/)
const Home: NextPage = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => setAuth(true))
  if(auth)
    return (
      <>
        {/* Conditional Rendering for Authentication */}
        {(isUserAuth(localStorage)) ?
            <div>
              <Navbar />
              <Content/>
            </div>
          :
            <div>
              <UnauthNavbar />
              <Register/>
            </div>
        }
      </>
    );
  else return (<></>);
}

export default Home
