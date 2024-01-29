import React, { useState } from 'react'
import Data from "../resources/countryData.json"

export default function UserInput({value, search}) {
    // const [show, setShow] = useState(false)
  return (
    <>
    <div id="list">
      {
        Data.filter((e) => {
          let input = value.toLowerCase()
          let result = e.name.toLowerCase()
          return (
            input && result.startsWith(input) && input != result
          )
        }).map((e) => (
          <div onClick={() => search(e.name)} key={e.name}>
            {e.name}
          </div>
        ))
      }
    </div>
    
    </>
  )
}
