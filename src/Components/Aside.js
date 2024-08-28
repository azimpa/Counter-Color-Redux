import React from 'react'
import './Aside.css'
import { useSelector, useDispatch } from 'react-redux'
import randomColor from 'randomcolor'
import { change_color } from '../Redux/Color/colorSlice'

function Aside() {
  const color = useSelector(state => state.color.value)
  const dispatch = useDispatch()
  const changeColor = () => {
    dispatch(change_color({
      color:randomColor()
    }))
  }

  return (
    <div className='aside'>
      <h1 style={{ color }}>Aside</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Aside
