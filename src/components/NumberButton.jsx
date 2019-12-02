// DONE create button on page
// DONE assign numbers to each button

// TODO assign operator to math buttons
// TODO hold button selection in memory
// TODO add math for / * + -
// TODO display result
// TODO clear result

import React from 'react'

// create button on page
const NumberButton = props => {
  return (
    <>
      <section>
        <button onClick={() => props.handleClick(props.number)}>
          {props.number}
        </button>
      </section>
    </>
  )
}

export default NumberButton
