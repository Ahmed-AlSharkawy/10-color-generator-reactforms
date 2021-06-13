import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#ff0000')
  const [count, setCount] = useState(5)
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#ff0000').all(5))
  const [shadow, setShadow] = useState(new Values('#ff0000').tint(75).hex)

  useEffect(() => {
    const intCount = parseFloat(count)
    try {
      let colors = new Values(color).all(intCount)
      setList(colors)
      setShadow(new Values(color).tint(75).hex)
    } catch (e) {
      setError(true)
    }
  }, [color, count])

  return (
    <>
      <section className='container' style={{ marginTop: '2rem' }}>
        <h2>color generator</h2>
      </section>
      <section className='container'>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='palette'>Palette:</label>
          <input
            type='color'
            id='palette'
            name='palette'
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
            style={{
              width: '3.5rem',
              height: '2rem',
              border: `2px solid ${color}`,
              marginRight: '0.5rem',
              backgroundColor: `#${shadow}`,
              padding: '0.35rem',
            }}
          />
          <label htmlFor='color'>Color:</label>
          <input
            type='text'
            id='color'
            name='color'
            value={color}
            className={`${error ? 'error' : null}`}
            placeholder='#ffffff'
            style={{
              width: '6.5rem',
              border: `2px solid ${color}`,
              marginRight: '0.5rem',
              backgroundColor: `#${shadow}`,
            }}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor='weight'>Weight:</label>
          <input
            type='number'
            id='weight'
            name='weight'
            min='0.1'
            value={count}
            style={{
              width: '4.5rem',
              border: `2px solid ${color}`,
              marginRight: '0.5rem',
              backgroundColor: `#${shadow}`,
            }}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <div className='footer'>
        <h4>click on any node to copy hex value</h4>
        <section className='colors'>
          {list.map((item, index) => {
            return (
              <SingleColor
                key={index}
                {...item}
                hex={item.hex}
                index={index}
                setColor={setColor}
              />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
