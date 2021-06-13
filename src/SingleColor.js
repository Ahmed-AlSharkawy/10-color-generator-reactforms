import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hex, index, setColor }) => {
  // const [alert, setAlert] = useState(false)

  const colorVal = rgb.join(',')
  // const hex = rgbToHex(...rgb)
  const hexColor = `#${hex}`

  /*
  useEffect(() => {
    const tik = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout(tik)
    }
  }, [alert]) 
  */

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${colorVal})` }}
      onClick={() => {
        navigator.clipboard.writeText(hexColor)
        setColor(hexColor)
        // setAlert(true)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {/* {alert && <p className='alert'>copied to clipboard</p>} */}
    </article>
  )
}

export default SingleColor
