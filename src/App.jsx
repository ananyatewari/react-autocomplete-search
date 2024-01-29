import React, { useState } from 'react'
import UserInput from "./components/UserInput"
import CountryData from "./resources/countryData.json"
import "./App.css"

function App() {
  const [search, setSearch] = useState("")

    const takingInputValue = (input) => {
        setSearch(input.target.value)
    }

    const searchItem = (input) => {
      input.preventDefault()
      setSearch(input)
    }

    const escapeKey = (e) => {
      if (e.key == "Escape") {
        e.preventDefault()
        console.log("escape key pressed")
        document.getElementById("list").style.display = "none"
        // document.getElementById("text").value = {search}
      }
      else {
        document.getElementById("list").style.display = "block"
      }
    }

  return (
    <>
    <h1>Search</h1>
    <form action="" onSubmit={(e) => searchItem(e)}>
        <input type="search" 
        value={search}
        onChange={(e) => takingInputValue(e)}
        onKeyDown={escapeKey}
        id="text"
        />
        <button type="submit"
        >Search</button>
    </form>
    <UserInput value = {search} search = {searchItem}/>
    </>
  )
}

export default App