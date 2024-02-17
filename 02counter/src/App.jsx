import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);

 //let counter=15
 const addValue=()=>{
  // counter=counter+1;
  // if(counter<20){
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  //ab ye hame 19 dega bcoz har baar ye call back return kar raha hai  uske prevCounter ko pass karne ke wajah se purana value store hoke deta hai.
 


  // }
  // console.log(counter);
 }
 const removeValue=()=>{
  // if(counter>0){
    setCounter(counter-1)
  // }
 }

  return (
    <>
      <h1>chai aur React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value:{counter}</button>
      <br />
      <button onClick={removeValue}>remove value{counter}</button>
    </>
  );
}

export default App
// Assignment
