import { useState } from "react";

function App() {
  const [color, setColor] = useState("#202124");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center fixed inset-x-0 top-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#7c3aed")}
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Violet
          </button>
          <button
            onClick={() => setColor("#4f46e5")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("#2563eb")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#16a34a")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Green
          </button>
          <button
            onClick={() => setColor("#eab308")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#f97316")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#dc2626")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            Red
          </button>
          <button
            onClick={() => setColor("#202124")}
            className="bg-custom-dark-gray hover:bg-gray-600 text-white px-8 py-5 rounded-full shadow-md outline-none transition-all duration-300 transform hover:scale-105"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
