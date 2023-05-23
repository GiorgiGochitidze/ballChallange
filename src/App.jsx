import React, { useState } from 'react';

function App() {

  const [divs, setDivs] = useState([])
  const [undoneDivs, setUndoneDivs] = useState([])

  const handleMouseClick = (e) => {
    const newDiv = {
      x: e.clientX,
      y: e.clientY,
      color: randomColor()
    }

    setDivs(divs => [...divs, newDiv])
  }

  const undoBall = () => {
    const lastDiv = divs[divs.length - 1]
    if(lastDiv){
      setUndoneDivs(lastDiv)
      setDivs(divs.slice(0, divs.length - 1))
    }
  }

  const redoBall = () => {
    if(undoneDivs){
      setUndoneDivs(null)
      setDivs(divs => [...divs, undoneDivs])
    }
  }

  const randomColor = () => {
    const letters = '0123456789ABCDEFabcdef'
    let color = '#'

    for(let i =0; i < 6; i++ ){
      color += letters[Math.floor(Math.random() * 21)]
    }

    return color
  }

  return (
    <>
      <div className='container' onClick={handleMouseClick}>
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
