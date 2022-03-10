import { useEffect, useState } from "react"

function Counter() {
  // const count = 0
  const [count, setCount] = useState(0)
  const [isChecked, setIsChecked ] = useState(false)

  useEffect(() => {
    console.log("dijalankan setiap ada perubahan", count);
  }) // setiap ada perubahan pada state
  
  useEffect(() => {
    console.log("dijalankan cuma sekali", count);
  }, []) // jalan sekali

  useEffect(() => {
    console.log("ada perubahan pada data isCheck");
  }, [isChecked])

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

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

  // console.log(count);

  return (
    <>
      <button onClick={decrement}>-</button>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <label>ongkir 10k</label>
    </>
  )
}

export default Counter