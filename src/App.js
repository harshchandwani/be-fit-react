import React from "react"
import './App.css';
import Restaurant from "./components/basics/Restaurant"

function App() {
  return (
    <>
    <h1 className="heading">Be Fit</h1>
    <h3 className="secondary">We Provide healthy solutions for breakfast, lunch and evening snack, at affordable prices.</h3>
    <br></br>
    <h2 className="secondary">Order Now</h2>
    <Restaurant />
    </>
  );
}

export default App;
