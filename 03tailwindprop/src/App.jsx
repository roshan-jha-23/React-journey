import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  
  let myobj={
    user:"roshan",
    age:23
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card channel="Roshan" btnText="Click me"/>
      <Card channel="rohan" btnText="Press me"/>
    </>
  );
}

export default App;
