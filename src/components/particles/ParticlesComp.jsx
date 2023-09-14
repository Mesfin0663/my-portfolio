import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function ParticlesComp() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const options = {
        preset: "firefly",
      };
  return (
    <div>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                name: "Absorbers",
                particles: {
                    number: {
                        value: 300,
                    },
                    collisions: {
                        enable: true,
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1,
                        },
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 2,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "top",
                        straight: true,
                        warp: true,
                    },
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 10,
                        },
                    },
                },
                absorbers: {
                    draggable: true,
                    size: {
                        value: {
                            min: 5,
                            max: 10,
                        },
                        limit: 10,
                    },
                    position: {
                        x: 50,
                        y: 50,
                    },
                },
              
            }}
        />
    </div>
  )
}

export default ParticlesComp
