import React from 'react'
import './MainSection.scss'
function MainSection () {
  return (
    <section className='main-container'>
      <div className='intro-image'></div>
      <div className='intro-left-bg'></div>
      <div className='intro-container'>
        <section className='intro-description'>
          <div className='hr-line'>
            <hr />
          </div>
          <div>
            <h1 className='title'>Humanizing your insurance.</h1>
            <p className='sub-title'>
              Get your life insurance easier and faster. we blend our expertise
              and technology to help you find the plan that right for you.Ensure
              you and your loved ones are protected.
            </p>
          </div>
          <button className='btn'>view plans</button>
        </section>
        <div className='intro-right-bg'></div>
      </div>
    </section>
  )
}
export default MainSection
