import { Lesson } from '@/types';

export const flightInstrumentsBasics: Lesson = {
  id: 'flight-instruments-basics',
  topicId: 'flight-instruments',
  title: 'Flight Instruments',
  content: [
    {
      type: 'heading',
      level: 1,
      text: 'Introduction to Flight Instruments',
    },
    {
      type: 'paragraph',
      text: 'Flight instruments are your primary source of information about the aircraft\'s performance and attitude. Correct interpretation of these instruments is essential for safe flight, particularly when visual references are limited or misleading.',
    },
    {
      type: 'paragraph',
      text: 'Flight instruments fall into two main groups: those powered by the pitot-static system (airspeed indicator, altimeter, and vertical speed indicator) and those driven by gyroscopes (heading indicator, attitude indicator, and turn coordinator). Additionally, the magnetic compass provides a direct reference to magnetic north.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'PPL students must understand not only how to read each instrument, but also how it works and what errors or failures to expect. Instrument errors are frequently examined in the PPL ground exam.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'The Pitot-Static System',
    },
    {
      type: 'paragraph',
      text: 'The pitot-static system supplies differential air pressure to three key instruments. It consists of two pressure sources: the pitot tube, which senses total pressure (static plus dynamic), and the static port, which senses static pressure alone.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Pitot Tube',
    },
    {
      type: 'paragraph',
      text: 'The pitot tube is an open-ended tube facing directly into the airflow, usually mounted under the wing or on the fuselage nose. It captures total pressure (also called pitot pressure), which is the sum of static atmospheric pressure and dynamic pressure caused by the aircraft\'s forward motion.',
    },
    {
      type: 'paragraph',
      text: 'Only the airspeed indicator uses pitot pressure. If the pitot tube becomes blocked (e.g., by ice or insect nests), only the ASI is affected. The altimeter and VSI continue to function normally.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Static Port',
    },
    {
      type: 'paragraph',
      text: 'The static port is a flush opening on the side of the fuselage that senses ambient atmospheric pressure. All three pitot-static instruments use static pressure. Many aircraft have two static ports, one on each side of the fuselage, to cancel out any pressure errors caused by sideslip.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If the static port becomes blocked, all three pitot-static instruments will be affected. The altimeter will freeze at the altitude where the blockage occurred, the VSI will read zero, and the ASI will give increasingly inaccurate readings with altitude changes.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Alternate Static Source',
    },
    {
      type: 'paragraph',
      text: 'Many aircraft have an alternate static source that draws air from inside the cockpit. Because cockpit air is at slightly lower pressure (due to aerodynamic suction), the altimeter will read slightly high and the ASI will read slightly fast when the alternate source is selected. This is a useful backup if the primary static port ices over.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Airspeed Indicator (ASI)',
    },
    {
      type: 'paragraph',
      text: 'The ASI measures the difference between pitot (total) pressure and static pressure, which gives dynamic pressure. This dynamic pressure is a measure of how fast the aircraft is moving through the air. The ASI uses an aneroid capsule inside a sealed case: pitot pressure feeds into the capsule, and static pressure fills the case around it.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Types of Airspeed',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'IAS (Indicated Airspeed) - The speed shown on the ASI face with no corrections applied',
        'CAS (Calibrated Airspeed) - IAS corrected for instrument and position errors (from the POH correction table)',
        'TAS (True Airspeed) - CAS corrected for air density (altitude and temperature). TAS increases with altitude for the same IAS because the air is less dense',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'As a rough rule of thumb, TAS is approximately 2% higher than IAS for every 1,000 ft of altitude. At 5,000 ft, TAS is about 10% higher than IAS.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'ASI Colour Coding',
    },
    {
      type: 'paragraph',
      text: 'The ASI dial is marked with coloured arcs to show important speed ranges:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'White arc - Flap operating range. Lower end is Vs0 (stall speed in landing configuration), upper end is Vfe (maximum flap extended speed)',
        'Green arc - Normal operating range. Lower end is Vs1 (stall speed in clean configuration), upper end is Vno (maximum structural cruising speed)',
        'Yellow arc - Caution range (between Vno and Vne). Flight only in smooth air, no full or abrupt control deflections',
        'Red line - Vne (never exceed speed). Do not exceed this speed under any circumstances',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Memory aid for the arcs: "White for flaps, Green for go, Yellow for caution, Red means no." The key V-speeds to remember are Vs0, Vs1, Vfe, Vno, and Vne.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Altimeter',
    },
    {
      type: 'paragraph',
      text: 'The altimeter measures height by sensing changes in atmospheric static pressure. It uses a stack of aneroid capsules that expand and contract as pressure changes. Lower pressure means higher altitude. The instrument is calibrated to the ISA standard atmosphere.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Altimeter Subscale Settings',
    },
    {
      type: 'paragraph',
      text: 'Because atmospheric pressure varies from place to place and with weather systems, the altimeter has an adjustable subscale (the Kollsman window) to set a reference datum:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'QNH - Set the local mean sea level pressure. The altimeter reads altitude above mean sea level (AMSL). Used for flying below the transition altitude',
        'QFE - Set the airfield pressure. The altimeter reads height above that airfield (reads zero on the ground at that airfield). Commonly used in the circuit',
        'Standard Pressure Setting (1013.25 hPa) - The altimeter reads pressure altitude (also called flight level). Used above the transition altitude in the UK (3,000 ft on the Regional QNH)',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '"From high to low, look out below." When flying from a high-pressure area to a low-pressure area without resetting the subscale, the altimeter will over-read, meaning you are actually lower than indicated. This can be extremely dangerous in terrain or on approach.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Temperature Errors',
    },
    {
      type: 'paragraph',
      text: 'The altimeter is calibrated to ISA conditions (15 degrees C at sea level, lapse rate of 1.98 degrees C per 1,000 ft). In air colder than ISA, true altitude is lower than indicated altitude. In air warmer than ISA, true altitude is higher than indicated altitude.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: '"From warm to cold, look out below" - the same mnemonic applies to temperature. Cold air is denser and the pressure levels are compressed, so your true altitude is lower than what the altimeter shows.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Vertical Speed Indicator (VSI)',
    },
    {
      type: 'paragraph',
      text: 'The VSI shows the rate of climb or descent in feet per minute. It works by measuring the rate of change of static pressure through a calibrated leak. Inside, an aneroid capsule senses pressure directly, while the surrounding case receives static pressure through a small restrictor. The difference creates a pressure lag that moves the needle.',
    },
    {
      type: 'paragraph',
      text: 'The VSI has an inherent lag of 6 to 9 seconds. When you initiate a climb or descent, the instrument will take a few seconds to indicate the correct rate. Use it for trend information rather than as a primary reference.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Before flight, the VSI should read zero on the ground. If it does not, note the offset and apply it in flight. There is usually no way to adjust it mechanically.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Gyroscopic Instruments',
    },
    {
      type: 'paragraph',
      text: 'Gyroscopic instruments rely on the principle of rigidity in space: a spinning gyroscope resists changes to its orientation. Most light aircraft use either a vacuum pump or an electrical motor to spin the gyros at high RPM. The vacuum system typically drives the attitude indicator and heading indicator, while the turn coordinator is electrically driven.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Heading Indicator (Direction Indicator / DI)',
    },
    {
      type: 'paragraph',
      text: 'The heading indicator displays the aircraft\'s magnetic heading on a rotating compass card. Unlike the magnetic compass, it is stable in turbulence and not subject to turning or acceleration errors. However, it is not self-correcting and suffers from gyroscopic precession (drift).',
    },
    {
      type: 'paragraph',
      text: 'You must realign the DI with the magnetic compass approximately every 10 to 15 minutes during straight and level flight. Precession typically causes drift of up to 3 degrees per 15 minutes in a well-maintained instrument.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Attitude Indicator (Artificial Horizon)',
    },
    {
      type: 'paragraph',
      text: 'The attitude indicator shows the aircraft\'s pitch and bank attitude relative to the horizon. It uses an earth gyro that remains aligned with the true horizon, and a miniature aircraft symbol overlaid on it. It is the most useful instrument for maintaining control in poor visibility.',
    },
    {
      type: 'paragraph',
      text: 'The attitude indicator has limits on pitch and bank. If these limits are exceeded (typically 60 to 70 degrees of bank or 20 to 30 degrees of pitch), the gyro may topple, giving unreliable indications until it re-erects.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Turn Coordinator and Slip Indicator',
    },
    {
      type: 'paragraph',
      text: 'The turn coordinator indicates both rate of turn and coordination of the turn. The miniature aircraft symbol tilts to show rate of turn, while the slip ball (inclinometer) shows whether the turn is coordinated, slipping, or skidding.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Ball centred - Coordinated turn (correct rudder balance)',
        'Ball toward the inside of the turn - Slipping (insufficient rudder, or too much bank)',
        'Ball toward the outside of the turn - Skidding (too much rudder, or insufficient bank)',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: '"Step on the ball" - apply rudder in the direction the ball is displaced to return it to the centre.',
    },
    {
      type: 'heading',
      level: 1,
      text: 'Magnetic Compass',
    },
    {
      type: 'paragraph',
      text: 'The magnetic compass is the only instrument that provides a direct reference to magnetic north. It uses a magnet assembly that aligns itself with the earth\'s magnetic field. Although simple and reliable, it is subject to several errors that make it difficult to use accurately in turning or accelerating flight.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Variation and Deviation',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Magnetic variation - The angle between true north and magnetic north. Varies by location (currently about 1 degree W in parts of the UK). Applied to convert between true and magnetic headings',
        'Compass deviation - Errors caused by the aircraft\'s own magnetic fields (engines, radios, metal structure). Shown on a deviation card near the compass. Varies by heading',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Turning and Acceleration Errors',
    },
    {
      type: 'paragraph',
      text: 'In the Northern Hemisphere, the magnetic compass is affected by dip, which causes two specific errors:',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Turning errors - When turning through north, the compass under-reads (lags behind). When turning through south, the compass over-reads (leads ahead). Remember: the compass is sluggish turning through north and lively through south',
        'Acceleration errors (ANDS) - Accelerate on an easterly or westerly heading and the compass swings toward North. Decelerate and it swings toward South. "Accelerate North, Decelerate South"',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'ANDS: Accelerate = North, Decelerate = South. This only applies on roughly easterly or westerly headings. On north and south headings, acceleration errors are negligible but turning errors are at their worst.',
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
        'The pitot tube measures total pressure (ASI only); the static port measures atmospheric pressure (ASI, altimeter, VSI)',
        'ASI colour arcs: white (flap range), green (normal), yellow (caution), red line (Vne)',
        'Altimeter settings: QNH for altitude AMSL, QFE for height above airfield, 1013.25 hPa for flight levels',
        '"From high to low, look out below" applies to both pressure and temperature changes',
        'The DI must be realigned with the magnetic compass every 10-15 minutes due to precession',
        'ANDS: Accelerate North, Decelerate South - compass acceleration errors on easterly/westerly headings',
      ],
    },
  ],
  keyPoints: [
    'Pitot tube blockage affects only the ASI; static port blockage affects ASI, altimeter, and VSI',
    'IAS to TAS: approximately 2% increase per 1,000 ft altitude',
    'Altimeter subscales: QNH = altitude AMSL, QFE = height above airfield, 1013.25 hPa = pressure altitude',
    'From high to low pressure (or warm to cold air), the altimeter over-reads - true altitude is lower than indicated',
    'Gyroscopic instruments: DI and AI typically vacuum-driven, turn coordinator electrically driven',
    'ANDS: Accelerate North, Decelerate South for compass acceleration errors',
  ],
  practiceQuestions: [
    'agk-006',
    'agk-007',
    'agk-008',
    'agk-009',
    'agk-010',
  ],
};
