import { Lesson } from '@/types';

export const deadReckoningBasics: Lesson = {
  id: 'dead-reckoning-basics',
  topicId: 'dead-reckoning',
  title: 'Dead Reckoning Navigation - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Dead Reckoning',
    },
    {
      type: 'paragraph',
      text: 'Dead reckoning (DR) is the fundamental navigation technique where you calculate your position based on heading, speed, time, and wind correction. It is called "dead" reckoning from "deduced" reckoning - you deduce your position from known information.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'DR navigation forms the basis of all VFR navigation. Even with GPS, understanding DR is essential for situational awareness.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The 1:500,000 Aeronautical Chart',
    },
    {
      type: 'paragraph',
      text: 'UK VFR pilots primarily use 1:500,000 scale charts (CAA UK VFR charts). Key features include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Scale: 1 cm = 5 km (or 1 inch = 8 statute miles)',
        'Topographical features: contours, towns, railways, major roads',
        'Aeronautical information: airspace boundaries, navigation aids, aerodromes',
        'Magnetic variation shown with isogonals',
        'Elevation represented by layer tinting and spot heights',
      ],
    },
    {
      type: 'paragraph',
      text: 'Chart symbols you must know: controlled airspace (CTR, CTA, TMA), danger areas (D), restricted areas (R), military aerodrome traffic zones (MATZ), VRP (Visual Reporting Points), and navigation beacons (VOR, NDB).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Current UK magnetic variation is approximately 0° to -3° (2025). Always check the chart for the exact value in your area.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Navigation Computer (CRP-5)',
    },
    {
      type: 'paragraph',
      text: 'The CRP-5 or similar navigation computer is used for all flight planning calculations. It has two sides:',
    },
    {
      type: 'paragraph',
      text: 'Wind Side (Circular): Used to solve the wind triangle - finding heading and groundspeed when wind velocity is known, or calculating wind velocity from observed drift.',
    },
    {
      type: 'paragraph',
      text: 'Calculator Side: Used for speed/time/distance calculations, fuel consumption, conversions, and other arithmetic.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The Wind Triangle',
    },
    {
      type: 'paragraph',
      text: 'The wind triangle is the fundamental relationship between:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Track (TR): The desired path over the ground',
        'Heading (HDG): The direction the aircraft points',
        'Wind Velocity (W/V): Wind direction and speed',
        'True Airspeed (TAS): Speed through the air mass',
        'Groundspeed (GS): Speed over the ground',
        'Drift Angle: Difference between heading and track',
      ],
    },
    {
      type: 'paragraph',
      text: 'To maintain track in a crosswind, you must apply drift correction - heading into the wind. The CRP-5 wind side solves this triangle graphically.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Mental approximation: 1 in 60 rule. For every degree of drift, you will be 1 nm off track after 60 nm.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Measuring Track and Distance',
    },
    {
      type: 'paragraph',
      text: 'To measure track and distance on your chart:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Draw a line between departure and destination',
        'Measure the angle with a protractor at a meridian (line of longitude) - this gives True Track',
        'Apply magnetic variation to get Magnetic Track (East is Least, West is Best)',
        'Measure distance using the chart scale (latitude scale on side of chart)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Remember: on 1:500,000 charts, 1 minute of latitude = 1 nautical mile. Use the latitude scale for accurate distance measurement.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The PLOG (Pilot\'s Log)',
    },
    {
      type: 'paragraph',
      text: 'A navigation log (PLOG) is prepared before flight to organize all planning information. Standard columns include:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Leg: Waypoint names',
        'Track (°M): Magnetic track',
        'Distance (nm): Leg distance',
        'Heading (°M): Magnetic heading after wind correction',
        'TAS and GS: True airspeed and groundspeed',
        'Time: Leg time and cumulative time',
        'Fuel: Fuel required and cumulative fuel',
        'ETI and ATA: Estimated Time Interval and Actual Time of Arrival',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Always add a safety margin to fuel calculations. The rule of thumb is fuel for the flight plus 30-45 minutes reserve.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'In-Flight DR Navigation',
    },
    {
      type: 'paragraph',
      text: 'During flight, maintain DR navigation by:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Starting stopwatch at departure',
        'Noting time over each waypoint and comparing to PLOG',
        'Updating estimated time to destination based on actual groundspeed',
        'Drawing position lines on chart at regular intervals',
        'Visual confirmation of position using landmarks',
        'Adjusting heading if drift is observed',
      ],
    },
    {
      type: 'paragraph',
      text: 'If uncertain of position, use the "3 Cs" technique: Climb (for better view), Communicate (request assistance), and Confess (admit you are uncertain).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Types of Headings and Tracks',
    },
    {
      type: 'paragraph',
      text: 'It is essential to distinguish between True, Magnetic, and Compass values:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'True (T): Relative to True North (geographic pole)',
        'Magnetic (M): Relative to Magnetic North - apply variation to True',
        'Compass (C): What the compass shows - apply deviation to Magnetic',
      ],
    },
    {
      type: 'paragraph',
      text: 'Conversion: True → Magnetic (apply variation) → Compass (apply deviation). Use "East is Least, West is Best" for variation: easterly variation is subtracted from True to get Magnetic.',
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
        'Dead reckoning calculates position from heading, speed, time, and wind',
        '1:500,000 chart scale: 1 cm = 5 km, 1 minute latitude = 1 nm',
        'Wind triangle relates track, heading, drift, TAS, and groundspeed',
        'PLOG organizes all navigation data for pre-flight planning',
        'Conversions: True → apply variation → Magnetic → apply deviation → Compass',
        'In doubt: Climb, Communicate, Confess',
      ],
    },
  ],
  keyPoints: [
    'Dead reckoning: navigate by heading, speed, time, and wind correction',
    '1:500,000 chart: 1 cm = 5 km, latitude scale for distance (1 minute = 1 nm)',
    'Wind triangle: Track, Heading, Drift, TAS, Groundspeed',
    'PLOG (navigation log) organizes all planning data for each leg',
    'True → Magnetic (variation) → Compass (deviation). East is Least, West is Best',
  ],
  practiceQuestions: [
    'nav-001',
    'nav-002',
    'nav-003',
    'nav-004',
    'nav-005',
  ],
};
