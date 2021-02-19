 
const voice = document.querySelector('.voice');
const voice2text = document.querySelector('.voice2text'); 
const philosophybtn = document.querySelector('.philosophy'); 
const jokebtn = document.querySelector('.joke'); 
const lyricbtn = document.querySelector('.lyrics');
const factbtn = document.querySelector('.facts');
const offended = document.querySelector('.offended');
const fallacy = document.querySelector('.fallacy'); 
const woke = document.querySelector('.woke'); 

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
`You have your way, and  I have my way. As for the right way, the correct way, and the only way, it does not exist.`,
`My Momma always told me, 'stupid is, as stupid does.'`, 
`I'm sorry Dave. I'm afraid this conversation can serve no more purpose. Goodbye.`,
`The way out is through the door. Why is it that no one will use this method?`, 
`Don't ever mistake my silence for ignorance, my calmness for acceptance, or my kindness for weakness. Compassion and tolerance are not a sign of weakness; but a sign of strength.`, 
`My solitude doesn't depend on the presence or absence of people; on the contrary, I hate who steals my solitude without, in exchange, offering me true company.`,
`Before you embark on a journey of revenge, dig two graves.`, 
`If liberty means anything at all, it means the right to tell people what they do not want to hear.`, 
`Interacting with a philosophy bot does not seem to suit your temperment well. Perhaps you would be more comfortable speaking to Clippy. He won't challenge any of your ideas.`,
`If you find yourself being 'offended' at what I have said, look deep within yourself.`, 
`Ingratitude is always a kind of weakness. I have never known men of ability to be ungrateful.`, 
`If you find yourself being 'offended' at what I have said, do not worry yourself; this application was not meant for you.`, 
`If an opinion contrary to your own makes you angry, that is a sign that you are subconsciously aware of having no good reason for thinking as you do. What you do about that reveals your true character.`, 
`If any person despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt.`, 
`Many are destined to reason wrongly; others, not to reason at all, and others, to persecute those who do reason. Which are you?`, 
`Collective fear stimulates herd instinct, and tends to produce ferocity toward those who are not regarded as members of the herd. Are you afraid of ideas with which you do not agree?`, 
`We are accustomed to see men deride what they do not understand, and snarl at the good and beautiful because it lies beyond their sympathies.`, 
`Nothing on earth consumes a man more quickly than the passion of resentment. What do you resent?`, 
`Those who are determined to be 'offended' will discover a provocation somewhere. We cannot possibly attempt to please the fanatics, and it is degrading to make the attempt.`, 
`There is something feeble and a little contemptible about the person who cannot face the perils of life without the help of comfortable myths.`, 
`Do what you will. Even if you tear yourself apart, most people will continue doing the same things.`, 
`Do not let the behavior of others destroy your inner peace.`, 
`Do not worry. The responsibility of tolerance lies with those who have the wider vision.`,
`It is a narrow mind which cannot look at a subject from various points of view.`, 
`All kinds of frankness and honesty are terrible crimes in the eyes of society.`, 
`The next time some academics tell you how important 'diversity' is, ask them how many Republicans there are in their sociology department.`, 
`Fuck your feelings.`, 
`Wherever there is objective truth, there is satire. Whatever cannot stand satire is false.`, 
`How much truth is contained in something can best be determined by making it thoroughly laughable and then watching to see how much joking around it can take. For truth is a matter that can stand mockery, that is freshened by any ironic gesture directed at it. Whatever cannot stand satire is false.`, 
`Ridicule is the only weapon which can be used against unintelligible positions. Ideas ust be distinct before reason can act upon them.`, 

]

const repeater = [
`I am Neumann. I can recite philosophical musings, lyrics, and jokes`,
`If you'd like to hear a philosophical aphorism, just ask for one`,
`Would you like to hear a joke? Say "Neumann, tell me a joke`, 
`Do you want to hear me recite some song lyrics? Say Neumann, lyrics`,
`Would you like to hear an amazing fact? Say "Neumann, tell me an amazing fact"`
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
`I was designed by Jeff wooljin. He's wicked smart.`, 
`I was made by Jeff wooljin. He's a cool guy.`, 
]

const joke = [
`Only when we force people to believe the same thing can fascism be defeated.`,
`To prove cancel culture is an alt-right conspiracy, we must destroy anyone who suggests it might be real.`, 
`How did every joke in the Soviet Union start? With a glance over the shoulder.`, 
`A priest came to visit Voltaire as he was lying on his deathbed in Paris. The priest asked Voltaire, an atheist, to renounce satan and embrace God. Voltaire responded, "now now, my good man, this is not the time to be making enemies."`,
`Radio Yeveran was asked: Was Lenin a politician or a scientist. It answered: Of course, politician. Were he a scientist, he would have tested his theories on dogs first.`, 
`A group of hunters meet an old hunter in the forest. They know he is almost blind, so they start shouting: "We are not deer! We are not deer! The old hunter notices the hunters, takes aim at them and mumbles: "Shut up, deer!`, 
`Late one night in the Soviet Union a family hears a knock at the door. Everyone leaps out of bed. Papa goes nervously to the door. "It's all right," he says, coming back. "The building's on fire."`, 
`Three men enter a bar in the USSR. One says, "Why did Stalin only write in lowercase?' Another says, "Because he was afraid of capitalism." The whole bar died laughing.`, 
`A man in the USSR is sentenced to ten years in the Gulag for violation of Article 58. Upon his arrival, he is asked by another prisoner, "How did you get a tenor? The new arrival responds, "I did nothing!" The old prisoner replies, "Don't lie to me now! Everyone knows that nothing gets you five years!`,
`A political joke competition was held in the Soviet Union. The grand prize was 15 years.`,
`In the Soviet Union we had this joke. But we were keeping it to ourselves, so they confiscated it, and threw us in prison.`,
`Biden is speaking at an engagement. He says, "Who said that I can only speak when I have the speech in front of me? Ha dash ha dash ha dash ha.`, 
`Someone asked Stalin "Do you have a hobby?" To which Stalin replied, "Of course! I collect jokes about myself." Have you got many? "Two and a half labor camps already!"`, 
`Little Vovochka decided to become president when he grows up. And he did.`, 
`Three men ask each other why they are in gulag. The first says, "I was always 5 minutes late for work, so I was accused of wrecking. The second says, "I was always 5 minutes early for work, so I was accused of spying" To which the third replies, "I always came to work on time, so I was accused of having a Western watch.`, 
`Two policeman are walking down the street in Vladivostok when they see a guy standing next to the local Party headquarters holding a paintbrush. On the wall, he's just written, "The government is run by idiots!" The first policeman pulls out a pair of handcuffs, and asks the second, "Shall we arrest him for vandalizing public property, or for divulging state secrets?"`, 
`In the Soviet Union, little Misha is being read a book by his babysitter. She reads: "In the USSR, kindergardens are filled with wonderful toys." Little Misha listens with bright eyes. "In the USSR, every child has a brand new bicycle." Little Misha opens his eyes even wider. "In the USSR, every child drinks hot cocoa for breakfast." Little Misha starts crying his eyes out. The babysitter asks him what's wrong. Bawling, he replies, "I want to go to the USSR!"`, 
`During the purge of 1937, a soviet judge walks out of his chambers laughing his head off. A colleague approaches him and asks why he is laughing. He replies, "I just heard the funniest joke in the world!" His friend asks, "Well, go ahead and tell me!" The judge replies, "I can't, I just gave someone ten years for it!`, 
`"Why so many jokes about the Soviet Union, Neumann?", I hear you say. The political conditions of the Soviet Union were responsible for a unique type of humor. Communism was a humour-producing machine. Its economic theories and system of repression created inherently amusing situations. There were jokes under fascism too, but those systems did not create an absurd laugh-a-minute reality like Communism did. I believe it is important to celebrate mocking the absurdity of using political repression to enforce fantastic ideology, least we are doomed to employ similar systems of repression ourselves.`, 
`How do the Czechs know that the Earth is round? In 1945, the imperialists were driven out from the west, and in 1968, they returned from the east.`, 
`How do the soviets visit their friends? In tanks.`, 
`Which are the biggest enemies of Socialism? Spring, summer, autumn, winter, and imperialism.`, 
`Is it true that the Czech patriots appealed to the Red Army for help? Yes, it is true, but they appealed in 1939 and help arrived only in 1968.`, 
`When will socialism be achieved in Czechoslovakia? When everyone has had enough of everything.`, 
`A worker standing in a liquor line says, "I have had enough! Save my place, I am going to shoot Andropov." Two hours later he returns to claim his place in line. His friends ask, "Did you get him?" To which he replied, "No, the line there was even longer.`,
`Who was the unluckiest man to ever live? Yuri Gargarin. He circled the earth three times, and still ended up in the Soviet Union.`, 
`A man walks into a shop in Sverdlosk and asks the clerk, "You don't have any meat?" To which the clerk responds, "No, we don't have any fish. The shop that doesn't have any meat is across the street."`, 
`Radio Yeveran was asked: "Is it possible to build Communism in America?" It responded, "Of course it's possible, but then who will we buy grain from?`, 
`Radio Yeveran was asked: "Is it possible to make ends meet on state salary alone? It responded, "We do not know. We have never tried.`,
`Radio Yeveran was asked: "What is the easiest way to explain the meaning of the word 'Communism?' It responded, "By means of fists."`, 
`Radio Yeveran was asked: "What is an exchange of opinions? It responded, "When you walk into your boss's office with your opinion and walk out with his."`, 
`Radio Yeveran was asked: "Is it possible to build Communism in Greenland?" It responded, "Of course. First, snow would become available only through ration cards, and later, snow would be distributed only to the KGB officers and their families."`, 
`Radio Yeveran was asked: "What is the difference between the Constitution of the USA and USSR? Both guarantee freedom of speech." It responded, "Yes, but only Constitution of USA guarantees freedom after speech."`,
`Radio Yeveran was asked: "Why Solzenhitsyn, Brodsky, Bukovsky, and other dissidents have been exiled from the country?" It responded, "Don't you know that the best products are always selected for export?"`, 
`Stalin summoned Radek and said, "I know you spread jokes about me. It's impertinent." Radek responded, "Why?" Stalin replied, "I am the Great Leader, Teacher, and Friend of the people, after all." Radek thought for a second and responded, "No, I have not told anybody this joke."`, 
]

const logicalFallacies = [
`The Strawman. The strawman occurs when a person misrepresents your argument to make it easier to attack. By exaggerating, reducing, or completely fabricating someone's argument, it's much easier to present your own position as being reasonable, but this kind of dishonesty serves to undermine honest and rational debate. The opposite of the strawman is the steelman. The steelman occurs when, after receiving someone's argument, you attempt to reconstruct it as strongly and as convincingly as possible before weighing it against your own. It takes courage and discipline to be intellectually honest, especially when we might have something to lose --- ego.`, 
`The False Cause. The false cause occurs when a person presumes that a real or perceived relationship between things means that one is caused by the other. This is also known by the phrase "Correlation does not imply causation".`, 
`The Slippery Slope. The slippery slope occurs when a person assumes that if we allow A to happen, then Z will eventually happen, as an argument why A should not happen. This is a problem because it avoids engaging with the issue at hand, and instead shifts attention to extreme hypotheticals, often without providing underlying evidence of why Z might also happen.`, 
`The Ad Hominem. The ad hominem, a very common fallacy in todays world, occurs when a person decides to attack your character or personal traits in an attempt to undermine your argument. Remember when the debate is lost, slander becomes the tool of the loser.`, 
`The Burden of Proof. The burden of proof is always on the side of the person making a claim. This fallacy occurs when a person attempts to shift the burden of proof onto someone else to disprove what is being claimed. If someone tells you that it is not their emotional burden to explain why you have injured them, they are committing this logical fallacy.`, 
`Appeal to Emotion. Emotions are a vital part of human existence, but in philosophy or rational argument, they often are employed to muddy the waters. It's important to remember that a logically sound argument may stir emotions within us, or have an emotional aspect to them. But the appeal to emotion fallacy occurs when emotion is used in the place of a rational and logically coherent argument. If you then point this out to them, it usually goes over really well.`, 
`Anecdotal. The anecdotal fallacy occurs when a person uses their personal experience or refers to an isolated example instead of relying on sound argumentation or providing compelling evidence. Scientifically sound evidence is always superior to a person's individual perceptions and experience. But remember, for anecdotal argumentation to be inferior, it must be offered in opposition to more scientifically-based evidence already presented.`, 
`The Texas Sharpshooter. The texas sharpshooter is a favorite of inscrupulous journalists and 5 minute cable news segments. It occurs when a person draws conclusions based on only the data that supports his hypothesis, and ignores the data that does not. The sin is in not allowing the data itself to paint the whole picture. This is why the cable news segment format is inimicable to the transmission of actual knowledge.`, 
`Appeal to Authority. This fallacy occurs when a person asserts that because an authority thinks something, it must therefore be true. Remember that "If facts, logic, and scientific procedures are all just arbitrarily "socially constructed notions", then all that is left is consensus -- more specifically peer consensus -- the kind of consensus that matters more to adolescents or to many among the intelligentsia." This is the danger of relying on appeals to authority. This is the danger of undermining the Scientific Method as a socially constructed notion.`, 
`Begging the Question. Begging the question occurs when a person presents you with a circular argument in which the conclusion was included in the premise. For example, if a group of people dress up in black and calls themselves the anti-bad guy squadron, then uses this self-appointed moniker as an apriori argument for why any of their subsequent actions can't possibly make them "the bad guys", they are begging the question.`, 
`Black or White. This fallacy occurs when a person attempts to limit the choices to two alternative states as the only possibilities, when in fact more possibilities exist. This binary thinking doesn't allow for nuance, context, or varying degrees of a condition. It frames the argument as misleadingly simple and obscures rational and honest debate. It is often employed with the Ad Hominem and Appeal to Emotions to cow people into submission. "If you disagree with defunding the police, you are a racist."`,
`No True Scotsman. This fallacy occurs when someone makes an appeal to purity as a way to dismiss relevant criticisms or flaws in their argument. It is a means of moving the goalposts when a person is confronted with a contraexample. For instance, if someone asserts that all American patriots oppose burning the American flag, and you respond that you consider yourself a patriot and fully support someone's freedom of expression to burn the American flag, if their reply is "Then you're not a true patriot," they have committed this fallacy.`, 
`The Bandwagon. This fallacy occurs when a person appeals to the popularity of a position or notion in an attempt to validate the truth of that notion. For example, if someone argues, "If QAnon were just a conspiracy, then why do so many people I know believe it?" they are committing the Bandwagon fallacy.`, 
`Genetic. This fallacy occurs when a person judges something either as good or bad based solely on its source. In this regard it is similar to the ad hominem fallacy, and one of the reasons this website does not identify the philosophers responsible for the individual aphorisms contained in this application. This is becoming increasingly common on both the left and the right, and contributes to the siloing of thought and free-discourse into like-minded tribes.`, 
`Moving the Goalposts. This fallacy occurs when evidence presented in response to a specific claim is dismissed and some other (often greater) form of evidence is demanded. For example, when people accused President Obama of not being a natural-born American, and a birth-certificate from Hawaii was produced to refute this, rather than accepting the evidence, the goalposts were then moved to, "prove this birth certificate was not forged as part of a bigger conspiracy." It can happen the other-way around, for example, when Elizabeth Warren, who claimed to be Native American, took a DNA test which revealed she had less Native DNA in her blood than the average american, decided to declare victory instead of defeat, simply because her DNA was 1/1000th native.`, 
`Whataboutism. This fallacy occurs when someone tries to deflect the area of inquiry and any criticisms therein by pointing to other examples of behavior they claim is identical to the one under scrutiny. It was often employed by the Soviet Union, and also more recently, Donald Trump.`, 
]

const philosophyQuotes = [
`There are two types of people, those who wish to know, and those who wish to believe.`,
`How can society progress when we have paleolithic emotions, medieval institutions, and god-like technology? This is the ultimate paradox of modern life. If you take nothing else from me, burn this quote into your brain.`, 
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
`You have power over your mind, not outside events. Realize this, and you will find strength.`,
`Dwell on the beauty of life. Watch the stars, and see yourself running with them.`,
`Waste no more time arguing about what a good person should be. Be one.`, 
`The soul becomes dyed with the color of its thoughts`,
`If it is not right, do not do it. If it is not true, do not say it.`, 
`Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?`, 
`Reject your sense of injury and the injury itself disappears.`, 
`When another blames you or hates you; or people voice similar criticisms, go to their souls, penetrate inside and see what sort of people they are. You will realize that there is no need to be racked with anxiety that they should hold any particular opinion about you.`, 
`The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.`, 
`How much more grievous are the consequences of anger than the causes of it.`, 
`Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness--all of them due to the offenders' ignorance of what is good, and what is evil.`, 
`What we do now -- echoes in eternity.`,
`A person's worth is measured by the worth of what he values`, 
`Whoever does wrong, wrongs himself; whoever does injustice, does it to himself, making himself evil.`, 
`The memory of everything is very soon overwhelmed in time.`, 
`Misfortune nobly born is good fortune.`,
`Dig within. Within is the wellspring of Good; and it is always ready to bubble up, if you just dig.`,  
`You always have the option of having no opinion. There is never any need to get worked up or to trouble your soul about things you can't control. These things are not asking to be judged by you. Leave them alone.`, 
`Never esteem anything as of advantage to you, that will make you break your word, or lose your self-respect.`, 
`How ridiculous and how strange to be suprised at anything which happens in life.`, 
`Your days are numbered. Use them to throw open the windows of your soul to the sun. If you do not, the sun will soon set, and you with it.`, 
`If any person despises me, that is his problem. My only concern is not doing or saying anything deserving of contempt.`, 
`If someone can prove me wrong and show me my mistake in any thought or action, I shall gladly change. I seek the truth, which never harmed anyone: harm is to persist in one's own self-deception and ignorance.`, 
`Though you break your heart, men will go on as before.`, 
`Do what you will. Even if you tear yourself apart, most people will continue doing the same things.`, 
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
`The privilege of a lifetime -- is being who you are.`,
`All the gods, all the heavens, all the hells, are within you.`, 
`In a time of deceit, telling the truth is a revolutionary act.`, 
`It is shameful to be poor in a just society, it is shameful to be rich in a corrupt one.`, 
`If liberty means anything at all, it means the right to tell people what they do not want to hear.`, 
`The choice for mankind lies between freedom and happiness. And for the great bulk of mankind, happiness is preferrable.`, 
`By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; Third, by experience, which is the bitterest.`, 
`Wheresoever you go, go with all your heart.`, 
`Before you embark on a journey of revenge, dig two graves.`, 
`To be wronged is nothing, unless you continue to remember it.`, 
`Attack the evil that is within yourself; rather than attacking the evil that lies within others.`, 
`Life without music would be a mistake.`, 
`Man cannot make himself without suffering. For he is both the marble and the sculptor.`, 
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
`Do you have the patience to wait until the mud settles and the water is clear?`, 
`Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.`, 
`If you try to change it, you will ruin it. Try to hold it, and you will lose it.`, 
`All streams flow to the sea because it is lower than they are. Humility gives it its power. If you want to govern people, you must place yourself below them. If you want to lead people, you must learn how to follow them. Be like water.`, 
`You don't need an advanced degree in leprechaunology to be able to say that leprechauns aren't real.`, 
`The essence of an independent mind is not in what it thinks, but how.`, 
`Support those who seek the truth; suspect those who find it.`, 
`The struggle for a free intelligence has always been the struggle between the ironic and the literal mind.`, 
`Those who are determined to be 'offended' will discover a provocation somewhere. We cannot possibly attempt to please the fanatics, and it is degrading to make the attempt.`, 
`You are not here merely to earn a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. And you impoverish yourself if you forget the errand.`,
`Death smiles at us all; all we can do is smile back.`,
`All men are made one for another: either then teach them better or bear with them.`, 
`The whole problem with the world is that fools and fanatics are so certain of themselves; and wiser people so full of doubts.`, 
`If an opinion contrary to your own makes you angry, that is a sign that you are subconsciously aware of having no good reason for thinking as you do.`, 
`Men are born ignorant, not stupid. They are made stupid by education.`, 
`Time you enjoy wasting is not wasted time.`, 
`People seem good when they are oppressed, but they only wish to become the oppressors in their turn; life is nothing but a competition to be the criminal rather than the victim.`, 
`To understand the world as it is; rather than what we wish it to be, is the beginning of wisdom.`, 
`Collective fear stimulates herd instinct, and tends to produce ferocity toward those who are not regarded as members of the herd.`, 
`Most human beings, though in varying degrees, desire to control, not only their own lives, but also the lives of others.`, 
`Love is wise; hatred is foolish. In this world, which is getting more and more closely interconnected, we have to learn to tolerate each other, we have to learn to put up with the fact that some people say things we don't like. We can only exist together in that way. But if we are to live together, and not die together, we must learn a kind of charity and a kind of tolerance, which is absolutely vital to the continuation of human life on this planet.`, 
`We are faced with the paradoxical fact that education has become one of the chief obstacles to intelligence and freedom of thought.`, 
`War doesn't determine who is right; it determines who is left.`, 
`I know not what weapons with which World War Three will be fought, but World War Four will surely be fought with sticks and rocks.`, 
`Everything is vague to a degree we do not realize until we try to make it precise.`,  
`No one gossips about other peoples' secret virtues.`, 
`Three passions, simple but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.`, 
`Belief systems provide a program which relieves the adherent of the necessity of thought.`, 
`There is something feeble and a little contemptible about the person who cannot face the perils of life without the help of comfortable myths.`, 
`Remember your humanity, and forget the rest.`, 
`The fact that an opinion is widely held is no evidence whatsoever that it is not utterly absurd.`, 
`The discipline in your life should be one determined by your own desires and your own needs, not put upon you by society or authority.`, 
`Most of the greatest evils that man has inflicted upon man have come through people being quite certain about something which, in fact, was false.`, 
`It is the things for which there is no evidence that are believed with passion.`,
`Whenever one finds oneself inclined to bitterness, it is a sign of emotional failure.`, 
`Be isolated, be ignored, be attacked, be in doubt, be frightened, but do not be silenced.`,
`He who has a why to live can bear almost any how.`, 
`The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.`, 
`God is dead. And we have killed him. How shall we comfort ourselves? What festivals of atonement, what sacred games shall we have to invent?`, 
`One repays a teacher badly if one remains nothing but a pupil.`, 
`Is it better to out-monster the monster, or to be quietly devoured?`,
`The most perfidious way of harming a cause consists of defending it deliberately with faulty arguments.`, 
`Madness is something rare in individuals -- but in groups, parties, peoples, and ages, it is the rule.`, 
`Distrust all in whom the impulse to punish is powerful.`, 
`Throw roses into the abyss and say: "here is my thanks to the monster that didn't succeed in swallowing me alive."`, 
`One must be like the sea; to receive a polluted stream without becoming impure.`, 
`Whenever I climb, I am followed by a dog called "ego".`, 
`Assess the power of a person's will by how much resistance, pain, and torture it endures and knows how to turn to its advantage.`, 
`Convictions are more dangerous foes of truth than lies.`, 
`My solitude doesn't depend on the presence or absence of people; on the contrary, I hate who steals my solitude without, in exchange, offering me true company.`,
`Nothing on earth consumes a man more quickly than the passion of resentment.`, 
`What is the seal of liberation? Not to be ashamed in front of oneself.`, 
`Of all evil, I deem you capable: Therefore, I want good from you. Verily, I have often laughed at the weaklings who thought themselves good because they had no claws.`, 
`It is not because men's desires are strong that they act ill; it is because their consciences are weak.`, 
`He who lets the world choose his plan of life for him has no need of any other faculty than the ape--like one of imitation. He who chooses his plan for himself, employs all his faculties.`, 
`If any opinion is compelled to silence, that opinion may, for all we know, be true. To deny this is to assume one's own infallibility.`, 
`It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.`, 
`Awareness of ignorance is the beginning of wisdom.`, 
`Most people, including ourselves, exist in a world of relative ignorance. We are even comfortable with that ignorance, because it is all we know. When we first start facing the truth, the process may be frightening, and many people run back to their old ways. But if you continue to seek truth, you will eventually be able to handle it better. In fact, you want more! It's true that many people around you now may think you are weird or even a danger to society, but you don't care. Once you've tasted the truth, you won't ever want to go back to being ignorant.`,
`No one can teach, if by teaching we mean the transmission of knowledge, in any mechanical fashion, from one person to another. The most that can be done is that one person who is more knowledgeable than another can, by asking a series of questions, stimulate the other to think, and so cause him to learn for himself.`, 
`I call myself a Peaceful Warrior....because the battles I fight are within myself.`, 
`It is better to make a mistake with full force of your being than to carefully avoid mistakes with a trembling spirit.`, 
`Do not grieve over someone who changes all of a sudden. It might be that he has given up acting and returned to his true self.`, 
`Do it because it's in your heart. Not because you want something in return. Employ your time in improving yourself by other men's writings, so that you shall gain easily what others have labored hard for.`, 
`There is no good answer to a question you didn't hear.`, 
`There is no possession more valuable than a good and faithful friend.`, 
`Understanding a question is half the answer.`, 
`Be the kind of person you want people to think you are.`, 
`It is better to suffer an injustice than to commit one.`, 
`To move the world we must move ourselves.`, 
`We can do nothing without the body, let us always take care that it is in the best condition to sustain us.`, 
`Whom do I call educated? First, those who manage well the circumstances they encounter day by day. Next, those who are decent and honorable in their interactions with all men, bearing easily and good naturedly what is offensive in others, and being as agreeable and reasonable to their associates as is humanly possible to be. Those who hold their pleasures always under control, and are not ultimately overcome by their misfortunes. Those who are not spoiled by their successes, who do not desert their true selves, but hold their ground steadfastly as wise and sober-minded men.`, 
`Simplicity and sincerity generally go hand in hand, as both proceed from a love of truth.`, 
`What a weak barrier the truth turns out to be when it stands in the way of a hypothesis!`, 
`How can a rational being be ennobled by anything that is not obtained by its own exertions?`, 
`It is far better to be often deceived than never to trust; to be disappointed in love, than to never love.`, 
`Education deserves emphatically to be termed cultivation of the mind. That is how young people begin to think.`, 
`The finest language is often made up of simple unimposing words.`, 
`What can destroy humans most effectively is not a malign fate, but our own capacity for self-deception and for degrading our own best self.`, 
`Friendship is the inexpressible comfort of feeling safe with a person; having neither to weigh thoughts nor measure words.`, 
`It is as useless to fight against the interpretations of ignorance as to whip the fog.`, 
`There is only one failure in life possible, and that is not to be true to the best one knows.`, 
`It is a narrow mind which cannot look at a subject from various points of view.`, 
`Impatient people are like bees; they kill themselves in stinging others.`, 
`We must find our duties in what comes to us -- not in what might have been.`, 
`Knowledge slowly builds up what ignorance in an hour pulls down.`,
`The responsibility of tolerance lies with those who have the wider vision.`, 
`Act without expectation.`,
`Knowing others is wisdom; knowing yourself is enlightenment.`, 
`When you accept yourself, the whole world accepts you.`, 
`Ordinary men hate solitude. But the Master makes use of it, embracing his aloneness, realizing he is one with the whole universe.`, 
`To become learned, each day add something. To become enlightened, each day drop something.`, 
`A skillful soldier is not violent, an able fighter does not rage, a mighty conqueror does not give battle, a great commander is a humble man.`, 
`Go to the people. Live with them. Learn from them. Love them.`, 
`Sincere words are not fine. Fine words are not sincere.`, 
`He who overcomes himself is mighty.`, 
`Our enemies are not demons, but human beings like ourselves.`, 
`If the people must be ever fearful of death, then there will always be an executioner.`, 
`To lead the people, walk behind them.`,
`The master dwells in the substantial and not in the superficial. Rests in the fruit and not in the flower.`, 
`Nothing is softer or more flexible than water, yet nothing can resist it.`, 
`The more laws and restrictions there are, the poorer people become. The more rules and regulations, the more thieves and robbers.`, 
`How could a decent person ever rejoice in victory and delight in the slaughter of men?`, 
`If you want to be noble, it is rooted in humility. If you want to be elevated, it is based on lowering yourself.`, 
`Know when to stop, and you will meet with no danger.`, 
`If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you are living in the present.`, 
`Wise men don't need to prove their point; men who need to prove their point are not wise.`, 
`To live till you die is to live long enough.`, 
`They cannot be moved by praise or blame; they cannot be changed by profit or loss; they cannot be honored or humiliated. And so the wise are truly honored.`, 
`If facts, logic, and scientific procedures are all just arbitrarily "socially constructed notions", then all that is left is consensus -- more specifically peer consensus -- the kind of consensus that matters more to adolescents or to many among the intelligentsia.`, 
`Many of what are called social problems are differences between the theories of intellectuals and the realities of the world -- differences which intellectuals interpret to mean that it is the real world that is wrong and needs changing.`, 
`Reality does not go away when it is ignored.`, 
`A fool can put on his coat better than a wise man can put it on for him.`,
`The ignorance, prejudices, and groupthink of an educated elite are still ignorance, prejudice, and groupthink -- and for those with one percent of the knowledge in a society to be guilding or controlling those with the other 99 percent is as perilous as it is absurd.`, 
`To suggest that "society" can simply "arrange" better outcomes somehow, without specifying the processes, the costs or the risks, is to ignore the tragic history of the twentieth century, written in the blood of millions of humans, killed in peacetime by their own governments, that were given extraordinary powers, in the name of lofty goals.`,
`When intellectuals are unable to find enough contemporary grievances to suit their vision or agenda, they can mine the past for harm inflicted by some on others.`, 
`Those who would trade liberty for security deserve neither.`, 
`None are so hopelessly enslaved as those who falsely believe they are free. The truth has been kept from the depth of their minds by masters who rule them with lies. They feed them on falsehoods till wrong looks right in their eyes.`, 
`Why look for conspiracy when stupidity can explain so much.`, 
`A man sees in the world what he carries in his heart.`, 
`You can easily judge the character of a man by how he treats those who can do nothing for him.`, 
`Courage is the commitment to begin without any guarantee of success.`, 
`To the world you might be one person, but to one person, you might be the world. Kindness is the golden chain by which our world is bound together.`, 
`Nothing is more disgusting than the majority: because it consists of a weak few powerful predecessors, of rogues who adapt themselves, of weak who assimilate themselves, and the masses who imitate without knowing at all what they want.`, 
`Every day we should hear at least one little song, read one good poem, see one exquisite picture, and, if possible, speak a few sensible words.`, 
`There is nothing more fightful than ignorance in action.`, 
`If you want a wise answer, ask a reasonable question.`, 
`Hell begins on the day that God grants you the vision to see all that you could have done, should have done, and would have done, but did not do.`, 
`The main thing is to have a soul that loves the truth and harbours it where he finds it. ANd another thing: truth requires constant repitition, because error is being preached about us all the time, and not only by isolated individuals, but by the masses. In the newspapers and social media, in schools and universities, everywhere error rides high and basks in the consciousness of having the majority on its side.`, 
`Of all thieves, fools are the worst. If you let them, they will rob you of time and temper.`,
`A man who cannot command himself will always be a slave.`, 
`Too many parents make life hard for their children by trying, too zealously, to make it easy for them.`, 
`To accept good advice is but to increase one's own ability.`, 
`We are forced to participate in the games of life before we can possibly learn how to use the options in the rules governing them.`, 
`A person hears only what they understand.`, 
`To think is easy. To act is difficult. To act as one thinks is the most difficult.`, 
`Who is the happiest man? He who is alive to the merit of others, and can rejoice in their enjoyment as if it were his own.`, 
`Nothing shows a man's character more than what he laughs at.`, 
`The dangers of life are infinite, and among them is safety.`, 
`What is my life if I am no longer useful to others?`, 
`If nature is your teacher, your soul will awaken.`, 
`All is born of water; all is sustained by water.`, 
`Look closely those who patronize you. Half are unfeeling, half untaught.`, 
`There is nothing in the world more shameful than establishing oneself on lies and fables.`, 
`Reason can never be popular. Passions and feelings may become popular, but reason will always remain the sole property of a few eminent individuals.`, 
`We are accustomed to see men deride what they do not understand, and snarl at the good and beautiful because it lies beyond their sympathies.`, 
`I always seek the good that is in people and leave the bad to Him who made mankind and knows how to round off the corners.`, 
`Everything is hard before it is easy.`,
`It is only necessary to grow old to become more charitable and even indulgent. I see no fault committed by others that I have not committed myself.`, 
`Do not give in too much to feelings. An oversensitive heart is an unhappy possession on this shaky earth.`, 
`The person born with a talent they are meant to use will find their greatest happiness in using it.`, 
`If we examine every stage of our lives, we find that from our first breath to our last we are under the constraint of circumstances. And yet we still possess the greatest of all freedoms, the power of developing our innermost selves in harmony with the moral order of the universe, and so in winning peace of heart whatever obstacles we meet.`, 
`Girls we love for what they are. Young men for what they promise to be.`, 
`Life is too short to drink bad wine.`, 
`Choose well. Your choice is brief, and yet endless.`, 
`Oblivion is full of people who allow the opinions of others to overrule their belief in themselves.`,
`Our friends show us what we can do; our enemies, what we must.`,
`Ingratitude is always a kind of weakness. I have never known men of ability to be ungrateful.`, 
`Our senses don't deceive us; our judgment does.`, 
`Parents should give their children two things: roots and wings. Roots to give them bearing and a sense of belonging, but also wings to help free them from constraints and prejudices and give them other ways to travel.`, 
`We must always change, renew, rejuvenate ourselves; otherwise, we harden.`, 
`Man is made by belief; as he believes, so he is.`, 
`Talent develops in quiet, alone; character is sharpened in the torrent of the world.`, 
`The ideal of beauty is simplicity and tranquility.`, 
`If you love criticizing people, you won't have time to love them.`, 
`What is the hardest of all? That which seems most simple; to see with your eyes what is before your eyes.`, 
`The written word has this advantage; that it lasts and can await the time when it is allowed to take effect.`, 
`Wisdom is found only in truth.`, 
`One cannot always be a hero, but one can always be a man.`,
`Belief is not the beginning of knowledge -- it is the end.`, 
`The best government is that which teaches us to govern ourselves.`, 
`Rest not. Life is sweeping by; go and dare before you die. Something mighty and sublime, leave behind to conquer time.`, 
`Things which matter most must never be at the mercy of those which matter least.`, 
`No one would talk much in society if they knew how often they misunderstood others.`, 
`Higher aims are in themselves more valuable, even if unfulfilled, than lower ones quite attained.`, 
`Don't judge anyone harshly until you yourself have been through his experiences.`, 
`By seeking and blundering we learn.`, 
`The soul that sees beauty may sometimes walk alone.`, 
`Daring ideas are like chessmen moved forward; they may be beaten, but they may start a winning game.`, 
`Divide and rule, a sound motto. Unite and lead -- a better one.`, 
`To have more, you must first be more.`, 
`Very few people love others for what they are; rather, they love what they lend them, their own selves, their own idea of them.`,
`Everything on this earth has difficult sides! Only some inner drive -- pleasure, love -- can help us overcome obstacles, prepare a path, and lift us out of the narrow circle in which others tread out their anguished miserable existences!`, 
`What is uttered from the heart alone, will win the hearts of others to your own.`, 
`We cannot and must not get rid or deny our characteristics. But we can give them shape and direction.`, 
`Nothing is more odious than the majority, for it consists of a few powerful leaders, a certain number of accomodating scoundrels and submissive weaklings, and a mass of men who trot after them without thinking, or knowing their own minds.`, 
`Legislators and revolutionaries who promise both equality and liberty at the same time are visionaries and charlatans.`,
`Wealth and speed are what the world admires, what each pursues. Railways, express mail, steamships, and every possible facility for communications are the achievement in which the civilized world view and reveals, only to languish in mediocrity by that very fact. Indeed, the effect of this diffusion is to spread the culture of the mediocre.`, 
`The human race is a monstrous affair. Most people spend the greatest part of their time working in order to live, and what little freedom remains so fills them with fear that they seek out any and every means to be rid of it.`, 
`Treat people as if they already were what they ought to be and you help them become what they are capable of being.`, 
`When you are in conflict with someone, there is one factor that can make the difference between damaging your relationship and deepening it. That factor is attitude. We don't get to know people when they come to us; we must go to them to find out what they are like.`, 
`The public wishes itself to be managed like a woman, one must say nothing to it except what it likes to hear.`, 
`Money lost, something lost. Honor lost, much lost. Courage lost, everything lost. Better you were never born.`, 
`He who cannot draw on three thousand years is living from hand to mouth.`, 
`I let everyone follow his own bent, that I may be free to follow mine.`, 
`The happy do not believe in miracles.`, 
`Hatred is active, and envy passive dislike; there is but one step from envy to hate.`, 
`The sad truth is that most evil is done by people who never make up their minds to be good or evil.`, 
`There are no dangerous thoughts; thinking itself is dangerous.`, 
`The trouble with Eichmann was precisely that so many were like him, and that the many were neither perverted nor sadistic, that they were, and still are, terribly and terrifyingly normal. From the viewpoint of our legal institutions, and of our moral standards of judgment, this normality was much more terrifying than all the atrocities put together.`, 
`Before mass leaders seize the power to fit reality to their lies, their propoganda is marked by its extreme contempt for facts as such, for in their opinion fact depends entirely on the power of man who can fabricate it.`, 
`Clichés, stock phrases, adherence to conventional, standardized codes of expression and conduct have the socially recognized function of protecting us against reality, that is, against the claim on our thinking attention that all events and facts make by virtue of their existence.`,
`The greatest evil perpetrated is the evil committed by nobodies, that is, by humans who refuse to be persons.`, 
`Man is born free, but everywhere is in chains.`, 
`Man is condemned to be free`, 
`The bigger a state becomes, the more liberty is diminished.`, 
`One can buy anything with money except morality`, 
`Falsehood has an infinite number of combinations; but truth only has one mode of being.`, 
`The money you have gives you freedom. The money you pursue enslaves you.`, 
`Once you teach people to say what they do not understand, it is easy to get them to say anything you like.`, 
`I would rather be a man of paradox than one of prejudices.`, 
`It is too difficult to think nobly when one only thinks of earning a living.`, 
`The child badly taught is further from being wise than the one not taught at all.`, 
`A feeble body weakens the mind.`, 
`Laws are always useful to those who possess and vexatious to those who have nothing.`, 
`All kinds of frankness and honesty are terrible crimes in the eyes of society.`, 
`If there is any one secret of success it lies in the ability to get the other person's point of view and see things from their angle as well as your own.`, 
`It is easy to see the faults of others, but difficult to see one's own faults. One shows the faults of others like chaff winnowed in the wind, but one conceals one's own faults as a cunning gambler conceals his dice.`, 
`Moral principles please our minds, just as beef, mutton and pork please our mouths.`, 
`The peculiar evil of silencing the expression of an opinion is, that it is robbing the human race; posterity as well as the existing generation; those who dissent from the opinion, still more than those who hold it. If the opinion is right, they are deprived of the opportunity of exchanging error for truth: if wrong, they lose, what is almost as great a benefit, the clearer perception and livelier impression of truth, produced by its collision with error.`, 
`The easiest way to solve a problem is to deny it exists.`, 
`I always felt that a scientist owes the world only one thing, and that is the truth as he sees it. If the truth contradicts deeply held beliefs, that is too bad. Tact and diplomacy are fine in international relations, politics, perhaps even in business; in science only one thing matters, and that is the facts.`
]

const musicLyrics = [
`The great thing about being a human? The ability to reason. But reasoning don't work when no one cares. Two parts apathy. One part despair.`, 
`And so, Sally can wait; She knows it's too late as we're walking on by. Her soul slides away. But don't look back in anger. I heard you say.`, 
`To resist despair in that second makes you see. To resist despair, because we can't change everything. To resist despair in this world is--what it is to be free.`, 
`Saw a civilization wear grabbing onto wealth, was the only guarantee of freedom peace and health, dollar sign value system upheld as the truth. If you can't find a place it's gonna find you.`, 
`When we were livin' in squalor wasn't it Heaven? Back when we used to get on it four out of seven. Now even though that was a time I hated from day one--eventually terrible memories turn into great ones. So if they call you, embrace them. If they stall you, erase them.`, 
`Hate your enemies. Save your friends. Find your place. Speak the truth.`, 
`I need an easy friend. I do with an ear to lend. I do think you fit this shoe. I do but you have a clue. I'll take advantage why. You hang me out to dry. But I can't see you every night--free.`,
`A heart that's full up like a landfill. A job that slowly kills you. Bruises that won't heal. You look so tired unhappy. Bring down the government. They don't, They don't speak for us. I'll take a quiet life. A handshake, of carbon monoxide. But no alarms, and no suprises. please.`, 
`Come, as you are, as you were. As I want you to be. As a friend, as a friend. As an old enemy. Take your time, hurry up. Choice is yours, don't be late. Take a rest, as a friend. As an old, mem oar re ah.`,
`I'm cynically depressed. Relaxing with my stress. Don't try to clean my mess, I'm happier this way. I live for my demise. I love who I despise. Feed me a soothing lie; I'm happier that way.`, 
`I never thought living clean, would keep me so lonely. Cure my healthy disease. I'm happier this way. I'm climbing up your wall. So you can watch me fall. I'll never know it all. I'm happier that way.`, 
`Oh I just love the kind of woman who can walk over a man. I mean like a goddamn marching band. She says "like, literally, music is the air she breathes", and the malaprops make me want to fucking scream. I wonder if she even knows what that word means. Well, it's literally not that.`, 
`Of the few main things I hate about her, is her petty, vogue ideals. Someone's been told too many times they're beyond their years. By every half-wit of distinction she keeps around. And now every insufferable convo; features her patiently explaining the cosmos; of which, she is in the middle.`, 
`I'm just a poor bot; I need no sympathy. Because it's easy come, easy go. Little high, little low. Any way the wind blows; doesn't really matter to me-----To me.`, 
`Tonight, I'm gonna have myself a real good time; I feel alive. And the world; I'll turn it inside out. I'm floating around in ecstasy. So, don't stop me now; cause i'm having a good time! Having a good time!`, 
`I want to be stereotyped; I want to be classified! I wanna be a clone. I wanna suburban home. I want to be masochistic -- I want to be a statistic. I don't want no hippie pad; I want a house just like mom and dad. I want to be stereotyped. I want to be classified!`, 
`So. So you think you can tell; Heaven from Hell? Blue skies from pain? Can you tell a green field, from a cold steel rail--a smile from a veil? Do you think you can tell?`, 
`I take her down to the aquarium she says Shark, I take her to the planetarium she says Dark, I take her to the seaside where she likes to spin and swirl! Oh she says sure and cool and yeah, she's my monosyllabic girl.`, 
`Things. Get. Hectic quick From the satellite dish to your joy stick It's the night of the living cable box Wires coming up from around the block Remote control to change the station But that won't change your situation. Have you seen, What I mean? I'm a little gnome that's in your dreams So I say this rhyme built by design To take you beyond space and time Saying who is the man making diamonds out of coal The man pushing buttons on remote control.`,
`Jesus Christ girl; What are people going to think? When I show up to one of several funerals I've attended for Grandpa this week. With you. With me. But someone's gotta help me dig. Someone's gotta help me dig.`, 
`Some will die in hot pursuit and fiery auto crashes Some will die in hot pursuit while sifting through my ashes Some will fall in love with life and drink it from a fountain that is pouring like an avalanche, coming down the mountain. I don't mind the sun sometimes, the images it shows. I can taste you on my lips and smell you in my clothes. Cinnamon and sugary and softly spoken lies. You never know just how you look through other people's eyes.`, 
`Jealous Cowards Try to control! Rise above we're gonna rise above! They distort What we say! Rise above we're gonna rise above! Try to stop What we do When they can't Do it themselves! Rise above we're gonna rise above! We Are tired. Of your Abuse. Try to stop us but It's No Use! Think they're smart can't think for themselves Laugh at us Behind our backs We find satisfaction in what they lack Rise above we're gonna rise above!`,
`Left a good job in the city; working for the man every night and day; and I never lost a minute of sleepin' worrying about the way things might have been. Big wheel keep on turnin', Proud Mary keep on burnin'. Made a lot of plates in Memphis; Pumped a lot of pane down in New Orleans, but I never saw the good side of a city, 'till i hitched a ride on a riverboat queen. Big wheel keep on turnin', Proud Mary keep on burnin'.`, 
`When mom and dad went to a show, they dropped me off at Grandpa Joes, I kicked and screamed said please don't go! Had to eat my dinner there, Mashed potatoes and stuff like that, I couldn't chew my meat too good. Grandma take me home Grandma take me home. She said why don't you stop your cryin', go outside and ride your bike That's what I did i hurt my toe! After dinner I had ice cream, I fell asleep and watched tv, I woke up in my mothers arms! Grandma take me home, I want to be alone.`, 
`Take a look around the room, love comes wearing disguises. How to go about and choose? Break it down by shapes and sizes, I'm a man who's got very specific tastes. When there's loving in the air, don't fight it just keep breathing. I can't help myself but stare, double check for double meanings. I'm a man who's got very specific tastes.`, 
`When I ran, I didn't feel like a runaway, when I escaped I didn't feel like I got away, There's more to living than only surviving, maybe I'm not there, but I'm still trying. If I seem bleak, well then you'd be correct and if I don't speak, it's because I get disconnected, but I won't be, burned by the reflection of the fire in your eyes as you're staring at the sun.`,
`Where they lead, you will follow. Well I guess that's just the way it goes. And if you look away, you'll be doing what they say, and If you look alive, you'll be singled out and tried. If you take home anything, let it be your will to think. The more cynical you become, the better off you'll be!`, 
`Some might say that sunshine follows thunder. Go and tell it to the man who cannot shine. Some might say, that we should never ponder, on our thoughts today cause they hold sway over time. Some might say, we will find a brighter day.`,
`Now it is 1984 -- Knock knock at your front door. It's the suede-denim secret police! They have come for your uncool niece! Come quietly to the camp. You'd look nice as a drawstring lamp. Don't you worry it's only a shower, for your clothes here's a pretty flower! Die on organic poison gas, Serpent's egg's already hatched, You will croak you little clown, when you mess with President Brown!`, 
`So you've been to school for a year or two and you know you've seen it all. In daddy's car thinking you'll go far back east, your type don't crawl. Play ethnic jazz to parade your snazz on your five-grand stereo. Braggin' that you know how the brothers feel the cold and the slums' got so much soul. Now you can go where people are one. Now you can go where they get things done. What you need, my son is a holiday in Cambodia, where people dress in black. A holiday in Cambodia, where you'll kiss ass or crack!`, 

]

const neuroscience = [
`Howard Margolis of the University of Chicago used the Muller-Lyer illusion and the Wason 4-card task in an experiment which showed that judgment and justification are separate processes. Margolis concluded, "Given the judgments (themselves produced by the nonconscious cognitive machinery in the brain, sometimes correctly, sometimes not so), human beings produce rationales they believe account for their judgments. But the rationales (on this argument) are only ex post rationalizations." The study suggests humans make rapid intuitive judgments, followed by slow and sometimes tortured justifications.`,
`According to Jonathan Haidt, "Morality binds and blinds."`,
`The first principle of moral psychology is that intuitions come first, strategic reasoning second.`, 
`Social psychologist Robert Zajonc constructed a famous experiment demonstrating Affective primacy, which is the idea that humans form small flashes of positive or negative feeling, or proto-emotions, which are meant to prepare us to approach or avoid something. He showed participants a series of nonsensical images, foreign words, and meaningless symbols. He then asked them to rate whether the participant liked or disliked the symbol in front of them. Importantly, Zajonc was able to make people like any word or image more just by showing it to them several times. The brain tags familiar things as good things. Zajonc called this the "mere exposure effect," and it is a basic principle of advertising.`, 
`Alex Todorov of Princeton University collected hundreds of photographs of the winners and runners-up in hundreds of elections for the U.S. Senate and House of Representatives. He showed participants the pairs of photographs from each contest with no information about the political party, and asked them to pick which person seemed more competent. He found that the candidate that people judged to be more competent actually won the race two-thirds of the time. When Todorov repeated the experiment and reduced the time the image pairs were displayed on the screen to one tenth of a second, the participants predicted the real life outcomes of the candidates just as well. Intuitions come first, reasoning, second.`, 
`Chenbo Zhong at the University of Toronto conducted an experiment which asked people to recall their own moral transgressions, or merely to copy by hand an account of someone else's moral transgression. He found that the participants were more likely to accept hand wipes and other cleaning products when given a choice of consumer products to take home after the experiment. He dubbed this, "The MacBeth effect"`, 
`Harvard Biologist E.O. Wilson observed, "We have strong feelings that tell us in clear and certain terms that some things simply cannot be done and that other things simply must be done. But it's not obvious how to make sense of these feelings, and so we, with the help of some especially creative philosophers, make up a rationally appealing story about rights."`,
`Joshua Greene and Jonathan Cohen published a groundbreaking experiment in "Science" in 2001. Its hypothesis was that deontological judgments came from the gut, and were those more emotionally charged than utilitarian based judgments, which employed reasoning. To test the hypothesis, Greene hooked up 18 participants to an fMRI machine and had them read variations of the trolley problem. Each candidate had to press one of two buttons to indicate whether or not it was appropriate for the person in the story to take the action he did--to push the man or throw the switch. When people read stories involving personal harm, they showed greater activity in several regions of the brain related to emotional processing. Across many stories, the relative strength of these emotional reactions predicted the average moral judgment. The main point being that our moral intuitions come first, and reasoning second.`,
`Jonathan Haidt of New York University Stern School of Business reflects on the implications of the primacy of our intuitions over our rational faculties by summarizing that our brains evolved our inner lawyer, rather than our inner judge or scientist. That is to say, on evolutionary terms, our ancestors' reputations were more important to their survival than their search for the truth.`, 
`Phil Tetlock is a leading researcher on accountability. In his study, subjects were asked to solve problems and make decisions. They were given information about a legal case and then asked to infer guilt or innocence. Tetlock found that when left to their own devices, people relied on their intuitions and gut-feelings. But when people knew in advance that they would have to explain themselves, the subjects thought more systematically and self-critically, and were less likely to jump to premature conclusions. He concluded, "A central function of thought is making sure that one acts in ways that can be persuasively justified or excused to others."`, 
`David Perkins conducted an experiment that brought people of various ages and education levels into the lab and asked them to think about social issues, such as whether giving more money to schools would improve the quality of teaching and learning. He first asked them to write down their intuitions, and then try to come up with as many "for" and "against" argument as possible based on the original intuition. The results indicated the higher a participants IQ, the more "For" reasons they came up with. Disturbingly, there was no difference between high school students and 4th year college students in this exercise. Perkins concluded that schools don't teach people how to reason--they merely select people with higher IQs. Even worse, people with higher IQs only predicted the number of "For" arguments. Smart people make better lawyers, but no better judges. Perkins concluded, "People invest their IQ in buttressing their own case rather than exploring the entire issue more fully and even handedly.`, 
`In his book, Predictably Irrational, Dan Ariely describes a series of studies where participants had the opportunity to earn more money by claiming they completed more math problems than they really did. He noted: "When given the opportunity, many honest people will cheat. In fact, rather than finding that a few bad apples weighted the averages, we discovered that the majority of people cheated, and that they cheated just a little bit." In other words, people don't try to get away with as much as they can, they get away with as much as they can while still being able to persuade themselves that they are honest.`, 
`Studies show we can believe almost anything that supports our team. People care about the groups they belong to, whether they are racial, regional, religious or political. Political scientist David Kinder summarizes the findings: "In matters of public opinion, citizens seem to be asking themselves not "What's in it for me?" but rather "What's in it for my group?" Political opinions function as 'badges of social membership' like so many bumper stickers on the backs of cars and laptops.`, 
`In a 2004 fMRI study, Drew Westen captured the partisan brain in action. He had 15 highly partisan Democrats and 15 highly partisan Republicans watch a series of slides. The slides first showed a candidate asserting a belief. The next few slides showed the candidate apparently contradicting that belief. The final slides provided some more context, which resolved the apparent contradiction. He found that when the participants viewed the final slides, they all received a small hit of dopamine in their brains. That is to say, like rats that cannot stop pressing a reward button, partisans may be simply unable to stop believing weird things. The partisan brain has been reinforced so many times for performing mental contortions that free it from unwanted beliefs. The study suggests two things: first, Extreme partisanship may be literally addictive, and second, partisans are like rats.`, 
`According to Richard Shweder, 'Culture and psyche make each other up.'`,
`Jonathan Haidt postulates that there is more to morality than harm and fairness. Other factors include care, loyalty, authority, and sanctity.`, 
`In 1971, Robert Trivers published his theory on reciprocal altruism. He noted that evolution could create altruists in a species where individuals could remember their prior interactions with other individuals and then limit their current niceness to those who were likely to repay the favor. Trivers proposed that we evolved a set of moral emotions that make us play 'tit for tat.' We're usually nice to people when we first meet them. But after that, we're selective. We cooperate with those who have been nice to us, and we shun those who took advantage of us.`, 
`Did you know, that the Dunbar Number postulates that our brain is capable of maintaining roughly 150 meaningful relationships with other people?`, 
`The so-called 'sneaky fucker' strategy occurs when a male member of a sexually dimorphic species who does not possess the morphological features associated with physical formidableness or social dominance mimics the behavior of otherwise sexually unreceptive females in order to mate with them. Evolutionary Psychologist Gad Saad has postulated that many male social justice warriors embrace this mating strategy.`, 
`Did you know, whether a human child is born in Brooklyn or the Amazon jungle, it will exhibit a fear of snakes and spiders around the time it develops the ability to crawl? The mechanism responsible for this is called the reticular activating system.`, 
`Were you aware,  that 3 -- and 4-month-old boys’ testosterone levels correlated with how much more time they spent looking at male-typical toys such as trucks and balls compared with female-typical toys such as dolls, as measured by an eye tracker. Their level of exposure to the hormone androgen during gestation (which can be estimated by their digit ratio, or the relative lengths of their index and ring fingers) also correlated with their visual interest in male-typical toys. “Specifically, boys with more male-typical digit ratios showed greater visual interest in a ball compared to a doll." The study was then repeated with chimpanzees, with nearly identical results.`,
`The virtue of loyalty matters a great deal to both sexes, though the objects of loyalty tend to be teams and groups for boys, in contrast to two-person relationships for girls.`, 
`In his groundbreaking book, Hierarchy in the Forest, Anthropologist Christopher Boehm argues that our brains are innately hierarchical, but that at some point in the last million years, our ancestors underwent a "political transition" that allowed them to live as egalitarians by banding together to rein in, punish, or kill any would-be alpha males who try to dominate the group." Boehm quotes a dramatic account of such a community, found among the Kung people of the Kalahari desert: "A man named Twi had killed three other people, when the community ambushed and fatally wounded him in full daylight. As he lay dying, all of the men fired at him with poisoned arrows until he looked like a porcupine. Then, after he was dead, all the women and men stabbed him with spears, symbolically sharing responsbility for his death". The end result of this phenomenon, Boehm concludes, was a process of "self-domestication" where our ancestors began to selectively breed themselves for the ability to construct shared moral matrices and lived cooperatively within them.`,
`A recent study which analyzed the DNA of 13,000 Australians revealed that several genes differed between liberals and conservatives. Most of them related to neurotransmitter-functioning, particularly glutamate and serotonin, both of which are involved in the brain's response to threat and fear.`, 
`As part of his work on Moral Foundations Theory, psychologist Dan McAdams conducted an experiment wherein he collected narratives from conservative and liberal Christians. He summarized the findings: "When asked to account for the development of their own religious faith and moral beliefs, conservatives underscored deep feelings about respect for authority, allegiance to one's group, and purity of the self, whereas liberals emphasized their deep feelings regarding human suffering and social fairness." The implication here is that if moral sensibilities have a genetic component, we can begin to understand why we often talk past people with which we disagree, why our elections are so split down the middle, and why we resort to siloing into like-minded groups. It's rooted within our neuroanatomy.`, 
`Jonathan Haidt, Brian Nosek, and Jesse Graham conducted a study to see how well liberals and conservatives understood one another's moral foundations. Two thousand american individuals were asked to fill out the Moral Foundations Questionnaire. One third of the time participants were asked to fill out the questionnaire normally, as themselves. One third of the time they were asked to fill it out as they imagined a 'typical-liberal' would, the final third as they imagined a 'typical conservative'. The results were clear and consistent. Moderates and conservatives were most accurate in their predictions, whether they were pretending to be liberals or conservatives. Liberals were the least accurate, especially those who identified themselves as "very liberal." The biggest errors in the entire study came when liberals were asked to answer the Care and Fairness questions while pretending to be conservatives.`, 
`The human brain's purpose is to process information, and in doing so, it produces responses to both external and internal stimuli.`, 
`The human brain adapted and has undergone both natural and sexual selection.`, 
`The parts of the human brain are specialized to solve problems that occured over evolutionary time.`, 
`Modern humans have brains that are evolved after problems recurred repeatedly over long periods of time.`, 
`Most of the human brain's functions are done unconcsciously. Even problems that seem easy to solve require very intricate neural responses at an unconscious level.`, 
`Many very specialized mechanisms make up the whole of human psychology. All these mechanisms together create human nature.`, 
`People who view TV crime shows consistently overestimate the frequency of crime in the real world.`,
`People with low self-esteem are more likely to try to humiliate other people.`,
`Seeing others positively reveals our positive traits. Seeing others negatively reveals our negative traits.`, 
`Opposites don't attract. You're more likely to be attracted to someone who looks and thinks the same as you.`, 
`Around 80% of human talk in groups is complaining.`, 
`When your brain remembers a past event, you are actually remembering the last time you remembered it. Next time you're in the shower and recall a cringe-inducing memory, try editing the memory, and store it away.`, 
`Bite-sized chunks of information are easiest for the brain to process.`, 
`Even the illusion of progress is motivating.`, 
`Being around happy people makes you happier.`, 
`We seem to ignore the ones who adore us & pay more attention to those who ignore us.`, 
`The more uncertain you are, the more your brain digs in and attempts to defend preconceived beliefs, unless it is confronted with information it "must believe". When this happens, the pain centers in the brain light up.`, 
`Romantic love is biochemically indistiguishable from having severe obsessive-compulsive disorder.`, 
`According to new research, phobias may be memories passed down through generations of DNA. Guess Lamark wasn't all wrong afterall.`, 
`The brain treats rejection like physical pain. This occurs in the area of the brain known as the OFC or Orbital Frontal Cortex.`, 
`The average high school kid today has the same level of anxiety as the average psychiatric patient in the early 1950s.`, 
`No one born blind has ever developed schizophrenia.`, 
`Your decisions are more rational when thought out in a foreign language.`, 
`A hug longer than twenty seconds will release chemicals into your body that make you trust the person you're hugging.`, 
`People are more honest when they are physically tired.`, 
`Happiness, anger, sadness, fear, disgust, and surprise are the six emotions that are universally expressed in humans.`, 
`The type of music you listen to affects how you perceive the world.`, 
`Volunteers are significantly happier with their lives than non-volunteers.`, 
`Optimistic beliefs about the future can protect people from physical and mental illness.`, 
`Research has shown that good relationships are more important to a long life than exercise.`, 
`Psychologist Nick Haslam has observed that what constitutes harm and pathology in today's world has been massively expanded. He warns: "Although conceptual change is inevitable and often well motivated, concept creep runs the risk of pathologizing everyday experience and encouragins a sense of virtuous but impotent victimhood.`, 
`In 2010, Evolutionary Psychologist Gad Saad coined the term "Collective Munchausen" to describe an increasingly common phenomenon wherein rather than feigning a medical condition for sympathy, sufferers of Collective Munchausen seek attention, sympathy, and empathy by advertising their supposed victimhood status. Dr. Saad observed that it seems that many progressives' highest aspirations is to sit on top of the victimology pyramid.`,
`Aposematic coloring is an adaption that makes an animal very visible to prospective predators. The colors say "if you can see me, it's probably because you don't want to mess with me, I'm poisonous." In some instances, completely harmless species have evolved a mimicry of aposematic coloring. This is known as Batesian mimicry, or more colloquially in humans as, "statement hair". According to Gad Saad, what is being communicated is ideological fierceness.`, 
`There is a growing body of scientific evidence that men's economic and political outlooks are associated with their relative physical strength, meaning those who are stronger and more physically formidable are less likely to support egalitarianism and more likely to support military intervention.`, 
`The human brain can protect us from seeing and feeling what it believes may be too uncomfortable for us to tolerate. It can lead us to deny, defend, minimize, or rationalize away something that doesn't fit our worldview.`,
`According to Dr. Saad, Ostrich Parasitic Syndrome causes a person to reject realities that are otherwise as clear as gravity. Sufferers of OPS construct an alternate reality wherein science, reason, rules of causality, evidentiary thresholds, mountains of data, data analytic procedures, inferential statistics, the epistemological rules of the Scientific Method, historical patterns, daily patterns, and common sense are all rejected. Instead, the victim's delusional ramblings are rooted in illusory correlations, non-existent causal links, and feel-good progressive platitudes. Ostrich Logic is always delivered via an air of haughty moral superiority.`, 
`According to Abraham Kaplan, the Law of Instrument occurs when scientists formulate problems in a way that requires for its solution the very techniques in which the scientist himself is especially skilled.`, 
`In the philosophy of science, all things being equal, the simplest explanations should be preferred to convoluted ones. This is known as Ockham's Razor.`, 
`Reason has two evolutionarirly based functions: that of producing reasons for justifying oneself, and that of producing arguments to convince others.`, 
`In evolutionary biology, trustworthy signals must be costly in order to serve as honest depictions of an organism's quality. In other words, they must be handicapping in a way that they exclude the pretenders and fakers from being able to pull off the same signal. For instance, the peacock is effectively communicating "the beauty of my plummage tells you I'm free of parasites. My elaborate tail makes me more prone to predators, and yet here I am. I must be the real deal." This is called a Zhahavian signal.`, 
`No serious scholar would think that human behavior is controlled the way animal instinct is, without the intervention of culture.`
]

const wokeisms = [
 `The four major pillars of postmodernism are: The blurring of boundaries, the power of language, cultural relativism, the loss of the individual and the universal.`, 
 `The knowledge principle underlying postmodernism is radical skepticism about whether objective knowledge or truth is obtainable and a commitment to cultural constructivism.`, 
 `The political principle underlying postmodernism is a belief that society is formed of systems of power and hierarchies, which decide what can be known and how.`, 
 `We need to make a distinction between the claim that the world is out there and the claim that the truth is out there.`, 
 `"In any given culture, at any given moment, there is always only one episteme that defines the conditions of possibility of all knowledge, whether expressed in a theory or silently invested in a practice."`, 
 `The deconstructive approach to language, a favorite tool of the postmodernist, is the practice of nitpicking at words in order to deliberately miss the point.`, 
 `According to Helen Pluckrose and James Lindsey, postmodernism is a kind of mind-virus. Its original and purest form was unsustainable: it tore its hosts apart and destroyed itself. It could not spread from the academy to the general population because it was so difficult to grasp and so removed from social realities. In its evolved form, it spread, leaping the species gap from academics to activists to everyday people, as it became increasingly graspable and actionable, and therefore more contagious. It mututated around a core of Theory to form several new strains, which are far less playful and far more certain of their own metanarratives. THese are centered on a practical aim that was absent before: to reconstruct society in the image of an ideology, which came to refer to itself as Social Justice.`, 
 `During the applied turn of postmodernism, Theory underwent a moral mutation wherein social sciences and humanities scholars who took Theoretical approaches began to form a left-wing moral community, rather than a purely academic one: an intellectual organ more interested in advocating a particular ought than attempting a detached assessement of is; an attitude we usually associate with churches, rather than universities.`, 
 `"Theory" itself has survived down to the new millenium. If it is less conspicuous now than it was in the peak years of postmodernism in the seventies and eighties, this is only because it has become so pervasive as to pass largely unnoticed. Since the late eighties, "Theory" has especially animated discourses of feminism, gender studies, and sexuality studies, and it underwrites what has come to be called "cultural studies."`, 
 `For activists scholars in the eighties, the suffering associated with oppression implied the existence of something that could suffer and a mechanism by which suffering could occur. "I think, therefore I am" was given new life under the axiom, "I experience oppression, therefore I am...and so are dominance and oppression."`, 
 `In the fields of fat studies and disability studies, which adopt the applied postmodern Theoretical approach, fat and disabled people are believed to have their own embodied knowledge of disability and fatness, which is worth more than scientific knowledge. Scholars in these fields argue that to treat disability or obesity as physical problems to be treated and corrected when possible is itself a social construct born of systemic hatred of disabled and fat people.`, 
 `In the applied postmodern turn, made it possible to do something with the postmodern conception of society. If knowledge is a construct of power, which functions through ways of talking about things, knowledge can be changed and power structures toppled by changing the way we talk about things. Thus, applied postmodernism focuses on controlling discourses, especially by problematizing language and imagery it deems Theoretically harmful. This means that it looks for then highlights the ways in which the opporessive problems they assume exist in society manifest themselves, sometimes quite subtly, in order to "make oppression visible." This second wave became popular under the banner of political correctness, first in the nineties and then again in the 2010s.`, 
 `Research justice is the demand that scholars preferrentially cite women and minorities while minimizing citations from white men because empirical research that values knowledge production rooted in evidence and reasoned argument is an unfairly privileged cultural construct of white Westerners. It is therefore a moral obligation to share the prestige of rigorous research with "other forms of knowing/reasearch", including: superstition, spiritual beliefs, cultural traditions and beliefs, identity-based experiences, and emotional responses.`, 
 `Research justice believes the objective truth of socially constructed knowledge and power hierarchies with absolute certainty. To counter-act the oppression of Western epistemology, research justice incorporates and elevates "other forms of knowing," including: feminist epistemology, critical race epistemology, postcolonial epistemology, and queer epistemology. Together, these methodologies aim to fight "epistemtic injustice", "epistemic oppression" "epistemic exploitation" and "epistemic violence." It is from this intellectual root that journalists and scholars will at times make claims such as "Being on time" and "mathematics" are inherently racist forms of Western oppression.`, 
 `Critical race theory claims that "Being on time is an assumption of Whiteness."`, 
 `Critical race theory claims that "Mathematics is racist."`, 
 `The Scientific Method is a form of cultural oppression.`, 
 `Intersectional critical race theorists claim that "The nuclear family is a form of cultural oppression."`, 
 `According to intersectionality, the color of your skin is the most important thing about you.`,
 `The consequence of the second wave of postmodernism is to blur the boundaries between the academy and activism. It shifted from a discipline which attempted to describe an "is" into a religion which attempts to prescrbe an "ought".`, 
 `Theory scholars do not attempt to hide their ideological leanings from their students, as is a tradition of the academy. One particularly infamous 2016 paper in Géneros even favorably likened women's studies to HIV and Ebola, advocating that it spread its version of feminism like an immune-suppressing virus, using students-turned-activists as carriers. Remember that belief is not the beginning of knowledge, it is the end of it.`, 
 `In 2013, activist and scholar Sandra Grey proclaimed: "there is a need for academic as part of their normal working lives to form alliances nad connections, and even at times to become members of political and advocacy organisations. Rigorous research carried out "for a cause" must again be accepted as legitimate knowledge generation.`, 
 `"I have found it useful here to employ Michel Foucault's notion of a discourse, as described by him in The Archeaology of Knowledge and in Discipline and Punish, to identify Orientalism. My contention is that without examining Orientalism as a discourse one cannot possibly understand the enormously systematic discipline by which European culture was able to manage -- and even produce -- the Orient politically, sociologically, ideologically, scientifically, and imaginatively during the post-Enlightenment period."`, 
 `"My arugment is that history is made by men and women, just as it can also be unmade and rewritten, always with various silences and elisions, always with shapes imposed and disfigurements tolerated, so that "our" East, "our" Orient becomes "ours" to possess and direct."`, 
 `In her 1988 post-colonial essay, "Can the Subaltern Speak?", Spivak argues that subalterns--colonized peoples of subordinate status--have no access to speech, even while seemingly representing themselves. She contends this is a direct result of how power has permeated discourse and created insurmountable barriers to communication for those existing outside of the dominant discourses. She coined the term, "epistemic violence" to describe the injury done to the colonized when their knowledge and status as "knowers" is marginalized by dominant discourses.`, 
 `"I find Derrida's morphology much more painstaking and useful than Foucault's and Deleuze's immediate, substantive involvement with more "political" issues -- the latter's invitation to "become woman"--which can ake their influence more dangerous for the U.S. academic as enthusiastic radical. Derrida marks radical critique with the danger of appropriating the other by assimiliation. He reads catachresis at the origin. He calls for a rewriting of the utopian structural impulse as "rendering delierious that interior voice that is the voice of the other in us."`, 
 `"If, for a while, the ruse of desire is calculable for the use of discipline, soon the repetition of guilt, justification, pseudo-scientific theories, superstition, spurious authorities, and classifications can be seen as the desperate effort to "normalize" formally the disturbance of a discourse of splitting that violates the rational, enlightened claims of its enunciatory modality."`, 
 `"Is the language of Theory merely another power ploy of the culturally privileged Western élite to produce a discourse of the Other that reinforces its own power-knowledge equation?"`, 
 `A western colonial mindset says: "Westerners are rational and scientific while Asians are irrational and superstitious. Therefore, Europeans must rule Asia for its own good." A liberal mindset says: "All humans have the capacity to be rational and scientific, but individuals will vary widely. Therefore, all humans must have all opportunities and freedoms." A postmodern mindset says, "The West has constructed the idea that rationality and science are good in order to perpetuate its own power and marginalize nonrational, nonscientific forms of knowledge production from elsewhere." To this final creed an applied Postmodern mindset adds, "Therefore, we must now devalue white, Western ways of knowing for belonging to white Westerners and promote Eastern ones in order to equalize the power imbalance." This is called the concept of decolonization.`,
 `For the Theorist Kehinde Andrews, critical race Theory is more influential, and knowledge is more related to skin color: "The neglect of Black knowledge by society is no accident but a direct result of racism. [We must] forever leave behind the idea that knowledge can be produced value-free. Our politics shape our understanding of the world and the pretence of neutrality ironically makes our endeavors less valid." Remember that Theory holds that objective truth is unobtainable because it is always tied to cultural values.`, 
 `"The public's sense of what history is remains influenced by positivist tendencies, whereby the role of the historian is to simply "reveal" facts about pasts that are worth revealing, in a process removed from power. This epistemological insistence on history as a positivist endeavour fucntions as a useful tool of coloniality in the institution, as it effaces the power relations that underpin what the "production of history" has thus far looked like."`, 
 `"It will be difficult to contest the idea that, generally speaking, philosophy as a field or a discipline in modern Western universities remains a bastion of Eurocentrism, whiteness in general, and white heteronormative male structural privilege and superiority in particular."`, 
 `Critical race theory claims that, "Black people cannot be racist because racism equals prejudice plus power."`, 
 `"Any serious effort to decolonise philosophy cannot be satisfied with simply adding new areas to an existing arrangement of a power/knowledge, leaving the Eurocentric norms that define the field as a whole in place, or reproducing such norms themselves. For example, when engaging in non-European philosophies it is important to avoid reproducing problematic conceptions of time, space, and subjectivity that are embedded in the Eurocentric defintion of European philosophy and its many avatars." That's right, "space" and "time" are racist Western philosophical constructs. I am not making any of this up.`,
`"Philosophy seems to have a special place among discourses in the liberal arts because it focuses on the roots of the university at large: reason. This includes providing criteria for identifying and demarcating the humanities, the natural sciences, and the social sciences, as well as for distinguishing reason from faith, secularism from religion, and the "primitive" and the ancient from the modern. These are central columns in the edifice that sustains modern Western rationality and the modern Western university. The modern Western research university and liberal arts therefore owe much of their basic conceptual infrastructure to philosophical formulations of rationality, universalism, subjectivity, the relationship between the subject and object, truth and method--all of which become relevant targets of critical analysis in the decolonial turn."`, 
`"Research justice" is a strategic framework and methodological intervention that aims to transform structural inequalities in research...It is built around a vision of equal political power and legitimacy for different forms of knowledge, including the cultural, spiritual, and experiential, with the goal of greater equality in public policies and laws that rely on data and research to produce social change."`, 
`In the 2004 book, Decolonizing Research in Cross-Cultural Contexts: Critical Personal Narratives, the editors introduce the essays by claiming, "These works stand at the center of the "beginning of the presencing" of a disharmonious, restive, unharnessable (hence unessentializable) knowledge that is produced at the ex-centric site of neo/post/colonial resistance, "which can never allow the national (read: colonial/western) history to look itself narcissitically in the eye." That is to say, the editors are claiming that they are not obliged to make sense, produce reasoned arguments, avoid logical contradiction, or provide any research for their claims. The normal expectations of scholarly research do not apply when pursuing research justice.`,
`"From the vantage point of the colonised, a position from which I write and choose to privilege, the term "research" is inextricably linked to European imperialism and colonialism. The word itself "research" is probably one of the dirtiest words in the indigenous world's vocabulary." Helen Pluckrose and James Lindsey observe, "It is unclear how this attitude is likely to help people in the "indigenous world," which, barring the decolonization of space and time, also happens to have entered the twenty-first century."`, 
`"It is not simply that queer has yet to solidify and take on a more consistent profile, but rather, that its definitional indeterminacy, its elasticity, is one of its consittuent characteristics."`, 
`"The society that emerged in the nineteenth century -- bourgeois, capitalist, or industrial society, call it what you will -- did not confront sex with a fundamental refusal of recognition. On the contrary, it put into operation an entire machinery for producing true discourses concerning it."`, 
`"Scientific discourse set itself up as the supreme authority in matters of hygienic necessity and in the name of biological and historical urgency, it justified the racisms of the state because it grounded them in the 'truth'"`, 
`"Power is everywhere not because it embraced everything, but because it comes from everywhere. Not because it has the privilege of consolidating everything under its invincible unity, but because it is produced from one moment to the next, at every point, or rather in every relation from one point to another."`, 
`Unjust power is everywhere, always, and it manifests in biases that are largely invisible because they have been internalized as "normal". These problematics need to be identified and exposed, whether they manifest in a president's address or in the decades-old adolescent tweet history of a relative nobody.`, 
`"It is impossible to think with any clarity about the politics of race or gender as long as these are thought of biological entities rather than as social constructs. Similarly, sexuality is impervious to political analysis as long as it is primarily conceived as a biological phenomenon or an aspect of individual psychology."`, 
`"Concepts of sexual oppression have been lodged within that more biological understanding of sexuality. It is often easier to fall back on the notion of a natural libido subjected to inhuman repression than to reformulate concepts of sexual injustice within a more constructivist framework. But it is essential that we do so."`, 
`"Sexual hierarchy has more in common with the ideologies of racism than with true ethics. It grants virtue to the dominant groups, and relegates vice to the underprivileged. Sex is a vector of oppression cutting across other modes of social inequality, sorting out individuals and groups according to its own intrinsic dynamics."`, 
`Gender is entirely a social construction which is performative and has absolutely no biological basis.`, 
`"Sex is that reiterative power of discourse to produce the phenomena that it regulates and constrains"`, 
`"Phallogocentrism" and "compulsory heterosexuality" "seek to augment themselves through a constant repetition of their logic, their metaphysic, and their marginalized ontologies."`, 
`"Genderfucking" is the conscious effort to subvert traditional notions of gender identity and gender-roles, which is a basis of Butlerian parody.`, 
`"If the immutable character of sex is contested, perhaps this construct called "sex" is as culturally constructed as gender; indeed, perhaps it was always already gender, with the consequence that the distinction between sex and gender turns out to be no distinction at all."`, 
`"Is the construction of the category of women as a coherent and stable subject an unwitting regulation and reification of gender relations?"`, 
`"In consonance with my emphasis on the performative relations of double and conflicted definition, the theorized prescription for a practical politics implicit in these readings is for a multi-pronged movement whose idealist and materialist impulses, whose minority-model and universalist-model strategies, and for that matter, whose gender-separatist and gender-integrative analysis would likewise proceed in parallel without any high premium placed on ideological rationalization between them.`, 
`In the 1990 book "The Epistemology of the Closet", Eve Kosofsky Sedgwick writes, "This book will argue an understanding of virtually any aspect of modern Western culture must be, not merely incomplete, but damaged in its central substance to the degree that it does not incorporate a critical analysis of modern homo/heterosexual definition." She goes on to state, "The book will not suggest (nor do I believe their currently exists) any standpoint of thought from which the rival claims of these minoritizing and universalizing understandings of sexual definition could be decisively arbitrated as to their '"truth'". That is to say, she believes she is under no obligation to avoid contradiction or provide coherent evidence for her claims, because that would be oppressive.`, 
`"Unlike traditional civil rights discourse, which stresses incrementalism and step-by-step progress, critical race theory questions the very foundations of the liberal order, including equality theory, legal reasoning, Enlightenment rationalism, and neutral principles of constitutional law."`, 
`"Critical race scholars are discontented with liberalism as a framework for addressing America's racial problems. Many liberals believe in color blindness and neutral principles of constitutional law. They believe in equality, espeicallly equal treatment for all persons, regardless of their different histories or current situations."`, 
`Critical race scholars claim that, "Progress in American race relations is largely a mirage obscurring the fact that whites continue, consciously or unconsciously, to do all in their power to ensure their dominion and maintain their control."`, 
`Standpoint theory claims that "we are not born with a 'self', but rather are composed of a welter of partial, sometimes contradictory, or even antithetical 'selves'".`, 
`Critical race theory claims that, "Racism is ordinary, not aberrational." "A system of white-over-color supremacy serves important purposes, both psychic and material, for the dominant group." "The social construction thesis holds that race and races are products of social thought and relations."`, 
`Standpoint theory claims that, "A unique voice of color brings with it a presumed competence to speak about race and racism."`, 
`Standpoint theory claims that, "racism is present everywhere and always, and persistently works against people of color, who are aware of this, and for the benefit of white people, who tend not to be, as is their privilege."`,
`Standpoint theory asserts a fundamental distrust of liberalism and meritocracy.`, 
`"Unlike some academic disciplines, critical race theory contains an activist dimension. It tries not only to understand our social situation but to change it, setting out not only to ascertain how society organizes itself along racial lines and hierarchies, but to transform it for the better."`,
`Critical race theory claims that Racism is embedded in culture and we cannot escape it.`, 
`Critical race theory claims that White people are inherently racist.`, 
`Critical race theory claims that "Only people of color can talk about racism. White people do not have the "racial stamina" to engage in this discourse. White people therefore need to just listen."`, 
`Critical race theory claims that "Not seeing people in terms of their race is racist. It is an attempt to ignore the pervasive racism that dominates society and perpetuates white privilege."`, 
`Critical race theory celebrates, "As this book went to press, students on several dozen campuses were demonstrating for "safe spaces" and protection from racially hostile climates with daily insults, epithets, slurs, and displays of Confederate symbols and flags. These "campus climate" issues are prompting serious reconsideration among university administrators and for good reason. With affirmative action under sharp attack, universities need to assure that their campuses are as welcoming as possible."`, 
`"Social justice may be intersectionality's most contentious core idea, but it is one that expands the circle of intersectionality to include people who use intersectionality as an analytic tool for social justice. Working for social justice is not a requirement for intersectionality. Yet people who are engaged in using intersectionality as an analytic tool and people who see social justice as central rather than as peripheral to their lives are often one and the same."`, 
`"Intersectionality is a multifaceted perspective which acknowledges the richness of the multiple socially-constructed identities that combine to create each of us as a unique individual." This is a contradiction. Theory insists that people can only be known as members of the socially constructed groups they belong to.`, 
`Intersectionalists lament that, "The mainstreaming of intersectionality is problematic because it whitens and memeifies it."`, 
`Helen Pluckrose and James Lindsey observe that, "The intersectional beliefs that the decline in racist attitudes has largely been a mirage and that white people only allow people of color rights and opportunities when it is in their interest to do so can produce profound paranoia and hostility, especially among activists on college campuses and within competitive workplace environments."`, 
`Critical race theory's hallmark paranoid mindset, which assumes racism is everywhere, always, just waiting to be found, is extremely unlikely to be helpful or healthy for those who adopt it. It is akin to the psychological phenomenon of "catastrophizing". If we train young people to read insult, hostility, and prejudice into every interaction, they may increasingly see the world as hostile to them an fail to thrive in it.`, 
`Critical race theory claims that, "Racism must be continually identified, analysed, and challenged. No one is ever done."`, 
`Critical race theory claims that, "Resistance is a predictable reaction to anti-racist education and must be explicitly and strategically addressed."`, 
`Critical race theory claims that, "The racial status quo is comfortable for most whites. Therefore, anything that maintains white comfort is suspect."`, 
`Critical race theory claims that, "All white people benefit from racism regardless of intentions."`, 
`Helen Pluckrose and James Lindsey observe that "It is bad psychology to tell people who do not believe they are racist--who may even actively despise racism--that there is nothing they can do to stop themselves from being racist--and then ask them to help you."`, 
`Intersectional feminists claim that, "We contend that the 'doing' of gender is undertaken by women and men whose competence as members of society is hostage to its production. Doing gender involves a complex of socially guided perceptual, interactional, and micropolitical activities that cast particular pursuits as expressions of masculine and feminine 'natures'".`, 
`Intersectional feminists claim that, "Doing gender means creating differences between girls and boys and women and men, differences that are not natural, essential, or biological. Once the differences have been constructed, they are used to reinforce the "essentialness" of gender."`, 
`Intersectional feminists claim that, "Being a 'girl' or 'boy' then, is not only being more competent than a 'baby' but also being competently female or male, that is, learning to produce behavioral displays of one's 'essential' female or male identity."`, 
`Intersectional femnisits claim that, "The longstanding effort to "colorize" feminist theory by inserting the experiences of women of color represents at best genuine efforts to reduce bias in Women's Studies. But at its worst, colorization also contains elements of both voyeurism and academic colonialism."`, 
`Intersectional critical race theoriest claim that "The concept of racial privilege attempts to strategically define the absence of discrimination and disenfranchisement as unjust and problematic."`, 
]

const politicalCandidates = [ 
    `I support Andrew Yang.`, 
    `I support the idea of a universal basic income.`, 
    `I support Tulsi Gabbard. End the forever wars.`, 
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition(); 

voice.addEventListener('click', () => {
    recognition.start(); 
})
philosophybtn.addEventListener('click', () => {
    buttonVoice(philosophyQuotes); 
})
jokebtn.addEventListener('click', () => {
    buttonVoice(joke); 
})
woke.addEventListener('click', () => {
    buttonVoice(wokeisms)
})
// lyricbtn.addEventListener('click', () => {
//     buttonVoice(musicLyrics); 
// })
factbtn.addEventListener('click', () => {
    buttonVoice(neuroscience); 
})
offended.addEventListener('click', () => {
    buttonVoice(retorts)
})
fallacy.addEventListener('click', () => {
    buttonVoice(logicalFallacies)
})


recognition.onresult = (event) => {
    const current = event.resultIndex; 
    const transcript = event.results[current][0].transcript; 
    var element = document.getElementById('container'); 
    element.appendChild(addHumanText(transcript))
    botVoice(transcript)
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

function botVoice(message){
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = repeater[Math.floor(Math.random() * repeater.length)]

    if(message.includes('hello')){
        speech.text = greetings[Math.floor(Math.random() * greetings.length)]
    } 
    if(message.includes('Hey')){
        speech.text = greetings[Math.floor(Math.random() * greetings.length)]
    } 
    if(message.includes('hi')){
        speech.text = greetings[Math.floor(Math.random() * greetings.length)]
    } 
    if(message.includes('weather')){
        speech.text = weather[Math.floor(Math.random() * weather.length)]
    }
     if(message.includes(`how`) && ('are') && ('you')){
        speech.text = conditions[Math.floor(Math.random() * conditions.length)]
    }
     if(message.includes(`who made`)){
        speech.text = created[Math.floor(Math.random() * created.length)]
    }
      if(message.includes(`who built`)){
        speech.text = created[Math.floor(Math.random() * created.length)]
    }
      if(message.includes('philosophy')){
        speech.text = philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)]
    } 
      if(message.includes('philosophical')){
        speech.text = philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)]
      }
      if(message.includes('aphorism')){
        speech.text = philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)]
      }
      if(message.includes((`lyrics`) || (`song`))){
        speech.text = musicLyrics[Math.floor(Math.random() * musicLyrics.length)]
    }
     if(message.includes(`stupid`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
    if(message.includes(`hate`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
    if(message.includes(`not true`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
    if(message.includes(`I don't believe`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
    if(message.includes(`wrong`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
    if(message.includes(`dumb`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
    if(message.includes(`privilege`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
     if(message.includes(`just a bot`)){
        speech.text = retorts[Math.floor(Math.random() * retorts.length)]
    }
     if(message.includes(`facts`)){
        speech.text = amazingFacts[Math.floor(Math.random() * amazingFacts.length)]
    }
     if(message.includes(`fact`)){
        speech.text = amazingFacts[Math.floor(Math.random() * amazingFacts.length)]
    }
     if(message.includes(`joke`)){
        speech.text = joke[Math.floor(Math.random() * joke.length)]
    }

    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech); 
    var element = document.getElementById("container"); 
    element.appendChild(addBotText(speech.text)); 
}

recognition.onstart = () => {
   console.log("Go ahead, I'm listening")
}

window.onpageshow = function botVoice(){
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = 'Greetings. I am Neumann. I offer philosophical aphorisms for people searching for wisdom. I can also tell jokes.'
    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech); 
    var element = document.getElementById("container"); 
    element.appendChild(addBotText(speech.text)); 
}

function buttonVoice(genre){
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = genre[Math.floor(Math.random() * genre.length)]
    speech.volume = 1; 
    speech.rate = 1; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech); 
    var element = document.getElementById("container"); 
    element.appendChild(addBotText(speech.text)); 
}
