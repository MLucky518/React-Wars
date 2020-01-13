import React from 'react';
import './App.css';
import Characters from "./components/Characters"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h1 className = "tale">Tale of The Tape</h1>
      <img className = "vs" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUUIAIg5seCYVRAkwNWgNHvRb4SomGpMVP-fBipylD0KJQAkV&s"></img>
      <Characters/>
    </div>
  );
}

export default App;
