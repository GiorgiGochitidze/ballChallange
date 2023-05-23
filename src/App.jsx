import React, { useState } from 'react';

function App() {

  // defines 2 usestate values 1 of balls 2 is for last created balls

  const [divs, setDivs] = useState([])
  const [undoneDivs, setUndoneDivs] = useState([])

  // on click on container creates a new div element wich will create in this place where is mouse and located with random color
  const handleMouseClick = (e) => {
    const newDiv = {
      x: e.clientX,
      y: e.clientY,
      color: randomColor()
    }
    // set divs getting a previous value and duplicating it and adding new value wich made and updater function in code
    setDivs(divs => [...divs, newDiv])
  }


  //a function wich do balls undo with 1 piece
  const undoBall = () => {
    //checks last div
    const lastDiv = divs[divs.length - 1]
    //doing undo if last div 
    if(lastDiv){
      setUndoneDivs(lastDiv)
      setDivs(divs.slice(0, divs.length - 1))
    }
  }

  //a function wich mades balls redo returning it back after doing undo
  const redoBall = () => {
    if(undoneDivs){
      setUndoneDivs(null)
      setDivs(divs => [...divs, undoneDivs])
    }
  }

  //making random color
  const randomColor = () => {
    const letters = '0123456789ABCDEFabcdef'
    let color = '#'

    //i < 6 means make a array with 6 symbols and math random() * 21 means to get random symbol from array
    for(let i =0; i < 6; i++ ){
      color += letters[Math.floor(Math.random() * 21)]
    }

    return color
  }

  return (
    <>
      <div className='container' onClick={handleMouseClick}>
        {/* map-s a divs wich giving index to div and styles it  */}
        {divs.map((div, index) => (
          <div
          key={index}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: div.color,
            top: div.y,
            left: div.x
          }}
          >

          </div>
        ))}
      </div>
      <div className='buttons'>
        <button className='undo' onClick={undoBall}>
          undo
        </button>
        <button className='undo' onClick={redoBall}>
          redo
        </button>
      </div>
    </>
  );
}

export default App;
