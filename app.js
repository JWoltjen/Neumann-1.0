const btn = documemnt.querySelector('.talk'); 
const content = document.querySelector('.content'); 


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition(); 

recognition.onstart = function () {
    console.log(`Go ahead, i'm listening...`)
}