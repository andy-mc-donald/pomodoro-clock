import React, {useState, useEffect} from 'react';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';
import './App.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLengthMins, setTimerLengthMins] = useState(25);
  const [timerLengthSecs, setTimerLengthSecs] = useState("00");
  const [activeCountdown, setActiveCountDown] = useState(false);
  const [sessionOrBreak, setSessionOrBreak] = useState('Session')
  
  const audio =  document.getElementById("beep");
 
  const handleBreakDown = () => {
    if(activeCountdown) return;
    if(breakLength > 1){
      setBreakLength(breakLength - 1)  
    }
    else return;
  }
  
  const handleBreakUp = () => {
    if(activeCountdown) return;
    if(breakLength < 60){
      setBreakLength(breakLength + 1)  
    }
    else return; 
  }
  
  const handleSessionDown = () => {
    if(activeCountdown) return;
    if(sessionLength > 1){
      setSessionLength(sessionLength - 1);
      setTimerLengthMins((sessionLength -1).toString().padStart(2, '0'));
      setTimerLengthSecs("00");
    }
    else return;
  }
  
  const handleSessionUp = () => {
     if(activeCountdown) return;
     if(sessionLength < 60){
      setSessionLength(sessionLength + 1);  
      setTimerLengthMins((sessionLength + 1).toString().padStart(2, '0'));
      setTimerLengthSecs("00"); 
    }
    else return; 
  }
  
  const handleStart = () => {
    setActiveCountDown(true);
  }
  
  const handleStop = () => {
    setActiveCountDown(false);
  }
 
  const handleReset = () => {
    setActiveCountDown(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimerLengthMins(25);
    setTimerLengthSecs("00");
    setSessionOrBreak('Session');
    audio.pause();
    audio.currentTime = 0;
  }
  
  //This is the code for making the clock run and switch from session to break 
  useEffect(() => {
    let interval = null;
    
    if(activeCountdown && sessionOrBreak === 'Session' && timerLengthMins === "00" && timerLengthSecs === "00"){
      setTimerLengthMins(breakLength.toString().padStart(2, '0'));
      setTimerLengthSecs("00");
      setSessionOrBreak('Break')
      audio.play();
    }
    
   if(activeCountdown && sessionOrBreak === 'Break' && timerLengthMins === "00" && timerLengthSecs === "00"){
      setTimerLengthMins(sessionLength.toString().padStart(2, '0'));
      setTimerLengthSecs("00");
      setSessionOrBreak('Session');
      audio.play();
    }
    
    if (activeCountdown && timerLengthSecs === "00"){
        interval = setInterval(() => {
        setTimerLengthSecs(x => x = 59);
        setTimerLengthMins(x => (x-1).toString().padStart(2, '0'))
      }, 1000)
    }
    
    if (activeCountdown && timerLengthSecs !== "00") {
      interval = setInterval(() => {
        setTimerLengthSecs(x => (x-1).toString().padStart(2, '0'));
      }, 1000)
    } 
    
    else if (!activeCountdown) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [activeCountdown, timerLengthMins, timerLengthSecs]);
        
  return (
  //this ternary changes the background colour by selecting the different container styles based on state  
    <div className="container" id={activeCountdown && sessionOrBreak === 'Session' ? "container2" :  activeCountdown && sessionOrBreak === 'Break' ? "container3" : "container1"}>
      <h1>FreeCodeCamp/Pomodoro</h1>
      <div id="break-session-container">
        <Break breakValue={breakLength} breakDown={handleBreakDown} breakUp={handleBreakUp}/>
        <Session sessionValue={sessionLength} sessionDown={handleSessionDown} sessionUp={handleSessionUp}/>
      </div>  
      <div id="timer-container">
        <Timer title={sessionOrBreak} timerValueMins={timerLengthMins} timerValueSecs={timerLengthSecs} startStop={activeCountdown ? handleStop : handleStart } startStopText={activeCountdown ? "Stop" : "Start"} reset={handleReset} />
      </div>
    </div>
  )  
}

export default App;
