// import { useState } from 'react'

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <div className="w-full h-screen duration-200"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//             onClick={() => setColor("red")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "red" }}
//           >Red</button>
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "green" }}
//           >Green</button>
//           <button
//             onClick={() => setColor("blue")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "blue" }}
//           >Blue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from 'react';

function getRandomColor() {
  // Generate a random color in hex format
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState(getRandomColor());

  const handleRandomColorClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={handleRandomColorClick}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: color }}
          >
            Random Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
