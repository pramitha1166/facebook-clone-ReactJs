import React from 'react';
import './App.css';
import Header from "./Header"
import Slider from "./Slider"
import Feed from "./Feed"

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Slider />
        <Feed />
        {/*feed */}
        {/*widget */}
      </div>
      

    </div>
  );
}

export default App;
