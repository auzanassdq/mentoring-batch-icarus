import { useState } from "react"

function Counter() {
  // const count = 0
  const [count, setCount] = useState(0)

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  console.log(count);

  return (
    <>
      <button onClick={decrement}>-</button>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
    </>
  )
}

export default Counter