(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(9),n(1)),s=function(e){var t=e.breakValue,n=e.breakDown,a=e.breakUp;return r.a.createElement("div",{id:"break-label"},r.a.createElement("h3",null,"Break"),r.a.createElement("h4",{id:"break-length"},t),r.a.createElement("button",{id:"break-decrement",onClick:n},"-"),r.a.createElement("button",{id:"break-increment",onClick:a},"+"))},l=function(e){var t=e.sessionValue,n=e.sessionDown,a=e.sessionUp;return r.a.createElement("div",{id:"session-label"},r.a.createElement("h3",null,"Session"),r.a.createElement("h4",{id:"session-length"},t),r.a.createElement("button",{id:"session-decrement",onClick:n},"-"),r.a.createElement("button",{id:"session-increment",onClick:a},"+"))},u=function(e){var t=e.title,n=e.timerValueMins,a=e.timerValueSecs,o=e.startStop,i=e.startStopText,c=e.reset;return r.a.createElement("div",{id:"timer-label"},r.a.createElement("h2",null,t),r.a.createElement("h4",{id:"time-left"},n,":",a),r.a.createElement("button",{id:"start_stop",onClick:o},i),r.a.createElement("button",{id:"reset",onClick:c},"Reset"),r.a.createElement("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}))},m=(n(10),function(){var e=Object(a.useState)(5),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(25),m=Object(c.a)(i,2),d=m[0],b=m[1],p=Object(a.useState)(25),S=Object(c.a)(p,2),f=S[0],E=S[1],k=Object(a.useState)("00"),h=Object(c.a)(k,2),v=h[0],g=h[1],j=Object(a.useState)(!1),w=Object(c.a)(j,2),O=w[0],C=w[1],B=Object(a.useState)("Session"),V=Object(c.a)(B,2),I=V[0],y=V[1],D=document.getElementById("beep");return Object(a.useEffect)((function(){var e=null;return O&&"Session"===I&&"00"===f&&"00"===v&&(E(n.toString().padStart(2,"0")),g("00"),y("Break"),D.play()),O&&"Break"===I&&"00"===f&&"00"===v&&(E(d.toString().padStart(2,"0")),g("00"),y("Session"),D.play()),O&&"00"===v&&(e=setInterval((function(){g((function(e){return 59})),E((function(e){return(e-1).toString().padStart(2,"0")}))}),1e3)),O&&"00"!==v?e=setInterval((function(){g((function(e){return(e-1).toString().padStart(2,"0")}))}),1e3):O||clearInterval(e),function(){return clearInterval(e)}}),[O,f,v,D,n,d,I]),r.a.createElement("div",{className:"container",id:O&&"Session"===I?"container2":O&&"Break"===I?"container3":"container1"},r.a.createElement("h1",null,"FreeCodeCamp/Pomodoro"),r.a.createElement("div",{id:"break-session-container"},r.a.createElement(s,{breakValue:n,breakDown:function(){O||n>1&&o(n-1)},breakUp:function(){O||n<60&&o(n+1)}}),r.a.createElement(l,{sessionValue:d,sessionDown:function(){O||d>1&&(b(d-1),E((d-1).toString().padStart(2,"0")),g("00"))},sessionUp:function(){O||d<60&&(b(d+1),E((d+1).toString().padStart(2,"0")),g("00"))}})),r.a.createElement("div",{id:"timer-container"},r.a.createElement(u,{title:I,timerValueMins:f,timerValueSecs:v,startStop:O?function(){C(!1)}:function(){C(!0)},startStopText:O?"Stop":"Start",reset:function(){C(!1),o(5),b(25),E(25),g("00"),y("Session"),D.pause(),D.currentTime=0}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.3cf89f18.chunk.js.map