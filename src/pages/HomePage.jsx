import React from 'react'
import Calculator from '../components/Calculator'
import Result from '../components/Result'
import NumberButtons from '../components/NumberButtons'

const HomePage = () => {
  return (
    <>
      <Result />
      <Calculator />
      <NumberButtons />
    </>
  )
}

export default HomePage
