import { useEffect, useState } from 'react'
import Navbar from "@/scenes/navbar"
import SelectedPage from './shared/types'

import './App.css'

// enums used to describe constants


function App() {
  // this is where you initializes from the enums

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home);
      
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }

    // the ee
    window.addEventListener("scroll",handleScroll);

    //clean up function whenever one anatoka kwa hio page to prevent memory liks and bugs
    return () => window.removeEventListener("scroll",handleScroll)


  },[])

  return (
    <>
    <div className='bg-gray-20'>

      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
    </>
  )
}

export default App
