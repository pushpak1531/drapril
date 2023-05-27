import React from "react"
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const Background = (props) => {
    const particlesInit = async (main) => { 
        console.log(main); 
        await loadFull(main); 
      }; 
    
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 
  return (
    <div>
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
              modes:{
                repulse:{
                  distance: 200,
                },
              },
              events: { 
                onhover:{
                    enable: true,
                    mode: "repulse",
                  },
                resize: true, 
              },
              modes:{
                repulse:{
                    distance: 200,
                },
              } 
            },  
        }} 
      /> 
    </div>
  )
};

export default Background;
