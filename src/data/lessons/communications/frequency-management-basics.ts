import { Lesson } from '@/types';

export const frequencyManagementBasics: Lesson = {
  id: 'frequency-management-basics',
  topicId: 'frequency-management',
  title: 'Frequency Management',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Frequency Management',
    },
    {
      type: 'paragraph',
      text: 'Aviation communication relies on a structured system of VHF radio frequencies, each assigned a specific purpose. Knowing which frequency to use, when to change, and how to manage your radio is fundamental to safe and efficient flight operations.',
    },
    {
      type: 'paragraph',
      text: 'Poor frequency management leads to missed calls, airspace infringements, and loss of situational awareness. This lesson covers the VHF communication band, the types of ATC service available, key UK frequencies, and the procedures for changing frequencies and obtaining information.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The VHF Communication Band',
    },
    {
      type: 'paragraph',
      text: 'Aeronautical VHF communications use the frequency range 118.000 MHz to 136.975 MHz. This band is divided into discrete channels that are assigned to specific services and aerodromes.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Channel spacing in Europe is 8.33 kHz, which provides more available frequencies than the older 25 kHz spacing.',
        '8.33 kHz radios display six digits after the decimal point (e.g., 124.750 appears as 124.755 on an 8.33 kHz radio, or sometimes as 124.750 depending on the avionics).',
        'All aircraft operating in UK airspace must be equipped with 8.33 kHz capable radios. Older 25 kHz radios are no longer sufficient for most operations.',
        'VHF radio is essentially line-of-sight. Range increases with altitude. At low level, expect a range of roughly 30-50 nautical miles; at higher altitudes, significantly more.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Since 2018, 8.33 kHz channel spacing has been mandatory for all aircraft operating in UK and European airspace. Ensure your aircraft radio is 8.33 kHz capable before flight.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Types of ATC and Air Traffic Service',
    },
    {
      type: 'paragraph',
      text: 'Different frequencies provide different types of service. Understanding what each service offers helps you use the correct frequency for your needs:',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Aerodrome Services',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Tower (TWR) - Controls traffic on the runway and in the aerodrome traffic zone (ATZ). Provides takeoff and landing clearances. Callsign suffix: "Tower" (e.g., "Oxford Tower").',
        'Ground (GND) - Controls traffic on the taxiways and apron. Used for taxi instructions and pushback clearances at busier aerodromes. Callsign suffix: "Ground" (e.g., "Heathrow Ground").',
        'Approach (APP) - Provides approach control services for arriving and departing traffic in the vicinity of the aerodrome. Callsign suffix: "Approach" (e.g., "Bristol Approach").',
        'ATIS (Automatic Terminal Information Service) - A continuous broadcast of recorded aerodrome information including weather, runway in use, and NOTAMs. Each update is identified by a letter (Alpha, Bravo, Charlie, etc., cycling through the alphabet).',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'En-Route and Area Services',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Flight Information Service (FIS) - Provides information useful for the safe conduct of flight (traffic information, weather updates), but does not issue clearances or instructions. Callsign suffix: "Information" (e.g., "London Information").',
        'Radar - Provides radar-based services including Traffic Service and Deconfliction Service. Callsign suffix: "Radar" (e.g., "Farnborough Radar").',
        'Area Control (ACC) - Controls IFR traffic in en-route airspace. PPL pilots rarely interact with ACC directly but may do so when transiting controlled airspace.',
        'Director - Provides radar vectoring for the final approach sequence at busy aerodromes. Callsign suffix: "Director".',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Air/Ground and AFIS',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Air/Ground (A/G) - An operator at an aerodrome who provides traffic and weather information but cannot issue clearances or instructions. Callsign suffix: "Radio" (e.g., "Wellesbourne Radio").',
        'AFIS (Aerodrome Flight Information Service) - Similar to A/G but provided by a more qualified operator. Provides information about aerodrome traffic to assist pilot decision-making. Callsign suffix: "Information" (e.g., "Shoreham Information").',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The callsign suffix tells you the level of service. "Tower" and "Approach" can issue clearances. "Information" and "Radio" provide information only - the pilot remains responsible for separation.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'ATIS - Automatic Terminal Information Service',
    },
    {
      type: 'paragraph',
      text: 'ATIS is a pre-recorded message broadcast continuously on a dedicated frequency at busier aerodromes. It reduces radio workload on the tower and approach frequencies by providing routine information in advance.',
    },
    {
      type: 'paragraph',
      text: 'A typical ATIS broadcast includes:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Aerodrome name and information identifier (e.g., "Oxford Information Charlie").',
        'Time of observation.',
        'Runway in use and approach type expected.',
        'Surface wind direction and speed.',
        'Visibility and significant weather.',
        'Cloud base and amount.',
        'Temperature and dew point.',
        'QNH (altimeter setting).',
        'Any relevant NOTAMs or operational information.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Each new ATIS recording is assigned the next letter in the alphabet: Alpha, Bravo, Charlie, and so on, cycling back to Alpha after Zulu. When making your initial call to the aerodrome, state the ATIS designator you have received (e.g., "with information Charlie"). This confirms you are up to date.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Always listen to ATIS before contacting Tower or Approach. It saves radio time and ensures you have current aerodrome information. If the ATIS information changes while you are in the circuit, ATC will advise you.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Frequency Changes',
    },
    {
      type: 'paragraph',
      text: 'During a typical flight you will change frequency several times - from Ground to Tower to Approach to an en-route service and back again. Correct procedure for frequency changes ensures continuity of service:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'ATC instructs you to contact the next unit: "Golf Bravo TON, contact London Information, 124.750."',
        'Read back the frequency and your callsign: "124.750, Golf Bravo TON."',
        'Change to the new frequency.',
        'Make an initial call on the new frequency: "London Information, Golf Bravo Tango Oscar November, Cessna 172, 10 miles south of Oxford, 3,000 feet, VFR to Bournemouth, with information Delta."',
        'Wait for a response. If no response after a reasonable time, try again. If still no response, return to the previous frequency and advise.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always read back frequency changes. Selecting the wrong frequency can leave you out of contact with ATC. If you are unsure of a frequency, ask ATC to confirm.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Listening Watch',
    },
    {
      type: 'paragraph',
      text: 'When not actively communicating, maintain a listening watch on the assigned frequency. This means keeping the radio tuned and the volume set so that you can hear any calls addressed to you or relevant traffic information. If you need to temporarily leave the frequency (e.g., to listen to ATIS on the second radio), return promptly.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Key UK Frequencies',
    },
    {
      type: 'paragraph',
      text: 'Several frequencies are important for PPL pilots to know:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '121.500 MHz - International aeronautical emergency frequency (Distress & Diversion). Monitored by the D&D Cell at Swanwick. Use in any emergency or if lost.',
        '124.750 MHz - London Flight Information Service (London FIS). Provides flight information to VFR traffic in the London FIR. Useful for basic service and traffic information on cross-country flights.',
        '135.475 MHz - SAFETYCOM. Used at aerodromes that have no ATC, AFIS, or Air/Ground service (unattended aerodromes). Pilots self-announce their intentions to alert other traffic in the area.',
        '130.725 MHz - Scottish FIS. Provides flight information in the Scottish FIR.',
        'Specific aerodrome frequencies are published in the AIP, on aerodrome charts, and in flight guides (e.g., Pooleys).',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Three frequencies every PPL pilot should memorise: 121.500 (emergency), 124.750 (London FIS), and 135.475 (SAFETYCOM for unattended aerodromes).',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Using SAFETYCOM',
    },
    {
      type: 'paragraph',
      text: 'SAFETYCOM (135.475 MHz) is used at aerodromes with no radio service. Because multiple unattended aerodromes share this single frequency, discipline is essential:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Always state the aerodrome name in every transmission (e.g., "Enstone traffic, Golf Bravo TON, downwind left runway 26, Enstone").',
        'Make position reports at key circuit points: joining, downwind, final, and when vacating the runway.',
        'Keep transmissions brief - other aerodromes are sharing the same frequency.',
        'Listen out for other traffic at your aerodrome and at nearby aerodromes using the same frequency.',
        'SAFETYCOM does not provide any ATC service. You are entirely responsible for separation from other traffic.',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Distress and Diversion Cell (D&D)',
    },
    {
      type: 'paragraph',
      text: 'The Distress and Diversion Cell is based at the London Terminal Control Centre at Swanwick and operates 24 hours a day. It monitors 121.500 MHz and provides assistance to aircraft in emergency or difficulty.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Can provide radar identification and position information if you are lost.',
        'Can provide vectors to the nearest suitable aerodrome.',
        'Coordinates search and rescue (SAR) operations.',
        'Provides a Practice PAN service - you can call on 121.500 for a practice PAN to check the service works, prefixed with "Practice PAN".',
        'Do not hesitate to call D&D. They would rather help you early than coordinate a search later.',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The D&D Cell also provides a "Training Fix" service for student pilots practising emergency procedures. Contact them on 121.500 with "Practice PAN" to request a position fix without declaring an actual emergency.',
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
        'VHF aviation communications use 118.000-136.975 MHz with 8.33 kHz channel spacing.',
        'Know the difference between services: Tower/Approach can issue clearances; FIS/Radio provide information only.',
        'Listen to ATIS before contacting an aerodrome and quote the information designator on your initial call.',
        'Always read back frequency changes and maintain a listening watch on your assigned frequency.',
        'Key frequencies: 121.500 (emergency/D&D), 124.750 (London FIS), 135.475 (SAFETYCOM).',
        'Use SAFETYCOM at unattended aerodromes, always stating the aerodrome name in every transmission.',
      ],
    },
  ],
  keyPoints: [
    'VHF aviation band: 118.000-136.975 MHz with mandatory 8.33 kHz channel spacing',
    'Tower and Approach can issue clearances; FIS and Radio provide information only - the callsign suffix tells you the service level',
    'ATIS provides recorded aerodrome information identified by sequential letters (Alpha through Zulu)',
    'Always read back frequency changes and maintain a listening watch on your assigned frequency',
    'Key frequencies: 121.500 MHz (emergency), 124.750 MHz (London FIS), 135.475 MHz (SAFETYCOM)',
    'SAFETYCOM is shared by all unattended aerodromes - always include the aerodrome name in every call',
  ],
  practiceQuestions: [
    'com-011',
    'com-012',
  ],
};
