import { Lesson } from '@/types';

export const emergencyCommunicationsBasics: Lesson = {
  id: 'emergency-communications-basics',
  topicId: 'emergency-communications',
  title: 'Emergency Communications',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Emergency Communications',
    },
    {
      type: 'paragraph',
      text: 'When an emergency occurs in flight, effective communication with air traffic services can make the difference between a safe outcome and a tragedy. Knowing exactly what to say, on which frequency, and in what order allows you to get help quickly while keeping your attention on flying the aircraft.',
    },
    {
      type: 'paragraph',
      text: 'Emergency communications are governed by ICAO procedures and documented in CAP 413 (Radiotelephony Manual). There are two levels of emergency: Distress and Urgency. This lesson covers the format, use, and procedures for both, along with transponder codes and radio failure actions.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Remember the golden rule: Aviate, Navigate, Communicate. Never sacrifice control of the aircraft to make a radio call. Fly the aircraft first, then communicate when able.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Distress - MAYDAY',
    },
    {
      type: 'heading',
      level: 2,
      text: 'When to Use MAYDAY',
    },
    {
      type: 'paragraph',
      text: 'A MAYDAY call is made when the aircraft or any person on board is in grave and imminent danger and requires immediate assistance. This is the highest priority communication in aviation and takes precedence over all other traffic.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Engine failure or fire in flight.',
        'Structural failure or severe damage.',
        'Incapacitation of the pilot (if a passenger can communicate).',
        'Forced landing is imminent.',
        'Any situation where the safety of the aircraft or persons is in immediate jeopardy.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'MAYDAY Call Format',
    },
    {
      type: 'paragraph',
      text: 'The distress call follows a specific format. Transmit on the frequency you are currently working, or on 121.500 MHz if you are not in contact with any station:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '"MAYDAY MAYDAY MAYDAY" - Spoken three times.',
        'Station addressed (e.g., "London Information") or "All Stations" if not in contact with anyone.',
        'Your callsign - spoken three times (e.g., "Golf Alpha Bravo Charlie Delta, Golf Alpha Bravo Charlie Delta, Golf Alpha Bravo Charlie Delta").',
        'Nature of the emergency (e.g., "engine failure").',
        'Your intentions (e.g., "forced landing south of Abingdon").',
        'Present position, altitude/flight level, and heading.',
        'Pilot qualification if relevant (e.g., "student pilot").',
        'Number of persons on board (POB).',
        'Any other useful information (e.g., fuel remaining, aircraft colour).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Example: "MAYDAY MAYDAY MAYDAY, Scottish Information, Golf Bravo Charlie Delta Echo, Golf Bravo Charlie Delta Echo, Golf Bravo Charlie Delta Echo, engine failure, forced landing 5 miles south of Perth, 2,000 feet descending, heading 180, student pilot, 2 persons on board, 30 minutes fuel remaining, white Cessna 172."',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'In a genuine emergency you do not need to remember the exact format perfectly. The key information is: who you are, what has happened, where you are, and what you intend to do. Any MAYDAY call is better than no call at all.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'MAYDAY Relay',
    },
    {
      type: 'paragraph',
      text: 'If you hear another aircraft transmit a MAYDAY and believe the distress message has not been received by a ground station, you should relay the message on behalf of the distressed aircraft:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '"MAYDAY RELAY, MAYDAY RELAY, MAYDAY RELAY."',
        'Station addressed.',
        'Your callsign.',
        '"Relaying MAYDAY from [distressed aircraft callsign]."',
        'Repeat the distress message as accurately as possible.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Cancelling a MAYDAY',
    },
    {
      type: 'paragraph',
      text: 'If the emergency condition is resolved (for example, an engine restarts), the pilot in command should cancel the MAYDAY:',
    },
    {
      type: 'paragraph',
      text: '"MAYDAY, [station addressed], [your callsign], cancel distress, [brief reason], [current position and intentions]." Only the aircraft in distress (or the authority coordinating the emergency) can cancel a MAYDAY.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Urgency - PAN PAN',
    },
    {
      type: 'heading',
      level: 2,
      text: 'When to Use PAN PAN',
    },
    {
      type: 'paragraph',
      text: 'A PAN PAN call is made when there is an urgent condition concerning the safety of the aircraft or persons on board, but immediate assistance is not required. The situation is serious but not yet life-threatening.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Unsure of position (temporarily lost).',
        'Low fuel situation (but not yet critical).',
        'Partial system failure (e.g., partial electrical failure, instrument malfunction).',
        'Passenger medical emergency requiring priority landing.',
        'Deteriorating weather requiring diversion assistance.',
        'Pilot feeling unwell but still able to fly the aircraft.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'PAN PAN Call Format',
    },
    {
      type: 'paragraph',
      text: 'The urgency call follows a similar format to the distress call:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '"PAN PAN, PAN PAN, PAN PAN" - Spoken three times.',
        'Station addressed.',
        'Your callsign.',
        'Nature of the urgency.',
        'Your intentions.',
        'Present position, altitude, and heading.',
        'Any other useful information.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Example: "PAN PAN, PAN PAN, PAN PAN, London Information, Golf Bravo Tango Oscar November, uncertain of position, request bearing, last known position 10 miles west of Brize Norton, 3,000 feet, heading 090, 1 hour fuel remaining."',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'A PAN PAN has priority over all communications except a MAYDAY. If your urgency situation worsens to become a grave and imminent danger, upgrade to a MAYDAY immediately.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The Emergency Frequency - 121.500 MHz',
    },
    {
      type: 'paragraph',
      text: 'The international aeronautical emergency frequency is 121.500 MHz. It is monitored by ATC units, military radar stations, and the Distress and Diversion (D&D) Cell at the London Terminal Control Centre.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Use 121.500 MHz if you are not already in contact with an ATC unit.',
        'D&D can provide emergency radar assistance, bearings (VDF), and coordinate search and rescue.',
        'Emergency Locator Transmitters (ELTs) transmit on 121.500 MHz and 406 MHz to alert satellite-based search and rescue systems.',
        'If you hear a MAYDAY on 121.500, maintain radio silence unless you can offer assistance.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'If in doubt, use 121.5. The D&D Cell exists specifically to help pilots in difficulty. Do not hesitate to call them - it is far better to ask for help early than to wait until the situation becomes critical.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Radio Failure Procedures',
    },
    {
      type: 'paragraph',
      text: 'If your radio fails in flight, follow these procedures:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Check the obvious - Ensure the volume is up, the correct frequency is selected, the headset is plugged in, and the audio panel is set correctly. Try the second radio if fitted.',
        'Set transponder to 7600 (radio failure code).',
        'Attempt blind transmissions on the current frequency - transmit your callsign, position, and intentions in case your receiver has failed but the transmitter still works.',
        'If unable to re-establish contact, try 121.500 MHz.',
        'Follow your last clearance if in controlled airspace. If VFR, leave controlled airspace by the most direct route and proceed to land at a suitable aerodrome.',
        'At the destination, watch for light signals from the tower (steady green = cleared to land, steady red = give way and continue circling, red flashes = aerodrome unsafe do not land, green flashes = return for landing).',
        'Acknowledge light signals by rocking your wings during the day or flashing your landing light at night.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Light signals from the tower: Steady green = cleared to land. Steady red = give way, continue circling. Red flashes = do not land, aerodrome unsafe. Green flashes = return for landing. White flashes = land at this aerodrome, proceed to apron.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Transponder Emergency Codes',
    },
    {
      type: 'paragraph',
      text: 'The transponder (SSR) has three dedicated emergency codes that alert ATC radar screens immediately:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '7700 - General emergency (distress). Set this when you declare a MAYDAY. It causes your radar return to flash or display prominently on ATC screens.',
        '7600 - Radio communication failure. Set this if you lose two-way radio communication. ATC will be aware you cannot hear them and will attempt to provide separation.',
        '7500 - Unlawful interference (hijack). Set this covertly if the aircraft is being unlawfully commandeered. ATC and security services will be alerted without any radio transmission being required.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for transponder codes: "75 - taken alive (hijack), 76 - radio needs a fix (comms failure), 77 - going to heaven (emergency)."',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never set 7500 accidentally. If ATC queries your squawk code and you are NOT being hijacked, respond immediately with your callsign and confirm you are not subject to unlawful interference. If you do not respond, an armed response may be initiated.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Practising Emergency Calls',
    },
    {
      type: 'paragraph',
      text: 'You should be able to make a MAYDAY or PAN PAN call without hesitation. Practice the format regularly so that in a real emergency the words come automatically. Many PPL practical exams include a simulated emergency call.',
    },
    {
      type: 'paragraph',
      text: 'A useful shorthand to remember the distress call content is the mnemonic:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'M - MAYDAY (three times)',
        'A - Addressee (station called)',
        'Y - Your callsign (three times)',
        'D - Description of emergency',
        'A - Action/intentions',
        'Y - Your position, altitude, heading',
        'P - Persons on board',
        'O - Other information',
        'B - (Boom!) - transmit and fly the aircraft!',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Key Takeaways',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'MAYDAY is for grave and imminent danger requiring immediate assistance; PAN PAN is for urgent situations not yet immediately dangerous.',
        'Both calls are spoken three times at the start of the transmission.',
        'Transmit on your current frequency first; use 121.500 MHz if not in contact with any station.',
        'Transponder emergency codes: 7700 (emergency), 7600 (radio failure), 7500 (hijack).',
        'For radio failure: squawk 7600, try blind transmissions, follow last clearance, watch for light signals.',
        'Practice emergency call formats regularly so they become instinctive.',
      ],
    },
  ],
  keyPoints: [
    'MAYDAY = grave and imminent danger; PAN PAN = urgency not yet immediately life-threatening',
    'Distress and urgency prefixes are each spoken three times at the start of the call',
    'Use 121.500 MHz (emergency frequency) if not already in contact with ATC',
    'Transponder codes: 7700 (emergency), 7600 (comms failure), 7500 (hijack)',
    'Radio failure: squawk 7600, blind transmissions, follow last clearance, watch for ATC light signals',
    'Aviate, Navigate, Communicate - never sacrifice aircraft control for a radio call',
  ],
  practiceQuestions: [
    'com-007',
    'com-008',
    'com-009',
    'com-010',
  ],
};
