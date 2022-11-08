import "./index.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaEyeSlash);

  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(FaEyeSlash);
    } else {
      setType("password");
      setIcon(FaEye);
    }
  };

  return (
    <div className="wrapper">
      <div className="input-filed">
        <input type={type} />
        <span onClick={handleClick}>{icon}</span>
      </div>
    </div>
  );
}

export default App;
