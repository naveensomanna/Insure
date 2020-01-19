import React from 'react'
import './MainSection.scss'
function MainSection () {
  return (
    <section className='main-container'>
      <div className='intro-image'></div>
      <div className='intro-left-bg'></div>
      <div className='intro-container'>
        <section className='intro-description'>
          <h1 className='title'>Humanizing your insurance.</h1>
          <p>
            Get your life insurance easier and faster. we blend our expertise
            and technology to help you find the plan that right for you.Ensure
            you and your loved ones are protected.
          </p>
        </section>
        <div className='intro-right-bg'></div>
      </div>
    </section>
  )
}
export default MainSection
