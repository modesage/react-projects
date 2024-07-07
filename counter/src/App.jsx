import { useState } from "react"

function App() {
  const [counter,setCounter] = useState(0)

  const addValue = () => {
    setCounter((prevCounter) => { return prevCounter + 1})
  }

  const subtractValue = () => {
    setCounter((prevCounter) => {return prevCounter - 1})
  }

  return (
    
    <div className="bg-indigo-950 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-3xl">
        Count: {counter}
        </div>
        <div>
          <button className="bg-blue-600 py-1 px-20 m-4 rounded-lg"
          onClick={addValue}>
            +
          </button>
          <br/>
          <button className="bg-blue-600 py-1 px-20 rounded-lg"
          onClick={subtractValue}>
            -
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default App
