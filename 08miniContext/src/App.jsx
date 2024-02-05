import { useState } from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
        {/* Use a darker shade, like bg-gray-800 */}
        <h1 className="text-3xl font-bold mb-6 text-white">Context Api</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
