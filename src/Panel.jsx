import React, {useState} from 'react'


let count = 0
export default function Panel() {
  const [state, setState] = useState()
  count++
  return (
    <>
      <h2>More Whirled, num renders {count}</h2>
      <button onClick={setState}>Set State</button>
    </>
  )
}
