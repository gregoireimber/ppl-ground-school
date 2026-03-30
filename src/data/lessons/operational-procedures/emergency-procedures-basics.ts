import { Lesson } from '@/types';

export const emergencyProceduresBasics: Lesson = {
  id: 'emergency-procedures-basics',
  topicId: 'emergency-procedures',
  title: 'Emergency Procedures - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Emergency Procedures',
    },
    {
      type: 'paragraph',
      text: 'Emergency procedures are systematic responses to abnormal situations that threaten the safety of the aircraft and its occupants. As a pilot, you must be prepared to handle emergencies calmly and effectively, following established procedures while exercising sound judgment.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'In any emergency, the priority is: Aviate, Navigate, Communicate - in that order. Never sacrifice control of the aircraft to make radio calls.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'ATSOCAS - Actions in the Event of Radio Failure',
    },
    {
      type: 'paragraph',
      text: 'If you experience radio failure in controlled airspace or when a radio is required, remember the mnemonic ATSOCAS:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Acknowledge failure by squawking 7600',
        'Transmit position and intentions blind on current frequency',
        'Squawk 7600 (set transponder)',
        'Operate as per flight plan or last clearance',
        'Continue to maintain VMC if VFR',
        'Avoid controlled airspace if practical',
        'Select 121.5 MHz and continue blind transmissions',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'ATSOCAS is a systematic procedure for radio failure. The key actions are squawking 7600, transmitting blind, and following your flight plan while avoiding controlled airspace if practical.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Distress and Urgency Communications',
    },
    {
      type: 'paragraph',
      text: 'There are two levels of emergency communication, each with specific phraseology:',
    },
    {
      type: 'paragraph',
      text: 'MAYDAY (Distress): Used when there is immediate danger to the aircraft or persons on board requiring immediate assistance. Examples include engine failure, fire, or structural damage.',
    },
    {
      type: 'paragraph',
      text: 'PAN PAN (Urgency): Used for urgent situations concerning the safety of the aircraft or persons, but not requiring immediate assistance. Examples include low fuel, navigational uncertainty, or passenger medical issues.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'MAYDAY takes absolute priority over all other transmissions. All stations must maintain radio silence unless instructed otherwise.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Standard Distress Call Format',
    },
    {
      type: 'paragraph',
      text: 'When making a MAYDAY call, follow this format:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'MAYDAY MAYDAY MAYDAY (spoken three times)',
        'Station being called (or "all stations")',
        'Aircraft callsign (three times)',
        'Nature of emergency',
        'Intentions',
        'Present position, altitude, and heading',
        'Pilot qualifications (if relevant)',
        'Number of persons on board',
        'Any other useful information',
      ],
    },
    {
      type: 'paragraph',
      text: 'Example: "MAYDAY MAYDAY MAYDAY, London Information, G-ABCD G-ABCD G-ABCD, engine failure, forced landing intended, 5 miles north of Oxford, 2,000 feet descending, heading 360, student pilot, 2 POB, fuel for 30 minutes."',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Engine Failure After Takeoff',
    },
    {
      type: 'paragraph',
      text: 'Engine failure immediately after takeoff is one of the most critical emergencies. Your response depends on altitude and options:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Low altitude (below 500 feet AGL): Land straight ahead or within 30° either side - do NOT attempt to turn back',
        'Sufficient altitude: Consider whether you can safely glide back to the runway (requires significant altitude, usually 800+ feet)',
        'Establish best glide speed immediately',
        'Select suitable forced landing area',
        'Carry out emergency checks as time permits',
        'Secure aircraft before landing (fuel off, electrics off, harness tight)',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Attempting to turn back to the runway at low altitude is a common cause of fatal accidents. If in doubt, land ahead.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Search and Rescue (SAR)',
    },
    {
      type: 'paragraph',
      text: 'The UK has a well-established Search and Rescue service coordinated by HM Coastguard. SAR may be initiated when:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'An aircraft is overdue (fails to arrive or report within 30 minutes)',
        'A distress signal is received',
        'An aircraft is reported missing',
        'An ELT (Emergency Locator Transmitter) signal is detected',
      ],
    },
    {
      type: 'paragraph',
      text: 'To assist SAR operations, pilots should file flight plans for cross-country flights and report to their destination. If you witness an accident, note the position accurately and report immediately on 121.5 MHz.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Transponder Emergency Codes',
    },
    {
      type: 'paragraph',
      text: 'The transponder should be set to specific codes in emergency situations:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '7700 - Emergency (general)',
        '7600 - Radio failure',
        '7500 - Unlawful interference (hijack)',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid: "77 - falling from heaven, 76 - can\'t hear for tricks, 75 - man with knife"',
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
        'Always prioritize: Aviate, Navigate, Communicate',
        'Use ATSOCAS procedure for radio failure - squawk 7600',
        'MAYDAY for distress (immediate danger), PAN PAN for urgency',
        'Engine failure after takeoff: land ahead if below 500 feet AGL',
        'File flight plans and report arrival for SAR efficiency',
        'Know your transponder emergency codes: 7700, 7600, 7500',
      ],
    },
  ],
  keyPoints: [
    'Emergency priority: Aviate, Navigate, Communicate',
    'ATSOCAS for radio failure - squawk 7600, continue per flight plan',
    'MAYDAY = distress (immediate danger), PAN PAN = urgency',
    'Engine failure after takeoff: land ahead if below 500 feet, never turn back',
    'Emergency transponder codes: 7700 (emergency), 7600 (radio failure), 7500 (hijack)',
  ],
  practiceQuestions: [
    'op-001',
    'op-002',
    'op-003',
    'op-004',
    'op-005',
  ],
};
