import { useRef } from 'react'
import './App.css'

function App() {

  const audioRefs = useRef({});
  const displayRef = useRef(null);
  const getAudiRef = (id) => (element) => audioRefs.current[id] = element;


  const handlePlay = (id) => {
    if (audioRefs.current[id]) {
      if (displayRef.current) displayRef.current.textContent = id;
      audioRefs.current[id].currentTime = 0;
      audioRefs.current[id].play().catch(error => {
        console.log(error);
      })
    }
  }

  document.addEventListener("keydown", (e) => {
    switch (e.key.toLocaleLowerCase()) {
      case 'q':
        handlePlay("Heater 1");
        break;
      case 'w':
        handlePlay("Heater 2");
        break;
      case 'e':
        handlePlay("Heater 3");
        break;
      case 'a':
        handlePlay("Heater 4");
        break;
      case 's':
        handlePlay("Clap");
        break;
      case 'd':
        handlePlay("Open-HH");
        break;
      case 'z':
        handlePlay("Kick-n'-Hat");
        break;
      case 'x':
        handlePlay("Kick");
        break;
      case 'c':
        handlePlay("Closed-HH");
        break;
    }
  })




  return (
    <>
      <main>
        <section id="drum-machine">
          <p ref={displayRef} id="display">Hit box</p>
          <div className="drum-keywords">
            <button
              onClick={() => handlePlay("Heater 1")}
              id="Heater 1"
              className='drum-pad'>
              Q
              <audio
                ref={getAudiRef("Heater 1")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'
                id="Q"></audio>
            </button>
            <button
              onClick={() => handlePlay("Heater 2")}
              id="Heater 2"
              className='drum-pad'>
              W
              <audio
                ref={getAudiRef("Heater 2")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'
                id="W"></audio>
            </button>
            <button
              onClick={() => handlePlay("Heater 3")}
              id="Heater 3"
              className='drum-pad'>
              E
              <audio
                ref={getAudiRef("Heater 3")}
                preload="metadata"
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'
                id="E"></audio>
            </button>
            <button
              onClick={() => handlePlay("Heater 4")}
              id="Heater 4"
              className='drum-pad'
            >
              A
              <audio
                ref={getAudiRef("Heater 4")}
                className="clip"
                preload="metadata"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'
                id="A"></audio>
            </button>
            <button
              onClick={() => handlePlay("Clap")}
              id="Clap"
              className='drum-pad'>
              S
              <audio
                ref={getAudiRef("Clap")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'
                id="S"></audio>
            </button>
            <button
              onClick={() => handlePlay("Open-HH")}
              id="Open-HH"
              className='drum-pad'>
              D
              <audio
                ref={getAudiRef("Open-HH")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'
                id="D"></audio>
            </button>
            <button
              onClick={() => handlePlay("Kick-n'-Hat")}
              id="Kick-n'-Hat"
              className='drum-pad'>
              Z
              <audio
                ref={getAudiRef("Kick-n'-Hat")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
                id="Z"></audio>
            </button>
            <button
              onClick={() => handlePlay("Kick")}
              id="Kick"
              className='drum-pad'>
              X
              <audio
                ref={getAudiRef("Kick")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'
                id="X"></audio>
            </button>
            <button
              onClick={() => handlePlay("Closed-HH")}
              id="Closed-HH"
              className='drum-pad'>
              C
              <audio
                ref={getAudiRef("Closed-HH")}
                preload='metadata'
                className="clip"
                src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
                id="C"></audio>
            </button>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
