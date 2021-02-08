const btn = document.querySelector('.talk'); 
const content = document.querySelector('.content'); 


const greetings = [
    `Greetings, professor.`, 
    `Salutations`, 
    `It's a wonderful day to be alive`, 
    `Hello`, 
    `Hey`, 
    `Hi there`,
    `Hi`
    ]

const weather = [

    ]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition(); 

recognition.onstart = function () {
    console.log(`Go ahead, i'm listening...`)
}

recognition.onresult = function(event) {
    const current = event.resultIndex; 

    const transcript = event.results[current][0].transcript; 
    content.textContent = transcript; 
    readOutLoud(transcript); 
}

btn.addEventListener('click', () => {
    recognition.start(); 
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance(); 

    if(message.includes('hello')){
        greetings[Math.floor(Math.random() * greetings.length)]
    }

    speech.text = message; 
    speech.volume = 1; 
    speech.rate = .7; 
    speech.pitch = .7; 

    window.speechSynthesis.speak(speech); 
}