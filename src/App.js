import React from "react"; 
import './App.css';


import Background from "./components/Background";
import Content from "./components/Content";


const App = () => { 
 
  return ( 
    <div className="App"> 
    {/* <Background/> */}
    <div className="content">
      <Content/>
    </div>
   
    </div> 
  ); 
}; 
export default App;