import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AiFillChrome } from "react-icons/ai";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="fs-1">
        <h1>Library Management System</h1>
        <AiFillChrome />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
