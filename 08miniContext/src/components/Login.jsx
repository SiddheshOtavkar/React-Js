import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputsEmpty, setInputsEmpty] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setInputsEmpty(true)
      return
    }
    setUser({ username, password });
    setInputsEmpty(false)
  };

  return (
    <div className="max-w-md mx-auto bg-gray-500 p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        id='usernameInput'
        type="text"
        required
        placeholder="Username"
        value={username}
        // onChange={(e) => setUsername(e.target.value)}
        onChange={(e) => {
          setUsername(e.target.value);
          setInputsEmpty(false); // Clear the error message when typing
        }}
        className="w-full p-2 mb-2 border rounded-md"
      />
      <input
        id='passwordInput'
        type="password"
        required
        placeholder="Password"
        value={password}
        // onChange={(e) => setPassword(e.target.value)}
        onChange={(e) => {
          setPassword(e.target.value);
          setInputsEmpty(false);
        }}
        className="w-full p-2 mb-4 border rounded-md"
      />
      {inputsEmpty && (
        <div className="text-red-600 text-sm bg-red-100 p-2 rounded-md mt-2">
          Username and Password are required.
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="mt-3 w-full text-white p-2 rounded-md transition duration-300"
        style={{
          backgroundColor: '#3498db', // Blue
          border: '1px solid #2c3e50', // Darker blue
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
