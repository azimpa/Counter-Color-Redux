import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'

function Header() {
  const color = useSelector(state => state.color.value)
  const count = useSelector(state => state.count.value)
  return (
    <div className='header'>
      <h1 style={{ color }}>HI, Azi</h1>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default Header
