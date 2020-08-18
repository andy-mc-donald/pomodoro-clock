import React from 'react';

const Timer = ({title, timerValueMins, timerValueSecs, startStop, startStopText, reset }) => {
    return (
       <div id="timer-label">
          <h2>{title}</h2>
          <h4 id="time-left">{timerValueMins}:{timerValueSecs}</h4>
          <button id="start_stop" onClick={startStop}>{startStopText}</button>
          <button id="reset" onClick={reset}>Reset</button>
          <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
       </div>
    )
  }

  export default Timer;