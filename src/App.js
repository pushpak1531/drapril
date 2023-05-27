import React from "react";
import './App.css';
import './components/BoxComponent'


import Background from "./components/Background";
import Content from "./components/Content";


const App = () => {

  return (
    <div className="App">
      {/* <Background/> */}
      <div className="content">
        <Content />
      </div>
      <div className="box-container">
        <BoxComponent videoUrl="hahah.mp4"></BoxComponent>
      </div>
    </div>
  );
};
export default App;