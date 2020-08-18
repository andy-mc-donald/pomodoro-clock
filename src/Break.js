import React from 'react';

const Break = ({ breakValue, breakDown, breakUp }) => {
    return (
        <div id="break-label">
          <h3>Break</h3>
          <h4 id="break-length">{breakValue}</h4>
          <button id="break-decrement" onClick={breakDown}>-</button>
          <button id="break-increment" onClick={breakUp}>+</button>
        </div>
    )
  }

export default Break;