import React from 'react'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as Menu } from '../../images/icon-hamburger.svg'
import './Header.scss'
function Header () {
  return (
    <header className='header-container'>
      <nav className='header-list'>
        <Logo />
        <ul className='list-wrapper'>
          <li className='item'>how we work</li>
          <li className='item'>blog</li>
          <li className='item'>account</li>
          <button className='btn'>view plans</button>
        </ul>
        <Menu className='menu' />
      </nav>
    </header>
  )
}
export default Header
