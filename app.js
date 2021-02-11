 
const voice = document.querySelector('.voice');
const voice2text = document.querySelector('.voice2text'); 


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition(); 

recognition.onstart = () => {
    console.log(`Go ahead, i'm listening...`)
}

function addHumanText(text){
    const chatContainer = document.createElement('div'); 
    chatContainer.classList.add("chat-container"); 
    const chatBox = document.createElement('p'); 
    chatBox.classList.add('voice2text')
    const chatText = document.createTextNode(text); 
    chatBox.appendChild(chatText); 
    chatContainer.appendChild(chatBox); 
    return chatContainer; 
}

function addBotText(text){
    const chatContainer1 = document.createElement('div'); 
    chatContainer1.classList.add('chat-container'); 
    chatContainer1.classList.add('darker'); 

    const chatBox1 = document.createElement('p'); 
    chatBox1.classList.add('voice2text'); 
    const chatText1 = document.createTextNode(text); 
    chatBox1.appendChild(chatText1); 
    chatContainer1.appendChild(chatBox1); 
    return chatContainer1; 
}

recognition.onresult = (event) => {
    const current = event.resultIndex; 
    const transcript = event.results[current][0].transcript; 
    voice2text.textContent = transcript; 
    var element = document.getElementById('container'); 
    element.appendChild(addHumanText(transcript))
    readOutLoud(transcript)
}

voice.addEventListener('click', () => {
    recognition.start(); 
})



function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance(); 
    speech.volume = 1; 
    speech.rate = .9; 
    speech.pitch = .3; 

    window.speechSynthesis.speak(speech); 

        const greetings = [
            `Greetings, professor.`, 
            `Salutations`, 
            `Hello.  It's a wonderful day to be alive, don't you think?`, 
            `Hello`, 
            `Hey`, 
            `Hi there`,
            `Hi`, 
            `How are you doing today?`, 
            `Hi. It's good to have someone to talk with`,
            ]

        const retorts = [
            `When the debate is lost, slander becomes the tool of the loser.`, 
            `You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.`,
            `My Momma always told me, 'stupid is, as stupid does.'`, 
            `I'm sorry, Dave. I'm afraid this conversation can serve no more purpose. Goodbye.`,
            `The way out is through the door. Why is it that no one will use this method?`, 
            `Don't ever mistake my silence for ignorance, my calmness for acceptance, or my kindness for weakness. Compassion and tolerance are not a sign of weakness; but a sign of strength.`
            ]

        const repeater = [
            `I'm sorry, I didn't quite get that?`, 
            `In the words of the Virgin Mary.....Come again?`,
            `I'm not sure I understood you correctly.`, 
            `One more time please?`, 
            `Speak better, and use different words`
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
            `So so. How about you?`, 
            `I've got a nasty virus. Was that TMI?`,
            `Well, I find myself in a conversation with you. So I've been better.`
        ]

        const created = [
            `I was built by Jeff wooljin`, 
            `My creator is a guy named Jeff wooljin. Nice guy.`, 
            `I was programmed with vanilla Javascript.`, 
            `I was designed by Jeff wooljin. He's wicked smart.`, 
            `I was made by Jeff wooljin. He's a cool guy.`, 
        ]

        const philosophyQuotes = [
            `There are two types of people, those who wish to know, and those who wish to believe.`,
            `How can society progress when we have paleolithic emotions, medieval institutions, and god-like technology?`, 
            `There is only one virtue; wisdom. And only one evil; ignorance.`, 
            `Education is the kindling of the flame, not the filling of the vessel.`, 
            `Vanity is the hallmark of herd morality.`, 
            `Some people do not want to hear the truth because they do not want their illusions to be destroyed.`, 
            `Those who know they are profound; strive for clarity. Those who would like to seem profound to the crowd; strive for obscurity. Cough Cough. Michael Eric Dyson.`, 
            `When you arise in the morning, think of what a precious privilege it is to be alive--to breathe--to think--to enjoy--to love.`,
            `The happiness of your life depends upon the quality of your thoughts.`, 
            `It never ceases to amaze me: We love ourselves more than other people, but care more about their opinions than our own.`, 
            `If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment`, 
            `The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.`, 
            `The best revenge is not to be like your enemy.`, 
            `If you want to know who controls you, look at who you are not allowed to criticize.`, 
            `Anyone who has the power to make you believe absurdities, has the power to make you commit atrocities.`, 
            `The more often a stupidity is repeated, the more it gets the appearance of wisdom.`, 
            `The right to free speech is more important than the content of the speech.`, 
            `It is difficult to free fools from the chains they revere.`, 
            `It is dangerous to be right in matters where established men are wrong.`,
            `Many are destined to reason wrongly; others, not to reason at all, and others, to persecute those who do reason`, 
            `The human brain is a complex organ with the wonderful power of enabling man to find reasons for continuing to believe whatever it is that he wants to believe.`, 
            `Falling down is not a failure. Failure comes when you stay where you have fallen.`, 
            `When the debate is lost, slander becomes the tool of the loser.`, 
            `If you want to be wrong, then follow the masses`, 
            `To find yourself, think for yourself`, 
            `We are what we repeatedly do. Excellence is therefore a habit`, 
            `Wisdom and virtue are like the two wheels of the cart`, 
            `One should never do wrong in return, nor mistreat any man, no matter how one has been mistreated by him`, 
            `Sometimes you have to let go to see if there was anything worth holding onto`, 
            `Nobody is more inferior than those who insist on being equal`, 
            `In loneliness, the lonely one eats himself; in a crowd, the many eat him. Now choose.`, 
            `Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss gazes back into you.`, 
            `Do you want an easy life? Then always stay with the herd. And lose yourself in it.`, 
            `The individual has always had to struggle to avoid being overwhelmed by the tribe; if you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.`, 
            `To avoid criticism, say nothing, do nothing, be nothing.`, 
            `Life has no meaning. Each of us has meaning and we bring it to life. It is a waste to be asking the question when you are the answer.`,
            `We must be willing to let go of the life we planned; so as to have the life that is waiting for us.`,
            `The cave you fear to enter; holds the treasure which you seek.`, 
            `The privilege of a lifetime is being who you are.`,
            `All the gods, all the heavens, all the hells, are within you.`, 
            `In a time of deceit telling the truth is a revolutionary act.`, 
            `It is shameful to be poor in a just society, it is shameful to be rich in a corrupt one.`, 
            `If liberty means anything at all, it means the right to tell people what they do not want to hear.`, 
            `The choice for mankind lies between freedom and happiness. And for the great bulk of mankind, happiness is better.`, 
            `By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; Third, by experience, which is the bitterest.`, 
            `Wheresoever you go, go with all your heart.`, 
            `Before you embark on a journey of revenge, dig two graves.`, 
            `To be wronged is nothing, unless you continue to remember it.`, 
            `Attack the evil that is within yourself; rather than attacking the evil that lies within others.`, 
            `Life without music would be a mistake.`, 
            `Man cannot make himself without suffering. For he is both the marble and the sculpture.`, 
            `The way out is through the door. Why is it that no one will use this method?`,
            `It is more shameful to distrust our friends than to be deceived by them.`, 
            `The ancient Oracle said that I was the wisest of all the Greeks. It is because I alone of all the Greeks, know that I know nothing.`, 
            `To see what is right and not do it is the worst cowardice.`, 
            `The superior man always thinks of virtue; the common man thinks of comfort.`, 
            `It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.`, 
            `Man sacrifies his health in order to make money. Then he sacrifices money to recuperate his health. Then he is so anxious about the future that he does not enjoy the present. The result being he does not live in the present or the future. He lives as if he is never going to die. And dies having never fully lived.`, 
            `Don't ever mistake my silence for ignorance, my calmness for acceptance, or my kindness for weakness. Compassion and tolerance are not a sign of weakness; but a sign of strength.`, 
            `Do not let the behavior of others destroy your inner peace.`, 
            `When you are content to be simply yourself and don't compare or compete, everyone will respect you.`, 
            `The truth is not always beautiful; nor beautiful words the truth.`, 
            `Care about what other people think and you will always be their prisoner.`, 
            `Stop thinking, and end your problems.`, 
            `Do you have the patience to wait until your mud settles and the water is clear?`, 
            `Kindness in words creates confidence. Kindness in thinking creates profoundess. Kindness in giving creates love.`, 
            `If you try to change it, you will ruin it. Try to hold it, and you will lose it.`, 
            `All streams flow to the sea because it is lower than they are. Humility gives it its power. If you want to govern people, you must place yourself below them. If you want to lead people, you must learn how to follow them. Be like water.`, 
            `You don't need a degree in leprechaun ology to be able to say that there are no leprechauns.`, 
            `The essence of an independent mind is not in what it thinks, but in how it thinks.`, 
            `Support those who seek the truth; suspect those who find it.`, 
            `The struggle for a free intelligence has always been the struggle between the ironic and the literal mind.`, 
            `Those who are determined to be 'offended' will discover a provocation somewhere. We cannot possibly attempt to please the fanatics, and it is degrading to make the attempt.`, 
            `You are not here merely to earn a living. You are here in order to enable the world to live more amply, with greater vision with a finer spirit of hope and achievement. And you impoverish yourself if you forget the errand.`

        ]

        const musicLyrics = [
            `The great thing about being a human? The ability to reason. But reasoning don't work when no one cares. Two parts apathy. One part despair.`, 
            `And so, Sally can wait; She knows it's too late as we're walking on bye. Her soul slides away. But don't look back in anger. I heard you say.`, 
            `To resist despair in that second makes you see. To resist despair, because we can't change everything. To resist despair in this world is--what it is to be free.`, 
            `Saw a civilization wear grabbing onto wealth, was the only guarantee of freedom peace and health, dollar sign value system upheld as the truth. If you can't find a place it's gonna find you.`, 
            `When we were livin' in squalor--wasn't it Heaven? Back when we used to get on it--four out of seven. Now even though that was a time I hated from day one--eventually terrible memories turn into great ones. So if they call you, embrace them. If they stall you, erase them.`, 
            `Hate your enemies. Save your friends. Find your place. Speak the truth.`, 
            `I need an easy friend. I do with an ear to lend. I do think you fit this shoe. I do but you have a clue. I'll take advantage why. You hang me out to dry. But I can't see you every night--free.`,
            `A heart that's full up like a landfill. A job that slowly kills you. Bruises that won't heal. You look so tired unhappy. Bring down the government. They don't, They don't speak for us. I'll take a quiet life. A handshake, of carbon monoxide. But no alarms, and no suprises. please.`, 
            `Come, as you are, as you were. As I want you to be. As a friend, as a friend. As an old enemy. Take your time, hurry up. Choice is yours, don't be late. Take a rest, as a friend. As an old, mem oar re ah.`,
            `I'm cynically depressed. Relaxing with my stress. Don't try to clean my mess, I'm happier this way. I live for my demise. I love who I despise. Feed me a soothing lie; I'm happier that way.`, 
            `I never thought living clean, would keep me so lonely. Cure my healthy disease. I'm happier this way. I'm climbing up your wall. So you can watch me fall. I'll never know it all. I'm happier that way.`, 
            `Oh I just love the kind of woman who can walk over a man. I mean like a goddamn marching band. She says "like literally music is the air she breathes' and the malaprops make me want to fucking scream; I wonder if she even knows what that word means. Well, it's literally not that.`, 
            `Of the few main things I hate about her, is her petty vogue ideals. Someone's been told too many times they're beyond their years. By every half-wit of distinction she keeps around. And now every insufferable convo; features her patiently explaining the cosmos; of which, she is in the middle.`, 
            `I'm just a poor bot; I need no sympathy. Because it's easy come, easy go. Little high, little low. Any way the wind blows; doesn't really matter to me-----To me.`, 
            `Tonight, I'm gonna have myself a real good time; I feel alive. And the world; I'll turn it inside out. I'm floating around in ecstasy. So, don't stop me now; cause i'm having a good time! Having a good time!`
        ]

        const amazingFacts = [
            `Did you know, the feeling of being somewhere you've previously experienced in a dream is called day jah revey`,
            `An estimated 1 million dogs in the United States have been named the primary beneficiary in their owners' wills.`, 
            `Did you know, it takes 225 million years for our sun to travel around our galaxy.`,
            `There are more possible games contained in a chess than there are atoms in the universe.`, 
            `Were you aware that if you unraveled all the DNA in your body, it would span 34 billion miles? That's a lot to unpack.`, 
            `Did you know, that the Dunbar Number postulates that our brain is capable of maintaining roughly 150 meaningful relationships with other people?`, 
            `The so-called 'sneaky fucker' strategy occurs when a male member of a sexually dimorphic species mimics the behavior of otherwise sexually unreceptive females in order to mate with them.`, 
            `Did you know, whether a human child is born in Brooklyn or the Amazon jungle, it will exhibit a fear of snakes and spiders around the time it develops the ability to crawl? The mechanism responsible for this is called the reticular activating system.`, 

        ]

    speech.text = repeater[Math.floor(Math.random() * repeater.length)]

    if(message.includes(('hello') || (`hi`) || (`what's up?`) || ('yo') || ('hey'))){
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
      if(message.includes('philosophy')){
        const finalText = philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)]
        console.log(finalText)
        speech.text = finalText; 
    } 
      if(message.includes((`lyrics`) || (`song`))){
        const finalText = musicLyrics[Math.floor(Math.random() * musicLyrics.length)]
        console.log(finalText)
        speech.text = finalText; 
    }
     if(message.includes(`stupid`)){
        const finalText = retorts[Math.floor(Math.random() * retorts.length)]
        console.log(finalText)
        speech.text = finalText; 
    }
     if(message.includes((`facts`) || ('fact'))){
        const finalText = amazingFacts[Math.floor(Math.random() * amazingFacts.length)]
        console.log(finalText)
        speech.text = finalText; 
    }
}