import { useState, useCallback, useEffect,useRef } from "react";
// import PasswordForm from "./PasswordForm"
function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += `"!"#$%&'()*+,-./:;<=>?@[`;
    for (let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99); /*For mobile devices*/
  window.navigator.clipboard.writeText(password)
},[password])
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-4">
          Generate a random password
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 -mt-3">
          <input
            type="text"
            placeholder="Generated Password"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipBoard}
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
            <svg
              className="w-4 h-4 mr-2 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 2v14H2V3h3zm5-2h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 2v14h3V3h-3zm5-2h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 2v14h3V3h-3z"></path>
            </svg>
            Copy
          </button>
        </div>
        <div>
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevValue) => !prevValue);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="mt-2 flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="charInput"
              onChange={() => {
                setCharacterAllowed((prevValue) => !prevValue);
              }}
            />
            <label htmlFor="charInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
