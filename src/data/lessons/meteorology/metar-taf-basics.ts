import { Lesson } from '@/types';

export const metarTafBasics: Lesson = {
  id: 'metar-taf-basics',
  topicId: 'metar-taf',
  title: 'METAR & TAF Decoding',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to METARs and TAFs',
    },
    {
      type: 'paragraph',
      text: 'METARs and TAFs are the two most important coded weather reports you will use as a pilot. A METAR tells you what the weather is doing right now at a specific aerodrome. A TAF tells you what the weather is forecast to do at that aerodrome over the coming hours. Being able to decode these quickly and accurately is essential for flight planning and in-flight decision-making.',
    },
    {
      type: 'paragraph',
      text: 'Both formats use internationally standardised ICAO codes, so once you learn the format, you can read weather reports from aerodromes anywhere in the world.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'METARs are issued routinely every 30 minutes at major aerodromes (e.g., EGLL) or every 60 minutes at others. TAFs are typically issued four times per day with a validity of 9 hours (short TAF) or 24-30 hours (long TAF).',
    },
    {
      type: 'heading',
      level: 1,
      text: 'METAR Format in Detail',
    },
    {
      type: 'paragraph',
      text: 'A METAR follows a fixed order of groups. Let us work through a complete example:',
    },
    {
      type: 'paragraph',
      text: 'METAR EGBB 251520Z 24012G22KT 200V280 6000 RA SCT015 BKN025 12/10 Q1008 TEMPO 3000 +RA BKN010',
    },
    {
      type: 'heading',
      level: 2,
      text: 'ICAO Identifier',
    },
    {
      type: 'paragraph',
      text: 'The first group is the four-letter ICAO aerodrome identifier. In the example, EGBB is Birmingham Airport. All UK mainland aerodromes begin with "EG". The identifier tells you exactly which aerodrome the report refers to.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Date/Time Group',
    },
    {
      type: 'paragraph',
      text: '251520Z means the 25th day of the month at 1520 UTC (Zulu time). All times in METARs and TAFs are UTC, never local time. The "Z" suffix confirms Zulu time.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'In the UK, UTC equals GMT. During British Summer Time, local time is UTC plus one hour. Always work in UTC for aviation weather.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Wind Group',
    },
    {
      type: 'paragraph',
      text: '24012G22KT means wind from 240 degrees (magnetic in METAR), speed 12 knots, gusting to 22 knots. The direction is always given as the direction the wind blows FROM, in degrees true (rounded to the nearest 10 degrees). Speed is in knots (KT).',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Calm wind: 00000KT',
        'Variable wind direction (light winds): VRB03KT means variable at 3 knots',
        'Variable direction with stronger winds: 200V280 (as in the example) means the wind direction is varying between 200 and 280 degrees. This is an additional group following the main wind group',
        'Gusts: reported when the maximum speed exceeds the mean by 10 knots or more',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Important: wind direction in a METAR is given in degrees TRUE. Wind direction from ATIS or the tower controller is given in degrees MAGNETIC. This distinction matters for runway alignment.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Visibility',
    },
    {
      type: 'paragraph',
      text: 'Visibility is given in metres. In the example, 6000 means 6,000 metres (6 km). If visibility is 10 km or more, it is reported as 9999. Visibility below 5,000 metres is significant for VFR pilots, as it approaches or breaches VFR minima.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '9999: visibility 10 km or more',
        '6000: 6,000 metres (6 km)',
        '0800: 800 metres',
        '0200: 200 metres',
        'Directional visibility may be added (e.g., 2000NE means 2,000 m to the northeast)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Weather Phenomena',
    },
    {
      type: 'paragraph',
      text: 'Present weather is reported using standard two-letter codes, sometimes with intensity qualifiers and descriptors. In the example, RA means rain.',
    },
    {
      type: 'paragraph',
      text: 'Intensity qualifiers:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        '- (light): e.g., -RA = light rain',
        '(no prefix = moderate): e.g., RA = moderate rain',
        '+ (heavy): e.g., +RA = heavy rain',
        'VC (in the vicinity): e.g., VCTS = thunderstorm in the vicinity',
      ],
    },
    {
      type: 'paragraph',
      text: 'Common weather codes you must know:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'RA = rain, DZ = drizzle, SN = snow, SG = snow grains',
        'FG = fog (visibility below 1,000 m), BR = mist (visibility 1,000-5,000 m), HZ = haze',
        'TS = thunderstorm, GR = hail (diameter 5 mm+), GS = small hail or snow pellets',
        'SH = showers (e.g., SHRA = rain showers, SHSN = snow showers)',
        'FZ = freezing (e.g., FZRA = freezing rain, FZFG = freezing fog)',
        'BL = blowing (e.g., BLSN = blowing snow)',
        'MI = shallow (e.g., MIFG = shallow fog)',
        'BC = patches (e.g., BCFG = patches of fog)',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: FG (fog) means visibility below 1,000 m. BR (mist) means visibility 1,000 to 5,000 m. If visibility is 5,000 m or more, neither FG nor BR is reported. This distinction is frequently tested.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Cloud Groups',
    },
    {
      type: 'paragraph',
      text: 'Cloud is reported in one or more groups giving amount and height. Amount uses oktas (eighths of sky cover):',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'FEW: 1-2 oktas (few)',
        'SCT: 3-4 oktas (scattered)',
        'BKN: 5-7 oktas (broken)',
        'OVC: 8 oktas (overcast)',
        'NSC: nil significant cloud (no cloud below 5,000 ft or below the highest minimum sector altitude, whichever is greater, and no CB or TCU)',
      ],
    },
    {
      type: 'paragraph',
      text: 'The height is given in hundreds of feet above aerodrome level (AAL). In the example, SCT015 means scattered cloud at 1,500 feet AAL, and BKN025 means broken cloud at 2,500 feet AAL. Cloud type is only specified for CB (cumulonimbus) or TCU (towering cumulus), e.g., SCT040CB.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Cloud heights in METARs are above aerodrome level (AAL), not above mean sea level. To convert to altitude AMSL, add the aerodrome elevation. This is critical for terrain clearance planning.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Temperature and Dew Point',
    },
    {
      type: 'paragraph',
      text: '12/10 means temperature 12 degrees Celsius, dew point 10 degrees Celsius. When the two values are close together (small dew point spread), there is a high risk of fog or low cloud forming. Sub-zero temperatures are prefixed with "M" (e.g., M02/M04 means minus 2 and minus 4 degrees).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Rule of thumb: when temperature and dew point are within 2-3 degrees, expect fog or low cloud, especially with cooling temperatures overnight or at dawn.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'QNH',
    },
    {
      type: 'paragraph',
      text: 'Q1008 gives the QNH pressure setting of 1008 hPa. Setting QNH on the altimeter gives altitude above mean sea level. This is the subscale setting used for most VFR flight below the transition altitude.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Trend (NOSIG or Change Groups)',
    },
    {
      type: 'paragraph',
      text: 'Some METARs include a trend forecast at the end, valid for the two hours following the observation. NOSIG means no significant change expected. Otherwise, BECMG or TEMPO groups may appear, similar to TAF change groups.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'SPECI Reports',
    },
    {
      type: 'paragraph',
      text: 'A SPECI is a special METAR issued between routine reports when a significant change occurs. Triggers for a SPECI include wind shifts, visibility falling below or rising through significant values, the onset or cessation of significant weather (thunderstorm, freezing precipitation, fog), or cloud base falling below or rising through important thresholds.',
    },
    {
      type: 'paragraph',
      text: 'The format of a SPECI is identical to a METAR except the report type indicator reads SPECI instead of METAR.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'TAF Format',
    },
    {
      type: 'paragraph',
      text: 'A TAF (Terminal Aerodrome Forecast) uses the same weather codes as a METAR but describes forecast conditions over a period. Here is an example:',
    },
    {
      type: 'paragraph',
      text: 'TAF EGBB 251100Z 2512/2612 22010KT 9999 SCT030 BECMG 2518/2520 18015G25KT 7000 -RA BKN015 TEMPO 2520/2606 3000 RA BKN008 PROB30 TEMPO 2522/2604 1500 +RA BKN005',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Validity Period',
    },
    {
      type: 'paragraph',
      text: '2512/2612 means valid from the 25th at 1200 UTC to the 26th at 1200 UTC (a 24-hour TAF). Short TAFs are valid for 9 hours. The initial weather groups after the validity period describe the prevailing conditions expected at the start of the forecast.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Change Groups',
    },
    {
      type: 'paragraph',
      text: 'TAFs use three types of change group to describe how the weather is expected to evolve:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'BECMG (becoming): a permanent change expected during the specified period. For example, BECMG 2518/2520 means conditions are expected to change permanently between 1800 and 2000 UTC on the 25th',
        'TEMPO (temporary): temporary fluctuations expected, each lasting less than one hour and in total occurring during less than half of the specified period. After each TEMPO event, conditions revert to the previous prevailing forecast',
        'FM (from): a rapid, permanent change expected at the specified time (within one hour). For example, FM251800 means from 1800 UTC on the 25th',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'PROB Groups',
    },
    {
      type: 'paragraph',
      text: 'PROB30 and PROB40 indicate the probability of the following conditions occurring. PROB30 means a 30% probability, PROB40 means 40%. These are only used with TEMPO groups. Probabilities below 30% and above 50% are not used in TAFs (below 30% is considered too unlikely to mention; above 50% would be included as a BECMG or prevailing condition).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Exam tip: PROB30 TEMPO means there is a 30% chance of temporary conditions occurring. PROB is ONLY used with TEMPO, never on its own. You will never see PROB50 or PROB20 in a TAF.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Worked Example: Decoding a UK METAR',
    },
    {
      type: 'paragraph',
      text: 'Let us decode this METAR step by step:',
    },
    {
      type: 'paragraph',
      text: 'METAR EGGD 141150Z 19008KT 160V220 8000 -RA FEW010 SCT018 BKN025 14/12 Q1002',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'EGGD: Bristol Airport',
        '141150Z: 14th of the month, 1150 UTC',
        '19008KT: Wind from 190 degrees true at 8 knots, no gusts',
        '160V220: Wind direction varying between 160 and 220 degrees',
        '8000: Visibility 8,000 metres (8 km)',
        '-RA: Light rain',
        'FEW010: Few cloud at 1,000 ft AAL',
        'SCT018: Scattered cloud at 1,800 ft AAL',
        'BKN025: Broken cloud at 2,500 ft AAL',
        '14/12: Temperature 14 degrees C, dew point 12 degrees C (small spread - risk of lower cloud or fog)',
        'Q1002: QNH 1002 hPa',
      ],
    },
    {
      type: 'paragraph',
      text: 'Assessment: VFR flight is possible (visibility 8 km, cloud base 1,000 ft few) but conditions are marginal with light rain, high humidity, and multi-layered cloud. The small temperature-dew point spread suggests conditions could deteriorate.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Worked Example: Decoding a UK TAF',
    },
    {
      type: 'paragraph',
      text: 'TAF EGHI 141100Z 1412/1512 21012KT 9999 SCT035 TEMPO 1418/1506 6000 -RA SCT020 BECMG 1506/1509 25018G30KT',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'EGHI: Southampton Airport',
        '141100Z: Issued on the 14th at 1100 UTC',
        '1412/1512: Valid from 14th 1200 UTC to 15th 1200 UTC',
        'Prevailing: Wind 210 degrees at 12 knots, visibility 10 km+, scattered cloud at 3,500 ft',
        'TEMPO 1418/1506: Temporarily between 1800 on the 14th and 0600 on the 15th, visibility 6 km in light rain, scattered cloud at 2,000 ft',
        'BECMG 1506/1509: Becoming, between 0600 and 0900 on the 15th, wind 250 degrees at 18 gusting 30 knots (a permanent change)',
      ],
    },
    {
      type: 'heading',
      level: 1,
      text: 'Where to Get METARs and TAFs',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Met Office Aviation Briefing Service: available online for registered pilots',
        'NOTAM briefing system (AIS): provides METARs and TAFs as part of the pre-flight briefing pack',
        'Electronic Flight Bag (EFB) apps: SkyDemon, ForeFlight (UK edition), and similar apps show real-time METARs and TAFs',
        'Aerodrome ATIS: the Automatic Terminal Information Service broadcasts the current METAR on a dedicated frequency',
        'Telephone: the Met Office provides aviation weather by telephone for pilots who cannot access online services',
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'As pilot-in-command, you are required to obtain a weather briefing before every flight. This includes METARs and TAFs for your departure, destination, alternate aerodromes, and any en-route weather information.',
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
        'METAR = current observed weather; TAF = forecast weather for an aerodrome',
        'All times are UTC. Cloud heights are in hundreds of feet above aerodrome level (AAL)',
        'Wind in a METAR is in degrees true; wind from ATC/ATIS is in degrees magnetic',
        'FG = fog (vis below 1,000 m), BR = mist (vis 1,000-5,000 m)',
        'TAF change groups: BECMG (permanent change), TEMPO (temporary), FM (rapid change)',
        'PROB30/PROB40 TEMPO indicates probability of temporary conditions. PROB is only used with TEMPO',
      ],
    },
  ],
  keyPoints: [
    'METAR reports current observed weather at an aerodrome; TAF forecasts weather over 9 or 24 hours',
    'All times are UTC (Zulu). Cloud heights are in hundreds of feet above aerodrome level, not AMSL',
    'Wind direction in METARs is degrees TRUE; wind from ATC or ATIS is degrees MAGNETIC',
    'FG means fog with visibility below 1,000 m; BR means mist with visibility 1,000-5,000 m',
    'TAF change groups: BECMG (permanent), TEMPO (temporary, less than half the period), FM (rapid change)',
    'PROB30/PROB40 are only used with TEMPO groups; probabilities below 30% or above 50% are not coded',
  ],
  practiceQuestions: [
    'met-006',
    'met-007',
    'met-008',
    'met-009',
    'met-011',
    'met-014',
  ],
};
