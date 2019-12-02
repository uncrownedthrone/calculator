// DONE create button on page

// TODO assign numbers to each button
// TODO assign operator to math buttons
// TODO hold button selection in memory
// TODO add math for / * + -
// TODO display result
// TODO clear result

import React from 'react'

// create button on page
const CreateButtons = props => {
  const handleClick = () => {
    console.log(props.number)
  }
  return (
    <>
      <section>
        <button>💜</button>
        <button>+/-</button>
        <button>%</button>
        <button>÷</button>{' '}
      </section>{' '}
      <section>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>{' '}
      </section>{' '}
      <section>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>+</button>{' '}
      </section>{' '}
      <section>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>-</button>{' '}
      </section>{' '}
      <section>
        <button>0</button>
        <button>.</button>
        <button>AC</button>
        <button>=</button>{' '}
      </section>
    </>
  )
}

export default CreateButtons
