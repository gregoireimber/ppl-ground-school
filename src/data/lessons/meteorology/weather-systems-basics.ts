import { Lesson } from '@/types';

export const weatherSystemsBasics: Lesson = {
  id: 'weather-systems-basics',
  topicId: 'weather-systems',
  title: 'Weather Systems - Basics',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Weather Systems',
    },
    {
      type: 'paragraph',
      text: 'Understanding weather systems is fundamental to safe flight operations. Weather in the UK is dominated by the interaction of air masses, pressure systems, and fronts moving across the North Atlantic. As a pilot, you must be able to interpret weather information and make informed decisions.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Weather is the primary cause of VFR flight accidents. Always obtain a thorough weather briefing and never hesitate to cancel or divert if conditions are unsuitable.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Atmospheric Pressure',
    },
    {
      type: 'paragraph',
      text: 'Atmospheric pressure is the weight of air above a given point. It is measured in hectopascals (hPa) or millibars (mb), which are equivalent. Standard sea level pressure is 1013.25 hPa (29.92 inches of mercury).',
    },
    {
      type: 'paragraph',
      text: 'Pressure decreases with altitude at approximately 1 hPa per 30 feet near sea level. This pressure gradient drives weather systems and wind.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'QNH is the pressure setting to show aerodrome elevation when on the ground. QFE shows zero when on the aerodrome. Standard pressure is 1013 hPa.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'High and Low Pressure Systems',
    },
    {
      type: 'paragraph',
      text: 'Weather is dominated by the movement and interaction of high and low pressure systems:',
    },
    {
      type: 'paragraph',
      text: 'Anticyclones (Highs): Areas of descending air where pressure is higher than surroundings. In the Northern Hemisphere, wind circulates clockwise around highs. Anticyclones bring settled weather, clear skies, and light winds, but can cause radiation fog in winter and haze in summer.',
    },
    {
      type: 'paragraph',
      text: 'Depressions (Lows): Areas of rising air where pressure is lower than surroundings. Wind circulates anticlockwise around lows in the Northern Hemisphere. Depressions bring unsettled weather, cloud, precipitation, and strong winds. They are associated with frontal systems.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for UK: "Anticlockwise around Lows, Clockwise around Highs" - or simply remember wind flows from high to low pressure.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Fronts',
    },
    {
      type: 'paragraph',
      text: 'Fronts are boundaries between air masses of different temperatures and densities. The UK is frequently affected by frontal systems embedded in depressions:',
    },
    {
      type: 'paragraph',
      text: 'Warm Front: The leading edge of advancing warm air. As warm air rises over colder air ahead, it creates extensive layered cloud (stratus types) and steady precipitation over a wide area. Visibility deteriorates in rain and low cloud. Passage of a warm front brings rising temperature, veering wind, and improving visibility.',
    },
    {
      type: 'paragraph',
      text: 'Cold Front: The leading edge of advancing cold air. Cold air undercuts warm air, forcing it upward rapidly. This creates towering cumulus and cumulonimbus clouds with heavy showers, thunderstorms, and turbulence in a narrower band. Passage brings falling temperature, veering wind, improving visibility, and gusty conditions.',
    },
    {
      type: 'paragraph',
      text: 'Occluded Front: Where a cold front catches up with a warm front, lifting the warm air off the surface. Weather is a mixture of warm and cold front characteristics.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'METAR - Aviation Weather Reports',
    },
    {
      type: 'paragraph',
      text: 'METAR is a standard format for reporting observed weather at aerodromes. Example:',
    },
    {
      type: 'paragraph',
      text: 'EGLL 301350Z 25015KT 9999 FEW025 17/09 Q1015',
    },
    {
      type: 'paragraph',
      text: 'Breakdown:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'EGLL: ICAO aerodrome code (London Heathrow)',
        '301350Z: Day 30, time 1350 UTC (Z = Zulu time)',
        '25015KT: Wind 250° at 15 knots',
        '9999: Visibility 10 km or more',
        'FEW025: Few clouds at 2,500 feet',
        '17/09: Temperature 17°C, dew point 9°C',
        'Q1015: QNH pressure setting 1015 hPa',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Cloud amounts: FEW (1-2 oktas), SCT (3-4 oktas), BKN (5-7 oktas), OVC (8 oktas). Heights are in hundreds of feet above aerodrome level.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'TAF - Terminal Aerodrome Forecast',
    },
    {
      type: 'paragraph',
      text: 'TAF is a forecast for an aerodrome, typically valid for 9 or 24 hours. Format is similar to METAR but includes forecast periods and change groups:',
    },
    {
      type: 'paragraph',
      text: 'TEMPO: Temporary fluctuations lasting less than 1 hour each time, occurring during less than half the period.',
    },
    {
      type: 'paragraph',
      text: 'BECMG: Permanent change occurring during the specified period.',
    },
    {
      type: 'paragraph',
      text: 'FM: From - a rapid change (within 1 hour) at the specified time.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Visibility and Cloud Base',
    },
    {
      type: 'paragraph',
      text: 'VFR minima in Class G airspace below 3,000 feet AMSL are:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Visibility: 5 km (reduced to 1.5 km for helicopters and certain aircraft at 140 knots or less)',
        'Clear of cloud and in sight of surface',
        'Flight visibility maintained',
      ],
    },
    {
      type: 'paragraph',
      text: 'Visibility is reported in meters or kilometers. When visibility is 10 km or more, it is reported as "9999". Significant obscurations like fog (FG), mist (BR), rain (RA), or drizzle (DZ) are included in the METAR.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Reduced visibility and low cloud are VFR killers. Always plan alternate aerodromes and fuel reserves. If in doubt, stay on the ground.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Wind',
    },
    {
      type: 'paragraph',
      text: 'Wind is caused by air flowing from high to low pressure. Surface friction slows wind near the ground, causing it to back (turn anticlockwise) compared to wind aloft.',
    },
    {
      type: 'paragraph',
      text: 'Wind is reported as the direction it is blowing FROM in degrees magnetic (in METAR and ATIS), and speed in knots. Gusts are reported if variation is 10 knots or more.',
    },
    {
      type: 'paragraph',
      text: 'Crosswind limits vary by aircraft type. A common limit for training aircraft is 15 knots, but always check your POH (Pilot Operating Handbook).',
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
        'Highs bring settled weather, lows bring unsettled weather',
        'Wind circulates anticlockwise around lows, clockwise around highs (Northern Hemisphere)',
        'Warm fronts: extensive layered cloud and steady rain',
        'Cold fronts: towering cumulus, heavy showers, thunderstorms, narrow band',
        'METAR reports observed weather, TAF is forecast',
        'VFR minima: 5 km visibility, clear of cloud, in sight of surface (Class G <3000 ft)',
      ],
    },
  ],
  keyPoints: [
    'Anticyclones (highs) = settled weather, depressions (lows) = unsettled',
    'Wind: anticlockwise around lows, clockwise around highs in Northern Hemisphere',
    'Warm front = layered cloud + steady rain, cold front = Cu/Cb + showers/storms',
    'METAR = observed weather report, TAF = aerodrome forecast',
    'VFR minima (Class G <3000 ft): 5 km visibility, clear of cloud, in sight of surface',
  ],
  practiceQuestions: [
    'met-001',
    'met-002',
    'met-003',
    'met-004',
    'met-005',
  ],
};
