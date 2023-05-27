import React from "react"; 
import Particles from "react-tsparticles"; 
import BoxComponent from "./components/BoxComponents";
import { loadFull } from "tsparticles"; 
import "./App.css"
const App = () => { 
  const particlesInit = async (main) => { 
    console.log(main); 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(main); 
    // <BoxComponent videoUrl="hahah.mp4"></BoxComponent>
  }; 
  const particlesLoaded = (container) => { 
    console.log(container); 
  }; 
  return ( 
    <div className="App"> 
      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          background: { 
            color: "#261966", 
          }, 
          fpsLimit: 30, 
          particles: { 
            shape: { 
              type: "circle", 
            }, 
            size: { 
              value: 23.5,
              random: true,
            }, 
            color: { 
              value: "#e8cdcd", 
            }, 
            number: { 
              value: 300, 
            }, 
            move:{
              enable: true,
              random: true,
              straight: true,
              direction: "top-right",
              speed : 4
            },
            opacity:{
              value : 0.7,
              random : true
            },
          },
          interactivity: { 
              detectsOn: "canvas", 
              onhover:{
                enable: true,
                mode: "repulse",
              },
              onclick:{
                enable: true,
                mode: "push",
              },
              modes:{
                repulse:{
                  distance: 200,
                },
              },
              events: { 
                resize: true, 
              }, 
            },  
        }} 
      /> 
      <div className="box-container">
      <BoxComponent videoUrl="hahah.mp4"></BoxComponent>
      </div>
    </div> 
  ); 
}; 
export default App;