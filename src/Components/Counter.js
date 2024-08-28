import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { increase_count, decrease_count } from '../Redux/Count/counterSlice'
function Counter() {
  const count = useSelector( state => state.count.value)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(increase_count())
  }

  const decrement = () => {
    dispatch(decrease_count())
  }

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <h4>The Count is = {count}</h4>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default Counter
