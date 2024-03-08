import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../../features/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const [val, setVal] = useState('')
  const dispatch = useDispatch()

  const numVal = Number(val) || 0

  return (
    <section className='max-container text-center'>
      <h1 className='head-text'>Counter: {count}</h1>
      <div className='flex justify-evenly mb-3'>
        <button className='btn' onClick={() => dispatch(increment())}>
          +
        </button>
        <button className='btn' onClick={() => dispatch(decrement())}>
          -
        </button>
        <button
          className='btn'
          onClick={() => {
            setVal(0)
            dispatch(reset())
          }}
        >
          Reset
        </button>
      </div>
      <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
      <div className='flex justify-evenly mt-3'>
        <button
          className='btn'
          onClick={() => dispatch(incrementByAmount(numVal))}
        >
          + By
        </button>
      </div>
    </section>
  )
}

export default Counter
