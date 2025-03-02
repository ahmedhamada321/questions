import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SurveyComponent from "./SurveyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SurveyComponent />
    </>
  );
}

export default App;
