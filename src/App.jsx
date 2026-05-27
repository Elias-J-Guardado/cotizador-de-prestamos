import { useState } from "react";
import { Header } from "./components/Header";

function App() {
   const [cantidad, setCantidad ] = useState(10000); 

  return (
    <>
      <div className="my-20 max-w-3xl mx-auto bg-white shadow p-10">
          <Header />

          <input 
            type="range"
            className="w-full h6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
          />
      </div>
    </>
  )
}

export default App
