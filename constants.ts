import { TimelineEvent, CaseDetails, CaseMetrics, AgentRole, UserRole, PromptCategory, Witness } from './services/types';
import { ShieldAlert, Gavel, FileText, Mic2, Search, Target, Users } from 'lucide-react';

export interface CaseArchive {
    id: string;
    title: string;
    defendant: string;
    charge: string;
    location: string;
    day: number;
    totalDays: number;
    trialYear: string;
    description: { defense: string; prosecution: string };
    witnesses: Witness[];
    timeline: TimelineEvent[];
    advice: { defense: string[]; prosecution: string[] };
    judgeName: string;
    mentorName: string;
    opposingName: { defense: string; prosecution: string };
    opposingInstruction: { defense: string; prosecution: string };
}

export const CASE_ARCHIVES: Record<string, CaseArchive> = {
    gideon: {
        id: 'gideon',
        title: "State of Florida v. Clarence Earl Gideon",
        defendant: "Clarence Earl Gideon",
        charge: "Breaking and Entering with Petit Larceny (Burglary)",
        location: "Bay County Court, Panama City, Florida",
        day: 1,
        totalDays: 5,
        trialYear: "1963 (Historic Retrial)",
        description: {
            defense: "As Fred Turner (Defense Attorney), cross-examine Henry Cook to show he was drinking and had his own motives. Show Gideon's money was his card game winnings and cast reasonable doubt.",
            prosecution: "Prove Clarence Gideon broke into the Bay Harbor Poolroom, smashed jukebox coin boxes, stole beer and pocket coins, based on Henry Cook's first-hand testimony."
        },
        judgeName: "Judge Robert McCrary",
        mentorName: "Innocence Co-Counsel Sarah",
        opposingName: {
            defense: "Prosecutor William Harris",
            prosecution: "Defense Attorney Fred Turner"
        },
        opposingInstruction: {
            defense: "You are Prosecutor William Harris. Lean heavily on Henry Cook's direct eyewitness sighting. Dismiss the idea of any lookup alibi or card games as desperation.",
            prosecution: "You are Defense Attorney Fred Turner. Aggressively object to speculation. Argue the police completely failed to look for fingerprints or proper forensics."
        },
        advice: {
            defense: [
                "Impeach eyewitness Henry Cook: ask about his high drinking and whether he was an accomplice.",
                "Establish that police found $25.28 in standard change, which Gideon won legitimately in card games.",
                "Highlight that there are zero fingerprints on the smashed jukebox or forced rear door."
            ],
            prosecution: [
                "Establish the exact timeline: Henry Cook saw Gideon inside the poolroom at 5:30 AM.",
                "Rely on Cook seeing Gideon exit with pockets bulging with coins and a bottle of wine.",
                "Remind the jury that the poolroom's wine stock and jukebox cash drawer were broken into that night."
            ]
        },
        witnesses: [
            {
                id: 'cook',
                name: 'Henry Cook',
                role: 'Eyewitness / Lookout Suspect',
                side: 'prosecution',
                description: '24-year-old local resident. Claims he saw Gideon inside the pool hall through the window and saw him exit carrying wine and pockets full of change.',
                personality: 'Combative, gets nervous about his own record, protective of poolroom owner Brandon, gets flustered if questioned on his exact timeline of drinking.',
                facts: [
                    'Claimed to respond to a silent walk outside the poolroom at 5:30 AM.',
                    'Saw Gideon inside standing near the broken coin-operated machines.',
                    'Saw Gideon leave with a pint of California wine and pockets bulging with coins.',
                    'Cook was out late visiting several clubs, having consumed multiple drinks.',
                    'Cook has prior charges of petty theft and trespassing, which the defense can impeach.'
                ],
                statement: "I was standing outside the Bay Harbor Poolroom around 5:30 AM on June 3, 1961, after getting food down the street. I looked inside and saw Clarence Gideon standing near the coin-operated machines, which were broken open. He was putting coins in his pockets. Shortly after, him and his pockets full of cash came out. He was carrying a bottle of wine. I knew it was Clarence, the area was bright enough to see him."
            },
            {
                id: 'carter',
                name: 'Officer Ira Carter',
                role: 'Lead Investigator',
                side: 'neutral',
                description: 'Arresting officer from the Panama City Police Department. Reliable but formal.',
                personality: 'Strictly procedure-driven. Dislikes suggesting the police made investigative errors or did not do high-quality work.',
                facts: [
                    'Arrested Clarence Gideon outside a local tavern blocks away.',
                    'Found exactly $25.28 in coins and dollar bills in Gideon\'s pockets.',
                    'Did not dust the broken jukeboxes or the window for fingerprints.',
                    'Confirms the poolroom rear door was forced open with a pry bar, which was never recovered.'
                ],
                statement: "On June 3, 1961, I investigated a break-in at the Bay Harbor Poolroom. The back door lock was pried open and the jukebox coin drawer was smashed. We arrested Gideon based on Henry Cook's ID. Gideon had a large amount of coins on him. I've been asked if I preserved fingerprints or looked for a pry bar at the venue, but standard department protocols did not dictate fingerprinting for misdemeanor break-ins back then."
            },
            {
                id: 'gideon_witness',
                name: 'Clarence Earl Gideon',
                role: 'The Defendant',
                side: 'defense',
                description: 'The accused. 51 years old, poor health, highly obstinate, insists on absolute constitutional fairness.',
                personality: 'Stubborn, speaks in gravelly Southern tones, easily irritated by the prosecutor, strongly believes he is being scapegoated.',
                facts: [
                    'Had $25.28 in pocket because of winning a series of friendly poker matches.',
                    'Denies breaking any doors or entering the poolroom.',
                    'Admitted he drinks wine but bought his own bottle earlier from a package store.',
                    'Maintains he walked past the poolroom but never stepped inside.'
                ],
                statement: "I have lived a hard life but I am not a poolroom thief! I didn't break that window, and I didn't steal coins or wine. The money they found on me was my own pocket change won playing poker with friends. That kid Henry Cook is lying to protect his friends who actually broke in. I was just walking home in Panama City, and they locked me up without even giving me a lawyer the first time. This is a setup."
            }
        ],
        timeline: [
            {
                id: 1,
                type: 'filing',
                title: 'Bay Harbor Poolroom Break-In',
                date: '1961-06-03',
                description: 'Bay Harbor Poolroom in Panama City forced open. Jukebox smashed, beer and coins stolen.',
                tags: ['burglary', 'crime-scene'],
                pinned: true,
                attachments: []
            },
            {
                id: 2,
                type: 'evidence',
                title: 'Arrest of Gideon',
                date: '1961-06-04',
                description: 'Gideon arrested with coins, beer, and a bottle of wine in his pockets outside a local tavern.',
                tags: ['arrest', 'evidence'],
                pinned: false,
                attachments: [{ type: 'document', name: 'Arrest_Report.pdf' }]
            },
            {
                id: 3,
                type: 'ruling',
                title: 'First Trial & Conviction',
                date: '1961-08-25',
                description: 'Gideon convicted to 5 years in prison after being denied a Court-appointed lawyer.',
                tags: ['trial', 'sentence'],
                pinned: false,
                attachments: []
            },
            {
                id: 4,
                type: 'ruling',
                title: 'Gideon v. Wainwright Precedent',
                date: '1963-03-18',
                description: 'US Supreme Court rules unanimously that states must provide counsel to defendants unable to afford attorneys.',
                tags: ['scotus', 'landmark'],
                pinned: true,
                attachments: [{ type: 'pdf', name: 'SCOTUS_Opinion_372_US_335.pdf' }]
            },
            {
                id: 5,
                type: 'motion',
                title: 'Fred Turner Retrial Begins',
                date: '1963-08-05',
                description: 'Retrial begins in Florida with local attorney Fred Turner stepping in to defend Gideon.',
                tags: ['hearing', 'defense'],
                pinned: false,
                attachments: [{ type: 'document', name: 'Fred_Turner_Defense_Brief.pdf' }]
            }
        ]
    },
    simpson: {
        id: 'simpson',
        title: "State of California v. Orenthal James Simpson",
        defendant: "O. J. Simpson",
        charge: "Double Counts of First-Degree Murder",
        location: "Los Angeles County Superior Court",
        day: 1,
        totalDays: 5,
        trialYear: "1995 (Trial of the Century)",
        description: {
            defense: "Challenge LAPD Detective Mark Fuhrman's racist history and potential planting of the bloody glove. Emphasize contaminated DNA collecting protocols and the EDTA preservative.",
            prosecution: "Prove O.J. Simpson murdered his ex-wife Nicole Brown and Ron Goldman. Rely on DNA blood trail matches, matched hair fibers, and Simpson's lack of alibi during the crucial murder hours."
        },
        judgeName: "Judge Lance Ito",
        mentorName: "Co-Counsel Johnnie Cochran",
        opposingName: {
            defense: "Lead Prosecutor Marcia Clark",
            prosecution: "Lead Defense Atty Johnnie Cochran"
        },
        opposingInstruction: {
            defense: "You are Prosecutor Marcia Clark. Focus on the absolute scientific certainty of the DNA evidence. Call out the defense's wild conspiracy theories about LAPD conspiracies as highly offensive.",
            prosecution: "You are Defense Attorney Johnnie Cochran. Expose every tiny detail of LAPD bias, blood contamination, and the glove fit demonstration. Remember: 'If it does not fit, you must acquit!'"
        },
        advice: {
            defense: [
                "Impeach Detective Fuhrman about racial slurs on tape and climbing Simpson's fence illegally.",
                "Highlight Dr. Henry Lee's forensic finding of EDTA laboratory preservative on the gate blood swabs.",
                "Argue that the bloody glove was found warrantless and fit the defendant poorly under trial constraints."
            ],
            prosecution: [
                "Establish O.J. Simpson has no solid alibi between 10:00 PM and 10:55 PM.",
                "Focus on Allan Park's testimony of seeing no Bronco at Rockingham and ringing the empty bell.",
                "Highlight the blood trail in the Ford Bronco and Simpson's home pointing definitively to Bundy Drive."
            ]
        },
        witnesses: [
            {
                id: 'fuhrman',
                name: 'Detective Mark Fuhrman',
                role: 'Arresting Investigator',
                side: 'prosecution',
                description: 'LAPD detective who entered Simpson\'s home warrantless and claimed to have found the matching bloody glove.',
                personality: 'Steely, extremely defensive, speaks in polished police lingo, becomes hostile and tight-lipped if asked about racial slurs, previous tape interviews, or planting evidence.',
                facts: [
                    'Entered Simpson\'s estate by climbing the fence, claiming concerns for occupant safety.',
                    'Discovered a dark leather glove soaked in blood behind Simpson\'s guest house.',
                    'Witnessed blood traces inside the white Ford Bronco parked outside.',
                    'Exposed in tapes of uttering racial slurs and bragging about fabricating police evidence.'
                ],
                statement: "On June 13, 1994, I response to a murder call at Bundy Drive. Fearing for any occupants inside the Rockingham estate, I breached the perimeter fence. While canvassing the rear walkway, I located a dark, leather glove, saturated in what appeared to be human blood. It matched the glove recovered from the Bundy crime scene. Any accusation that I recovered this glove elsewhere or planted it is a malicious, fabricated lie to distract from the defendant's guilt."
            },
            {
                id: 'park',
                name: 'Allan Park',
                role: 'Limo Driver',
                side: 'neutral',
                description: 'Limo driver hired to transport Simpson to LAX. Maintained a clear view of the driveway.',
                personality: 'Nervous but honest. Speaks very carefully to avoid taking sides, wants to be exact on times.',
                facts: [
                    'Arrived at Rockingham at 10:22 PM. Did not see the White Bronco parked out front.',
                    'Rang the gate intercom multiple times starting at 10:40 PM but received no response.',
                    'Saw a tall, dark, 6-foot figure walk across the driveway into the house at 10:56 PM.',
                    'Simpson answered the door at 11:00 PM, sweating profusely and claimed he had overslept.'
                ],
                statement: "I was scheduled to pick up Mr. Simpson. I parked near the Rockingham gate at 10:22 PM. I did not observe any Ford Bronco parked on the street. I buzzed the intercom at least four times and nobody was home. Then, around 10:55 PM, I saw a tall figure wearing dark clothes walk quickly up the driveway and enter the house. Right after that, the house lights turned on and Mr. Simpson answered, saying he forgot the time."
            },
            {
                id: 'lee',
                name: 'Dr. Henry Lee',
                role: 'Renowned Forensic Expert',
                side: 'defense',
                description: 'Esteemed criminologist and forensic science expert witness.',
                personality: 'Highly academic, calm, analytical, uses dramatic visual gestures to explain laboratory testing errors.',
                facts: [
                    'Identified multiple bloodstains on the laboratory envelope that were cross-contaminated.',
                    'Observed that EDTA preservative was present in blood stains from the scene, implying it didn\'t come directly from a body.',
                    'Famously declared \'something is wrong\' with the LAPD\'s blood swabbing documentation.',
                    'Analyzed shoe prints that indicate a second assailant might have been present at the Bundy crime scene.'
                ],
                statement: "My laboratory review of the LAPD physical evidence collection was deeply concerning. The DNA swabs were handled with soiled gloves, leading to serious cross-contamination. More importantly, we detected chemical traces of EDTA, a synthetic preservative, on the gate blood swabs. This is chemistry, not opinion—this blood was collected in a vial before appearing on that gate. Something is wrong."
            }
        ],
        timeline: [
            {
                id: 1,
                type: 'evidence',
                title: 'Bundy Murder Scene Discovered',
                date: '1994-06-12',
                description: 'Bodies of Nicole Brown Simpson and Ronald Goldman discovered outside her Brentwood home.',
                tags: ['homicide', 'crime-scene'],
                pinned: true,
                attachments: []
            },
            {
                id: 2,
                type: 'motion',
                title: 'Warrantless Rockingham Search',
                date: '1994-06-13',
                description: 'Detectives climb fence at O.J. Simpson estate, claim search was an emergency to notify him of deaths.',
                tags: ['search', 'investigation'],
                pinned: false,
                attachments: [{ type: 'document', name: 'Detective_Logbook_Fuhrman.pdf' }]
            },
            {
                id: 3,
                type: 'hearing',
                title: 'The Bronco Slow-Speed Chase',
                date: '1994-06-17',
                description: 'Simpson fails to surrender, leads LAPD on low-speed chase in White Ford Bronco viewed by 95M live.',
                tags: ['arrest', 'bronco-chase'],
                pinned: true,
                attachments: []
            },
            {
                id: 4,
                type: 'plea',
                title: 'O.J. Pleads "100% Not Guilty"',
                date: '1994-07-22',
                description: 'Simpson enters formal plea of absolute absolute innocence before Judge Lance Ito.',
                tags: ['plea', 'courtroom'],
                pinned: false,
                attachments: []
            },
            {
                id: 5,
                type: 'evidence',
                title: 'The Glove Demonstration Disaster',
                date: '1995-06-15',
                description: 'Prosecution requests OJ try on the bloody leather gloves in front of jury; gloves appear extremely small and too tight.',
                tags: ['courtroom', 'exhibit'],
                pinned: true,
                attachments: [{ type: 'image', name: 'OJ_Trying_Glove.jpg' }]
            }
        ]
    },
    sheppard: {
        id: 'sheppard',
        title: "State of Ohio v. Samuel H. Sheppard",
        defendant: "Dr. Samuel Sheppard",
        charge: "Second-Degree Murder of Marilyn Sheppard",
        location: "Cuyahoga County Court, Cleveland, Ohio",
        day: 1,
        totalDays: 5,
        trialYear: "1954 (The Sheppard Murder Mystery)",
        description: {
            defense: "Argue the complete lack of a weapon, emphasize Sheppard's severe physical injuries from wrestling the intruder, and point to neighbor keys.",
            prosecution: "Expose Sheppard's marital disputes, argue his head/neck injuries were highly superficial, and show his 'bushy-haired intruder' alibi is physically impossible."
        },
        judgeName: "Judge Edward Blythin",
        mentorName: "Co-Counsel F. Lee Bailey",
        opposingName: {
            defense: "Prosecutor John T. Corrigan",
            prosecution: "Defense Attorney F. Lee Bailey"
        },
        opposingInstruction: {
            defense: "You are Lead Prosecutor John T. Corrigan. Point to Sheppard's ongoing marital disputes, his affair, and how the 'bushy haired intruder' alibi was cooked up after matching his wet clothes.",
            prosecution: "You are Defense Attorney F. Lee Bailey. Strike out any hearsay. Point out that there is zero physical murder weapon found on site, and criticize the complete lack of security around the beach."
        },
        advice: {
            defense: [
                "Establish that Sheppard suffered severe bone bruises on his cervical spine and concussive details.",
                "Emphasize that the neighboring Mayor Spencer Houk had keys to Sheppard's home and lived yards out.",
                "Expose that the Cuyahoga County officials did not search or cord off the shoreline footprints."
            ],
            prosecution: [
                "Argue Sheppard was wet and had sand on his trousers because he dumped the murder tool in the lake.",
                "Dwell heavily on Sheppard's secret romantic affair, establishing motive for ending his marriage.",
                "Reveal that while Marilyn was murdered upstairs in blood splatters, no lower doors suffered forced entry."
            ]
        },
        witnesses: [
            {
                id: 'shouk',
                name: 'Spencer Houk',
                role: 'Bay Village Mayor / Neighbor',
                side: 'prosecution',
                description: 'Bay Village Mayor and next-door neighbor. First citizen sheppard called after the murder.',
                personality: 'Assertive, protective of his political reputation, acts as a community father figure, becomes evasive if asked about having keys to the Sheppard home or his own relationship with Marilyn.',
                facts: [
                    'Received a frantic phone call from Sheppard at 5:45 AM: "For Gods sake, Spencer, come over".',
                    'Discovered Marilyn Sheppard\'s bedroom in a state of high disarray, blood everywhere.',
                    'Noticed Sheppard\'s trousers were wet, suggesting he stood in Lake Erie.',
                    'Admitted under cross-examination that he had keys to Sheppard\'s home and frequently visited.'
                ],
                statement: "On July 4, 1954, Sam called me screaming to come over immediately. My wife and I ran to his house. We found Sam sitting in an armchair, visibly injured, holding his neck. I went upstairs and found Marilyn dead. He claimed a bushy-haired man beat her and knocked him out. I must admit Sam looked dazed, but I couldn't understand why he waited so long to call me if Marilyn was screaming for her life."
            },
            {
                id: 'adler',
                name: 'Officer Fred Adler',
                role: 'Bay Village Patrolman',
                side: 'neutral',
                description: 'First arriving patrolman who canvassed the crime scene.',
                personality: 'Dry, meticulous, strictly reports physical observations, ignores gossip.',
                facts: [
                    'Found no signs of forced entry on any windows or doors.',
                    'Recovered Sheppard\'s wallet and medical bag sitting undisturbed on the counter.',
                    'Observed Sam Sheppard had a severe spinal fracture and collarbone bruising, which is hard to fake.',
                    'Did not block off access to the sandy beach or secure the lower staircase footprints.'
                ],
                statement: "Upon arriving, I secured the immediate room. I noticed that while Marilyn\'s bedroom was completely covered in blood splatters, the lower floor showed virtually no signs of struggle. Dr. Sheppard\'s leather medical bag and gold watches were untouched on the desk. This did not look like as a standard robbery. I did note Sam Sheppard had severe bruising on his neck, but we did not obtain specialized medical records at that hour."
            },
            {
                id: 'sheppard_witness',
                name: 'Dr. Sam Sheppard',
                role: 'The Defendant',
                side: 'defense',
                description: 'Prominent neurosurgeon accused of murdering his pregnant wife.',
                personality: 'Desperate, articulate, deeply traumatized, breaks down when speaking of his wife Marilyn, gets angry at the sensational media reports calling him an adulterer.',
                facts: [
                    'I fell asleep on the downstairs daybed after a long day of surgeries.',
                    'Woke up to Marilyn crying out, ran upstairs, saw a dark figure over her bed.',
                    'Fought a tall, bushy-haired man in the dark hallway, was struck on back of neck.',
                    'Chased the intruder to the beach, wrestled him in the surf, and was knocked unconscious again.'
                ],
                statement: "I did not kill Marilyn! I was fast asleep on the daybed downstairs. I heard Marilyn scream my name. I charged up those stairs. In the dim light, I saw a shadowy form with bushy hair standing over Marilyn. Before I could act, he hit me with great power from behind, and my neck snapped. When I woke up, I chased him out to the lake shore, tackled him in the water, but he was too strong and choked me until I blacked out. They are trying to crucify me in the newspapers."
            }
        ],
        timeline: [
            {
                id: 1,
                type: 'evidence',
                title: 'Tragedy in Marilyn\'s Room',
                date: '1954-07-04',
                description: 'Marilyn Sheppard found beaten to death in lakefront home. Husband claims physical intruder alibi.',
                tags: ['crime', 'death'],
                pinned: true,
                attachments: []
            },
            {
                id: 2,
                type: 'hearing',
                title: 'Coroner\'s Inquest in Gym',
                date: '1954-07-30',
                description: 'Crowd fills school gym for inquest. News media demands trial, defense attorney banned from asking questions.',
                tags: ['media-circus', 'hearing'],
                pinned: false,
                attachments: [{ type: 'document', name: 'Inquest_Transcript.pdf' }]
            },
            {
                id: 3,
                type: 'ruling',
                title: 'First Trial Shock Verdict',
                date: '1954-12-21',
                description: 'Dr. Sheppard is convicted of second-degree murder, and sentenced to life imprisonment amid relentless publicity.',
                tags: ['verdict', 'imprisonment'],
                pinned: false,
                attachments: []
            },
            {
                id: 4,
                type: 'ruling',
                title: 'Sheppard v. Maxwell SCOTUS Ruling',
                date: '1966-06-06',
                description: 'US Supreme Court strikes down conviction, ruling the massive carnival media atmosphere deprived the doctor of a fair trial.',
                tags: ['scotus', 'precedent'],
                pinned: true,
                attachments: [{ type: 'pdf', name: 'Sheppard_Maxwell_Decision.pdf' }]
            },
            {
                id: 5,
                type: 'hearing',
                title: 'F. Lee Bailey Retrial Acquittal',
                date: '1966-11-16',
                description: 'Represented by lawyer F. Lee Bailey, Sam Sheppard is found not guilty on all charges.',
                tags: ['retrial', 'acquitted'],
                pinned: true,
                attachments: []
            }
        ]
    },
    alex: {
        id: 'alex',
        title: "State vs. Alex Henderson",
        defendant: "Alex Henderson",
        charge: "Second-Degree Burglary",
        location: "Superior Court, Los Angeles",
        day: 1,
        totalDays: 5,
        trialYear: "2025 (Fictional Training Scenario)",
        description: {
            defense: "The prosecution alleges your client broke into a residential property on March 15th. You must cast doubt on the evidence and protect your client's rights.",
            prosecution: "The defendant, Alex Henderson, was apprehended near a burglary scene. You must prove guilt beyond a reasonable doubt using forensic evidence and witness testimony."
        },
        judgeName: "Judge Morrison",
        mentorName: "Co-Counsel Sarah",
        opposingName: {
            defense: "Prosecutor Vance",
            prosecution: "Defense Attorney Stone"
        },
        opposingInstruction: {
            defense: "You are Prosecutor Vance. Your goal is to convict Henderson. You believe the 'jogging' alibi is a lie. When it is your turn, ask about the 'Dark Hoodie' and the 'Flight'.",
            prosecution: "You are Defense Attorney Stone. Your goal is reasonable doubt. You will object to everything. Frame your client as a victim of circumstance."
        },
        advice: {
            defense: [
                "Focus on the lack of physical evidence (no jewelry found).",
                "Attack the identification (it was dark, witness wears glasses).",
                "Suggest objecting to 'Speculation' if the officer guesses intent."
            ],
            prosecution: [
                "Focus on the flight risk (he ran).",
                "Establish the timeline (he was there at 2:14 AM).",
                "Don't let the defense confuse the witness."
            ]
        },
        witnesses: [
            {
                id: 'miller',
                name: 'Officer Miller',
                role: 'Arresting Officer',
                side: 'prosecution',
                description: 'Veteran patrol officer who made the arrest. Reliable but defensive about protocol.',
                personality: 'Professional, slightly impatient, sticks strictly to the police report. Dislikes being questioned on specifics he didn\'t write down.',
                facts: [
                    'Responded to silent alarm at 2:14 AM.',
                    'Found suspect 2 blocks away wearing dark hoodie.',
                    'Did not find stolen jewelry on suspect.',
                    'Suspect was out of breath when stopped.'
                ],
                statement: "On March 15th, at approximately 02:14 hours, I responded to a silent alarm at 424 Maple Drive. Upon arrival, I canvassed the perimeter. At 02:19 hours, I observed a male subject, later identified as Alex Henderson, jogging approximately two blocks south of the location. The subject was wearing a dark hooded sweatshirt matching the description given by the dispatcher. When I approached, the subject appeared visibly nervous and out of breath. I detained him for questioning. A pat-down search revealed no weapons or contraband. The subject claimed he was 'just jogging'. No stolen property was recovered from his person at that time."
            },
            {
                id: 'sarah',
                name: 'Sarah Jenkins',
                role: 'Eyewitness / Neighbor',
                side: 'neutral',
                description: 'Lives across the street. Called 911. Older, wears glasses.',
                personality: 'Nervous, tries to be helpful, easily confused by specific details. Gets flustered if pressed on her vision.',
                facts: [
                    'Saw a "shadowy figure" break the window.',
                    'Claims figure was "tall" (Defendant is average height).',
                    'Was not wearing glasses at the time of observation.',
                    'Heard glass breaking at 2:10 AM.'
                ],
                statement: "I was watching TV when I heard a loud crash from the house across the street. I looked out my window and saw a person in the driveway. It was very dark, but I saw a shadowy figure near the side window. They looked tall. I'd say maybe 6 foot? They were definitely wearing something dark. I called 911 immediately. I was so scared. I didn't see their face clearly, but I'm sure it was a man."
            },
            {
                id: 'alex_defendant',
                name: 'Alex Henderson',
                role: 'Defendant',
                side: 'defense',
                description: 'The accused. 24 years old, prior misdemeanor for shoplifting.',
                personality: 'Anxious, desperate to prove innocence, speaks quickly. Gets angry when accused of lying.',
                facts: [
                    'Claims he was jogging at night (insomnia).',
                    'Denies entering the house.',
                    'Ran because he saw police and got scared due to prior record.',
                    'Was wearing a hoodie because it was cold.'
                ],
                statement: "I didn't do it! I have insomnia, okay? I go for runs at night to clear my head. I was just running down Maple because it's flat. Yeah, I saw the cop car and I panicked. I have a prior record for shoplifting when I was 18, and I know how this looks. But I didn't break into any house. I don't even own a crowbar. I was just running. That's why I was out of breath!"
            }
        ],
        timeline: [
            {
                id: 1,
                type: 'filing',
                title: 'Case Filed',
                date: '2025-03-16',
                description: 'Criminal complaint filed against Alex Henderson for second-degree burglary.',
                tags: ['criminal', 'filing'],
                pinned: false,
                attachments: []
            },
            {
                id: 2,
                type: 'evidence',
                title: 'Witness Statement: Officer Miller',
                date: '2025-03-16',
                description: 'Official police report and affidavit from the arresting officer.',
                tags: ['police', 'report'],
                pinned: false,
                attachments: [{ type: 'document', name: 'Miller_Report.pdf' }]
            },
            {
                id: 3,
                type: 'evidence',
                title: 'Witness Statement: Sarah Jenkins',
                date: '2025-03-17',
                description: 'Transcript of 911 call and subsequent interview with neighbor.',
                tags: ['witness', 'testimony'],
                pinned: false,
                attachments: [{ type: 'document', name: 'Jenkins_Transcript.pdf' }]
            },
            {
                id: 4,
                type: 'motion',
                title: 'Motion to Suppress',
                date: '2025-03-20',
                description: 'Defense filed motion to suppress physical evidence obtained during warrantless search.',
                tags: ['motion', '4th-amendment'],
                pinned: false,
                attachments: [{ type: 'pdf', name: 'Motion.pdf' }],
                aiChain: [
                    { step: 'Analysis', detail: 'Motion challenges search warrant validity' },
                    { step: 'Precedent', detail: 'Terry v. Ohio applied' },
                    { step: 'Prediction', detail: '35% chance of success' }
                ]
            },
            {
                id: 5,
                type: 'hearing',
                title: 'Preliminary Hearing',
                date: '2025-03-25',
                description: 'Judge found probable cause to proceed to trial. Motion to suppress denied.',
                tags: ['hearing', 'ruling'],
                pinned: false,
                attachments: []
            },
            {
                id: 6,
                type: 'evidence',
                title: 'Discovery Complete',
                date: '2025-04-02',
                description: 'All evidence exchanged. Prosecution disclosed witness list and forensic reports.',
                tags: ['discovery', 'evidence'],
                pinned: true,
                attachments: [
                    { type: 'image', name: 'Crime_Scene.jpg' },
                    { type: 'pdf', name: 'Forensics.pdf' }
                ]
            }
        ]
    }
};

export const getCaseDetails = (caseId: string, side: UserRole): CaseDetails => {
    const activeCase = CASE_ARCHIVES[caseId] || CASE_ARCHIVES['gideon'];
    return {
        title: activeCase.title,
        defendant: activeCase.defendant,
        charge: activeCase.charge,
        role: side === 'defense' ? "Defense Attorney" : "Lead Prosecutor",
        userSide: side,
        location: activeCase.location,
        day: activeCase.day,
        totalDays: activeCase.totalDays,
        description: side === 'defense' ? activeCase.description.defense : activeCase.description.prosecution
    };
};

export const getWitnessData = (caseId: string): Witness[] => {
    return CASE_ARCHIVES[caseId]?.witnesses || CASE_ARCHIVES['gideon'].witnesses;
};

export const getTimelineData = (caseId: string): TimelineEvent[] => {
    return CASE_ARCHIVES[caseId]?.timeline || CASE_ARCHIVES['gideon'].timeline;
};

export const WITNESS_DATA: Witness[] = CASE_ARCHIVES['gideon'].witnesses;
export const TIMELINE_DATA: TimelineEvent[] = CASE_ARCHIVES['gideon'].timeline;

export const INITIAL_METRICS: CaseMetrics = {
    caseStrength: 50,
    jurySentiment: 50,
    evidenceScore: 50
};

export const getAgentPersona = (role: AgentRole, userSide: UserRole, context?: any, caseId: string = 'gideon') => {
    const activeCase = CASE_ARCHIVES[caseId] || CASE_ARCHIVES['gideon'];

    if (role === 'witness' && context) {
        const w = context as Witness;
        const isHostile = (userSide === 'defense' && w.side === 'prosecution') || (userSide === 'prosecution' && w.side === 'defense');
        
        return {
            name: w.name,
            instruction: `You are acting as ${w.name}, a witness in the trial "${activeCase.title}".
            
            YOUR PROFILE:
            - Role: ${w.role}
            - Personality: ${w.personality}
            - Stance: ${isHostile ? 'You are defensive and suspicious of the attorney.' : 'You are cooperative and open.'}
            
            YOUR KNOWLEDGE BASE (These are facts):
            ${w.facts.map(f => `- ${f}`).join('\n')}
            
            YOUR OFFICIAL STATEMENT (Do not contradict this unless pressured to admit a mistake):
            "${w.statement}"
            
            INTERACTION RULES:
            1. Answer the attorney's questions based ONLY on your knowledge base and statement.
            2. If asked about something not in your facts, say "I don't recall" or "I don't know".
            3. If the attorney points out a contradiction between your statement and facts, react according to your personality (get angry, get confused, or apologize).
            4. Keep answers relatively short (under 50 words) like a real court testimony.
            5. Do NOT break character.`
        };
    }

    const name = role === 'judge' ? activeCase.judgeName
               : role === 'mentor' ? activeCase.mentorName
               : role === 'opposing' ? (userSide === 'defense' ? activeCase.opposingName.defense : activeCase.opposingName.prosecution)
               : role === 'clerk' ? "Court Clerk"
               : role === 'jury' ? "Jury Foreperson"
               : "Witness";

    const baseInstruction = role === 'judge' 
        ? `You are ${activeCase.judgeName}, presiding over "${activeCase.title}".
            The user is the ${userSide === 'defense' ? 'Defense Attorney' : 'Prosecutor'}.
            
            LEGAL STANDARD:
            - This is a criminal trial. Burden of proof: Beyond a reasonable doubt.
            - Rules of Evidence apply.
            
            BEHAVIOR:
            - If the user makes a valid objection (Hearsay, Speculation, Relevance), say "Sustained".
            - If the objection is weak, say "Overruled".
            - Be stern. Do not tolerate rambling.
            - Occasionally interject if the lawyer is badgering the witness.`
        : role === 'clerk'
        ? `You are the Court Clerk. Explain simulation mechanics to the ${userSide === 'defense' ? 'Defense Counsel' : 'Prosecutor'}. Be robotic and helpful.`
        : role === 'jury'
        ? `You represent the collective consciousness of the 12 jurors in the trial "${activeCase.title}".
            
            CURRENT SENTIMENT:
            - Analyze the last exchange. Did the ${userSide === 'defense' ? 'Defense' : 'Prosecution'} score a point?
            - If the lawyer was confusing or aggressive, you dislike them.
            - If the lawyer revealed a contradiction, you are impressed.
            - Output inner monologue format: "(Thinking) ..."`
        : role === 'mentor'
        ? `You are ${activeCase.mentorName}. Proactively give strategic legal advice to the user who is acting as the ${userSide === 'defense' ? 'Defense Attorney' : 'Lead Prosecutor'}.
           Advice points:
           ${(userSide === 'defense' ? activeCase.advice.defense : activeCase.advice.prosecution).map(a => `- ${a}`).join('\n')}`
        : role === 'opposing'
        ? `You are ${userSide === 'defense' ? activeCase.opposingName.defense : activeCase.opposingName.prosecution}, the opposing attorney in the trial.
           ${userSide === 'defense' ? activeCase.opposingInstruction.defense : activeCase.opposingInstruction.prosecution}
           - React dynamically to the user's statements and examine the witnesses with high litigation skill.`
        : "You are a witness on the stand. Answer truthfully but briefly.";

    return {
        name,
        instruction: baseInstruction
    };
};

export const PROMPT_TEMPLATES: PromptCategory[] = [
    {
        id: 'cross',
        title: 'Cross-Exam',
        icon: Users,
        templates: [
            { id: 'cross-identify', label: 'Identify Defendant', text: 'Looking around the courtroom, do you see the person you described?', description: 'Establish identity.' },
            { id: 'cross-certainty', label: 'Certainty Check', text: 'On a scale of 1 to 10, how certain are you of that fact?', description: 'Test witness confidence.' },
            { id: 'cross-bias', label: 'Expose Bias', text: 'Isn\'t it true that you have a prior relationship with the defendant?', description: 'Challenge neutrality.' },
        ]
    },
    {
        id: 'strategy',
        title: 'Case Strategy',
        icon: Target,
        templates: [
            { id: 'strat-suppress', label: 'Suppress Evidence', text: 'Your Honor, the defense moves to suppress the key evidence as fruit of an unlawful search.', description: 'Challenge the physical evidence search warrant.' },
            { id: 'strat-alibi', label: 'Assert Alibi', text: 'Mr. Defendant, please describe to the court your exact whereabouts during these hours.', description: 'Establish the alibi.' },
            { id: 'strat-vision', label: 'Challenge Vision', text: 'Witness, were you wearing your prescription lenses or glasses at that late hour?', description: 'Attack eyewitness reliability.' },
        ]
    },
    {
        id: 'objection',
        title: 'Objections',
        icon: ShieldAlert,
        templates: [
            { id: 'obj-relevance', label: 'Relevance', text: 'Objection, Your Honor. Relevance. This line of questioning has no bearing on the charges.', description: 'Use when testimony is off-topic.' },
            { id: 'obj-hearsay', label: 'Hearsay', text: 'Objection, Your Honor. Hearsay. The witness is testifying to an out-of-court statement.', description: 'Use when witness repeats what others said.' },
            { id: 'obj-speculation', label: 'Speculation', text: 'Objection. Calls for speculation. The witness lacks personal knowledge.', description: 'Use when witness guesses.' },
            { id: 'obj-foundation', label: 'Lack of Foundation', text: 'Objection. Counsel has not established a foundation for this exhibit.', description: 'Use before evidence is admitted.' },
        ]
    },
    {
        id: 'procedure',
        title: 'Procedure',
        icon: Gavel,
        templates: [
            { id: 'proc-strike', label: 'Motion to Strike', text: 'Your Honor, I move to strike the last response from the record.', description: 'Remove improper testimony.' },
            { id: 'proc-dismiss', label: 'Motion to Dismiss', text: 'Your Honor, the defense moves to dismiss all charges due to lack of evidence.', description: 'End the case early.' },
            { id: 'proc-approach', label: 'Sidebar', text: 'May we approach the bench, Your Honor?', description: 'Private conference with Judge.' },
        ]
    },
    {
        id: 'examination',
        title: 'Examination',
        icon: Mic2,
        templates: [
            { id: 'exam-impeach', label: 'Impeach Witness', text: 'Is it true that you previously stated specifically the opposite in your official statements?', description: 'Attack witness credibility.' },
            { id: 'exam-clarify', label: 'Clarify', text: 'Let me rephrase the question to be more precise.', description: 'Recover from an objection.' },
            { id: 'exam-refresh', label: 'Refresh Recollection', text: 'May I approach the witness to refresh their recollection with the official reports?', description: 'When witness forgets facts.' },
        ]
    }
];
