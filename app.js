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

    speech.text = `I'm sorry, I didn't quite get that`; 

    if(message.includes('hello')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        console.log(finalText)
        speech.text = finalText; 
    } 

    speech.volume = 1; 
    speech.rate = .8; 
    speech.pitch = .3; 

    window.speechSynthesis.speak(speech); 
    }