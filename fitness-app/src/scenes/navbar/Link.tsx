// this will contain all the links
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SelectedPage from '@/shared/types'

type Props = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}

const Link = ({
    page,selectedPage,setSelectedPage
}:Props) => {

// these tells typescript to use page the type as selectedPage;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink 
    // this is were we set the class to def class when clicked
    className={`${selectedPage === lowerCasePage ? "text-primary-500":""} transition duration-500 hover:text-primary-300`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    
    >
        {page}
    </AnchorLink>
  )
}

export default Link