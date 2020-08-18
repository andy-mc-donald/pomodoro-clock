import React from 'react';

const Session = ({ sessionValue, sessionDown, sessionUp }) => {
    return (
        <div id="session-label">
          <h3>Session</h3>
          <h4 id="session-length">{sessionValue}</h4>
          <button id="session-decrement" onClick={sessionDown}>-</button>
          <button id="session-increment" onClick={sessionUp}>+</button>
       </div>
    ) 
  }

  export default Session;
  