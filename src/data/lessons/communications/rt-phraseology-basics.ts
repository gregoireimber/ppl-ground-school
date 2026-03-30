import { Lesson } from '@/types';

export const rtPhraseologyBasics: Lesson = {
  id: 'rt-phraseology-basics',
  topicId: 'rt-phraseology',
  title: 'RT Phraseology - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to RT Procedures',
    },
    {
      type: 'paragraph',
      text: 'Radiotelephony (RT) procedures ensure clear, concise, and unambiguous communication between pilots and air traffic services. Standard phraseology reduces misunderstandings and improves safety.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'RT procedures are standardized internationally by ICAO, with UK-specific variations documented in CAP 413.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Phonetic Alphabet',
    },
    {
      type: 'paragraph',
      text: 'Aircraft registrations and critical information are spelled using the ICAO phonetic alphabet:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'A - Alpha, B - Bravo, C - Charlie, D - Delta, E - Echo, F - Foxtrot',
        'G - Golf, H - Hotel, I - India, J - Juliet, K - Kilo, L - Lima',
        'M - Mike, N - November, O - Oscar, P - Papa, Q - Quebec, R - Romeo',
        'S - Sierra, T - Tango, U - Uniform, V - Victor, W - Whiskey, X - X-ray',
        'Y - Yankee, Z - Zulu',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Example: G-BTON would be "Golf Bravo Tango Oscar November" on initial call, then "Golf Bravo TON" on subsequent calls.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Basic Call Structure',
    },
    {
      type: 'paragraph',
      text: 'All RT calls follow a standard structure: WHO you\'re calling, WHO you are, WHERE you are, and WHAT you want.',
    },
    {
      type: 'paragraph',
      text: 'Initial call example:',
    },
    {
      type: 'paragraph',
      text: '"Oxford Tower, Golf Alpha Bravo Charlie Delta, Cessna 152, at the hold Delta 1, ready for departure, VFR to the south, with information Charlie."',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'WHO calling: Oxford Tower',
        'WHO you are: Golf Alpha Bravo Charlie Delta (full callsign), Cessna 152 (aircraft type)',
        'WHERE: At the hold Delta 1',
        'WHAT: Ready for departure, VFR to the south, with information Charlie (ATIS)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Readback Requirements',
    },
    {
      type: 'paragraph',
      text: 'Certain instructions MUST be read back in full to confirm understanding. These include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Runway instructions (cleared to land, line up and wait, enter/cross runway)',
        'Clearances and conditional clearances',
        'Altimeter settings (QNH, QFE)',
        'SSR codes (squawk)',
        'Heading and speed instructions',
        'Level instructions (altitudes)',
        'Radio frequency changes',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always read back runway identifiers. Entering the wrong runway is a serious safety incident.',
    },
    {
      type: 'paragraph',
      text: 'Example readback: "Cleared to land runway 20, QNH 1013, Golf Bravo TON."',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Standard Words and Phrases',
    },
    {
      type: 'paragraph',
      text: 'Learn these standard words for effective communication:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'AFFIRM - Yes',
        'NEGATIVE - No',
        'ROGER - I have received all of your last transmission',
        'WILCO - I understand your message and will comply',
        'SAY AGAIN - Repeat your transmission',
        'CORRECTION - An error has been made, the correct version is...',
        'DISREGARD - Ignore that transmission',
        'STANDBY - Wait and I will call you',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Avoid using "Roger Wilco" - it\'s redundant. Use one or the other, not both.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Transmitting Technique',
    },
    {
      type: 'paragraph',
      text: 'Good radio technique improves clarity:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Think before you transmit - know what you\'re going to say',
        'Press the transmit button, pause briefly, then speak',
        'Speak clearly and at a moderate pace',
        'Keep transmissions concise and relevant',
        'Listen out before transmitting - don\'t block others',
        'Use standard phraseology, not plain language',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Numbers are spoken as individual digits, except whole hundreds and thousands: "Flight level one eight zero" (18,000 ft), "Runway two seven" (runway 27).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Key Takeaways',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Use ICAO phonetic alphabet for callsigns and critical information',
        'Call structure: WHO you\'re calling, WHO you are, WHERE, WHAT',
        'Always read back runway instructions, levels, headings, frequencies',
        'Use standard phraseology for clarity',
        'Think before transmitting, keep calls concise',
      ],
    },
  ],
  keyPoints: [
    'Standard phraseology reduces misunderstandings',
    'Spell callsigns using phonetic alphabet on initial contact',
    'Call structure: WHO calling, WHO you are, WHERE, WHAT',
    'Read back runway instructions, levels, headings, QNH, frequencies',
    'AFFIRM = yes, NEGATIVE = no, ROGER = received',
  ],
  practiceQuestions: [
    'com-001',
    'com-002',
    'com-003',
    'com-004',
  ],
};
