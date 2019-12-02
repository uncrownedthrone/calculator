import React from 'react'
import Calculator from '../components/Calculator'
import Result from '../components/Result'
import KeyPadButtons from '../components/KeyPadButtons'

const HomePage = () => {
  return (
    <>
      <Result />
      <Calculator />
      <KeyPadButtons />
    </>
  )
}

export default HomePage
