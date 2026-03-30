import { Lesson } from '@/types';

export const radioNavigationBasics: Lesson = {
  id: 'radio-navigation-basics',
  topicId: 'radio-navigation',
  title: 'Radio Navigation Aids',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Radio Navigation',
    },
    {
      type: 'paragraph',
      text: 'While VFR navigation relies primarily on visual reference to the ground, radio navigation aids provide essential support for position fixing, tracking, and obtaining assistance from air traffic services. Understanding how these aids work, their capabilities, and their limitations is a core part of the PPL syllabus.',
    },
    {
      type: 'paragraph',
      text: 'This lesson covers the main radio navigation aids you will encounter in UK airspace: VOR, NDB/ADF, DME, GPS/GNSS, radar services, and VDF. Each has different principles of operation, accuracy, and limitations.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Radio navigation aids supplement visual navigation for VFR pilots. They do not replace the requirement to navigate visually and maintain situational awareness by reference to the ground.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'VOR - VHF Omnidirectional Range',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How VOR Works',
    },
    {
      type: 'paragraph',
      text: 'A VOR ground station transmits a VHF radio signal that allows an aircraft receiver to determine its magnetic bearing FROM the station. The station radiates 360 individual radials, one for each degree of the compass. The airborne equipment displays which radial the aircraft is on.',
    },
    {
      type: 'paragraph',
      text: 'VOR operates in the VHF frequency band (108.0 to 117.95 MHz). Because it uses VHF, it is limited to line-of-sight range, which depends on aircraft altitude. The higher you fly, the greater the reception range.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Radials, TO/FROM, and CDI',
    },
    {
      type: 'paragraph',
      text: 'A radial is a magnetic bearing FROM the VOR station. Radial 090 means the bearing 090 degrees magnetic from the station (i.e., you are east of the station). There are 360 radials, one for each degree.',
    },
    {
      type: 'paragraph',
      text: 'The VOR receiver in the aircraft has three key indications:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'OBS (Omni Bearing Selector): a rotatable knob to select a desired radial or course',
        'CDI (Course Deviation Indicator): a needle showing whether you are left or right of the selected course. Each dot represents approximately 2 degrees of deviation',
        'TO/FROM flag: indicates whether the selected OBS course would take you towards (TO) or away from (FROM) the station. It changes as you pass abeam the station',
      ],
    },
    {
      type: 'paragraph',
      text: 'To track TO a VOR, set the OBS to the desired inbound radial and fly to centre the CDI with a TO indication. To track FROM a VOR, set the OBS to the desired outbound radial and centre the CDI with a FROM indication.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Remember: a VOR CDI is NOT heading-sensitive. It shows deviation from the selected course regardless of the aircraft heading. If the CDI is to the right, the course is to the right - but only if you are heading in roughly the same direction as the OBS setting.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Identifying the VOR Station',
    },
    {
      type: 'paragraph',
      text: 'Every VOR station transmits a three-letter Morse code identifier (IDENT) on its frequency. You must always positively identify the VOR by listening to the Morse code before relying on the navigation information. If the IDENT is absent, the station may be under maintenance and the signal unreliable.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never navigate using a VOR without first positively identifying its Morse code ident. An unidentified station may be on test and transmitting inaccurate signals.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'NDB/ADF - Non-Directional Beacon and Automatic Direction Finder',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How NDB/ADF Works',
    },
    {
      type: 'paragraph',
      text: 'An NDB (Non-Directional Beacon) is a ground-based transmitter broadcasting on the LF/MF band (190 to 1750 kHz). Unlike a VOR, it does not transmit directional information. Instead, the aircraft\'s ADF (Automatic Direction Finder) receiver determines the relative bearing to the station.',
    },
    {
      type: 'paragraph',
      text: 'The ADF needle on the instrument panel points towards the NDB. It shows the relative bearing of the station measured clockwise from the aircraft\'s nose. If the needle points to 30 degrees on the ADF dial, the station is 30 degrees to the right of the nose.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'QDM, QDR, and Relative Bearing',
    },
    {
      type: 'paragraph',
      text: 'Several Q-codes are used with NDB/ADF navigation:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'QDM: Magnetic bearing TO the station (magnetic heading to steer, with zero wind, to fly to the station)',
        'QDR: Magnetic bearing FROM the station (the reciprocal of QDM)',
        'Relative Bearing (RB): the angle from the aircraft nose to the station, read from the ADF dial',
        'QDM = Magnetic Heading + Relative Bearing (if result exceeds 360, subtract 360)',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for Q-codes: QDM = "Q Direction Magnetic" - the magnetic heading to steer to reach the station. QDR = "Q Direction Radial" - the magnetic bearing from the station (like a VOR radial).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'NDB/ADF Limitations',
    },
    {
      type: 'paragraph',
      text: 'Because NDB uses low and medium frequency radio waves, it is subject to several significant errors:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Coastal refraction: the signal bends as it crosses a coastline at an angle, giving an inaccurate bearing',
        'Night effect: at night, sky waves reflected from the ionosphere interfere with the ground wave, causing the ADF needle to wander',
        'Thunderstorm effect: ADF needles are attracted towards cumulonimbus clouds and thunderstorm cells, giving false bearings',
        'Mountain effect: reflections from mountainous terrain can distort the signal',
        'Station interference: if two NDBs transmit on similar frequencies, the ADF may lock onto the wrong one',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'NDB/ADF bearings are significantly less accurate than VOR. Be aware of the limitations, particularly coastal refraction, night effect, and thunderstorm deviation. Always cross-check with other navigation sources.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'DME - Distance Measuring Equipment',
    },
    {
      type: 'paragraph',
      text: 'DME provides slant range distance from the aircraft to the ground station in nautical miles. The aircraft transmitter sends paired pulses to the DME ground station, which replies after a fixed delay. The airborne equipment measures the round-trip time and converts it to distance.',
    },
    {
      type: 'paragraph',
      text: 'DME operates in the UHF band and is often co-located with a VOR, providing both bearing and distance from a single facility. When co-located, the VOR and DME are paired on the same frequency selection.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'DME gives slant range, not ground distance. Directly overhead a station at 6,000 ft, the DME reads approximately 1 nm, not zero',
        'Slant range error is greatest when close to the station and at high altitude. It becomes negligible at distances greater than the altitude',
        'DME also provides groundspeed readout when tracking directly to or from the station',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: The slant range error is only significant when the aircraft is very close to the station. At distance, ground distance and slant range are virtually the same. As a rule of thumb, the error is negligible when distance exceeds altitude (in nm and thousands of feet).',
    },
    {
      type: 'heading',
      level: 1,
      text: 'GPS/GNSS',
    },
    {
      type: 'paragraph',
      text: 'The Global Positioning System (GPS), part of the broader Global Navigation Satellite System (GNSS) family, provides highly accurate three-dimensional position and time information using signals from orbiting satellites. Modern handheld and panel-mounted GPS units are widely used by VFR pilots.',
    },
    {
      type: 'paragraph',
      text: 'GPS provides latitude, longitude, altitude, groundspeed, and track information. It can calculate distance and bearing to waypoints, display a moving map, and alert the pilot to airspace boundaries.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'GPS Limitations for VFR Use',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'GPS is not an approved primary navigation aid for VFR flight under UK regulations. VFR pilots must navigate visually and use GPS only as a supplementary aid',
        'Signal interference or jamming can cause loss of GPS position without warning',
        'Database currency: the navigation database in the GPS must be kept up to date. Out-of-date waypoints and airspace boundaries are a significant risk',
        'Over-reliance on GPS can erode basic navigation skills and reduce situational awareness',
        'Battery failure or electrical failure in a portable GPS leaves you without the aid',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'GPS must not be used as the sole means of navigation for VFR flight. The CAA requires VFR pilots to maintain visual navigation at all times. GPS is a supplement, not a replacement.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Radar Services',
    },
    {
      type: 'paragraph',
      text: 'Air traffic radar provides surveillance and assistance to VFR pilots. Understanding the types of radar and how transponders work is important for obtaining radar services.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Primary and Secondary Radar',
    },
    {
      type: 'paragraph',
      text: 'Primary Surveillance Radar (PSR) detects aircraft by reflecting radio energy off the airframe. It does not require any equipment on the aircraft. However, it gives only range and bearing, with no altitude or identity information, and its detection depends on the radar cross-section of the aircraft.',
    },
    {
      type: 'paragraph',
      text: 'Secondary Surveillance Radar (SSR) works in conjunction with an aircraft transponder. The ground station sends an interrogation signal and the transponder replies with a coded pulse train. This provides identity (squawk code), altitude (if Mode C or Mode S), and other data.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Transponder Modes',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Mode A: transmits a four-digit squawk code for identification only',
        'Mode C: transmits the squawk code plus pressure altitude, enabling the controller to see the aircraft\'s flight level',
        'Mode S: enhanced mode that transmits aircraft identification, altitude, and can respond to individual interrogations. Required in much of UK airspace',
        'Conspicuity squawk 7000: the standard VFR squawk in the UK when not assigned a specific code',
        'Emergency squawks: 7700 (emergency), 7600 (communications failure), 7500 (unlawful interference)',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'In the UK, a Mode S transponder is required in all airspace above FL100, within Class A, B, and C airspace, and within transponder mandatory zones (TMZs). Many areas now require a transponder even in Class G airspace.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'VDF - VHF Direction Finding',
    },
    {
      type: 'paragraph',
      text: 'VDF (VHF Direction Finding) is a ground-based service that uses your normal VHF radio transmissions to determine your bearing from the station. The pilot does not need any special equipment beyond a standard VHF radio. VDF is available at many UK aerodromes and is particularly useful for position fixing and homing.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'VDF Q-Codes',
    },
    {
      type: 'paragraph',
      text: 'VDF bearings are communicated using Q-codes:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'QDM: Magnetic bearing TO the station (the heading to steer in zero wind to reach the station)',
        'QDR: Magnetic bearing FROM the station (reciprocal of QDM)',
        'QTE: True bearing FROM the station (QDR converted to True)',
        'QUJ: True bearing TO the station (reciprocal of QTE)',
      ],
    },
    {
      type: 'paragraph',
      text: 'VDF bearings are classified by accuracy: Class A (accurate to within plus or minus 2 degrees), Class B (plus or minus 5 degrees), and Class C (plus or minus 10 degrees). The controller will advise the class.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'To request a VDF bearing, transmit: "[Callsign], request QDM" (or QDR/QTE). The controller will ask you to transmit for a bearing and then give you the result with its accuracy class.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Using Radio Aids Together',
    },
    {
      type: 'paragraph',
      text: 'In practice, VFR pilots use a combination of radio aids and visual navigation to maintain situational awareness. A VOR radial combined with a DME distance gives a positive fix. Two VOR radials from different stations also give a fix where the radials intersect.',
    },
    {
      type: 'paragraph',
      text: 'GPS provides continuous position information but should always be cross-checked against the chart and visual landmarks. If radio aids and visual observations disagree, investigate the discrepancy before continuing.',
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
        'VOR provides magnetic bearing FROM the station via radials; CDI shows deviation from selected course',
        'NDB/ADF gives relative bearing to the station but is subject to coastal refraction, night effect, and thunderstorm deviation',
        'DME provides slant range distance in nautical miles; error is negligible except when very close to the station',
        'GPS is a supplementary aid for VFR; it must not be used as sole means of navigation',
        'Transponder squawk 7000 is the UK VFR conspicuity code; 7700 is emergency',
        'VDF provides QDM (magnetic TO), QDR (magnetic FROM), QTE (true FROM), and QUJ (true TO)',
      ],
    },
  ],
  keyPoints: [
    'VOR provides magnetic bearings FROM the station via 360 radials; identify the station by its Morse code ident before use',
    'NDB/ADF gives relative bearing to the station; subject to coastal refraction, night effect, and thunderstorm deviation',
    'DME gives slant range in nautical miles; the error is negligible at distance',
    'GPS is supplementary for VFR flight - not approved as sole means of navigation in the UK',
    'Transponder codes: 7000 (VFR conspicuity), 7700 (emergency), 7600 (comms failure), 7500 (unlawful interference)',
    'VDF Q-codes: QDM (magnetic TO), QDR (magnetic FROM), QTE (true FROM), QUJ (true TO)',
  ],
  practiceQuestions: [
    'nav-011',
  ],
};
