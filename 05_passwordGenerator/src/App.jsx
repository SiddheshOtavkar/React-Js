import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className='bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-screen'>
      <div className="min-h-screen flex flex-col justify-center items-center text-black">
        <div className="max-w-md mx-auto p-4 my-8 bg-black text-white rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold my-3">Password Generator</h1>

          <div className="flex rounded-lg overflow-hidden shadow mb-4">
            <input
              type="text"
              value={password}
              className="w-full py-1 px-3 outline-none bg-gray-700 text-white"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-700 text-white px-3 py-1 rounded-r cursor-pointer"
            >
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-gray-300">Length:</label>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="text-gray-300">{length}</span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="text-gray-300 ml-2">Numbers</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="text-gray-300 ml-2">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
