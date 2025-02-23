---
layout: default
title: How Will ET Hear Us? Reviewing Efforts to Communicate with Extraterrestrials
---

# How Will ET Hear Us? Reviewing Efforts to Communicate with Extraterrestrials
## By Jared Popowski
### 2020-03-19

*This blog post comes from a paper that I wrote for the Bachelor's-level class "Search for Life in the Universe" that I took at CU Boulder in the summer of 2019. I am by no means a SETI expert, so don't be surprised if I say something dumb.*

![Image of NASA's Goldstone Telescope at night.](/docs/assets/telescope.jpeg)
*This 230-foot antenna is part of NASA’s Goldstone Deep Space Communications Complex in the Mojave Desert in California, USA. Image from the NASA Image and Video Library.*

## Introduction - Historical Efforts to Communicate with ET

The idea that humanity may not be alone in the universe has fascinated us for centuries. The earliest known formal considerations of life occurring on other planets came from ancient Greece; the philosopher Epicurus believed in an infinite universe that contains “infinite worlds both like and unlike ours”, and added that “we must believe that in all worlds there are living creatures and plants and other things we see in this world” [1]. Later, the rise of Copernican heliocentrism in the 16th century reignited speculation on extraterrestrial life, since the dethroning of Earth as the center of the universe suddenly made it seem much more possible that the presence of life on Earth may not be special or particularly unique [1]. However, despite prolonged interest in extraterrestrial life during this period of time, the first recorded discussions of how we may actually locate and contact such life did not occur until the early 19th century.

Mathematician Carl Friedrich Gauss is credited with some of the first proposals of methods to signal extraterrestrial life. One such proposal (for which credit to Gauss has recently been disputed) was to cut a giant right triangle out of the forests in Siberia and plant wheat for contrast, with the idea that the triangle would be visible to whatever lived on the Moon or Mars, and could only be interpreted as an intentional construction by intelligent beings [2]. Whether or not Gauss had that specific idea, he certainly was interested in finding ways to contact extraterrestrials. In an 1822 letter to Heinrich Olbers, Gauss suggested the simultaneous use of 100 heliotropes, an invention of his that uses a mirror to reflect light over great distances for survey work, to direct light towards the supposed inhabitants of the Moon [1]. In a similar vein, French inventor Charles Cros spent years in the late 19th century trying to get funding for a giant parabolic mirror with which he could send signals to Mars [3].

In the early 20th century, interest in the search for extraterrestrial intelligence (SETI) began to wane, since spectroscopic analysis and better telescopes had shown that Mars lacked the right conditions, such as water and oxygen present in its atmosphere, to support life [4]. The lack of life on Mars made it much more likely that intelligent life (if it exists elsewhere in the universe) lives very far away from us, which makes the prospect of communicating with it much more daunting. It wasn’t until Philip Morrison and Giuseppe Cocconi pointed out in a 1959 paper that radar transmitters of the time were already powerful enough to send signals many light-years away that radio-based SETI began to be taken seriously [5].

Most modern ideas for SETI presume the use of radio waves to transmit signals, rather than the visible light based-communications that prevailed in early proposals (see the next section of this blog post for an explanation of why this is). In 1960, Cornell university astronomer Frank Drake performed Project Ozma, which examined the stars Tau Ceti and Epsilon Eridani for microwave signals near the “water hole”: a range of frequencies in the microwave regime near the hydrogen and hydroxyl spectral lines [6, 14]. This was the first radio SETI experiment and, perhaps unsurprisingly, it found nothing. Our best candidate for a radio transmission of extraterrestrial origin is the famous Wow! signal, which was a narrowband radio signal detected in Ohio in 1977 that resided very close to the hydrogen spectral line characterizing the water hole [7]. Although the signal was unmodulated with no encoded information and has never been detected again, attempts to explain the signal by natural or man-made sources have been insufficient, and its narrow bandwidth and location at the frequency expected by scientists makes it our strongest evidence for extraterrestrial communications [7]. The search for extraterrestrial radio signals still continues today, but criticism of NASA’s 1992 Microwave Observing Program in the United States Congress led to the cancellation of the program and a widespread lack of government funding for SETI, meaning that research has had to rely primarily on private funding [8].

The other side to modern SETI work is called Active SETI or METI (Messaging to Extraterrestrial Intelligence). As the name suggests, the goal of METI is to send messages into space in the hope that they will be detected by intelligent extraterrestrial life. The first radio broadcast for extraterrestrial intelligence was the Morse Message, sent by the Soviet Union in 1962 to the planet Venus [9]. The message consisted of the three words MIR (meaning both “peace” and “world”), LENIN, and SSSR (in Russian, this is the abbreviation for Soviet Union), all sent in Morse code [9]. Shortly afterward, in 1974, a radio message containing some very basic information about the human race, like the elements that make up DNA, a diagram of our solar system, and a simple picture of a human being, was sent from the Arecibo radio telescope in Puerto Rico toward a globular cluster about 22,000 light-years away [10]. See Figure 1 below for a picture and more information on this message, called the Arecibo message.

<img align="left" height = "600" src="/docs/assets/arecibo.png">

*A visualization of the binary 1974 Arecibo message, where each box represents one bit (black if the bit is 1, white if it’s 0). The picture is broken into 73 groups of 23 characters, and each group is read from right to left. From top to bottom, the contents of the message are*

*1) The numbers 1 to 10,*

*2) The atomic numbers of hydrogen, carbon, nitrogen, oxygen, and phosphorus, the basic chemicals of life on earth,*

*3) Formulas for the chemical building blocks of DNA,*

*4) A representation of the DNA double helix and the number of nucleotides in the human genome,*

*5) A stick figure of a human being and the population of Earth at the time,*

*6) A schematic of our solar system, and*

*7) A drawing of the Arecibo radio telescope* [10].

<br clear="left"/>

Since the Arecibo message, several other radio messages have been sent out to various nearby stars, each with their own ways of representing the information that we would like to get across. However, it is important to note that there is currently much debate about whether or not we should be sending messages out into space in the first place. In 2015, a statement on METI signed by many in the field of SETI was released which said that a “worldwide scientific, political, and humanitarian discussion must occur before any message is sent” [11]. My personal view (although neither informed nor important enough to be relevant to the debate) is more in line with Russian radio engineer and astronomer Alexander Zaitsev, who argues that fears of alerting some super powerful and aggressive extraterrestrial civilization to our location by sending out messages are misplaced because such advanced civilizations would find us from our radio leakage anyways [12]. Zaitsev also points out that if all extraterrestrial civilizations had a similarly isolationist attitude, SETI would be pointless: “Searching is meaningless if no one feels the need to transmit...” [12].

## Detectable Signals from Humans and Extraterrestrials

Let us put aside the debate on whether we should be sending messages into space or not, and assume that we want to both detect the presence of extraterrestrials and send messages to them. What types of messages should we send? Direct travel to exoplanets light-years away is unfeasible on a reasonable timescale with current technology, so at best we can communicate from afar, using electromagnetic radiation. All of the early (pre-20th century) historical proposals for SETI mentioned above and many other proposals from the time suffer from the fact that the method of communication is based on the transmission of visible light. Nowadays, radio waves (specifically microwaves) are thought of as a much more robust and efficient means of alien communication, because they are absorbed less by cosmic dust than the higher frequency visible or ultraviolet light [13, 14]. Also, the minimum detectable radiated power (i.e. lowest energy to produce) is realized in the microwave window of the electromagnetic spectrum, and the cost to produce microwaves is less than that to produce higher frequencies [14]. These considerations and others led the members of Project Cyclops, a 1971 NASA project that investigated how our search for extraterrestrial intelligence should be conducted, to conclude that the best part of the electromagnetic spectrum for communication purposes is the low frequency end of the microwave region [15]. This conclusion is presumed to be true not just for humans, but also for all other communicative races, for the same reasons.

So the low frequency end of the microwave region is an ideal region for our interstellar search. After taking into account potential noise sources such as the receiver noise due to the relative motion of the transmitter and receiver, this still leaves us with at least a 2-GHz wide region of the electromagnetic spectrum, which is too wide to search and also too wide to reserve terrestrially for the sole purpose of interstellar searches [14]. How do we decide which frequencies to search for within this region? It just so happens that the 1420 MHz ($\lambda=21$ cm) radio emission line of hydrogen, the most abundant element in the universe, lies directly within this favorable region of the spectrum [5]. The region between this hydrogen spectral line and the hydroxyl radical spectral line at 1622 MHz, two emissions of the dissociation products of water, marks out a natural range (the “water hole”) for us to make our search, considering how crucial water is to all life as we know it [14]. These arguments clearly define a specific frequency range that has been the basis for many modern SETI radio searches. In the absence of more compelling reasons to focus on a different region, signals near the water hole may be our best bet for interstellar communications.


Aside from intentional, directed signals, there is a second type of observable for detecting intelligent extraterrestrial life: potential technological byproducts of their civilizations. For example, we know that the presence of humans on Earth could already be detected from our radio wave “leakage” over the last century at interstellar distances with our current levels of technology [16]. The specific radio signal of ours that is likely the most detectable to a galactic civilization while containing the most information turns out to be TV broadcasting, which is the most intense source on Earth of a signal satisfying the important criteria that
1. the signal should be exactly the same from day to day,
2. the amount of sky illuminated by the transmitting antennas should be large, and
3. the number of transmitters on Earth should be large. [16]

In the context of our own attempts at SETI, it is worthwhile to reinforce here that our own civilization, the only one that we know anything about, has released very few purposeful signals into space, but has been leaking radiation for several decades. If this is somewhat typical of other galactic civilizations, then this may contribute towards an explanation for the Fermi Paradox. The intensity of leakage radiation is $\propto 1/r^2$, where $r$ is the distance from the source of the radiation, and galactic distances between stars are enormous [17]. If civilizations are not sending out messages but only leaking radiation, perhaps we only really have a chance of detecting their presence if our sun falls within the nearest group of stars for which the intensity of the radio leakage is above the background noise. In any case, leakage radiation should certainly be considered in future SETI radio surveys of the stars around us.

There are many other proposed technological byproducts of galactic civilizations to search for that span the range from things that we produce ourselves to the realm of science fiction. This is not a complete list, but I found a few examples near our technology level to be quite interesting. An example is the Clarke exobelt, formed by all artificial satellites in geostationary and geosynchronous orbits around a planet [18]. This byproduct has the advantage that its identification is based on the same light curve observations that are currently used in the search for habitable exoplanets, meaning that detecting it requires little additional effort. Numerical simulations have shown that Clarke exobelts that have a significantly larger face-on opacity than Earth does could be visible from nearby stars with our current observational capabilities [18]. Another type of byproduct which would be much more powerful than the leakage radiation from radio signals mentioned earlier is leakage radiation from power beaming, which has been proposed here on Earth as a method to transfer energy and accelerate spacecraft [19]. In the method, a high-power laser beam (microwave, millimeter wave, or visible/near-IR) would be used to launch spacecraft into orbit, raise the orbits of satellites, accelerate interstellar probes, or rapidly deliver critical payloads within the solar system, to name a few potential applications [19]. The power required for power beaming is also larger than that necessary for beaming systems for communication, and the intense beams of radiation are more focused than communications signals, both of which could make power beaming far more easily detected if present [20].

## Conclusion

From the historical information and context presented in the beginning of this blog post, it is clear that the search for life in the universe is by no means a new field. In many respects, however, we live in the golden age of this search; every year we learn more about the habitability of the planets and outer moons of our own solar system by sending man-made machines to orbit them and directly explore their surfaces. Modern scientific instruments and new astronomical techniques give us access to the vast expanse of stars and exoplanets out there that are too far away to directly explore in a timely manner. It is even conceivable that we may find life for the very first time in some form elsewhere in the universe within our lifetimes. Although it seems most likely that this first life would be microbial life found somewhere within our own solar system, the idea that we may also eventually find intelligent life that is totally unlike us is thrilling. Whether we find such intelligent life from intentional, directed radio signals that are beamed towards us or from anomalous-looking exoplanet transit data that can only be explained by the presence of a Clarke exobelt, such a discovery would dramatically alter our conceptions of ourselves and our relation to the cosmos.

### References

[1] Crowe, Michael J. The Extraterrestrial Life Debate 1750-1900: the idea of a plurality of worlds from Kant to Lowell. CUP Archive, 1988.

[2] Garelik, Glenn; Nash, J. Madeleine; Woodbury, Richard (July 18, 1988). “Space: Onward to Mars”. Time Magazine. Vol. 132 no. 3. p. 50.

[3] Ley, Willy. Rockets, missiles, and space travel. Viking Press, 1944.

[4] Chambers, Paul. Life on Mars: the complete story. London: Blandford, 1999.

[5] Cocconi, Giuseppe, and Philip Morrison. “Searching for interstellar communications.” Nature 184.4690 (1959).

[6] “Project Ozma.” SETI Institute, [https://www.seti.org/project-ozma](https://www.seti.org/project-ozma).

[7] Gray, Robert H. The elusive Wow: searching for extraterrestrial intelligence. Palmer Square Press, 2012.

[8] Garber, Stephen J. ”Searching for good science: the cancellation of NASA’s SETI program.” Journal of the British Interplanetary Society 52.1 (1999): 3-12.

[9] Valentine, Genevieve. “You Never Get a Seventh Chance to Make a First Impression: An Awkward History of Our Space Transmissions.” Lightspeed Magazine, 10 Dec. 2011, [http://www.lightspeedmagazine.com/nonfiction/you-never-get-a-seventh-chance-to-makea-first-impression-an-awkward-history-of-our-space-transmissions](http://www.lightspeedmagazine.com/nonfiction/you-never-get-a-seventh-chance-to-makea-first-impression-an-awkward-history-of-our-space-transmissions)

[10] Steele, Bill. “It’s the 25th Anniversary of Earth’s First (and Only) Attempt to
Phone E.T.” Cornell News, 12 Nov. 1999, [http://web.archive.org/web/20080802005337/http://www.news.cornell.edu/releases/Nov99/Arecibo.message.ws.html](http://web.archive.org/web/20080802005337/http://www.news.cornell.edu/releases/Nov99/Arecibo.message.ws.html)

[11] “REGARDING MESSAGING TO EXTRATERRESTRIAL INTELLIGENCE (METI) /
ACTIVE SEARCHES FOR EXTRATERRESTRIAL INTELLIGENCE (ACTIVE SETI):”
Statement Regarding METI/Active SETI. 14 Feb. 2015, [https://setiathome.berkeley.edu/meti_statement_0.html](https://setiathome.berkeley.edu/meti_statement_0.html).

[12] Zaitsev, Alexander. ”The SETI paradox.” arXiv preprint physics/0611283 (2006).

[13] Draine, Bruce T. “Astrophysics of dust in cold clouds.” The Cold Universe. Springer, Berlin, Heidelberg, 2004. 213-304.

[14] Oliver, Bernard M. “Rationale for the water hole.” Communication with extraterrestrial intelligence. Pergamon, 1979. 71-79.

[15] Oliver, B. M.; J. Billingham (Eds.) (1971). Project Cyclops. NASA CR114445.

[16] Sullivan, Woodruff T. “Eavesdropping Mode and Radio Leakage from Earth.” *NASA*, NASA, [https://history.nasa.gov/CP-2156/ch5.4.htm](https://history.nasa.gov/CP-2156/ch5.4.htm).

[17] Griffiths, David Jeffrey. Introduction to Electrodynamics. Cambridge: Cambridge UP, 2018. Print. p. 471.

[18] Socas-Navarro, Hector. ”Possible photometric signatures of moderately advanced civilizations: the Clarke exobelt.” The Astrophysical Journal 855.2 (2018): 110.

[19] Benford, James N., and Dominic J. Benford. ”Power beaming leakage radiation as a SETI observable.” The Astrophysical Journal 825.2 (2016): 101.

[20] Benford, James, Gregory Benford, and Dominic Benford. ”Messaging with cost-optimized interstellar beacons.” Astrobiology 10.5 (2010): 475-490.
