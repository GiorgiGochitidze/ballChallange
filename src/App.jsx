import React, { useState } from 'react';

function App() {
  const [divs, setDivs] = useState([]);
  const [undoneDiv, setUndoneDiv] = useState(null);

  const handleMouseClick = (e) => {
    const newDiv = {
      x: e.clientX,
      y: e.clientY,
      color: getRandomColor()
    };
    setDivs([...divs, newDiv]);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const undoBall = () => {
    const lastDiv = divs[divs.length - 1];
    if (lastDiv) {
      setUndoneDiv(lastDiv);
      setDivs(divs.slice(0, divs.length - 1));
    }
  };

  const redoBall = () => {
    if (undoneDiv) {
      setDivs([...divs, undoneDiv]);
      setUndoneDiv(null);
    }
  };

  return (
    <>
      <div className='container' onClick={handleMouseClick}>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: div.y,
              left: div.x,
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: div.color
            }}
          ></div>
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
