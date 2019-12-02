import React from 'react'
import Result from '../components/Result'
import NumberButton from '../components/NumberButton'

const HomePage = props => {
  const numbers = '1234567890*+-/C'.split('')
  const numberClicked = numbers
  return (
    <>
      <Result />
      {numbers.map(number => {
        return (
          <section key={number}>
            <NumberButton handleClick={numberClicked} number={number} />
          </section>
        )
      })}
    </>
  )
}

export default HomePage
