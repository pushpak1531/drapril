import React from "react";
import './App.css';
import BoxComponent from "./components/BoxComponent";


import Background from "./components/Background";
import Content from "./components/Content";


const App = () => {

  return (
    <div className="App"
      style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Background />
      <Content />
      <div id="video-wrapper">
        <BoxComponent videoUrl="https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C64722e0915aa53aaf378756f/tlk_7HWnJ2g3eZEGQpCYYZfSv/1685223949445.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1685310351&Signature=hqNKlT5fjR9KIfT%2BkUIf8wJGsz0%3D&X-Amzn-Trace-Id=Root%3D1-64727a0f-38bf34a915fb066264b6615e%3BParent%3Dc9e1e38fc44d0296%3BSampled%3D1%3BLineage%3D6b931dd4%3A0"></BoxComponent>
      </div>
    </div>
  );
};
export default App;