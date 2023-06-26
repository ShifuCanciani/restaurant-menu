import React from 'react'
import {MdOutlineLightMode, MdOutlineNightlightRound } from 'react-icons/md'
import { useGlobalContext } from './context'

const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext()
  return <section className='toggle-container'>
    <button className='dark-toggle toggle-icon' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
        <MdOutlineNightlightRound />
        ) : (
        <MdOutlineLightMode />
        )}
    </button>
  </section>
}

export default ThemeToggle
