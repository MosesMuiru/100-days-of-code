import { useState } from 'react'
import Navbar from "@/scenes/navbar"
import SelectedPage from './shared/types'

import './App.css'

// enums used to describe constants


function App() {
  // this is where you initializes from the enums

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  return (
    <>
    <div className='bg-gray-20'>

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
    </>
  )
}

export default App
