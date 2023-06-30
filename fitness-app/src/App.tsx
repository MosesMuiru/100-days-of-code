import { useEffect, useState } from 'react'

import Navbar from "@/scenes/navbar"
import Home from './scenes/Home/Home'
import SelectedPage from './shared/types'


import './App.css'

// enums used to describe constants


function App() {
  // this is where you initializes from the enums

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
//use state to initializes the checker if the navbar is on top of the screen
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    //function for doing all the staff
    const handleScroll = () => {
      if(window.scrollY === 0) {setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home);
      
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }

    // the listenner when scrolling and to handle if the scroll has changed to a certain number
    window.addEventListener("scroll",handleScroll);

    //clean up function whenever one anatoka kwa hio page to prevent memory liks and bugs
    return () => window.removeEventListener("scroll",handleScroll)


  },[])

  return (
    <>
    <div className='bg-gray-20'>

      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

      <Home  setSelectedPage={setSelectedPage}/>
    </div>
    </>
  )
}

export default App
