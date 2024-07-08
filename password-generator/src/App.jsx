import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!@#$%^&*-_+=[]{}~`";
  
    for (let i = 0; i < length; i++) { 
      let charPos = Math.floor(Math.random() * str.length); 
      pass += str.charAt(charPos);
    }
  
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);
  
  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  
  useEffect(() => {
    passwordGen()  
  }, [length, numberAllowed, specialCharAllowed, passwordGen])  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">Password Generator</h1>

      <div className="flex items-center mb-5">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="rounded-l py-2 px-4 bg-gray-800 text-white outline-none"
          placeholder="Generated Password"
        />
        <button
          onClick={copyPassToClipboard}
          className="bg-blue-600 rounded-r-md px-4 py-2 ml-2 hover:bg-blue-700 focus:outline-none"
        >
          Copy
        </button>
      </div>

      <div className="flex items-center mb-5">
        <input
          type="range"
          min="8"
          max="50"
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          className="flex-grow cursor-pointer rounded py-2 text-white leading-tight focus:outline-none"
        />
        <label className="ml-4">Length: {length}</label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="numberInput"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !(prev))
          }}
          className="mr-2"
        />
        <label htmlFor="numberInput">Include Numbers</label>

        <input
          type="checkbox"
          id="characterInput"
          defaultChecked={specialCharAllowed}
          onChange={() => {
            setSpecialCharAllowed((prev) => !(prev))
          }}
          className="ml-8 mr-2"
        />
        <label htmlFor="characterInput">Include Special Characters</label>
      </div>
    </div>
  );
}

export default App;
