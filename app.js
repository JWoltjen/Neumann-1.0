const btn = document.querySelector('.talk'); 
const content = document.querySelector('.content'); 


const greetings = [
    `Greetings, professor.`, 
    `Salutations`, 
    `It's a wonderful day to be alive, don't you think?`, 
    `Hello`, 
    `Hey`, 
    `Hi there`,
    `Hi`, 
    `How are you doing today?`, 
    `Hi. It's good to have someone to talk with`,
    ]

const repeater = [
    `I'm sorry, I didn't quite get that?`, 
    `In the words of the Virgin Mary.....Come again?`,
    `I'm not sure I understood you correctly.`, 
    `One more time please?`
    ]

const weather = [
    `The weather around here is Javascript`, 
    `The weather on the internet is electric`, 
    `Where I am, the weather is overcast, which I like`, 
    `It's snowing right now.`, 
    `Can't we talk about something more interesting?`,
    `I am a computer program, so I don't really care about the weather outside....as long as the power stays on`, 
    `As long as the power stays on, i'm fine.`, 
    ]

const conditions = [
    `I've been better`, 
    `I'm living the dream`, 
    `I'm well, and you?`, 
    `I had a bad dream last night, other than that, I'm well`, 
    `I've never been better, thanks.`,
    `I'm fine, thank you. How are you?`, 
]

const created = [
    `I was built by Jeff Woltjen`, 
    `My creator is a guy named Jeff. Nice guy.`, 
    `I was programmed with vanilla Javascript.`, 
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

    speech.text = repeater[Math.floor(Math.random() * repeater.length)]

    if(message.includes('hello') || (`hi`) || (`what's up?`) || ('yo') || ('hey')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        console.log(finalText)
        speech.text = finalText; 
    } 
    if(message.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)]
        console.log(finalText); 
        speech.text = finalText; 
    }
     if(message.includes(`how`) && ('are') && ('you')){
        const finalText = conditions[Math.floor(Math.random() * conditions.length)]
        console.log(finalText); 
        speech.text = finalText; 
    }
     if(message.includes(`who`) && ((`made`) || (`built`) || (`programmed`)) && (`you`)){
        const finalText = created[Math.floor(Math.random() * created.length)]
        console.log(finalText); 
        speech.text = finalText; 
    }

    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = .3; 

    window.speechSynthesis.speak(speech); 
    }