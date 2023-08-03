import { useState } from "react"
import "./App.css"
import { RepositoryList } from "./RepositoryList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, world!</h1>
      <RepositoryList />
    </>
  )
}

export default App
