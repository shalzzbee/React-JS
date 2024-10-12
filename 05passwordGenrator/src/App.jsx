import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook--for reference
  const passwordRef = useRef(null);


  const passwrodGenerator = useCallback(() => { //memoization--keep in cache memory
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+={}[]~`";


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberallowed, charAllowed, setPassword])



  //copy password to clipboard

  const copypasswordToCLipboard = useCallback(() => { //memoize

    passwordRef.current?.select();
    //to select a range
    passwordRef.current?.setSelectionRange(0, 99);

    window.navigator.clipboard.writeText(password);
  }, [password])


  //sync--dependency array--run
  useEffect(() => {
    passwrodGenerator();
  }, [length, numberallowed, charAllowed, passwrodGenerator])



  return (

    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className=' text-center my-3 text-white'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copypasswordToCLipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 transition-all'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length: {length}</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
