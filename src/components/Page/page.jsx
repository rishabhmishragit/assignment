import React from 'react'
import './page.css'
import ItemList from '../ItemList/itemList.jsx'

function Page() {
  return (
    <>
      <div className='heading'>Personalized Beauty Recommendation</div>
      <div className='subHeading'>MakeUp</div>
      <ItemList/>
      <div className='subHeading'>Skin Concern</div>
      <ItemList/>
      <div className='link'>
        <div className='text'>Next</div>
      </div>
    </>   
  )
}

export default Page
