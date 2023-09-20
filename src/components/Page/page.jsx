import React from 'react'
import './page.css'
import ItemList from '../ItemList/itemList.jsx'
import { Link } from 'react-router-dom'

function Page() {
  return (
    <>
      <div className='heading'>Personalized Beauty Recommendation</div>
      <div className='subHeading'>MakeUp</div>
      <ItemList/>
      <div className='subHeading'>Skin Concern</div>
      <ItemList/>
      <div className='link'>
       <Link to="/Form" className='text'>Next</Link>
      </div>
    </>   
  )
}

export default Page
