import React from 'react'
import Counter from './Counter'
import Aside from './Aside'
import './Main.css'

function Main() {
  return (
    <div className='main'>
      <Counter/>
      <Aside/>
    </div>
  )
}

export default Main
