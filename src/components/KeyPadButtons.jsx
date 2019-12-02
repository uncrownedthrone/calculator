import React from 'react'

const KeyPadButtons = () => {
  return (
    <>
      <section className="inputBox">
        <input type="text" placeholder="test" align="ri" />
      </section>
      <section>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button>÷</button>
      </section>
      <section>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </section>
      <section>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>+</button>
      </section>
      <section>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>-</button>
      </section>
      <section>
        <button>0</button>
        <button>.</button>
        <button>AC</button>
        <button>=</button>
      </section>
    </>
  )
}

export default KeyPadButtons
