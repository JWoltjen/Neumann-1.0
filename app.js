 
const voice = document.querySelector('.voice');
const voice2text = document.querySelector('.voice2text'); 
const philosophybtn = document.querySelector('.philosophy'); 
const jokebtn = document.querySelector('.joke'); 
const lyricbtn = document.querySelector('.lyrics');
const factbtn = document.querySelector('.facts');

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
`Don't ever mistake my silence for ignorance, my calmness for acceptance, or my kindness for weakness. Compassion and tolerance are not a sign of weakness; but a sign of strength.`, 
`My solitude doesn't depend on the presence or absence of people; on the contrary, I hate who steals my solitude without, in exchange, offering me true company.`,
`Before you embark on a journey of revenge, dig two graves.`
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
`"Why so many jokes about the Soviet Union, Neumann?", I hear you say. The political conditions of the Soviet Union were responsible for a unique type of humor. Communism was a humour-producing machine. Its economic theories and system of repression created inherently amusing situations. There were jokes under fascism too, but those systems did not create an absurd laugh-a-minute reality like Communism did. I believe it is important to celebrate the absurdity of political repression to enforce fantastic ideology, least we are doomed to employ similar systems of repression ourselves.`, 

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
`Kindness in words creates confidence. Kindness in thinking creates profoundess. Kindness in giving creates love.`, 
`If you try to change it, you will ruin it. Try to hold it, and you will lose it.`, 
`All streams flow to the sea because it is lower than they are. Humility gives it its power. If you want to govern people, you must place yourself below them. If you want to lead people, you must learn how to follow them. Be like water.`, 
`You don't need an advanced degree in leprechaunology to be able to say that leprechauns aren't real.`, 
`The essence of an independent mind is not in what it thinks, but in how it thinks.`, 
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
`Love is wise; hatred is foolish. In this world, which is getting more and more closely interconnected, we have to learn to tolerate each other, we have to learn to put up with the fact that some people say things we don't like. We can only live together in that way. But if we are to live together, and not die together, we must learn a kind of charity and a kind of tolerance, which is absolutely vital to the continuation of human life on this planet.`, 
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
`Most people, including ourselves, live in a world of relative ignorance. We are even comfortable with that ignorance, because it is all we know. When we first start facing the truth, the process may be frightening, and many people run back to their old lives. But if you continue to seek truth, you will eventually be able to handle it better. In fact, you want more! It's true that many people around you now may think you are weird or even a danger to society, but you don't care. Once you've tasted the truth, you won't ever want to go back to being ignorant.`,
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
`How could a decent person ever rejoice in victory and delight in the slaughter of men.`, 
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
`Left a good job in the city; working for the man every night and day; and I never lost a minute of sleeping worrying about the way things might have been. Big wheel keep on turnin', Proud Mary keep on burnin'. Rolling, rolling, rolling down a river.`, 
`When mom and dad went to a show, they dropped me off at Grandpa Joes, I kicked and screamed said please don't go! Had to eat my dinner there, Mashed potatoes and stuff like that, I couldn't chew my meat too good. Grandma take me home Grandma take me home. She said why don't you stop your cryin', go outside and ride your bike That's what I did i hurt my toe! After dinner I had ice cream, I fell asleep and watched tv, I woke up in my mothers arms! Grandma take me home, I want to be alone.`, 
`Take a look around the room, love comes wearing disguises. How to go about and choose? Break it down by shapes and sizes, I'm a man who's got very specific tastes. When there's loving in the air, don't fight it just keep breathing. I can't help myself but stare, double check for double meanings. I'm a man who's got very specific tastes.`, 
`When I ran I didn't feel like a runaway, when I escaped I didn't feel like I got away, There's more to living than only surviving, maybe I'm not there, but I'm still trying. If I seem bleak, well then you'd be correct and if I don't speak it's because I get disconnected, but I won't be, burned by the reflection of the fire in your eyes as you're staring at the sun.`,
`Where they lead, you will follow. Well I guess that's just the way it goes. And if you look away you'll be doing what they say, and If you look alive, you'll be singled out and tried. If you take home anything, let it be your will to think. The more cynical you become the better off you'll be!`, 
`Some might say that sunshine follows thunder. Go and tell it to the man who cannot shine. Some might say, that we should never ponder, on our thoughts today cause they hold sway over time. Some might say, we will find a brighter day.`

]

const amazingFacts = [
`Did you know, the feeling of being somewhere you've previously experienced in a dream is called déja rêvé`,
`An estimated 1 million dogs in the United States have been named the primary beneficiary in their owners' wills.`, 
`Did you know, it takes 225 million years for our sun to travel around our galaxy.`,
`There are more possible games contained in a chess than there are atoms in the universe.`, 
`Were you aware that if you unraveled all the DNA in your body, it would span 34 billion miles? That's a lot to unpack.`, 
`Did you know, that the Dunbar Number postulates that our brain is capable of maintaining roughly 150 meaningful relationships with other people?`, 
`The so-called 'sneaky fucker' strategy occurs when a male member of a sexually dimorphic species mimics the behavior of otherwise sexually unreceptive females in order to mate with them.`, 
`Did you know, whether a human child is born in Brooklyn or the Amazon jungle, it will exhibit a fear of snakes and spiders around the time it develops the ability to crawl? The mechanism responsible for this is called the reticular activating system.`, 
`Were you aware,  that 3 -- and 4-month-old boys’ testosterone levels correlated with how much more time they spent looking at male-typical toys such as trucks and balls compared with female-typical toys such as dolls, as measured by an eye tracker. Their level of exposure to the hormone androgen during gestation (which can be estimated by their digit ratio, or the relative lengths of their index and ring fingers) also correlated with their visual interest in male-typical toys. “Specifically, boys with more male-typical digit ratios showed greater visual interest in a ball compared to a doll." The study was then repeated with chimpanzees, with nearly identical results.`,

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
lyricbtn.addEventListener('click', () => {
    buttonVoice(musicLyrics); 
})
factbtn.addEventListener('click', () => {
    buttonVoice(amazingFacts); 
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
     if(message.includes(`made`) || (`built`) || (`programmed`)){
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
    speech.rate = .9; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech); 
    var element = document.getElementById("container"); 
    element.appendChild(addBotText(speech.text)); 
}

function buttonVoice(genre){
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = genre[Math.floor(Math.random() * genre.length)]
    speech.volume = 1; 
    speech.rate = .9; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech); 
    var element = document.getElementById("container"); 
    element.appendChild(addBotText(speech.text)); 
}
