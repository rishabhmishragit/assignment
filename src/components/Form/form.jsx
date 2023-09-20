import React from 'react'
import './form.css'

function form() {
  return (
    <>
      <div className='title'>
        Fill your details below
        <br/>
        to
        <br/>
        RECEIVE PERSONALISED PRODUCT RECOMMENDATIONS
      </div>
      <div className='details'>
        <div className='field'>
            <div className='area'>
                <div className='inputArea'>
                  <img alt='icon' src='https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' className='icon'></img>
                  <input name='name' type='text' placeholder='Enter Your Name' className='inp'></input>
                </div>
            </div>
            
            <div className='area'>
                <div className='inputArea'>
                  <img alt='icon' src='https://i.pinimg.com/originals/84/6a/03/846a03c6760f83f3a0e92609bca9cebf.jpg' className='icon'></img>
                  <input name='email' type='email' placeholder='Enter Your Email' className='inp'></input>
                </div>
            </div>
            <div className='area'>
                <div className='inputArea'>
                  <img alt='icon' src='https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg' className='icon'></img>
                  <input name='mobile' type='tel' placeholder='Enter Your Number' className='inp'></input>
                </div>
            </div>
            <div className='submitDetails'>
                <button className='button'>SUBMIT</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default form
